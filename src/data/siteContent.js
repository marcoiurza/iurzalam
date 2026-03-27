const withQuery = (url, width) => `${url}?auto=format&fit=crop&w=${width}&q=85`;

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
  { abbr: "ETA", desc: "European Technical Assessment" },
  { abbr: "FSC", desc: "Forest Stewardship Council" },
  { abbr: "PEFC", desc: "Programme for Endorsement" },
  { abbr: "Greenguard", desc: "UL Environment Certified" },
  { abbr: "CATAS", desc: "Independent European Testing" }
];

export const homeApplications = [
  {
    image: images.KITCHEN_2,
    title: "Kitchen Cabinetry",
    desc: "HPL Standard \u00B7 Solid colour finish",
    alt: "Kitchen cabinetry and work surfaces finished in solid colour decorative laminate"
  },
  {
    image: images.BATHROOM_2,
    title: "Bathroom Vanity",
    desc: "HPL Premium \u00B7 Seamless surface look",
    alt: "Bathroom vanity application using premium decorative laminate surfaces"
  },
  {
    image: images.OFFICE_2,
    title: "Office Wall Panelling",
    desc: "HPL Standard \u00B7 Wood decor",
    alt: "Office interior wall panelling and joinery in wood decor laminate"
  },
  {
    image: images.COMMERCIAL_2,
    title: "Commercial Counters",
    desc: "HPL Premium \u00B7 High-traffic interiors",
    alt: "Commercial counter application in a high-traffic hospitality interior"
  },
  {
    image: images.EXTERIOR_2,
    title: "Exterior Cladding",
    desc: "Compact Laminate \u00B7 UV-stable",
    alt: "Exterior facade cladding built with compact laminate panels"
  },
  {
    image: images.WASHROOM_1,
    title: "Washroom Cubicles",
    desc: "Compact Laminate \u00B7 High-humidity use",
    alt: "Commercial washroom cubicle system built in compact laminate"
  },
  {
    image: images.MATERIAL_WOOD,
    title: "Woodgrain Decors",
    desc: "Consistent visual depth for furniture and joinery manufacture",
    alt: "Woodgrain decorative laminate surface shown in close material detail"
  },
  {
    image: images.MATERIAL_STONE,
    title: "Stone and abstract finishes",
    desc: "Surface detail that communicates texture, consistency, and durability",
    alt: "Stone-effect decorative laminate surface shown in close material detail"
  }
];

export const reachMarkets = [
  { flag: "\uD83C\uDDEC\uD83C\uDDE7", country: "United Kingdom", status: "Active" },
  { flag: "\uD83C\uDDF3\uD83C\uDDF1", country: "Netherlands", status: "Active" },
  { flag: "\uD83C\uDDE7\uD83C\uDDEA", country: "Belgium", status: "Active" },
  { flag: "\uD83C\uDDF5\uD83C\uDDF1", country: "Poland", status: "Active" },
  { flag: "\uD83C\uDDE9\uD83C\uDDEA", country: "Germany", status: "Active" },
  { flag: "\uD83C\uDDE8\uD83C\uDDED", country: "Switzerland", status: "Active" },
  { flag: "\uD83C\uDF0D", country: "Rest of World", status: "Supplied via full container or warehouse shipment" }
];

export const europeanCards = [
  { flag: "\uD83C\uDDEC\uD83C\uDDE7", country: "United Kingdom", image: images.REACH_UK },
  { flag: "\uD83C\uDDF3\uD83C\uDDF1", country: "Netherlands", image: images.REACH_NL },
  { flag: "\uD83C\uDDE7\uD83C\uDDEA", country: "Belgium", image: images.REACH_BE },
  { flag: "\uD83C\uDDF5\uD83C\uDDF1", country: "Poland", image: images.REACH_PL },
  { flag: "\uD83C\uDDE9\uD83C\uDDEA", country: "Germany", image: images.REACH_DE },
  { flag: "\uD83C\uDDE8\uD83C\uDDED", country: "Switzerland", image: images.REACH_CH }
];

export const footerCerts = ["ETA", "FSC", "PEFC", "Greenguard", "CATAS"];
