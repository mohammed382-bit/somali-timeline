// =============================================================
// timeline.js: BUILDS THE TIMELINE ON timeline.html
// (The text lives in data.js; the language button is in common.js.)
// It also runs the search box, the part filters and the
// "Open all / Close all" buttons.
// =============================================================

// Find the empty box in timeline.html where the timeline goes
const timeline = document.getElementById("timeline");

// What the visitor has chosen to look at
let searchText = "";      // words typed in the search box
let activePart = 0;       // 0 = all parts, otherwise 1, 2 or 3

// Make text easy to compare: lower case, and without accents
function simplify(text) {
  return String(text).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// Does this event match the search words? Every word typed must appear somewhere
// in the event's title, years, summary, details, article or sources.
function eventMatches(event) {
  if (activePart && event.part !== activePart) {
    return false;
  }
  const words = simplify(searchText).split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    return true;
  }
  const lang = currentLanguage;
  let haystack = [event.id, event.title[lang], event.years[lang], event.summary[lang],
                  event.details[lang], event.sources.join(" ")].join(" ");
  if (event.article) {
    for (const section of event.article) {
      haystack += " " + section.heading[lang] + " " + section[lang].join(" ");
    }
  }
  haystack = simplify(haystack);
  return words.every(word => haystack.includes(word));
}

// Build the whole timeline from the events that match
function showTimeline() {
  timeline.innerHTML = "";  // start with an empty box
  let lastPart = 0;
  let shown = 0;

  for (const event of events) {
    if (!eventMatches(event)) {
      continue;
    }
    shown++;

    // When a new part begins, add a part heading first
    if (event.part !== lastPart) {
      const heading = document.createElement("h2");
      heading.className = "part-heading";
      heading.textContent = parts[event.part][currentLanguage];
      timeline.appendChild(heading);
      lastPart = event.part;
    }

    timeline.appendChild(makeEventCard(event));
  }

  // Nothing found? Say so.
  if (shown === 0) {
    const none = document.createElement("p");
    none.className = "no-results";
    none.textContent = pageText.noResults[currentLanguage];
    timeline.appendChild(none);
  }

  document.getElementById("results-count").textContent =
    shown + " / " + events.length + " " + pageText.resultsCount[currentLanguage];
}

// The small label that shows when an episode comes out (or that it can be watched)
function makeStatusBadge(event) {
  const lang = currentLanguage;
  const status = episodeStatus(event.id);
  const badge = document.createElement("span");
  badge.className = "status-badge status-" + status;
  if (status === "available") {
    badge.textContent = "▶ " + pageText.statusAvailable[lang];
  } else if (status === "released") {
    badge.textContent = pageText.released[lang] + " · " + formatShortDate(episodeDate(event.id), lang);
  } else {
    badge.textContent = pageText.statusSoon[lang] + " · " + formatShortDate(episodeDate(event.id), lang);
  }
  return badge;
}

// Create the HTML for ONE event and return it
function makeEventCard(event) {
  const lang = currentLanguage;

  // The outer box: holds the dot and the card
  const item = document.createElement("div");
  item.className = "event";

  // The round dot on the line
  const dot = document.createElement("div");
  dot.className = "event-dot";
  item.appendChild(dot);

  // The white card
  const card = document.createElement("div");
  card.className = "event-card";
  item.appendChild(card);

  // Year label, and next to it when the episode is released
  const topRow = document.createElement("div");
  topRow.className = "event-toprow";
  const year = document.createElement("span");
  year.className = "event-year";
  year.textContent = event.years[lang];
  topRow.appendChild(year);
  topRow.appendChild(makeStatusBadge(event));
  card.appendChild(topRow);

  // Title, with the episode number in front
  const title = document.createElement("h3");
  title.className = "event-title";
  title.textContent = event.id + ". " + event.title[lang];
  card.appendChild(title);

  // Short summary (always visible)
  const summary = document.createElement("p");
  summary.className = "event-summary";
  summary.textContent = event.summary[lang];
  card.appendChild(summary);

  // Hidden details: the long text plus the list of sources
  const details = document.createElement("div");
  details.className = "event-details";

  const detailsText = document.createElement("p");
  detailsText.textContent = event.details[lang];
  details.appendChild(detailsText);

  const sources = document.createElement("p");
  sources.className = "event-sources";
  fillSources(sources, sourcesLabel[lang], event.sources);
  details.appendChild(sources);

  card.appendChild(details);

  // "Read more" link to the episode page.
  // It sits just below the card (not inside it), and CSS only shows it when the card is open.
  const readMore = document.createElement("a");
  readMore.className = "read-more";
  readMore.href = "episode.html?ep=" + event.id;
  readMore.textContent = pageText.readMore[lang];
  item.appendChild(readMore);

  // Give each event an id like "ep-6", so the episode page can link back to it
  item.id = "ep-" + event.id;

  // If this event was already open (for example before a language switch), keep it open
  if (openEvents.has(event.id)) {
    item.classList.add("open");
  }

  // Let keyboard users reach the card with the Tab key
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-expanded", item.classList.contains("open"));

  // What happens when the card is clicked
  card.addEventListener("click", function () {
    toggleEvent(item, card, event.id);
  });

  // Pressing Enter or Space on a focused card does the same as a click
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();  // stop Space from scrolling the page
      toggleEvent(item, card, event.id);
    }
  });

  return item;
}

