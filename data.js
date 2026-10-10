// =============================================================
// data.js: ALL THE TEXT ON THE SITE
// Every fact comes from the books in the Sources folder; each
// event's "sources" list says which ones.
// Every page (index.html, timeline.html, episode.html) reads this file, so a
// correction made here appears everywhere.
// =============================================================

// The three parts of the series (from TAXANAHA TAARIIKHDA SOOMAALIYA)
const parts = {
  1: { en: "Part 1: Ancient History", so: "Qaybta 1aad: Taariikhda Hore" },
  2: { en: "Part 2: Medieval History", so: "Qaybta 2aad: Taariikhda Dhexe ee Soomaaliya" },
  3: { en: "Part 3: The Coming of Colonialism", so: "Qaybta 3aad: Imaanshihii Gumeysiga" }
};

// One object per episode. Each text field has an English (en) and Somali (so) version.
const events = [
  {
    id: 1,
    part: 1,
    years: { en: "10,000 years ago – 3000 BCE", so: "10,000 sano ka hor – 3000 NCKH" },
    title: { en: "The Origins of the Somali", so: "Imaatinkii Soomaalida" },
    summary: {
      en: "Where did the Somali come from? The Hamitic and Cushitic peoples.",
      so: "Xagee bay Soomaalidu ka timid? Reer Xaam iyo Kuushiinta."
    },
    details: {
      en: "The Somali descend from Kush, son of Ham, son of Noah. Over thousands of years the Cushitic peoples migrated from the Nile valley; one branch, the Eastern Cushites, went on to include the Oromo, Sidamo, Saho, Afar and Somali. Driven partly by climate change, the ancestors of the Somali reached the northern coasts of the Horn of Africa around 3000 BCE, where the land of Punt would later arise.",
      so: "Soomaalidu waxay kasoo farcantay Kuush ina Xaam ina Nabi Nuux. Kumannaan sano, Kowshiintu waxay kasoo hayaameen yaacdada Niilka; qayb ka mid ah, Kushitikada Bari, waxaa kasoo jeeda Oromo, Sidamo, Saho, Cafar iyo Soomaali. Isbeddel cimilo ayaa dabada ka riixayay hayaankaas, waxaana ab-awalladii Soomaalidu xeebaha waqooyi ee Geeska Afrika soo gaareen qiyaastii 3,000 sano Nabi Ciise dhalashadiisii kahor, halkaas oo markii danbe ay ka dhalatay Punt."
    },
    // The full written version of the episode, shown on the episode page (from the script "Xalqada 1aad")
    article: [
      {
        heading: { en: "The three sons of Noah", so: "Saddexdii wiil ee Nabi Nuux" },
        en: [
          "When we speak of a nation's history and want to trace its origins, we must go a long way back. No eyewitness record survives from so long ago, but different sciences help to light up what happened in those distant ages. A journey of 10,000 years awaits us.",
          "Islam teaches, and the followers of the revealed religions agree, that all humanity descends from Adam, and that the peoples of the world today descend from the three sons of Noah: Shem (Saam), Japheth (Yaafith) and Ham (Xaam). As the Qur'an says in Surat as-Saffat: \u2067«وَجَعَلْنَا ذُرِّيَّتَهُ هُمُ الْبَاقِينَ»\u2069, \"And We made his descendants the ones who remained.\"",
          "From Shem came peoples including Iram, Arfakhshad and Lawid, from whom today's Arabs and the Children of Israel descend. From Japheth came peoples including the Turks, the Romans, and Gog and Magog. Ham, as the genealogists write, had sons including Kush, Misr and Fut, and some Arab genealogists also trace the Berbers to Ham. Our story follows three of these peoples: Misr, the Berbers and Kush."
        ],
        so: [
          "Marka taariikh ummadeed laga hadlayo, oo la damacsan yahay in la tixraaco asalkeeda, waxaa lagama maarmaan ah in muddo dheer dib loo noqdo. Taariikhdaas sidaas u fog marag iyo maqaal looma hayo, balse waxaa laga bidhaansadaa culuum kala duwan oo tooshka inoogu ifinaysa wixii dhacay waayadaas fog. Safar 10,000 oo sano ah ayaa ina sugaya.",
          "Sida diinta Islaamku noo caddaysay, ayna wada aamminsan yihiin dadka haysta diimaha samaawiga ah, aadanaha oo dhammi wuxuu ku abtirsadaa Nabi Aadam CS, shucuubta maanta ku nool daafaha dunidana waxay kasoo farcameen saddexdii wiil ee Nabi Nuux: Saam, Yaafith iyo Xaam. Sida Rabbi ku xusay suuratu-Saafaat: \u2067«وَجَعَلْنَا ذُرِّيَّتَهُ هُمُ الْبَاقِينَ»\u2069, oo macneheedu yahay: \"Durriyaddii Nabi Nuux ayaan dhulka u reebnay\".",
          "Saam waxaa ka farcamay qolooyin ay kamid ahaayeen Iram, Arfakhshad iyo Laawid, oo hadda Carabta iyo reer Banii Israa'iil ay ka joogaan. Yaafith waxaa ka farcamay Turkida, Roomanka iyo Yaajuuj iyo Maajuuj. Xaam, sida ay qoraan culimada nasabka, wuxuu dhalay wiilal ay ka mid ahaayeen Kuush, Misr iyo Fuut, qaar ka mid ah culimada nasabka Carbeedna waxay Barbarka ku abtiriyaan Xaam. Sheekadeennu waxay ku wareegaysaa saddexda qolo: Misr, Berber iyo Kuush."
        ]
      },
      {
        heading: { en: "Where did the children of Ham first live?", so: "Halkee ayay reer Xaam markii hore degganaayeen?" },
        en: [
          "Ten thousand years ago, the home of the children of Ham, the \"Hamites\", is the main point on which scholars disagree. Some, such as Grottanelli and Oliver & Fage, hold that it was in the Caucasus mountains north-west of Persia (today's Iran), or in Mesopotamia between the Tigris and Euphrates. In this view the three branches of Ham migrated west through Sinai and settled along the Nile, in today's Egypt.",
          "Others, such as Joseph Greenberg and Christopher Ehret, hold that the family began in Africa itself, in north-east Africa including today's Sudan and Ethiopia, and that the only branch to cross into Asia was the ancestors of the Semites, such as the Arabs and Hebrews. Both views agree that the children of Ham spread along the Nile valley and its surroundings."
        ],
        so: [
          "Toban kun oo sano waa laga joogo, ilma Xaam oo loo yaqaan \"Xamiitig\", meesha ay degganaayeen ayaa ah qodobka ugu weyn ee aqoonyahannadu isku khilaafeen. Qaar, sida Grottanelli iyo Oliver & Fage, waxay qabaan in degelkoodii hore uu ahaa buuraleyda Kawkaasiya ee waqooyi-galbeed ka xigta Peershiya (Iiraan), amase Bilaadu-raafideyn oo u dhaxaysa webiyada Dajla iyo Furaat. Aragtidaas ayaa sheegaysa in ilma Xaam ay usoo hayaameen dhanka galbeed, soona mareen Siinaay, kuna degeen yaacdada webiga Niilka iyo dhulka hadda Masar loo yaqaan.",
          "Cilmi-baarayaasha qaar, sida Joseph Greenberg iyo Christopher Ehret, ayaa qaba in asalka bahdaas uu ahaa Afrika lafteeda, gaar ahaan waqooyi-bari Afrika oo ay ka mid yihiin Suudaan iyo Itoobiya, qolada keliya ee Aasiya u tallaabtayna ay ahayd ab-awalladii Saamiyiinta, sida Carabta iyo Cibraaniyiinta. Labada aragtiba waxay isku waafaqsan yihiin in ilma Xaam ay yaacdada Niilka iyo hareeraheeda ku kala firdheen."
        ]
      },
      {
        heading: { en: "The great migration of Kush", so: "Hayaankii weynaa ee reer Kuush" },
        en: [
          "In time the children of Ham moved again. Misr stayed in Egypt; from them came the Copts, the people who built the civilization of the Pharaohs and the pyramids. The Berbers crossed into North-West Africa, west of Libya, where they still live today as the Berbers or Amazigh.",
          "Kush, also called the Cushites, set out south along the Nile, crossed the Nubian highlands and settled by the Red Sea in the land named Kush. The Egyptians gave the name \"Kush\" to the land south of them, and there, about 2,500 years before Christ, the Kingdom of Kush was founded, with Kerma, Napata and Meroe as its capitals; at one point it even ruled Egypt.",
          "But the Cushites kept moving, and groups stayed behind along the way. The Beja remained on the border of Sudan and Eritrea (the Northern Cushites). In the Ethiopian highlands the Agaw stayed (the Central Cushites). At lakes Abaya and Turkana the rest divided: one group went south as far as northern Tanzania (the Southern Cushites), and the other turned east and north-east into the Horn of Africa: the Eastern Cushites, ancestors of the Oromo, Sidamo, Saho, Afar and Somali.",
          "The Saho and Afar moved north to today's northern Ethiopia, Djibouti and Eritrea. The Oromo and Sidamo stayed near the lakes. The Cushites who became the Somali spread from the Gulf of Tajura to the north-east coast of the Indian Ocean, pushing the people who lived there before them, the Wanyika or Zanj, towards the south."
        ],
        so: [
          "Muddo keddib, reer Xaam mar kale ayay hayaan galeen. Misr wuxuu ku haray dalka Masar, waxaana ka farcamay Qibdiyiinta, oo ah ummaddii dhistay xadaaradda Fircooniyiinta iyo Haramyada. Berber iyo faraciisii waxay usii tallaabeen galbeedka Afrika iyo dhulka Liibiya galbeedka ka xiga, halkaas oo ay illaa maanta ku dhaqan yihiin, loona yaqaan Barbar ama Amaaziigh.",
          "Kuush, Kowshiin ama Kushitig, waxay afka soo saareen koonfurta webiga Niilka, dabadeedna mareen buuraleyda Nuubiya, waxayna degeen deexda Badda Cas iyo dalkii Kush. Magaca \"Kush\" ayay Masaaridii hore u bixiyeen dhulka koonfurta kaga beeggan, halkaasna qiyaastii 2,500 sano Nabi Ciise dhalashadiisii kahor, waxaa laga aasaasay \"Boqortooyadii Kuush\", oo caasimadaheedu ahaayeen Karma, Nabata iyo Meroe, oo mar xataa ka talisay Masar laftigeeda.",
          "Geeddigii reer Kuush halkaas kuma ekaan, oo hadba koox ayaa meel uga haraysay. Beja waxay ku hartay xuduudda Suudaan iyo Eretereeya (Kushitikada Waqooyi). Dhul-koraadka Xabashida waxaa ku hartay Agaw (Kushitikada Dhexe). Markii ay gaareen harooyinka Abaayo iyo Turkaana, laba qayb ayay u kala baxeen: koox usii gudubtay koonfurta illaa waqooyiga Tanzania (Kushitikada Koonfureed), iyo koox afka saartay Bari iyo Waqooyi Bari ee Geeska Afrika (Kushitikada Bari), oo ay kasoo jeedaan Oromo, Sidamo, Saho, Cafar iyo Soomaali.",
          "Saho-Cafar waxay usii guureen waqooyiga Itoobiya, Jabuuti iyo Eretereeya. Oromo iyo Sidamo kama fogaanin degelkoodii hore ee harooyinka. Kushitikadii Soomaalida ee dhanka bari usoo hayaantay waxay isku fidiyeen xeebta Khooriga Tajura illaa Waqooyi Bari Badweynta Hindiya, halkaas oo ay ka barakiciyeen dadkii horey u degganaa, Wanyiika ama Sanji, oo ay u riixeen dhanka koonfureed."
        ]
      },
      {
        heading: { en: "Why did they move?", so: "Maxaa hayaankaas keenay?" },
        en: [
          "This long migration took many centuries, thousands of years before Christ. Climate scientists link it to great changes in north-east Africa between 10,000 and 5,000 years before Christ. In that age the Sahara was grassland and lakes, the rivers and streams of the Horn did not run dry, and pools were full of fish and water creatures. That easy food drew people south. The Eastern Cushites reached the northern and southern coasts of the Horn around 3,000 years before Christ."
        ],
        so: [
          "Geeddigaan dheer oo qarniyo badan qaatay wuxuu ku beegnaa kumannaan sano ka hor dhalashadii Nabi Ciise. Culimada cimilada ayaa u sababeeyay isbeddel cimilo oo xoog badan oo ka dhacay waqooyi-bari Afrika intii u dhaxaysay 10,000 illaa 5,000 oo sano Nabi Ciise dhalashadiisii kahor. Waagaas Saxaraha weyn wuxuu ahaa daaq iyo haro, Geeska Afrikana webiyadiisa iyo togaggiisu biyaha kama go'in, balliyadana waxaa ka buuxay kalluun. Taasi ayaa dadkii soo jiitay. Kushitikada Bari waxay xeebaha Geeska Afrika soo gaareen qiyaastii 3,000 sano Nabi Ciise dhalashadiisii kahor."
        ]
      },
      {
        heading: { en: "Meanwhile in the world", so: "Waxa adduunka kale ka socday" },
        en: [
          "Around 3,100 years before Christ, the first dynasty of the Pharaohs took power in Egypt. At about the same time the Sumerians of Mesopotamia invented cuneiform, the world's first writing.",
          "History also records that Persian sailors reached the coasts of the Horn, especially the south, and called the Horn of Africa \"Magan and Meluhha\". Some scholars see these names, close to the Somali words \"Magan\" and \"Maylaha\", as evidence that people speaking Somali, or a dialect of it, lived on the Somali coast 3,000 years before Christ."
        ],
        so: [
          "Qiyaastii 3,100 sano Nabi Ciise kahor, awoodda Masar waxaa la wareegay qoyskii ugu horreeyay ee boqortooyadii Faraacinada. Isla muddadaas, reer Sumer oo degganaa Bilaadu-raafideyn ayaa curiyay qoraalkii ugu horreeyay ee farguri ah, far wax lagu akhriyana adduunka ugu horreysay.",
          "Taariikhdu waxay qoraysaa in waagaas ay badmaaxiin Faarisiyiin ahi sahan ku yimaadeen xeebaha Geeska Afrika, gaar ahaan kuwa koonfureed, una bixiyeen magaca \"Magan & Meluhha\". Labadaan erey oo Afsoomaali ahaan usoo dhow \"Magan\" iyo \"Maylaha\", ayaa aqoonyahannada qaar marag uga dhigaan in 3,000 sano Nabi Ciise dhalashadiisii kahor ay xeebaha Soomaaliyeed ku noolaayeen dad ku hadla Af-soomaali ama lahjad ka mid ah."
        ]
      },
      {
        heading: { en: "What the children of Ham still share", so: "Waxa ay weli wadaagaan reer Xaam" },
        en: [
          "Greek historians of the 2nd and 1st centuries BCE described herders on the coasts of Eritrea and northern Somalia, whom they called \"Troglodytes\": nomads who fought over pasture, carried bow, arrow and spear, wore skins, lived on meat and milk, drank blood mixed with milk, and buried their dead with knees and arms bound together. A Chinese sailor who reached the Horn in the 9th century CE gave the same description. The custom of drinking milk mixed with blood survives among some Cushitic peoples and their neighbours, such as the Oromo and Maasai.",
          "Professor Cabdalla Cumar Mansuur compared the customs of the Somali and the Berbers of Morocco: herding, elders deciding law and justice, collective blood-money, and the word for young camels, \"arig\". He concluded that the Somali and the Berbers are distant cousins. The Maasai of Kenya and Tanzania tell of two siblings long ago: a girl called \"Soomaali\" and a boy who became the ancestor of the Maasai.",
          "The strongest evidence is language. Somali belongs to the great Afro-Asiatic family, with Arabic, Hebrew, Amharic, Berber, Hausa and ancient Egyptian, and to the Cushitic languages spoken from north-east Sudan to northern Tanzania. Finally, the name \"Kush\" is said to mean great heat that darkens the skin; Somali has similar-sounding words, such as the name \"Kooshin\", often given to dark children, and \"kushad\" for heat or anger. It is not certain these are truly related, but the likeness is worth noting."
        ],
        so: [
          "Taariikhyahannadii Giriigga ee noolaa qarniyadii labaad iyo kowaad Nabi Ciise dhalashadiisii kahor, ayaa wax ka qoray xoolo-dhaqatada xeebaha Eretereeya iyo waqooyiga Soomaaliya, oo ay ugu yeeri jireen \"Trogodytes\": reer-guuraa daaqsinta isku dagaala, hubkooduna ahaa qaanso, fallaar iyo waran, xirta maqaar, cuntadooduna ahayd hilib iyo caano, cabbana dhiig caano lagu barxay, maydkana jilbaha iyo gacmaha isku xira marka ay aasayaan. Isla tilmaamtaas waxaa bixiyay badmaax Shiinays ah oo xeebaha Geeska Afrika soo gaaray qarnigii sagaalaad kaddib dhalashadii Nabi Ciise. Dhaqanka dhiigga caanaha lagu barxo waxa uu ku danbeeyaa qaybo ka mid ah Kushitikada iyo deriskooda sida Oromada iyo Masaayda.",
          "Barafasoor Cabdalla Cumar Mansuur waxa uu isbarbar dhigay dhaqammada Soomaalida iyo Barbarka Morooko: xoolo-dhaqashada, odayaasha xeerka iyo garta gooya, mag-bixinta wadareedka ah, iyo yaradka oo Barbarku ugu yeeraan \"arig\", wuxuuna ku gabagabeeyay in Soomaalida iyo Barbarku yihiin ilma-adeer fog. Masaayda Kenya iyo Tanzania waxay leeyihiin sheeko-xariir sheegaysa in waagii hore ay jireen laba caruur ah oo walaalo ah: gabar la oran jiray \"Soomaali\" iyo wiil noqday awowgii Masaayda.",
          "Arrinka ugu muhiimsan ee loo daliilsado xiriirka qotada dheer ayaa ah afka. Af-Soomaaligu wuxuu ka mid yahay bahda weyn ee afafka \"Afro-Aasiyaatigga\", oo ay ku jiraan Carabiga, Cibriga, Amxaariga, Barbarka, Hawsada iyo afkii Masaaridii hore, iyo afafka Kushitigga ah ee laga hadlo waqooyi-bari Suudaan illaa waqooyiga Tanzania. Ugu danbayn, magaca \"Kuush\" waxaa la sheegaa in macnihiisu yahay kuleylka saa'idka ah ee dadka madoobeeya; Af-Soomaaliga waxaa ku jira ereyo u dhow, sida magaca \"Kooshin\" oo loo baxsho caruurta madawga badan, iyo \"Kushad\" oo loo adeegsado kul iyo caro. Lama hubo in ereyadaasi xiriir dhab ah la leeyihiin magaca qadiimiga ah, haddana waa isu-ekaansho xusid mudan."
        ]
      },
      {
        heading: { en: "Next: the land of Punt", so: "Fadhiga xiga: dalkii Punt" },
        en: [
          "When the migration reached the northern and north-eastern coasts of the Horn of Africa, the people who settled there built a form of government of their own. The ancient Egyptians called that land \"the Land of the Gods\" (Ta-Netjer), and history gave it many pages. It was the land of Punt, the subject of the next episode."
        ],
        so: [
          "Markuu hayaanku soo gaaray xeebaha waqooyi iyo waqooyi bari ee Geeska Afrika, ummaddii halkaas timid waxay yagleeshay hab-maamul ka curtay deegaannadaas. Dalkaas, oo Masaaridii hore u bixiyeen \"Dhulkii Ilaahyada\" (Ta-Netjer), ayaa taariikhda bogag badan looga xusay. Waa dalkii Punt, oo fadhigeenna xiga aan ka hadli doonno."
        ]
      }
    ],
    sources: ["Xalqada 1aad (series script)", "Soomaaliya iyo Taariikhdeedii Hore", "Taariikhda Soomaaliya", "Sooyaalka Soomaaliya"]
  },
  {
    id: 2,
    part: 1,
    years: { en: "1400s BCE – 1st century CE", so: "Qarnigii 15aad NCKH – qarnigii 1aad NCKD" },
    title: { en: "The Somali and the Ancient Civilizations", so: "Soomaalida iyo Xadaaradihii Hore" },
    summary: {
      en: "Punt and ancient Egypt, the Periplus, the Romans, and Chinese records.",
      so: "Punt iyo Masaaridii Hore, \"The Periplus\", Roomaanka iyo warbixinnadii Shiinaha."
    },
    details: {
      en: "Ancient Egypt traded with the Land of Punt for incense. Queen Hatshepsut paid for a famous expedition there, recorded in pictures and writing on the walls of her tomb at Deir el-Bahari, built between 1489 and 1469 BCE. Much later, a Greek sailors' guide, the Periplus of the Erythraean Sea, described trading towns on the northern Somali coast such as Malao and Mosyllum. Roman-era glass from the 1st century CE has been found in northern Somalia. Later, in the medieval centuries, Chinese, Mongol, Arab and Portuguese voyages passed these coasts and left written records.",
      so: "Masaaridii hore waxay Dhulka Boont kala ganacsan jirtay fooxa. Boqoradda Hatshepsut waxay kharash ku bixisay safar caan ah oo loo diray Boont, kaas oo lagu sawiray laguna qoray darbiyada qabrigeeda Daarul Baxaari, oo la dhisay inta u dhaxaysay 1489 iyo 1469 NCKH. Muddo dheer ka dib, buugga badmaaxii Giriigga ee \"The Periplus of the Erythraean Sea\" wuxuu ka warramay magaalooyin ganacsi oo ku yaal xeebta waqooyi, sida Malao iyo Mosyllum. Waqooyiga Soomaaliya waxaa laga helay quraarado laga soo bilaabo qarnigii 1aad NCKD, waqtigii Roomaanka. Markii dambe, qarniyadii dhexe, sahanno ganacsi oo ka yimid Shiinaha, Maangooliya, Carabta iyo Boortaqiiska ayaa maray xeebahaas, waxayna ka tageen raadreebyo qoraallo ah."
    },
    sources: ["New Perspectives on the Expeditions to the Land of Punt", "Soomaaliya iyo Taariikhdeedii Hore", "The Periplus", "Taariikhda Soomaaliya"]
  },
  {
    id: 3,
    part: 1,
    years: { en: "Ancient to medieval times", so: "Waayihii hore ilaa qarniyadii dhexe" },
    title: { en: "Archaeological Traces", so: "Raadreebyo Degel-Baariseed" },
    summary: {
      en: "Monuments, inscriptions and pictures, graves and ruined towns.",
      so: "Taallo-tiiriyaad, qoraallo iyo sawirro, qubuuro iyo burbur magaalooyin."
    },
    details: {
      en: "The archaeologist Sada Mire studies the stelae, shrines and ruined towns of the Horn of Africa. One example is the sacred site of Aw-Barkhadle, founded around the 12th century, believed to be the burial place of rulers of the Ifat and Awdal dynasties.",
      so: "Cilmi-baadhe Sada Mire waxay baartay taallooyinka, xarumaha barakeysan iyo burburka magaalooyinkii hore ee Geeska Afrika. Waxaa tusaale loosoo qaadan karaa goobta Aw-Barkhadle oo la aasaasay qiyaastii qarnigii 12aad, waxaana la rumeysan yahay inay tahay meeshii lagu aasi jiray boqorradii Ifat iyo Awdal."
    },
    sources: ["Divine Fertility"]
  },
  {
    id: 4,
    part: 2,
    years: { en: "700s – 1200s CE", so: "Qarnigii 8aad – 13aad NCKD" },
    title: { en: "When Did Islam Reach Somalia?", so: "Goormuu Islaamku soo gaaray Soomaaliya" },
    summary: {
      en: "Arab and Persian settlers bring Islam to the coastal towns.",
      so: "Carab iyo Faaris degay xeebaha ayaa Islaamka keenay magaalooyinka xeebta."
    },
    details: {
      en: "In the 8th century, under the Umayyad caliph Abd al-Malik ibn Marwan, many Arabs left their homeland because of political pressure and came to the Benadir coast. Among them were seven brothers of the al-Harithi clan from al-Ahsa in the Gulf, who settled in Mogadishu, Gendershe, Merca and Brava. The Zaydi (\"Emozeidi\") Arabs are recorded in Mogadishu from the 10th century, perhaps even the 9th. Zeila first appears in the writings of Arab geographers at the end of the 9th century. By the first half of the 10th century, many Arab and Persian settlers lived in Mogadishu, and Merca and Brava were of similar age. Traders from Shiraz in Iran came to Mogadishu and built a mosque there, followed by traders from Halwan in Iraq. In the 12th–13th centuries, Persians from Nishapur reached the Benadir coast.",
      so: "Qarnigii 8aad, xilligii Cabdulmaalik binu Marwaan ee Umawiyiinta, Carab badan ayaa cadaadis siyaasadeed awgiis uga soo barakacday dalkooda una soo hayaantay xeebta Banaadir. Waxaa ka mid ahaa toddoba nin oo walaalo ah oo qabiilka Al Xaarati ah, kana soo qaxay Al Axsa ee Khaliijka Carbeed, kuwaas oo degay Muqdisho, Gendershe, Marka iyo Baraawe. Carabta Saydiyiinta (\"Emozeidi\") waxaa laga diiwaangeliyay Muqdisho qarnigii 10aad, laga yaabee xitaa qarnigii 9aad. Seylac waxay markii ugu horreysay ka muuqatay qoraallada juqraafiyayaasha Carabta dhammaadkii qarnigii 9aad. Qeybtii hore ee qarnigii 10aad, Carab iyo Faaris badan ayaa degganaa Muqdisho, Marka iyo Baraawe-na waa magaalooyin da'dooda u dhow. Ganacsato ka timid Shiiraaz ee Iiraan ayaa yimid Muqdisho oo masjid ka dhisay, waxaana ka dambeeyay ganacsato ka timid Xulwaan ee Ciraaq. Qarnigii 12–13aad, Faaris ka yimid Niisaabuur ayaa soo gaaray xeebta Banaadir."
    },
    sources: ["A Modern History of the Somali", "Soomaaliya iyo Taariikhdeedii Hore", "تاريخ الصومال (Jaamac Cumar Ciise)", "Taariikhda Soomaaliya", "Peoples of the Horn of Africa"]
  },
  {
    id: 5,
    part: 2,
    years: { en: "c. 900s – 1200s CE", so: "Qiyaastii qarnigii 10aad – 13aad" },
    title: { en: "The Third Migration", so: "Geeddigii 3aad" },
    summary: {
      en: "Traditions of the forefathers who came and settled the land.",
      so: "Sheekooyinka awoowayaashii yimid oo dalka degay."
    },
    details: {
      en: "Somali tradition records the arrival of Sheikh Ismail Jabarti (Darod) around the 10th or 11th century, and of Sheikh Isaq about two centuries later. Lewis writes that parts of these stories may be legend, but they reflect the real growth and spread of these clans. By the 13th century, Hawiye groups lived near Merca. The geographer Ibn Sa'id recorded this, the earliest known mention of a Somali group.",
      so: "Sheekooyinka Soomaalidu waxay sheegaan imaatinkii Sheekh Ismaaciil Jabarti (Daarood) qiyaastii qarnigii 10aad ama 11aad, iyo Sheekh Isxaaq qiyaastii laba qarni ka dib. Lewis wuxuu qabaa in sheekooyinkaas qaarkood ay khuraafaad yihiin, balse ay muujinayaan fiditaankii dhabta ahaa ee qabaa'ilkaas. Qarnigii 13aad, qaybo Hawiye ah ayaa degganaa meel u dhow Marka. Juqraafiyaha Ibnu Saciid ayaa taas qoray, waana xusitaankii ugu horreeyay ee la ogyahay ee qolo Soomaaliyeed."
    },
    sources: ["A Modern History of the Somali", "ilovepdf_merged (4) (Ibn Sa'id)"]
  },
  {
    id: 6,
    part: 2,
    years: { en: "800s – 1600s", so: "Qarnigii 9aad – 17aad" },
    title: { en: "The Rulers of Mogadishu", so: "Maamulladii Muqdisho" },
    summary: {
      en: "The 39 families, the Fakhr ad-Din sultans, Ibn Battuta's visit in 1331, and the Muzaffar dynasty.",
      so: "39-kii Qoys, saladiintii Fakhrudiin, booqashadii Ibnu Batuuta 1331 iyo boqortooyadii Muzaffar."
    },
    details: {
      en: "In the 9th century the Arabs of Mogadishu were made up of 39 families. To protect the city's independence, its people formed a shared government of four clans, known as \"the Four Seats of Xamar\", which ran the city for about 300 years. In the 13th century Fakhr ad-Din built, in 1271, the mosque in Xamar Weyne that still bears his name, and his son Abu Bakr became sultan. In 1331 the traveller Ibn Battuta found a very large city of strong merchants, famous for cloth that was exported to Egypt. Its sultan, Abu Bakr ibn Shaykh Umar, spoke Maqdishi and Arabic, and ruled with a qadi and a council of viziers and amirs. Later the Muzaffar dynasty, linked to the Ajuran, ruled the city until the early 17th century.",
      so: "Qarnigii 9aad, Carabtii degganayd Muqdisho waxay ahaayeen 39 reer. Si ay u difaacaan madax-bannaanida magaalada, dadkeedu waxay sameysteen xukunwadaag ka kooban afar jilib, oo loo yaqaanay \"Afarta Kursi ee Xamar\", kaas oo magaalada maamulayay qiyaastii 300 sano. Qarnigii 13aad, Fakhrudiin wuxuu 1271 dhisay masaajidka Xamar Weyne ee magiciisa sita, wiilkiisa Abuubakarna waxaa loo caleema saaray suldaan. Sanadkii 1331, socdaalaha Ibnu Batuuta wuxuu ku tilmaamay magaalo aad u weyn oo ay degan yihiin ganacsato xoog leh, laguna sameeyo maro caan ah oo loo dhoofiyo Masar. Suldaankeeda, Abuu Bakar ibnu Sheekh Cumar, wuxuu ku hadli jiray af Muqdishaawi iyo Carabi, wuxuuna ku maamuli jiray qaadi iyo gole wasiirro iyo amiirro ah. Markii dambe, boqortooyadii Muzaffar oo xiriir la lahayd Ajuuraan ayaa magaalada xukuntay ilaa horraantii qarnigii 17aad."
    },
    sources: ["Taariikhda Soomaaliya", "ilovepdf_merged (4) (Ibn Battuta)", "The Shaping of Somali Society", "A Modern History of the Somali", "تاريخ الصومال (Jaamac Cumar Ciise)"]
  },
  {
    id: 7,
    part: 2,
    years: { en: "1200s – 1300s", so: "Qarnigii 13aad – 14aad" },
    title: { en: "The Rulers of the Northern Regions", so: "Talisyadii Deegaannada Waqooyi" },
    summary: {
      en: "The seven Islamic states.",
      so: "Toddobadii Talis ee Islaamka."
    },
    details: {
      en: "Sheikh Ahmed Abdullahi Reeraash's book Kashf al-Sudul (1971) describes seven Muslim kingdoms: Ifat, Dawaro, Arababni, Hadiya, Sharkha, Bali and Dara. Ifat was the largest, and Zeila was part of it. In 1289 Ifat took over the Muslim kingdom of Shewa, and its kings went on to rule all seven kingdoms.",
      so: "Buugga Sheekh Axmed Cabdullaahi Reeraash, \"Kashf as-Suduul\" (1971), wuxuu ka warramayaa toddoba boqortooyo oo Islaam ah: Ifat, Dawaaro, Arababni, Hadiya, Sharkha, Baali iyo Daara. Ifat ayaa ugu ballaarnayd, Seylacna waxay ka mid ahayd. Sanadkii 1289, Ifat waxay la wareegtay boqortooyadii Islaamka ee Shawa, boqorradeeduna waxay gacanta ku dhigeen toddobada boqortooyo oo dhan."
    },
    sources: ["كشف السدول (Reeraash)", "A Modern History of the Somali"]
  },
  {
    id: 8,
    part: 2,
    years: { en: "Aksum – 1400s", so: "Aksum – qarnigii 15aad" },
    title: { en: "The Abyssinian Kingdom", so: "Boqortooyadii Xabashida" },
    summary: {
      en: "From Aksum to the kings who fought the Muslim states.",
      so: "Aksum ilaa boqorradii la dagaallamay dawladaha Islaamka."
    },
    details: {
      en: "Dhoorre describes how the Habesha formed the kingdom of Aksum in the northern Ethiopian highlands, and how the Zagwe king was overthrown in 1137 CE. Later kings fought the Walashma state: Yagbe'a Syon from 1285, and Amda Syon, who attacked again in 1328.",
      so: "Dhoorre wuxuu ka warramay sida Xabashidu u samaysatay boqortooyada Aksum ee waqooyiga Dhulkoraadka Xabashida, iyo afgambigii boqorkii Zagwe sanadkii 1137 NCKD. Boqorradii dambe waxay la dagaallameen boqortooyadii Walashma: Yagbe'a Syon 1285 iyo wixii ka dambeeyay, iyo Amda Syon oo mar kale weeraray 1328."
    },
    sources: ["Soomaaliya iyo Taariikhdeedii Hore", "Divine Fertility"]
  },
  {
    id: 9,
    part: 2,
    years: { en: "1200s – 1530s", so: "Qarnigii 13aad – 1530-meeyadii" },
    title: { en: "The Ifat and Adal States", so: "Taliskii Ifat/Cadal" },
    summary: {
      en: "The Walashma dynasty, Imam Ahmed Gurey, and the wars of Adal and Abyssinia.",
      so: "Reer Walashma, Imaam Axmed Gurey iyo dagaalladii Cadal & Abasiiniya."
    },
    details: {
      en: "By the 13th century, the Muslim state of Ifat, which included Adal and the port of Zeila, was ruled by the Walashma dynasty. In 1415 the Muslims were defeated, and Sultan Sa'd ad-Din was killed on the island off Zeila that still bears his name. His sons returned from Yemen and ruled as Kings of Adal. In the early 16th century Imam Ahmed ibn Ibrahim, known as Ahmed Gurey, came to lead Adal. In 1529 he fought the famous battle of Shimbra Kure, described by an eyewitness in Futuh al-Habasha.",
      so: "Qarnigii 13aad, dawladdii Islaamka ee Ifat oo ay ku jireen Cadal iyo dekedda Seylac waxaa xukumayay boqortooyadii Walashma. Sanadkii 1415 Muslimiinta waa la jebiyay, Suldaan Sacduddiin-na waxaa lagu dilay jasiiradda Seylac u dhow oo maanta magiciisa sidata. Wiilashiisii ayaa Yaman ka soo laabtay oo noqday boqorradii Cadal. Horraantii qarnigii 16aad, Imaam Axmed Ibraahim (Axmed Gurey) ayaa hoggaamiyay Cadal. Sanadkii 1529 wuxuu galay dagaalkii caanka ahaa ee Shimbra Kure, oo uu ka warramay qoraaga Futuuxul Xabasha oo goobjoog ahaa."
    },
    sources: ["A Modern History of the Somali", "Divine Fertility", "Futuh al-Habasha", "Soomaaliya iyo Taariikhdeedii Hore", "كشف السدول (Reeraash)"]
  },
  {
    id: 10,
    part: 2,
    years: { en: "1490s – 1586", so: "1490-meeyadii – 1586" },
    title: { en: "Portugal and the Ottomans", so: "Burtaqaal & Cismaaniyiinta" },
    summary: {
      en: "The Portuguese and the Ottoman Turks struggle for the Indian Ocean and the Red Sea.",
      so: "Burtuqiiska iyo Cismaaniyiinta waxay ku loollameen Badweynta Hindiya iyo Badda Cas."
    },
    details: {
      en: "Portuguese ships under Vasco da Gama reached the Somali coast in the 1490s and attacked Brava and Mogadishu. Tristão da Cunha fought at Brava in 1506, and Berbera was sacked by the Portuguese in 1518. On the other side, the Ottoman Turks occupied Massawa in 1557, and the Turkish raider Ali Bey took Mogadishu in 1586.",
      so: "Maraakiibta Burtuqiiska oo uu hoggaaminayay Vasco da Gama ayaa 1490-meeyadii soo gaaray xeebaha Soomaaliyeed, waxayna weerareen Baraawe iyo Muqdisho. Tristão da Cunha wuxuu 1506 ku dagaallamay Baraawe, Berberana Burtuqiisku wuxuu dhacay 1518. Dhinaca kale, Turkida Cismaaniyiinta waxay qabsadeen Masawac 1557, weeraryahankii Turkiga ahaa ee Cali Beyna wuxuu qabsaday Muqdisho 1586."
    },
    sources: ["Soomaaliya iyo Taariikhdeedii Hore", "The Scramble in the Horn of Africa", "A Modern History of the Somali"]
  },
  {
    id: 11,
    part: 2,
    years: { en: "1537 – 1577", so: "1537 – 1577" },
    title: { en: "Adal's Final Days", so: "Cadal iyo Maalmihii ugu Danbeeyay" },
    summary: {
      en: "The conquest of Abyssinia, the arrival of the Portuguese, the fall of the Imam, and Amir Nur.",
      so: "Qabsashadii Abasiiniya, imaatinkii Burtuqiiska, dhimashadii Imaamka iyo Amiir Nuur."
    },
    details: {
      en: "By 19 March 1537 the Imam's forces had reached Lake Tana. In 1541 a Portuguese army led by Christovão da Gama, son of Vasco da Gama, landed at Massawa to help Abyssinia, and heavy battles followed in 1542. Imam Ahmed was killed in battle on 21 February 1543, and his army broke up. His nephew, Amir Nur Mujahid, later led Adal and won a battle on 23 March 1559. In 1577 Adal moved its capital from Harar to Aussa.",
      so: "19kii Maarso 1537, ciidamada Imaamka waxay gaareen Harada Taana. Sanadkii 1541, ciidan Burtuqiis ah oo uu hoggaaminayay Christovão da Gama, wiilka Vasco da Gama, ayaa ka degay Masawac si ay u caawiyaan Abasiiniya, waxaana 1542 dhacay dagaallo culus. Imaam Axmed wuxuu ku shahiiday dagaal 21kii Febraayo 1543, ciidankiisiina wuu kala dareeray. Amiir Nuur Mujaahid, oo uu Imaam Axmed abti u ahaa, ayaa markii dambe hoggaamiyay Cadal, wuxuuna guul ka gaaray dagaal dhacay 23kii Maarso 1559. Sanadkii 1577, Cadal waxay caasimaddeedii ka raratay Harar una guurtay Awsa."
    },
    sources: ["Soomaaliya iyo Taariikhdeedii Hore", "Futuh al-Habasha", "A Modern History of the Somali", "تاريخ الصومال (Jaamac Cumar Ciise)"]
  },
  {
    id: 12,
    part: 2,
    years: { en: "1500s – 1800s", so: "Qarnigii 16aad – 19aad" },
    title: { en: "The Move South", so: "Koonfur u Hayaamidda" },
    summary: {
      en: "Somali clans spread south, pushing against the Oromo.",
      so: "Qabaa'ilka Soomaalidu waxay u fideen koonfur, iyagoo is riix-riixayay Oromada."
    },
    details: {
      en: "After Adal declined, the way west was closed, and Somali groups pressed more and more to the south. Lewis describes a long series of clan movements, not one planned campaign, travelling down the Shebelle valley and along the coastal wells. By the 18th century southern Somalia as far as the Juba River had roughly its present population, and the movement later continued into northern Kenya.",
      so: "Markii Cadal hoos u dhacday, jidkii galbeedka waa xirmay, kooxaha Soomaalidana waxay sii riixeen dhanka koonfureed. Lewis wuxuu ku tilmaamay socdaallo isdaba joog ah oo qabaa'il kala duwan, oo aan ahayn hal olole oo la qorsheeyay, kuwaas oo maray dooxada Shabeelle iyo ceelasha xeebta. Qarnigii 18aad, koonfurta Soomaaliya ilaa Webiga Jubba waxay yeelatay dadkii ku dhow kuwa maanta deggan, socdaalkuna markii dambe wuxuu gaaray waqooyiga Kenya."
    },
    sources: ["A Modern History of the Somali"]
  },
  {
    id: 13,
    part: 2,
    years: { en: "1500s – 1800s", so: "Qarnigii 16aad – 19aad" },
    title: { en: "Somali Sultanates Before Colonialism (1)", so: "Saldanadihii Soomaalida Gumeysiga ka Hor (1)" },
    summary: {
      en: "Ajuran, Geledi, Silcis (Hiraab), Biimaal and the Bardheere community.",
      so: "Ajuuraan, Gelledi, Silcis (Hiraab), Biimaal iyo Jamaacada Baardheere."
    },
    details: {
      en: "The Ajuran, masters of the lower Shebelle, reached the height of their power in the late 15th or early 16th century, closely linked to Mogadishu's Muzaffar rulers. The Biimaal settled near Merca. The religious centre of Bardheere was founded on the Juba in 1820. In the 1840s the Geledi, based on the Shebelle, were at the height of their power and shared control of the Benadir coast with the Sultan of Zanzibar.",
      so: "Ajuuraan, oo xukumayay Shabeellaha Hoose, waxay gaareen heerkii ugu sarreeyay ee awooddooda dabayaaqadii qarnigii 15aad ama horraantii qarnigii 16aad, iyagoo xiriir dhow la lahaa taliyayaashii Muzaffar ee Muqdisho. Biimaal waxay degeen meel u dhow Marka. Xaruntii diiniga ahayd ee Baardheere waxaa lagu aasaasay Webiga Jubba sanadkii 1820. 1840-meeyadii, Gelledi oo fadhigoodu ahaa Webiga Shabeelle waxay joogeen heerkii ugu sarreeyay ee awooddooda, waxayna xukunka xeebta Banaadir la wadaageen Suldaanka Sinjibaar."
    },
    sources: ["A Modern History of the Somali", "The Shaping of Somali Society", "Taariikhda soomaaliyeed iyo tartanka qabiilka"]
  },
  {
    id: 14,
    part: 2,
    years: { en: "1800s", so: "Qarnigii 19aad" },
    title: { en: "Somali Sultanates Before Colonialism (2)", so: "Saldanadihii Soomaalida Gumeysiga ka Hor (2)" },
    summary: {
      en: "Majeerteen, Hobyo, Warsangeli, and Haji Sharmarke Ali of the Isaaq.",
      so: "Majeerteen, Hobyo, Warsangeli iyo Isaaq (Xaaji Sharmaarke Cali)."
    },
    details: {
      en: "The Majeerteen Sultanate in the north-east stayed independent, and in 1839 its Sultan signed a treaty with the British at Aden. In 1889 Sultan Ali Yusuf of Hobyo accepted Italian protection. In the Sanaag region, Sultan Mahamud Ali Shire ruled from Hubeera. In the 1840s Haji Sharmarke Ali Salih of the Habar Yunis became governor of Zeila.",
      so: "Saldanaddii Majeerteen ee waqooyi-bari way madax-bannaanayd, Suldaankeeduna wuxuu 1839 heshiis kula saxiixday Ingiriiska magaalada Cadan. Sanadkii 1889, Suldaan Cali Yuusuf ee Hobyo wuxuu aqbalay ilaalinta Talyaaniga. Gobolka Sanaag, Suldaan Maxamuud Cali Shire ayaa ka xukumi jiray Xubeera. 1840-meeyadii, Xaaji Sharmaarke Cali Saalax oo Habar Yoonis ah ayaa noqday guddoomiyaha Seylac."
    },
    sources: ["A Modern History of the Somali", "Taariikhda soomaaliyeed iyo tartanka qabiilka", "The Scramble in the Horn of Africa", "The Collapse of the Somali State"]
  },
  {
    id: 15,
    part: 3,
    years: { en: "Late 1600s – 1877", so: "Dabayaaqadii qarnigii 17aad – 1877" },
    title: { en: "Foreigners and the Somali Coast", so: "Shisheeyaha iyo Xeebaha Soomaaliya" },
    summary: {
      en: "Egypt on the northern coast; Oman and Zanzibar on the southern coast.",
      so: "Masaarida iyo Xeebaha Waqooyi; Cummaaniyiinta iyo Xeebaha Koonfureed."
    },
    details: {
      en: "By the end of the 17th century, Mogadishu and the other East African ports were under Omani protection. In 1828 Mogadishu was bombarded and forced to surrender, and the Benadir ports later passed to the Sultan of Zanzibar. In the north, Egypt raised its flag at Bulhar and Berbera in 1870 and put a garrison in Harar, and in 1877 Britain recognised Egyptian rule as far as Ras Hafun.",
      so: "Dabayaaqadii qarnigii 17aad, Muqdisho iyo dekedaha kale ee Bariga Afrika waxay hoos yimaadeen ilaalinta Cumaan. Sanadkii 1828 Muqdisho waa la duqeeyay, waxaana lagu qasbay inay is dhiibto, dekedaha Banaadirna markii dambe waxay hoos yimaadeen Suldaanka Sinjibaar. Waqooyiga, Masar waxay 1870 calankeeda ka taagtay Bulahar iyo Berbera, ciidanna dejisay Harar, sanadkii 1877-na Ingiriisku wuxuu aqoonsaday xukunka Masar ilaa Raas Xaafuun."
    },
    sources: ["A Modern History of the Somali"]
  },
  {
    id: 16,
    part: 3,
    years: { en: "1827 – 1887", so: "1827 – 1887" },
    title: { en: "The British Empire", so: "Boqortooyadii Ingiriiska" },
    summary: {
      en: "From India and Aden to protection treaties with Somali clans.",
      so: "Hindiya iyo Cadan ilaa heshiisyadii ilaalada ee qabaa'ilka Soomaalida."
    },
    details: {
      en: "Britain signed a trade treaty with the Habar Awal clan in 1827, and in 1839 took Aden by force as a station on the route to India. The Aden garrison depended on the Somali coast for meat. Britain occupied Zeila on 18 August 1884 and made treaties of protection with Somali clans, and the Somaliland Protectorate was established in 1887.",
      so: "Ingiriisku wuxuu 1827 heshiis ganacsi la galay beesha Habar Awal, sanadkii 1839-na xoog buu ku qabsaday Cadan si ay saldhig ugu noqoto jidka Hindiya. Ciidanka Cadan waxay hilibka ka heli jireen xeebaha Soomaaliyeed. Ingiriisku wuxuu qabsaday Seylac 18kii Agoosto 1884, wuxuuna heshiisyo ilaalin ah la galay qabaa'ilka Soomaalida, sanadkii 1887-na waxaa la dhisay Maxmiyadda Somaliland."
    },
    sources: ["A Modern History of the Somali", "The Scramble in the Horn of Africa", "Taariikhda soomaaliyeed iyo tartanka qabiilka"]
  },
  {
    id: 17,
    part: 3,
    years: { en: "1869 – 1890s", so: "1869 – 1890-meeyadii" },
    title: { en: "The Unification of Italy", so: "Isu-taggii Talyaaniga" },
    summary: {
      en: "Italy's colonial ambitions: Eritrea and the southern coast.",
      so: "Himiladii gumeysiga Talyaaniga: Eretereeya iyo xeebaha koonfureed."
    },
    details: {
      en: "In 1869 Giuseppe Sapeto obtained an interest in the port of Assab on the Eritrean coast, and in 1870 an Italian shipping company bought it outright. In 1889 the Sultan of Hobyo accepted Italian protection through the Italian Consul Filonardi. On the southern coast, Brava, Merca, Mogadishu and Lugh came to have Italian Residents.",
      so: "Sanadkii 1869, Giuseppe Sapeto wuxuu dano ka helay dekedda Casab ee xeebta Eretereeya, sanadkii 1870-na shirkad maraakiib oo Talyaani ah ayaa gebi ahaanba iibsatay. Sanadkii 1889, Suldaanka Hobyo wuxuu aqbalay ilaalinta Talyaaniga, isagoo u maray Qunsulka Talyaaniga Filonardi. Xeebaha koonfureed, Baraawe, Marka, Muqdisho iyo Luuq waxaa la dejiyay wakiillo Talyaani ah."
    },
    sources: ["A Modern History of the Somali", "Taariikhda Soomaaliya"]
  },
  {
    id: 18,
    part: 3,
    years: { en: "1862 – 1888", so: "1862 – 1888" },
    title: { en: "French Rule", so: "Maamulkii Faransiiska" },
    summary: {
      en: "France on the Red Sea coast and in Djibouti.",
      so: "Faransiiska iyo xeebaha Badda Cas iyo Jabuuti."
    },
    details: {
      en: "In 1862 France bought the port of Obock from the Afar and raised its flag there. Treaties with the Afar sultans and the Somali of Tajura and Gobad followed in 1884 and 1886. France occupied Djibouti in December 1887, and in February 1888 a convention with Britain fixed the boundary between them. French Somaliland came to be described as \"a port (Djibouti) and a railway\": the line from the coast to Addis Ababa.",
      so: "Sanadkii 1862, Faransiisku wuxuu Cafarta ka iibsaday dekedda Obokh, calankiisana halkaas ka taagay. Sanadihii 1884 iyo 1886 waxaa xigay heshiisyo lala galay saladiintii Cafarta iyo Soomaalida Tajura iyo Gobad. Faransiisku wuxuu qabsaday Jabuuti bishii Diseembar 1887, bishii Febraayo 1888-na heshiis lala galay Ingiriiska ayaa lagu go'aamiyay xadka u dhexeeya. Somaliland-ta Faransiiska waxaa lagu tilmaamay \"deked (Jabuuti) iyo tareen\": khadka tareenka ee xeebta ka bilaabma una socda Addis Ababa."
    },
    sources: ["A Modern History of the Somali", "Taariikhda Soomaaliya", "The Scramble in the Horn of Africa", "Peoples of the Horn of Africa"]
  },
  {
    id: 19,
    part: 3,
    years: { en: "1887 – 1897", so: "1887 – 1897" },
    title: { en: "The Abyssinian Empire", so: "Imbaraadooriyaddii Abasiiniya" },
    summary: {
      en: "Menelik II expands into Somali lands.",
      so: "Dhulballaarsigii Menelik II."
    },
    details: {
      en: "Menelik conquered Harar in 1887 and then turned toward the Somali clans, claiming their land in a circular letter of 1891. In 1896 he crushed Italy at the battle of Adwa, ending Italy's claim to a protectorate over Ethiopia. In 1897 Ethiopia signed treaties with the colonial powers, and by then the partition of the Somali lands was virtually complete.",
      so: "Menelik wuxuu qabsaday Harar 1887, ka dibna wuxuu u jeestay qabaa'ilka Soomaalida, isagoo dhulkooda sheegtay warqad wareeg ah oo uu qoray 1891. Sanadkii 1896 wuxuu Talyaaniga ku jebiyay dagaalkii Cadwa, taasoo soo afjartay sheegashadii Talyaaniga ee ahayd inuu ilaaliye u yahay Itoobiya. Sanadkii 1897 Itoobiya waxay heshiisyo la saxiixatay quwadaha gumeysiga, xilligaasna qaybinta dhulka Soomaalida waxay ku dhowaatay inay dhammaato."
    },
    sources: ["A Modern History of the Somali", "The Somali Peninsula"]
  },
  {
    id: 20,
    part: 3,
    years: { en: "1896 – 1927", so: "1896 – 1927" },
    title: { en: "The Century of Resistance", so: "Qarnigii iska Caabbinta" },
    summary: {
      en: "Biimaal, Sheikh Uweys, Geledi and Sheikh Hassan Barsane.",
      so: "Biimaal, Sh. Uweys, Gelledi iyo Sh. Xasan Barsane."
    },
    details: {
      en: "On the Benadir coast, the Biimaal and the Wacdaan resisted Italy's first colonisation. Less than a year after Adwa, Wacdaan warriors destroyed an Italian expedition at Lafoole, on the Mogadishu–Afgooye road; the Italian press called it the \"Lafoole Massacre\". Sheikh Uways Muhammad al-Barawi (1847–1909) spread the Qadiriya order in the southern interior. In 1924 Governor De Vecchi ordered all southern Somalis to give up their weapons. The villages of Jiliyaale, Ceeldheere, Buur Gooyo and Afgooye rose up under Sheikh Xasan Sheikh Nuur (Barsane), head of the religious community at Jiliyaale. After four days of fighting (29–31 March 1924) he was captured, sentenced to thirty years, and died in prison in Mogadishu on 28 January 1927.",
      so: "Xeebta Banaadir, Biimaal iyo Wacdaan waxay iska caabbiyeen gumeysigii ugu horreeyay ee Talyaaniga. Wax ka yar sannad ka dib dagaalkii Cadwa, dagaalyahannada Wacdaan ayaa baabi'iyay koox Talyaani ah meel la yiraahdo Lafoole oo ku taal waddada Muqdisho iyo Afgooye; saxaafadda Talyaanigu waxay ugu yeertay \"Xasuuqii Lafoole\". Sheekh Uweys Maxamed al-Baraawi (1847–1909) wuxuu dariiqada Qaadiriya ku faafiyay gudaha koonfurta. Sanadkii 1924, Guddoomiye De Vecchi wuxuu amar ku bixiyay in Soomaalida Koofureed oo dhan hubka laga qaado. Tuulooyinka Jiliyaale, Ceeldheere, Buur Gooyo iyo Afgooye ayaa kacay, iyagoo uu hoggaaminayo Sheekh Xasan Sheekh Nuur (Barsane), madaxa Jameecada Jiliyaale. Afar maalmood oo dagaal ah (29–31 Maarso 1924) ka dib waa la qabtay, waxaa lagu xukumay soddon sano oo xabsi ah, wuxuuna ku geeriyooday xabsiga Xamar 28kii Janaayo 1927."
    },
    sources: ["The Shaping of Somali Society", "The Collapse of the Somali State", "Taariikhda Soomaaliya"]
  },
  {
    id: 21,
    part: 3,
    years: { en: "1899 – 1910", so: "1899 – 1910" },
    title: { en: "The Century of Resistance: The Dervishes (1)", so: "Qarnigii iska Caabbinta (Daraawiish) 1" },
    summary: {
      en: "Sayyid Mohamed Abdullah Hassan begins the Dervish struggle.",
      so: "Sayid Maxamed Cabdulle Xasan wuxuu bilaabay halgankii Daraawiishta."
    },
    details: {
      en: "In 1899 the Sayyid's conflict with the British administration began, and the Dervish war against Britain, Italy and Abyssinia lasted about 20 years. The first battle with British forces was at Afbakeyle, about 40 miles west of Las Anod, in April 1901. On 5 March 1905 Italy signed the Ilig Treaty, which recognised the Sayyid as ruler of the Nugaal Valley. In 1910 the British withdrew to the coast.",
      so: "Sanadkii 1899 waxaa bilaabmay khilaafkii Sayidka iyo maamulkii Ingiriiska, dagaalkii Daraawiishta ee lala galay Ingiriiska, Talyaaniga iyo Xabashidana wuxuu socday ilaa 20 sano. Dagaalkii ugu horreeyay ee ciidamada Ingiriiska wuxuu ka dhacay Afbakeyle, oo 40 mayl galbeed ka xigta Laascaanood, bishii Abriil 1901. 5tii Maarso 1905, Talyaanigu wuxuu saxiixay Heshiiskii Ilig, kaas oo Sayidka u aqoonsaday taliyaha Dooxada Nugaal. Sanadkii 1910, Ingiriisku wuxuu dib ugu gurtay xeebta."
    },
    sources: ["A Modern History of the Somali", "Taariikhda soomaaliyeed iyo tartanka qabiilka", "The Collapse of the Somali State", "تاريخ الصومال (Jaamac Cumar Ciise)"]
  },
  {
    id: 22,
    part: 3,
    years: { en: "1910 – 1920", so: "1910 – 1920" },
    title: { en: "The Century of Resistance: The Dervishes (2)", so: "Qarnigii iska Caabbinta (Daraawiish) 2" },
    summary: {
      en: "The Dervish state at Taleh, and its end.",
      so: "Dawladdii Daraawiishta ee Taleex iyo dhammaadkeedii."
    },
    details: {
      en: "After the British withdrew to the coast in 1910, the interior fell into fighting and famine. The Dervishes regrouped at Taleh, in the heart of the Nugaal Valley, where they built strong garrisons. Sayyid Mohamed died on 21 December 1920, at the age of fifty-six.",
      so: "Markii Ingiriisku 1910 dib ugu gurtay xeebta, gudaha dalka waxaa ka dhacay dagaallo iyo abaar. Daraawiishtu waxay isku soo urursadeen Taleex, oo ku taal bartamaha Dooxada Nugaal, halkaas oo ay ka dhiseen qalcado adag. Sayid Maxamed wuxuu geeriyooday 21kii Diseembar 1920, isagoo konton iyo lix jir ah."
    },
    sources: ["A Modern History of the Somali", "The Collapse of the Somali State", "تاريخ الصومال (Jaamac Cumar Ciise)"]
  },
  {
    id: 23,
    part: 3,
    years: { en: "1925", so: "1925" },
    title: { en: "The World War and After the Dervishes", so: "Dagaalkii Adduunka iyo Daraawiish Dabadeed" },
    summary: {
      en: "Agreements between the colonial powers; Jubaland changes hands.",
      so: "Heshiisyadii Quwadaha Isticmaarka; la kala wareegidda Jubaland."
    },
    details: {
      en: "Britain handed Jubaland over to Italy, giving the Somalis there a new colonial nationality without their knowledge or consent. The transfer took place on 29 June 1925.",
      so: "Ingiriisku wuxuu Jubaland u wareejiyay Talyaaniga, isagoo Soomaalidii halkaas degganayd siiyay dhalasho gumeysi oo cusub iyagoon ogeyn oo aan oggolaan. Wareejintu waxay dhacday 29kii Juun 1925."
    },
    sources: ["The Somali Peninsula"]
  },
  {
    id: 24,
    part: 3,
    years: { en: "1923 – 1927", so: "1923 – 1927" },
    title: { en: "Fascist Rule", so: "Maamulkii Faashiistaha" },
    summary: {
      en: "Governor De Vecchi conquers the north-eastern sultanates.",
      so: "Guddoomiye De Vecchi wuxuu qabsaday saldanadihii waqooyi-bari."
    },
    details: {
      en: "Governor Cesare Maria De Vecchi arrived in December 1923. In 1925 Italy broke its treaties with Boqor Osman of the Majeerteen and Sultan Ali Yusuf of Hobyo. Hobyo was overrun in October 1925 and became an Italian administrative region. Omar Samatar, one of Sultan Ali Yusuf's commanders, led a revolt and recaptured El-Buur on 9 November. The Majeerteen court at Bargaal fell in 1927. The British exiled Sultan Mahamud Ali Shire to the Seychelles for seven years.",
      so: "Guddoomiye Cesare Maria De Vecchi wuxuu yimid bishii Diseembar 1923. Sanadkii 1925, Talyaanigu wuxuu jebiyay heshiisyadii uu la galay Boqor Cismaan ee Majeerteen iyo Suldaan Cali Yuusuf ee Hobyo. Hobyo waa la qabsaday bishii Oktoobar 1925, waxayna noqotay gobol maamul Talyaani. Cumar Samatar, oo ka mid ahaa taliyayaasha Suldaan Cali Yuusuf, ayaa hoggaamiyay kacdoon, wuxuuna dib u qabsaday Ceelbuur 9kii Nofeembar. Xaruntii Majeerteen ee Baargaal waxay dhacday 1927. Ingiriisku wuxuu Suldaan Maxamuud Cali Shire u masaafuriyay jasiiradda Seyshelles muddo toddoba sano ah."
    },
    sources: ["The Collapse of the Somali State", "Taariikhda soomaaliyeed iyo tartanka qabiilka", "A Modern History of the Somali", "TAXANAHA TAARIIKHDA SOOMAALIYA"]
  },
  {
    id: 25,
    part: 3,
    years: { en: "1934 – 1935", so: "1934 – 1935" },
    title: { en: "The Colonisers Clash", so: "Isku dhacii Gumeystaha" },
    summary: {
      en: "The Walwal incident and Italy's invasion of Ethiopia.",
      so: "Dhacdadii Wel-Wel iyo duullaankii Talyaaniga ee Itoobiya."
    },
    details: {
      en: "Italy and Ethiopia disagreed about the 1897 border agreement. At Walwal, an important watering place for livestock, clashes took place in November and December 1934. In 1935 Italy invaded Ethiopia from its Somali territory, and Italy then controlled most of the Somali lands.",
      so: "Talyaaniga iyo Itoobiya waxay isku khilaafeen heshiiskii xuduudda ee 1897. Wel-Wel, oo ahayd meel muhiim u ah waraabka xoolaha, waxaa ka dhacay isku dhacyo bilihii Nofeembar iyo Diseembar 1934. Sanadkii 1935, Talyaanigu wuxuu Itoobiya ku duulay isagoo ka imanaya dhulkiisa Soomaaliyeed, ka dibna Talyaanigu wuxuu gacanta ku dhigay inta badan dhulka Soomaalida."
    },
    sources: ["The Collapse of the Somali State", "The Somali Peninsula", "A Modern History of the Somali"]
  },
  {
    id: 26,
    part: 3,
    years: { en: "1941 – 1947", so: "1941 – 1947" },
    title: { en: "The Second World War", so: "Dagaalkii 2aad ee Adduunka" },
    summary: {
      en: "Italy is defeated and Britain takes control of the Somali lands.",
      so: "Jabkii Talyaaniga iyo gacan ku haynta Ingiriiska ee dhulka Soomaalida."
    },
    details: {
      en: "After Italy's defeat in East Africa, Britain reoccupied British Somaliland in 1941. From 1942 to 1947, most Somalis lived under one administration: the British Military Administration.",
      so: "Jabkii Talyaaniga ee Bariga Afrika ka dib, Ingiriisku wuxuu dib u qabsaday Somaliland 1941. Laga soo bilaabo 1942 ilaa 1947, inta badan Soomaalidu waxay hoos joogeen hal maamul: Maamulkii Ciidamada Ingiriiska."
    },
    sources: ["A Modern History of the Somali", "The Somali Peninsula", "Taariikhda Soomaaliya"]
  },
  {
    id: 27,
    part: 3,
    years: { en: "1943 – 1950", so: "1943 – 1950" },
    title: { en: "Britain and Somalia", so: "Ingiriiska & Soomaaliya" },
    summary: {
      en: "Somali political organisations, the Bevin Plan, and the UN decision.",
      so: "Ururadii Soomaalida, Qorshihii Bevin iyo go'aankii Qaramada Midoobay."
    },
    details: {
      en: "The Somali Youth Club opened in Mogadishu on 13 May 1943 with thirteen founder members, and in 1947 it became the Somali Youth League (SYL). Its first goal was to unite all Somalis. In 1946 the British Foreign Secretary, Ernest Bevin, proposed keeping the Somali territories together under a trusteeship. The question passed from the Four Powers to the United Nations, which placed Somalia under Italian trusteeship.",
      so: "Ururka Dhallinyarada Soomaaliyeed (Somali Youth Club) waxaa Muqdisho lagu furay 13kii Maajo 1943, isagoo leh saddex iyo toban xubnood oo aasaasay, sanadkii 1947-na wuxuu noqday Leegada Dhallinyarada Soomaaliyeed (SYL). Hadafkiisii ugu horreeyay wuxuu ahaa midaynta Soomaalida oo dhan. Sanadkii 1946, Wasiirka Arrimaha Dibadda Ingiriiska, Ernest Bevin, wuxuu soo jeediyay in dhulalka Soomaalida la isugu hayo hal wisaayad. Arrinta waxay ka gudubtay Afarta Quwadood una wareegtay Qaramada Midoobay, taas oo Soomaaliya dhigtay wisaayadda Talyaaniga."
    },
    sources: ["A Modern History of the Somali", "The Collapse of the Somali State", "The Scramble in the Horn of Africa", "Taariikhda Soomaaliya"]
  },
  {
    id: 28,
    part: 3,
    years: { en: "1950 – 1960", so: "1950 – 1960" },
    title: { en: "The Ten Years of AFIS", so: "Tobaneeyadii AFIS" },
    summary: {
      en: "Italian trusteeship, the handover of the Haud, and independence.",
      so: "Wisaayaddii Talyaaniga, wareejintii Hawd iyo madax-bannaanida."
    },
    details: {
      en: "From 1950 to 1960 Italy ran Somalia as a UN trust territory, known as AFIS. In 1954 Britain gave up the Haud. British Somaliland became independent on 26 June 1960, and on 1 July 1960 it united with the former Italian Somalia.",
      so: "Laga soo bilaabo 1950 ilaa 1960, Talyaanigu wuxuu Soomaaliya u maamulayay sidii dhul wisaayad Qaramada Midoobay ah, oo loo yaqaanay AFIS. Sanadkii 1954, Ingiriisku wuxuu ka tanaasulay Hawd. Somaliland waxay xorriyadda qaadatay 26kii Juun 1960, 1dii Luulyo 1960-na waxay la midowday Soomaaliyadii Talyaaniga."
    },
    sources: ["A Modern History of the Somali", "The Somali Peninsula", "Taariikhda Soomaaliya", "تاريخ الصومال (Jaamac Cumar Ciise)"]
  }
];

