const axios = require("axios");
const querystring = require("querystring");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST")
    return { statusCode: 405, body: "Method not allowed" };

  const { name, email, message } = JSON.parse(event.body);
  if (!name || !email || !message)
    return { statusCode: 400, body: "Missing fields" };

  const form = querystring.stringify({
    from: `${name} <postmaster@mg.specialtrainingfitness.it>`,
    to: "info@specialtrainingfitness.it",
    subject: `Contatto da ${name}`,
    text: `${message}\n\nDa: ${email}`
  });

  try {
    await axios.post(
      "https://api.mailgun.net/v3/mg.specialtrainingfitness.it/messages",
      form,
      {
        auth: { username: "api", password:process.env.MAILGUN_KEY },
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    );
    return { statusCode: 200, body: "OK" };
  } catch (e) {
    return { statusCode: 502, body: "Mailgun error" };
  }
};
