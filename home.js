// =============================================================
// home.js: BUILDS THE WELCOME PAGE (index.html)
// All the words come from data.js; the pictures come from media.js.
// =============================================================

// The picture behind the title: the first picture of episode 2 (the Punt relief)
const heroPicture = media[2] && media[2].pictures[0];
if (heroPicture) {
  document.querySelector(".home-header").style.backgroundImage =
    "linear-gradient(rgba(20, 48, 79, 0.82), rgba(20, 48, 79, 0.92)), url('" + heroPicture.file + "')";
}

// Choose a picture for a part's card: the first PHOTO in that part's episodes
// (photos look better than maps on a small card), skipping the banner picture.
// If the part has no photos, use its first map instead.
function firstPictureOfPart(partNumber) {
  let firstMap = null;
  for (const event of events) {
    const episodeMedia = media[event.id];
    if (event.part !== partNumber || !episodeMedia) {
      continue;   // not this part, or no media: go on to the next episode
    }
    for (const picture of episodeMedia.pictures) {
      if (picture === heroPicture) {
        continue;
      }
      if (picture.type !== "map") {
        return picture;           // found a photo: use it
      }
      if (!firstMap) {
        firstMap = picture;       // remember the first map, just in case
      }
    }
  }
  return firstMap;   // no photos in this part (or null if nothing at all)
}

// Fill in the page (common.js calls this whenever the language changes)
function drawPage() {
  const lang = currentLanguage;

  // Title, byline and buttons
  document.getElementById("page-title").textContent = pageText.seriesTitle[lang];
  document.getElementById("home-byline").textContent = pageText.byline[lang];
  document.getElementById("home-motto").textContent = pageText.motto[lang];
  document.getElementById("home-motto-source").textContent = "— " + pageText.mottoSource[lang];
  document.getElementById("start-button").textContent = pageText.startButton[lang] + " →";
  document.getElementById("timeline-button").textContent = pageText.timelineButton[lang];
  document.title = pageText.seriesTitle[lang];

  // Credit for the background picture
  const heroCredit = document.getElementById("hero-credit");
  heroCredit.innerHTML = "";
  if (heroPicture) {
    const link = document.createElement("a");
    link.href = heroPicture.link || heroPicture.file;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = heroPicture.caption[lang] + " · " + heroPicture.credit[lang];
    heroCredit.appendChild(link);
  }

  // Welcome text: one <p> for each paragraph in data.js
  document.getElementById("welcome-heading").textContent = pageText.welcomeHeading[lang];
  const welcomeBox = document.getElementById("welcome-text");
  welcomeBox.innerHTML = "";
  for (const paragraph of pageText.welcomeText[lang]) {
    const p = document.createElement("p");
    p.textContent = paragraph;
    welcomeBox.appendChild(p);
  }

  // The three part cards
  document.getElementById("parts-heading").textContent = pageText.partsHeading[lang];
  const cards = document.getElementById("part-cards");
  cards.innerHTML = "";
  for (const partNumber of [1, 2, 3]) {
    cards.appendChild(makePartCard(partNumber));
  }
}

// One card for one part: picture, part name, and "Episodes 1–3"
function makePartCard(partNumber) {
  const lang = currentLanguage;

  // The episodes in this part, e.g. 4 to 14
  const partEvents = events.filter(e => e.part === partNumber);
  const first = partEvents[0].id;
  const last = partEvents[partEvents.length - 1].id;

  // The whole card is a link to the first episode of the part on the timeline
  const card = document.createElement("a");
  card.className = "part-card";
  card.href = "timeline.html#ep-" + first;

  const picture = firstPictureOfPart(partNumber);
  if (picture) {
    const image = document.createElement("img");
    image.src = picture.file;
    image.alt = picture.caption[lang];
    image.loading = "lazy";
    card.appendChild(image);
  }

  const title = document.createElement("h3");
  title.className = "part-card-title";
  title.textContent = parts[partNumber][lang];
  card.appendChild(title);

  const range = document.createElement("p");
  range.className = "part-card-range";
  range.textContent = pageText.episodesRange[lang] + " " + first + "–" + last + " →";
  card.appendChild(range);

  return card;
}

// Draw the page for the first time
startPage();
