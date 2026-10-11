// =============================================================
// common.js: CODE SHARED BY EVERY PAGE
// - remembers which language is showing
// - runs the language button
// - fills in the menu, the skip link and the footer
// - small helpers: release dates, Arabic text direction
// Each page's own script must define a function called drawPage()
// that fills in that page's content, and then call startPage().
// =============================================================

// Which language is showing right now: "en" or "so"
let currentLanguage = "en";

const languageButton = document.getElementById("language-toggle");

// ---------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------

const somaliDays = ["Axad", "Isniin", "Talaado", "Arbaco", "Khamiis", "Jimce", "Sabti"];
const somaliMonths = ["Janaayo", "Febraayo", "Maarso", "Abriil", "May", "Juun", "Luulyo",
                      "Ogosto", "Sebtembar", "Oktoobar", "Nofembar", "Desembar"];
const englishDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const englishMonths = ["January", "February", "March", "April", "May", "June", "July",
                       "August", "September", "October", "November", "December"];

// The release date of an episode: the launch Sunday + 7 days for each episode after the first.
// Dates are built at noon so time zones never shift the day.
function episodeDate(id) {
  const parts = siteConfig.launchDate.split("-").map(Number);
  const date = new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0);
  date.setDate(date.getDate() + 7 * (id - 1));
  return date;
}

// "Sunday 1 November 2026"  /  "Axad 1 Nofembar 2026"
function formatDate(date, lang) {
  const day = (lang === "so" ? somaliDays : englishDays)[date.getDay()];
  const month = (lang === "so" ? somaliMonths : englishMonths)[date.getMonth()];
  return day + " " + date.getDate() + " " + month + " " + date.getFullYear();
}

// The short form for cards: "1 Nov"
function formatShortDate(date, lang) {
  const month = (lang === "so" ? somaliMonths : englishMonths)[date.getMonth()];
  return date.getDate() + " " + month.slice(0, 3);
}

// Where an episode stands: "available" (has a video), "released" (its date has passed
// but no video link is added yet) or "soon" (its date is still ahead)
function episodeStatus(id) {
  const videoLink = (typeof media !== "undefined" && media[id] && media[id].video) || "";
  if (videoLink) {
    return "available";
  }
  return episodeDate(id) <= new Date() ? "released" : "soon";
}

// Does this text contain Arabic letters?
function hasArabic(text) {
  return /[؀-ۿ]/.test(text);
}

// Is this text (almost) all Arabic? Then it should be written right-to-left.
function isMostlyArabic(text) {
  const letters = (text.match(/[A-Za-z؀-ۿ]/g) || []).length;
  const arabic = (text.match(/[؀-ۿ]/g) || []).length;
  return letters > 0 && arabic / letters > 0.6;
}

// Put text into an element. Arabic passages get the right direction and language.
function setSmartText(element, text) {
  element.textContent = text;
  if (isMostlyArabic(text)) {
    element.setAttribute("dir", "rtl");
    element.setAttribute("lang", "ar");
    element.classList.add("arabic-text");
  } else {
    element.removeAttribute("dir");
    element.removeAttribute("lang");
    element.classList.remove("arabic-text");
  }
}

// A list of source names joined with " · ", where Arabic titles are isolated
// (<bdi>) so their punctuation and order cannot jump around.
function fillSources(element, label, sources) {
  element.textContent = label + ": ";
  sources.forEach(function (source, index) {
    if (index > 0) {
      element.appendChild(document.createTextNode(" · "));
    }
    if (hasArabic(source)) {
      const bdi = document.createElement("bdi");
      bdi.lang = "ar";
      bdi.textContent = source;
      element.appendChild(bdi);
    } else {
      element.appendChild(document.createTextNode(source));
    }
  });
}

// Turn a YouTube link into the 11-character video id ("" if it is not one)
function getYouTubeId(link) {
  const match = (link || "").match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
}

// Update the page description used by search engines (and some link previews)
function setMetaDescription(text) {
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content", text);
  }
}

// ---------------------------------------------------------------
// MENU, SKIP LINK, FOOTER
// ---------------------------------------------------------------

function drawFooter(lang) {
  document.getElementById("footer-text").textContent = pageText.footer[lang];

  const links = document.getElementById("footer-links");
  links.innerHTML = "";

  function addLink(href, text, newTab) {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    if (newTab) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    links.appendChild(a);
  }

  if (siteConfig.youtubeChannel) {
    addLink(siteConfig.youtubeChannel, "YouTube", true);
  }
  addLink("sources.html", pageText.sourcesNav[lang], false);
  addLink("about.html", pageText.aboutNav[lang], false);
  addLink("#top", pageText.toTop[lang], false);
}

// Switch the whole page to one language ("en" or "so")
function setLanguage(lang) {
  currentLanguage = lang;

  // The parts that are the same on every page: menu, button, footer
  document.getElementById("nav-home").textContent = pageText.home[lang];
  document.getElementById("nav-timeline").textContent = pageText.episodesNav[lang];
  document.getElementById("nav-sources").textContent = pageText.sourcesNav[lang];
  document.getElementById("nav-about").textContent = pageText.aboutNav[lang];
  document.getElementById("skip-link").textContent = pageText.skipLink[lang];
  languageButton.textContent = pageText.button[lang];
  // The button shows the OTHER language, so tell screen readers what it does
  languageButton.setAttribute("lang", lang === "en" ? "so" : "en");
  languageButton.setAttribute("aria-label",
    lang === "en" ? "Switch to Somali (Soomaali)" : "U beddel Ingiriisi (English)");
  drawFooter(lang);
  document.documentElement.lang = lang;  // tells the browser (and screen readers) the page language

  // The page's own content (each page defines its own drawPage)
  drawPage();

  // Remember the choice for next time. (Wrapped in try, because some
  // browsers block saving, and the page should still work if they do.)
  try {
    localStorage.setItem("language", lang);
  } catch (error) {
    // Saving isn't allowed here, so we simply skip it
  }
}

// When the button is clicked, switch to the other language
languageButton.addEventListener("click", function () {
  if (currentLanguage === "en") {
    setLanguage("so");
  } else {
    setLanguage("en");
  }
});

// Called once at the end of each page's script:
// draws the page in the saved language (or English if none was saved)
function startPage() {
  let savedLanguage = "en";
  try {
    if (localStorage.getItem("language") === "so") {
      savedLanguage = "so";
    }
  } catch (error) {
    // Reading isn't allowed here, so we stay with English
  }
  // A shared link can ask for a language: ...?lang=so
  const asked = new URLSearchParams(window.location.search).get("lang");
  if (asked === "so" || asked === "en") {
    savedLanguage = asked;
  }
  setLanguage(savedLanguage);
}
