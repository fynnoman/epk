export const SITE = {
  name: "EPK GmbH",
  legalName: "EPK GmbH",
  tagline: "Elektro-Fachbetrieb in Saarbrücken",
  owner: "Kevin Peloso",
  phone: "0163 6709775",
  phoneRaw: "+4916367097750",
  email: "", // nicht offiziell belegt — bewusst leer gelassen
  street: "Bergstr. 37",
  zip: "66128",
  city: "Saarbrücken",
  country: "Deutschland",
  hrb: "HRB 107214",
  court: "Amtsgericht Saarbrücken",
  url: "https://www.epk-saarbruecken.de",
} as const;

export const NAV_MAIN = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export type Leistung = {
  slug:
    | "elektroinstallation"
    | "haushaltsgeraete"
    | "kommunikationstechnik"
    | "photovoltaik"
    | "sicherheit-smart-home"
    | "wallbox";
  title: string;
  short: string;
  long: string;
  bullets: string[];
  icon: "bolt" | "wrench" | "signal" | "sun" | "shield" | "plug";
};

export const LEISTUNGEN: Leistung[] = [
  {
    slug: "elektroinstallation",
    title: "Elektroinstallation",
    short:
      "Neuinstallation, Sanierung und Erweiterung privater und gewerblicher Anlagen.",
    long:
      "Von der Grundrissplanung bis zur fertigen Steckdose. Wir übernehmen Neuinstallationen im Neubau, die Erneuerung bestehender Anlagen und punktuelle Erweiterungen. Dabei achten wir auf saubere Leitungsführung, nachvollziehbare Dokumentation und zeitgemäße Verteilerlösungen.",
    bullets: [
      "Neubau und Sanierung",
      "Zählerplatz und Unterverteilung",
      "Beleuchtungs- und Steckdosenplanung",
      "Prüfung bestehender Anlagen",
    ],
    icon: "bolt",
  },
  {
    slug: "haushaltsgeraete",
    title: "Haushaltsgerätereparatur",
    short:
      "Reparatur und Anschluss gängiger Haushaltsgroßgeräte, zuverlässig vor Ort.",
    long:
      "Wenn ein Gerät ausfällt, lohnt sich oft die Reparatur. Wir prüfen Haushaltsgeräte vor Ort, tauschen defekte Komponenten und übernehmen Anschluss und Inbetriebnahme neuer Geräte, sauber und mit klarer Rückmeldung zu Aufwand und Kosten.",
    bullets: [
      "Diagnose vor Ort",
      "Anschluss von Herd, Trockner, Waschmaschine",
      "Austausch von Komponenten",
      "Beratung Reparatur oder Neukauf",
    ],
    icon: "wrench",
  },
  {
    slug: "kommunikationstechnik",
    title: "Kommunikationstechnik",
    short:
      "Netzwerk, Telefonie und TV für Wohnhaus, Büro und kleine Betriebe.",
    long:
      "Eine ruhige, stabile Infrastruktur ist die Basis für modernes Wohnen und Arbeiten. Wir planen und verlegen Netzwerk- und TV-Verkabelung, binden Access-Points sauber ein und setzen Telefonie- und Türkommunikationssysteme um.",
    bullets: [
      "Strukturierte LAN-Verkabelung",
      "WLAN-Ausleuchtung mit Access-Points",
      "SAT, Kabel und IPTV",
      "Türsprech- und Videosysteme",
    ],
    icon: "signal",
  },
  {
    slug: "photovoltaik",
    title: "Photovoltaik und Solar",
    short:
      "Planung, Montage und Inbetriebnahme von PV-Anlagen mit Speicheroption.",
    long:
      "Eine PV-Anlage ist eine Entscheidung für Jahrzehnte. Wir planen die Anlage anhand des realen Verbrauchs, prüfen Dach und Zählerplatz, kümmern uns um Montage, elektrischen Anschluss und Inbetriebnahme und binden auf Wunsch einen Speicher ein.",
    bullets: [
      "Verbrauchsanalyse und Auslegung",
      "Dach- und Statik-Vorprüfung",
      "AC- und DC-seitige Installation",
      "Speicher- und Wallbox-Anbindung",
    ],
    icon: "sun",
  },
  {
    slug: "sicherheit-smart-home",
    title: "Sicherheitstechnik und Smart Home",
    short:
      "Alarmanlagen, Kameras und vernetzte Haustechnik, geplant mit System.",
    long:
      "Sicherheits- und Smart-Home-Technik zahlt sich nur aus, wenn sie zum Alltag passt. Wir hören zu, schlagen das vor, was wirklich sinnvoll ist, und integrieren Komponenten so, dass sie zuverlässig funktionieren, auch wenn einmal keiner mehr daran denkt.",
    bullets: [
      "Alarm- und Einbruchmeldeanlagen",
      "Videoüberwachung",
      "KNX, Smart-Home-Steuerungen",
      "Zutritts- und Türlösungen",
    ],
    icon: "shield",
  },
  {
    slug: "wallbox",
    title: "Wallbox-Installation",
    short:
      "Elektromobilität zu Hause und im Betrieb, sauber angeschlossen und angemeldet.",
    long:
      "Eine Wallbox gehört fachgerecht an die Hauselektrik angebunden. Wir prüfen die bestehende Infrastruktur, dimensionieren Leitung und Absicherung, melden die Wallbox beim Netzbetreiber an und übergeben die Anlage einsatzbereit.",
    bullets: [
      "Prüfung von Hausanschluss und Verteiler",
      "Installation gängiger Wallbox-Modelle",
      "Anmeldung beim Netzbetreiber",
      "Lastmanagement bei mehreren Ladepunkten",
    ],
    icon: "plug",
  },
];

