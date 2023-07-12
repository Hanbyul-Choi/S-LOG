import sanitizeHtml from "sanitize-html";

export const removeHtmlAndShorter = (body) => {
  const filtered = sanitizeHtml(body, {
    allowedTags: [],
  });
  return filtered.length < 200 ? filtered : `${filtered.slice(0, 200)}...`;
};

export const sanitizeOption = {
  allowedTags: ["h1", "h2", "b", "i", "u", "s", "p", "ul", "ol", "li", "blockquote", "a", "img"],
  allowedAttributes: {
    a: ["href", "name", "target"],
    img: ["src"],
    li: ["class"],
  },
  allowedSchemes: ["data", "http"],
};
