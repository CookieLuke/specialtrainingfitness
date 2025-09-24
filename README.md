# Special Forces Training - Sito Web

Sito web moderno e professionale per l'app Special Forces Training, progettato per la preparazione ai test delle forze speciali italiane.

## Caratteristiche

- **Design Moderno**: Layout responsive e professionale con palette di colori militari
- **Ottimizzazione SEO**: Meta tag, sitemap e struttura ottimizzata per i motori di ricerca
- **Pagine Complete**: Homepage, Blog, Mailing List, Privacy Policy
- **Funzionalità Interattive**: Form di contatto, iscrizione newsletter, animazioni fluide
- **Mobile-First**: Completamente responsive per tutti i dispositivi
- **Performance**: Codice ottimizzato per velocità di caricamento

## Struttura del Progetto

```
special-forces-training-site/
├── index.html              # Homepage principale
├── blog.html               # Pagina del blog
├── mailinglist.html        # Pagina iscrizione mailing list
├── privacy.html            # Privacy Policy
├── styles.css              # Stili CSS principali
├── script.js               # JavaScript per interattività
├── robots.txt              # File per i crawler dei motori di ricerca
├── sitemap.xml             # Sitemap per SEO
├── logo.png                # Logo dell'app
├── hero-image.jpg          # Immagine principale
├── military-training.jpg   # Immagine allenamento militare
├── workout-image.jpg       # Immagine workout
└── README.md               # Questo file
```

## Installazione

### Opzione 1: Hosting Statico (Consigliato)

1. Carica tutti i file nella directory root del tuo server web
2. Assicurati che `index.html` sia il file principale
3. Configura il server per servire file statici
4. Il sito sarà accessibile immediatamente

### Opzione 2: Server Locale per Test

1. Apri un terminale nella directory del progetto
2. Avvia un server HTTP locale:
   ```bash
   # Con Python 3
   python3 -m http.server 8000
   
   # Con Node.js (se hai http-server installato)
   npx http-server
   ```
3. Apri il browser e vai su `http://localhost:8000`

## Configurazione

### Personalizzazione del Contenuto

1. **Logo**: Sostituisci `logo.png` con il tuo logo (dimensioni consigliate: 200x200px)
2. **Immagini**: Sostituisci le immagini esistenti mantenendo i nomi dei file
3. **Contenuti**: Modifica i testi direttamente nei file HTML
4. **Colori**: Personalizza la palette di colori nel file `styles.css`

### Integrazione Video Vimeo

Per integrare il video Vimeo, sostituisci il placeholder nella sezione video di `index.html`:

```html
<!-- Sostituisci questo -->
<div class="video-placeholder">
    <i class="fas fa-play-circle"></i>
    <p>Video di presentazione dell'app</p>
    <small>Il video Vimeo sarà integrato qui</small>
</div>

<!-- Con questo -->
<iframe src="https://player.vimeo.com/video/TUO_VIDEO_ID" 
        width="800" height="450" frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
</iframe>
```

### Configurazione Form

I form attualmente mostrano messaggi di conferma simulati. Per integrarli con un servizio di email:

1. **Mailchimp**: Sostituisci l'action del form con l'URL di Mailchimp
2. **EmailJS**: Integra EmailJS per l'invio email lato client
3. **Backend personalizzato**: Crea un endpoint per gestire i form

### SEO e Analytics

1. **Google Analytics**: Aggiungi il codice di tracking prima del tag `</head>`
2. **Google Search Console**: Verifica la proprietà del sito
3. **Meta tag**: Personalizza i meta tag Open Graph e Twitter Card

## Funzionalità Principali

### Homepage
- Sezione hero con call-to-action
- Presentazione dei programmi di allenamento
- Dettagli dell'app e funzionalità
- Sezione video (placeholder per Vimeo)
- Form di contatto

### Blog
- Layout a griglia per gli articoli
- Articolo in evidenza
- Categorie e meta informazioni
- Call-to-action per newsletter

### Mailing List
- Form di iscrizione completo
- Anteprima del PDF gratuito
- Sezione benefici dell'iscrizione
- Validazione lato client

### Privacy Policy
- Conforme al GDPR
- Struttura chiara e leggibile
- Informazioni complete sul trattamento dati

## Ottimizzazioni SEO Implementate

- Meta tag title e description ottimizzati
- Struttura HTML semantica
- Schema markup per rich snippets
- Sitemap XML
- File robots.txt
- URL canonici
- Meta tag Open Graph e Twitter Card
- Ottimizzazione immagini con alt text

## Browser Supportati

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- CSS e JavaScript ottimizzati
- Immagini compresse
- Font web ottimizzati
- Lazy loading per immagini
- Minificazione del codice (opzionale)

## Manutenzione

### Aggiornamenti Regolari
- Aggiorna i contenuti del blog regolarmente
- Mantieni aggiornate le informazioni di contatto
- Verifica periodicamente i link esterni

### Backup
- Effettua backup regolari di tutti i file
- Mantieni una copia locale del sito
- Documenta le modifiche personalizzate

## Supporto

Per assistenza tecnica o domande sul sito:
- Email: info@specialtrainingfitness.it
- Documentazione: Consulta questo README

## Licenza

Questo sito è stato sviluppato specificamente per Special Forces Training. Tutti i diritti riservati.

---

**Versione**: 1.0  
**Data**: Settembre 2025  
**Sviluppato per**: Special Forces Training

