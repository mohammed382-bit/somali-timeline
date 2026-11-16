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
  setSmartText(document.getElementById("episode-details"), episode.details[lang]);
  drawArticle();
  fillSources(document.getElementById("episode-sources"), sourcesLabel[lang], episode.sources);

  drawReleaseInfo();
  drawTools();
  drawMeta();

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

  // No article yet: the short text is shown, with a note about the full script
  const soon = document.getElementById("article-soon");
  soon.hidden = !!episode.article;
  soon.textContent = pageText.articleSoon[lang];
  document.getElementById("episode-readtime").textContent = "";
  document.getElementById("episode-toc").hidden = true;

  if (!episode.article) {
    return;
  }

  // With an article, the short text isn't needed on this page
  document.getElementById("episode-details").textContent = "";

  let wordCount = 0;
  const tocList = document.getElementById("toc-list");
  tocList.innerHTML = "";

  // A title above the script, with a small ornament
  const intro = document.createElement("header");
  intro.className = "script-intro";
  const introTitle = document.createElement("h2");
  introTitle.textContent = pageText.scriptHeading[lang];
  const introNote = document.createElement("p");
  introNote.textContent = pageText.scriptNote[lang];
  intro.appendChild(introTitle);
  intro.appendChild(introNote);
  box.appendChild(intro);

  let dropCapDone = false;

  episode.article.forEach(function (section, index) {
    const number = String(index + 1).padStart(2, "0");   // "01", "02" ...

    const sectionBox = document.createElement("section");
    sectionBox.className = "script-section" + (index === 0 ? " script-opening" : "");

    // The section heading, with its number
    const head = document.createElement("div");
    head.className = "script-section-head";
    const numberTag = document.createElement("span");
    numberTag.className = "script-num";
    numberTag.textContent = number;
    const heading = document.createElement("h3");
    heading.className = "article-heading";
    heading.id = "section-" + (index + 1);
    heading.textContent = section.heading[lang];
    head.appendChild(numberTag);
    head.appendChild(heading);
    sectionBox.appendChild(head);

    // an entry in the contents list
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#section-" + (index + 1);
    const linkNumber = document.createElement("span");
    linkNumber.className = "toc-num";
    linkNumber.textContent = number;
    link.appendChild(linkNumber);
    link.appendChild(document.createTextNode(section.heading[lang]));
    item.appendChild(link);
    tocList.appendChild(item);

    // Decide what each paragraph is (the same in both languages, so the Somali text decides)
    const kinds = paragraphKinds(section.so);
    const paragraphs = section[lang];
    let i = 0;
    while (i < paragraphs.length) {
      const kind = kinds[i];

      // A run of lines that belong together: a poem or a list
      if (kind === "poem" || kind === "list") {
        const group = document.createElement(kind === "poem" ? "div" : "ul");
        group.className = kind === "poem" ? "script-poem" : "script-list";
        while (i < paragraphs.length && kinds[i] === kind) {
          const line = document.createElement(kind === "poem" ? "p" : "li");
          setSmartText(line, stripBullet(paragraphs[i]));
          group.appendChild(line);
          wordCount += paragraphs[i].split(/\s+/).length;
          i++;
        }
        sectionBox.appendChild(group);
        continue;
      }

      const p = document.createElement(kind === "quote" ? "blockquote" : "p");
      setSmartText(p, paragraphs[i]);
      if (kind === "arabic") {
        // the Arabic itself, or (in English) its translation, centred like a greeting
        p.classList.add(isMostlyArabic(paragraphs[i]) ? "script-arabic" : "script-greeting");
      } else if (kind === "quote") {
        p.className = "script-quote";
      } else if (kind === "question") {
        p.classList.add("script-question");
      } else if (!dropCapDone && index > 0 && paragraphs[i].length > 120) {
        // The first long paragraph of the main text gets a large first letter
        p.classList.add("script-dropcap");
        dropCapDone = true;
      }
      sectionBox.appendChild(p);
      wordCount += paragraphs[i].split(/\s+/).length;
      i++;
    }

    box.appendChild(sectionBox);
  });

  // Reading time (about 200 words a minute) and the contents list
  const minutes = Math.max(1, Math.round(wordCount / 200));
  document.getElementById("episode-readtime").textContent = "⏱ " + minutes + " " + pageText.minRead[lang];
  document.getElementById("toc-heading").textContent = pageText.inThisEpisode[lang];
  document.getElementById("episode-toc").hidden = episode.article.length < 3;
  setupReadingProgress();
}