// The text in the header and footer, in both languages
const pageText = {
  title:    { en: "Somali History Timeline", so: "Taxanaha Taariikhda Ummadda Soomaaliyeed" },
  subtitle: { en: "From ancient times to independence in 1960", so: "Laga soo bilaabo waayihii hore ilaa xorriyaddii 1960" },
  footer:   { en: "A learning project built with HTML, CSS, and JavaScript.", so: "Tijaabo" },
  home:     { en: "Home", so: "Bogga Hore" },
  episodesNav: { en: "Episodes", so: "Xalqadaha" },

  // ---- The welcome page (index.html) ----
  seriesTitle: { en: "The Series of the History of the Somali Nation", so: "Taxanaha Taariikhda Ummadda Soomaaliyeed" },
  byline:      { en: "A series by Mohamed Abdulkadir Mohamed", so: "Waxaa diyaariyay Maxamed Cabdulqaadir Maxamed" },
  welcomeHeading: { en: "Welcome", so: "Ku soo dhowow" },
  // Welcome text, taken from the series introduction ("Hordhac"). Each line is one paragraph.
  welcomeText: {
    en: [
      "History is the most important school a society can learn from. To understand where we stand today, we must study and look back at the ages that have passed, and the paths our fathers and ancestors took. As the Somali saying goes: \"A tree is not planted only for the shade of the one who plants it.\"",
      "The greatest obstacle facing our history is not a lack of information. It is that our history is scattered: loose facts, isolated events, names whose place in history we do not know, and no thread to tie them together. That is what led me to prepare \"The Series of the History of the Somali Nation\": a scholarly, detailed account that everyone can understand.",
      "The series is planned in 28 episodes, drawing on more than 25 references and books. A new episode is released every Sunday at 7:00 in the evening."
    ],
    so: [
      "Taariikhdu waa dugsiga ugu muhiimsan ee bulsho cashar ka baran karto. Si aan taaganteenna u fahanno, waa inaan darasnaa, dibna u milicsannaa waayeheennii tegay, iyo tubtii aabbayaasheen iyo ab-awalladeen ay qaadeen. Waana meesha Soomaalidu ka tiraahdo: \"Geedka looma abuuro adigaa harsan doona\".",
      "Caqabadda ugu weyn ee taariikhdeenna naga haysata ma aha xog yari iyo keyd la'aan, balse waa filiqsanaanta taariikhdeenna: xog qubane ah, dhacdooyin kaliyaale ah, magacyo meel ay taariikhda kasoo galeen aannan war u hayn, iyo nirgixii isku xiri lahaa oo aan la hayn. Taasi waxay igu dhalisay inaan diyaariyo \"Taxanaha Taariikhda Ummadda Soomaaliyeed\", si cilmiyaysan, faah-faahsan, isla markaasna dadku wada fahmi karaan.",
      "Taxanahan waxaa loo qorsheeyay 28 xalqo, xogtiisana waxaan kasoo ururiyay in ka badan 25 marjic iyo buug. Xalqad cusub ayaa soo baxda Axad walba, saacaddu marka ay tahay 7:00 fiidnimo."
    ]
  },
  // The series motto (from the introduction)
  motto:       { en: "\"Learn your past, so that you understand your future.\"", so: "\"Tagtadaada baro, timaaddadaada aad fahantide.\"" },
  mottoSource: { en: "Professor Cabdalla Cumar Mansuur", so: "Barafasoor Cabdalla Cumar Mansuur" },
  aboutNav:    { en: "About", so: "Ku saabsan" },
  startButton:    { en: "Start with Episode 1", so: "Ka bilow Xalqada 1aad" },
  timelineButton: { en: "See all episodes", so: "Eeg dhammaan xalqadaha" },
  partsHeading:   { en: "The three parts of the series", so: "Saddexda qaybood ee taxanaha" },
  episodesRange:  { en: "Episodes", so: "Xalqadaha" },
  // Words used on the episode page (episode.html)
  episode:     { en: "Episode", so: "Xalqada" },
  previous:    { en: "Previous", so: "Xalqadii hore" },
  next:        { en: "Next", so: "Xalqada xigta" },
  allEpisodes: { en: "All episodes", so: "Dhammaan xalqadaha" },
  readMore:    { en: "Read more →", so: "Sii akhri →" },
  // Words for the video, pictures and maps (Step 11)
  video:       { en: "Video", so: "Muuqaal" },
  videoSoon:   { en: "The video for this episode is coming soon.", so: "Muuqaalka xalqadan dhowaan ayuu soo bixi doonaa." },
  watchOnYouTube: { en: "Watch on YouTube", so: "Ka daawo YouTube" },
  pictures:    { en: "Pictures", so: "Sawirro" },
  maps:        { en: "Maps", so: "Khariidado" },
  aiLabel:     { en: "AI illustration – not a historical image", so: "Sawir AI ah – ma aha sawir taariikhi ah" },
  close:       { en: "Close", so: "Xir" },
  notFound:    { en: "Sorry, this episode was not found.", so: "Waan ka xumahay, xalqadan lama helin." },
  // The button shows the OTHER language: the one you will switch to
  button:   { en: "Soomaali", so: "English" }
};


