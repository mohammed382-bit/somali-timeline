// =============================================================
// episode.js: BUILDS ONE EPISODE PAGE (episode.html)
// Which episode? It reads the number from the address:
//   episode.html?ep=6   →   episode 6
// =============================================================

// 1. Read the episode number from the address (the part after "?")
const params = new URLSearchParams(window.location.search);
// If there is no number at all, show episode 1.
const episodeNumber = Number(params.get("ep") || 1);   // "6" (text) → 6 (number)

// 2. Find that episode in the events list from data.js.
//    find() checks each event until one matches; if none match, we get undefined.
const episode = events.find(function (event) {
  return event.id === episodeNumber;
});

// The episodes just before and after this one (undefined at the ends)
const previousEpisode = events.find(e => e.id === episodeNumber - 1);
const nextEpisode = events.find(e => e.id === episodeNumber + 1);

// 3. Fill in the page (common.js calls this whenever the language changes)
function drawPage() {
  const lang = currentLanguage;

  // If the number is missing or wrong (e.g. ?ep=99), show a message instead
  if (!episode) {
    document.getElementById("page-title").textContent = pageText.notFound[lang];
    document.getElementById("link-all").textContent = pageText.allEpisodes[lang];
    document.title = pageText.notFound[lang];

    // Hide the empty parts, leaving only the message and the "All episodes" link
    document.getElementById("episode-years").style.display = "none";
    document.querySelector(".episode-body").style.display = "none";
    document.getElementById("video-section").style.display = "none";
    document.getElementById("link-previous").style.display = "none";
    document.getElementById("link-next").style.display = "none";
    return;   // stop here: there is nothing else to fill in
  }

  // Top of the page: "Part 2 · Episode 6", the title, the years
  document.getElementById("episode-label").textContent =
    parts[episode.part][lang] + "  ·  " + pageText.episode[lang] + " " + episode.id;
  document.getElementById("page-title").textContent = episode.title[lang];
  document.getElementById("episode-years").textContent = episode.years[lang];

  // The text and the sources
  document.getElementById("episode-summary").textContent = episode.summary[lang];
  document.getElementById("episode-details").textContent = episode.details[lang];
  drawArticle();
  document.getElementById("episode-sources").textContent =
    sourcesLabel[lang] + ": " + episode.sources.join(" · ");

  // The browser tab: "6. The Rulers of Mogadishu"
  document.title = episode.id + ". " + episode.title[lang];

  // Previous / All episodes / Next links at the bottom
  setEpisodeLink("link-previous", previousEpisode, "← " + pageText.previous[lang]);
  // "All episodes" goes back to this episode's place on the timeline (e.g. timeline.html#ep-6)
  const allLink = document.getElementById("link-all");
  allLink.textContent = pageText.allEpisodes[lang];
  allLink.href = "timeline.html#ep-" + episode.id;
  setEpisodeLink("link-next", nextEpisode, pageText.next[lang] + " →");

  // The video, pictures and maps (Step 11)
  drawVideo();
  drawGalleries();
}

// The full written version of an episode (from its script), if it has one.
// Each section has a heading and a list of paragraphs in each language.
function drawArticle() {
  const lang = currentLanguage;
  const box = document.getElementById("episode-article");
  box.innerHTML = "";

  if (!episode.article) {
    return;   // no article: the short text (episode-details) is enough
  }

  // With an article, the short text isn't needed on this page
  document.getElementById("episode-details").textContent = "";

  for (const section of episode.article) {
    const heading = document.createElement("h3");
    heading.className = "article-heading";
    heading.textContent = section.heading[lang];
    box.appendChild(heading);

    for (const paragraph of section[lang]) {
      const p = document.createElement("p");
      p.textContent = paragraph;
      box.appendChild(p);
    }
  }
}

// Make one Previous/Next link point at an episode, or hide it if there is none
function setEpisodeLink(linkId, target, label) {
  const link = document.getElementById(linkId);
  if (target) {
    link.href = "episode.html?ep=" + target.id;
    link.textContent = label;
    link.title = target.id + ". " + target.title[currentLanguage];  // shows on hover
    link.style.visibility = "visible";
  } else {
    // First or last episode: keep the space, but hide the link
    link.removeAttribute("href");
    link.textContent = label;
    link.style.visibility = "hidden";
  }
}

// =============================================================
// STEP 11: VIDEO, PICTURES AND MAPS
// =============================================================

// This episode's media from media.js, or an empty one if it has none
const episodeMedia = media[episodeNumber] || { video: "", pictures: [] };

// Get the 11-character video id out of any kind of YouTube link, e.g.
//   https://www.youtube.com/watch?v=abcdefghijk
//   https://youtu.be/abcdefghijk
// Returns "" if the link is empty or not a YouTube link.
function getYouTubeId(link) {
  const match = (link || "").match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
}

let videoBuilt = false;   // the player is only built once, so switching language doesn't restart it

