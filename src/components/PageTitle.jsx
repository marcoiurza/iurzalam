import { useEffect } from "react";

import { siteMeta } from "../data/siteContent";

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const upsertLink = (selector, rel, href) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

function PageTitle({ title, description, path = "/", image = siteMeta.ogImage, schema }) {
  useEffect(() => {
    const resolvedTitle = title ? `${title} | ${siteMeta.brandName}` : siteMeta.defaultTitle;
    const resolvedDescription = description || siteMeta.defaultDescription;
    const resolvedUrl = `${siteMeta.siteUrl}${path}`;
    const resolvedImage = image.startsWith("http") ? image : `${siteMeta.siteUrl}${image}`;
    const pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: resolvedTitle,
      url: resolvedUrl,
      description: resolvedDescription
    };
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteMeta.legalName,
      url: siteMeta.siteUrl,
      logo: `${siteMeta.siteUrl}${siteMeta.logo}`,
      email: siteMeta.email,
      taxID: siteMeta.uid,
      vatID: `IT${siteMeta.italianVat}`,
      description: siteMeta.defaultDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via P. F. Mola 26",
        postalCode: "6877",
        addressLocality: "Coldrerio",
        addressRegion: "Ticino",
        addressCountry: "CH"
      },
      telephone: siteMeta.phone,
      areaServed: ["Europe", "United Kingdom", "Switzerland"]
    };
    const schemas = [organizationSchema, pageSchema].concat(schema || []);

    document.title = resolvedTitle;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: resolvedDescription
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: resolvedTitle
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: resolvedDescription
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: resolvedUrl
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website"
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: siteMeta.legalName
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: resolvedImage
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image"
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: resolvedTitle
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: resolvedDescription
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: resolvedImage
    });
    upsertLink('link[rel="canonical"]', "canonical", resolvedUrl);

    let script = document.getElementById("vertex-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "vertex-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schemas);
  }, [title, description, path, image, schema]);

  return null;
}

export default PageTitle;
