// =============================================================
// tools/build.js: makes the files that search engines and social
// networks read. Run it whenever you change episode titles/summaries:
//
//     node tools/build.js
//
// It creates:
//   share/1.html ... share/28.html   (a preview card for each episode, then opens it)
//   sitemap.xml and robots.txt
// =============================================================
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const context = {};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data.js"), "utf8") +
                "; this.out = { events, pageText, siteConfig, parts };", context);
const { events, pageText, siteConfig, parts } = context.out;
const base = siteConfig.siteUrl;

const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

fs.mkdirSync(path.join(root, "share"), { recursive: true });

for (const e of events) {
  const title = `${e.id}. ${e.title.so} · ${e.title.en}`;
  const desc = `${e.summary.so} — ${e.summary.en}`;
  const target = `${base}episode.html?ep=${e.id}`;
  const html = `<!DOCTYPE html>
<html lang="so">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Taxanaha Taariikhda Ummadda Soomaaliyeed">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:image" content="${base}share-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${base}share/${e.id}.html">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="canonical" href="${target}">
  <script>
    // Open the episode, keeping the language asked for in the link (?lang=so)
    var lang = new URLSearchParams(location.search).get("lang");
    location.replace("../episode.html?ep=${e.id}" + (lang ? "&lang=" + encodeURIComponent(lang) : ""));
  </script>
</head>
<body>
  <p><a href="../episode.html?ep=${e.id}">${esc(title)}</a></p>
</body>
</html>
`;
  fs.writeFileSync(path.join(root, "share", `${e.id}.html`), html);
}

const pages = ["", "timeline.html", "sources.html", "about.html"]
  .concat(events.map(e => `episode.html?ep=${e.id}`));
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url><loc>${base}${p.replace(/&/g, "&amp;")}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${base}sitemap.xml\n`);
console.log(`Made ${events.length} share pages, sitemap.xml and robots.txt`);