function drawVideo() {
  const lang = currentLanguage;
  const box = document.getElementById("video-box");
  const videoId = getYouTubeId(episodeMedia.video);
  document.getElementById("video-heading").textContent = pageText.video[lang];

  // No video yet: show a "coming soon" box (rebuilt each time, so its text changes language)
  if (!videoId) {
    box.innerHTML = "";
    const soon = document.createElement("p");
    soon.className = "video-soon";
    soon.textContent = pageText.videoSoon[lang];
    box.appendChild(soon);
    return;
  }

  // A video: build the YouTube player the first time only
  if (!videoBuilt) {
    const frame = document.createElement("iframe");
    frame.className = "video-frame";
    frame.src = "https://www.youtube-nocookie.com/embed/" + videoId;
    frame.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    frame.allowFullscreen = true;
    box.appendChild(frame);

    // A plain link as well, in case the player can't load
    const link = document.createElement("a");
    link.id = "youtube-link";
    link.className = "youtube-link";
    link.href = "https://www.youtube.com/watch?v=" + videoId;
    link.target = "_blank";   // opens in a new tab
    link.rel = "noopener";
    box.appendChild(link);
    videoBuilt = true;
  }
  document.getElementById("youtube-link").textContent = pageText.watchOnYouTube[lang] + " ↗";
  document.querySelector(".video-frame").title = pageText.video[lang] + ": " + episode.title[lang];
}

// Fill the Pictures and Maps galleries
function drawGalleries() {
  const lang = currentLanguage;

  // filter() makes a new list with only the items that pass the test
  const maps = episodeMedia.pictures.filter(p => p.type === "map");
  const pictures = episodeMedia.pictures.filter(p => p.type !== "map");

  fillGallery("pictures", pictures, pageText.pictures[lang]);
  fillGallery("maps", maps, pageText.maps[lang]);
}

function fillGallery(name, items, heading) {
  const section = document.getElementById(name + "-section");
  const gallery = document.getElementById(name + "-gallery");
  gallery.innerHTML = "";

  // Nothing to show? Keep the whole section hidden.
  section.hidden = items.length === 0;
  document.getElementById(name + "-heading").textContent = heading;

  for (const item of items) {
    gallery.appendChild(makeFigure(item));
  }
}

// One picture with its caption and credit, as a clickable button
function makeFigure(item) {
  const lang = currentLanguage;

  const figure = document.createElement("figure");
  figure.className = "gallery-item";

  // The picture sits inside a button, so it can be opened with a click or the keyboard
  const button = document.createElement("button");
  button.className = "gallery-button";
  const image = document.createElement("img");
  image.src = item.file;
  image.alt = item.caption[lang];   // describes the picture for screen readers
  image.loading = "lazy";           // only loads when scrolled into view
  button.appendChild(image);
  button.addEventListener("click", function () {
    openLightbox(item);
  });
  figure.appendChild(button);

  // AI pictures always get a clear label
  if (item.type === "ai") {
    const badge = document.createElement("span");
    badge.className = "ai-badge";
    badge.textContent = pageText.aiLabel[lang];
    figure.appendChild(badge);
  }

  const caption = document.createElement("figcaption");
  caption.textContent = item.caption[lang];
  caption.appendChild(makeCredit(item, "credit"));
  figure.appendChild(caption);

  return figure;
}

// The credit line. If the picture has a "link" (e.g. its Wikimedia Commons page),
// the credit becomes a link to it, as free licences ask.
function makeCredit(item, className) {
  const lang = currentLanguage;
  const credit = document.createElement(item.link ? "a" : "small");
  credit.className = className;
  credit.textContent = item.credit[lang];
  if (item.link) {
    credit.href = item.link;
    credit.target = "_blank";   // opens in a new tab
    credit.rel = "noopener";
  }
  return credit;
}

// ---- The large-picture pop-up ----
const lightbox = document.getElementById("lightbox");

function openLightbox(item) {
  const lang = currentLanguage;
  document.getElementById("lightbox-image").src = item.file;
  document.getElementById("lightbox-image").alt = item.caption[lang];

  // Caption, with the AI label in front if needed
  let captionText = item.caption[lang];
  if (item.type === "ai") {
    captionText = "[" + pageText.aiLabel[lang] + "] " + captionText;
  }
  document.getElementById("lightbox-caption").textContent = captionText;
  const lightboxCredit = document.getElementById("lightbox-credit");
  lightboxCredit.innerHTML = "";
  lightboxCredit.appendChild(makeCredit(item, ""));

  const closeButton = document.getElementById("lightbox-close");
  closeButton.setAttribute("aria-label", pageText.close[lang]);
  closeButton.title = pageText.close[lang];

  lightbox.showModal();   // opens the pop-up; the Esc key closes it automatically
}

// Close with the × button...
document.getElementById("lightbox-close").addEventListener("click", function () {
  lightbox.close();
});

// ...or by clicking the dark area around the picture
lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    lightbox.close();
  }
});

// 4. Draw the page for the first time
startPage();
