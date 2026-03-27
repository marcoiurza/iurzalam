const withQuery = (url, width) => `${url}?auto=format&fit=crop&w=${width}&q=85`;

export const images = {
  HERO_MAIN: withQuery("https://images.unsplash.com/photo-1763076470404-23554ef26747", 2200),
  KITCHEN_1: withQuery("https://images.unsplash.com/photo-1556909172-54557c7e4fb7", 1600),
  KITCHEN_2: withQuery("https://images.unsplash.com/photo-1600585154526-990dced4db0d", 1600),
  BATHROOM_1: withQuery("https://images.unsplash.com/photo-1552321554-5fefe8c9ef14", 1600),
  BATHROOM_2: withQuery("https://images.unsplash.com/photo-1600566752355-35792bedcfea", 1600),
  OFFICE_1: withQuery("https://images.unsplash.com/photo-1770992225308-154250075727", 1600),
  OFFICE_2: withQuery("https://images.unsplash.com/photo-1758448721162-0c77cf477d6f", 1600),
  COMMERCIAL_1: withQuery("https://images.unsplash.com/photo-1414235077428-338989a2e8c0", 1600),
  COMMERCIAL_2: withQuery("https://images.unsplash.com/photo-1600585154363-67eb9e2e2099", 1600),
  EXTERIOR_1: withQuery("https://images.unsplash.com/photo-1769522721964-75f79435f666", 1600),
  EXTERIOR_2: withQuery("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00", 1600),
  LOCKER_1: withQuery("https://images.unsplash.com/photo-1715211021581-664ec4df3d51", 1600),
  WASHROOM_1: withQuery("https://images.unsplash.com/photo-1766371900891-790c9f1e3d8e", 1600),
  MATERIAL_CLOSE: withQuery("https://images.unsplash.com/photo-1752321532656-43e714c3deba", 1600),
  MATERIAL_STONE: withQuery("https://images.unsplash.com/photo-1541123437800-1bb1317badc2", 1600),
  MATERIAL_WOOD: withQuery("https://images.unsplash.com/photo-1558618666-fcd25c85cd64", 1600),
  SHOWROOM: withQuery("https://images.unsplash.com/photo-1555041469-a586c61ea9bc", 1600),
  HERITAGE: withQuery("https://images.unsplash.com/photo-1541123437800-1bb1317badc2", 1800),
  EUROPE_CITY: withQuery("https://images.unsplash.com/photo-1467269204594-9661b134dd2b", 1200),
  WAREHOUSE: withQuery("https://images.unsplash.com/photo-1764046155497-ad7e50737ffa", 1800)
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
  { abbr: "CE", desc: "CE Certificate + DoP" },
  { abbr: "FSC", desc: "Forest Stewardship Council" },
  { abbr: "EPD", desc: "Environmental Product Declaration" },
  { abbr: "HPD", desc: "Health Product Declaration" },
  { abbr: "NSF", desc: "Food Contact Certification" }
];

export const homeApplications = [
  {
    image: images.KITCHEN_1,
    title: "Kitchen Worktops",
    desc: "HPL Standard - Matt finish",
    alt: "Professional kitchen worktops finished in matte decorative laminate"
  },
  {
    image: images.BATHROOM_1,
    title: "Bathroom Vanity",
    desc: "HPL Standard - Gloss finish",
    alt: "Bathroom vanity surfaces specified in gloss decorative laminate"
  },
  {
    image: images.OFFICE_1,
    title: "Office Wall Panelling",
    desc: "HPL Standard - Wood decor",
    alt: "Office interior wall panelling in wood decor decorative laminate"
  },
  {
    image: images.COMMERCIAL_1,
    title: "Restaurant Counters",
    desc: "HPL Premium",
    alt: "Restaurant counter surfaces for commercial fit-out environments"
  },
  {
    image: images.EXTERIOR_1,
    title: "Exterior Cladding",
    desc: "Compact Laminate - UV-stable",
    alt: "Exterior facade cladding built with compact laminate panels"
  },
  {
    image: images.WASHROOM_1,
    title: "Commercial Washrooms",
    desc: "Compact Laminate",
    alt: "Commercial washroom partition systems in compact laminate"
  },
  {
    image: images.MATERIAL_CLOSE,
    title: "Surface systems specified for durability",
    desc: "",
    alt: "Decorative surface material samples arranged for product specification"
  },
  {
    image: images.SHOWROOM,
    title: "Specified by architects and designers worldwide",
    desc: "",
    alt: "Professional material showroom presenting decorative surface applications"
  }
];

export const reachMarkets = [
  { flag: "UK", country: "United Kingdom", status: "Active" },
  { flag: "NL", country: "Netherlands", status: "Active" },
  { flag: "BE", country: "Belgium", status: "Active" },
  { flag: "PL", country: "Poland", status: "Active" },
  { flag: "DE", country: "Germany", status: "Active" },
  { flag: "CH", country: "Switzerland", status: "Active" },
  { flag: "GL", country: "Rest of World", status: "Supplied via full container or warehouse shipment" }
];

export const europeanCards = [
  { flag: "UK", country: "United Kingdom" },
  { flag: "NL", country: "Netherlands" },
  { flag: "BE", country: "Belgium" },
  { flag: "PL", country: "Poland" },
  { flag: "DE", country: "Germany" },
  { flag: "CH", country: "Switzerland" }
];

export const footerCerts = ["ETA", "CE", "FSC", "GREENGUARD Gold", "EPD", "NSF"];
