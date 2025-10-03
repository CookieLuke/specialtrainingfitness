const axios = require("axios");
const querystring = require("querystring");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST")
    return { statusCode: 405, body: "Method not allowed" };

  try {
    const body = JSON.parse(event.body);
    
    // Handle contact form
    if (body.nome && body.telefono) {
      const { nome, email, telefono, messaggio, privacy } = body;
      
      if (!nome || !email || !privacy)
        return { statusCode: 400, body: JSON.stringify({ success: false, error: "Missing required fields" }) };

      // Honeypot check
      if (body.website && body.website.trim() !== '') {
        return { statusCode: 200, body: JSON.stringify({ success: true }) };
      }

      const form = querystring.stringify({
        from: `${nome} <postmaster@mg.specialtrainingfitness.it>`,
        to: "app@specialtrainingfitness.it",
        subject: `Nuovo contatto dal sito - ${nome}`,
        text: `Nome: ${nome}\nEmail: ${email}\nTelefono: ${telefono || '-'}\n\nMessaggio:\n${messaggio || 'Nessun messaggio'}`
      });

      await axios.post(
        "https://api.mailgun.net/v3/mg.specialtrainingfitness.it/messages",
        form,
        {
          auth: { username: "api", password: process.env.MAILGUN_KEY },
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }
      );

      return { 
        statusCode: 200, 
        body: JSON.stringify({ success: true, message: "Messaggio inviato con successo!" })
      };
    }
    
    // Handle newsletter subscription
    if (body.cognome) {
      const { nome, cognome, email, interesse, privacy } = body;
      
      if (!nome || !cognome || !email || !privacy)
        return { statusCode: 400, body: JSON.stringify({ success: false, error: "Missing required fields" }) };

      // Honeypot check
      if (body.website && body.website.trim() !== '') {
        return { statusCode: 200, body: JSON.stringify({ success: true }) };
      }

      // Send welcome email with PDF
      const welcomeForm = querystring.stringify({
        from: "Special Forces Training <app@specialtrainingfitness.it>",
        to: email,
        subject: "Benvenuto! La tua guida gratuita",
        html: `<p>Ciao ${nome}!</p>
               <p>Grazie per l'iscrizione alla newsletter di Special Forces Training.</p>
               <p>Puoi scaricare la guida gratuita qui: <a href="https://www.specialtrainingfitness.it/assets/guida.pdf">Scarica la Guida PDF</a></p>
               <p>Allenati forte!</p>
               <p>Team Special Forces Training</p>`
      });

      await axios.post(
        "https://api.mailgun.net/v3/mg.specialtrainingfitness.it/messages",
        welcomeForm,
        {
          auth: { username: "api", password: process.env.MAILGUN_KEY },
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }
      );

      return { 
        statusCode: 200, 
        body: JSON.stringify({ 
          success: true, 
          message: "Iscrizione completata! Controlla la tua email per scaricare la guida gratuita.",
          pdfUrl: "https://www.specialtrainingfitness.it/assets/guida.pdf"
        })
      };
    }

    return { statusCode: 400, body: JSON.stringify({ success: false, error: "Invalid request format" }) };

  } catch (e) {
    console.error('Mailgun error:', e);
    return { 
      statusCode: 502, 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, error: "Errore durante l'invio. Riprova più tardi." })
    };
  }
};
