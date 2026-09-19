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
  nav: { services: string; work: string; packages: string; process: string; faq: string; about: string; contact: string; cta: string };
  hero: { title: string; lead: string; primary: string; secondary: string; note: string };
  work: { title: string; lead: string; items: { name: string; slug: string; sector: string; what: string; url: string }[] };
  packages: { title: string; lead: string; items: Package[]; maintenance: { name: string; price: string; text: string } };
  process: { title: string; lead: string; steps: { title: string; text: string }[] };
  services: { title: string; lead: string; items: { title: string; text: string; examples: string }[] };
  principles: { title: string; lead: string; items: { title: string; text: string }[] };
  faq: { title: string; items: { q: string; a: string }[] };
  about: { title: string; paragraphs: string[]; stack: string };
  contact: {
    title: string; lead: string; name: string; email: string; company: string; message: string;
    send: string; sending: string; sent: string; error: string; alt: string;
  };
  footer: { line: string; langs: string };
};

const nl: Dict = {
  meta: {
    title: "White Field Digital | Websites, webapplicaties en AI-oplossingen",
    description:
      "White Field Digital ontwerpt en bouwt websites, webapplicaties en AI-oplossingen voor bedrijven in elke branche. Vaste prijzen, korte doorlooptijden en één aanspreekpunt.",
  },
  nav: { services: "Diensten", work: "Werk", packages: "Pakketten", process: "Werkwijze", faq: "Vragen", about: "Over", contact: "Contact", cta: "Neem contact op" },
  hero: {
    title: "Websites en digitale oplossingen voor bedrijven in elke branche.",
    lead:
      "White Field Digital ontwerpt en bouwt websites, webapplicaties en AI-toepassingen. Met vaste prijzen, korte doorlooptijden en één aanspreekpunt van eerste gesprek tot oplevering.",
    primary: "Bekijk de pakketten",
    secondary: "Bekijk het werk",
    note: "Een one-page website staat binnen een week online.",
  },
  work: {
    title: "Een selectie van opgeleverd werk.",
    lead: "Websites en applicaties die dagelijks in gebruik zijn, van zorg en dienstverlening tot software voor de apotheekbranche.",
    items: [
      { name: "Apotheek Numansdorp", slug: "apotheeknumansdorp", sector: "Zorg", what: "Website met herhaalrecepten, openingstijden en teampagina", url: "https://apotheeknumansdorp.nl" },
      { name: "Pharmail", slug: "pharmail", sector: "SaaS", what: "Communicatieportaal tussen apotheken en zorgverleners", url: "https://pharmail.nl" },
      { name: "Pharmalytic", slug: "pharmalytic", sector: "SaaS", what: "Applicatie voor medicatiebeoordelingen", url: "https://pharmalytic.nl" },
      { name: "Apotrace", slug: "apotrace", sector: "Logistiek", what: "Track en trace voor recepten", url: "https://apotrace.nl" },
      { name: "Apotheekcijfers", slug: "apotheekcijfers", sector: "Data", what: "Dashboard met maandcijfers en ontwikkeling", url: "https://apotheekcijfers.nl" },
      { name: "BMI Bewust", slug: "bmibewust", sector: "Gezondheid", what: "Website met online intake voor gewichtsbegeleiding", url: "https://bmibewust.nl" },
      { name: "Stoppen met Roken", slug: "hwsmr", sector: "Zorg", what: "Website voor begeleiding bij stoppen met roken", url: "https://hwsmr.nl" },
      { name: "PharmaClean", slug: "pharmaclean", sector: "Dienstverlening", what: "Website met offertetool voor schoonmaak in de zorg", url: "https://pharmaclean.nl" },
      { name: "Apotheek Zoetermeer", slug: "apotheekzoetermeer", sector: "Zorg", what: "Website met online receptaanvraag", url: "https://apotheekzoetermeer.nl" },
    ],
  },
  packages: {
    title: "Drie pakketten, vaste prijzen.",
    lead: "De prijs en de opleverdatum staan vooraf vast. Eventueel meerwerk wordt altijd eerst besproken.",
    items: [
      {
        name: "Start",
        price: "vanaf € 1.250",
        tagline: "Eén sterke pagina, snel online.",
        features: ["One-page website", "Ontwerp op maat", "Contactformulier en Google Maps", "Geschikt voor mobiel, snel ladend", "Online binnen een week"],
        cta: "Kies Start",
      },
      {
        name: "Groei",
        price: "vanaf € 2.950",
        tagline: "Meerdere pagina's, ruimte om te groeien.",
        features: ["Tot 8 pagina's", "Nieuws of blog, zelf te beheren", "Formulieren met e-mailnotificaties", "SEO-basis en Google Business", "Online binnen drie weken"],
        cta: "Kies Groei",
        highlight: true,
      },
      {
        name: "Slim",
        price: "op aanvraag",
        tagline: "Website met AI en automatisering.",
        features: ["Alles uit Groei", "AI-assistent voor veelgestelde vragen", "Online afspraken of intake", "Koppelingen met bestaande systemen", "Automatisering van terugkerend werk"],
        cta: "Vraag Slim aan",
      },
    ],
    maintenance: {
      name: "Onderhoud",
      price: "vanaf € 49 per maand",
      text: "Hosting, updates, back-ups en kleine tekstwijzigingen, zonder omkijken.",
    },
  },
  process: {
    title: "Werkwijze",
    lead: "Overzichtelijk en zonder verrassingen. De meeste projecten doorlopen vier stappen.",
    steps: [
      { title: "Kennismaking", text: "Een gesprek van een half uur over het bedrijf, de doelgroep en het doel van de website." },
      { title: "Voorstel", text: "Binnen twee werkdagen een vaste prijs, een opleverdatum en een eerste schets." },
      { title: "Realisatie", text: "De website groeit zichtbaar via een previewlink, met ruimte voor tussentijdse feedback." },
      { title: "Oplevering", text: "Domein, hosting en e-mail worden ingericht. Onderhoud is daarna optioneel." },
    ],
  },
  services: {
    title: "Diensten",
    lead: "Van een compacte website tot een complete applicatie met AI-ondersteuning. Alles op maat, door één partij ontworpen en gebouwd.",
    items: [
      { title: "Websites", text: "Een website die er verzorgd uitziet, snel laadt en klanten oplevert. Ontworpen op maat, zonder standaardthema.", examples: "One-page, bedrijfswebsite, landingspagina, meertalig" },
      { title: "Webapplicaties en portalen", text: "Software waarin klanten of medewerkers werken: inloggen, formulieren, dashboards en koppelingen met bestaande systemen.", examples: "Klantportaal, intake, planning, track en trace" },
      { title: "AI en automatisering", text: "Toepassingen die vragen beantwoorden, documenten verwerken of terugkerend werk overnemen. Praktisch en meetbaar.", examples: "AI-assistent, telefoonassistent, documentverwerking" },
      { title: "Advies", text: "Voor bedrijven die willen weten waar AI en digitalisering waarde toevoegen. In een sessie van twee uur ontstaat een concreet plan.", examples: "AI-scan, procesanalyse, keuze van tools" },
    ],
  },
  principles: {
    title: "Uitgangspunten",
    lead: "Wat opdrachtgevers van White Field Digital mogen verwachten.",
    items: [
      { title: "Gebouwd vanuit de praktijk", text: "Elke oplossing wordt ontwikkeld met de dagelijkse praktijk van een onderneming als uitgangspunt: wat moet het opleveren, en wat kost het aan tijd en aandacht." },
      { title: "Vooraf duidelijk", text: "Prijs, planning en omvang worden vooraf vastgelegd. Wijzigingen worden besproken voordat ze worden uitgevoerd, niet achteraf verrekend." },
      { title: "Eigendom bij de opdrachtgever", text: "Domein, hosting en broncode staan op naam van de opdrachtgever. Overstappen naar een andere partij is daardoor altijd mogelijk." },
    ],
  },
  faq: {
    title: "Veelgestelde vragen",
    items: [
      { q: "Hoe snel is een website online?", a: "Een one-page website binnen een week na akkoord, een website met meerdere pagina's binnen drie weken. De doorlooptijd hangt vooral af van het aanleveren van teksten en beeldmateriaal; daar wordt bij geholpen." },
      { q: "Wat zijn de kosten?", a: "De pakketten hierboven hebben vaste prijzen. Meerwerk wordt altijd vooraf besproken en afzonderlijk geoffreerd." },
      { q: "Kunnen teksten zelf worden aangepast?", a: "Ja. Bij Groei en Slim is een eenvoudig beheer voor nieuws, blog en teksten inbegrepen. Kleine wijzigingen kunnen ook per e-mail worden doorgegeven bij een onderhoudsabonnement." },
      { q: "Van wie is de website?", a: "Van de opdrachtgever. Domein, hosting en broncode staan op diens naam, zodat overstappen naar een andere partij altijd mogelijk blijft." },
      { q: "Werkt White Field Digital ook buiten de zorg?", a: "Ja. De ervaring ligt onder meer in de zorg, maar de werkwijze is geschikt voor elke branche: horeca, bouw, retail, advocatuur, sport, onderwijs." },
      { q: "Hoe wordt omgegaan met AVG en beveiliging?", a: "Alle systemen draaien binnen de EU, formulieren worden versleuteld verzonden en er worden niet meer gegevens bewaard dan nodig. Voor zorgpraktijken wordt gewerkt volgens de uitgangspunten van NEN 7510." },
    ],
  },
  about: {
    title: "Over White Field Digital",
    paragraphs: [
      "White Field Digital is opgericht door Arnel Medjedovic, apotheker en ondernemer. De afgelopen jaren ontwikkelde hij de websites en software voor zijn eigen ondernemingen, waaronder een communicatieportaal, een applicatie voor medicatiebeoordelingen en een track-en-trace-systeem voor recepten.",
      "Die ervaring vormt de basis van White Field Digital: oplossingen die zijn ontworpen vanuit de dagelijkse praktijk van een onderneming, met oog voor wat het moet opleveren.",
    ],
    stack: "Gebouwd met Next.js, Tailwind, Supabase en Vercel. Snel, veilig en zonder doorlopende licentiekosten voor plug-ins.",
  },
  contact: {
    title: "Neem contact op",
    lead: "Beschrijf kort de vraag of het project. U ontvangt binnen één werkdag een reactie.",
    name: "Naam",
    email: "E-mailadres",
    company: "Bedrijf (optioneel)",
    message: "Waarmee kunnen we helpen?",
    send: "Verstuur bericht",
    sending: "Versturen...",
    sent: "Bericht verstuurd. We nemen spoedig contact op.",
    error: "Versturen is niet gelukt. Mail ons via info@whitefielddigital.nl.",
    alt: "Liever direct mailen?",
  },
  footer: { line: "White Field Digital, Numansdorp. Onderdeel van Pharmail BV.", langs: "Taal" },
};

