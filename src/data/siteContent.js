const withQuery = (url, width) => `${url}?auto=format&fit=crop&w=${width}&q=85`;

export const siteMeta = {
  brandName: "Vertex Laminati",
  legalName: "Vertex Laminati SA",
  tagline: "Co-creator of possibilities.",
  siteUrl: "https://vertexlaminati.ch",
  defaultTitle: "Vertex Laminati SA | Co-creator of possibilities",
  defaultDescription:
    "Swiss distributor of high-pressure and compact decorative laminates, supplying European distributors, fabricators, and industrial converters.",
  email: "info@vertexlaminati.ch",
  phone: "+41 79 958 78 73",
  office: "Coldrerio, Ticino, Switzerland",
  address: "Via P. F. Mola 26, 6877 Coldrerio, Switzerland",
  logisticsHub: "Via C. B. Cavour 129/A, 22078 Turate (CO), Italy",
  legalForm: "Swiss corporation (Société anonyme / Aktiengesellschaft)",
  uid: "CHE-492.360.276",
  italianVat: "04307640138",
  italianRea: "CO-435140",
  registeredSince: "28 April 2026",
  responseTime: "Within one business day",
  logo: "/brand/vertex-lockup-deep-blue.svg",
  ogImage: "/vertex-og.png"
};

export const images = {
  HERO_MAIN: withQuery("https://images.unsplash.com/photo-1600585154340-be6161a56a0c", 2200),
  KITCHEN_1: withQuery("https://images.unsplash.com/photo-1556909172-54557c7e4fb7", 1600),
  KITCHEN_2: withQuery("https://images.unsplash.com/photo-1600585154526-990dced4db0d", 1600),
  BATHROOM_1: withQuery("https://images.unsplash.com/photo-1552321554-5fefe8c9ef14", 1600),
  BATHROOM_2: withQuery("https://images.unsplash.com/photo-1600566752355-35792bedcfea", 1600),
  OFFICE_1: withQuery("https://images.unsplash.com/photo-1497366216548-37526070297c", 1600),
  OFFICE_2: withQuery("https://images.unsplash.com/photo-1497366412874-3415097a27e7", 1600),
  COMMERCIAL_1: withQuery("https://images.unsplash.com/photo-1414235077428-338989a2e8c0", 1600),
  COMMERCIAL_2: withQuery("https://images.unsplash.com/photo-1600585154363-67eb9e2e2099", 1600),
  EXTERIOR_1: withQuery("https://images.unsplash.com/photo-1486325212027-8081e485255e", 1600),
  EXTERIOR_2: withQuery("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00", 1600),
  LOCKER_1: withQuery("https://images.unsplash.com/photo-1558618666-fcd25c85cd64", 1600),
  WASHROOM_1: withQuery("https://images.unsplash.com/photo-1563013544-824ae1b704d3", 1600),
  MATERIAL_CLOSE: withQuery("https://images.unsplash.com/photo-1558618047-3c8c76ca7d13", 1600),
  MATERIAL_STONE: withQuery("https://images.unsplash.com/photo-1541123437800-1bb1317badc2", 1600),
  MATERIAL_WOOD: withQuery("https://images.unsplash.com/photo-1558618666-fcd25c85cd64", 1600),
  SHOWROOM: withQuery("https://images.unsplash.com/photo-1555041469-a586c61ea9bc", 1600),
  HERITAGE: withQuery("https://images.unsplash.com/photo-1541123437800-1bb1317badc2", 1800),
  EUROPE_CITY: withQuery("https://images.unsplash.com/photo-1467269204594-9661b134dd2b", 1200),
  WAREHOUSE: withQuery("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d", 1800),
  REACH_UK: withQuery("https://images.unsplash.com/photo-1748545211932-2627575afcc2", 1200),
  REACH_NL: withQuery("https://images.unsplash.com/photo-1771600544991-78c83970747d", 1200),
  REACH_BE: withQuery("https://images.unsplash.com/photo-1572886071978-7c60b5b3e506", 1200),
  REACH_PL: withQuery("https://images.unsplash.com/photo-1655803230295-63df4db6cfac", 1200),
  REACH_DE: withQuery("https://images.unsplash.com/photo-1748189286412-75b51c19278b", 1200),
  REACH_CH: withQuery("https://images.unsplash.com/photo-1742626301229-2436b0b440e9", 1200)
};

