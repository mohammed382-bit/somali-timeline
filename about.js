// =============================================================
// about.js: BUILDS THE ABOUT PAGE (about.html)
// The words are in data.js, in the "about" object.
// =============================================================

// A small helper: create an element with a class and some text in one line
function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

// Fill in the page (common.js calls this whenever the language changes)
function drawPage() {
  const lang = currentLanguage;

  document.getElementById("page-title").textContent = about.title[lang];
  document.getElementById("about-byline").textContent = pageText.byline[lang];
  document.title = about.title[lang];
  setMetaDescription(about.title[lang] + " · " + pageText.seriesTitle[lang]);

  const content = document.getElementById("about-content");
  content.innerHTML = "";

  // 1. Method and Disclaimer: each is a numbered list of points
  for (const section of about.sections) {
    const box = makeElement("section", "about-box");
    box.appendChild(makeElement("h2", "section-heading", section.heading[lang]));

    const list = makeElement("ol", "about-points");
    for (const point of section.points[lang]) {
      list.appendChild(makeElement("li", "", point));
    }
    box.appendChild(list);
    content.appendChild(box);
  }

  // 2. Thanks: the list of scholars, then the special thanks
  const thanksBox = makeElement("section", "about-box");
  thanksBox.appendChild(makeElement("h2", "section-heading", about.thanksHeading[lang]));
  thanksBox.appendChild(makeElement("p", "", about.thanksIntro[lang]));
  const names = makeElement("ul", "thanks-names");
  for (const name of about.thanksNames) {
    names.appendChild(makeElement("li", "", name));
  }
  thanksBox.appendChild(names);
  thanksBox.appendChild(makeElement("p", "", about.thanksSpecial[lang]));
  content.appendChild(thanksBox);

  // 3. The closing poem, then the motto
  const poemBox = makeElement("section", "about-box poem-box");
  poemBox.appendChild(makeElement("h2", "section-heading", about.poemHeading[lang]));
  const poem = makeElement("div", "poem");
  for (const line of about.poem) {
    poem.appendChild(makeElement("p", "", line));
  }
  poemBox.appendChild(poem);
  poemBox.appendChild(makeElement("p", "about-motto", pageText.motto[lang]));
  poemBox.appendChild(makeElement("p", "about-motto-source", "— " + pageText.mottoSource[lang]));
  content.appendChild(poemBox);
}

// Draw the page for the first time
startPage();