export const ABLAUF = [
  {
    step: "01",
    title: "Zuhören",
    body:
      "Ein Anruf oder eine kurze Nachricht reicht. Wir besprechen den Rahmen und schauen uns die Situation bei Bedarf vor Ort an.",
  },
  {
    step: "02",
    title: "Planen",
    body:
      "Sie bekommen eine nachvollziehbare Empfehlung und ein Angebot, in dem Leistung, Material und Zeitrahmen klar benannt sind.",
  },
  {
    step: "03",
    title: "Umsetzen",
    body:
      "Die Arbeiten laufen sauber, pünktlich und ruhig. Wir informieren proaktiv, sobald sich etwas ändert.",
  },
  {
    step: "04",
    title: "Übergeben",
    body:
      "Zum Abschluss prüfen wir die Anlage, erklären die Bedienung und übergeben die Dokumentation.",
  },
] as const;

export const WERTE = [
  {
    title: "Fachbetrieb aus der Region",
    body:
      "Wir arbeiten in Saarbrücken und im angrenzenden Saarland. Kurze Wege, verlässliche Termine und Ansprechpartner, die man wiedersieht.",
  },
  {
    title: "Sauber ausgeführt",
    body:
      "Jede Installation wird dokumentiert und so umgesetzt, dass auch ein späterer Blick in die Verteilung ruhig und nachvollziehbar bleibt.",
  },
  {
    title: "Ehrliche Beratung",
    body:
      "Wir empfehlen nur, was zur Anlage und zum Alltag passt. Wenn eine Reparatur sinnvoller ist als ein Neukauf, sagen wir das offen.",
  },
] as const;

export const FAQ = [
  {
    q: "Arbeiten Sie auch für private Haushalte oder nur für Gewerbe?",
    a:
      "Beides. Wir betreuen private Bauherren und Eigentümer ebenso wie Betriebe, Hausverwaltungen und kleine Unternehmen.",
  },
  {
    q: "In welchem Umkreis sind Sie tätig?",
    a:
      "Schwerpunkt ist Saarbrücken und das direkte Umland. Für größere Projekte sind weitere Entfernungen im Saarland möglich.",
  },
  {
    q: "Übernehmen Sie auch kleinere Aufträge?",
    a:
      "Ja. Eine defekte Steckdose, ein Gerät, das nicht mehr anläuft, oder eine Lampe, die hängen soll, sind genauso willkommen wie ein kompletter Umbau.",
  },
  {
    q: "Wie läuft eine Anfrage ab?",
    a:
      "Sie rufen uns an oder schreiben uns kurz. Wir melden uns in der Regel am gleichen oder nächsten Arbeitstag mit einem Vorschlag für das weitere Vorgehen.",
  },
] as const;