const en: Dict = {
  meta: {
    title: "White Field Digital | Websites, web applications and AI solutions",
    description:
      "White Field Digital designs and builds websites, web applications and AI solutions for businesses in every industry. Fixed prices, short lead times and a single point of contact.",
  },
  nav: { services: "Services", work: "Work", packages: "Packages", process: "Process", faq: "FAQ", about: "About", contact: "Contact", cta: "Get in touch" },
  hero: {
    title: "Websites and digital solutions for businesses in every industry.",
    lead:
      "White Field Digital designs and builds websites, web applications and AI applications. Fixed prices, short lead times and one point of contact from first call to delivery.",
    primary: "See the packages",
    secondary: "See the work",
    note: "A one-page website is online within a week.",
  },
  work: {
    title: "A selection of delivered work.",
    lead: "Websites and applications in daily use, from healthcare and services to software for the pharmacy sector.",
    items: [
      { name: "Apotheek Numansdorp", slug: "apotheeknumansdorp", sector: "Healthcare", what: "Pharmacy website with repeat prescriptions, hours and team page", url: "https://apotheeknumansdorp.nl" },
      { name: "Pharmail", slug: "pharmail", sector: "SaaS", what: "Communication portal between pharmacies and care providers", url: "https://pharmail.nl" },
      { name: "Pharmalytic", slug: "pharmalytic", sector: "SaaS", what: "Application for medication reviews", url: "https://pharmalytic.nl" },
      { name: "Apotrace", slug: "apotrace", sector: "Logistics", what: "Track and trace for prescriptions", url: "https://apotrace.nl" },
      { name: "Apotheekcijfers", slug: "apotheekcijfers", sector: "Data", what: "Dashboard with monthly figures and trends", url: "https://apotheekcijfers.nl" },
      { name: "BMI Bewust", slug: "bmibewust", sector: "Health", what: "Website with online intake for weight management", url: "https://bmibewust.nl" },
      { name: "Stoppen met Roken", slug: "hwsmr", sector: "Healthcare", what: "Website for stop-smoking support", url: "https://hwsmr.nl" },
      { name: "PharmaClean", slug: "pharmaclean", sector: "Services", what: "Website with quote tool for healthcare cleaning", url: "https://pharmaclean.nl" },
      { name: "Apotheek Zoetermeer", slug: "apotheekzoetermeer", sector: "Healthcare", what: "Website with online prescription requests", url: "https://apotheekzoetermeer.nl" },
    ],
  },
  packages: {
    title: "Three packages, fixed prices.",
    lead: "Price and delivery date are agreed up front. Any additional work is always discussed first.",
    items: [
      {
        name: "Start",
        price: "from € 1,250",
        tagline: "One strong page, online fast.",
        features: ["One-page website", "Custom design", "Contact form and Google Maps", "Mobile-friendly and fast", "Online within a week"],
        cta: "Choose Start",
      },
      {
        name: "Grow",
        price: "from € 2,950",
        tagline: "Multiple pages, room to grow.",
        features: ["Up to 8 pages", "News or blog, self-managed", "Forms with email notifications", "SEO basics and Google Business", "Online within three weeks"],
        cta: "Choose Grow",
        highlight: true,
      },
      {
        name: "Smart",
        price: "on request",
        tagline: "Website with AI and automation.",
        features: ["Everything in Grow", "AI assistant for frequently asked questions", "Online booking or intake", "Integrations with existing systems", "Automation of recurring work"],
        cta: "Request Smart",
      },
    ],
    maintenance: {
      name: "Maintenance",
      price: "from € 49 per month",
      text: "Hosting, updates, backups and small text changes, taken care of.",
    },
  },
  process: {
    title: "Process",
    lead: "Clear and without surprises. Most projects follow four steps.",
    steps: [
      { title: "Introduction", text: "A thirty-minute conversation about the business, its audience and the purpose of the website." },
      { title: "Proposal", text: "Within two working days: a fixed price, a delivery date and a first sketch." },
      { title: "Build", text: "The website takes shape through a preview link, with room for feedback along the way." },
      { title: "Delivery", text: "Domain, hosting and email are set up. Maintenance is optional afterwards." },
    ],
  },
  services: {
    title: "Services",
    lead: "From a compact website to a complete application with AI support. All custom, designed and built by one party.",
    items: [
      { title: "Websites", text: "A website that looks polished, loads fast and brings in customers. Custom designed, no standard theme.", examples: "One-page, company website, landing page, multilingual" },
      { title: "Web applications and portals", text: "Software that customers or staff work in: login, forms, dashboards and integrations with existing systems.", examples: "Customer portal, intake, scheduling, track and trace" },
      { title: "AI and automation", text: "Applications that answer questions, process documents or take over recurring work. Practical and measurable.", examples: "AI assistant, phone assistant, document processing" },
      { title: "Consulting", text: "For businesses that want to know where AI and digitalisation add value. A two-hour session results in a concrete plan.", examples: "AI scan, process analysis, tool selection" },
    ],
  },
  principles: {
    title: "Principles",
    lead: "What clients of White Field Digital can expect.",
    items: [
      { title: "Built from practice", text: "Every solution is developed with the daily reality of a business as the starting point: what it needs to deliver, and what it costs in time and attention." },
      { title: "Clear up front", text: "Price, planning and scope are agreed in advance. Changes are discussed before they are carried out, never settled afterwards." },
      { title: "Owned by the client", text: "Domain, hosting and source code are registered in the client's name. Moving to another party is therefore always possible." },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "How fast is a website online?", a: "A one-page website within a week of approval, a multi-page website within three weeks. Lead time mostly depends on supplying texts and images; help is available for that." },
      { q: "What are the costs?", a: "The packages above have fixed prices. Additional work is always discussed in advance and quoted separately." },
      { q: "Can texts be edited in-house?", a: "Yes. Grow and Smart include a simple editor for news, blog and texts. Small changes can also be sent by email under a maintenance plan." },
      { q: "Who owns the website?", a: "The client. Domain, hosting and source code are in the client's name, so moving to another party is always possible." },
      { q: "Does White Field Digital work outside healthcare?", a: "Yes. Experience lies in healthcare among others, but the approach suits every industry: hospitality, construction, retail, legal, sports, education." },
      { q: "How are GDPR and security handled?", a: "All systems run within the EU, forms are sent encrypted and no more data is kept than necessary. For care practices, work follows the principles of NEN 7510." },
    ],
  },
  about: {
    title: "About White Field Digital",
    paragraphs: [
      "White Field Digital was founded by Arnel Medjedovic, pharmacist and entrepreneur. Over the past years he developed the websites and software for his own businesses, including a communication portal, an application for medication reviews and a track and trace system for prescriptions.",
      "That experience forms the basis of White Field Digital: solutions designed from the daily practice of a business, with a clear view of what they need to deliver.",
    ],
    stack: "Built with Next.js, Tailwind, Supabase and Vercel. Fast, secure and without recurring plugin licence costs.",
  },
  contact: {
    title: "Get in touch",
    lead: "Describe the question or project briefly. You will receive a reply within one working day.",
    name: "Name",
    email: "Email address",
    company: "Company (optional)",
    message: "How can we help?",
    send: "Send message",
    sending: "Sending...",
    sent: "Message sent. We will be in touch shortly.",
    error: "Sending failed. Please email info@whitefielddigital.nl.",
    alt: "Prefer to email directly?",
  },
  footer: { line: "White Field Digital, Numansdorp, the Netherlands. Part of Pharmail BV.", langs: "Language" },
};

