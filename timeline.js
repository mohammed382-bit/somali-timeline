// =============================================================
// timeline.js: BUILDS THE TIMELINE ON index.html
// (The text lives in data.js; the language button is in common.js.)

// =============================================================
// STEP 4: SHOW THE EVENTS ON THE PAGE
// =============================================================

// Find the empty box in index.html where the timeline goes
const timeline = document.getElementById("timeline");

// Build the whole timeline from the events list
function showTimeline() {
  timeline.innerHTML = "";  // start with an empty box
  let lastPart = 0;

  // Loop: run the code inside { } once for every event in the list
  for (const event of events) {

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

  // Year label
  const year = document.createElement("span");
  year.className = "event-year";
  year.textContent = event.years[lang];
  card.appendChild(year);

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
  sources.textContent = sourcesLabel[lang] + ": " + event.sources.join(" · ");
  details.appendChild(sources);

  card.appendChild(details);

  // ---- STEP 10: "Read more" link to the episode page ----
  // It sits just below the card (not inside it), and CSS only shows it when the card is open.
  const readMore = document.createElement("a");
  readMore.className = "read-more";
  readMore.href = "episode.html?ep=" + event.id;
  readMore.textContent = pageText.readMore[lang];
  item.appendChild(readMore);

  // Give each event an id like "ep-6", so the episode page can link back to it
  item.id = "ep-" + event.id;

  // ---- STEP 5: click to open and close ----

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

  // Remember the choice, so Step 6 can redraw the page without closing everything
  if (isOpen) {
    openEvents.add(id);
  } else {
    openEvents.delete(id);
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
  showTimeline();
}

// Coming back from an episode page (index.html#ep-6)? Open that card.
const fromEpisode = Number(window.location.hash.replace("#ep-", ""));
if (fromEpisode) {
  openEvents.add(fromEpisode);
}

// Draw the page for the first time
startPage();
