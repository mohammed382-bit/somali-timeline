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
//     link:    (optional) the web page the picture came from; the credit links to it
//
// Episodes that are not listed here simply show "video coming soon".
// =============================================================

const media = {

  1: {
    video: "https://www.youtube.com/watch?v=01kuNUpZWoA",
    pictures: [
      {
        file: "media/ep01/meroe-pyramids-1821.jpg",
        type: "photo",
        caption: {
          en: "The pyramids of Meroe, one of the capitals of the Kingdom of Kush, as drawn by Frédéric Cailliaud in 1821",
          so: "Ahraamta Meroe, mid ka mid ah caasimadihii Boqortooyadii Kuush, sidii uu Frédéric Cailliaud u sawiray 1821"
        },
        credit: { en: "Frédéric Cailliaud, 1826 · Wikimedia Commons (public domain)", so: "Frédéric Cailliaud, 1826 · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File%3ANubian_pyramids_of_Meroe_in_1821.jpg"
      },
      {
        file: "media/ep01/hadendoa-woman-1935.jpg",
        type: "photo",
        caption: {
          en: "A Hadendoa woman of the Beja people, the \"Northern Cushites\" who stayed in the old land of Kush (photograph, 1935)",
          so: "Haweeney Hadendoa ah oo ka mid ah qolada Beja, \"Kushitikada Waqooyi\" ee ku haray dhulkii hore ee Kuush (sawir, 1935)"
        },
        credit: { en: "Unknown photographer, 1935 · Wikimedia Commons (public domain)", so: "Sawir-qaade aan la aqoon, 1935 · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File%3AHadendoa_woman.jpg"
      },
      {
        file: "media/ep01/green-horn-of-africa-scene.mp4",
        type: "ai",
        caption: {
          en: "How the Horn of Africa may have looked when its rivers and lakes never ran dry: water, reeds, fish and herders' huts",
          so: "Sida uu u ekaan karay Geeska Afrika markii webiyadiisa iyo harooyinkiisu aysan engegin: biyo, cawsduur, kalluun iyo aqallada xoolo-dhaqatada"
        },
        credit: { en: "Video made for the series", so: "Muuqaal loo sameeyay taxanaha" }
      },
      {
        file: "media/ep01/giraffe-rock-engraving-libya.jpg",
        type: "photo",
        caption: {
          en: "A rock engraving of a giraffe in Wadi In Habeter, Libya, from the time when the Sahara was green pasture",
          so: "Sawir geri ah oo dhagax lagu xardhay, Waadi In Habeter, Liibiya, waqtigii Saxaraha weynaa uu ahaa daaq cagaaran"
        },
        credit: { en: "Leo Frobenius · Wikimedia Commons (CC BY-SA 4.0)", so: "Leo Frobenius · Wikimedia Commons (CC BY-SA 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File%3AFelsbild_einer_Giraffe_in_Libyen_%28Wadi_In_Habeter%2C_Messak%29.tif"
      },
      {
        file: "media/ep01/narmer-palette.jpg",
        type: "photo",
        caption: {
          en: "The Narmer Palette, from the time the first dynasty of the Pharaohs took power in Egypt, about 3,100 years before the Prophet Jesus",
          so: "Looxa Narmer, waqtigii qoyskii ugu horreeyay ee Faraacinada uu la wareegay maamulka Masar, qiyaastii 3,100 sano ka hor Nabi Ciise CS"
        },
        credit: { en: "Heagy1 · Wikimedia Commons (CC BY-SA 4.0)", so: "Heagy1 · Wikimedia Commons (CC BY-SA 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File%3ANarmer_Palette_%28verso%29.jpg"
      },
      {
        file: "media/ep01/proto-cuneiform-tablet.jpg",
        type: "photo",
        caption: {
          en: "An early clay tablet from Mesopotamia with pictures pressed into it, the beginning of the writing later known as cuneiform",
          so: "Loox dhoobo ah oo hore oo ka yimid Mesopotamia, sawirro lagu xardhay, bilowgii qoraalka markii danbe loo aqoonsaday \"Mismaariyadda\""
        },
        credit: { en: "Daderot; derivative by Zunkir · Wikimedia Commons (CC BY-SA 4.0)", so: "Daderot; waxaa beddelay Zunkir · Wikimedia Commons (CC BY-SA 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File%3AProto_cuneiform_tablet_OIM_A02516.jpg"
      },
      {
        file: "media/ep01/laas-geel-rock-paintings.jpg",
        type: "photo",
        caption: {
          en: "Rock paintings of cattle at Laas Geel, near Hargeisa, left by ancient herders in the Somali land",
          so: "Sawirrada lo'da ee gebiga Laas Geel, oo u dhow Hargeysa, ay ka tageen xoolo-dhaqatadii hore ee dhulka Soomaalida"
        },
        credit: { en: "Theodor Hoffsten · Wikimedia Commons (CC BY-SA 3.0)", so: "Theodor Hoffsten · Wikimedia Commons (CC BY-SA 3.0)" },
        link: "https://commons.wikimedia.org/wiki/File%3ALaas_Geel_rock_paintings.JPG"
      },
      {
        file: "media/ep01/djibouti-somali-dance-1910.jpg",
        type: "photo",
        caption: {
          en: "A Somali dance in Djibouti around 1910: the dances of the people of Ham are built on rhythm, clapping and chanting (jaan, sacab and jiib)",
          so: "Ciyaar Soomaaliyeed oo Jabuuti ka dhacday qiyaastii 1910: ciyaaraha reer Xaam waxay ku dhisan yihiin jaan, sacab iyo jiib"
        },
        credit: { en: "J.-G. Mody, photographer, 1910 · Wikimedia Commons (public domain)", so: "J.-G. Mody, sawir-qaade, 1910 · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File%3ADjibouti_Somali_dance_1910s.jpg"
      },
      {
        file: "media/ep01/Representation-of-the-supercontinent-of-Pangea-with-outlines-of-the-present-continents.webp",
        type: "map",
        caption: {
          en: "The supercontinent Pangaea, with the outlines of today's continents",
          so: "Qaaradda weyn ee Pangaea, iyadoo lagu muujiyay xuduudaha qaaradaha maanta"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep01/130.jpeg",
        type: "map",
        caption: {
          en: "The spread of the descendants of Noah's sons: Japheth, Ham and Shem",
          so: "Faafitaankii faraca wiilashii Nabi Nuux: Yaafith, Xaam iyo Saam"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep01/HESxLfGWYAAENAW.jpg",
        type: "map",
        caption: {
          en: "The Table of Nations (Genesis 10): the lands of the descendants of Japheth, Ham and Shem",
          so: "Liiska Ummadaha (Bilowgii 10): dhulalka faraca Yaafith, Xaam iyo Saam"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
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
  },

  // Pictures below come from Wikimedia Commons (free licences); each credit links to its source page.
  2: {
    video: "https://www.youtube.com/watch?v=ZkUyqWDqtPY",
    pictures: [
      {"file": "media/ep02/punt-incense-trees-relief.webp", "type": "photo", "caption": {"en": "Relief at Hatshepsut's temple, Deir el-Bahari: incense trees from Punt being carried", "so": "Sawir dhagax lagu qoray oo ku yaal macbadka Hatshepsut ee Daarul Baxaari: geedo foox ah oo laga keenay Boont oo la qaadayo"}, "credit": {"en": "Ismoon · CC BY-SA 4.0 · Wikimedia Commons", "so": "Ismoon · CC BY-SA 4.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Incense_trees_transport._Punt_relief._Mortuary_Temple_of_Hatshepsut,_Deir_el-Bahari.jpg"},
      {"file": "media/ep02/punt-village-relief.webp", "type": "photo", "caption": {"en": "Relief at Deir el-Bahari showing the Egyptian expedition in Punt: houses of a Punt village", "so": "Sawir dhagax lagu qoray oo ku yaal Daarul Baxaari, muujinaya safarkii Masaarida ee Boont: guryaha tuulo reer Boont ah"}, "credit": {"en": "Neithsabes · CC BY-SA 3.0 · Wikimedia Commons", "so": "Neithsabes · CC BY-SA 3.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Deir_el_Bahari_080511.jpg"},
      {"file": "media/ep02/periplus-map-schoff-1912.webp", "type": "map", "caption": {"en": "Map made in 1912 by W. H. Schoff to illustrate the Periplus of the Erythraean Sea", "so": "Khariidad uu W. H. Schoff sameeyay 1912 si uu u sharxo buugga Periplus of the Erythraean Sea"}, "credit": {"en": "Wilfred H. Schoff · Public domain · Wikimedia Commons", "so": "Wilfred H. Schoff · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Periplus_Maris_Erythraei_World_Map_b29353051_0335.jpg"}
    ]
  },

  3: {
    video: "https://www.youtube.com/watch?v=R-INYmAg9Kc",
    pictures: [
      {"file": "media/ep03/aw-barkhadle-enclosure.webp", "type": "photo", "caption": {"en": "The sacred enclosure at Aw-Barkhadle", "so": "Xayndaabka barakeysan ee Aw-Barkhadle"}, "credit": {"en": "Tinasimonrowe · CC BY-SA 4.0 · Wikimedia Commons", "so": "Tinasimonrowe · CC BY-SA 4.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Fig._8._The_Sacred_enclosure_at_Aw-Barkhadle.jpg"}
    ]
  },

  4: {
    video: "https://www.youtube.com/watch?v=UJhiu5jlFd8",
    pictures: [
      {
        file: "media/ep04/adulis-throne-drawing.jpg",
        type: "photo",
        caption: {
          en: "A drawing of the stone throne of Adulis and the inscribed stele beside it, the \"Monumentum Adulitanum\" that Cosmas copied around 520 CE",
          so: "Sawir-gacmeed muujinaya kursigii dhagaxa ahaa ee Adulis iyo tiirka qoraalka ku xardhan yahay ee ag taagan, \"Monumentum Adulitanum\", kii Cosmas koobiyeeyay qiyaastii 520 NCKD"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep04/cosmas-world-map.jpg",
        type: "map",
        caption: {
          en: "The world as Cosmas pictured it in his Christian Topography: the known lands surrounded by the ocean, with the four winds at the sides",
          so: "Adduunka sida uu Cosmas ugu sawiray buuggiisa Christian Topography: dhulka la yaqaan oo badweyntu ku wareegsan tahay, iyo afarta dabaylood oo dhinacyada ah"
        },
        credit: { en: "Christian Topography of Cosmas, 6th-century manuscript copy (public domain)", so: "Christian Topography ee Cosmas, nuqul gacan-ku-qoran (hanti guud)" }
      },
      {
        file: "media/ep04/cosmas-world-mountain.jpg",
        type: "map",
        caption: {
          en: "Another of Cosmas's drawings: the world as a great mountain, with the sun rising and setting behind it",
          so: "Sawir kale oo Cosmas: adduunka oo ah buur weyn, qorraxduna gadaasheeda ka soo baxayso kana dhacayso"
        },
        credit: { en: "Christian Topography of Cosmas, manuscript copy (public domain)", so: "Christian Topography ee Cosmas, nuqul gacan-ku-qoran (hanti guud)" }
      },
      {
        file: "media/ep04/ptolemy-engraving.jpg",
        type: "photo",
        caption: {
          en: "Claudius Ptolemy of Alexandria, the geographer who around 150 CE called the Somali coast Azania and the interior Barbaria (an imagined portrait from a later engraving)",
          so: "Claudius Ptolemaeus (Batlaymuus) ee Iskandariya, juquraafiyihii qiyaastii 150 NCKD xeebaha Soomaaliya ugu yeeray Azania, gudahana Barbaria (sawir male ah oo xardh ah, waqti danbe la sameeyay)"
        },
        credit: { en: "Engraving, 16th century (public domain)", so: "Xardh, qarnigii 16aad (hanti guud)" }
      },
      {
        file: "media/ep04/ras-hafun-from-space.jpg",
        type: "photo",
        caption: {
          en: "The Hafun peninsula (Xaafuun) seen from space: the ancient port of Opone stood here, at the eastern tip of Africa",
          so: "Jasiirad-u-ekaha Xaafuun oo hawada sare laga sawiray: halkan ayay ku tiil dekeddii hore ee Opone, cirifka bari ee Afrika"
        },
        credit: { en: "NASA, photograph from space (public domain)", so: "NASA, sawir hawada sare laga qaaday (hanti guud)" }
      },
      {
        file: "media/ep04/hafun-harbour-plan.jpg",
        type: "map",
        caption: {
          en: "Plan of Hafun harbour showing the Main Site and Trench I, from Neville Chittick's excavation",
          so: "Khariidadda dekedda Xaafuun oo muujinaysa Goobta Weyn (Main Site) iyo Godka I, ee qodistii Neville Chittick"
        },
        credit: { en: "Neville Chittick, British-Somali Expedition 1975 (Azania, 1976)", so: "Neville Chittick, British-Somali Expedition 1975 (Azania, 1976)" }
      },
      {
        file: "media/ep04/hafun-excavation-trenches.jpg",
        type: "photo",
        caption: {
          en: "Excavation trenches dug into the sand at an ancient trading site on the Somali coast",
          so: "Godad qodis ah oo ciidda laga qoday, goob ganacsi oo qadiim ah oo ku taal xeebta Soomaaliyeed"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep04/hafun-boats-headland.jpg",
        type: "photo",
        caption: {
          en: "Boats on the shore at Hafun; the arrow marks the site on the headland across the water",
          so: "Doonyo xeebta Xaafuun yaal; falaartu waxay tilmaamaysaa goobta ku taal madaxa dhulka ee biyaha ka shisheeya"
        },
        credit: { en: "From Neville Chittick's report on the 1975 expedition", so: "Warbixinta Neville Chittick ee sahankii 1975" }
      },
      {
        file: "media/ep04/hafun-coast.jpg",
        type: "photo",
        caption: {
          en: "The coast and headland at Hafun",
          so: "Xeebta iyo madaxa dhulka ee Xaafuun"
        },
        credit: { en: "From Neville Chittick's report on the 1975 expedition", so: "Warbixinta Neville Chittick ee sahankii 1975" }
      },
      {
        file: "media/ep04/hafun-town-today.jpg",
        type: "photo",
        caption: {
          en: "Hafun today, with the hills of the peninsula behind the town",
          so: "Xaafuun maanta, buuraha jasiirad-u-ekahana magaalada gadaasheeda ka muuqdaan"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep04/hafun-salt-works-pier.jpg",
        type: "photo",
        caption: {
          en: "The ruins of the old salt-works pier at Hafun, reaching into the Indian Ocean",
          so: "Burburka buundadii dekedda milixda ee Xaafuun, oo Badweynta Hindiya u fidsan"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep04/sabaean-letters-on-stone.jpg",
        type: "photo",
        caption: {
          en: "Letters in the ancient South Arabian (Sabaean) script cut into a stone in the Somali land, a trace of contact across the sea",
          so: "Xarfo ku qoran farta Carabta Koonfureed ee hore (Saba'iga) oo dhagax lagu xardhay dhulka Soomaalida, raad muujinaya xiriirkii badda laga gudbay"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep04/rock-inscription-dhagax-guure.jpg",
        type: "photo",
        caption: {
          en: "Painted signs resembling Himyarite writing at Dhagax-Guure near Hargeisa, recorded by Dr. Sada Mire",
          so: "Calaamado la sawiray oo u eg farta Ximyar, Dhagax-Guure oo u dhow Hargeysa, ay diiwaangelisay Dr. Sada Mire"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep04/aden-harbour-dhow.jpg",
        type: "photo",
        caption: {
          en: "Porters unloading a dhow in the harbour of Aden, the port where the Persian fleet landed to help Sayf ibn Dhi Yazan",
          so: "Xammaaliin dejinaya doon ku jirta dekedda Cadan, dekeddii ay ku xirteen maraakiibtii Faaris ee u gurmanaysay Sayf bin Thii Yazan"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep04/marib-ancient-dam-sluice.jpg",
        type: "photo",
        caption: {
          en: "The remains of the ancient great dam of Ma'rib, the capital of the kingdom of Saba, whose bursting is told in the Qur'an",
          so: "Haraadiga biya-xireenkii weynaa ee qadiimka ahaa ee Ma'rib, caasimaddii boqortooyada Saba, kii jabkiisa Qur'aanku ka sheekeeyay"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep04/marib-dam-modern.jpg",
        type: "photo",
        caption: {
          en: "The modern dam at Ma'rib in Yemen, built near the site of the ancient one",
          so: "Biya-xireenka casriga ah ee Ma'rib ee dalka Yaman, oo laga dhisay meel u dhow kii hore"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep04/narseh-investiture-relief.jpg",
        type: "photo",
        caption: {
          en: "Rock relief at Naqsh-e Rostam in Iran showing the Sasanian king Narseh (r. 293–302 CE), said to have had relations with \"Zand Afrik Shah\"",
          so: "Sawir dhagax lagu qoray oo ku yaal Naqsh-e Rostam ee Iiraan, muujinaya boqorkii Saasaaniyiinta Narseh (293–302 NCKD), kii la sheego in uu xiriir la lahaa \"Zand Afrik Shah\""
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep04/column-of-constantine.jpg",
        type: "photo",
        caption: {
          en: "The Column of Constantine in Istanbul, raised when Constantine founded his new capital, Constantinople, in 330 CE",
          so: "Tiirka Qustantiin ee Istanbuul, oo la taagay markii Qustantiin aasaasay caasimaddiisii cusbayd ee Qusdandiiniya, 330 NCKD"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      },
      {
        file: "media/ep04/najran-al-ukhdud-wall.jpg",
        type: "photo",
        caption: {
          en: "An ancient stone wall at al-Ukhdud, Najran, the site linked with the People of the Trench (Ashab al-Ukhdud)",
          so: "Darbi dhagax ah oo qadiim ah oo ku yaal al-Ukhdud, Najraan, goobta lala xiriiriyo أصحاب الأخدود"
        },
        credit: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
      }
    ]
  },

  5: {
    video: "",   // paste the YouTube link for episode 5 here when it is online
    pictures: [
      {
        file: "media/ep05/jabal-nuur-xiraa.jpg",
        type: "photo",
        caption: {
          en: "Jabal al-Nour and the cave of Hira, where the first revelation came in 610 CE",
          so: "Jabal al-Nuur iyo godka Xiraa, halkii waxyigii ugu horreeyay ku soo degay 610 M."
        },
        credit: { en: "Sadath i · Wikimedia Commons (CC BY-SA 4.0)", so: "Sadath i · Wikimedia Commons (CC BY-SA 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Jabal_al-Nour_And_cave_Hira.jpg"
      },
      {
        file: "media/ep05/makka-1880.jpg",
        type: "photo",
        caption: {
          en: "Mecca around 1880, one of the earliest photographs of the city (Muhammad Sadiq Bey)",
          so: "Makka qiyaastii 1880, mid ka mid ah sawirradii ugu horreeyay ee magaalada (Muxammad Saadiq Bey)"
        },
        credit: { en: "Original Photograph by Muhammad Sadiq Bey; uploaded original media file by Khalili Collections · Wikimedia Commons (CC BY-SA 3.0)", so: "Original Photograph by Muhammad Sadiq Bey; uploaded original media file by Khalili Collections · Wikimedia Commons (CC BY-SA 3.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Edited_Khalili_Collection_Hajj_and_Arts_of_Pilgrimage_arc.pp_0211.02-Photo_of_Mecca_by_Muhammad_Sadiq_Bey_ca.1880-ccbysa3.0.png"
      },
      {
        file: "media/ep05/khariidad-hijrada-xabasha.jpg",
        type: "map",
        caption: {
          en: "Map of the Hijaz and the routes of the migrations to Abyssinia and to Medina",
          so: "Khariidadda Xijaas iyo waddooyinka hijrada Xabasha iyo Madiina"
        },
        credit: { en: "Original: ExploreTheMed Derivative: باسم · Wikimedia Commons (CC BY-SA 3.0)", so: "Original: ExploreTheMed Derivative: باسم · Wikimedia Commons (CC BY-SA 3.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Hejaz622-ar.png"
      },
      {
        file: "media/ep05/najaashi-iyo-qureysh-rashiid.jpg",
        type: "photo",
        caption: {
          en: "The Najashi refuses the envoys of Quraysh: a 14th-century painting from Rashid al-Din's Jami' al-Tawarikh (the Prophet is not shown)",
          so: "Najaashigu wuxuu diiday ergadii Qureysh: sawir-gacmeed qarnigii 14aad ah oo ka mid ah Jaamic al-Tawaariikh ee Rashiid al-Diin (Nabiga kuma jiro)"
        },
        credit: { en: "Rashid-al-Din Hamadani · Wikimedia Commons (public domain)", so: "Rashid-al-Din Hamadani · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Hijra_Abyssinia_%28Rashid_ad-Din%29.jpg"
      },
      {
        file: "media/ep05/najaashi-iyo-qureysh-edinburgh.jpg",
        type: "photo",
        caption: {
          en: "The same scene in the Edinburgh copy of Jami' al-Tawarikh",
          so: "Isla muuqaalka, nuqulka Edinburgh ee Jaamic al-Tawaariikh"
        },
        credit: { en: "François-Etienne · Wikimedia Commons (CC BY 4.0)", so: "François-Etienne · Wikimedia Commons (CC BY 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Migration_en_Abyssinie.jpg"
      },
      {
        file: "media/ep05/masjidka-negash.jpg",
        type: "photo",
        caption: {
          en: "The Negash mosque in Tigray, where the tomb of the Najashi is said to be",
          so: "Masjidka Negash ee Tigray, halka loo nisbeeyo qabriga Najaashiga"
        },
        credit: { en: "Evan Williams · Wikimedia Commons (CC BY-SA 4.0)", so: "Evan Williams · Wikimedia Commons (CC BY-SA 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File:NegashMosque.jpg"
      },
      {
        file: "media/ep05/aksum-tiirarka.jpg",
        type: "photo",
        caption: {
          en: "The great stelae of Aksum, capital of the kingdom of the Najashi",
          so: "Tiirarka waaweyn ee Aksum, caasimaddii boqortooyada Najaashiga"
        },
        credit: { en: "Jnyssen · Wikimedia Commons (CC BY-SA 4.0)", so: "Jnyssen · Wikimedia Commons (CC BY-SA 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Aksum_main_stelae.jpg"
      },
      {
        file: "media/ep05/hiraqle-lacag.jpg",
        type: "photo",
        caption: {
          en: "Gold coin of Heraclius, emperor of Eastern Rome (610–641)",
          so: "Lacag dahab ah oo uu suubiyay Hiraqle, imbaraadoorkii Roomaanka-Bari (610–641)"
        },
        credit: { en: "Unknown author · Wikimedia Commons (CC0)", so: "Sawir-qaade/qoraa aan la aqoon · Wikimedia Commons (CC0)" },
        link: "https://commons.wikimedia.org/wiki/File:Solidus_of_Heraclius_and_Heraclius_Constantine_MET_sf04-2-821s1.jpg"
      },
      {
        file: "media/ep05/kisra-khosrow2-lacag.jpg",
        type: "photo",
        caption: {
          en: "Coin of the Persian king Khosrow II, minted in 613, the year before Persia took Jerusalem",
          so: "Lacagta boqorkii Faaris Kisra (Khusraw II), la suubiyay 613, sannad ka hor intii Faaris qabsan Qudus"
        },
        credit: { en: "Classical Numismatic Group · Wikimedia Commons (CC BY-SA 3.0)", so: "Classical Numismatic Group · Wikimedia Commons (CC BY-SA 3.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Coin_of_Khosrow_II_facing%2C_613_mint.jpg"
      },
      {
        file: "media/ep05/dagaalka-rooma-faaris-611-624.jpg",
        type: "map",
        caption: {
          en: "The wars between Rome and Persia, 611–624: the Persian advance",
          so: "Dagaalladii Rooma iyo Faaris, 611–624: horumarkii Faaris"
        },
        credit: { en: "Mohammad Adil (talk · contribs) · Wikimedia Commons (CC BY 3.0)", so: "Mohammad Adil (talk · contribs) · Wikimedia Commons (CC BY 3.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Byzantine-persian_campaigns_611-624-mohammad_adil_rais-pt.svg"
      },
      {
        file: "media/ep05/dagaalka-rooma-faaris-624-628.jpg",
        type: "map",
        caption: {
          en: "Heraclius's victories over Persia, 624–628",
          so: "Guulihii Hiraqle ee Faaris, 624–628"
        },
        credit: { en: "Mohammad Adil (talk · contribs) · Wikimedia Commons (CC BY 3.0)", so: "Mohammad Adil (talk · contribs) · Wikimedia Commons (CC BY 3.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Byzantine-persian_campaigns_624-628-mohammad_adil_rais-pt.svg"
      },
      {
        file: "media/ep05/tang-taizong.jpg",
        type: "photo",
        caption: {
          en: "Emperor Taizong of the Tang dynasty, which took power in China in 618",
          so: "Imbaraadoor Taizong ee boqortooyadii Tang, oo xukunka Shiinaha la wareegtay 618"
        },
        credit: { en: "Unknown artist · Wikimedia Commons (public domain)", so: "Sawir-qaade/qoraa aan la aqoon · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Tang_Taizong_%28cropped%29.jpg"
      },
      {
        file: "media/ep05/bab-al-mandab-nasa.jpg",
        type: "photo",
        caption: {
          en: "The strait of Bab al-Mandab between Africa and Arabia, seen from space",
          so: "Marin-cidhiidhiga Baab al-Mandab ee u dhexeeya Afrika iyo Carabta, oo hawada sare laga sawiray"
        },
        credit: { en: "NASA/METI/AIST/Japan Space Systems, and U.S./Japan ASTER Science Team · Wikimedia Commons (public domain)", so: "NASA/METI/AIST/Japan Space Systems, and U.S./Japan ASTER Science Team · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Bab-el-Mandeb_Strait%2C_Africa-Arabia_%28ASTER%29.jpg"
      },
      {
        file: "media/ep05/bab-al-mandab-badda-cas.jpg",
        type: "photo",
        caption: {
          en: "The Red Sea and Bab al-Mandab, seen by satellite",
          so: "Badda Cas iyo Baab al-Mandab, sawir dayax-gacmeed"
        },
        credit: { en: "NASA · Wikimedia Commons (public domain)", so: "NASA · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Bab-el-Mandeb_And_Red_Sea_NASA_photo.webp"
      },
      {
        file: "media/ep05/doonni-zaruuq-badda-cas.jpg",
        type: "photo",
        caption: {
          en: "A Yemeni zarug, a traditional boat of the Red Sea",
          so: "Doonni Yamani ah (zaruuq), doonyaha dhaqameed ee Badda Cas"
        },
        credit: { en: "Грищук ЮН · Wikimedia Commons (CC BY-SA 3.0)", so: "Грищук ЮН · Wikimedia Commons (CC BY-SA 3.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Yemenise_Zarug.JPG"
      },
      {
        file: "media/ep05/doonni-badda-cas-1832.jpg",
        type: "photo",
        caption: {
          en: "Boats on the Red Sea, an engraving from 1832",
          so: "Doonyo Badda Cas ku jira, sawir-xardh 1832"
        },
        credit: { en: "Edward Goodall · Wikimedia Commons (CC0)", so: "Edward Goodall · Wikimedia Commons (CC0)" },
        link: "https://commons.wikimedia.org/wiki/File:1832-40-El_Wuish%2C_Red_Sea.png"
      },
      {
        file: "media/ep05/cosmas-khariidad.jpg",
        type: "map",
        caption: {
          en: "The map of the world by Cosmas, who wrote that Himyar and Barbaria are two days apart by sea",
          so: "Khariidadda dunida ee Cosmas, kii qoray in Ximyar iyo Barbariya ay laba casho bad isu jiraan"
        },
        credit: { en: "Cosmas Indicopleustes · Wikimedia Commons (public domain)", so: "Cosmas Indicopleustes · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Kosmas_Indikopleustes%2C_Map.jpg"
      },
      {
        file: "media/ep05/cosmas-qoraal-gacmeed.jpg",
        type: "photo",
        caption: {
          en: "An 11th-century manuscript of Cosmas's Christian Topography (Florence)",
          so: "Qoraal-gacmeed qarnigii 11aad ah oo ka mid ah Christian Topography ee Cosmas (Firenze)"
        },
        credit: { en: "Sailko · Wikimedia Commons (CC BY 3.0)", so: "Sailko · Wikimedia Commons (CC BY 3.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Costantinopoli%2C_cosma_indicopleuste%2C_topographia_christiana%2C_XI_sec%2C_pluteo_9.28%2C_01.JPG"
      },
      {
        file: "media/ep05/saylac-masjid.jpg",
        type: "photo",
        caption: {
          en: "An old mosque in Zeila",
          so: "Masjid qadiim ah oo ku yaal Saylac"
        },
        credit: { en: "Walter Callens · Wikimedia Commons (CC BY 2.0)", so: "Walter Callens · Wikimedia Commons (CC BY 2.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Zeila_Mosque.jpg"
      },
      {
        file: "media/ep05/saylac-qiblatayn.jpg",
        type: "photo",
        caption: {
          en: "The Mosque of the Two Qiblas (Masjid al-Qiblatayn) in Zeila",
          so: "Masjidka Labada Qiblo (Masjid al-Qiblatayn) ee Saylac"
        },
        credit: { en: "Nabataea.net · Wikimedia Commons (CC BY 3.0)", so: "Nabataea.net · Wikimedia Commons (CC BY 3.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Qiblatayn_Zeila.jpg"
      },
      {
        file: "media/ep05/saylac-1885.jpg",
        type: "photo",
        caption: {
          en: "The waterfront of Zeila in 1885, drawn by Philipp Paulitschke",
          so: "Xeebta Saylac 1885, sidii uu u sawiray Philipp Paulitschke"
        },
        credit: { en: "Philipp Paulitschke · Wikimedia Commons (CC BY-SA 4.0)", so: "Philipp Paulitschke · Wikimedia Commons (CC BY-SA 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Zeila_Waterfront.png"
      },
      {
        file: "media/ep05/saylac-burbur.jpg",
        type: "photo",
        caption: {
          en: "Ruins in Zeila",
          so: "Burburka Saylac"
        },
        credit: { en: "Abdourazak Badar · Wikimedia Commons (CC BY-SA 1.0)", so: "Abdourazak Badar · Wikimedia Commons (CC BY-SA 1.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Zeila_ruins.jpeg"
      },
      {
        file: "media/ep05/saylac-sawir-2.jpg",
        type: "photo",
        caption: {
          en: "Zeila",
          so: "Saylac"
        },
        credit: { en: "Future Brothers Production · Wikimedia Commons (public domain)", so: "Future Brothers Production · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Saylac%2C_Somaliland.jpg"
      },
      {
        file: "media/ep05/madiina-qiblatayn.jpg",
        type: "photo",
        caption: {
          en: "Masjid al-Qiblatayn in Medina, for comparison: there the old qibla (Jerusalem) was north and the new one (the Kaaba) south",
          so: "Masjidka Labada Qiblo ee Madiina, isbarbardhig: halkaas qibladii hore (Qudus) waqooyi bay ahayd, tan danbena (Kacbada) koonfur"
        },
        credit: { en: "Aiman titi · Wikimedia Commons (CC BY-SA 3.0)", so: "Aiman titi · Wikimedia Commons (CC BY-SA 3.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Masjid_al-Qiblatain.jpg"
      },
      {
        file: "media/ep05/istakhri-khariidad.jpg",
        type: "map",
        caption: {
          en: "A world map of al-Istakhri (10th century), who called Zeila a port for crossing to Yemen and the Hijaz",
          so: "Khariidadda dunida ee al-Istakhri (qarnigii 10aad), kii Saylac ku tilmaamay deked looga tallaabo Yaman iyo Xijaas"
        },
        credit: { en: "Istakhri · Wikimedia Commons (public domain)", so: "Istakhri · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Al_Istakhri_map.jpg"
      },
      {
        file: "media/ep05/ibn-xawqal-khariidad.jpg",
        type: "map",
        caption: {
          en: "A world map after Ibn Hawqal, who wrote that most of Yemen's hides came from Zeila",
          so: "Khariidad dunida ah oo ku salaysan Ibnu Xawqal, kii qoray in hargaha Yaman intooda badani Saylac ka iman jireen"
        },
        credit: { en: "After Ibn Hawqal · Wikimedia Commons (public domain)", so: "After Ibn Hawqal · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:World_map_based_upon_the_Ibn_Hawqal_model.png"
      },
      {
        file: "media/ep05/idriisi-tabula-rogeriana.jpg",
        type: "map",
        caption: {
          en: "The world map of al-Idrisi (1154 CE), in Konrad Miller's copy",
          so: "Khariidadda dunida ee al-Idriisi (1154 M.), nuqulka Konrad Miller"
        },
        credit: { en: "Konrad Miller (copy and transliteration) · Wikimedia Commons (public domain)", so: "Konrad Miller (copy and transliteration) · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:TabulaRogeriana.jpg"
      },
      {
        file: "media/ep05/idriisi-qoraal-gacmeed.jpg",
        type: "photo",
        caption: {
          en: "A manuscript of al-Idrisi's Nuzhat al-Mushtaq (Bibliothèque nationale de France)",
          so: "Qoraal-gacmeed ka mid ah Nuzhat al-Mushtaaq ee al-Idriisi (Maktabadda Qaranka Faransiiska)"
        },
        credit: { en: "unknown copyist · Wikimedia Commons (public domain)", so: "unknown copyist · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:89v_90r_%D9%86%D8%B2%D9%87%D8%A9_%D8%A7%D9%84%D9%85%D8%B4%D8%AA%D8%A7%D9%82_Arabe_2221_BNF.jpg"
      },
      {
        file: "media/ep05/youyang-zazu.jpg",
        type: "photo",
        caption: {
          en: "Youyang Zazu, the book in which Duan Chengshi described the coast of Berbera in the 9th century",
          so: "Youyang Zazu, buuggii Duan Chengshi ku tilmaamay xeebta Berbera qarnigii 9aad"
        },
        credit: { en: "段成式 · Wikimedia Commons (public domain)", so: "段成式 · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:NCL-08569_%E9%85%89%E9%99%BD%E9%9B%9C%E4%BF%8E.pdf"
      },
      {
        file: "media/ep05/cerulli.jpg",
        type: "photo",
        caption: {
          en: "Enrico Cerulli, who recorded the Arabic inscriptions of Mogadishu and Benadir in the 1920s",
          so: "Enrico Cerulli, kii diiwaangeliyay qoraallada Carabiga ah ee Muqdisho iyo Banaadir 1920-meeyadii"
        },
        credit: { en: "Unknown author · Wikimedia Commons (public domain)", so: "Sawir-qaade/qoraa aan la aqoon · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Enrico_Cerulli.png"
      },
      {
        file: "media/ep05/xamar-qabri-qoraal-branly.jpg",
        type: "photo",
        caption: {
          en: "A gravestone with an Arabic inscription from Mogadishu, brought to France by Révoil in 1882 (Musée du quai Branly)",
          so: "Dhagax qabri oo Carabi ku qoran oo Muqdisho laga keenay, Révoil ayaa 1882 Faransiiska geeyay (Musée du quai Branly)"
        },
        credit: { en: "Marie-Lan Nguyen · Wikimedia Commons (public domain)", so: "Marie-Lan Nguyen · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Stele_with_Arabic_inscription_Branly_71.1886.89.2.jpg"
      },
      {
        file: "media/ep05/xamar-fakhrudiin.jpg",
        type: "photo",
        caption: {
          en: "The Fakhr al-Din mosque in Xamar Weyne, Mogadishu",
          so: "Masjidka Fakhruddiin, Xamar Weyne, Muqdisho"
        },
        credit: { en: "Unknown author · Wikimedia Commons (public domain)", so: "Sawir-qaade/qoraa aan la aqoon · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Fakr_Ud_Din_Mosque.jpg"
      },
      {
        file: "media/ep05/xamar-jaamac-minaarad.jpg",
        type: "photo",
        caption: {
          en: "The minaret of the Friday mosque (Jaamac) of Xamar Weyne, dated 636 AH (1238 CE)",
          so: "Minaaradda Masjid Jaamaca Xamar Weyne, oo la taariikhaystay 636 H. (1238 M.)"
        },
        credit: { en: "From M. La Lomia, Antiche Moschee di Mogadiscio (1982) · Wikimedia Commons (CC BY-SA 4.0)", so: "From M. La Lomia, Antiche Moschee di Mogadiscio (1982) · Wikimedia Commons (CC BY-SA 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Jama%27a_Xamar_Weyne.jpg"
      },
      {
        file: "media/ep05/muqdisho-1856.jpg",
        type: "photo",
        caption: {
          en: "Mogadishu in 1856",
          so: "Muqdisho 1856"
        },
        credit: { en: "Abshir55 · Wikimedia Commons (CC BY-SA 4.0)", so: "Abshir55 · Wikimedia Commons (CC BY-SA 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Mogadishu_in_1856.png"
      },
      {
        file: "media/ep05/muqdisho-suuq-1882.jpg",
        type: "photo",
        caption: {
          en: "The market of Mogadishu in 1882 (Révoil)",
          so: "Suuqa Muqdisho 1882 (Révoil)"
        },
        credit: { en: "Unknown author · Wikimedia Commons (public domain)", so: "Sawir-qaade/qoraa aan la aqoon · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Mogadishu_marketplace_1882.jpg"
      },
      {
        file: "media/ep05/muqdisho-1800s.jpg",
        type: "photo",
        caption: {
          en: "Mogadishu in the 19th century",
          so: "Muqdisho qarnigii 19aad"
        },
        credit: { en: "Unknown author · Wikimedia Commons (public domain)", so: "Sawir-qaade/qoraa aan la aqoon · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Somalia_o1800s.JPG"
      },
      {
        file: "media/ep05/xamar-weelka-shiinaha.jpg",
        type: "photo",
        caption: {
          en: "A Chinese celadon vase brought from Mogadishu, a sign of its trade (Musée du quai Branly)",
          so: "Weel celadon Shiinees ah oo Muqdisho laga keenay, calaamad ganacsigeeda (Musée du quai Branly)"
        },
        credit: { en: "Marie-Lan Nguyen · Wikimedia Commons (public domain)", so: "Marie-Lan Nguyen · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Chinese_celadon_vase_Branly_71.1886.89.1.jpg"
      },
      {
        file: "media/ep05/naysaabuur-weel.jpg",
        type: "photo",
        caption: {
          en: "A 10th-century bowl from Nishapur: the oldest grave in Mogadishu (614 AH) belongs to a man of Nishapur in Khurasan",
          so: "Weel qarnigii 10aad ah oo Naysaabuur laga sameeyay: qabriga ugu da'da weyn Muqdisho (614 H.) wuxuu leeyahay nin reer Naysaabuur ah oo Khuraasaan ah"
        },
        credit: { en: "Vassil · Wikimedia Commons (CC0)", so: "Vassil · Wikimedia Commons (CC0)" },
        link: "https://commons.wikimedia.org/wiki/File:British_Museum_The_Islamic_world_Bowl_Nishapur_21022019_7538.jpg"
      },
      {
        file: "media/ep05/naysaabuur-weel-2.jpg",
        type: "photo",
        caption: {
          en: "A 10th-century bowl with an Arabic inscription, from the same region (Metropolitan Museum)",
          so: "Weel qarnigii 10aad ah oo Carabi ku qoran, isla gobolkaas (Metropolitan Museum)"
        },
        credit: { en: "Unknown author · Wikimedia Commons (CC0)", so: "Sawir-qaade/qoraa aan la aqoon · Wikimedia Commons (CC0)" },
        link: "https://commons.wikimedia.org/wiki/File:Bowl_with_Arabic_Inscription_MET_DP312519.jpg"
      },
      {
        file: "media/ep05/khuraasaan-khariidad.jpg",
        type: "map",
        caption: {
          en: "Khurasan in the 10th century, home of Nishapur",
          so: "Khuraasaan qarnigii 10aad, dhulka ay Naysaabuur ku taal"
        },
        credit: { en: "Istakhri · Wikimedia Commons (public domain)", so: "Istakhri · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Map_of_Khorasan_in_tenth-century.png"
      },
      {
        file: "media/ep05/baraawe-qorshe.jpg",
        type: "map",
        caption: {
          en: "An old plan of Brava, whose Friday mosque gave an inscription dated 498 AH (1105 CE)",
          so: "Qorshe hore oo Baraawe ah; masjid Jaamaceeda waxaa laga helay qoraal la taariikhaystay 498 H. (1105 M.)"
        },
        credit: { en: "Calmar, Yves (17..-17..). Cartographe Harmer, T. (17..-18.. ; graveur). Graveur · Wikimedia Commons (public domain)", so: "Calmar, Yves (17..-17..). Cartographe Harmer, T. (17..-18.. ; graveur). Graveur · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Plan_of_Brava_on_the_coast_of_Africa_-_from_a_french_ms._by_Yvez_Calmar_%3B_writing_by_Harmar_-_btv1b85957030.jpg"
      },
      {
        file: "media/ep05/baraawe-maanta.jpg",
        type: "photo",
        caption: {
          en: "Brava today: the Chilaani lighthouse",
          so: "Baraawe maanta: munaaradda nalka ee Chilaani"
        },
        credit: { en: "FaarisAdam · Wikimedia Commons (CC BY-SA 4.0)", so: "FaarisAdam · Wikimedia Commons (CC BY-SA 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Chilaani_Lighthouse_in_Baraawe.jpg"
      },
      {
        file: "media/ep05/berbera-magaalo.jpg",
        type: "photo",
        caption: {
          en: "The town of Berbera (1921)",
          so: "Magaalada Berbera (1921)"
        },
        credit: { en: "Major Henry A. Rayne · Wikimedia Commons (public domain)", so: "Major Henry A. Rayne · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Berbera_town.png"
      },
      {
        file: "media/ep05/kizimkazi-qoraal.jpg",
        type: "photo",
        caption: {
          en: "Kufic inscription of 500 AH in the Kizimkazi mosque, Zanzibar, close in date to the Brava inscription (498 AH)",
          so: "Qoraalka Kufiga ah ee 500 H. ee masjidka Kizimkazi, Sinjibaar, oo taariikh ahaan u dhow qoraalka Baraawe (498 H.)"
        },
        credit: { en: "Mnazini · Wikimedia Commons (CC BY 4.0)", so: "Mnazini · Wikimedia Commons (CC BY 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Calligraphy_at_historic_Kizimkazi_Mosque%2C_Kusini_DC%2C_South_Zanzibar%2C_Tanzania.jpg"
      },
      {
        file: "media/ep05/kizimkazi-mixraab.jpg",
        type: "photo",
        caption: {
          en: "The mihrab of the old Kizimkazi mosque, Zanzibar",
          so: "Mixraabka masjidka qadiimka ah ee Kizimkazi, Sinjibaar"
        },
        credit: { en: "Mnazini · Wikimedia Commons (CC BY 4.0)", so: "Mnazini · Wikimedia Commons (CC BY 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Mihrab_of_historic_Kizimkazi_Mosque%2C_Kusini_DC%2C_South_Zanzibar%2C_Tanzania.jpg"
      },
      {
        file: "media/ep05/zabiid-yaman.jpg",
        type: "photo",
        caption: {
          en: "Zabid in Yemen, on the coast facing Zeila",
          so: "Zabiid ee Yaman, xeebta ka soo horjeedda Saylac"
        },
        credit: { en: "Ahron de Leeuw from Amsterdam, Netherlands · Wikimedia Commons (CC BY 2.0)", so: "Ahron de Leeuw from Amsterdam, Netherlands · Wikimedia Commons (CC BY 2.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Zabid%2C_Yemen.jpg"
      },
      {
        file: "media/ep05/suxaar-cumaan.jpg",
        type: "photo",
        caption: {
          en: "Sohar fort in Oman (1940): many of the first settlers of the Benadir coast came from Oman",
          so: "Qalcadda Suxaar ee Cumaan (1940): qaar badan oo ka mid ah dadkii ugu horreeyay ee xeebta Banaadir degay waxay ka yimaadeen Cumaan"
        },
        credit: { en: "East India Company, the Board of Control, the India Office, or other British Government Department · Wikimedia Commons (CC0)", so: "East India Company, the Board of Control, the India Office, or other British Government Department · Wikimedia Commons (CC0)" },
        link: "https://commons.wikimedia.org/wiki/File:Sohar_Fort_in_1940.jpg"
      },
      {
        file: "media/ep05/cabdulmalik-diinaar.jpg",
        type: "photo",
        caption: {
          en: "The first gold dinar of the Umayyad caliph 'Abd al-Malik ibn Marwan (695 CE)",
          so: "Diinaarkii dahabka ahaa ee ugu horreeyay ee khaliifkii Umawiyiinta Cabdulmalik bin Marwaan (695 M.)"
        },
        credit: { en: "PHGCOM · Wikimedia Commons (public domain)", so: "PHGCOM · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:First_Umayyad_gold_dinar%2C_Caliph_Abd_al-Malik%2C_695_CE.jpg"
      },
      {
        file: "media/ep05/qubbat-as-sakhra.jpg",
        type: "photo",
        caption: {
          en: "The Dome of the Rock in Jerusalem, built by 'Abd al-Malik (691 CE)",
          so: "Qubbat as-Sakhra ee Qudus, uu dhisay Cabdulmalik (691 M.)"
        },
        credit: { en: "Godot13 · Wikimedia Commons (CC BY-SA 4.0)", so: "Godot13 · Wikimedia Commons (CC BY-SA 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Jerusalem-2013%282%29-Temple_Mount-Dome_of_the_Rock_%28SE_exposure%29.jpg"
      },
      {
        file: "media/ep05/mansuur-diinaar.jpg",
        type: "photo",
        caption: {
          en: "Gold dinar of the Abbasid caliph Abu Ja'far al-Mansur (140 AH)",
          so: "Diinaarkii khaliifkii Cabbaasiga Abuu Jacfar al-Mansuur (140 H.)"
        },
        credit: { en: "DrFO.Jr.Tn · Wikimedia Commons (CC BY 3.0)", so: "DrFO.Jr.Tn · Wikimedia Commons (CC BY 3.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Abbasid_Dinar_-_Al_Mansur_-_140_AH_%28758_AD%29.JPG"
      },
      {
        file: "media/ep05/baqdaad-magaalada-wareegsan.jpg",
        type: "map",
        caption: {
          en: "The Round City of Baghdad in the time of al-Mansur (Le Strange)",
          so: "Magaaladii wareegsanayd ee Baqdaad waagii al-Mansuur (Le Strange)"
        },
        credit: { en: "Guy Le Strange (24 July 1854 – 24 December 1933) · Wikimedia Commons (public domain)", so: "Guy Le Strange (24 July 1854 – 24 December 1933) · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Round_City_in_the_Time_of_Mansur_%28Le_Strange%29.png"
      },
      {
        file: "media/ep05/khilaafada-740.jpg",
        type: "map",
        caption: {
          en: "The Umayyad caliphate around 740 CE: its conquests did not reach the Horn of Africa",
          so: "Khilaafada Umawiyiinta qiyaastii 740 M.: futuuxaadkeedu ma gaarin Geeska Afrika"
        },
        credit: { en: "Constantine Plakidas · Wikimedia Commons (CC BY-SA 4.0)", so: "Constantine Plakidas · Wikimedia Commons (CC BY-SA 4.0)" },
        link: "https://commons.wikimedia.org/wiki/File:Caliphate_740-en.svg"
      },
      {
        file: "media/ep05/ibnu-badhuuda.jpg",
        type: "photo",
        caption: {
          en: "Ibn Battuta, who visited Zeila and Mogadishu in 1331 (a 19th-century drawing by Léon Benett)",
          so: "Ibnu Batuuta, kii booqday Saylac iyo Muqdisho 1331 (sawir qarnigii 19aad ah oo uu sameeyay Léon Benett)"
        },
        credit: { en: "Léon Benett · Wikimedia Commons (public domain)", so: "Léon Benett · Wikimedia Commons (hanti guud)" },
        link: "https://commons.wikimedia.org/wiki/File:Handmade_oil_painting_reproduction_of_Ibn_Battuta_in_Egypt%2C_a_painting_by_Hippolyte_Leon_Benett..jpg"
      }
    ]
  },
  6: {
    video: "",
    pictures: [
      {"file": "media/ep06/sheikh-isaaq-tomb-maydh.jpg", "type": "photo", "caption": {"en": "The tomb of Sheikh Isaaq at Maydh", "so": "Qabriga Sheekh Isxaaq ee Maydh"}, "credit": {"en": "A.Basid ismail · CC BY-SA 1.0 · Wikimedia Commons", "so": "A.Basid ismail · CC BY-SA 1.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Sheikhisaaqmaydh.jpg"}
    ]
  },

  7: {
    video: "",
    pictures: [
      {"file": "media/ep07/fakhr-ad-din-mosque-1882.jpg", "type": "photo", "caption": {"en": "The Fakhr ad-Din Mosque in Mogadishu, 1882", "so": "Masjidka Fakhrudiin ee Muqdisho, 1882"}, "credit": {"en": "Unknown author · Public domain · Wikimedia Commons", "so": "Unknown author · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Fakr_Ud_Din_Mosque.jpg"},
      {"file": "media/ep07/mogadishu-weaver-1882.jpg", "type": "photo", "caption": {"en": "A weaver in Mogadishu, 1882", "so": "Dhar-tole ku sugan Muqdisho, 1882"}, "credit": {"en": "Unknown author · Public domain · Wikimedia Commons", "so": "Unknown author · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Mogadishu_weaver_1882.jpg"},
      {"file": "media/ep07/mogadishu-1936.jpg", "type": "photo", "caption": {"en": "Central Mogadishu in 1936; the minaret of the Arba'a Rukun mosque is on the right", "so": "Bartamaha Muqdisho 1936; munaaradda masjidka Arbaca Rukun waxay ku taal dhanka midig"}, "credit": {"en": "Unknown author · Public domain · Wikimedia Commons", "so": "Unknown author · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Mogadishu1936.jpg"}
    ]
  },

  9: {
    video: "",
    pictures: [
      {"file": "media/ep09/stelae-aksum.jpg", "type": "photo", "caption": {"en": "The stelae of Aksum", "so": "Taallooyinka dhagaxa ah ee Aksum"}, "credit": {"en": "Rod Waddington from Kergunyah, Australia · CC BY-SA 2.0 · Wikimedia Commons", "so": "Rod Waddington from Kergunyah, Australia · CC BY-SA 2.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Stelae,_Aksum_(8140296506).jpg"},
      {"file": "media/ep09/lalibela-bete-giyorgis.webp", "type": "photo", "caption": {"en": "The rock-cut church of St George (Bete Giyorgis) at Lalibela", "so": "Kaniisadda dhagaxa laga qoday ee Bete Giyorgis, Lalibela"}, "credit": {"en": "Bernard Gagnon · CC BY-SA 3.0 · Wikimedia Commons", "so": "Bernard Gagnon · CC BY-SA 3.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Bete_Giyorgis_01.jpg"}
    ]
  },

  10: {
    video: "",
    pictures: [
      {"file": "media/ep10/zeila-ruins.webp", "type": "photo", "caption": {"en": "Ruins in Zeila", "so": "Burburka Seylac"}, "credit": {"en": "Zeila Adal · CC BY 4.0 · Wikimedia Commons", "so": "Zeila Adal · CC BY 4.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Ruins_of_Zeila.jpg"},
      {"file": "media/ep10/saad-ad-din-island.jpg", "type": "photo", "caption": {"en": "Sa'ad ad-Din island, off Zeila", "so": "Jasiiradda Sacadiin, oo u dhow Seylac"}, "credit": {"en": "Government of Somaliland · Public domain · Wikimedia Commons", "so": "Government of Somaliland · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Sacadin.jpg"}
    ]
  },

  11: {
    video: "",
    pictures: [
      {"file": "media/ep11/vasco-da-gama-portrait.webp", "type": "photo", "caption": {"en": "Portrait of Vasco da Gama, painted around 1525", "so": "Sawirka Vasco da Gama, oo la sawiray qiyaastii 1525"}, "credit": {"en": "Sailko · CC BY 3.0 · Wikimedia Commons", "so": "Sailko · CC BY 3.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Ignoto_portoghese,_ritratto_di_un_cavaliere_dell%27ordine_di_cristo,_1525-50_ca._02.jpg"}
    ]
  },

  12: {
    video: "",
    pictures: [
      {"file": "media/ep12/adal-1540-map.webp", "type": "map", "caption": {"en": "The Adal Sultanate after Imam Ahmed's conquests in the 1530s (map based on Richard Pankhurst)", "so": "Saldanadda Cadal kadib qabsashadii Imaam Axmed 1530-meeyadii (khariidad ku salaysan Richard Pankhurst)"}, "credit": {"en": "محرر البوق · CC BY-SA 4.0 · Wikimedia Commons", "so": "محرر البوق · CC BY-SA 4.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Map_of_the_Adal_Sultanate_(1540).svg"},
      {"file": "media/ep12/lake-tana.jpg", "type": "photo", "caption": {"en": "Lake Tana, which Imam Ahmed's forces reached in 1537", "so": "Harada Taana, oo ciidamada Imaam Axmed gaareen 1537"}, "credit": {"en": "Cooperazione · CC BY-SA 4.0 · Wikimedia Commons", "so": "Cooperazione · CC BY-SA 4.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:16_lago_Tana_Etiopia.JPG"}
    ]
  },

  14: {
    video: "",
    pictures: [
      {"file": "media/ep14/bardheere.webp", "type": "photo", "caption": {"en": "A street in Bardheere", "so": "Waddo ku taal Baardheere"}, "credit": {"en": "Baardheere (English Wikipedia) · Public domain · Wikimedia Commons", "so": "Baardheere (English Wikipedia) · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Bardera_arc.jpg"}
    ]
  },

  16: {
    video: "",
    pictures: [
      {"file": "media/ep16/sultan-barghash.jpg", "type": "photo", "caption": {"en": "Barghash bin Said, Sultan of Zanzibar", "so": "Barqash bin Saciid, Suldaanka Sinjibaar"}, "credit": {"en": "Maull & Co · Public domain · Wikimedia Commons", "so": "Maull & Co · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Barghash_bin_Said,_Sultan_of_Zanzibar,_1837-88_RMG_RT1385_(cropped).jpg"}
    ]
  },

  19: {
    video: "",
    pictures: [
      {"file": "media/ep19/obock-1885.webp", "type": "photo", "caption": {"en": "Obock around 1885", "so": "Obokh qiyaastii 1885"}, "credit": {"en": "Unknown photographer · Public domain · Wikimedia Commons", "so": "Unknown photographer · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Obock_coal_depot_mid-1880s.png"},
      {"file": "media/ep19/dire-dawa-station.jpg", "type": "photo", "caption": {"en": "A station of the Djibouti–Ethiopia railway, at Dire Dawa", "so": "Saldhig ka mid ah tareenka Jabuuti–Itoobiya, ee Dire Dawa"}, "credit": {"en": "A. Davey · CC BY 2.0 · Wikimedia Commons", "so": "A. Davey · CC BY 2.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Djibouti_-_Ethiopia_Railway_Station,_Dire_Dawa,_Ethiopia.jpg"},
      {"file": "media/ep19/red-sea-claims-1885.jpg", "type": "map", "caption": {"en": "European territorial claims on the coasts of the Red Sea, 1885", "so": "Sheegashooyinka dhulka ee reer Yurub ee xeebaha Badda Cas, 1885"}, "credit": {"en": "Sir William Rawson (1812-1899) · Public domain · Wikimedia Commons", "so": "Sir William Rawson (1812-1899) · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:European_territorial_claims_on_the_coasts_of_the_Red_Sea_1885.jpg"}
    ]
  },

  20: {
    video: "",
    pictures: [
      {"file": "media/ep20/adwa-painting.webp", "type": "photo", "caption": {"en": "An Ethiopian painting of the Battle of Adwa, 1896", "so": "Sawir Itoobiyaan ah oo muujinaya dagaalkii Cadwa, 1896"}, "credit": {"en": "Unknown artist · CC BY-SA 4.0 · Wikimedia Commons", "so": "Unknown artist · CC BY-SA 4.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Ethiopian_painting,_Battle_of_Adwa,_1896.jpg"}
    ]
  },

  25: {
    video: "",
    pictures: [
      {"file": "media/ep25/de-vecchi.webp", "type": "photo", "caption": {"en": "Cesare Maria De Vecchi, Governor of Italian Somaliland", "so": "Cesare Maria De Vecchi, guddoomiyihii Soomaaliyadii Talyaaniga"}, "credit": {"en": "Unknown author · Public domain · Wikimedia Commons", "so": "Unknown author · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Cesare_Maria_De_Vecchi1.jpg"},
      {"file": "media/ep25/sultan-ali-yusuf-kenadid.jpg", "type": "photo", "caption": {"en": "Sultan Ali Yusuf Kenadid of Hobyo", "so": "Suldaan Cali Yuusuf Keenadiid ee Hobyo"}, "credit": {"en": "Unknown author · Public domain · Wikimedia Commons", "so": "Unknown author · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Sultan_Ali_Yusuf_Kenadid.jpg"}
    ]
  },

  17: {
    video: "",
    pictures: [
      {"file": "media/ep17/capture-of-aden-1839.jpg", "type": "photo", "caption": {"en": "The capture of Aden, 1839: \"The landing\", painted by Captain J. S. Rundle, who took part", "so": "Qabsashadii Cadan 1839: \"Degitaankii\", uu sawiray Kabtan J. S. Rundle oo ka qayb galay"}, "credit": {"en": "Joseph Sparkhall Rundle (postcard) · Public domain · Wikimedia Commons", "so": "Joseph Sparkhall Rundle (postcard) · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Capture_of_Aden_1839_%22The_landing%22.jpg"}
    ]
  },

  24: {
    video: "",
    pictures: [
      {"file": "media/ep24/oltre-giuba-stamp-1925.webp", "type": "photo", "caption": {"en": "A 1925 stamp of Oltre Giuba (Jubaland under Italy)", "so": "Shaambad 1925 ah oo ah Oltre Giuba (Jubaland markii Talyaanigu xukumay)"}, "credit": {"en": "Government of Italy · Public domain · Wikimedia Commons", "so": "Government of Italy · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Oltre_Giuba_1925_Sc1.jpg"}
    ]
  },

  27: {
    video: "",
    pictures: [
      {"file": "media/ep27/kar-mogadishu-1941.webp", "type": "photo", "caption": {"en": "Soldiers of the King's African Rifles parading in Mogadishu, 1941", "so": "Askar ka tirsan King's African Rifles oo dhoolatus ku samaynaya Muqdisho, 1941"}, "credit": {"en": "William Henry Rogers · Public domain · Wikimedia Commons", "so": "William Henry Rogers · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:C_coy_7th_bn_KAR.png"}
    ]
  }

};
