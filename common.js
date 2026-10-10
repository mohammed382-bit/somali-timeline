// =============================================================
// common.js: CODE SHARED BY EVERY PAGE
// - remembers which language is showing
// - runs the language button
// - fills in the menu and footer
// Each page's own script must define a function called drawPage()
// that fills in that page's content, and then call startPage().
// =============================================================

// Which language is showing right now: "en" or "so"
let currentLanguage = "en";

const languageButton = document.getElementById("language-toggle");

// Switch the whole page to one language ("en" or "so")
function setLanguage(lang) {
  currentLanguage = lang;

  // The parts that are the same on every page: menu, button, footer
  document.getElementById("nav-home").textContent = pageText.home[lang];
  document.getElementById("nav-timeline").textContent = pageText.episodesNav[lang];
  languageButton.textContent = pageText.button[lang];
  document.querySelector("footer p").textContent = pageText.footer[lang];
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
  setLanguage(savedLanguage);
}