const de: Dict = {
  meta: {
    title: "White Field Digital | Websites, Webanwendungen und KI-Lösungen",
    description:
      "White Field Digital gestaltet und entwickelt Websites, Webanwendungen und KI-Lösungen für Unternehmen jeder Branche. Festpreise, kurze Laufzeiten und ein Ansprechpartner.",
  },
  nav: { services: "Leistungen", work: "Referenzen", packages: "Pakete", process: "Ablauf", faq: "Fragen", about: "Über uns", contact: "Kontakt", cta: "Kontakt aufnehmen" },
  hero: {
    title: "Websites und digitale Lösungen für Unternehmen jeder Branche.",
    lead:
      "White Field Digital gestaltet und entwickelt Websites, Webanwendungen und KI-Anwendungen. Mit Festpreisen, kurzen Laufzeiten und einem Ansprechpartner vom ersten Gespräch bis zur Übergabe.",
    primary: "Pakete ansehen",
    secondary: "Referenzen ansehen",
    note: "Eine One-Page-Website ist innerhalb einer Woche online.",
  },
  work: {
    title: "Eine Auswahl realisierter Projekte.",
    lead: "Websites und Anwendungen im täglichen Einsatz, von Gesundheitswesen und Dienstleistung bis zu Software für die Apothekenbranche.",
    items: [
      { name: "Apotheek Numansdorp", slug: "apotheeknumansdorp", sector: "Gesundheit", what: "Apotheken-Website mit Folgerezepten, Öffnungszeiten und Teamseite", url: "https://apotheeknumansdorp.nl" },
      { name: "Pharmail", slug: "pharmail", sector: "SaaS", what: "Kommunikationsportal zwischen Apotheken und Leistungserbringern", url: "https://pharmail.nl" },
      { name: "Pharmalytic", slug: "pharmalytic", sector: "SaaS", what: "Anwendung für Medikationsanalysen", url: "https://pharmalytic.nl" },
      { name: "Apotrace", slug: "apotrace", sector: "Logistik", what: "Track und Trace für Rezepte", url: "https://apotrace.nl" },
      { name: "Apotheekcijfers", slug: "apotheekcijfers", sector: "Daten", what: "Dashboard mit Monatszahlen und Entwicklung", url: "https://apotheekcijfers.nl" },
      { name: "BMI Bewust", slug: "bmibewust", sector: "Gesundheit", what: "Website mit Online-Aufnahme für Gewichtsbegleitung", url: "https://bmibewust.nl" },
      { name: "Stoppen met Roken", slug: "hwsmr", sector: "Gesundheit", what: "Website zur Begleitung bei der Raucherentwöhnung", url: "https://hwsmr.nl" },
      { name: "PharmaClean", slug: "pharmaclean", sector: "Dienstleistung", what: "Website mit Angebotsrechner für Reinigung im Gesundheitswesen", url: "https://pharmaclean.nl" },
      { name: "Apotheek Zoetermeer", slug: "apotheekzoetermeer", sector: "Gesundheit", what: "Website mit Online-Rezeptanfrage", url: "https://apotheekzoetermeer.nl" },
    ],
  },
  packages: {
    title: "Drei Pakete, Festpreise.",
    lead: "Preis und Liefertermin stehen vorab fest. Eventuelle Mehrarbeit wird immer zuerst besprochen.",
    items: [
      {
        name: "Start",
        price: "ab € 1.250",
        tagline: "Eine starke Seite, schnell online.",
        features: ["One-Page-Website", "Individuelles Design", "Kontaktformular und Google Maps", "Mobil optimiert, schnell ladend", "Online innerhalb einer Woche"],
        cta: "Start wählen",
      },
      {
        name: "Wachstum",
        price: "ab € 2.950",
        tagline: "Mehrere Seiten, Raum zum Wachsen.",
        features: ["Bis zu 8 Seiten", "News oder Blog, selbst pflegbar", "Formulare mit E-Mail-Benachrichtigung", "SEO-Basis und Google Business", "Online innerhalb von drei Wochen"],
        cta: "Wachstum wählen",
        highlight: true,
      },
      {
        name: "Smart",
        price: "auf Anfrage",
        tagline: "Website mit KI und Automatisierung.",
        features: ["Alles aus Wachstum", "KI-Assistent für häufige Fragen", "Online-Terminbuchung oder Aufnahme", "Anbindung an bestehende Systeme", "Automatisierung wiederkehrender Arbeit"],
        cta: "Smart anfragen",
      },
    ],
    maintenance: {
      name: "Wartung",
      price: "ab € 49 pro Monat",
      text: "Hosting, Updates, Backups und kleine Textänderungen, ohne eigenen Aufwand.",
    },
  },
  process: {
    title: "Ablauf",
    lead: "Übersichtlich und ohne Überraschungen. Die meisten Projekte durchlaufen vier Schritte.",
    steps: [
      { title: "Kennenlernen", text: "Ein halbstündiges Gespräch über das Unternehmen, die Zielgruppe und das Ziel der Website." },
      { title: "Angebot", text: "Innerhalb von zwei Werktagen: Festpreis, Liefertermin und ein erster Entwurf." },
      { title: "Umsetzung", text: "Die Website entsteht sichtbar über einen Vorschau-Link, mit Raum für Feedback zwischendurch." },
      { title: "Übergabe", text: "Domain, Hosting und E-Mail werden eingerichtet. Wartung ist anschließend optional." },
    ],
  },
  services: {
    title: "Leistungen",
    lead: "Von der kompakten Website bis zur vollständigen Anwendung mit KI-Unterstützung. Alles maßgeschneidert, aus einer Hand gestaltet und entwickelt.",
    items: [
      { title: "Websites", text: "Eine Website, die gepflegt aussieht, schnell lädt und Kunden bringt. Individuell gestaltet, ohne Standard-Theme.", examples: "One-Page, Firmenwebsite, Landingpage, mehrsprachig" },
      { title: "Webanwendungen und Portale", text: "Software, in der Kunden oder Mitarbeiter arbeiten: Login, Formulare, Dashboards und Anbindung an bestehende Systeme.", examples: "Kundenportal, Aufnahme, Planung, Track und Trace" },
      { title: "KI und Automatisierung", text: "Anwendungen, die Fragen beantworten, Dokumente verarbeiten oder wiederkehrende Arbeit übernehmen. Praktisch und messbar.", examples: "KI-Assistent, Telefonassistent, Dokumentenverarbeitung" },
      { title: "Beratung", text: "Für Unternehmen, die wissen möchten, wo KI und Digitalisierung Mehrwert schaffen. In einer zweistündigen Sitzung entsteht ein konkreter Plan.", examples: "KI-Scan, Prozessanalyse, Toolauswahl" },
    ],
  },
  principles: {
    title: "Grundsätze",
    lead: "Was Auftraggeber von White Field Digital erwarten dürfen.",
    items: [
      { title: "Aus der Praxis entwickelt", text: "Jede Lösung wird mit dem Alltag eines Unternehmens als Ausgangspunkt entwickelt: was sie leisten muss, und was sie an Zeit und Aufmerksamkeit kostet." },
      { title: "Vorab klar", text: "Preis, Planung und Umfang werden vorab festgelegt. Änderungen werden besprochen, bevor sie umgesetzt werden, nie nachträglich verrechnet." },
      { title: "Eigentum beim Auftraggeber", text: "Domain, Hosting und Quellcode laufen auf den Namen des Auftraggebers. Ein Wechsel zu einem anderen Anbieter ist dadurch jederzeit möglich." },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      { q: "Wie schnell ist eine Website online?", a: "Eine One-Page-Website innerhalb einer Woche nach Freigabe, eine mehrseitige Website innerhalb von drei Wochen. Die Laufzeit hängt vor allem von der Lieferung von Texten und Bildmaterial ab; dabei wird unterstützt." },
      { q: "Was sind die Kosten?", a: "Die Pakete oben haben Festpreise. Mehrarbeit wird immer vorab besprochen und gesondert angeboten." },
      { q: "Können Texte selbst geändert werden?", a: "Ja. Bei Wachstum und Smart ist eine einfache Verwaltung für News, Blog und Texte enthalten. Kleine Änderungen können bei einem Wartungsvertrag auch per E-Mail übermittelt werden." },
      { q: "Wem gehört die Website?", a: "Dem Auftraggeber. Domain, Hosting und Quellcode laufen auf dessen Namen, sodass ein Wechsel zu einem anderen Anbieter jederzeit möglich bleibt." },
      { q: "Arbeitet White Field Digital auch außerhalb des Gesundheitswesens?", a: "Ja. Die Erfahrung liegt unter anderem im Gesundheitswesen, die Arbeitsweise eignet sich jedoch für jede Branche: Gastronomie, Bau, Handel, Recht, Sport, Bildung." },
      { q: "Wie wird mit DSGVO und Sicherheit umgegangen?", a: "Alle Systeme laufen innerhalb der EU, Formulare werden verschlüsselt übertragen und es werden nicht mehr Daten gespeichert als nötig. Für Praxen wird nach den Grundsätzen der NEN 7510 gearbeitet." },
    ],
  },
  about: {
    title: "Über White Field Digital",
    paragraphs: [
      "White Field Digital wurde von Arnel Medjedovic gegründet, Apotheker und Unternehmer. In den vergangenen Jahren entwickelte er die Websites und Software für seine eigenen Unternehmen, darunter ein Kommunikationsportal, eine Anwendung für Medikationsanalysen und ein Track-und-Trace-System für Rezepte.",
      "Diese Erfahrung bildet die Grundlage von White Field Digital: Lösungen, die aus dem Alltag eines Unternehmens heraus gestaltet werden, mit Blick auf das, was sie leisten müssen.",
    ],
    stack: "Entwickelt mit Next.js, Tailwind, Supabase und Vercel. Schnell, sicher und ohne laufende Lizenzkosten für Plugins.",
  },
  contact: {
    title: "Kontakt aufnehmen",
    lead: "Beschreiben Sie kurz die Frage oder das Projekt. Sie erhalten innerhalb eines Werktags eine Antwort.",
    name: "Name",
    email: "E-Mail-Adresse",
    company: "Unternehmen (optional)",
    message: "Wobei können wir helfen?",
    send: "Nachricht senden",
    sending: "Wird gesendet...",
    sent: "Nachricht gesendet. Wir melden uns in Kürze.",
    error: "Senden fehlgeschlagen. Bitte schreiben Sie an info@whitefielddigital.nl.",
    alt: "Lieber direkt mailen?",
  },
  footer: { line: "White Field Digital, Numansdorp, Niederlande. Teil der Pharmail BV.", langs: "Sprache" },
};

