// =============================================================
// sources.js: BUILDS THE SOURCES PAGE (sources.html)
// It collects every source named in data.js, so you never have to
// keep a separate list: add a source to an episode and it appears here.
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

function simplifyText(text) {
  return String(text).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function showSources() {
  const lang = currentLanguage;
  const list = document.getElementById("sources-list");
  list.innerHTML = "";
  const words = simplifyText(filterBox.value).split(/\s+/).filter(Boolean);
  let shown = 0;

  for (const entry of allSources) {
    const name = entry[0];
    const episodeIds = entry[1];
    if (!words.every(word => simplifyText(name).includes(word))) {
      continue;
    }
    shown++;

    const item = document.createElement("li");
    item.className = "source-item";

    const title = document.createElement("span");
    title.className = "source-title";
    title.textContent = name;
    if (hasArabic(name)) {
      title.dir = "rtl";
      title.lang = "ar";
    }
    item.appendChild(title);

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
    item.appendChild(used);
    list.appendChild(item);
  }

  document.getElementById("sources-count").textContent =
    shown + " / " + allSources.length + " " + pageText.sourcesCount[lang];
}

function drawPage() {
  const lang = currentLanguage;
  document.getElementById("page-title").textContent = pageText.sourcesTitle[lang];
  document.getElementById("sources-intro").textContent = pageText.sourcesIntro[lang];
  document.title = pageText.sourcesTitle[lang];
  setMetaDescription(pageText.sourcesIntro[lang]);
  document.getElementById("sources-filter-label").textContent = pageText.sourcesFilter[lang];
  filterBox.placeholder = pageText.sourcesFilter[lang] + "…";
  showSources();
}

startPage();