export const navLinks = [
  { to: "/products", label: "Products" },
  { to: "/certifications", label: "Certifications" },
  { to: "/logistics", label: "Logistics" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

export const certificationItems = [
  { abbr: "CE / DoP", desc: "Compact wall panels" },
  { abbr: "FSC CoC support", desc: "Manufacturer-held; claims by order" },
  { abbr: "EPD", desc: "Compact panel declaration" },
  { abbr: "GREENGUARD Gold", desc: "Manufacturer-held HPL certificate" },
  { abbr: "M1", desc: "Specified low-emission HPL" },
  { abbr: "DNV", desc: "Marine-grade documentation" }
];

export const homeApplications = [
  {
    image: images.KITCHEN_2,
    title: "Kitchen Cabinetry",
    desc: "Decorative, Unicore, and Synchro laminates",
    alt: "Kitchen cabinetry and work surfaces finished in decorative laminate"
  },
  {
    image: images.BATHROOM_2,
    title: "Bathroom Vanity",
    desc: "Chemical-resistant and hygienic surface options",
    alt: "Bathroom vanity application using premium decorative laminate surfaces"
  },
  {
    image: images.OFFICE_2,
    title: "Office Wall Panelling",
    desc: "Decorative, digital, metallic, and writable surfaces",
    alt: "Office interior wall panelling and joinery in decorative laminate"
  },
  {
    image: images.COMMERCIAL_2,
    title: "Commercial Counters",
    desc: "Post-forming and high-performance laminates",
    alt: "Commercial counter application in a hospitality interior"
  },
  {
    image: images.EXTERIOR_2,
    title: "Exterior Cladding",
    desc: "Exterior compact cladding and fascia systems",
    alt: "Exterior facade cladding built with compact laminate panels"
  },
  {
    image: images.WASHROOM_1,
    title: "Washroom Cubicles",
    desc: "Compact cubicle and locker systems",
    alt: "Commercial washroom cubicle system built in compact laminate"
  },
  {
    image: images.MATERIAL_WOOD,
    title: "Woodgrain Decors",
    desc: "Consistent visual depth for furniture and joinery",
    alt: "Woodgrain decorative laminate surface shown in close material detail"
  },
  {
    image: images.MATERIAL_STONE,
    title: "Stone and Abstract Finishes",
    desc: "Texture, consistency, and durability for specification teams",
    alt: "Stone-effect decorative laminate surface shown in close material detail"
  }
];

export const reachMarkets = [
  { flag: "CH", country: "Switzerland", status: "Headquarters and commercial management" },
  { flag: "IT", country: "Italy", status: "Branch, stock, and logistics" },
  { flag: "GB", country: "United Kingdom", status: "European market coverage" },
  { flag: "NL", country: "Netherlands", status: "European market coverage" },
  { flag: "BE", country: "Belgium", status: "European market coverage" },
  { flag: "PL", country: "Poland", status: "European market coverage" },
  { flag: "DE", country: "Germany", status: "European market coverage" },
  { flag: "15+", country: "European markets", status: "Pan-European delivery" }
];

export const europeanCards = [
  { flag: "GB", country: "United Kingdom", image: images.REACH_UK },
  { flag: "NL", country: "Netherlands", image: images.REACH_NL },
  { flag: "BE", country: "Belgium", image: images.REACH_BE },
  { flag: "PL", country: "Poland", image: images.REACH_PL },
  { flag: "DE", country: "Germany", image: images.REACH_DE },
  { flag: "CH", country: "Switzerland", image: images.REACH_CH }
];

export const footerCerts = ["CE / DoP", "FSC support", "EPD", "GREENGUARD Gold", "M1", "DNV"];