// =============================================================
// The About page (about.html), from the series introduction ("Hordhac")
// =============================================================
const about = {
  title: { en: "About the Series", so: "Ku Saabsan Taxanaha" },
  intro: {
    en: "In the introduction to the series, I share how the programme is prepared and organised, so that viewers know what to expect from the start.",
    so: "Maadaama fadhiga koowaad ee taxanaha uu yahay hordhac, waxaan idin la wadaagayaa habraaca iyo qaab-diyaarinta barnaamijka, si ay afeef hore iigu sii noqoto, filashaduna ay isku keento."
  },
  sections: [
    {
      heading: { en: "Method", so: "Manhaj" },
      points: {
        en: [
          "Somali history is divided into three stages. Part 1, ancient history: the time before Islam reached this land. Part 2, medieval history: from the arrival of Islam until the coming of colonialism. Part 3: from when the colonisers set foot on Somali land at the end of the 19th century until independence.",
          "Historical events are not built on \"it is said\" or \"I heard\", but on written works and references that can be checked. Each episode comes with the list of books and places its information was taken from, so that anyone can go back to them for more detail.",
          "The main aim is to connect Somali history together. But to understand it fully, it is also linked to world history and to what was happening around the globe in each period.",
          "The series uses visual material to explain events: above all maps, but also pictures of people, treaty documents, and written records, so that viewers can clearly see where history happened.",
          "The series is weekly: one episode each week, of no more than 20 minutes."
        ],
        so: [
          "Taariikhda Soomaalida waxaan u qaybiyay saddex marxalo. Qaybta 1aad, taariikhda hore: wixii ka horreeyay intii uusan Islaamku soo gaarin dhulkan. Qaybta 2aad, taariikhda dhexe: markii Islaamku soo gaaray carriga Soomaalida illaa gumeystaha laga soo gaaray. Qaybta 3aad: markii gumeystuhu cagaha soo dhigay dhulka Soomaalida dhammaadkii qarnigii 19aad illaa dharaartii xorriyadda iyo madax-bannaanida.",
          "Dhacdooyinka taariikheed laguma saleeyo waxaa la yiri iyo waxaan maqlay, ee waxaa bud-dhig looga dhigaa dhiganayaal iyo maraajic tixraacooda la heli karo. Fadhi walba waxaa la socda liiska buugta iyo meelaha xogta laga soo qaaday, si wixii faah-faahin iyo xaqiijin ah loogu noqdo ilahaas.",
          "Hadafka koowaad ee taxanaha waa isku xirka taariikhda Soomaaliyeed, haddana si fahankeedu u dhammaystirmo, waxaa lagu xiraa taariikhda adduun weynaha iyo dhacdooyinkii ka socday daafaha caalamka marxalad walba.",
          "Taxanaha waxaa lagu lifaaqay muuqaallo sharaxaya dhacdooyinka: ugu horreyn khariidadaha, iyo sidoo kale sawirada ashkhaasta, dukumiintiyada heshiisyada iyo qoraallada, si daawaduhu si waadax ah u fahmo goobaha taariikhdu ka dhacday.",
          "Baahinta taxanuhu waa toddobaadle: usbuuc walba hal fadhi, oo aan ka badnaan doonin 20 daqiiqo."
        ]
      }
    },
    {
      heading: { en: "Disclaimer", so: "Afeef" },
      points: {
        en: [
          "This series focuses only on the historical continuity of the Somali nation's past. Topics such as lineage, clan, languages, dialects, culture, schools of law, Sufi orders, individuals and politics are outside its scope. While following the series, judge it only by the facts of history and their evidence.",
          "Because this is history, people's names will be mentioned. Please do not insult or mock them: you may disapprove of what a person did, but you are not their judge, and history is not a court; it is about learning the facts and taking lessons. As God says: \u2067«تلك أمة قد خلت لها ما كسبت ولكم ما كسبتم ولا تسألون عما كانوا يعملون»\u2069, \"That was a nation which has passed on. It will have what it earned, and you will have what you have earned. And you will not be asked about what they used to do.\"",
          "My role is only to organise and present the historical information I have gathered. Establishing the facts and researching history is the work of researchers and historians; that is why every episode comes with its sources."
        ],
        so: [
          "Taxanahan wuxuu diiradda saarayaa isku xirka taariikheed ee sooyaalkii ummadda Soomaaliyeed oo keli ah. Mawduucyada la xiriira isirka, qabiilka, afafka, lahjadaha, dhaqanka, madaahibta, dariiqooyinka, shakhsiyaadka iyo siyaasadda waa ka baxsan xayndaabka taxanaha. Inta aad la socotid barnaamijkan, ku xukun oo keli ah dhacdooyinka taariikhda xaqiiqdooda iyo xujadooda.",
          "Mar haddii taariikh laga hadlayo, waxaa qasab ah in dad magacyadooda la soo hadal qaado. Dadkaas aflagaado iyo sar-sarriig toonna yaan lagula kicin: fal qof sameeyay waad saluugi kartaa, balse shakhsiyaddiisa xukun iyo maxkamad toonna kuma lihid, taariikhduna xukun maahane waa xog-helid iyo cibra qaadasho. Waana hadalkii Eebbe: \u2067«تلك أمة قد خلت لها ما كسبت ولكم ما كسبتم ولا تسألون عما كانوا يعملون»\u2069.",
          "Doorkayga iyo kaalintaydu waa uun abla-ablaynta iyo soo gudbinta xogaha taariikheed inta aan haleelay. Qarrirka xaqiiqooyinka iyo baaridda cilmiga taariikhda waa shaqada cilmi-baarayaasha iyo culimada taariikhda; waana sababta aan fadhi walba ilaha-xogta ugu lifaaqay."
        ]
      }
    }
  ],
  thanksHeading: { en: "Thanks", so: "Mahadcelin" },
  thanksIntro: {
    en: "My thanks and prayers go to all the researchers whose knowledge I benefited from, and without whose efforts this series could not have been made:",
    so: "Mahadcelin iyo duco ayaan u marinayaa dhammaan cilmi-baarayaashii aan ka faa'iideystay aqoontooda, dadaalkooda la'aantiisna uusan taxanahani hirgeli lahayn:"
  },
  thanksNames: [
    "Barafasoor Cabdalle Cumar Mansuur",
    "Ustad C/qaadir Salaad Dhoorre",
    "Janan Maxamed Ibraahim Maxamed \"Liiq-Liiqato\"",
    "Buun Shiikh Aw-Jaamac Cumar Ciise",
    "Dr. C/salaam Shiikh Xassan",
    "Qoraa Xamdi Sayid Saalim",
    "Qoraa C/qaadir Cismaan Maxamuud (Oromo)",
    "Cilmi-baare I. M. Lewis",
    "Barafasoor Axmed Ismaaciil Samatar",
    "Barafasoor Cabdi Ismaaciil Samatar",
    "Barafasoor Maxamed Xaaji Mukhtaar",
    "Barafasoor Maxamed Ciise Turunji",
    "Shiikh Axmed C/laahi Riiraash",
    "Barafasoor Maxamed Cabdi Maxamed \"Gaandi\"",
    "Cilmi-baare Ray Beechey",
    "Barafasoor C/raxmaan C/laahi Baadiyow",
    "Barafasoor C/salaam Maxamed Ciise-Salwe"
  ],
  thanksSpecial: {
    en: "Special thanks to the \"Dhaxal-reeb\" platform, led by Professor Axmed Maxamed Cabdi (Baafo): without it much information and history would not be easy to find. It is an effort that helps record, preserve and pass on the history of the Somali nation.",
    so: "Mahad gaar ah iyo bogaadin ayaan u dirayaa madasha \"Dhaxal-reeb\" oo uu hormuud u yahay Barafasoor Axmed Maxamed Cabdi (Baafo), oo la'aanteed xog badan iyo taariikho badanba aan sahal lagu heli lahayn; waana dadaal ka qaybqaadanaya dabaqabashada, keydinta iyo soo gudbinta taariikhda ummadda Soomaaliyeed."
  },
  poemHeading: { en: "From a poem by Abwaan Cabdillaahi Timacadde", so: "Tuducyo ka mid ah tixdii Abwaan C/laahi Timacadde" },
  poem: [
    "Gabaygu waygu sugnaaye",
    "Haddii aan sar-sarriigo",
    "Ama aan surmaseego",
    "Amaba aan sixi waayo",
    "Ama aan ka salguuro",
    "Amaba laygu saluugo",
    "Soomaalida I maqlaysaay",
    "I su'aala hadhaw"
  ]
};

// The word "Sources" in each language
const sourcesLabel = { en: "Sources", so: "Ilaha-xogta" };
