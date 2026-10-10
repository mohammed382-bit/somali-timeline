// =============================================================
// media.js: THE VIDEO, PICTURES AND MAPS FOR EACH EPISODE
//
// Each episode number can have:
//   video:    a YouTube link (copy it from the browser's address bar)
//   pictures: a list of pictures and maps. For each one:
//     file:    where the picture is, e.g. "media/ep02/punt-relief.jpg"
//     type:    "photo" (a real photo or artifact)
//              "map"   (shown under Maps instead of Pictures)
//              "ai"    (AI-generated: the page labels it automatically)
//     caption: what the picture shows, in English and Somali
//     credit:  where it came from (your name, a book and page, a website...)
//
// Episodes that are not listed here simply show "video coming soon".
// =============================================================

const media = {

  1: {
    video: "",   // paste the YouTube link for episode 1 here, between the quotes
    pictures: [
      {
        file: "media/ep01/Representation-of-the-supercontinent-of-Pangea-with-outlines-of-the-present-continents.webp",
        type: "map",
        caption: {
          en: "The supercontinent Pangaea, with the outlines of today's continents",
          so: "Qaaradda weyn ee Pangaea, iyadoo lagu muujiyay xuduudaha qaaradaha maanta"
        },
        credit: { en: "From the internet (source to be added)", so: "Laga soo qaaday internetka (ilaha waa la soo dari doonaa)" }
      },
      {
        file: "media/ep01/130.jpeg",
        type: "map",
        caption: {
          en: "The spread of the descendants of Noah's sons: Japheth, Ham and Shem",
          so: "Faafitaankii faraca wiilashii Nabi Nuux: Yaafith, Xaam iyo Saam"
        },
        credit: { en: "From the internet (source to be added)", so: "Laga soo qaaday internetka (ilaha waa la soo dari doonaa)" }
      },
      {
        file: "media/ep01/HESxLfGWYAAENAW.jpg",
        type: "map",
        caption: {
          en: "The Table of Nations (Genesis 10): the lands of the descendants of Japheth, Ham and Shem",
          so: "Liiska Ummadaha (Bilowgii 10): dhulalka faraca Yaafith, Xaam iyo Saam"
        },
        credit: { en: "From the internet (source to be added)", so: "Laga soo qaaday internetka (ilaha waa la soo dari doonaa)" }
      },
      {
        file: "media/ep01/cushitic-homeland-maps.jpg",
        type: "map",
        caption: {
          en: "Map 1: the homeland of the Cushitic peoples, 5000–4000 BCE. Map 2: how it had spread by about 3000 BCE, when some ancestors of today's peoples of the Horn reached the northern coasts.",
          so: "Khariidada koowaad waxay muujinaysaa degaankii Kowshiina inta u dhaxaysay 5000-4000 NCKH, khariidada labaadna waxay muujinaysaa sida deggaankaas u fiday waqti ku aadan 3000 NCKH. Waxaa xeebaha waqooyi soo gaaray qaar ka mid ah ab-awalada dadka maanta ku nool Geeska Afrika."
        },
        credit: {
          en: "Maps from Soomaaliya iyo Taariikhdeedii Hore (Cabdulqaadir Salaad Dhoorre), p. 18",
          so: "Khariidado laga soo qaaday Soomaaliya iyo Taariikhdeedii Hore (Cabdulqaadir Salaad Dhoorre), b. 18"
        }
      }
    ]
  }

};