// The ids of the events that are currently open
const openEvents = new Set();

// Open a closed event, or close an open one
function toggleEvent(item, card, id) {
  item.classList.toggle("open");  // adds "open" if missing, removes it if present
  const isOpen = item.classList.contains("open");
  card.setAttribute("aria-expanded", isOpen);

  // Remember the choice, so the page can be redrawn without closing everything
  if (isOpen) {
    openEvents.add(id);
  } else {
    openEvents.delete(id);
  }
}

// ---------------------------------------------------------------
// SEARCH BOX, PART FILTERS, OPEN ALL / CLOSE ALL
// ---------------------------------------------------------------

const searchBox = document.getElementById("search");

searchBox.addEventListener("input", function () {
  searchText = searchBox.value;
  showTimeline();
});

document.getElementById("expand-all").addEventListener("click", function () {
  for (const event of events) {
    if (eventMatches(event)) {
      openEvents.add(event.id);
    }
  }
  showTimeline();
});

document.getElementById("collapse-all").addEventListener("click", function () {
  openEvents.clear();
  showTimeline();
});

// Buttons: "All parts · Part 1 · Part 2 · Part 3"
function drawFilters() {
  const lang = currentLanguage;
  const box = document.getElementById("part-filters");
  box.innerHTML = "";
  box.setAttribute("aria-label", pageText.partsHeading[lang]);

  const choices = [0, 1, 2, 3];
  for (const part of choices) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip" + (activePart === part ? " chip-active" : "");
    button.setAttribute("aria-pressed", activePart === part);
    button.textContent = part === 0 ? pageText.filterAll[lang] : parts[part][lang].split(":")[0];
    button.title = part === 0 ? "" : parts[part][lang];
    button.addEventListener("click", function () {
      activePart = part;
      drawFilters();
      showTimeline();
    });
    box.appendChild(button);
  }
}

// =============================================================
// DRAW THIS PAGE (common.js calls drawPage whenever the language changes)
// =============================================================

function drawPage() {
  const lang = currentLanguage;
  document.getElementById("page-title").textContent = pageText.title[lang];
  document.getElementById("page-subtitle").textContent = pageText.subtitle[lang];
  document.title = pageText.title[lang];
  setMetaDescription(pageText.subtitle[lang] + " · " + pageText.title[lang]);

  document.getElementById("search-label").textContent = pageText.searchLabel[lang];
  searchBox.placeholder = pageText.searchPlaceholder[lang];
  document.getElementById("expand-all").textContent = pageText.expandAll[lang];
  document.getElementById("collapse-all").textContent = pageText.collapseAll[lang];
  drawFilters();
  showTimeline();
}

// Coming back from an episode page (timeline.html#ep-6)? Open that card.
const fromEpisode = Number(window.location.hash.replace("#ep-", ""));
if (fromEpisode) {
  openEvents.add(fromEpisode);
}

// Draw the page for the first time
startPage();

// ...and jump to that card (the cards did not exist yet when the browser first looked for it)
if (fromEpisode) {
  const target = document.getElementById("ep-" + fromEpisode);
  if (target) {
    target.scrollIntoView();
  }
}
