export const site = {
  name: "LANDCOMING",
  phone: "+1 626-430-9966",
  phoneHref: "tel:+16264309966",
  email: "info@landcoming.com",
  address: "1211 Center Court Dr #200, Covina, CA 91724",
  disclaimer:
    "All properties are sold for cash or hard money. Buyers are responsible for their own due diligence and for verifying all information. Prices are net to seller, with the buyer paying all closing costs. Opinions of value or rents are provided as a courtesy; no guarantees are expressed or implied.",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Listings" },
  { to: "/buy-land", label: "Buy Land" },
  { to: "/sell-land", label: "Sell Land" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