const me: Dict = {
  meta: {
    title: "White Field Digital | Web sajtovi, web aplikacije i AI rješenja",
    description:
      "White Field Digital dizajnira i razvija web sajtove, web aplikacije i AI rješenja za firme iz svake branše. Fiksne cijene, kratki rokovi i jedan sagovornik.",
  },
  nav: { services: "Usluge", work: "Radovi", packages: "Paketi", process: "Proces", faq: "Pitanja", about: "O nama", contact: "Kontakt", cta: "Kontaktirajte nas" },
  hero: {
    title: "Web sajtovi i digitalna rješenja za firme iz svake branše.",
    lead:
      "White Field Digital dizajnira i razvija web sajtove, web aplikacije i AI aplikacije. Sa fiksnim cijenama, kratkim rokovima i jednim sagovornikom od prvog razgovora do isporuke.",
    primary: "Pogledajte pakete",
    secondary: "Pogledajte radove",
    note: "One-page sajt je online u roku od nedjelju dana.",
  },
  work: {
    title: "Izbor realizovanih projekata.",
    lead: "Sajtovi i aplikacije u svakodnevnoj upotrebi, od zdravstva i usluga do softvera za apotekarsku branšu.",
    items: [
      { name: "Apotheek Numansdorp", slug: "apotheeknumansdorp", sector: "Zdravstvo", what: "Sajt apoteke sa ponovnim receptima, radnim vremenom i timom", url: "https://apotheeknumansdorp.nl" },
      { name: "Pharmail", slug: "pharmail", sector: "SaaS", what: "Portal za komunikaciju između apoteka i zdravstvenih radnika", url: "https://pharmail.nl" },
      { name: "Pharmalytic", slug: "pharmalytic", sector: "SaaS", what: "Aplikacija za pregled terapije", url: "https://pharmalytic.nl" },
      { name: "Apotrace", slug: "apotrace", sector: "Logistika", what: "Praćenje recepata", url: "https://apotrace.nl" },
      { name: "Apotheekcijfers", slug: "apotheekcijfers", sector: "Podaci", what: "Dashboard sa mjesečnim brojkama i kretanjem", url: "https://apotheekcijfers.nl" },
      { name: "BMI Bewust", slug: "bmibewust", sector: "Zdravlje", what: "Sajt sa online prijavom za program regulacije težine", url: "https://bmibewust.nl" },
      { name: "Stoppen met Roken", slug: "hwsmr", sector: "Zdravstvo", what: "Sajt za podršku pri prestanku pušenja", url: "https://hwsmr.nl" },
      { name: "PharmaClean", slug: "pharmaclean", sector: "Usluge", what: "Sajt sa kalkulatorom ponude za čišćenje u zdravstvu", url: "https://pharmaclean.nl" },
      { name: "Apotheek Zoetermeer", slug: "apotheekzoetermeer", sector: "Zdravstvo", what: "Sajt sa online slanjem recepata", url: "https://apotheekzoetermeer.nl" },
    ],
  },
  packages: {
    title: "Tri paketa, fiksne cijene.",
    lead: "Cijena i rok isporuke su unaprijed dogovoreni. Eventualni dodatni rad se uvijek prvo dogovara.",
    items: [
      {
        name: "Start",
        price: "od 1.250 €",
        tagline: "Jedna jaka stranica, brzo online.",
        features: ["One-page sajt", "Dizajn po mjeri", "Kontakt forma i Google Maps", "Prilagođen mobilnim uređajima, brz", "Online u roku od nedjelju dana"],
        cta: "Izaberite Start",
      },
      {
        name: "Rast",
        price: "od 2.950 €",
        tagline: "Više stranica, prostor za rast.",
        features: ["Do 8 stranica", "Vijesti ili blog, samostalno uređivanje", "Forme sa e-mail obavještenjima", "SEO osnove i Google Business", "Online u roku od tri nedjelje"],
        cta: "Izaberite Rast",
        highlight: true,
      },
      {
        name: "Pametni",
        price: "na upit",
        tagline: "Sajt sa AI i automatizacijom.",
        features: ["Sve iz paketa Rast", "AI asistent za česta pitanja", "Online zakazivanje ili prijava", "Povezivanje sa postojećim sistemima", "Automatizacija posla koji se ponavlja"],
        cta: "Zatražite Pametni",
      },
    ],
    maintenance: {
      name: "Održavanje",
      price: "od 49 € mjesečno",
      text: "Hosting, ažuriranja, backup i male izmjene teksta, bez vaše brige.",
    },
  },
  process: {
    title: "Proces",
    lead: "Pregledno i bez iznenađenja. Većina projekata prolazi kroz četiri koraka.",
    steps: [
      { title: "Upoznavanje", text: "Razgovor od pola sata o firmi, ciljnoj grupi i svrsi sajta." },
      { title: "Ponuda", text: "U roku od dva radna dana: fiksna cijena, rok isporuke i prva skica." },
      { title: "Izrada", text: "Sajt nastaje vidljivo preko preview linka, uz prostor za povratne informacije usput." },
      { title: "Isporuka", text: "Domen, hosting i e-mail se podešavaju. Održavanje je nakon toga opciono." },
    ],
  },
  services: {
    title: "Usluge",
    lead: "Od kompaktnog sajta do kompletne aplikacije sa AI podrškom. Sve po mjeri, dizajnirano i razvijeno na jednom mjestu.",
    items: [
      { title: "Web sajtovi", text: "Sajt koji izgleda uredno, brzo se učitava i donosi klijente. Dizajniran po mjeri, bez standardnih tema.", examples: "One-page, sajt firme, landing stranica, višejezično" },
      { title: "Web aplikacije i portali", text: "Softver u kojem rade klijenti ili zaposleni: prijava, forme, dashboardi i povezivanje sa postojećim sistemima.", examples: "Portal za klijente, prijava, planiranje, praćenje" },
      { title: "AI i automatizacija", text: "Aplikacije koje odgovaraju na pitanja, obrađuju dokumente ili preuzimaju posao koji se ponavlja. Praktično i mjerljivo.", examples: "AI asistent, telefonski asistent, obrada dokumenata" },
      { title: "Savjetovanje", text: "Za firme koje žele da znaju gdje AI i digitalizacija donose vrijednost. U sesiji od dva sata nastaje konkretan plan.", examples: "AI analiza, analiza procesa, izbor alata" },
    ],
  },
  principles: {
    title: "Principi",
    lead: "Šta klijenti White Field Digital mogu da očekuju.",
    items: [
      { title: "Razvijeno iz prakse", text: "Svako rješenje se razvija sa svakodnevicom firme kao polaznom tačkom: šta treba da donese, i koliko košta u vremenu i pažnji." },
      { title: "Jasno unaprijed", text: "Cijena, plan i obim se utvrđuju unaprijed. Izmjene se dogovaraju prije nego što se sprovedu, nikad naknadno naplaćuju." },
      { title: "Vlasništvo kod klijenta", text: "Domen, hosting i izvorni kod glase na ime klijenta. Prelazak kod drugog pružaoca je zato uvijek moguć." },
    ],
  },
  faq: {
    title: "Česta pitanja",
    items: [
      { q: "Koliko brzo je sajt online?", a: "One-page sajt u roku od nedjelju dana od odobrenja, sajt sa više stranica u roku od tri nedjelje. Rok najviše zavisi od dostave tekstova i fotografija; u tome se pomaže." },
      { q: "Koliki su troškovi?", a: "Paketi iznad imaju fiksne cijene. Dodatni rad se uvijek unaprijed dogovara i posebno nudi." },
      { q: "Mogu li se tekstovi samostalno mijenjati?", a: "Da. Uz pakete Rast i Pametni uključeno je jednostavno uređivanje vijesti, bloga i tekstova. Male izmjene mogu se uz održavanje poslati i mailom." },
      { q: "Čiji je sajt?", a: "Klijentov. Domen, hosting i izvorni kod glase na njegovo ime, tako da je prelazak kod drugog pružaoca uvijek moguć." },
      { q: "Radi li White Field Digital i van zdravstva?", a: "Da. Iskustvo je između ostalog u zdravstvu, ali način rada odgovara svakoj branši: ugostiteljstvo, građevina, trgovina, pravo, sport, obrazovanje." },
      { q: "Kako se postupa sa GDPR i bezbjednošću?", a: "Svi sistemi rade unutar EU, forme se šalju šifrovano i ne čuva se više podataka nego što je potrebno. Za zdravstvene ordinacije radi se po principima NEN 7510." },
    ],
  },
  about: {
    title: "O White Field Digital",
    paragraphs: [
      "White Field Digital je osnovao Arnel Međedović, farmaceut i preduzetnik. Proteklih godina razvio je sajtove i softver za sopstvene firme, uključujući portal za komunikaciju, aplikaciju za pregled terapije i sistem za praćenje recepata.",
      "To iskustvo čini osnovu White Field Digital: rješenja dizajnirana iz svakodnevne prakse firme, sa jasnim pogledom na to šta treba da donesu.",
    ],
    stack: "Razvijeno sa Next.js, Tailwind, Supabase i Vercel. Brzo, bezbjedno i bez tekućih troškova licenci za plugine.",
  },
  contact: {
    title: "Kontaktirajte nas",
    lead: "Kratko opišite pitanje ili projekat. Odgovor stiže u roku od jednog radnog dana.",
    name: "Ime",
    email: "E-mail adresa",
    company: "Firma (opciono)",
    message: "Kako možemo da pomognemo?",
    send: "Pošaljite poruku",
    sending: "Slanje...",
    sent: "Poruka je poslata. Javljamo se uskoro.",
    error: "Slanje nije uspjelo. Pišite nam na info@whitefielddigital.nl.",
    alt: "Radije direktno mailom?",
  },
  footer: { line: "White Field Digital, Numansdorp, Holandija. Dio Pharmail BV.", langs: "Jezik" },
};

export const dictionaries: Record<Locale, Dict> = { nl, en, de, me };
export type { Dict };
