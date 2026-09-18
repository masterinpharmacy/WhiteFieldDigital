export const locales = ["nl", "en", "de", "me"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "nl";

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

type Package = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

type Dict = {
  meta: { title: string; description: string };
  nav: { work: string; packages: string; process: string; about: string; contact: string; cta: string };
  hero: { title: string; lead: string; primary: string; secondary: string; note: string };
  work: { title: string; lead: string; items: { name: string; slug: string; sector: string; what: string; url: string }[] };
  packages: { title: string; lead: string; items: Package[]; maintenance: { name: string; price: string; text: string } };
  process: { title: string; lead: string; steps: { title: string; text: string }[] };
  about: { title: string; paragraphs: string[]; stack: string };
  contact: {
    title: string; lead: string; name: string; email: string; company: string; message: string;
    send: string; sending: string; sent: string; error: string; alt: string;
  };
  footer: { line: string; langs: string };
};

const nl: Dict = {
  meta: {
    title: "White Field Digital | Websites en AI-oplossingen voor elke branche",
    description:
      "Websites, webapplicaties en AI-automatisering, gebouwd door een ondernemer die zelf dagelijks met zijn eigen bedrijven werkt. Snel opgeleverd, zonder bureaugedoe.",
  },
  nav: { work: "Werk", packages: "Pakketten", process: "Werkwijze", about: "Over", contact: "Contact", cta: "Plan een gesprek" },
  hero: {
    title: "Websites voor elke branche, gebouwd door iemand die zelf onderneemt.",
    lead:
      "Ik bouw websites, webapplicaties en AI-tools voor bedrijven die snel iets goeds willen. Geen bureau met tien lagen, maar één aanspreekpunt die begrijpt hoe een onderneming draait, omdat ik er zelf een paar run.",
    primary: "Bekijk de pakketten",
    secondary: "Bekijk mijn werk",
    note: "Live binnen een week bij een one-page site.",
  },
  work: {
    title: "Gebouwd voor mijn eigen bedrijven, en voor die van anderen.",
    lead: "Elke site hieronder draait in de praktijk. Geen concepten, maar werkende sites en applicaties met echte gebruikers.",
    items: [
      { name: "Apotheek Numansdorp", slug: "apotheeknumansdorp", sector: "Zorg", what: "Website met herhaalrecepten, openingstijden en teampagina", url: "https://apotheeknumansdorp.nl" },
      { name: "Pharmail", slug: "pharmail", sector: "SaaS", what: "Communicatieportaal tussen apotheken en zorgverleners", url: "https://pharmail.nl" },
      { name: "Pharmalytic", slug: "pharmalytic", sector: "SaaS", what: "Tool voor medicatiebeoordelingen", url: "https://pharmalytic.nl" },
      { name: "Apotrace", slug: "apotrace", sector: "Logistiek", what: "Track en trace voor recepten", url: "https://apotrace.nl" },
      { name: "Apotheekcijfers", slug: "apotheekcijfers", sector: "Data", what: "Dashboard met maandcijfers en groei", url: "https://apotheekcijfers.nl" },
      { name: "BMI Bewust", slug: "bmibewust", sector: "Gezondheid", what: "Website met online intake voor gewichtsbegeleiding", url: "https://bmibewust.nl" },
      { name: "Stoppen met Roken", slug: "hwsmr", sector: "Zorg", what: "Website voor stoppen-met-roken begeleiding", url: "https://hwsmr.nl" },
      { name: "PharmaClean", slug: "pharmaclean", sector: "Dienstverlening", what: "Website voor schoonmaak van apotheken en zorgpraktijken", url: "https://pharmaclean.nl" },
      { name: "Apotheek Zoetermeer", slug: "apotheekzoetermeer", sector: "Zorg", what: "Website voor een nieuwe apotheek", url: "https://apotheekzoetermeer.nl" },
    ],
  },
  packages: {
    title: "Drie pakketten, één vaste prijs.",
    lead: "Je weet vooraf wat het kost en wanneer het live staat. Meerwerk bespreken we voordat het gebeurt, niet erna.",
    items: [
      {
        name: "Start",
        price: "vanaf € 1.250",
        tagline: "Eén sterke pagina, snel online.",
        features: ["One-page website", "Ontwerp op maat, geen template", "Contactformulier en Google Maps", "Mobiel en snel", "Live binnen een week"],
        cta: "Kies Start",
      },
      {
        name: "Groei",
        price: "vanaf € 2.950",
        tagline: "Meerdere pagina's met ruimte om te groeien.",
        features: ["Tot 8 pagina's", "Nieuws of blog die je zelf bijhoudt", "Formulieren met e-mailnotificaties", "SEO-basis en Google Business", "Live binnen drie weken"],
        cta: "Kies Groei",
        highlight: true,
      },
      {
        name: "Slim",
        price: "op aanvraag",
        tagline: "Website plus AI en automatisering.",
        features: ["Alles uit Groei", "AI-chat die jouw vragen beantwoordt", "Online afspraken of intake", "Koppelingen met je bestaande systemen", "Automatisering van terugkerend werk"],
        cta: "Vraag Slim aan",
      },
    ],
    maintenance: {
      name: "Onderhoud",
      price: "vanaf € 49 per maand",
      text: "Hosting, updates, back-ups en kleine tekstwijzigingen. Je mailt, ik regel het.",
    },
  },
  process: {
    title: "Zo werkt het.",
    lead: "Kort en overzichtelijk. De meeste sites zijn in vier stappen klaar.",
    steps: [
      { title: "Kennismaken", text: "Een gesprek van een half uur over je bedrijf, je klanten en wat de site moet doen." },
      { title: "Voorstel", text: "Binnen twee werkdagen een vaste prijs, een opleverdatum en een eerste schets." },
      { title: "Bouwen", text: "Je ziet de site groeien via een preview-link en geeft tussentijds feedback." },
      { title: "Live", text: "Domein, hosting en e-mail geregeld. Daarna kun je kiezen voor onderhoud." },
    ],
  },
  about: {
    title: "Ondernemer eerst, bouwer daarna.",
    paragraphs: [
      "Ik ben Arnel Medjedovic. Naast apotheker en eigenaar van meerdere bedrijven in zorg en dienstverlening bouw ik al jaren mijn eigen websites en software. Alles wat ik voor mezelf heb gebouwd, kan ik ook voor jou bouwen.",
      "Het verschil met een bureau: ik weet wat een website moet opleveren, omdat ik zelf elke dag klanten, personeel en cijfers heb. Ik praat je niet vol met jargon en ik lever wat is afgesproken.",
    ],
    stack: "Gebouwd met Next.js, Tailwind, Supabase en Vercel. Snel, veilig en zonder maandelijkse licenties voor pluginbouwers.",
  },
  contact: {
    title: "Vertel wat je nodig hebt.",
    lead: "Je krijgt binnen één werkdag antwoord.",
    name: "Naam",
    email: "E-mailadres",
    company: "Bedrijf (optioneel)",
    message: "Waar kan ik je mee helpen?",
    send: "Verstuur bericht",
    sending: "Versturen...",
    sent: "Bericht verstuurd. Ik neem snel contact op.",
    error: "Versturen lukte niet. Mail me direct via info@whitefielddigital.nl.",
    alt: "Liever direct mailen?",
  },
  footer: { line: "White Field Digital, Numansdorp. Onderdeel van White Field Holding BV.", langs: "Taal" },
};

const en: Dict = {
  meta: {
    title: "White Field Digital | Websites and AI solutions for every industry",
    description:
      "Websites, web applications and AI automation, built by an entrepreneur who runs his own businesses every day. Delivered fast, without agency overhead.",
  },
  nav: { work: "Work", packages: "Packages", process: "Process", about: "About", contact: "Contact", cta: "Book a call" },
  hero: {
    title: "Websites for every industry, built by someone who runs businesses himself.",
    lead:
      "I build websites, web applications and AI tools for companies that want something good, fast. Not an agency with ten layers, but one point of contact who understands how a business works, because I run a few myself.",
    primary: "See the packages",
    secondary: "See my work",
    note: "Live within a week for a one-page site.",
  },
  work: {
    title: "Built for my own companies, and for others.",
    lead: "Every site below is in daily use. No concepts, but working sites and applications with real users.",
    items: [
      { name: "Apotheek Numansdorp", slug: "apotheeknumansdorp", sector: "Healthcare", what: "Pharmacy website with repeat prescriptions, hours and team page", url: "https://apotheeknumansdorp.nl" },
      { name: "Pharmail", slug: "pharmail", sector: "SaaS", what: "Communication portal between pharmacies and care providers", url: "https://pharmail.nl" },
      { name: "Pharmalytic", slug: "pharmalytic", sector: "SaaS", what: "Medication review tool", url: "https://pharmalytic.nl" },
      { name: "Apotrace", slug: "apotrace", sector: "Logistics", what: "Track and trace for prescriptions", url: "https://apotrace.nl" },
      { name: "Apotheekcijfers", slug: "apotheekcijfers", sector: "Data", what: "Dashboard with monthly figures and growth", url: "https://apotheekcijfers.nl" },
      { name: "BMI Bewust", slug: "bmibewust", sector: "Health", what: "Website with online intake for weight management", url: "https://bmibewust.nl" },
      { name: "Stoppen met Roken", slug: "hwsmr", sector: "Healthcare", what: "Website for stop-smoking support", url: "https://hwsmr.nl" },
      { name: "PharmaClean", slug: "pharmaclean", sector: "Services", what: "Website for cleaning of pharmacies and care practices", url: "https://pharmaclean.nl" },
      { name: "Apotheek Zoetermeer", slug: "apotheekzoetermeer", sector: "Healthcare", what: "Website for a new pharmacy", url: "https://apotheekzoetermeer.nl" },
    ],
  },
  packages: {
    title: "Three packages, one fixed price.",
    lead: "You know the cost and the launch date up front. Extra work is discussed before it happens, not after.",
    items: [
      {
        name: "Start",
        price: "from € 1,250",
        tagline: "One strong page, online fast.",
        features: ["One-page website", "Custom design, no template", "Contact form and Google Maps", "Mobile-first and fast", "Live within a week"],
        cta: "Choose Start",
      },
      {
        name: "Grow",
        price: "from € 2,950",
        tagline: "Multiple pages with room to grow.",
        features: ["Up to 8 pages", "News or blog you maintain yourself", "Forms with email notifications", "SEO basics and Google Business", "Live within three weeks"],
        cta: "Choose Grow",
        highlight: true,
      },
      {
        name: "Smart",
        price: "on request",
        tagline: "Website plus AI and automation.",
        features: ["Everything in Grow", "AI chat that answers your customers' questions", "Online booking or intake", "Integrations with your existing systems", "Automation of recurring work"],
        cta: "Request Smart",
      },
    ],
    maintenance: {
      name: "Maintenance",
      price: "from € 49 per month",
      text: "Hosting, updates, backups and small text changes. You email, I handle it.",
    },
  },
  process: {
    title: "How it works.",
    lead: "Short and clear. Most sites are done in four steps.",
    steps: [
      { title: "Intro call", text: "A thirty-minute conversation about your business, your customers and what the site needs to do." },
      { title: "Proposal", text: "Within two working days: a fixed price, a launch date and a first sketch." },
      { title: "Build", text: "You watch the site grow through a preview link and give feedback along the way." },
      { title: "Launch", text: "Domain, hosting and email taken care of. Afterwards you can opt for maintenance." },
    ],
  },
  about: {
    title: "Entrepreneur first, builder second.",
    paragraphs: [
      "I'm Arnel Medjedovic. Alongside my work as a pharmacist and owner of several companies in healthcare and services, I've been building my own websites and software for years. Everything I've built for myself, I can build for you.",
      "The difference with an agency: I know what a website has to deliver, because I deal with customers, staff and numbers every day. No jargon, and I deliver what we agreed on.",
    ],
    stack: "Built with Next.js, Tailwind, Supabase and Vercel. Fast, secure and without monthly plugin licences.",
  },
  contact: {
    title: "Tell me what you need.",
    lead: "You'll hear back within one working day.",
    name: "Name",
    email: "Email address",
    company: "Company (optional)",
    message: "What can I help you with?",
    send: "Send message",
    sending: "Sending...",
    sent: "Message sent. I'll be in touch shortly.",
    error: "Sending failed. Email me directly at info@whitefielddigital.nl.",
    alt: "Prefer to email directly?",
  },
  footer: { line: "White Field Digital, Numansdorp, the Netherlands. Part of White Field Holding BV.", langs: "Language" },
};

const de: Dict = {
  meta: {
    title: "White Field Digital | Websites und KI-Lösungen für jede Branche",
    description:
      "Websites, Webanwendungen und KI-Automatisierung, gebaut von einem Unternehmer, der täglich mit seinen eigenen Firmen arbeitet. Schnell geliefert, ohne Agentur-Overhead.",
  },
  nav: { work: "Arbeit", packages: "Pakete", process: "Ablauf", about: "Über mich", contact: "Kontakt", cta: "Gespräch vereinbaren" },
  hero: {
    title: "Websites für jede Branche, gebaut von jemandem, der selbst Unternehmer ist.",
    lead:
      "Ich baue Websites, Webanwendungen und KI-Tools für Unternehmen, die schnell etwas Gutes wollen. Keine Agentur mit zehn Ebenen, sondern ein Ansprechpartner, der versteht, wie ein Betrieb läuft, weil ich selbst mehrere führe.",
    primary: "Pakete ansehen",
    secondary: "Arbeit ansehen",
    note: "Eine One-Page-Website ist innerhalb einer Woche online.",
  },
  work: {
    title: "Gebaut für meine eigenen Unternehmen, und für andere.",
    lead: "Jede Website unten ist täglich im Einsatz. Keine Konzepte, sondern funktionierende Seiten und Anwendungen mit echten Nutzern.",
    items: [
      { name: "Apotheek Numansdorp", slug: "apotheeknumansdorp", sector: "Gesundheit", what: "Apotheken-Website mit Folgerezepten, Öffnungszeiten und Teamseite", url: "https://apotheeknumansdorp.nl" },
      { name: "Pharmail", slug: "pharmail", sector: "SaaS", what: "Kommunikationsportal zwischen Apotheken und Leistungserbringern", url: "https://pharmail.nl" },
      { name: "Pharmalytic", slug: "pharmalytic", sector: "SaaS", what: "Tool für Medikationsanalysen", url: "https://pharmalytic.nl" },
      { name: "Apotrace", slug: "apotrace", sector: "Logistik", what: "Track und Trace für Rezepte", url: "https://apotrace.nl" },
      { name: "Apotheekcijfers", slug: "apotheekcijfers", sector: "Daten", what: "Dashboard mit Monatszahlen und Wachstum", url: "https://apotheekcijfers.nl" },
      { name: "BMI Bewust", slug: "bmibewust", sector: "Gesundheit", what: "Website mit Online-Aufnahme für Gewichtsbegleitung", url: "https://bmibewust.nl" },
      { name: "Stoppen met Roken", slug: "hwsmr", sector: "Gesundheit", what: "Website für Raucherentwöhnung", url: "https://hwsmr.nl" },
      { name: "PharmaClean", slug: "pharmaclean", sector: "Dienstleistung", what: "Website für die Reinigung von Apotheken und Praxen", url: "https://pharmaclean.nl" },
      { name: "Apotheek Zoetermeer", slug: "apotheekzoetermeer", sector: "Gesundheit", what: "Website für eine neue Apotheke", url: "https://apotheekzoetermeer.nl" },
    ],
  },
  packages: {
    title: "Drei Pakete, ein Festpreis.",
    lead: "Sie wissen vorab, was es kostet und wann es online geht. Mehrarbeit besprechen wir vorher, nicht hinterher.",
    items: [
      {
        name: "Start",
        price: "ab € 1.250",
        tagline: "Eine starke Seite, schnell online.",
        features: ["One-Page-Website", "Individuelles Design, keine Vorlage", "Kontaktformular und Google Maps", "Mobil und schnell", "Online innerhalb einer Woche"],
        cta: "Start wählen",
      },
      {
        name: "Wachstum",
        price: "ab € 2.950",
        tagline: "Mehrere Seiten mit Raum zum Wachsen.",
        features: ["Bis zu 8 Seiten", "News oder Blog, den Sie selbst pflegen", "Formulare mit E-Mail-Benachrichtigung", "SEO-Basis und Google Business", "Online innerhalb von drei Wochen"],
        cta: "Wachstum wählen",
        highlight: true,
      },
      {
        name: "Smart",
        price: "auf Anfrage",
        tagline: "Website plus KI und Automatisierung.",
        features: ["Alles aus Wachstum", "KI-Chat, der die Fragen Ihrer Kunden beantwortet", "Online-Terminbuchung oder Aufnahme", "Anbindung an Ihre bestehenden Systeme", "Automatisierung wiederkehrender Arbeit"],
        cta: "Smart anfragen",
      },
    ],
    maintenance: {
      name: "Wartung",
      price: "ab € 49 pro Monat",
      text: "Hosting, Updates, Backups und kleine Textänderungen. Sie schreiben eine Mail, ich erledige es.",
    },
  },
  process: {
    title: "So läuft es ab.",
    lead: "Kurz und übersichtlich. Die meisten Websites sind in vier Schritten fertig.",
    steps: [
      { title: "Kennenlernen", text: "Ein halbstündiges Gespräch über Ihr Unternehmen, Ihre Kunden und was die Website leisten soll." },
      { title: "Angebot", text: "Innerhalb von zwei Werktagen ein Festpreis, ein Liefertermin und ein erster Entwurf." },
      { title: "Bauen", text: "Sie sehen die Website über einen Vorschau-Link wachsen und geben zwischendurch Feedback." },
      { title: "Online", text: "Domain, Hosting und E-Mail sind geregelt. Danach können Sie Wartung dazubuchen." },
    ],
  },
  about: {
    title: "Zuerst Unternehmer, dann Entwickler.",
    paragraphs: [
      "Ich bin Arnel Medjedovic. Neben meiner Arbeit als Apotheker und Inhaber mehrerer Unternehmen in Gesundheit und Dienstleistung baue ich seit Jahren meine eigenen Websites und Software. Alles, was ich für mich selbst gebaut habe, kann ich auch für Sie bauen.",
      "Der Unterschied zu einer Agentur: Ich weiß, was eine Website bringen muss, weil ich täglich mit Kunden, Personal und Zahlen zu tun habe. Kein Fachjargon, und ich liefere, was vereinbart ist.",
    ],
    stack: "Gebaut mit Next.js, Tailwind, Supabase und Vercel. Schnell, sicher und ohne monatliche Plugin-Lizenzen.",
  },
  contact: {
    title: "Sagen Sie mir, was Sie brauchen.",
    lead: "Sie erhalten innerhalb eines Werktags eine Antwort.",
    name: "Name",
    email: "E-Mail-Adresse",
    company: "Unternehmen (optional)",
    message: "Wobei kann ich Ihnen helfen?",
    send: "Nachricht senden",
    sending: "Wird gesendet...",
    sent: "Nachricht gesendet. Ich melde mich in Kürze.",
    error: "Senden fehlgeschlagen. Schreiben Sie mir direkt an info@whitefielddigital.nl.",
    alt: "Lieber direkt mailen?",
  },
  footer: { line: "White Field Digital, Numansdorp, Niederlande. Teil der White Field Holding BV.", langs: "Sprache" },
};


const me: Dict = {
  meta: {
    title: "White Field Digital | Web sajtovi i AI rješenja za svaku branšu",
    description:
      "Web sajtovi, web aplikacije i AI automatizacija, koje pravi preduzetnik koji svakodnevno vodi sopstvene firme. Brza isporuka, bez agencijskih troškova.",
  },
  nav: { work: "Radovi", packages: "Paketi", process: "Proces", about: "O meni", contact: "Kontakt", cta: "Zakažite razgovor" },
  hero: {
    title: "Web sajtovi za svaku branšu, koje pravi neko ko i sam vodi firme.",
    lead:
      "Pravim web sajtove, web aplikacije i AI alate za firme koje žele nešto dobro, i to brzo. Ne agencija sa deset nivoa, već jedan sagovornik koji razumije kako posao funkcioniše, jer i sam vodim nekoliko firmi.",
    primary: "Pogledajte pakete",
    secondary: "Pogledajte radove",
    note: "One-page sajt je online u roku od nedjelju dana.",
  },
  work: {
    title: "Napravljeno za moje firme, i za tuđe.",
    lead: "Svaki sajt ispod je u svakodnevnoj upotrebi. Nijesu koncepti, već sajtovi i aplikacije koji rade sa pravim korisnicima.",
    items: [
      { name: "Apotheek Numansdorp", slug: "apotheeknumansdorp", sector: "Zdravstvo", what: "Sajt apoteke sa ponovnim receptima, radnim vremenom i timom", url: "https://apotheeknumansdorp.nl" },
      { name: "Pharmail", slug: "pharmail", sector: "SaaS", what: "Portal za komunikaciju između apoteka i zdravstvenih radnika", url: "https://pharmail.nl" },
      { name: "Pharmalytic", slug: "pharmalytic", sector: "SaaS", what: "Alat za pregled terapije", url: "https://pharmalytic.nl" },
      { name: "Apotrace", slug: "apotrace", sector: "Logistika", what: "Praćenje recepata", url: "https://apotrace.nl" },
      { name: "Apotheekcijfers", slug: "apotheekcijfers", sector: "Podaci", what: "Dashboard sa mjesečnim brojkama i rastom", url: "https://apotheekcijfers.nl" },
      { name: "BMI Bewust", slug: "bmibewust", sector: "Zdravlje", what: "Sajt sa online prijavom za program regulacije težine", url: "https://bmibewust.nl" },
      { name: "Stoppen met Roken", slug: "hwsmr", sector: "Zdravstvo", what: "Sajt za podršku pri prestanku pušenja", url: "https://hwsmr.nl" },
      { name: "PharmaClean", slug: "pharmaclean", sector: "Usluge", what: "Sajt za čišćenje apoteka i ordinacija", url: "https://pharmaclean.nl" },
      { name: "Apotheek Zoetermeer", slug: "apotheekzoetermeer", sector: "Zdravstvo", what: "Sajt za novu apoteku", url: "https://apotheekzoetermeer.nl" },
    ],
  },
  packages: {
    title: "Tri paketa, jedna fiksna cijena.",
    lead: "Unaprijed znate koliko košta i kada ide online. Dodatni rad dogovaramo prije, ne poslije.",
    items: [
      {
        name: "Start",
        price: "od 1.250 €",
        tagline: "Jedna jaka stranica, brzo online.",
        features: ["One-page sajt", "Dizajn po mjeri, bez šablona", "Kontakt forma i Google Maps", "Brz i prilagođen mobilnim uređajima", "Online u roku od nedjelju dana"],
        cta: "Izaberite Start",
      },
      {
        name: "Rast",
        price: "od 2.950 €",
        tagline: "Više stranica, sa prostorom za rast.",
        features: ["Do 8 stranica", "Vijesti ili blog koji sami uređujete", "Forme sa e-mail obavještenjima", "SEO osnove i Google Business", "Online u roku od tri nedjelje"],
        cta: "Izaberite Rast",
        highlight: true,
      },
      {
        name: "Pametni",
        price: "na upit",
        tagline: "Sajt plus AI i automatizacija.",
        features: ["Sve iz paketa Rast", "AI chat koji odgovara na pitanja vaših klijenata", "Online zakazivanje ili prijava", "Povezivanje sa vašim postojećim sistemima", "Automatizacija posla koji se ponavlja"],
        cta: "Zatražite Pametni",
      },
    ],
    maintenance: {
      name: "Održavanje",
      price: "od 49 € mjesečno",
      text: "Hosting, ažuriranja, backup i male izmjene teksta. Vi pošaljete mail, ja riješim.",
    },
  },
  process: {
    title: "Kako to ide.",
    lead: "Kratko i jasno. Većina sajtova je gotova u četiri koraka.",
    steps: [
      { title: "Upoznavanje", text: "Razgovor od pola sata o vašoj firmi, klijentima i tome šta sajt treba da radi." },
      { title: "Ponuda", text: "U roku od dva radna dana: fiksna cijena, datum isporuke i prva skica." },
      { title: "Izrada", text: "Pratite kako sajt raste preko preview linka i dajete povratne informacije usput." },
      { title: "Online", text: "Domen, hosting i e-mail su sređeni. Nakon toga možete izabrati održavanje." },
    ],
  },
  about: {
    title: "Prvo preduzetnik, pa programer.",
    paragraphs: [
      "Ja sam Arnel Međedović. Pored posla farmaceuta i vlasnika više firmi u zdravstvu i uslugama, godinama pravim sopstvene sajtove i softver. Sve što sam napravio za sebe, mogu da napravim i za vas.",
      "Razlika u odnosu na agenciju: znam šta sajt mora da donese, jer se svaki dan bavim klijentima, zaposlenima i brojkama. Bez žargona, i isporučujem ono što je dogovoreno.",
    ],
    stack: "Napravljeno sa Next.js, Tailwind, Supabase i Vercel. Brzo, bezbjedno i bez mjesečnih licenci za plugine.",
  },
  contact: {
    title: "Recite mi šta vam treba.",
    lead: "Odgovor dobijate u roku od jednog radnog dana.",
    name: "Ime",
    email: "E-mail adresa",
    company: "Firma (opciono)",
    message: "Kako mogu da vam pomognem?",
    send: "Pošaljite poruku",
    sending: "Slanje...",
    sent: "Poruka je poslata. Javljam se uskoro.",
    error: "Slanje nije uspjelo. Pišite mi direktno na info@whitefielddigital.nl.",
    alt: "Radije direktno mailom?",
  },
  footer: { line: "White Field Digital, Numansdorp, Holandija. Dio White Field Holding BV.", langs: "Jezik" },
};

export const dictionaries: Record<Locale, Dict> = { nl, en, de, me };
export type { Dict };
