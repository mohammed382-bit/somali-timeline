// =============================================================
// sources.js: BUILDS THE SOURCES PAGE (sources.html)
// It collects every source named in data.js and groups them by language
// (Somali · Arabic · English), with the book cover when there is one.
// The language, author and cover of each source are set in data.js (sourceInfo).
// To add a cover: put the picture in media/covers/ and write its path
//   as  cover: "media/covers/name.jpg"  in that source's sourceInfo line.
// =============================================================

// Build one list: source name -> the episodes that use it
const sourceMap = new Map();
for (const event of events) {
  for (const name of event.sources) {
    if (!sourceMap.has(name)) {
      sourceMap.set(name, []);
    }
    sourceMap.get(name).push(event.id);
  }
}

// The most-used sources first, then alphabetical
const allSources = Array.from(sourceMap.entries()).sort(function (a, b) {
  return b[1].length - a[1].length || a[0].localeCompare(b[0]);
});

const filterBox = document.getElementById("sources-filter");
filterBox.addEventListener("input", showSources);

let activeLanguage = "all";   // "all", "so", "ar" or "en"

function simplifyText(text) {
  return String(text).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// The address of a book's cover picture ("" if there is none)
function coverAddress(info) {
  if (info.cover) {
    return info.cover;
  }
  if (info.isbn) {
    // Open Library's free cover service; "default=false" makes it answer "not found"
    // instead of sending a blank picture, so we can show the title tile instead.
    return "https://covers.openlibrary.org/b/isbn/" + info.isbn + "-M.jpg?default=false";
  }
  return "";
}

// A title tile, shown when a book has no cover picture
function makeTile(name, languageKey) {
  const tile = document.createElement("div");
  tile.className = "cover-tile cover-" + languageKey;
  const label = document.createElement("span");
  label.textContent = name.replace(/\s*\(.*\)\s*$/, "");   // drop a trailing "(...)"
  if (hasArabic(name)) {
    label.dir = "rtl";
    label.lang = "ar";
  }
  tile.appendChild(label);
  return tile;
}

// The cover area of one card: the picture, or the tile if it is missing or fails to load
function makeCover(name, info) {
  const lang = currentLanguage;
  const box = document.createElement("div");
  box.className = "source-cover";
  const address = coverAddress(info);

  if (!address) {
    box.appendChild(makeTile(name, info.lang));
    return box;
  }

  const image = document.createElement("img");
  image.alt = pageText.coverOf[lang] + " " + name;
  image.loading = "lazy";
  image.referrerPolicy = "no-referrer";
  image.addEventListener("error", function () {
    box.innerHTML = "";
    box.appendChild(makeTile(name, info.lang));
  });
  image.src = address;
  box.appendChild(image);
  return box;
}

// One book card. "info" can be given directly (Further reading books aren't in sourceInfo).
function makeCard(name, episodeIds, info) {
  const lang = currentLanguage;
  info = info || sourceInfo[name] || { lang: "en" };

  const item = document.createElement("li");
  item.className = "source-item";
  item.appendChild(makeCover(name, info));

  const text = document.createElement("div");
  text.className = "source-text";

  const title = document.createElement("span");
  title.className = "source-title";
  // Arabic titles drop the "(author)" tag: the author is shown on its own line
  title.textContent = hasArabic(name) ? name.replace(/\s*\(.*\)\s*$/, "") : name;
  if (hasArabic(name)) {
    title.dir = "rtl";
    title.lang = "ar";
  }
  text.appendChild(title);

  if (info.author) {
    const author = document.createElement("span");
    author.className = "source-author";
    author.textContent = pageText.sourcesBy[lang] + ": " + info.author;
    text.appendChild(author);
  }
  if (info.note) {
    const note = document.createElement("span");
    note.className = "source-author";
    note.textContent = info.note[lang];
    text.appendChild(note);
  }

  // Books that no episode cites yet (Further reading) have no "Used in episodes" line
  if (episodeIds.length === 0) {
    item.appendChild(text);
    return item;
  }

  const used = document.createElement("span");
  used.className = "source-used";
  used.appendChild(document.createTextNode(pageText.usedIn[lang] + ": "));
  episodeIds.forEach(function (id, index) {
    if (index > 0) {
      used.appendChild(document.createTextNode(", "));
    }
    const link = document.createElement("a");
    link.href = "episode.html?ep=" + id;
    link.textContent = id;
    link.title = events[id - 1].title[lang];
    used.appendChild(link);
  });
  text.appendChild(used);

  item.appendChild(text);
  return item;
}

// Show the sources, grouped by language, after the search words and language choice
function showSources() {
  const lang = currentLanguage;
  const area = document.getElementById("sources-list");
  area.innerHTML = "";
  const words = simplifyText(filterBox.value).split(/\s+/).filter(Boolean);
  let shown = 0;

  for (const group of sourceLanguages) {
    if (activeLanguage !== "all" && activeLanguage !== group.key) {
      continue;
    }
    const matches = allSources.filter(function (entry) {
      const info = sourceInfo[entry[0]] || { lang: "en" };
      const searchable = simplifyText(entry[0] + " " + (info.author || ""));
      return info.lang === group.key && words.every(word => searchable.includes(word));
    });
    if (matches.length === 0) {
      continue;
    }
    shown += matches.length;

    const section = document.createElement("section");
    section.className = "source-group";
    const heading = document.createElement("h2");
    heading.className = "source-group-heading";
    const sameName = group.name[lang] === group.native;
    heading.textContent = group.name[lang] + (sameName ? "" : " · " + group.native) + " (" + matches.length + ")";
    section.appendChild(heading);

    const list = document.createElement("ul");
    list.className = "sources-list";
    for (const entry of matches) {
      list.appendChild(makeCard(entry[0], entry[1]));
    }
    section.appendChild(list);
    area.appendChild(section);
  }

  // Further reading: books not yet cited in an episode, after the language groups
  const further = furtherReading.filter(function (book) {
    const searchable = simplifyText(book.name + " " + (book.author || ""));
    const languageOk = activeLanguage === "all" || activeLanguage === book.lang;
    return languageOk && words.every(word => searchable.includes(word));
  });
  if (further.length > 0) {
    shown += further.length;
    const section = document.createElement("section");
    section.className = "source-group";
    const heading = document.createElement("h2");
    heading.className = "source-group-heading";
    heading.textContent = pageText.furtherReading[lang] + " (" + further.length + ")";
    section.appendChild(heading);

    const note = document.createElement("p");
    note.className = "further-reading-note";
    note.textContent = pageText.furtherReadingNote[lang];
    section.appendChild(note);

    const list = document.createElement("ul");
    list.className = "sources-list";
    for (const book of further) {
      list.appendChild(makeCard(book.name, [], book));
    }
    section.appendChild(list);
    area.appendChild(section);
  }

  document.getElementById("sources-count").textContent =
    shown + " / " + (allSources.length + furtherReading.length) + " " + pageText.sourcesCount[lang];
}

// Language buttons: All · Somali · Arabic · English
function drawLanguageFilters() {
  const lang = currentLanguage;
  const box = document.getElementById("language-filters");
  box.innerHTML = "";
  box.setAttribute("aria-label", pageText.sourcesFilter[lang]);

  const choices = [{ key: "all", label: pageText.sourcesAllLanguages[lang] }].concat(
    sourceLanguages.map(g => ({ key: g.key, label: g.name[lang] })));

  for (const choice of choices) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip" + (activeLanguage === choice.key ? " chip-active" : "");
    button.setAttribute("aria-pressed", activeLanguage === choice.key);
    button.textContent = choice.label;
    button.addEventListener("click", function () {
      activeLanguage = choice.key;
      drawLanguageFilters();
      showSources();
    });
    box.appendChild(button);
  }
}

function drawPage() {
  const lang = currentLanguage;
  document.getElementById("page-title").textContent = pageText.sourcesTitle[lang];
  document.getElementById("sources-intro").textContent = pageText.sourcesIntro[lang];
  document.title = pageText.sourcesTitle[lang];
  setMetaDescription(pageText.sourcesIntro[lang]);
  document.getElementById("sources-filter-label").textContent = pageText.sourcesFilter[lang];
  filterBox.placeholder = pageText.sourcesFilter[lang] + "…";
  document.getElementById("cover-note").textContent = pageText.sourcesCoverNote[lang];
  drawLanguageFilters();
  showSources();
}

startPage();