// What kind of paragraph each one is, so it can be shown in its own style:
//   "poem"     lines of a poem (short lines after "meeris", "maanso", "tuducyo", "gabay")
//   "list"     a point in a list (starts with • or ·)
//   "arabic"   a passage in Arabic (Qur'an verses, sayings)
//   "quote"    a quotation (starts with a quotation mark)
//   "question" a question in the opening of the episode
//   "text"     an ordinary paragraph
function paragraphKinds(somaliParagraphs) {
  const kinds = somaliParagraphs.map(function (text) {
    if (/^[•·]/.test(text)) {
      return "list";
    }
    if (isMostlyArabic(text)) {
      return "arabic";
    }
    if (/^[“"«]/.test(text)) {
      return "quote";
    }
    if (/\?\s*$/.test(text) && text.length < 140) {
      return "question";
    }
    return "text";
  });

  // A poem: after a line that announces one, the following short lines
  for (let i = 0; i < somaliParagraphs.length; i++) {
    if (!/meeris|maanso|tuduc|gabay/i.test(somaliParagraphs[i])) {
      continue;
    }
    let j = i + 1;
    while (j < somaliParagraphs.length && stripBullet(somaliParagraphs[j]).length <= 40 && !/[.?!:]$/.test(somaliParagraphs[j].trim())) {
      j++;
    }
    if (j - (i + 1) >= 4) {
      for (let k = i + 1; k < j; k++) {
        kinds[k] = "poem";
      }
    }
  }
  return kinds;
}

// "• Saam Nuux" → "Saam Nuux"
function stripBullet(text) {
  return text.replace(/^[•·]\s*/, "");
}

// A thin bar at the top of the page that fills up while the script is read
function setupReadingProgress() {
  const article = document.getElementById("episode-article");
  let bar = document.getElementById("reading-progress");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "reading-progress";
    bar.className = "reading-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }
  function update() {
    const box = article.getBoundingClientRect();
    const total = box.height - window.innerHeight;
    const done = total > 0 ? Math.min(1, Math.max(0, -box.top / total)) : 0;
    bar.style.transform = "scaleX(" + done + ")";
    bar.hidden = !episode.article;
  }
  update();
}

// Under the title: when the episode comes out (or that it is out)
function drawReleaseInfo() {
  const lang = currentLanguage;
  const status = episodeStatus(episode.id);
  const line = document.getElementById("episode-release");
  const when = formatDate(episodeDate(episode.id), lang) + " · " + siteConfig.releaseTime;
  if (status === "soon") {
    line.textContent = pageText.releasesOn[lang] + ": " + when;
  } else if (status === "released") {
    line.textContent = pageText.released[lang] + ": " + when;
  } else {
    line.textContent = "";
  }
}

// Share and Print buttons
function drawTools() {
  const lang = currentLanguage;
  document.getElementById("share-button").textContent = "↗ " + pageText.share[lang];
  document.getElementById("print-button").textContent = "🖶 " + pageText.print[lang];
}

// The page description for search engines, and the share title
function drawMeta() {
  setMetaDescription(episode.summary[currentLanguage] + " · " + pageText.seriesTitle[currentLanguage]);
}

// The address to share: a small page that shows a nice preview card, then opens the episode
function shareAddress() {
  return siteConfig.siteUrl + "share/" + episode.id + ".html?lang=" + currentLanguage;
}

document.getElementById("print-button").addEventListener("click", function () {
  window.print();
});

document.getElementById("share-button").addEventListener("click", function () {
  const note = document.getElementById("tool-note");
  const data = {
    title: episode.id + ". " + episode.title[currentLanguage],
    text: episode.summary[currentLanguage],
    url: shareAddress()
  };
  if (navigator.share) {
    navigator.share(data).catch(function () { /* the visitor closed the share window */ });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(data.url).then(function () {
      note.textContent = pageText.copied[currentLanguage];
      setTimeout(function () { note.textContent = ""; }, 2500);
    });
  }
});

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

  // A short video clip (.mp4) plays silently on a loop, right in the gallery
  if (item.file.endsWith(".mp4")) {
    const video = document.createElement("video");
    video.src = item.file;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.controls = true;
    video.preload = "metadata";
    video.className = "gallery-video";
    video.setAttribute("aria-label", item.caption[lang]);
    figure.appendChild(video);
  } else {

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
  }

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
