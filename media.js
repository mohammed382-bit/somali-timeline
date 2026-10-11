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
    video: "",   // paste the YouTube link for episode 1 here, between the quotes
    pictures: [
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
    video: "",
    pictures: [
      {"file": "media/ep02/punt-incense-trees-relief.webp", "type": "photo", "caption": {"en": "Relief at Hatshepsut's temple, Deir el-Bahari: incense trees from Punt being carried", "so": "Sawir dhagax lagu qoray oo ku yaal macbadka Hatshepsut ee Daarul Baxaari: geedo foox ah oo laga keenay Boont oo la qaadayo"}, "credit": {"en": "Ismoon · CC BY-SA 4.0 · Wikimedia Commons", "so": "Ismoon · CC BY-SA 4.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Incense_trees_transport._Punt_relief._Mortuary_Temple_of_Hatshepsut,_Deir_el-Bahari.jpg"},
      {"file": "media/ep02/punt-village-relief.webp", "type": "photo", "caption": {"en": "Relief at Deir el-Bahari showing the Egyptian expedition in Punt: houses of a Punt village", "so": "Sawir dhagax lagu qoray oo ku yaal Daarul Baxaari, muujinaya safarkii Masaarida ee Boont: guryaha tuulo reer Boont ah"}, "credit": {"en": "Neithsabes · CC BY-SA 3.0 · Wikimedia Commons", "so": "Neithsabes · CC BY-SA 3.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Deir_el_Bahari_080511.jpg"},
      {"file": "media/ep02/periplus-map-schoff-1912.webp", "type": "map", "caption": {"en": "Map made in 1912 by W. H. Schoff to illustrate the Periplus of the Erythraean Sea", "so": "Khariidad uu W. H. Schoff sameeyay 1912 si uu u sharxo buugga Periplus of the Erythraean Sea"}, "credit": {"en": "Wilfred H. Schoff · Public domain · Wikimedia Commons", "so": "Wilfred H. Schoff · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Periplus_Maris_Erythraei_World_Map_b29353051_0335.jpg"}
    ]
  },

  3: {
    video: "",
    pictures: [
      {"file": "media/ep03/aw-barkhadle-enclosure.webp", "type": "photo", "caption": {"en": "The sacred enclosure at Aw-Barkhadle", "so": "Xayndaabka barakeysan ee Aw-Barkhadle"}, "credit": {"en": "Tinasimonrowe · CC BY-SA 4.0 · Wikimedia Commons", "so": "Tinasimonrowe · CC BY-SA 4.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Fig._8._The_Sacred_enclosure_at_Aw-Barkhadle.jpg"}
    ]
  },

  5: {
    video: "",
    pictures: [
      {"file": "media/ep05/sheikh-isaaq-tomb-maydh.jpg", "type": "photo", "caption": {"en": "The tomb of Sheikh Isaaq at Maydh", "so": "Qabriga Sheekh Isxaaq ee Maydh"}, "credit": {"en": "A.Basid ismail · CC BY-SA 1.0 · Wikimedia Commons", "so": "A.Basid ismail · CC BY-SA 1.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Sheikhisaaqmaydh.jpg"}
    ]
  },

  6: {
    video: "",
    pictures: [
      {"file": "media/ep06/fakhr-ad-din-mosque-1882.jpg", "type": "photo", "caption": {"en": "The Fakhr ad-Din Mosque in Mogadishu, 1882", "so": "Masjidka Fakhrudiin ee Muqdisho, 1882"}, "credit": {"en": "Unknown author · Public domain · Wikimedia Commons", "so": "Unknown author · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Fakr_Ud_Din_Mosque.jpg"},
      {"file": "media/ep06/mogadishu-weaver-1882.jpg", "type": "photo", "caption": {"en": "A weaver in Mogadishu, 1882", "so": "Dhar-tole ku sugan Muqdisho, 1882"}, "credit": {"en": "Unknown author · Public domain · Wikimedia Commons", "so": "Unknown author · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Mogadishu_weaver_1882.jpg"},
      {"file": "media/ep06/mogadishu-1936.jpg", "type": "photo", "caption": {"en": "Central Mogadishu in 1936; the minaret of the Arba'a Rukun mosque is on the right", "so": "Bartamaha Muqdisho 1936; munaaradda masjidka Arbaca Rukun waxay ku taal dhanka midig"}, "credit": {"en": "Unknown author · Public domain · Wikimedia Commons", "so": "Unknown author · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Mogadishu1936.jpg"}
    ]
  },

  8: {
    video: "",
    pictures: [
      {"file": "media/ep08/stelae-aksum.jpg", "type": "photo", "caption": {"en": "The stelae of Aksum", "so": "Taallooyinka dhagaxa ah ee Aksum"}, "credit": {"en": "Rod Waddington from Kergunyah, Australia · CC BY-SA 2.0 · Wikimedia Commons", "so": "Rod Waddington from Kergunyah, Australia · CC BY-SA 2.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Stelae,_Aksum_(8140296506).jpg"},
      {"file": "media/ep08/lalibela-bete-giyorgis.webp", "type": "photo", "caption": {"en": "The rock-cut church of St George (Bete Giyorgis) at Lalibela", "so": "Kaniisadda dhagaxa laga qoday ee Bete Giyorgis, Lalibela"}, "credit": {"en": "Bernard Gagnon · CC BY-SA 3.0 · Wikimedia Commons", "so": "Bernard Gagnon · CC BY-SA 3.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Bete_Giyorgis_01.jpg"}
    ]
  },

  9: {
    video: "",
    pictures: [
      {"file": "media/ep09/zeila-ruins.webp", "type": "photo", "caption": {"en": "Ruins in Zeila", "so": "Burburka Seylac"}, "credit": {"en": "Zeila Adal · CC BY 4.0 · Wikimedia Commons", "so": "Zeila Adal · CC BY 4.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Ruins_of_Zeila.jpg"},
      {"file": "media/ep09/saad-ad-din-island.jpg", "type": "photo", "caption": {"en": "Sa'ad ad-Din island, off Zeila", "so": "Jasiiradda Sacadiin, oo u dhow Seylac"}, "credit": {"en": "Government of Somaliland · Public domain · Wikimedia Commons", "so": "Government of Somaliland · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Sacadin.jpg"}
    ]
  },

  10: {
    video: "",
    pictures: [
      {"file": "media/ep10/vasco-da-gama-portrait.webp", "type": "photo", "caption": {"en": "Portrait of Vasco da Gama, painted around 1525", "so": "Sawirka Vasco da Gama, oo la sawiray qiyaastii 1525"}, "credit": {"en": "Sailko · CC BY 3.0 · Wikimedia Commons", "so": "Sailko · CC BY 3.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Ignoto_portoghese,_ritratto_di_un_cavaliere_dell%27ordine_di_cristo,_1525-50_ca._02.jpg"}
    ]
  },

  11: {
    video: "",
    pictures: [
      {"file": "media/ep11/adal-1540-map.webp", "type": "map", "caption": {"en": "The Adal Sultanate after Imam Ahmed's conquests in the 1530s (map based on Richard Pankhurst)", "so": "Saldanadda Cadal kadib qabsashadii Imaam Axmed 1530-meeyadii (khariidad ku salaysan Richard Pankhurst)"}, "credit": {"en": "محرر البوق · CC BY-SA 4.0 · Wikimedia Commons", "so": "محرر البوق · CC BY-SA 4.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Map_of_the_Adal_Sultanate_(1540).svg"},
      {"file": "media/ep11/lake-tana.jpg", "type": "photo", "caption": {"en": "Lake Tana, which Imam Ahmed's forces reached in 1537", "so": "Harada Taana, oo ciidamada Imaam Axmed gaareen 1537"}, "credit": {"en": "Cooperazione · CC BY-SA 4.0 · Wikimedia Commons", "so": "Cooperazione · CC BY-SA 4.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:16_lago_Tana_Etiopia.JPG"}
    ]
  },

  13: {
    video: "",
    pictures: [
      {"file": "media/ep13/bardheere.webp", "type": "photo", "caption": {"en": "A street in Bardheere", "so": "Waddo ku taal Baardheere"}, "credit": {"en": "Baardheere (English Wikipedia) · Public domain · Wikimedia Commons", "so": "Baardheere (English Wikipedia) · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Bardera_arc.jpg"}
    ]
  },

  15: {
    video: "",
    pictures: [
      {"file": "media/ep15/sultan-barghash.jpg", "type": "photo", "caption": {"en": "Barghash bin Said, Sultan of Zanzibar", "so": "Barqash bin Saciid, Suldaanka Sinjibaar"}, "credit": {"en": "Maull & Co · Public domain · Wikimedia Commons", "so": "Maull & Co · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Barghash_bin_Said,_Sultan_of_Zanzibar,_1837-88_RMG_RT1385_(cropped).jpg"}
    ]
  },

  18: {
    video: "",
    pictures: [
      {"file": "media/ep18/obock-1885.webp", "type": "photo", "caption": {"en": "Obock around 1885", "so": "Obokh qiyaastii 1885"}, "credit": {"en": "Unknown photographer · Public domain · Wikimedia Commons", "so": "Unknown photographer · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Obock_coal_depot_mid-1880s.png"},
      {"file": "media/ep18/dire-dawa-station.jpg", "type": "photo", "caption": {"en": "A station of the Djibouti–Ethiopia railway, at Dire Dawa", "so": "Saldhig ka mid ah tareenka Jabuuti–Itoobiya, ee Dire Dawa"}, "credit": {"en": "A. Davey · CC BY 2.0 · Wikimedia Commons", "so": "A. Davey · CC BY 2.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Djibouti_-_Ethiopia_Railway_Station,_Dire_Dawa,_Ethiopia.jpg"},
      {"file": "media/ep18/red-sea-claims-1885.jpg", "type": "map", "caption": {"en": "European territorial claims on the coasts of the Red Sea, 1885", "so": "Sheegashooyinka dhulka ee reer Yurub ee xeebaha Badda Cas, 1885"}, "credit": {"en": "Sir William Rawson (1812-1899) · Public domain · Wikimedia Commons", "so": "Sir William Rawson (1812-1899) · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:European_territorial_claims_on_the_coasts_of_the_Red_Sea_1885.jpg"}
    ]
  },

  19: {
    video: "",
    pictures: [
      {"file": "media/ep19/adwa-painting.webp", "type": "photo", "caption": {"en": "An Ethiopian painting of the Battle of Adwa, 1896", "so": "Sawir Itoobiyaan ah oo muujinaya dagaalkii Cadwa, 1896"}, "credit": {"en": "Unknown artist · CC BY-SA 4.0 · Wikimedia Commons", "so": "Unknown artist · CC BY-SA 4.0 · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Ethiopian_painting,_Battle_of_Adwa,_1896.jpg"}
    ]
  },

  24: {
    video: "",
    pictures: [
      {"file": "media/ep24/de-vecchi.webp", "type": "photo", "caption": {"en": "Cesare Maria De Vecchi, Governor of Italian Somaliland", "so": "Cesare Maria De Vecchi, guddoomiyihii Soomaaliyadii Talyaaniga"}, "credit": {"en": "Unknown author · Public domain · Wikimedia Commons", "so": "Unknown author · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Cesare_Maria_De_Vecchi1.jpg"},
      {"file": "media/ep24/sultan-ali-yusuf-kenadid.jpg", "type": "photo", "caption": {"en": "Sultan Ali Yusuf Kenadid of Hobyo", "so": "Suldaan Cali Yuusuf Keenadiid ee Hobyo"}, "credit": {"en": "Unknown author · Public domain · Wikimedia Commons", "so": "Unknown author · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Sultan_Ali_Yusuf_Kenadid.jpg"}
    ]
  },

  16: {
    video: "",
    pictures: [
      {"file": "media/ep16/capture-of-aden-1839.jpg", "type": "photo", "caption": {"en": "The capture of Aden, 1839: \"The landing\", painted by Captain J. S. Rundle, who took part", "so": "Qabsashadii Cadan 1839: \"Degitaankii\", uu sawiray Kabtan J. S. Rundle oo ka qayb galay"}, "credit": {"en": "Joseph Sparkhall Rundle (postcard) · Public domain · Wikimedia Commons", "so": "Joseph Sparkhall Rundle (postcard) · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Capture_of_Aden_1839_%22The_landing%22.jpg"}
    ]
  },

  23: {
    video: "",
    pictures: [
      {"file": "media/ep23/oltre-giuba-stamp-1925.webp", "type": "photo", "caption": {"en": "A 1925 stamp of Oltre Giuba (Jubaland under Italy)", "so": "Shaambad 1925 ah oo ah Oltre Giuba (Jubaland markii Talyaanigu xukumay)"}, "credit": {"en": "Government of Italy · Public domain · Wikimedia Commons", "so": "Government of Italy · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:Oltre_Giuba_1925_Sc1.jpg"}
    ]
  },

  26: {
    video: "",
    pictures: [
      {"file": "media/ep26/kar-mogadishu-1941.webp", "type": "photo", "caption": {"en": "Soldiers of the King's African Rifles parading in Mogadishu, 1941", "so": "Askar ka tirsan King's African Rifles oo dhoolatus ku samaynaya Muqdisho, 1941"}, "credit": {"en": "William Henry Rogers · Public domain · Wikimedia Commons", "so": "William Henry Rogers · Hanti guud (public domain) · Wikimedia Commons"}, "link": "https://commons.wikimedia.org/wiki/File:C_coy_7th_bn_KAR.png"}
    ]
  }

};
