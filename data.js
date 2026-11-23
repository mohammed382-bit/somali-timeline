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
    // The FULL script of the episode ("Xalqadda 1aad"), shown on the episode page.
    // Somali: the script word for word. English: a full translation, paragraph by paragraph.
    article: [
      {
        "heading": {
          "en": "Opening",
          "so": "Furitaan"
        },
        "en": [
          "Who are the Somali?",
          "Where did they come from?",
          "And when did this land first enter history?",
          "With whom do we share an ancestral line?",
          "And what evidence is there?",
          "The answers to these questions, and many others, you will find in this session and the sessions that follow.",
          "Peace be upon you, and the mercy of God and His blessings.",
          "Welcome back, and good to be together again.",
          "In our previous session we laid the groundwork for this series, which we have dedicated to connecting and setting out the History of the Somali Nation.",
          "We mentioned that we will divide that history into three sections:",
          "• Part 1: dealing with ancient history, and what came before Islam reached this land.",
          "• Part 2: the medieval history of the Somali, beginning when Islam reached this country and running up to the century of the colonisers.",
          "• Part 3: which we trace from when the colonisers set foot on Somali land at the end of the 19th century, up to the day of independence and self-rule.",
          "We will cover the first part in this session and the two sessions that follow, God willing.",
          "My name is Mohamed Abdulkadir Mohamed.",
          "This is \"Miyir\", the platform for raising awareness and nurturing understanding.",
          "Come closer."
        ],
        "so": [
          "Waa tuma Soomaali?",
          "Xagee bay ka timid?",
          "Dhulkaanse goormay ahayd markii ugu horreysay ee uu taariikhda galay?",
          "Yaan fir wadaagnaa?",
          "Maxaase daliil loo hayaa?",
          "Weydiimahan iyo qaar kaloo badanba, jawaabahooda fadhigaan iyo fadhiyada xiga ayaad uga bogan doontaa.",
          "سلام الله عليكم ورحمته وبركاته",
          "Mar kale iyo isku soo laabasho wanaagsan.",
          "Fadhigeennii hore waxa aan usoo gogol-xaarannay taxanahan aan ugu tagalay isku-xirka iyo naqtiiminta Taariikhda Ummadda Soomaaliyeed.",
          "Waxa aan soo xusnay in aan taariikhdaas xirmo ahaan u qaybinayno saddex waaxood, oo kala ah:",
          "• Qaybta 1aad: oo qaadaa-dhigaysa taariikhda hore, iyo wixii ka horreeyay intii uusan islaamku soo gaarin dhulkan.",
          "• Qaybta 2aad: oo ah taariikhda dhexe ee soomaalida, kana soo bilaabanaysa markii Islaamku soo gaaray carrigan, illaa laga soo gaaro qarnigii gumeystaha.",
          "• Qaybta 3aad: oo aan kasoo taxayno markii gumestuhu cagaha soo dhigay dhulka soomaalida dhammaadkii qarnigii 19aad ee miilaadiga, illaa laga soo gaaray dharaartii xorriyadda iyo madax-bannaanida.",
          "Qaybta hore ayaanna ku turxaan-bixin doonnaa fadhigan iyo labada fadhi ee xigaba, haddii Eebbe inoo oggolaado.",
          "Magacaygu waa Maxamed Cabdulqaadir Maxamed.",
          "Halkani waa madasha “Miyir” ee kobcinta Wacyiga iyo ababinta garaadka.",
          "Horey usoo dhawaada."
        ]
      },
      {
        "heading": {
          "en": "The three sons of Noah",
          "so": "Saddexdii wiil ee Nabi Nuux"
        },
        "en": [
          "When we speak about history, especially a nation's history, and aim to trace its origins, its past and the sequence of its ages, it becomes essential to go back a long way.",
          "If we stop to speak about and examine history that distant, we have no witness or account of it, and none can be found; what it has left behind is very little indeed.",
          "But the knowledge God has granted humankind is vast, and that distant history can be glimpsed through various sciences which, however small their light, shine a torch on what happened in those far-off ages.",
          "The kinds of those sciences, and how they provide evidence, we will examine in another session.",
          "But a journey of 10,000 years awaits us, so let us set foot on the path.",
          "Since the details of the eras we are discussing are limited, we will neither sweeten nor sour them, nor dwell on them at length.",
          "As the religion of Islam has made clear to us, as all followers of the revealed religions believe, and as experts with deep knowledge of human races and of how humankind developed generation after generation have described, it is agreed that all of humanity traces its lineage to the Prophet Adam (peace be upon him), who is \"Abu al-Bashar\", the father of humankind.",
          "And that after him the peoples living across the world today all descend from the three sons of the Prophet Noah (peace be upon him):",
          "• Shem son of Noah (Saam Nuux)",
          "• Japheth son of Noah (Yaafith Nuux)",
          "• And Ham son of Noah (Xaam Nuux)",
          "After the flood that struck the people of Noah and covered the whole world, the only descendants left whose story is known are those who came from these three sons.",
          "As God mentions in His book, the Qur'an, in Surat as-Saffat:",
          "«وَجَعَلْنَا ذُرِّيَّتَهُ هُمُ الْبَاقِينَ»",
          "Meaning: \"We left the descendants of the Prophet Noah on the earth.\"",
          "From Shem came peoples including Iram, Arfakhshad and Lawid, from whom today's Arabs, the Children of Israel and other peoples come.",
          "From Japheth came nations including the Turks, the Romans, and Gog and Magog.",
          "Ham, as the genealogists write, fathered three sons:",
          "• Kush",
          "• Misr",
          "• And Berber",
          "And this is where we pick up the distant history of the forefathers and ancestors of the Somali."
        ],
        "so": [
          "Marka Taariikh laga hadlayo, weliba taariikh ummadeed, oo la damacsan yahay in la tixraaco asalkeeda, sooyaalkeeda iyo is raac-raaca waayeheeda, waxaa lagama maarmaan ah in muddo dheer dib loo noqdo.",
          "Haddii aan isu-taagno ka hadalka iyo faaqididda taariikhda sidaas u fogna, uma hayno, loomana heli karo marag iyo maqaal toonna, oo waxa laga reebay baaba iska yar.",
          "Balse aqoonta Eebbe aadanaha ku galladaystay waa mid baaxad weyn, oo taariikhdaas sidaas u fog waxaa laga bidhaansadaa culuum kala duwan oo, haba iska yaraatee, tooshka inoogu ifinaysaa wixii dhacay waayadaas fog.",
          "Culuumtaas noocyadooda iyo sida ay wax u daliiliyaan, fadhi kale ayaan ku lafa guri doonnaa..",
          "Haddase safar 10,000 oo sano ah ayaa ina sugayee, aan dhabbada cagta saarno.",
          "Maadaama tafaasiisha samannadan aan ka hadlayno iska urursan tahayna, macaanayn iyo dhanaanin midna isku hawli mahayo, oo warkeeda ku dheeraan mahayo.",
          "Sida diinta Islaamku inoo caddaysay, ayna wada aamminsan yihiin dhammaan dadka haysta diimaha samaawiga ah, sidoo kalena ay qeexeen xeeldheerayaahsa aqoonta durugsan u leh sinjiga dadka iyo tadawurka aadamiga jiilba jiil ka dhaxlay, waxaa la isku waafaqsan yahay in aadanaha oo dhammi ku abtirsado Nabi Aadam CS, oo uu ABUL-BASHAR yahay.",
          "Gadaashiisna shucuubta maanta ku nool daafaha dunida ay dhammaan kasoo farcameen saddexdii wiil ee Nabi Nuux CS:",
          "• Saam Nuux",
          "• Yaafith Nuux",
          "• Iyo Xaam Nuux",
          "Oo duufaantii reer Nuux lagu dhuftay, ee adduunka oo idil maanshaysay, waxaa taran uga haray oo warkeeda la hayo waa saddexdaas wiil wixii ka tarmay.",
          "Sida uu Rabbi ku xusay kitaabkiisa Qur’aanka, aayadda suuratu-Saafaat:",
          "«وَجَعَلْنَا ذُرِّيَّتَهُ هُمُ الْبَاقِينَ»",
          "Oo macneheedu yahay: “Durriyaddii Nabi Nuux ayaan dhulka u reebnay”.",
          "Saam waxaa ka farcamay qolooyin ay kamid ahaayeen Iram, Arfakhshad iyo Laawid, oo hadda carabta, reer banii Israa'iil iyo qolooyin kale ay ka joogaan.",
          "Yaafith asagana waxaa ka farcamay ummadaha ay ka mid yihiin: Turkida, Roomanka iyo Yaajuuj iyo Maajuuj.",
          "Xaam ayaa isaguna, sida ay qoraan culimada nasabku, dhalay saddex wiil oo kala ah:",
          "• Kuush",
          "• Misr",
          "• Iyo Berber",
          "Waana halkaan Meesha aan ka daba-qabanayno Taariikhda fog ee ab-awalladii iyo absaxankii Soomaalida."
        ]
      },
      {
        "heading": {
          "en": "Where did the children of Ham first live?",
          "so": "Halkee ayay reer Xaam markii hore degganaayeen?"
        },
        "en": [
          "Ten thousand years ago: where the children of Ham, known as the \"Hamites\", lived is the main point on which scholars disagree.",
          "Some ethnologists have stressed that the original home of the people of Ham was the Caucasus mountains, lying to the north-west between the Black Sea and the Caspian Sea of Persia, the country now called Iran.",
          "Or, coming further down, the land called \"Mesopotamia\" or \"Bilad al-Rafidayn\", the land between the two rivers of Iraq, the Tigris and the Euphrates.",
          "That view holds that the children of Ham, all three of them, because their numbers had grown, migrated and headed west with their livestock.",
          "In search of fresh pasture they crossed through Sinai, the narrow strip that connects Asia and Africa, through which the Suez Canal was cut a century and a half ago.",
          "And they settled in the Nile valley and the land now called Egypt.",
          "But some researchers hold that the origin of this family was Africa itself, particularly north-east Africa, the lands now called Sudan and Ethiopia, and that there was no migration of the people of Ham from Asia.",
          "The only group that crossed into Asia, they say, was the ancestors of the Semites, such as the Arabs and the Hebrews.",
          "Whatever the case, both views agree that the children of Ham spread out across the Nile valley and its banks."
        ],
        "so": [
          "Toban kun oo sano waa laga joogo, ilma Xaam oo loo yaqaan “Xamiitig” ama “Xamaatig”, meesha ay degganaayeen ayaa ah qodobka ugu weyn ee ay aqoonyahannadu isku khilaafeen.",
          "Isir-yaqaannada qaar, waxa ay hoosta ka xarriiqeen in reer xaam degelkoodii hore uu ahaa buuraleyda Kawkaasiya ee dhacda dhanka waqooyi-galbeed inta u dhexeysa Badda madow iyo Badda Kasbiyan ee Peershiya, dalka hadda loo yaqaan Iiraan.",
          "Amase hoos looga soo dagoo dhulka loo yaqaan “Mesopotamia” ama “Bilaadu-raafideyn” oo ah dhulka dhaca inta u dhaxaysa labada webi ee “Dajla” iyo “Furaat”ka Ciraaq.",
          "Aragtidaas ayaa sheegaysa in ilma Xaam, saddexdoodiiba, tarankii dadka oo batay aawadeed, ay usoo hayaameen afkana soo saareen dhanka galbeed, ayagoo wata duunyadooda.",
          "Si ay u helaan degmo cosob ah, ayay kasoo gudbeen deegaanka Siinaay, oo ah dhabbada yar ee isku xirta Aasiya iyo Afrika, ee qarni iyo badh kahor laga jeexay marinka Suweys.",
          "Waxa ayna degeen yaacdada webiga Niilka iyo dhulka hadda Masar loo yaqaan.",
          "Balse cilmi-baarayaasha qaar, ayaa qaba in asalka bahdaas uu ahaa Afrika lafteeda, gaar ahaan waqooyi-bari Afrika, dhulalka hadda loo yaqaan Suudaan iyo Itoobiya, isla markaana uusan jirin hayaan ay reer Xaam uga soo kicitameen Aasiya.",
          "qolada keliya ee Aasiya u tallaabtayna ay ahayd ab-awalladii Saamiyiinta, sida Carabta iyo Cibraaniyiinta.",
          "Si kastaba ha ahaatee, labada aragtiba waxa ay isku waafaqsan yihiin in ilma Xaam ay yaacdada webiga Niilka iyo hariirihiisa isku fidiyeen."
        ]
      },
      {
        "heading": {
          "en": "The great migration of Kush",
          "so": "Hayaankii weynaa ee reer Kuush"
        },
        "en": [
          "After some time, the people of Ham set out on the move again, but this time not all of them: Misr and his descendants stayed where they were, while the other two groups continued the migration from there.",
          "From Misr, who stayed in the land now called Egypt, descend the \"Copts\" or \"ancient Egyptians\", the nation that laid the foundations of the civilization of the Pharaohs and the wondrous buildings of the Pyramids.",
          "Berber and his descendants crossed on to western Africa and the great land west of Libya, where they live to this day, and are known as Berbers or Amazigh.",
          "The migration and settlement of these two groups does not concern us much, compared with the path taken by Kush and his descendants.",
          "Kush, whether called Kowshiin or Cushitic, set out for the south of the Nile, then found a way across the Nubian highlands, and settled along the Red Sea and the lands facing it, which were named the land of Kush.",
          "The name \"Kush\" was given by the ancient Egyptians to the land lying south of them, and there in later ages, about 2,500 years before the birth of the Prophet Jesus (peace be upon him), a wide-reaching kingdom was founded, known as the \"Kingdom of Kush\", whose capitals were Kerma, Napata and Meroe.",
          "This kingdom at one time even ruled Egypt itself.",
          "The migration of the people of Kush did not end there: the Kush community dispersed again, and during the migration, now and then a group stayed behind somewhere, and each group kept growing until it became a society of many clans.",
          "In the land where the people of Kush had lived, the group known as the \"Beja\" remained; it is still found in the old land on the border of Sudan and Eritrea, and they are called the \"Northern Cushites\".",
          "When the migration reached the Ethiopian highlands, the group called \"Agaw\" or \"Aqaw\", depending on how it is written, stayed there; they are called the \"Central Cushites\".",
          "This people now lives among the Habesha nation.",
          "Where the Habesha came from and where their roots lie, we will explain in another session, in the episode on Abyssinia, God willing.",
          "The remaining Cushites continued their migration until they reached the area of lakes Abaya and Turkana, where they split into two parts:",
          "One group went on south until it reached northern Tanzania, and was named the \"Southern Cushites\".",
          "The second group headed east and north-east into the Horn of Africa, and was named the \"Eastern Cushites\".",
          "From this group come the peoples: Oromo, Sidamo, Saho, Afar and Somali.",
          "The Saho-Afar moved further north, to the areas they live in today: northern Ethiopia, Djibouti and Eritrea.",
          "The Oromo, Sidamo and those related to them did not go far from their old home at the lakes.",
          "The Somali Cushites who migrated east spread out from the coast of the Gulf of Tajura to the north-east of the Indian Ocean."
        ],
        "so": [
          "Muddo keddib, reer Xaam mar kale ayay geeddi galeen, markaanse looma dhammayne, waxaa meeshooda ku nagaaday Misr iyo faraciisii, halka labadii qolo oo kalese ay halkaas kasii ambaqaadeen hayaankii.",
          "Misr oo ku haray dalka Masar hadda loo yaqaan, waxaa ka farcamay ama kasoo jeeda “Qibdiyiinta” ama “Masaaridii hore”, oo ah ummaddii dhidibbada u aastay ilbaxnimadii Faraacinada iyo dhismayaasha cajiibka ah ee Ahraamta.",
          "Berber iyo faraciisii waxa ay usii tallaabeen galbeedka Afrika iyo dhulweynaha Liibiya galbeedka ka xiga, halkaas oo ay illaa maanta ku dhaqan yihiin, waxaana loo yaqaan Barbar ama Amaaziigh.",
          "Labadaas qolo geeddigooda iyo nagaanshahooda wax badan innagama xirna, marka loo eego Kuush iyo faraciisa dhabbada ay qaadeen.",
          "Kuush, Kowshiin ama Kushitig midkii lagu magacaababa, waxa ay afka soo saareen koonfurta webiga Niilka, dabadeedna dhabbe ka heleen oogada buuraleyda Nuubiya, waxa ayna degeen deexda badda cas iyo oogada ka-jeedka ah ee loo baxshay dalkii Kush.",
          "Magaca “Kush” ayay masaaridii horey u bixiyeen dhulka koonfurta kaga beeggan, halkaasna waxaa waayadii danbe, qiyaastii 2,500 sano kahor dhalashadii Nabi Ciise CS, laga aasaasay boqortooyo sal-ballaaratay oo loo yaqaannay “Boqortooyadii Kuush”, oo caasimadaheedu ay kala ahaayeen Karma, Napata iyo Meroe.",
          "Boqortooyadaan oo mar xataa ka talisay Masar qudheeda.",
          "Geeddigii reer Kuush halkaas kuma ekaan, oo beesha reer Kuush dib ayay u kala hayaantay, intii ay geeddigaas ku jirtayna hadba koox ayaa meel ku haraysay, koox walbana waa ay sii tarmaysay illaa ay ka noqotay bulsho beelo badan ka kooban.",
          "Dhulkii ay reer Kuush degganaayeen waxaa ku haray qolada loo yaqaan “Beja”, welina ay ku sugan tahay dhulkii hore ee xuduudda Suudaan iyo Eretereeya, waxaana lagu magacaabaa “Kushitikada Waqooyi”.",
          "Markii hayaanku soo gaaray dhul-koraadka Xabashida, kooxda “Agaw ama Aqaw” hadba sidii loo dhigo, ayaa halkaas ku hartay, waxaana lagu magacaabaa “Kushitikada Dhexe”.",
          "Beeshan ayaa hadda dhex deggan qawmiyadda Xabashida.",
          "Meesha ay Xabashidu ka timid ee ay salka ku haysana, fadhi kale iyo xalqadda Abasiiniya ayaan ku faah-faahin doonnaa Idanka Rabbi.",
          "Kowshiintii soo hartay geeddigoodii ayay iska sii wateen, illaa ay kasoo gaareen goobta harooyinka Abaayo iyo Turkaana, markaasoo ay laba qayb u kala bexeen:",
          "Koox usii gudubtay dhanka koonfurta illaa ay ka gaareen waqooyiga Tanzania, waxaana loo bixiyay “Kushitikada Koonfureed”.",
          "Kooxda labaad ayaa ayaduna afka saartay dhanka Bari iyo Waqooyi Bari ee geeska Afrika, waxaana lagu magacaabay “Kushitikada Bari”.",
          "Kooxdan ayaa waxaa kasoo jeeda qolooyinka kala ah: Oromo, Sidamo, Saho, Cafar, iyo Soomaali.",
          "Saho-Cafar xagga waqooyiga ayay usii guureen iyo deegannada ay maanta deggan yihiin ee Waqooyiga Itoobiya, Jabuuti iyo Eretereeya.",
          "Oromo, Sidamo iyo kuwa la haybta ahina, kama ay fogaanin degelkoodii hore ee harooyinka.",
          "Kushitikadii Soomaalida ee dhanka bari usoo hayaantay waxa ay isku fidiyeen: Xeebta Khooriga Tajura illaa Waqooyi Bari Badweynta Hindiya."
        ]
      },
      {
        "heading": {
          "en": "Why did they move?",
          "so": "Maxaa hayaankaas keenay?"
        },
        "en": [
          "This long migration, which took many centuries, took place, as experts on peoples, cultures and geography estimate, thousands of years before the birth of the Prophet Jesus (peace be upon him).",
          "Climate scholars attribute this migration to a powerful climate change that took place in north-east Africa between 10,000 and 5,000 years before the birth of the Prophet Jesus (peace be upon him).",
          "They say that at that time the great Sahara of Africa was pasture land with lakes everywhere, while the land of the Horn of Africa was a place whose rivers and streams never ran dry and whose pools held standing water, full of fish and many kinds of water creatures.",
          "That easily caught fish and those flowing watering places drew people, causing the Kowshiin or Cushites to head south.",
          "The arrival of the Eastern Cushites on the northern and southern coasts of the Horn of Africa took place about 3,000 years before the birth of the Prophet Jesus (peace be upon him)."
        ],
        "so": [
          "Geeddigaan dheer oo qarniyo badan qaatay, waxa uu ku beegnaa, sida ay qiyaasaan aqoonyahannada isirka, dhaqammada iyo dhulbaarayaashuba, kumannaan sano ka hor dhalashadii Nabi Ciise CS.",
          "Culimada diraasaysa cimilada ayaa waxa ay u sababeeyeen in hayaankan uu dabada ka riixayay isbeddel cimilo oo xoog badan oo ka dhacay waqooyi-bari Afrika intii u dhaxaysay 10,000 oo sano illaa 5,000 oo sano kahor dhalashadii Nabi Ciise CS.",
          "Waxa ay sheegaan in waagaas Saxara-weynaha Afrika uu ahaa dhul daaqsimaad, leh harooyin meel walba waran, isla markaasna dhulka ku yaal geeska Afrika uu ahaa meel webiyadiisa iyo togaggiisu aysan biyahu ka gurin, balliyadana biyuhu ceegaagaan, waxaana ka buuxay kalluun iyo barri-biyoodyo kala jaad ah.",
          "Kalluunkaas sida sahlan lagu helayay iyo biya-galeennadaas durdurta leh ayaa dadkii soo jiitay, sababayna in Kowshiintu ama Kushitikadu koonfur afka soo saarto.",
          "Soo caga-dhigashadii Kushitikada Bari ee xeebaha waqooyi iyo koonfureed ee Geeska Afrika ayaa ku beegneed 3,000 oo sano kahor Dhalashadii Nabi Ciise CS."
        ]
      },
      {
        "heading": {
          "en": "Meanwhile in the world",
          "so": "Waxa adduunka kale ka socday"
        },
        "en": [
          "To understand that era and its story, let us glance at what was happening in the rest of the world.",
          "About 3,100 years before the Prophet Jesus (peace be upon him), power in Egypt was taken by the first dynasty of the great kingdom of the Pharaohs.",
          "In the same period, the Sumerians who lived in Bilad al-Rafidayn or \"Mesopotamia\" invented the first written script, which began as pictures carved into clay tablets and was later known as \"cuneiform\".",
          "Some historians write that, some time later, the people who had reached the coasts of the Horn of Africa met Akkadian sailors who came exploring the coasts of the Horn of Africa, especially the southern ones.",
          "It is recorded in the history of the Akkadians of Iraq that they named this Horn of Africa they visited with two words that go together: \"Magan & Meluhha\".",
          "These two words, close in Somali to \"Magan\" and \"Maylaha\", are taken by some researchers as evidence that 2,000 years before the birth of the Prophet Jesus (peace be upon him), people speaking Somali, or one of the dialects of Somali, lived on the Somali coasts.",
          "This view is a weak one: historians say there was no Akkadian sea voyage to the Horn of Africa, and that the places called Magan and Meluhha were what the Akkadians knew as Oman and India."
        ],
        "so": [
          "Si aan u fahanno waagaas iyo warkiisa, aan yara milicsanno waxa adduunka kale ka socday.",
          "Qiyaastii 3,100 sano kahor Nabi Ciise CS, ayaa maamulka Masar waxaa la wareegay qoyskii ugu horreeyay boqortooyadii filka weyneed ee Faraacinada.",
          "Isla muddadaas, reer Sumer oo degganaa dhulka Bilaadu-raafideyn ama “Mesapotomia” ayaa curiyay qoraalkii ugu horreeyay ee farguri ah, kaasoo ku bilawday sawiro lagu xardho looxyo dhoobo ah, markii danbena loo aqoonsaday qoraalkii “Mismaariyadda”.",
          "Taariikhyahannada qaar ayaa waxa ay qoraan in dadkii soo gaaray xeebaha geeska Afrika muddo keddib ay la kulmeen badmaaxiin reer Akkaad ah oo sahan ku yimid xeebaha geeska Afrika, gaar ahaan kuwa koonfureed.",
          "Waxaa taariikhda Akkaadiyiinta reer Ciraaq ku xusan in geeska Afrikadan ay tageen ay magac uga dhigeen laba erey oo wada socdo oo ah: “Magan&Meluhha”.",
          "Labadaan erey oo Afsoomaali ahaan usoo dhaw “Magan” iyo “Maylaha”, ayaa baarayaasha qaar marag uga dhigtaan in 2,000 oo sano kahor Dhalashadii Nabi Ciise CS ay xeebaha Soomaaliyeed ku noolaayeen dad ku hadla Af-soomaali ama lahjad kamid ah lahjadaha Afsoomaaliga.",
          "Aragtidan ayaa ah mid laga xoog badan yahay, oo reer Akkaad safar-badeed ay geeska Afrika ku yimaadeen in uusan jirin ayay taariikhyahannadu sheegaan, Magan&Meluhha Meesha la leeyahayna ay Cummaan iyo Hindiya u kala yaqaanneen reer Akkaad."
        ]
      },
      {
        "heading": {
          "en": "What the children of Ham still share",
          "so": "Waxa ay weli wadaagaan reer Xaam"
        },
        "en": [
          "Although the great community of the people of Ham dispersed over that long period, there are still features, customs and languages through which the common origin of these societies can be traced.",
          "Summing up what the people of Ham still share, as studies of language and culture emphasise, these include:",
          "Greek historians who lived in the second and first centuries before the birth of the Prophet Jesus (peace be upon him) left us writings about the livestock-herding people who lived on the coasts of Eritrea and northern Somalia, whom they called \"Troglodytes\".",
          "They described them as nomadic herders who fought over pasture, whose weapons were bow, arrow and spear, who wore skins, and whose food was meat and milk alone.",
          "They also said that they drank blood mixed with milk, and that when burying their dead they tied the knees and arms together.",
          "The same description was given by a Chinese writer who reported on the people living on the coasts of the Horn of Africa in the ninth century after the birth of the Prophet Jesus (peace be upon him), describing them as people who ate nothing but meat, drank blood mixed with milk, and wore skins and hides.",
          "The custom of drinking milk mixed with blood survives among some of the Cushitic peoples and their neighbours, such as the Oromo and the Maasai.",
          "And it is said that in southern Somalia some people still drink cattle blood as a medicine.",
          "Professor Cabdalla Cumar Mansuur compared the customs of the Somali and the Berbers of Morocco, who, although thousands of kilometres apart, share: livestock herding, settling disputes through customary judges, collective payment of blood-money, sheegad (client adoption), and the young camels, which the Berbers call \"arig\".",
          "Mansuur concluded that these customs, most of which predate Islam, show that the Somali and the Berbers are distant cousins.",
          "This connection is not limited to the people of Ham.",
          "The Maasai people of Kenya and Tanzania have a legend their elders tell, that long ago there were two children who were siblings: a girl called \"Soomaali\" and a boy who later became the grandfather of the Maasai.",
          "That story, and some numbers in the Nilotic languages that are very close to Somali numbers, such as \"boqol\" (hundred) and \"konton\" (fifty), show an ancient connection between the forefathers of the Somali and some of the peoples they lived beside.",
          "When we look at the heritage of traditional dances, we find that the dances of the people of Ham are built on rhythm, clapping and chanting (jaan, sacab and jiib), while for some other peoples leaping is at the centre of their traditional dances.",
          "The most important evidence for the deep connection between these societies is language.",
          "Somali belongs to the great \"Afro-Asiatic\" language family, which includes Arabic, Hebrew, Amharic, Berber, Hausa, and the language of the ancient Egyptians.",
          "Linguists also group together the Cushitic languages spoken in: north-eastern Sudan, parts of Eritrea, most of Ethiopia, Djibouti, Somalia, north-eastern Kenya, and northern Tanzania.",
          "This shows that just as these societies share a language, their origin too goes back to one root from which they descend.",
          "It is worth pointing out here that the name \"Cushitic\", given to the language family we have just described, is not the same as, and does not mean the same thing as, the name \"Kush\", the son of Ham son of Noah (peace be upon him).",
          "For the \"Cushitic\" language family includes languages whose speakers are not of the people of Kush, and there are also languages outside it whose speakers are of the people of Kush.",
          "How languages are grouped into families and how they relate to each other is the subject of the 3rd session of this series, God willing.",
          "Another interesting point is that the name \"Kush\", the son of Ham from whom the Cushitic societies, including the Somali, descend, means the excessive heat that darkens people.",
          "And Somali has words close to that name in both sound and meaning.",
          "Somalis use the name \"Kooshin\", usually given to very dark children or to lively, hot-tempered children.",
          "There is also the word \"Kushad\", which is used for heat, anger and rage.",
          "Although it is not certain that these words are truly related to the ancient name, it is still a resemblance worth mentioning."
        ],
        "so": [
          "Bulsha-weynta reer Xaam ayadoo muddadaas fog kala hayaantay haddana waxaa jira astaamo, dhaqammo iyo afaf loo tixraaci karo asal-wadaagga bulshooyinkaas.",
          "Annaga oo soo xoorinayna waxyaabaha ay weli wadaagaan reer Xaam, sida ay hoosta ka xarriiqayaan daraasaatka afafka iyo dhaqanka, waxaa kamid ah:",
          "Taariikhyahannadii Giriigga ee noolaa qarniyadii labaad iyo kowaad kahor dhalashadii Nabi Ciise CS, ayaa inoo reebay qoraallo ay ka sameeyeen dadka xoolo-dhaqatada ah ee ku noolaa xeebaha Eretereeya iyo waqooyiga Soomaaliya, kuwaas oo ay ugu yeeri jireen “Trogodytes”.",
          "Waxa ay ku tilmaameen in ay ahaayeen reer-guuraa xoolo-dhaqato ah, daaqsinta isku dagaala, hubkooduna ahaa qaanso fallaar iyo waran, ayna xirtaan maqaar, cuntadooduna ahayd hilib iyo caano oo qudha.",
          "Waxa kale oo ay sheegeen in ay cabbaan dhiig caano lagu barxay, maydkana ay jilbaha iyo gacmaha iskugu xiraan marka ay aasayaan.",
          "Waxaa isla tilmaamtaas oo kale bixiyay qoraa shiinays ah oo ka warbixiyay dadkii degganaa xeebaha geeska Afrika qarnigii sagaalaad kaddib dhalashadii Nabi Ciise CS, asagoo ku tilmaamay dad aan cunin wax aan hilib ahayn, cabbaanna dhiig caano lagu barxay, xirtaanna maqaarka iyo haragga.",
          "Dhaqanka dhiigga caanaha lagu barxo waxa uu ku danbeeyaa qaybo kamid ah qawmiyadaha Kushitikada iyo deriskooda sida Oromada iyo Masaayda.",
          "Waxaana la sheegaa in koonfurta Soomaaliya ay weli dad daawo ahaan u cabbaan dhiigga lo'da.",
          "Barafasoor Cabdalla Cumar Mansuur waxa uu isbarbar dhigay dhaqammada Soomaalida iyo Barbarka dalka Morooko, oo inkastoo masaafo kumannaan kilomitir ah u dhaxayso, haddana ay ka siman yihiin: xoolo-dhaqashada, gar-goynta xeer-beegtida, mag-bixinta wadareedka ah, sheegadka, iyo yaradka oo Barbarku ugu yeeraan “arig”.",
          "Mansuur waxa uu ku gabagabeeyay in dhaqammadaas, oo intooda badani ka horreeyeen Islaamka, ay muujinayaan in Soomaalida iyo Barbarku ay yihiin ilma-adeer fog.",
          "Xiriirkaasi kuma koobna reer Xaam oo keliya.",
          "Qawmiyadda Masaayda ee Kenya iyo Tanzania waxa ay leedahay sheeko-xariir odayaashoodu ka sheekeeyaan, oo sheegaysa in waagii hore ay jireen laba caruur oo walaalo ah: gabar la oran jiray “Soomaali” iyo wiil noqday markii danbe awowgii Masaayda.",
          "Sheekadaas, iyo tirooyinka qaar ee afafka Niilootigga ah oo aad ugu dhow tirada Af-Soomaaliga, sida “boqol” iyo “konton”, ayaa muujinaya xiriir qadiimi ah oo ka dhexeeyay ab-awalladii Soomaalida iyo qawmiyadaha qaar ay la derisoobeen.",
          "Marka aan eegno hiddaha ciyaara-dhaqameedka, waxaa inoo soo baxaysa in reer Xaam ciyaarahoodu ay iska saaran yihiin: Jaan, Sacab iyo Jiib, halka qawmiyadaha qaar ay ciyaaro-dhaqameedkoodu niikadu udub-dhexaad u tahay.",
          "Arrinka ugu muhiimsan ee loo daliilsado xiriirka qotada dheer ee bulshooyinkaan ayaa ah afka.",
          "Af-Soomaaligu waxa uu ka mid yahay bah-weynta afafka ee “Afro-Aasiyaatigga”, oo ay ku jiraan Carabiga, Cibriga, Amxaariga, Barbarka, Hawsada, iyo afkii Masaaridii hore.",
          "Af-yaqaannaduna waxa ay isku bah ka dhigaan afafka Kushitigga ah ee lagaga hadlo waddamada: Suudaan dhankeeda waqooyi bari, Eretereeya qaybo kamid ah, Itoobiya badankeeda, Jabuuti, Soomaaliya, Waqooyi-bari Kenya, iyo Tanzania Waqooyigeeda.",
          "Tani waxa ay daliilinaysaa in bulshooyinkaas sida ay af-wadaagga u yihiin, uu isirkooda shishana hal tagoog uga kasoo farcamay.",
          "Halkan waxaa baraarujin mudan, in magaca “Cushitic” ee loogu wanqalay afafka la isku beheeyay ee aan hadda soo sheegnay, uusan la mid ahayn, lana macna ahayn magaca “Kush” ee wiilkii Xaam Bin Nuux CS.",
          "Oo afafka bahda “Cushitikada” waxaa ku jira afaf dadka ku hadlaa aysan reer Kush ahayn, sidoo kalena waxaa dibadda ka ah afaf dadka ku hadlaa ay reer Kush yihiin.",
          "Sida loo beheeyo afafka iyo qaabadda ay isku raac-raacaan, fadhiga 3aad ee Taxanahan ayaa u madlan, haddii Eebbe weyne inoo oggolaado.",
          "Arrinka kale ee xiisaha leh ayaa ah in magaca “Kuush” oo ah wiilkii Xaam ee ay kasoo farcameen bulshooyinka Kushitikada, Soomaaliduna kamid tahay, uu macnihiisu yahay kuleylka saa’idka ah ee dadka madoobeeya.",
          "Af-Soomaaliguna leeyahay ereyo dhawaq iyo macnahaanba u dhow magacaas.",
          "Soomaalidu waxa ay la baxdaa magaca “Kooshin” oo aalaaba loo baxsho caruurta madawga badan ama caruurta kul-kulul.",
          "Waxaa kaloo jira ereyga “Kushad” oo asna loo adeegsado kul, caro iyo xanaaqa.",
          "Inkasta oo aan la hubin in ereyadaasi ay xiriir dhab ah la leeyihiin magaca qadiimiga ah, haddana waa isu-ekaansho xusid mudan."
        ]
      },
      {
        "heading": {
          "en": "Next: the land of Punt",
          "so": "Fadhiga xiga: dalkii Punt"
        },
        "en": [
          "So, without going further into the debates on origin and languages, and keeping to the historical series of the nation that lived in the Horn of Africa and was later named Somali, we have reached the point where a group of the Eastern Cushites came to the Horn of Africa, especially its northern and north-eastern coasts.",
          "When the migration reached that place and the journey ended there, history tells us that the nation that came there went on to build a form of government that grew out of those lands.",
          "That government and that land, which the ancient Egyptians called \"the Land of the Gods\" (Ta-Netjer), became one that history mentions in many pages, leaving a detailed account.",
          "It is the government and the land of Punt.",
          "In our next session we will discuss that government: its period, the places it ruled, the traces it left, and what the civilizations of the world at that time said about it."
        ],
        "so": [
          "Haddaba annaga oo aannaan gudaha usii galayn doodaha isirka iyo afafka, kuna gaabsanayna taxanaha taariikheed ee ummaddii geeska afrika ku nooleed ee mar danbe loo baxshay Soomaalida, waxa aan soo gaarnay ayada oo geeska afrika gaar ahaan xeebaha waqooyi iyo waqooyi bari ay yimaadeen qolo kamid ah kushitikadii bari.",
          "Markuu hayaanku degelkaas soo gaaray, geeddigiina halkaas lagu furay, Waxa ay taariikhdu inoo sheegaysaa in ummaddii halkaas timid ay u dhaqaaqday in ay yagleelaan hab-maamul ka curtay deegaannadaas.",
          "Maamulkaas iyo dalkaas, oo Masaaridii hore ay u bixiyeen “Dhulkii Ilaahyada” (Ta-Netjer), ayaa waxa uu noqday mid taariikhda bogag badan looga xusay, warbixin faah-faahsanna laga reebay.",
          "Waa maamulkii iyo dalkii Punt.",
          "Fadhigeenna xiga ayaana ku qaada-dhigaynaa maamulkaas, muddadiisii, meelihii uu ka talinayay, wixii raad ah oo uu ka tegay iyo waxay ka dheheen xadaaradihii adduunka ee waagaas jirey."
        ]
      },
      {
        "heading": {
          "en": "Closing",
          "so": "Gebagabo"
        },
        "en": [
          "In closing..",
          "The poet Cabdulqaadir Xirsi Yamyam, summing up the history we have been telling, has these lines:",
          "We are a people of great age",
          "An ancient root, long in being",
          "Noah and those after him",
          "Those who left behind the flood",
          "The sea that split the cliffs",
          "The land that once stretched whole",
          "Where it broke apart",
          "Be it at Gardafui",
          "We are still in that same place",
          "From the white and the red alike",
          "We stand apart",
          "In our general appearance",
          "And in customs that can mingle",
          "We stand close to the Afar",
          "The Oromo and the Galla",
          "We share as kin",
          "This is where today's session ends.",
          "And remember that much of the account still remains, and the wells are still not dug.",
          "So, do not stop at \"woe to those who pray\" (فويل للمصلّين): wait for me for the rest of the story.",
          "If you are interested in this series, join the channel by pressing \"Subscribe\", and click the bell icon so that every session reaches you when it is broadcast.",
          "Sessions of this series are released every Friday at 7:00 in the evening, East Africa time.",
          "The list of references and sources for this session can be found in the lower part of the video.",
          "Until then, goodbye, until the next session."
        ],
        "so": [
          "Gebagabadii..",
          "Abwaan C/qaadir Xirsi Yamyam oo inoo soo koobaya taariikhdii aan kasoo sheekaynay ayaa waxa uu meerisyo ku leeyahay:",
          "Dadka waw gu’weynnahay",
          "Guun soo jiraan nahay",
          "Nuux iyo gadaashii",
          "Duufaan-ka-guurkii",
          "Baddii jiidhay gabiyada",
          "Dhulkii giigsanaan jirey",
          "Meeshuu ka kala go’ay",
          "Gardafuu ha noqotee",
          "Weli goobtii baan naal",
          "Caddaankiyo gaduudkaba",
          "Waan ku kala guracannahay",
          "Muuqaalka guud iyo",
          "Dhaqamadda is geli kara",
          "Canfartaan gudboon nahay",
          "Oromada iyo Gaallaha",
          "Ayaan gacal wadaagnaa",
          "Halkaas ayuu inoo joogayaa fadhiga maanta",
          "Waxaadna xasuusnaataa in warbixin badani inoo harsan tahay, faanoolena weli fari ka qodnayn.",
          "Haddaba, فويل للمصلّين hala galbane, iga dhawr warka inta baaqiga ah.",
          "Haddii aad xiisaynayso taxanahan, ku biir kanaalka adigoo riixaya “Subscribe”, dhagsiina astaanta dawanka si uu kuu soo gaadho fadhi walba marka la baahiyo.",
          "Fadhiyada taxanahan waxa ay soo baxaan Jimce walba, saacaddu marka ay tahay 7:00 fiidnimo saacadda bariga afrika.",
          "Liiska tixraacyada iyo ilaha xogta fadhigan waxa aad ka helaysaa qaybta hoose ee muuqaalka.",
          "Sidaas iyo Nabadgelyo, illaa fadhiga xiga."
        ]
      }
    ],
    sources: ["Soomaaliya iyo Taariikhdeedii Hore", "Taariikhda Soomaaliya", "Sooyaalka Soomaaliya"]
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
    // The FULL script of the episode ("Xalqadda 2aad"): Somali word for word, with an English translation.
    article: [
      {
        "heading": {
          "en": "Opening",
          "so": "Furitaan"
        },
        "en": [
          "About 3,500 years ago, five large ships landed on one of the coasts of Somalia.",
          "Each of these five ships was rowed by thirty oarsmen, and on board were soldiers, sailors, scribes, labourers and artists.",
          "These ships were sent by a woman who ruled Egypt, named Hatshepsut, and their destination was a land they called \"Ta-Netjer\", the Land of the Gods.",
          "In this session we examine that land, the accounts and traces left of it, and in general what the ancient civilizations said about Somalia.",
          "Peace be upon you, and the mercy of God and His blessings.",
          "Welcome back, and good to be together again.",
          "We had reached the point where a group of the Eastern Cushites arrived in the north and north-east of the Somali land, and there built a government that entered history under the name \"Punt\".",
          "Now, there is no place in the world where people live or have lived that has no history.",
          "The civilization of some regions, and the cultures that grew up in them, allowed them to keep their records so that they were not lost, while some nations, for one reason or another, did not leave us their history.",
          "But those earlier peoples, adding one thing to another, or driven by their own interests, recorded some pages of the history of the nations they dealt with.",
          "In the Somali land, the nations that followed one another there left no history of their own; but the Somali peninsula was well known to foreign travellers, because of where it lies.",
          "For that reason, the civilizations that passed through the world one after another, the Pharaohs and the Sumerians, the Persians and the Greeks, the Romans and the Arabs, as well as the Indians and the Chinese, none of them was silent or absent in giving information about this land and the people who lived in it in their times.",
          "We will open some pages of the records of those civilizations, to search through them and follow the trail of whatever account they give of this land and its past.",
          "My name is Mohamed Abdulkadir Mohamed.",
          "And this is MIYIR, the platform for raising awareness and nurturing understanding.",
          "Come closer."
        ],
        "so": [
          "Qiyaastii 3,500 oo sano waa laga joogo, shan xaryan oo waaweyn ayaa soo caga dhigtay mid kamid ah xeebaha Soomaaliya.",
          "Doon kasta oo shantaas xaryan ah waxaa seebab ku waday soddon seebaale, waxaana la socday askar, badmaaxyo, qorayaal, muruqmaallo, iyo farshaxanyaqaanno.",
          "Doomahaan ayaa waxaa soo diray haweeney masar u talinaysay oo lagu magacaabo Hatshepsut, waxa uuna qasadkoodu ahaa dhul ay ugu yeeri jireen “To-Netjer” ama dhulkii Ilaahyada.",
          "Fadhigaan waxa aan ku faaqidaynaa dhulkaas iyo wixii khabar iyo raad laga reebay, iyo guud ahaan wixii ay xadaaradihii hore Soomaaliya ka yidhaahdeen.",
          "سلام الله عليكم ورحمته وبركاته",
          "Mar kale iyo isku soo laabasho wanaagsan.",
          "Waxa ay inoo joogtay ayada oo qolo kamid ah kushitikadii Bari ay soo gaareen waqooyi iyo waqooyi bari geyiga soomaaliya, halkaasna ay ka yagleeleen maamul magac ahaan taariikhda ku galay “Punt”.",
          "Haddaba, Adduunka ma jiro meel dad deggan yahay ama lasoo degay oo taariikh la'aan ah.",
          "Ilbaxnimada deegaannada qaarkood iyo xadaarado ka hanaqaaday awgood, ayaa u oggolaaday in ay kaydiyaan xogtooda oo aysan qaayibin, halka unmadaha qaarna, wax sababayba, aysan taariikhdooda inoo reebin.",
          "Balse qolooyinkaas hore, ayaa toodii tu kale ku daroo, dan ku riixaysayba, waxa ay wax ka keydiyeen ummadihii ay la macaamileen taariikhdooda bogag kamid ah.",
          "Geyiga Soomaaliyeedna, ummadihii iskaga danbeeyay ee kusoo dhaqmay, taariikh ay ayagu reebeen majirto, balse jasiirad-u-yaasha Soomaaliyeed ayaan ku cusbayn dalmareennada shisheeye, barta ay dhacdo aawadeed.",
          "Sidaas awgeed, Xadaaradihii dunida soo maray ee kala danbeeyay, Faraacinadii iyo Summeriyiintii, Faarisiyiintii iyo Giriiggii, Roomaankii iyo Carabtii, iyo sidoo kale Hindida iyo Shiinaha, intooduba kama aamusin oo kama maqnayn xog-bixinta dhulkan iyo dadkii ku dhaqnaa waayadoodii.",
          "Waxaana soo kala furaynaa bogag kamid ah xogta xadaaradahaas, si aan uga dhex baarno ugana raad-raacno wuxuun warbixin ah oo ku saabsan dhulkan iyo sooyaalkiisa.",
          "Magacaygu waa Maxamed Cabdulqaadir Maxamed",
          "Halkaanna waa madasha MIYIR ee kobcinta wacyiga iyo ababinta garaadka.",
          "Horey usoo dhawaada."
        ]
      },
      {
        "heading": {
          "en": "Egypt and the incense of Punt",
          "so": "Masar iyo xabkaha udgoon ee Punt"
        },
        "en": [
          "About 3,000 years before the Common Era, the Egyptians had relations with the kingdom of Kush, which lay in the land of Nubia, south of Egypt and north of Sudan, and which the Egyptians called \"Kash\" or \"Ta-Seti\", and with the kingdom of the Horn of Africa, Punt.",
          "The Egyptians had trade and exchange with those lands, buying leopard skins, resins, ostrich feathers, and aromatic trees, which at that time were very highly valued.",
          "From the land of Punt in particular they obtained fragrant resins such as frankincense and myrrh, which they made into incense burned in worship, perfume, medicine, and a preparation for anointing the dead so that they would not decay: what is known as the mummy.",
          "The ancient Egyptians' love of these fragrant resins, and their constant need for them, strengthened their relations with the Land of Punt, and the Egyptian people came to see the land where these resins grew as the Land of the Gods (Ta-Netjer).",
          "Where this land that the Egyptians named lay has been disputed, since Egyptian voyages reached many lands, and since frankincense and myrrh are shared by several countries: Somalia, Yemen and Oman.",
          "But at the end of the 19th century it became established, and many of the scholars who study the history of ancient Egypt accepted, that the land of Punt means the Somali region, especially the land lying along the coast between the Gulf of Tajura and Ras Casayr (Cape Gardafui) in the north-east, on the Indian Ocean.",
          "Dr. Shariif Saalax said the following about this, in words quoted by Prof. Cabdalla Mansuur:",
          "\"There is often argument about where Punt lay, since frankincense grows in Yemen, Oman and Somalia. But the ancient Egyptians chose the best frankincense. And this kind is found only in north-eastern Somalia: it is maydi, and it does not grow in either Oman or Yemen.\""
        ],
        "so": [
          "Qiyaastii 3,000 oo sano miilaadiga kahor, masaaridu waxa ay xiriir la lahayd boqortooyadii Kush oo ku taallay dhulka Nuubiya ee koonfurta Masar iyo waqooyiga Suudaan, Masaariduna ugu yeeri jirtay 'Kash' ama 'Ta-Seti” iyo boqortooyadii geeska Afrika ee Punt.",
          "Masaaridu waxa ay dalalkaas la lahayd xiriir ganacsi iyo beecmushtar, waxa ayna ka iibsan jirtay hargaha shabeelka, xabkaha, baalasha goroyada, geedaha uunsiga oo waagaa siinad aad u sarreysa lahaa.",
          "Waxa ay si gaar ah carriga Punt uga heli jireen xabkaha udgoon sida beeyada iyo malmalka, oo ay ka dhigan jireen foox diin ahaan loo shito, barafuun, dawo iyo wax lagu dhayo maydka si uusan u qurmin, waa waxa loo yaqaan (mummy)-da.",
          "Jaceelka iyo baahida joogtada ah ee Masaaridii hore u qabtay xabagahaas udgoon wuxuu xoojiyay xiriirka Masaaridii hore la lahayd Dhulka Punt, waxayna dadka Masaarida u arkayeen in dhulka xabagahaas ka baxo uu yahay dhulkii ilaahyada (To-Neter).",
          "Dhulkan ay masaaridu magacaas u bixisay ayaa la isku khilaafay goobta uu dhaco, ayada oo safarrada masaaridu ay dhulal badan gaareen, sidoo kalena beeyada iyo malmalka oo dhawr dal ay ka siman yihiin, waa: Soomaaliya, Yemen iyo Cummaane.",
          "Balse, Dhammaadkii qarniga 19aad ee Miilaadiyada ayaa la ogaaday, oo in badanoo kamid ah culimada darasta taariikhda Masaaridii hore ay qaateen in dalka Punt loola jeedo degaanka Soomaaliyeed, gaar ahaan dhulka dhaca deexda u dhaxaysa khooriga Tajura tan iyo Raas-casayr ee Woqooyi Bari Badweynta Hindaya.",
          "Dr. Shariif Saalax ayaa arrintan waxa uu ka yiri, hadalkan soo socda oo uu Prof. Cabdalla Mansuur kasoo guuriyay:",
          "Marar badan waxaa lagu murmaa meesha ay ku tiil Punt, mar haddii luubaantu ay ka baxdo Yaman, Cummaan iyo Soomaaliya. Laakiin Faleenka ugu wanaagsan ayay dooran jireen Masaaridii Hore. Noocaanna waxaa, keli ah, laga helaa Woqooyi-Bari Soomaaliya, waana maydida, kamana baxdo Cummaan iyo Yaman toona."
        ]
      },
      {
        "heading": {
          "en": "What does the name \"Punt\" mean?",
          "so": "Maxay ka dhigan tahay magaca \"Punt\"?"
        },
        "en": [
          "The other question needing an answer is why the Egyptians gave this land the name \"Punt\", and what the word means.",
          "Since it was the ancient Egyptians who gave this name, the meaning of the word must be sought in the history and the language of the ancient Egyptians, as experts in the language and history of ancient Egypt have done.",
          "Muller, one of the scholars who studied the language of ancient Egypt closely, said that the ancient Egyptian script consisted of consonants only and had no vowels, and for that reason the name Punt was written \"Pwnt\".",
          "Muller's view is shared by Prof. Cabdalla Mansuur, one of the Somali scholars of linguistics and an expert in the Cushitic languages.",
          "Prof. Cabdalla also said that the ancient Egyptians did not pronounce the letter \"t\" when it came after one of the letters whose sound comes through the nose, such as \"n\"; and also that when the letter \"w\" is used as a vowel, it comes out as \"oo\".",
          "The most valuable things the ancient Egyptians obtained from the land of Punt were the aromatic resins, which were indispensable for burning as incense in their places of worship, their tombs and other important occasions.",
          "Because of that importance, they may have named the land \"Punt\", which could mean \"the land of incense\" or \"of fragrance\".",
          "But some scholars hold that the name Punt is \"Boon\", reflecting the people and the way of life the ancient Egyptians saw in the Horn of Africa.",
          "The word \"Boon\" is a name by which Somali hunters were known, and there are still people who carry that name; in early times they lived across the whole country, and historically it is believed that the first of the people of Ham to reach the Horn of Africa were hunters.",
          "Commenting on this view, Prof. Cabdalla concluded: \"Although there is nothing that clearly proves that the name Punt is related to the name Boon, linguistically it is possible that they share an origin.\"",
          "Some people explain that since the Pharaohs claimed to be gods, as when the Pharaoh of the Prophet Moses (peace be upon him) said \"I am your Lord, the Most High\" (أنا ربكم الأعلى), their earliest origins must have come from the land of Punt, and that was why they called it \"the Land of the Gods\".",
          "This view has no evidence to support it, and that alone is not enough.",
          "There is also another view, holding that the word \"Punt\" means \"Bun\", the berries of the coffee tree, which when dried and ground become the coffee people drink.",
          "But this claim has no support, neither linguistic nor archaeological evidence, and it is known that the history of coffee begins in the 15th century of the Common Era.",
          "We have spent some time on this linguistic inquiry; passing on from it, let us return to the historical account whose path we were following."
        ],
        "so": [
          "Su’aasha kale ee jawaabta u baahan ayaa ah sababta ay masaaridu ugu bixisay dhulkan “Punt” iyo macnaha ereygaan.",
          "Maadaama ay masaaridii hore ay ahayd qolada bixisay magacan, waa in laga dhex raadiyaa macnaha ereygan taariikhdii masaaridii hore iyo afkoodii sida ay sameeyeen dadka ku xeeldheer afka iyo taariikhda masaaridii hore.",
          "Muller oo kamid ah culimada sida fiican u diraasaysay afka masaaridii hore ayaa sheegay in farta masaaridii hore ay ka kooban tahay Shibanayaal (Consonants) kaliya oo aysan lahayn shaqallo (Vowels), sidaas awgeedna uu magaca Punt uu u qoran yahay “Pwnt”.",
          "Aragtidan waxaa Muller la qaba prof. Cabdalla Mansur oo kamid ah culimada Soomaaliyeed ee cilmiga afafka, kuna xeeldheer afafka kooshiinta.",
          "Prof. Cabdalla wuxuu kaloo sheegay in masaaridii hore aysan ku dhawaaqi jirin xarafka “t”, markuu ka hormaro xaraf kamid ah xarfaha dhawaaqoodu sanqada ka yimaado sida “n”, sidoo kale in haddii xarafka “w” loo isticmaalo shaqal ahaan uu soo baxayo “oo”.",
          "Waxyaabaha ugu qiimaha badan ee ay masaaridii hore ka heshay dalka Punt waa xabkaha udugga oo lagama maarmaanka u ahaa in lagu fooxiyo: goobaha ay ku cibaadaystaan, qubuuraha iyo munaasabadaha kale ee muhiimka ah.",
          "Muhiimaddaas darteed ayaa dhici karta in dalka Punt ay ugu magacaabeen “Punt” oo macna ahaan noqon kara “Dhulkii udugga ama udgoonka”.",
          "Aqoonyahannadda qaar ayaase qaba in magaca Punt uu yahay “Boon” ayna ka tarjumayso dadka iyo dhaqanka ay masaaridii hore ku aragtay Geeska Afrika.",
          "Ereyga “Boon” ayaa ah magac loo yiqiin Soomaalida ugaarsatada ah, welina ay jiraan dad magacaas wata, ayaa waqtigii hore waxa ay degganaayeen dalka oo idil, ayadoo taariikh ahaan la aamminsan yahay in Geeska Afrika ay ugu soo horreeyeen ugaarsatada reer Xaam.",
          "Prof. Cabdalla oo faallaynayay aragtidan ayaa ku gabagabeeyay: “Inkastoo aan la haynin wax si cad u caddaynaya in magaca Punt xiriir la leeyahay magaca Boon, haddana af ahaan waa suurtaggal in ay isku asal yihiin”.",
          "Dad ayaa u fasirta in maadaama faraacinadu ay isku sheegi jireen Ilaahnimo, oo waatii fircoonkii Nabi Muse CS uu lahaa “أنا ربكم الأعلى”, in asalkooda hore ay ka yimaadeen dalka Punt, sidaas awgeedna ay ugu yeereen “Dalkii Ilaahyada”.",
          "Aragtidan ayaanan haysan wax cuskinaya oo caddayn ah, intaas oo keliyana kuma filna.",
          "Waxaa kaloo jirta aragti kale oo qabta in ereyga “Punt” uu la macna yahay “Bun” oo ah miraha geedka quddiga la yiraahdo, oo marka la engejiyo, la daqiijiyo laga dhigo qaxwada dadka ay cabbaan.",
          "Sheegashadan ayaanse haysan wax cuskiya oo caddayn afeed iyo mid degel-baariseed ah toonna, ayadoo la ogsoon yahayna in taariikhda bunku ay kasoo bilaabatay qarnigii 15aad ee miilaadiga.",
          "Cabbaar ayaan ku dheeraannay baaristan afeed, intaas annagoo uga gudbayna, aan dib ugu noqonno tixiddii taariikheed ee aan dawgeeda haynay."
        ]
      },
      {
        "heading": {
          "en": "Trade between Egypt and Punt",
          "so": "Ganacsigii Masar iyo Punt"
        },
        "en": [
          "The trade relationship between ancient Egypt and the land of Punt is estimated to have begun 3,000 years BCE, coinciding with the start of the first dynasty of the vast civilization of the Pharaohs.",
          "At that time the Egyptians began to take an interest in the fragrant resin that comes from the aromatic trees growing in the Horn of Africa.",
          "The aromatic trees that grow in Somalia are many, and most of them are found in northern Somalia; among them are:",
          "the yagcar, the moxor and the hadi.",
          "The resin of the yagcar is called maydi, and the resin of the moxor is called beeyo (frankincense).",
          "From the First to the Fourth Dynasty, the Egyptians did not seek maydi, frankincense and hadi from the Horn of Africa themselves: those goods were brought to Egypt by the people of Punt themselves.",
          "But in the time of the Fifth Dynasty, about 2,450 years before the birth of the Prophet Jesus (peace be upon him), the Egyptians began to seek maydi, frankincense and hadi directly themselves, travelling by sea to the Horn of Africa.",
          "This was the time when Egyptian sailors became skilled enough to build ships that could make long voyages, and their knowledge of the sea and of the Horn of Africa grew.",
          "King Sahure was the king who sent the first recorded sea voyage to the Land of Punt, to bring back aromatic resin and things used for anointing and healing, such as myrrh.",
          "It is also recorded that in the time this dynasty held power in Egypt, the cultural and economic relations between the Egyptians and the people of Punt became very good.",
          "The Sixth Dynasty of Egypt continued the relationship between Punt and Egypt, and increased the sea voyages going to Punt.",
          "The Egyptians produced a new kind of oar for driving their ships, and this strengthened the quality and the volume of Egypt's trade with the land of Punt.",
          "King Mentuhotep III, ruler of the Eleventh Dynasty, sent his chief treasurer Henenu to Koseir on the Red Sea to build a ship or ships to be sent to the Land of Punt, and it is said that those voyages brought back maydi, frankincense and many gifts.",
          "Relations between Egypt and Punt declined after the \"Hyksos\" forces seized Lower Egypt, where they ruled for nearly 100 years.",
          "At the start of the 18th Dynasty of the Pharaohs, which ruled in the 16th century BCE, relations between Egypt and Punt returned and grew strong."
        ],
        "so": [
          "Xiriirka ganacsi ee dhex yiil Masaaridii hore iyo dalka Punt, ayaa lagu qiyaasaa inuu billaabmay 3,000 oo sano M.k.h, oo ku beegan bilawgii boqortooyadii koowaad ee ilbaxnimadii ballaarneedee faraaciinta.",
          "Waqtigaas ayay masaaridu bilaabeen in ay xiiseeyaan xabagta udgoon ee ka timaadda geedaha xijiga ee ka baxa Geeska Afrika.",
          "Geedaha xijiga ah ee ka baxa Soomaaliya way badan yihiin, waxaana badankood laga helaa waqooyiga Soomaaliya, waxaana kamid ah:",
          "Yagcarta, moxorka iyo hadiga.",
          "Xabagta yagcarta waxaa la yiraahdaa Maydi, Xabagta Moxorkana waxaa la yiraahdaa Beeyo.",
          "Boqortooyinkii Kowaad illaa tii Afraad, Masaaridu kama soo doonan jirin Geeska Afrika maydiga, beeyada iyo hadiga ee badeecadahaas waxaa Masar keeni jiray dadka Punt naftooda.",
          "Waqtigii ay talinaysay Boqortooyadii Shanaad qiyaastii 2,450 sano ka hor dhalashadii Nabi Ciise CS, ayayse Masaaridu bilaabeen inay si toos ah iyagu u doontaan maydiga, beeyada iyo hadiga, iyagoo badda raacayana safar u aadeen Geeska Afrika.",
          "Waqtigan ayaa ku beegnaa goortii badmaaxiinta Masaaridu u bislaadeen in ay samaystaan doomo safar dheer geli kara, aqoontooda badda iyo deegaanka Geeska Afrikana ay horumartay.",
          "Boqor Sahure ayaa ahaa boqorkii safar-badeedkii koowaad ee la diiwaangeliyay u diray Dhulka Punt si loogu keeno xabagta udugta iyo waxyaalaha laysku dhayo ama daaweeyo sida malmalka.",
          "Waxaa kaloo la hayaa in waqtigii boqortooyadan taliska Masar ay haysay uu aad u wanaagsanaaday xiriirka dhaqan-dhaqaale ee ka dhexeeyay masaarida iyo dadkii Punt.",
          "Boqortooyadii Lixaad ee masaarida waxa ay sii waday xiriirkii Punt iyo Masar ka dhexeeyay, waxa ayna sii badisay safaradii badda ee tagayay Punt.",
          "Waxa ay masaaridu soo saareen nooc cusub oo ah qoryaha lagu kexeeyo doomaha, arrintaanna waxa ay xoojisay tayada iyo tirada beecmushtarka masaaridu la lahayd dhulka Punt.",
          "Boqor Mentuhotep III oo ahaa taliyihii Boqortooyadii Kow iyo Tobanaad, wuxuu khasnajigiisa guud ee Henenu u diray Koseir oo ku taal Badda Cas si uu u dhiso doon ama doomo loo diro Dhulka Punt, waxaana la sheegay in safarradaas ay keeneen maydi, beeyo iyo hadiyooyin tiro badan.",
          "Xiriirka masaarida iyo Punt ayaa hoos u dhacay kedib markii ay ciidamada “Hyksos” qabsadeen qaybaha hoose ee Masar, halkaas oo ay ka talinayeen muddo 100sano ku dhaw.",
          "Bilawgii Boqortooyadii 18aad ee Faraacinada oo talinaysay qarnigii 16aad ee Miilaadiga kahor ayaa xiriirkii Masaarida iyo Punt dib usoo noqday si fiicanna u xoogaystay."
        ]
      },
      {
        "heading": {
          "en": "Hatshepsut's expedition",
          "so": "Safarkii Boqorad Hatshepsut"
        },
        "en": [
          "During the time Queen Hatshepsut ruled Egypt, between 1479 and 1458 BCE (she took the throne after her brother Tuthmosis II, who was also her husband, as was the custom of the Pharaohs), she prepared and sent the most famous of the voyages the Egyptians sent to the land of Punt.",
          "On the wall of the Pharaonic monument called \"Deir el-Bahari\" is carved an account of this voyage, made up of writing and hand-drawn pictures.",
          "This stone record and the writings inherited from this voyage became the most valuable witness from which the nature and environment of the people and the land of Punt can clearly be seen.",
          "So, going into the details of this voyage at some length is worthwhile.",
          "Hatshepsut put the royal treasurer, named Nehesi, at the head of the voyage. She ordered that the most skilled and most knowledgeable sailors be chosen, and she directed that large and strong ships be built.",
          "On these ships went soldiers, sailors, labourers, scribes and artists, and they were at sea for two months.",
          "The voyage anchored at a place in north-eastern Somalia, between Caluula and Ras Casayr.",
          "The archaeologist named Chittick believes that the ships anchored at Daamo, a site between Ollog and Ras Casayr.",
          "At that place the ruins of an ancient town can still be seen.",
          "The archaeological traces of that site and their story we will present in the next session, God willing.",
          "When the voyage reached its destination, the man leading the voyage and a unit of eight soldiers came down from the ships; to show the people of Punt that they did not come to fight, they laid before them a basket of beads, bracelets, knives and so on.",
          "The guests were received by the King of the Land of Punt, named Parahu, his wife Ati or Iti, and three children they had borne: two sons and a daughter.",
          "The wife of the King of Punt was a fat woman with thick limbs, and she was riding a donkey led by three men.",
          "The hand-drawn pictures the ancient Egyptians left of the king who ruled the land of Punt show that he was a tall man with a thin beard; when he welcomed the travellers he carried in his hand a curved throwing stick (boomerang) used in battle, and a dagger was tied at his waist.",
          "They also said that on his legs were rings made of yellow metal or gold, meant to act as a shield for the leg in battle.",
          "The artists who went with the voyage showed in pictures the good climate of the Land of Punt and the plentiful rain that falls there, and described it as a land of rich greenery where many kinds of game and wild animals lived.",
          "The things the people of Punt received from these sailors included: cloth, and weapons including swords, daggers and bows.",
          "In exchange for those goods, the sailors loaded their ships with things including: 31 myrrh trees, hedi resin, frankincense, aromatic trees, elephant ivory, monkeys, dogs, cattle and leopard skins.",
          "Some people born in the land of Punt, with their children, also went along with the voyage.",
          "The day the delegation returned to Egypt was made a great festival, and black-headed sheep and bulls were slaughtered as offerings of prayer.",
          "The Queen ordered that the trees be planted in the garden of the god called Amun, but because of the climate the planting of those trees did not succeed.",
          "The voyage of those ships, whose return fell around 1470 BCE, greatly strengthened the relationship between the two countries, which the Pharaohs after Queen Hatshepsut continued.",
          "From the reign of King Horemheb at the end of the 18th Dynasty to the 20th Dynasty of King Ramesses III, that is, between about 1320 and 1155 BCE, many Egyptian voyages came to the Land of Punt and are recorded in the traces left by the ancient Egyptians.",
          "After that time the civilization of ancient Egypt declined, and Egypt's relations with the land of Punt became fewer.",
          "The relations of this land, and the people who lived in it before the birth of the Prophet Jesus (peace be upon him), were not limited to the Egyptians alone: they had deep economic ties with the famous civilizations that passed through the world in general."
        ],
        "so": [
          "Muddadii masar ay u talinaysay boqoraddii Hatshepsut intii u dhaxaysay 1479–1458 miilaadiyadda kahor, taasoo wanbarka boqortooyada kaga danbaysay walaalkeed Tuutmos II oo ninkeediina ahaa, sidii dhaqanka faraacinadu ahaa, ayaa diyaarisay, dirtayna safarkii ugu magac dheeraa safaradii masaaridu u dirtay dhulk Punt.",
          "Derbiga taallo-fircooneedda la yiraahdo “Dayr-al-baxri” ayaa waxaa ku naqshadaysan warbixin ka kooban qoraal iyo sawir-gacmeedyo ku saabsan safarkan.",
          "Diiwaankan dhagaxa ah iyo qoraallada laga dhaxlay safarkan ayaa waxa ay noqdeen marqaatiga ugu qiimaha badan ee si cad looga dheehan karo dabeecadda iyo deegaanka dadka iyo dalka Punt.",
          "Haddaba, in aan ku dheeraanno ka warramidda tafaasiisha safarkan, waa arrin muhiimaddeeda leh.",
          "Hatshepsut ayaa madax uga dhigtay safarka khasnajigii boqortooyada oo lagu magacaabay Nexesi, Waxa ayna amar ku bixisay in la xulo badmaaxiinta kuwooda ugu xirfadda wanaagsan, uguna aqoonta badan, waxa kale oo ay fartay in la dhiso doomo waaweyn oo xoog badan.",
          "Doomahaas ayaa waxaa raacay: askar, badmaaxyo, muruqmaallo, qorayaal iyo farshaxan yaqaanno, waxa ayna badda kusii jireen muddo laba bilood ah.",
          "Safarkaas wuxuu ku xirtay meel ku taalla waqooyi bari ee Soomaaliya una dhaxayso Caluula iyo Raas Casayr.",
          "Degelbaaraha la yiraahdo Chittick isagu wuxuu aaminsanyahay in doonyahaas ay ku xirteen Daamo oo ah degel u dhexeeya Ollog iyo Raas Casayr.",
          "Goobtaa waxaa weli ka muuqda burbur magaalo oo qadiim ah.",
          "Raad-reebyada degel-baaristaas iyo warkooda, fadhiga kan xiga ayaan kusoo bandhigaynaa, Haddii Eebbe weyne inoo oggolaado.",
          "Markii safarku gaaray halkii loo socday, waxaa doonyihii kasoo degay safarka ninkii hoggaaminayay iyo unug sideed askari ka kooban, si ay ugu muujiyaan dadka reer Punt in aysan dagaal u socon, ayay hortooda dhigeen karoor kuulal ah, baangado, midiyo iwm.",
          "Martida waxaa qaabilay Boqorka Dhulka Punt, oo lagu magacaabay Parahu, xaaskiisii Ati ama Iti iyo saddex canug oo ay dhaleen: laba wiil iyo gabar.",
          "Afada Boqorka Punt waxay ahayd haweenay buuran oo suxul buruur ah, waxayna saarneed dameer ay saddex nin kaxaynayeen.",
          "Sawir gacmeedyada ay masaaridii hore ka reebeen boqorkii u talinayay dhulka Punt ayaa waxa ay tilmaamayaan in uu ahaa nin maarriin ah oo leh gar dhuuban, markii uu safarta soo dhawaynayayna uu gacanta ku watay qori tuur leh (boomerang) oo lagu dagaal galo, billaawana dhexda ugu xirnayd.",
          "Waxa kaloo ay sheegeen in lugaha ay ugu jireen jijimmo bir jaallo ama huruud ah ka samaysan looguna tala galay in marka la dagaalayo lugta gaashaan u noqoto.",
          "Farshaxan-yaqaannadii la socday safarka waxay sawir ku muujiyeen cimila wanaagga Dhulka Punt iyo roobka badan ee dhulkaas ka da’a, waxa ayna tilmaameen in uu ahaa dhul doog badan kuna dhaqnaayeen ugaar iyo dugaag kala duwan.",
          "Waxyaabaha reer Punt ay ka heleen badmaaxayaashaas waxaa ka mid ahaa: dhar, hub isugu jira seefo, billaabayaal, iyo qaansooyin.",
          "Badeecaddaas beddelkeedana waxaa badmaaxayaashaas doonyahooda ay ku rarteen waxyaabo ay ka mid ahaayeen: 31 geed oo malmal ah, xabag-hedi, beeyo, geeduunsi, faan maroodi, daanyeer, eey, lo’, iyo hargaha shabeelka.",
          "Sidoo kale dad u dhashay dalka Punt iyo carruurtooda ayaa horey usii raacay safarka.",
          "Maalintuu wafdigaasi Masar ku laabtay waxaa laga dhigay maalin ciid weyn ah waxaana la gowracay ido madax madow iyo dibiyo si loogu duceeysto.",
          "Waxay Boqoradu amartay in geedahaas lagu tallaalo beerta ilaaha la yiraahdo Amon, sabab cimilo awgeedse beeridda geedahaas laguma guulaysan.",
          "Safarka doonyahaas, oo dib u noqoshadiisu ku aaddanayd qiyaastii 1470 sano M.k.h., ayaa aad u xoojiyay xiriirka labada dal oo ay sii wadeen Faraacinnadii ka dambeeyey boqoradda Hatshepsut.",
          "Waqtigii uu talinayay boqor Xoremxeb ee dhammaadkii boqortooyadii 18aad, illaa Boqortooyadii 20aad ee boqor Remses III oo ku aaddanayd intii u dhaxaysay qiyaastii 1320 illaa 1155 M.k.h., safarro badan oo Masaari ah ayaa yimid Dhulka Punt kuna xusan raadreebyada masaaridii hore.",
          "Waqtigaas wixii ka danbeeyay waxaa hoos u dhacay xadaaraddii masaaridii hore, waxaana yaraaday xiriirkii masaaridu ay la lahayd dhulka Punt.",
          "Dhulkan iyo dadkii degganaa kahor dhalashadii Nabi Ciise CS xiriirkoodu kuma ekeyn masaarida oo qudha, oo waxa ay xiriir qoto dheer oo dhaqaale la lahaayeen guud ahaan xadaaradihii magacawnaa ee dunida soo maray."
        ]
      },
      {
        "heading": {
          "en": "Persians, Greeks and Romans in Egypt",
          "so": "Faaris, Giriig iyo Roomaan"
        },
        "en": [
          "But first, let us make a short connection.",
          "In 525 BCE Egypt was conquered by Persia, and Cambyses, the son of King Cyrus, became king.",
          "In 332 BCE the rule of Egypt was taken over by Alexander the Great; the Persians surrendered and recognised Alexander as Pharaoh, and he founded the city named after him, Alexandria, which lies today on the Mediterranean coast of Egypt.",
          "After the death of Alexander, the throne of Egypt was taken by one of his commanders, named Ptolemy.",
          "This man, a Greek from the region of Macedonia, ruled there with his descendants for 300 years.",
          "The last of Ptolemy's descendants to rule was Queen Cleopatra, who took over the rule of Egypt from her brother Ptolemy XIII.",
          "Cleopatra killed herself after she was defeated in her war with the Romans and Alexandria was taken from her, in 30 BCE.",
          "After her death, Egypt became a province directly under Roman rule until the year 642 CE, when the army led by the great Companion Camr ibn al-Caas (Amr ibn al-As) conquered the country.",
          "So, from the time foreign rule began in Egypt, its relationship with the land of Punt was cut off.",
          "Until the start of the first century CE, the Somali coast was cut off from the world.",
          "It is thought that the reason for this isolation was the rivalry and the changes of government taking place in those times in North Africa and the Middle East, which cut the ties between those countries and the Horn of Africa.",
          "But we do find a few accounts, however short, that give us a glimpse of the 3rd and 2nd centuries BCE.",
          "The Greeks who ruled Egypt sent their ships to the Red Sea and the Gulf of Aden to capture elephants for use in war.",
          "For a hundred years the Greeks who ruled Egypt were hunting elephants in the Horn of Africa; after that they began to take elephant ivory, tortoise shell, rhinoceros horn and maydi from the Horn of Africa.",
          "The Greeks and the Romans even set up special companies for their trade with \"the Land of Incense\", which was the name by which the Greeks and Romans knew the land formerly called \"Punt\".",
          "The trade of the Greeks and Romans was not limited to the northern Somali, as with the ancient Egyptians: they extended it to all the Somali coasts on the Indian Ocean.",
          "Eratosthenes, who lived around 200 BCE and was in charge of the library of Alexandria in Egypt, one of the oldest libraries in the world, called the northern coasts of Somalia \"Costa Cinnamomifera\", meaning the land of fragrance."
        ],
        "so": [
          "Kahorse aan isku-xir yaroo kooban samayno.",
          "Sannadkii 525kii Miilaadiga ka hor waxaa Masar qabsaday Pershiya waxaana Boqor u noqday Kambise oo ahaa wiilki Boqor Khuurush.",
          "Sannadkii 332kii Miilaadiga ka hor waxaa xukunka Masaarida la wareegay Aleksandarkii weynaa, Pershiyaankiina waa ay isdhiibeen, iyagoo u aqoonsaday Aleksandar fircoon waxuuna dhisay magaalada loogu magacdaray ee Aleksandariya ee maanta dhacda xeebta badda dhexe ee dalka masar.",
          "Geeridii Alesander kedib waxaa wanbarkii boqortooyada masar la wareegay nin u ahaa abbaanduulle oo la oran jiray Ptolemy.",
          "Ninkan oo ahaa Giriig kasoo jeeda gobolka Mashedoniya, ayaa isaga iyo faraciisu halkaas ka talinayeen muddo 300 oo sano ah.",
          "Waxaa faracii Ptolemy xukunka ugu dambeeyay Boqoraddi kleopatra oo oo kala wareegtay xil-haynta Masar walaalkeed Ptolemy 13aad.",
          "Kleopatra ayaa is dishay, keddib markii ay ku jabtay dagaalkii ay la gashay Roomaanka, lagana qabsaday Aleksandariya, 30kii Miilaadiga ka hor.",
          "Kadib geerideediina, Masar waxay noqotay gobol toos u hoos yimaada xukunkii Romaanka taniyo sannaddii 642dii Miilaadiga markii uu ciidankii uu hoggaaminayay saxaabigii weynaa ee Camar Bin Caas uu furtay dalkaas.",
          "Haddaba, tan iyo intuu Masar ka bilawday xukunkii shisheeyaha waxaa go’ay xiriirkii ay la lahayd dalkii Punt.",
          "Taniyo horraantii Qarnigii Kowaad ee Miilaadiga, xeebta Soomaaliyeed waxay Adduunka ka ahayd go’doon.",
          "Waxaa loo maleeyaa inuu go’doonkaasi ugu wacnaa loollankii iyo isbeddelladii xukuumadeed ee waayahaas ka dhacayay Afrikada Waqooyi iyo Bariga Dhexe, arrintaasoo go’doomisay xiriirkii ka dhexeeyay dalalkaas iyo geeska Afrika.",
          "Waxaanse aan helaynaa dhawr warbixinood, oo haba iska koobnaadeene, wax inooga bidhaaminaya qarniyadii 3aad iyo 2aad ee Miilaadiyada kahor.",
          "Giriiggii ka talinayay Masar ayaa doomahooda u soo diray Badda Cas iyo Khooriga Cadmeed si ay u soo qabsadaan maroodiyaal lagu dagaal galo.",
          "Boqol sano ayay giriiggii Masar xukumayay maroodiyaal ka daldalanayeen Geeska Afrika, wixii intaas ka danbeeyayse waxay bilaabeen inay Geeska Afrika ka qaataan foolasha maroodiga, qolofka diidiinka, foolasha wayisha iyo maydiga.",
          "Giriigga iyo Roomanka waxay gaareen inay sameeyaan iskaashatooyin gaar ah oo u qaabilsan beecmushtarka ay la leeyihiin “Dhulka Fooxa” oo ahaa magacii Giriigga iyo Roomanku u yaqiineen dhulkii horey loo odhan jiray “Punt”.",
          "Beecmushtarka Giriigga iyo Roomankuna kuma ekayn Soomaalida waqooyi oo kaliya, sidii masaaridii hore, ee waxay ku fidiyeen dhammaan xeebaha Soomaaliyeed ee ku yaal Badweynta Hindiya.",
          "Eratostene oo noolaa 200 NCKH, isla markaasna ahaa mas’uulka maktabada Aleksandariya ee Masar, oo kamid ah maktabadaha ugu qadiimsan adduunka, wuxuu xeebaha waqooyi ee Soomaaliya ku magacaabay “Costa Cinnamomifera” oo macneheedu yahay dalkii udgoonaa."
        ]
      },
      {
        "heading": {
          "en": "The Periplus of the Erythraean Sea",
          "so": "Buugga \"The Periplus of the Erythraean Sea\""
        },
        "en": [
          "The most important text that speaks in detail about the ancient coastal towns of Somalia is the one written by a Greek man in the year 47 or 50 CE.",
          "The title of that book is \"The Periplus of the Erythraean Sea\" (the voyage around the Erythraean Sea).",
          "In those early times the Indian Ocean was known as the Erythraean Sea.",
          "The word \"Erythraean\", which comes from Greek, means \"red\".",
          "And the reason the Red Sea was given that name is that its waters turn red in the afternoon, when the sunlight meets the algae and plants of that sea.",
          "The writer, whose name is not known, was a seafaring trader who worked for the Roman empire that ruled Egypt and Syria.",
          "He was sent to report on the state of trade in the coastal towns of East Africa and of India.",
          "This text was written at a time when trade in the port towns of Somalia had grown strong again.",
          "Because of the great value of this text, we will set out its information in full detail.",
          "The writer divided the coasts of the Horn of Africa into two parts:",
          "· The Berber coast, which is the Gulf of Aden and the north-east of the Indian Ocean",
          "· and the coast of Azania, which is everything further south, as far as the area of Kilwa in Tanzania.",
          "First of all, at a time around 40 or 50 years after the birth of the Prophet Jesus (peace be upon him), the Roman ships set sail from a port town called \"Myos Hormos\", now known as Quseir al-Qadim, 8 km north of the town of Quseir in Egypt.",
          "This Roman voyage stopped only at the port towns of the Somali coasts; it did not go inland into the Horn of Africa.",
          "The first Somali port town where they anchored was \"Avalites\", which stood where Zaylac (Zeila) is today.",
          "This town did not have a good harbour, so only small boats could anchor in it, and it had a market where various goods were sold, including things made of glass, fine cloth and sorghum.",
          "The people living in Avalites used to go to Muza, now called Mokha in Yemen, carrying frankincense, elephant ivory, tortoise shell and so on.",
          "The second Somali town where the Roman voyage anchored was Malao, now known as Berbera.",
          "The people living in Malao exported xuday resin and maydi; they were settled people, and good at keeping order.",
          "When the voyage set out from Malao, or Berbera, and had been at sea for two more days, they anchored at a small island just north of a port town called Mundu.",
          "This town of Mundu is most likely the town now called Xiis, in the Sanaag region, and moxor resin was exported from it.",
          "When the voyage left Mundu, it reached Mosyllon two or three days later; this is thought to be either Ras Xantaar or Ceelaayo.",
          "Mosyllon had a large harbour, and was famous for frankincense, maydi and moxor.",
          "When the voyage left Mosyllon and had been at sea for two more days, they saw a river they named \"the Little Nile River\".",
          "After that they passed a headland they named Elephas, with a small bay beside it.",
          "A river called \"the Elephant River\" flows into the sea at that bay.",
          "Along that bay lies a wide area where trees grow whose roots grow down from their branches (mangroves), and there stood a port town called Akannai.",
          "It is thought likely that the river the Romans named \"the Little Nile River\" has now dried up and become the seasonal river called Togweyne, which passes near Jebel Haima.",
          "The port town of Akannai is now called Caluula, since near Caluula there is a lagoon where trees grow whose roots grow down from their branches, and a high-quality fragrant resin used to be exported from there.",
          "Going on, after they passed Akannai, they came to a market where fragrant resin was bought and sold, called the \"Spice Market\", the Market of Incense.",
          "The port town the Romans described as the \"Spice Market\" is the coastal town of Daamo, in the Bari region, 5 km from Cape Gardafui or Ras Casayr.",
          "When the Roman voyage left the Market of Incense, they turned south along the coast, and anchored at a port town called Opone, now known as Xaafuun.",
          "Opone was one of the best-known ports of the Horn of Africa at that time, where ships from Arabia and India used to anchor, and goods of many kinds were exchanged.",
          "The voyage still goes on, sailing along the Indian Ocean coasts of Somalia.",
          "When they set out from Opone and sailed south for six days, they came to coasts they named the \"Small and Great Bluffs\", the small cliff-coast and the great cliff-coast.",
          "Somalis know this land as \"Qaraley\", which matches the name the Romans gave to the area between Eyl and the place where the Xolob seasonal river flows into the sea.",
          "They said it was a wilderness with no harbours.",
          "When the Roman voyage had passed the Qaraley coasts and travelled for another six nights, they passed areas whose coasts were all sand or dunes;",
          "and they named this area the \"Small and Great Beaches\".",
          "Those sandy coasts are the ones on which the port town of Warshiikh stands.",
          "As Ustad Dhoorre points out, the total distance between Xaafuun and Warshiikh, 600 nautical miles, matches the estimated 12 days the Romans took to sail between Xaafuun and Warshiikh.",
          "When they had passed Warshiikh, the Roman voyage reached a land with many harbours, which was later named \"Benaadir\".",
          "Where this name came from, why it was given, and how much it covers, we will learn in later sessions and in the history of Banaadir, God willing.",
          "The first harbour of Benaadir where the Romans anchored was \"Serapion\", which stood where Xamar, or Mogadishu, stands today.",
          "When they had passed Serapion, they soon reached another port town called \"Nikon\", whose site is now that of Baraawe (Brava).",
          "When the Romans had passed along all the Somali coasts, they crossed to the coasts of Kenya and Tanzania, for the expedition they had been sent on was aimed at reporting on all the coasts of the Indian Ocean, on both of its shores.",
          "The Roman sailors said that the people living in the Horn of Africa had no general government that all of them followed.",
          "They were scattered clans, each ruled by chiefs or elders.",
          "How much tonight resembles last night! (ما أشبه الليلة بالبارحة)",
          "Look closely!!",
          "This detailed and complete account that we have found in the book The Periplus of the Erythraean Sea sheds much light on the history and the society living in the areas now called Somalia.",
          "Although this information is agreed upon, there are differences over the identification and naming of the places the writer mentions, which ones they are and where they lie today; the information we have set out is an approximation and the most widely held view, supported by the evidence of archaeology and site investigation.",
          "In the next session we will present the information related to those archaeological investigations, God willing."
        ],
        "so": [
          "Qoraalka ugu muhimsan ee si tifaftiran uga hadlaya magaalo-xeebeedyadii hore ee Soomaaliya waa midka uu qoray nin Giriig ah sannadda Miilaadiyadu markay ahayd 47 ama 50.",
          "Buuggaas cinwaankiisu waa “The Periplus of the Erythraean Sea” (Safarkii badda Eritrea).",
          "Badweynta Hindiya ayaa waagaa hore loo yiqiin Badda Eritrea.",
          "Ereyga Erythraean oo af Giriig ka soo jeeda, ayaa micnihiisu yahay “casaan”.",
          "Sababta Badda Cas loogu bixiyayna waxay tahay: baddaas biyaheedu way casaadaan galabtii kaddib markii ay isku dhacaan ilayska qorraxda iyo algiyada iyo dhirta baddaas.",
          "Qoraagaas oo magaciisa aan la aqoon, wuxuu ahaa badmareen ganacsade ah oo u shaqaynaayay boqortooyadii Romaanka ee ka talinaysa Masar iyo Shaam.",
          "Waxaa loo diray in uu ka soo warbixiyo heerka ganacsiga ee magaalo-xeebeedyada Afrikada Bari iyo kuwa dalka Hindiya.",
          "Qoraalkaan ayaa la qoray waqti uu dib u soo xoogaystay beecmushtarka ka jiray magaalo furdooyinka Soomaaliya.",
          "Qiimaha ballaaran uu qoraalkaan leeyahay awgeed, ayaan si faah-faahsan oo tafaasiilayn xogtiisa usoo gudbinaynaa.",
          "Qoraaga wuxuu u qaybiyay xeebaha Geeska Afrika laba qaybood:",
          "· Xeebta Berberiga oo ah Khooriga Cadmeed iyo Waqooyi Bari Badweynta Hindiya",
          "· iyo Xeebta Azaaniya oo ah waxii ka sii Koofureeya, illaa degaanka Kilwa ee Tanzania.",
          "Hor iyo horaanba, waqti ku aaddan 40 ama 50 sano Kedib Dhalashadii Nabi Ciise CS, ayay maraakiibta Roomanku ka anbabexeen magaalo furdo la yiraahdo “Myos Hormus” oo haatan loo yaqaan Quseyr al-Qadiim, oo 8km waqooyi ka xigta magaalada Quseyr ee dalka Masar",
          "Safarkan Roomaanku waxa uu ku ekaa oo uu ku xiranayay magaalo furdooyinka xeebaha Soomaaliyeed, ee daakhilka uguma dhaadhacayn geyiga Geeska Afrika.",
          "Magaalo furdada Soomaaliyeed ee ugu horaysay oo ay ku soo xirteen waxay ahayd “Avalites” oo ku taalay meesha haatan la yiraahdo Zaylac.",
          "Magaaladan ma lahayn furdo wanaagsan sidaas darteed doomaha yar yar oo kaliya ayaa ku soo xiran karay furdadeeda, waxa ayna lahayd suuq lagu iibiyo alaabo kala duwan oo isugu jira kuwo dhalo ka samaysan, dhar xul ah iyo haruurka.",
          "Dadka deggan Avalites ayaa aadi jirey Muza oo haatan la yiraahdo Mokha ee dalka Yemen, waxa ayna gayn jireen beeyada, foolasha maroodiga, qolofka diidiinka iwm.",
          "Magaalada labaad ee Soomaaliya uu safarkii Roomanku ku xirtay waxay ahayd Malao oo haatan loo yaqaano Berbera.",
          "Dadka Malao deggan waxay dhoofin jireen xabagta xudayga iyo maydiga, waxa ayna ahaayeen dad deggan oo xeerka ilaalintiisana ku wanaagsan.",
          "Markii safarku ka amabaxay Malao ama Berbera, labo barina badda ku sii jirey ayay ku xirteen jasiirad yar oo waqooyi ka xigto magaalofurdo la yiraahdo Mundu.",
          "Magaaladan Mundu ayaa loo badinayaa in ay tahay magaalada maanta la yiraahdo Xiis, ee gobolka Sanaag, waxaana laga dhoofin jirey moxorka.",
          "Markuu safarkii Mundu ka tagay wuxuu laba ama saddex bari ka dib gaaray Mosyllon oo loo malaynayo in ah tahay Raas Xantaar, ama Ceelaayo middood.",
          "Mosyllon waxay lahayd furdo weyn, waxayna caan ku ahayd beeyada, maydiga iyo moxorka.",
          "Safarkii markuu ka tagay Mosyllon uuna labo bari badda ku sii jiray, waxay arkeen wabi ay u baxsheen “Wabigii Naylka Yaraa”.",
          "Intaa ka dib waxay sii mareen madax-badeed ay ku magacaabeen Elefantid iyo khoori yar oo saaran.",
          "Wabi la yiraahdo “Wabigii Maroodile” ayaa khoorigaas badda uga dara.",
          "Khoorigaas waxaa saaran dhul ballaaran oo ay ka baxaan geedaha laamaha xididka daysta, waxaana halkaas ku yaallay magaalo furdo la yiraahdo Akannai.",
          "Waxaa loo badinayaa in wabiga Roomanku ay ku magacaabeen “Wabiga Naylka Yar” uu haatan engegay iskuna bedelay togga la yiraahdo Togweyne, oona ag mara Jebel Haima.",
          "Magaalofurdada Akannai waxaa haatan la yiraahdaa Caluula, maadaama meel Caluula u dhow uu ku yaalo balli ay ka baxaan geedaha laamaha xididka daysta, waxaana laga dhoofin jiray xabag udgoon oo tayadeedu sarrayso.",
          "Horey ayay usii socdeenoo, markii ay Akannai dhaafeen, waxa ay tageen suuq lagu kala iibsado xabagta udgoon oo la yiraah “Spice Market” ama Suuqa Fooxa.",
          "Halkan ay Roomanku ku tilmaameen magaalo furdada “Spice Market” waa magaala-xeebeedda Daamo ee gobolka Bari ka tirsan, waxa ayna 5km u jirtaa Cape Gardafuu ama Raas Casayr.",
          "Safarkii Roomanku markii ay ka tageen Suuqa Fooxa, xeebta ayay dhanka koonfureed ula wareegeen, waxa ayna ku xirteen magaalofurdo la yiraahdo Opone oo haatan loo yaqaano Xaafuun.",
          "Opone waxay ka mid ahayd furdooyinka waqtigaas Geeska Afrika ugu caansanaa oo ay ku soo xiran jireen doomo ka yimaada Carabta iyo Hindiya, laguna kala bedesho badeecooyin kala jaad ah.",
          "Weli safarku waa socdaa, waxa ayna ku shiraacayaan xeebaha badweynta Hindiya ee Soomaaliya.",
          "Markii ay Opone ka ambabexeen, oo lix maalmood koofur u shareecayeen ayay tageen xeebo ay ku magacaabeen “Small and Great Bluffs” ama “Xeeb-qaraleyda Yar iyo Xeeb-qaraleyda Weyn”.",
          "Dhulkaan waxay Soomaalidu u taqaan “qaraley” oo la mid ah magacii Roomanku u baxsheen degaanka u dhaxeeya Eeyl iyo halka togga Xolob badda kaga daro.",
          "Waxa ayna sheegeen in uu ahaa lama degaan aan lahayn wax furdooyin ah.",
          "Safarkii Roomanku markay xeebaha Qaraley horey u dhaafeen oo ay sii socdeen lix casho oo kale, ayay mareen degaanno xeebahooda ciid ama xaano wada ah;",
          "waxayna degaankaan ku magacaabeen “Small and Great Beaches”.",
          "Xeebahaas xaanada ah waa kuwa saaran magaalo-furdada Warshiikh.",
          "Sida uu tibaaxayo Ustad Dhoorre Foggaanta guud ee u dhaxaysa Xaafuun iyo Warshiikh oo ah 600 oo maylka badda ah wuxuu le’eg yahay qiyaasta 12ka maalmood oo ay Roomaanka ku qaadatay inay isaga safraan Xaafuun iyo Warshiikh.",
          "Markii Warshiikh ay dhaafeen, safarkii Roomanka ayaa gaaray dhul furdooyin badan leh, waa danbana loo baxshay “Benaadir”.",
          "Meesha magacan ka yimid, sababta loogu baxshay iyo inta uu jamciyana, fadhiyada danbi iyo taariikhda Banaadir ayaan uga bogan doonnaa, Haddii Eebbew eyne inoo oggolaado.",
          "Furdadii ugu horeesay ee Benaadir oo ay Roomanka ku xirteen waxay ahayd “Serapion” oo ku tiil meesha maanta ay ku taalo Xamar ama Muqdisho.",
          "Markii ay Serapion dhaafeen, wax ay durbaba gaareen magaalofurdo kale oo la yiraahdo “Nikon” oo haatan ay Baraawe booskeeda ku taallo.",
          "Roomaanku markay wada mareen xeebaha Soomaaliyeed waxay u gudbeen xeebaha Keenya iyo Tanzaaniya, oo sahankii loosoo diray ayaa daarranaa in ay ka war keenaan dhammaan xeebaha Badweynta Hindiya labadeeda daanba.",
          "Badmaaxintii Roomanka waxay sheegeen in dadka Geeska Afrika deggan aysan lahayn maamul guud oo laga wada danbeeyo.",
          "Waxay ahaayeen beelo qoqoban oo mid kasta oo ay u taliyaan jamaamuur ama waayeello.",
          "ما أشه الليلة بالبارحة",
          "Fir adakinaa!!",
          "Warbixintan faahfaahsan waafigana ah ee aan ka helnay buugga The Periplus of the Erythraean Sea, ayaa ah mid wax badan inooga iftiiminaysa taariikhda iyo bulshada ku dhaqneed deegaannadan maanta lagu magacaabo Soomaaliya.",
          "Ayada oo xogtan la isku waafaqsan yahay, haddana waxaa jira kala duwanaasho ku aaddan xadaynta iyo magacaabidda deegaannada uu qoraagu sheegay kuwa ay yihiin iyo meesha ay maanta ku yaallaan, xogaha aan soo taxnayna waa soo dhawayn iyo sida loo badan yahay, caddaymaha raad-awal-aqoolaynta iyo degel-baaristuna ay xoojinayaan.",
          "Fadhiga kan xiga ayaana kusoo bandhigaynaa macluumaadka la xariira degel-baaristaas, haddii Rabbi inoo oggolaado."
        ]
      },
      {
        "heading": {
          "en": "Other ancient peoples",
          "so": "Ummado kale oo hore"
        },
        "en": [
          "These two detailed accounts, the one the Pharaohs of Egypt kept about Punt and the one the Romans left about the Somali coasts, shed clear and detailed light on the condition of this land and of the people who lived in it, from 3,000 years before the birth of the Prophet Jesus (peace be upon him) up to 50 years after the birth of the Prophet Jesus (peace be upon him).",
          "There are also other accounts that ancient civilizations left about this land, such as the Persians and the Arab states of Yemen that followed one another.",
          "The Phoenicians, who ruled the Mediterranean coasts of the Middle East and North Africa from 1000 to 500 BCE, are thought likely to have reached, or even ruled part of, the coasts of northern Somalia.",
          "It is said that one of the kings of Persia who lived in 293 before the birth of the Prophet Jesus (peace be upon him) had relations with a king called \"Zhand Afrika Shah\", who lived in eastern Somalia.",
          "It is also said that in the year 102 before the birth of the Prophet Jesus (peace be upon him) a group of Himyarites came to Mogadishu and crossed on to the valley of the Jubba River, where they met a people called the Khashaar.",
          "Is the name Xamar a changed form of Himyar?",
          "We will discuss this in later sessions and in the history of Banaadir, God willing.",
          "This relationship the Arabs had with the Somali coasts grew very strong, and led the Arabs, at the end of the first millennium CE, to stream onto the Somali coasts.",
          "As we will see later, God willing."
        ],
        "so": [
          "Labadaas warbixinood ee tafafta tiran, tii ay Faraacinadii Masar ka keydiyeen Punt iyo midda ay Roomaankii ka reebeen xeebaha Soomaaliya, ayaa waxa ay si fiican oo faahfaahsan inoogu iftiiminaysaa geyigaan xaalkiisii iyo dadkii ku dhaqnaa laga soo bilaabo 3,000 sano kahor dhalashadii Nabi Ciise CS, illaa laga soo gaaro 50sano keddib dhalashadii Nabi Ciise CS.",
          "Waxaa jira oo la hayaa warbixinno oo kale oo geyigaan ay ka reebeen xadaaradihii hore sida Faaris iyo dawladihii carbeed ee Yemen iskaga danbeeyay.",
          "Fiiniqiyiintii ka talinayay xeebaha badda dhexe ee bariga dhexe iyo waqooyiga Afrika 1000 illaa 500 sano miilaadiga ka hor ayaa loo badinayaa in ay soo gaareen amaba wax ka xukumeen xeebaha waqooyiga Soomaaliya.",
          "Waxaa la sheegay in mid kamid ah boqorradii Faaris ee noolaa 293 kahor dhalashadii Nabi Ciise CS, uu xiriir la lahaa boqor la yiraahdo “Zhand Afrika Shah” oo deganaa bariga Somaliya.",
          "Waxaa sidoo kale la sheegay in sanadkii 102 kahor dhalashadii Nabi Ciise CS ay koox Reer Ximyar ah yimaadeen Muqdisho, ugana sii gudbeen dooxada Wabiga Jubba, waxayna kula kulmeen dad la yiraahdo Khashaar.",
          "Magaca Xamar ma Ximyar oo dhalan-rogmay miyaa?",
          "Fadhiyada danbe iyo taariikhda Banaadir ayaan uga warrami doonnaa Idanka Rabbi.",
          "Xiriirkan ay carabtu la lahayd xeebaha Soomaaliya, ayaa aad u xoogaystay horseedayna in carabtu ay dhammaadkii kunkii koobaad ee miilaadiyada kusoo qulqusho xeebaha Soomaaliya.",
          "Sida aan dib ka arki doonnaba, Idanka Rabbi."
        ]
      },
      {
        "heading": {
          "en": "Closing",
          "so": "Gebagabo"
        },
        "en": [
          "Let today's session end here.",
          "When history is discussed, it is not built on writings alone; tangible evidence is relied on as well.",
          "In our next session we will discuss the archaeological traces: their kinds, the places where they were found, and how history can be glimpsed through them.",
          "And also, stepping a little away from our series, we will talk about the various sciences that support history, and how they provide evidence.",
          "And once more let me close with some lines from the same poem by the poet Yamyam, which describe the history we have set out:",
          "• My mark is my own",
          "• My land is famous",
          "• For a man who entered the Pyramids",
          "• Knows well the trail of my people",
          "• The Pharaohs who passed on",
          "• And the generations who entered Egypt",
          "• That I remained in the place they left",
          "• You who know that frontier",
          "Go in peace, until the next session."
        ],
        "so": [
          "Halkaan ha inoo joogo fadhiga maanta.",
          "Taariikh marka laga hadlayo, qormooyin oo qura laguma saleeyee, caddaymo la taaban karana waa loo cuskadaa..",
          "Fadhigeenna xiga ayaana ku qaadaa-dhigi doonnaa raadreebyada degdel-baariseed, noocyadooda, meelaha laga helay iyo sida taariikh ahaan wax loog bidhaansado.",
          "Sidoo kalena, annaga oo taxaneheenna waxyar ka bayrana, waxa aan ka hadli doonnaa, culuumta kala duwan ee taariikhda lagu kaabo iyo sida ay wax u daliiliyaan.",
          "Mar kalena aan ku gabagabeeyo, tuducyo kamid ah isla maansadii Abwaan Yamyam oo wax ka tilmaamaysa taariikhdaas aan soo taxnay:",
          "• Tilmaantaydu waa gaar",
          "• Gobolkaygu waa caan",
          "• Nin Ahraamta galay baa",
          "• Garta raad dadkaygee",
          "• Faraaciinadii gudubtiyo",
          "• Masar jiilashii galay",
          "• Inaan goobtii uga haray",
          "• Googaa yaqaannow",
          "Soo nabad-gala illaa fadhiga xiga."
        ]
      }
    ],
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
    // The FULL script of the episode ("Xalqadda 3aad"): Somali word for word, with an English translation.
    article: [
      {
        "heading": {
          "en": "Opening",
          "so": "Furitaan"
        },
        "en": [
          "In 2002, a team of French archaeologists went exploring a rock shelter 60 km from Hargeisa.",
          "That rock shelter is known as Laas Geel.",
          "When they went inside the caves of that rock, they saw on the walls paintings in different colours, a mix of ochre-yellow, white and red.",
          "They also saw images of cattle with great horns, their udders swelling with milk, and their necks decorated.",
          "The age of those paintings has been estimated at no less than 5,000 years, as old as the earliest pyramids of ancient Egypt.",
          "Whoever painted and carved them left no name, and left us no writing.",
          "So, a few questions stand before us that need an answer:",
          "• Who painted or carved these pictures?",
          "• What can we read from them?",
          "• And how can we make these stones speak as history?",
          "In this session we examine the archaeological traces found in the Somali land, and the various sciences that support history.",
          "Peace be upon you, and the mercy of God and His blessings.",
          "Welcome back, and good to be together again.",
          "In our previous session we opened some pages of the history of the civilizations that passed through the world, looking for any information they left about this land.",
          "We went over the accounts concerning ancient Egypt and Queen Hatshepsut's voyage to the Land of Punt, the Greeks and the Romans, and the book The Periplus of the Erythraean Sea, which described the port towns of the Somali coasts one by one.",
          "And we concluded that when history is discussed, it is not built on writings alone, but tangible evidence is relied on as well.",
          "My name is Mohamed Abdulkadir Mohamed.",
          "And this is MIYIR, the platform for raising awareness and nurturing understanding.",
          "Come closer."
        ],
        "so": [
          "Sannadkii 2002-da koox degelbaarayaal Faransiis ah ayaa sahan ku tegay gebi ku yaal meel Hargaysa 60km u jirta.",
          "Gebigaas oo loo aqoon ogyahay Laas-geel.",
          "Markii ay gudaha u galeen godadka gebigaas, waxa ay darbiyada ku arkeen sawirro midabbo kala jaad ah leh, oo isugu jira huruud, caddaan iyo casaan .",
          "Waxa kale oo ay ku arkeen muuqaallada Lo’ geeso waaweyn, oo candhadeedu caano la ciirayso, luquntana ka sharraxan.",
          "Sawiradaas ayaa lagu qiyaasay cimrigooda muddo aan 5000 oo sano ka yarayn, ayna la fil yihiin ahraamtii Masaaridii hore kuwoodii ugu horreeyay.",
          "Ciddii sawirtay oo farshaxamaysay wax magac ah kama tegin, wax qoraal ahna inooma aysan reebin.",
          "Haddaba; dhawr weydiimood ayaa ina hor imaanaya oo jawaab inooga baahan:",
          "• Yaa sawiray ama farshaxameeyay sawiradaan?",
          "• Maxaan ka akhrisan karnaa?",
          "• Sidee baanse dhagaxaan taariikh ahaan uga hadlin karnaa?",
          "Fadhigaan waxa aan ku faaqidaynaa raadreebyada degel-baariseed ee geyiga Soomaaliyeed laga helay, iyo culuumta kala duwan ee taariikhda lagu kabo.",
          "سلام الله عليكم ورحمته وبركاته",
          "Mar kale iyo isku soo laabasho wanaagsan.",
          "Fadhigeennii hore waxa aan kusoo kala furnay bogag kamid ah taariikhda xadaaradihii adduunka soo maray, annaga oo ka indha-indhaynayna wax xog ah oo ay ka reebeen geyigaan.",
          "Waxa aan dulmar kusoo samaynay wararka la xariiray Masaaridii hore iyo safarkii Boqoradda Hatshepsut ee Dhulka Punt, Giriigga iyo Roomaanka, iyo buugga The Periplus of the Erythraean Sea oo magaalo-furdooyinkii xeebaha Soomaaliyeed mid mid uga warramay.",
          "Waxaana ku gabagabaynay in marka taariikh laga hadlayo, qormooyin oo qura aan lagu salayne, ee caddaymo la taaban karana loo cuskado.",
          "Magacaygu waa Maxamed Cabdulqaadir Maxamed.",
          "Halkaanna waa madasha MIYIR ee kobcinta wacyiga iyo ababinta garaadka.",
          "Horey usoo dhawaada."
        ]
      },
      {
        "heading": {
          "en": "The sciences that support history",
          "so": "Culuumta taariikhda lagu kabo"
        },
        "en": [
          "In our first session we mentioned that for this long journey through distant history that we are wading through, there is no witness or account at all; it is glimpsed through various sciences that shine a torch on what happened in those ages.",
          "And we promised that we would examine those sciences, and how they provide evidence, in a session of its own.",
          "In the same way, in our second session, when we were discussing the identification of the places those distant civilizations entered into history, we said we would present the archaeological traces on which those accounts rely.",
          "So, this session is the place to fulfil those promises.",
          "There is a fact that cannot be passed over or ignored: that Somali history in general, and in particular the part whose pages we are now turning, ancient history, is surrounded by great haze and uncertainty.",
          "Sheikh Awjaamac Cumar Ciise admitted in his book on Somali history that the history of the Somali in those distant ages is very, very scarce for us, that many accounts passed from person to person are not dug deep, and that legends are not absent from it.",
          "The sensible person who bases his account on knowledge accepts that all the information being given is an approximation, and is what the handful of available evidence points to.",
          "When the history of a region is being researched, to reach something firm, traces are needed that prove the events history follows, such as writings, surviving customs and the like.",
          "Although not many traces remain of the peoples who lived in this region one after another, nor writings through which its early history can be followed, still something has remained from which the search for history can set out.",
          "The nomadic life of the Somali, and the fact that they did not form a government uniting them that all followed, caused the absence of records and official history-writing, and also limited the archaeological traces they left.",
          "Before we go into those traces and their account, the question to ask is: apart from witnesses and stories, what else is history based on and read from?",
          "And this is where we present the sciences that support history today.",
          "Human knowledge is linked together like the branches of a tree: there is no science that can stand alone and do without the other branches of knowledge.",
          "The science of history shelters under the umbrella of \"the Social and Human Sciences\", where it interacts with several other sciences.",
          "Without counting them all or going deep into the details of those sciences, let us pick out the most important of them and their outer layer.",
          "Anthropology is the first science to enter the field of history, and the two share a great deal.",
          "It is the science that studies human beings: their life, their culture, and how societies developed.",
          "Under it, and connected with it, comes the science called Ethnology, which focuses on comparing the cultures of societies, the development of heritage, and also how those cultures interact with each other.",
          "Under it come burial customs and practices, the arts, the structure of languages, and the oral heritage of nations.",
          "Prof. Mansuur said that Western scholars have for more than a century been studying the oral heritage of the Somali, which they gathered from nomadic elders.",
          "Third after those two sciences comes linguistics, the science that examines the origin and structure of languages and how they are grouped into families.",
          "And language is like a living thing: it grows, changes and develops, keeping pace with the conditions of each place and time.",
          "Linguistics is followed by a science that specially studies the history of languages and their past, called Philology; the further back the period whose history is being studied, the more importance this science has, for historical writings cannot be understood without unravelling the language they are written in.",
          "There is also the science of reading ancient scripts, Paleography, which helps us read and spell out scripts so that we can transcribe the history written in them.",
          "In our previous session we examined how the word \"Punt\" is sought within the language of the ancient Egyptians, and that their script had no vowels, so that the name was written \"Pwnt\".",
          "After those five sciences, we come to the most important and most reasonable science for supporting and reading history, without which many links of history would be missing.",
          "It is the science of Archaeology.",
          "Archaeology, or the study of ancient traces, is the study of the history and culture of earlier societies, by looking at the buildings they left behind, their graves, their tools, their belongings and so on.",
          "What the archaeologist works on and is busy with is collecting and studying the traces humans left behind, such as: buildings, graves, pots, coins and every kind of object.",
          "Geography is a science paired with history, for the land is the stage on which history took shape, and it cannot be left aside when historical events are discussed; just as we did when we followed the Roman voyage along the Somali coasts, trying to match the landmarks they described with the Somali towns known today.",
          "Another science that also plays an important role in history is the study of coins, or \"Numismatics\", which studies the history of coins, their designs, the images of rulers and kings engraved on them, and the customs connected with them.",
          "For example, the remains of Chinese coins found in parts of East Africa show us the trade relationship between those two places.",
          "Stopping our list of those sciences there, we have gone over eight sciences that support history, without which much would be skipped over:",
          "• Anthropology",
          "• Ethnology",
          "• Linguistics",
          "• The history of languages and their past (Philology)",
          "• The reading of ancient scripts (Paleography)",
          "• Archaeology",
          "• Geography",
          "• Coins (\"Numismatics\")",
          "So, how can history be read through those sciences? And how large a role do they play?",
          "When answering the question \"Where did the Somali come from?\", Prof. Cabdalla Cumar Mansuur said, showing how important bringing these sciences together is for getting to the root of that history:",
          "\"In truth it is not a simple question that can be answered in two words, as many people like. If we want a reasonable answer that is not based on emotion, we must seek information from the sciences concerned with that matter and the like, such as studies of the history of the Somali language, archaeological traces and part of the heritage.. So here we summarise the studies of the scholars who research, in general, the origin of peoples, their heritage and their ancient civilizations (ethnologists, anthropologists), as well as the historians.\"",
          "Bringing those sciences together also helps us weigh up the reporting and handing on of historical facts.",
          "Let us take one example.",
          "Ustad Dhoorre wrote that the Italian explorer named Luigi Robecchi met, in the Bari region, a Somali elder who had dug up graves of ancient people near Waadi Abgaal, and inside those graves he had seen the skeletons of people larger than the Somali living today.",
          "Somali legends also keep alive the story of men of great strength and size, called the Tiirri people, among them Xabad Ina Kamas and Biriir Ina Barqo.",
          "The idea that the people of old were a nation of great size and strength, and that this allowed them to build great monuments and wondrous buildings, was opposed and rejected by the great scholar Ibn Khaldun, who lived in the 14th century; it was he who said:",
          "«ولا تَتَوَهَّمْ ما تتوهَّمُهُ العامَّةُ أنَّ ذلك لعظم أجسام الأقدمين عن أجسامنا ... فَليس بين البشر في ذلك كبير بون، كما تجد بين الهياكل والآثار»",
          "Meaning: \"Forget the talk of ordinary people that the nations before us were much bigger in body than us and could be many times our size; there is no great difference between humans, before or after, as can be seen from the buildings and traces they left.\"",
          "Without declaring Ibn Khaldun's words right or wrong, they show us how the historian can make the traces of societies, and what they left behind, into evidence.",
          "With that we pass beyond the first part of our session, which was based on examining the sciences that support the science of history and are read alongside it.",
          "Let us move on to the other part of our session, and answer: what traces have been found in the Somali land?"
        ],
        "so": [
          "Fadhigeennii koowaad waxa aan soo xusnay in hayaankan dheer ee taariikhdaas fog aan baabacada kusoo marinayno aan loo hayn marag iyo maqaal toonna, balse laga bidhaansado culuum kala duwan oo tooshka inoogu ifinaysa wixii dhacay waayadaas.",
          "Waxa aana afka ku dhufannay in culuumtaas iyo sida ay wax u daliiliyaan, fadhi gaar ah aan ku lafa-guri doonno.",
          "Isla sidaasoo kale, fadhigeennii labaad markii aan ka hadlaynay xadaynta goobaha taariikhda xadaaradahaas fog galay, in aan raadreebyada degelbaariseed ee loo cuskado wararkaas aan soo bandhigi doonno.",
          "Haddaba, fadhigan ayaa u madlan ka dhabaynta ballan-qaadyaas.",
          "Waxaa jira xaqiiqo aan laga gudbi karin, la iskana indha-saabi karin, taasoo ah in Taariikhda Soomaalida guud ahaan, iyo gaar ahaan midda aan hadda bogaggeeda rog-rogayno ee taariikhda hore ah ay ku gadaaman tahay hummaag weyn iyo hubanti la’aan.",
          "Shiikh Awjaamac Cumar Ciise ayaa buuggiisa taariikhda Soomaalida waxa uu ku qiray in Taariikhda Soomaalida ee waayadaas fog ay aad iyo aad inoogu gabaabsi tahay, warbixin badanoo la isla dhexqaadana ay fari ku godan tahay, sheeko xariiraduna aysan ka maqnayn.",
          "Qofka waxgaradka ah ee warbixintiisa aqoonta u cuskanayana waa uu garawsan yahay in dhammaan xogahan la sheegayo ay soo dhawayn iyo sida caddaymaha fara-ku-tiriska ah ee la hayo ay tilmaamayaan ay tahay.",
          "Goorta deegaan taariikhdiisa la baarayana, si loo helo wax sugan, waxaa loo baahan yahay in la helo raadreebyo caddeynaya dhacdooyin ay taariikhdu raadraacdo, sida qoraallo, dhaqan haraa ah iyo waxii la mid ah.",
          "Inkastoo aan raadreebyo badan laga hayn dadkii degaankan ku kala dambeeyay ama qoraallo laga raadraaco taariikhdiisii hore, haddana wax unbaa ka haray oo raadinta taariikhda looga ambaqaadi karo.",
          "Reer-guuraannimada Soomaalida iyo in aysan yeelan maamul mideeya oo laga wada danbeeyo, ayaa sababay la’aanta diiwaanno iyo taariikh-qoris rasmi ah, sidoo kalena xadaysay raad-reebyada degelbaariseed ee ay ka tageen.",
          "Inta aannan gudaha u gelin raadreebyadaas iyo warbixintooda; Su’aasha isweydiinta leh ayaa waxa ay tahay marka laga yimaado shaahid&sheeko, maxaa kaloo taariikhda loo cuskudaa oo laga dhex akhriyaa?",
          "Waana halkaan meesha aan kusoo bandhigayno culuumta taariikhda lagu kabo ee baritaarta.",
          "Aqoonta aadanuhu waxa ay isku suran tahay sida laamaha geedka oo kale, oo majiro cilmi keligiis istaagi kara, kana maarmi kara qaybaha kale ee aqoonta.",
          "Cilmiga taariikhduna waxa uu harsadaa dalladda “Culuumta Bulshada iyo Aadanaha”, halkaas oo uu kula falgalo dhawr cilmi oo kale.",
          "Annaga oo aannan wada koobayn, kuna fogaanayn tafaasiisha culuumtaas, aan inta ugu muhiimsan iyo dahaarka kore kasoo qaadanno.",
          "Sinji-aqoodka ama (Anthropology) ayaa ah cilmiga ugu horreeya ee gorodda la galaya taariikhda, wax badanna ay wadaagaan.",
          "Waana cilmiga baara aadanaha: noloshiisa, dhaqankiisa iyo sida ay bulshooyinku u kobceen.",
          "Waxaa hoos yimaada oo ku xariira cilmigaas, cilmiga lagu magacaabo Isirka-bulshada ama (Ethnology) kaasoo diiradda saara is-barbardhigga dhaqammadda bulshooyinka, tadawurka hiddaha iyo sidoo kale sida ay dhaqammadaas isula falgalaan.",
          "Waxaa soo hoos galaya dhaqammada iyo caadooyinka duugta iyo xabaalka, farshaxannada, qaab-dhaladka afafka iyo hidda-afeedka ummadaha.",
          "Prof. Mansuur wuxuu sheegay in aqoonyahanno reer galbeed ah, ay muddo qarni ka badan baarayeen hidda-afeedka Soomaalida oo ay ka soo xigteen odayaal reer-guuraa ah.",
          "Labadaas cilmi waxaa soo saddexeeya cilmiga afafka ama (Linguistic), oo ah cilmiga faaqida asalka iyo qaab dhaladka afafka iyo sida loo beheeyaba.",
          "Afkuna waa sida noolaha oo kale, oo waa uu koraa, waana isbeddelaa, horumaraana, hadba xaaladaha goobta iyo waqtiga asagoo la jaanqaadaya.",
          "Cilmiga afafka waxaa soo raaca cilmi si gaar ah u baara taariikhda afafka iyo sooyaalkooda oo loogu yeero (Philology), kolba fogaanta xilliga la darsayo taariikhdiisa, muhiimad gaar ah ayay sii siinaysaa cilmigan, oo qoraallada taariikhda lama fahmi karo ayadoon la furfurin afka ay ku qoran yihiin.",
          "Waxaa kaloo jira cilmiga akhrinta farihii hore ama (Paleography), kaas oo naga caawinaya akhrinta iyo hikaadinta farta si aan taariikhda ku qoran usoo guurinno.",
          "Fadhigeennii hore ayaan kusoo lafa-gurnay sida ereyga “Punt” looga dhex baadigoobayo afkii masaarida hore iyo in aysan lahayn shaqallo, magacaasna loo qoray \"Pwnt\".",
          "Shantaas cilmi keddib, waxaan u imaanaynaa cilmiga ugu muhiimsan uguna macquulsan ee taariikhda lagu kabo ama laga dhex akhristo, la’aantiisna xalqado badan oo taariikhda kamid ah la waayayo.",
          "Waa Cilmiga degel-baarista ama (Archeology).",
          "Degelbaaris ama raad-awal-aqoolayn waa barashada taariikheed iyo dhaqan ee bulshooyinkii hore, adigoo eegaya dhismooyinkii ay ka tegeen, xabaalihii, qalabkii, agabkoodii iwm.",
          "Degelbaaruhu waxa uu ka shaqeeyaa oo uu ku hawllan yahay waa ururinta iyo diraasaynta wixii aadanuhu ka tagay oo raad ah, sida: dhismayaasha, xabaalaha, dheryaha, lacagaha iyo nooc kastoo agab ah.",
          "Juquraafiga ayaa ah culuumta ku lammaan taariikhda, oo dhulku waa fagaarihii ay taariikhdu ku samaysmaysay, in lagu barbar wadana kama maarmayso marka laga hadlayo dhacdooyinka taariikhda, sidii aan usoo tixraacnay oo kale safarkii Roomaanka ee xeebaha Soomaaliya, oo tilmaamihii dhuleed ee ay sheegeen aan isku dayaynay in aan waafajinno magaalooyinka Soomaaliyeed ee maanta la yaqaanno.",
          "Waxaa kaloo asna door muhiim ah ka qaata taariikhda cilmiga lacagaha ama “Numismatics”, kaasoo diraaseeya taariikhda lacagaha, naqshadaha, sawirada madaxda iyo boqorada ee ku xardhan, iyo dhaqammada la xariira.",
          "Oo haraadiga lacagaha shiinaha ee laga helay qaybo kamid ah Bariga Afrika, waxa ay ina tusaysaa xiriirka ganacsi ee ka dhexeeyay labadaas degel.",
          "Annga oo intaas uga harayna tixidda culuumtaas, waxa aan soo dulmarnay illaa siddeed cilmi oo taariikhda kab u ah, la’aantoodna wax badan laga dul tallaabsanayo:",
          "• Sinji-aqoodka (Anthropology)",
          "• Isirka-bulshada (Ethnology)",
          "• Afafka (Linguistic)",
          "• Taariikhda afafka iyo sooyaalkooda (Philology)",
          "• Akhrinta farihii hore (Paleography)",
          "• Degel-baarista (Archeology).",
          "• Juquraafiga",
          "• Lacagaha “Numismatics”.",
          "Haddaba, sidee culuumtaas taariikhda looga dhex akhrisan karaa? Kaalin intee le’eg ayayse ku leeyihiin?",
          "Mar uu ka jawaabayay su’aasha ah: “Xagee bay Soomaalidu ka timid?”, ayaa Prof. Cabdalla Cumar Mansuur waxa uu yiri asagoo muujinaya muhiimadda isu-geynta culuumtaan ay u leedahay ka salgaaridda taariikhdaas:",
          "“Runtii ma aha su'aal fudud oo looga jawaabi karo labo erey, sida ay jecelyihiin dad badani. Haddaan rabno in aan helno jawaab maangal ah oo aan ku salaysnayn laablakac, waa inaan ka wardoonnaa culuunta ku shaqa leh arrintaas iyo wax la mid ah, sida daraasaadka taariikhda af Soomaaliga, raadad degelbaariseed iyo qayb hiddaha ka mid ah.. Haddaba waxaan halkan ku soo koobaynaa daraasadihii aqoonyahannada baarta, guud ahaan, dadka isirkooda, hiddahooda iyo xadaaradahoodii hore (ethnologists, anthropologists) iyo weliba taariikhyahannada”.",
          "Isu-geynta culuumtaas waxaa kaloo ay inoo dheellitiraysaa warinta iyo soo gudbinta xaqiiqooyinka taariikheed.",
          "Aan hal tusaale soo qaadanno.",
          "Ustaad Dhoorre wuxuu qoray in sahamiyihii Talyaaniga ee la odhan jirey Luigi Robecchi uu gobolka Bari kula kulmay oday Soomaaliyeed oo qoday xabaalaha dad hore ee ku yaal meel u dhow Waadi Abgaal, xabaalahaas gudahoodana uu ku arkay qalfoofta dad ka waaweyn kuwa Soomaalida maanta nool.",
          "Sheeka-xariirada Soomaaliyeedna waxaa afka ka haya warka rag xoog badan oo lixaad weyn, oo reer Tiirri la odhan jirey, ayna kamid ahaayeen Xabad Ina Kamas iyo Biriir Ina Barqo.",
          "Fikradda ah in dadkii hore ay ahaayeen ummad aad u lixaad weyn oo xoog badan, taasna ay u oggolaatay in ay dhisaan taallooyin waaweyn iyo dhismayaasha cajiibka ah, waxaa gaashaanka u daruuray oo iska diiday Caalimkii weynaa ee Ibnu Khalduun ee noolaa qarnigii 14aad, oo waa asagii lahaa:",
          "«ولا تَتَوَهَّمْ ما تتوهَّمُهُ العامَّةُ أنَّ ذلك لعظم أجسام الأقدمين عن أجسامنا ... فَليس بين البشر في ذلك كبير بون، كما تجد بين الهياكل والآثار»",
          "Oo macneheedu yahay “iska illaw warka caamada ee ah in ummaddihii inaga horreeyay ay aad inooga qara weynaayen, tobaneeyo jeerna ay nagu laba jibbaarmi kareen, farqi weyn oo aadanaha u dhexeeyana majiro hor&gadaalba, sida laga dheehan karo dhismayaasha iyo raadadka ay ka tageen”.",
          "Annaga oo hadalka Ibn Khalduun sax&khalad toonna ula ban-baxayn, waxa uu inoo caddaynayaa sida taariikhyahanku raadadka bulshooyinka iyo wixii ay ka tageen uu caddayn uga dhigan karo.",
          "Intaas annaga oo uga soo gudbayna qaybta hore ee fadhigeenna ee ku salaysnaa faaqididda culuumta kaabta cilmiga taariikhda ee lala akhriyo.",
          "Aan u gudubno qaybta kale ee fadhigeenna oo aan ka jawaabno maxaa raad ah oo degelka Soomaaliyeed laga helay?"
        ]
      },
      {
        "heading": {
          "en": "Archaeological traces in the Somali land",
          "so": "Raadreebyada degel-baariseed ee geyiga Soomaaliyeed"
        },
        "en": [
          "Scattered across the Somali regions are archaeological traces whose history is very old.",
          "As Dr. Sada Mire, a scholar who specialises in archaeology, has stressed, archaeology in the Horn of Africa is still in its infancy, much haze hangs over it, and attempts to interpret it contain many contradictions.",
          "She said that more than 200 archaeological sites have been found, most of them in the northern regions.",
          "Those traces, most of which are found in the northern areas and around them, include: monuments, ancient graves, writing on rock faces, carvings and paintings, broken pottery and cups, and metal coins found in many parts of the Somali regions.",
          "Let us begin with the monuments:",
          "The British explorer Swayne, who travelled the country at the end of the 19th century, wrote that on top of almost every visible hill there stands a stone monument.",
          "Dr. Sada Mire said that these monuments are spread across the whole country, and in some places they stand in rows, such as along the Red Sea coast between Xiis and Maydh in the Sanaag region.",
          "Some of these monuments are stones piled on top of each other, and some are buildings standing upright; the tallest are 10 metres high and 10 metres wide.",
          "Under the monuments that have been excavated, human bones, broken clay vessels and other objects have been found.",
          "Prof. Mansuur, quoting the historian Cali Cabdiraxmaan Xirsi, wrote:",
          "\"Some of the monuments found in the north of Somalia appear to have been built in an informal pyramid shape. And inside them were found, as in the pyramids of Egypt, the objects that by custom were placed inside the grave, beside the dead.\"",
          "Beside those monuments stand stone pillars (stelae) used to mark graves.",
          "The archaeologist David Phillipson holds that the custom of marking graves with pillars was widespread in north-east Africa between 5,000 and 2,000 years before the birth of the Prophet Jesus (peace be upon him).",
          "Monuments of this kind have been found in the regions of Bari, Nugaal, Sanaag, Sool, Togdheer, Galgaduud, Bay as far as Gedo, and Mandheera.",
          "Besides those monuments, among the traces found in great numbers in the Somali land are writings and pictures carved into rock faces.",
          "Dr. Sada Mire noted that more than 70 sites with carved pictures have been reported in the Somali regions.",
          "Among those sites:",
          "The Laas Geel rock shelter, 37 miles from Hargeisa, where paintings of cattle were seen that archaeologists estimate were made 5,000 years ago.",
          "On a rock face in eastern Sanaag between Laasqoray and Ceelaayo, called Karinheegane, are carved: long-horned cattle, people carrying swords and shields, and weapons made up of bow and arrow.",
          "Under the pictures is written a script that is not understood.",
          "Xumborogob, a rock shelter near Taleex, has painted on its wall: livestock, wild animals, game, people and writing.",
          "Godxardhane, 13 km from Ceel-Afweyn: on its western wall are painted people on horses, camels, lions and other things.",
          "The Dhambalin rock shelter, found in 2007, is the only site in the Somali land where pictures of sheep and goats are clearly carved.",
          "At Dacawaale and Dhaymoole in the Sheikh district is painted something that looks like a lunar calendar made up of 28 days, a new moon and a full moon.",
          "Sabeeno Furte, near Ceerigaabo, has carved on it ridden horses and camels carrying loads, in the form of a travelling caravan.",
          "And many other sites spread across the Somali regions.",
          "Also among the traces found in the Somali land are graves built in different ways, such as: monuments, mounds of earth, graves built of large stones, and standing pillars.",
          "Among those traces:",
          "At Ballaadi, near Bosaso, there is a burial ground 3 km wide, the largest burial site found in East Africa.",
          "Legend holds that a queen known as Araweelo is buried at that site.",
          "At Hug, a hilly site in the east of the Borama area, many graves have been found, and a path cut into the hill that reaches up to its top.",
          "At Herirad and Hore, in the Ciisaha area of Djibouti, ancient graves have been found with carved stones standing in front of them, some of which appear to have the shape of the male organ.",
          "At Buur Haybe, near the Buur Hakaba district, from under a rock called Gogoshiisaqabe the skeletons of 12 people were excavated; in the head of one of them a stone arrowhead was lodged.",
          "Between Sheikh and Burco there are many graves with carved pillars standing on them, on which are drawn sun symbols, geometric shapes and pictures of livestock.",
          "At Ximan, in the Sheikh district, the grave pillars reach a height of about one metre.",
          "Dr. Sada Mire said that at the site of Aw-Barkhadle, 30 km east of Hargeisa, a grave was found with a pillar standing on it carved with a cross, which she dated to the 4th to 7th centuries CE, a time coinciding with the Kingdom of Aksum in the Habesha lands.",
          "The grave traces found in the Somali land are divided into those from before Islam and those from after it: for the time before Islam there is no single form shared by the graves, or way people were buried, while in the time of Islam and after, a resemblance appears among the graves.",
          "The archaeologist Curle said that the graves face east or west, so that the body is laid on its right side with the face turned towards the qibla."
        ],
        "so": [
          "Waxaa deegaannada Soomaaliyeed ku filiqsan raadad degelbaariseed oo taariikhdoodu ay aad u facweyn tahay.",
          "Sida ay hoosta ka xarriiqday Dr. Sada Mire oo ah aqoonyahanad ku takhasustay Arkiyoloojiyadda, degel-baarista geeska Afrika ayaa weli ugub ah, hummaag badanna dul hoganayo, isku dayga fasiraaddoodana ay is-burin badani ku jirto.",
          "Waxayna sheegtay in in ka badan 200 oo goobood oo degel-baariseed la helay, badankoodna ay ku yaallaan gobollada waqooyi.",
          "Raadreebyadaas oo intooda badan laga helo deegaannada waqooyi iyo hareerahooda, waxaa kamid ah: taallooyin, xabaalo hore, far ku qoran gebiyo, xarar iyo sawirro, jajabka jalxadaha iyo fijaanno, lacag bir ah oo laga helay meelo badan oo kamid ah deegannada Soomaaliyeed.",
          "Aan ku bilawno Taallooyinka:",
          "Sahamiyihii Ingiriiska ahaa ee Sweyne oo dalka maray dhammaadkii qarnigii 19aad, ayaa qoray in ku dhowaad buur kasta oo muuqata, ay dusheeda saaran tahay taallo dhagxaan ah.",
          "Dr. Sada Mire waxa ay sheegtay in taallooyinkaasi ay ku baahsan yihiin dalka oo dhan, meelaha qaarkoodna ay saf ku jiraan, sida liidka xeebta Badda Cas ee u dhaxeeya Xiis iyo Maydh ee gobolka Sanaag.",
          "Taallooyinkaas qaar waa dhagxaan la is dul-saaray, qaarkoodna waa dhismo kor u taagan, kuwa ugu dheer dhererku waa 10mitir, ballacuna waa 10mitir.",
          "Taallooyinka la faagay hoostooda waxaa laga helay lafo dad, jajab maacuun dhoobo ka samaysan iyo alaabo kale.",
          "Prof. Mansuur, isagoo ka soo xiganaya taariikhyahan Cali Cabdiraxmaan Xirsi, ayaa qoray:",
          "\"Taallooyinka laga helo Soomaaliya xaggeeda woqooyi qaarkood waxay u muuqdaan in loo dhisay qaab ahraam aan rasmi ahayn. Dhexdoodana waxaa laga helay, sida ahraamta Masaarida, alaabta caado ahaan qabriga gudihiisa la dhigi jirey, maydka dhiniciisa.\"",
          "Taallooyinkaas waxaa la ag qotomiyay tiirar dhagax ah (stelae) oo xabaalaha lagu calaamadeeyo.",
          "Degel-baare David Phillipson waxa uu qabaa in dhaqanka tiirarka xabaalaha lagu calaamadeeyo uu ku faafsanaa Waqooyi-bari Afrika intii u dhaxaysay 5,000 illaa 2,000 sano ka hor dhalashadii Nabi Ciise CS.",
          "Gobollada Bari, Nugaal, Sanaag, Sool, Togdheer, Galgaduud, Baay illaa Gedo iyo Mandheera ayaa laga helay taallooyinka caynkaan ah.",
          "Taallooyinkaas ka sokow, waxaa kamid ah raadreebyada sida faraha badan looga helay geyiga Soomaaliyeed qoraallo iyo sawirro lagu xardhan gebiyada.",
          "Dr. Sada Mire waxa ay xustay in in ka badan 70 goobood oo xaradh sawirro leh laga soo sheegay deegaannada Soomaalida.",
          "Waxaa kamid ah goobahaas:",
          "Gebiga Laas-Geel oo Hargaysa u jira 37 mayl, waxaa lagu arkay sawir lo’aad oo degelbaarayaashu ay ku qiyaaseen in la sameeyay 5kun oo sano muddo haatan laga joogo.",
          "Gebi ku yaal Bariga Sanaag inta u dhaxaysa Laasqoray iyo Ceelaayo oo lagu magacaabo Karinheegane waxaa ku xardhan: lo’ geeso dhaadheer, dad wata seefo iyo gaashaamo, iyo hub ka kooban qaanso iyo fallaar.",
          "Sawirada hoostooda waxaa ku qoran far aan la garanayn.",
          "Xumborogob oo ah gebi ku yaalla agagaarka Taleex waxaa derbigiisa ku sawiran: duunyo, dugaag, ugaar, dad iyo farqoraal.",
          "Godxardhane oo 13km u jira Ceel-Afweyne, derbiga dhinaca galbeed waxaa ku sawiran: dad ku jooga fardo, geel, libaaxyo iyo waxyaabo kale.",
          "Gebiga Dhambalin oo la helay 2007-dii ayaa ah goobta keliya ee dhulka Soomaaliyeed si muuqata loogu xardhay sawirada idaha iyo riyaha.",
          "Dacawaale iyo Dhaymoole ee degmada Shiikh, waxaa ku sawiran wax u eg jadwal-dayaxeed ka kooban 28 maalmood, bil dhalad ah iyo dayax buuxa.",
          "Sabeeno Furte oo u dhow Ceerigaabo waxaa ku xardhan fardo la fuushan yahay iyo geel rar sida, qaab socod safarna leh.",
          "Iyo goobo kale oo badan ku fidsan deegaannada Soomaalida.",
          "Waxaa kaloo kamid ah raadreebyada laga helay geyyiga Soomaaliyeed xabaalo siyaabo kala duwan loo yagleelay sida: taallooyin, tuur dhoobo ah, xabaalo dhagxaan waaweyn lagu dhisay, iyo tiirar taagan.",
          "Waxaana kamid ah raadreebyadaas:",
          "Ballaadi oo u dhaw Boosaaso waxaa ku yaalla gebi-xabaaleed ballaciisu gaarayo 3km, waana rug-xabaaleedda ugu baaxadda weyn ee laga helo Afrikada Bari.",
          "Waxaa sheekoxariirada lagu hayaa in goobtaas ay ku aasan tahay boqorad loo yiqiin Araweelo.",
          "Hug oo ah rug buuraley ku taalla deegaanka Boorame dhankiisa Bari, waxaa laga helay qubuuro fara badan, iyo wadiiqo loo jeexay oo gaaraysa illaa buurta dhaladeeda.",
          "Herirad iyo Hore oo ku yaalla deegaanka Ciisaha ee Jibuuti, waxaa laga helay qubuuro hore oo ay hortooda ka taagan yihiin dhagxaan la qoray, oo qaarkood u muuqdaan qaabka xubinta taranka ee ragga.",
          "Buur Haybe oo ku taalla degmada Buur Hakabe agteeda, dhadhaab ku taalla oo la yiraahdo Gogoshiisaqabe ayaa hoosteeda laga soo faagay 12 qof qalfooftood, Midkood fallaar dhagax ka samaysan ayaa madaxa ugu taagneyd.",
          "Inta u dhaxaysa Sheekh iyo Burco waxaa ku badan qubuuro ay ku taagan yihiin tiirar la xardhay, oo ay ku sawiran yihiin calaamado qorraxeed, kuwo joomateri ah, iyo sawirro xoolo.",
          "Ximan oo hoos timaadda degmada Sheekh, tiirarka xabaaleheedu waxa ay dhererkoodu gaarayaan qiyaastii hal mitir.",
          "Dr. Sada Mire waxa ay sheegtay in goobta Aw-Barkhadle oo 30km Hargaysa bari ka xigta, laga helay qabri uu ku taagan yahay tiir ay ku xardhan tahay iskutallaab, taasoo ay ku qiyaastay qarniyadii 4aad illaa 7aad ee Miilaadiga, waqti ku beegan xilligii Boqortooyadii Aksum ee dhulka Xabashida.",
          "Raadreebyada xabaalaha geyiga Soomaaliyeed laga helo ayaa loo qaybiyaa kuwa ka horreeyay Islaamka iyo kuwa ka danbeeyya, oo wixii Islaamka ka horreeyay ma jiro hab mideysan oo ay ka siman yihiin xabaalaha ama sida dadka loo aasi jirey, halka xilligii Islaamka iyo wixii ka danbeeyay ay ka muuqdaan xabaalaha isu-ekaansho.",
          "Degelbaaraha Curle ayaana sheegay in xabaaluhu ay u jeedaan bari ama galbeed, si maydka dhinaciisa midig dhulka loo dhigo, wejiguna qiblada ugu jeensado."
        ]
      },
      {
        "heading": {
          "en": "Ruined towns",
          "so": "Burburka magaalooyinkii hore"
        },
        "en": [
          "Beyond those graves, there are also the ruins of ancient towns found in the Somali land.",
          "Most of these ancient towns are dated to the time after Islam reached this region, but we do find one or two attributed to the time before Islam.",
          "In the north-east, where the ships of Hatshepsut anchored, as we described in our previous session, lies the town of Daamo.",
          "The British archaeologist Chittick found pots at Daamo like those the Romans used.",
          "At Xaafuun in the Bari region, and at Xiis in the Sanaag region, objects have been found like those the Romans used from the first to the third centuries CE, including pots and glass vessels."
        ],
        "so": [
          "Marka laga soo gudbo xabaalahaas, waxaa iyana jira burbur magaalooyin hore oo laga helo geyiga Soomaaliyeed.",
          "Magaalooyinkan qadiimka ah ayaa intooda badan lagu xadeeyay wixii ka danbeeyay markii Islaamku soo gaaray gobolkan, waxaanse helaynaa hal iyo labo loo nisbeeyo Islaamka kahor.",
          "Waqooyi-bari, meeshii ay ku xirteen doomihii Hatshepsut ee aan fadhigeennii hore kaga soo warrannay, waxaa dhacda magaalada Daamo.",
          "Degel-baaraha Ingiriiska ah ee Chittick ayaa Daamo ka helay dheryo la mid ah kuwii Roomaanku isticmaali jireen.",
          "Xaafuun oo gobolka bari ah, iyo Xiis oo gobolka Sanaag ah, waxaa laga helay alaabo la mid ah kuwii Roomaanka qarnigii koowaad illaa kii saddexaad ee Miilaadiga ay adeegsan jireen, oo isugu jira dheryo iyo quraarado."
        ]
      },
      {
        "heading": {
          "en": "Who left these traces?",
          "so": "Yaa ka tegay raadreebyadan?"
        },
        "en": [
          "After that detail and that long list, let us come to the answer to the question: WHO LEFT THESE TRACES?",
          "There is nothing that clearly shows who left those traces. But there are signs showing that most of them were made by people who mostly came from outside.",
          "Some historians have pointed out that the Somali coastal region, in the time before Islam, was colonised and ruled by the Phoenicians or the Himyarites.",
          "Prof. Cabdalla Cumar Mansuur holds that the ruins of these towns are mostly in the coastal areas and along the coast, while the traditional way of life of the Somali was mostly livestock herding, and their real homeland was the interior of the country, where they found water and pasture for their livestock.",
          "And this can be taken as a sign that the Somali of old did not make those traces alone.",
          "The question of the monuments, too, is much disputed: who built them and left those traces.",
          "Some people believe that the people of old built those monuments over the graves of their leaders.",
          "These ancient people are called the Tiirri, and from this comes the name Taallo-Tiirriyaad or Xabaal-Tiirriyaad (Tiirri monuments, Tiirri graves).",
          "The Tiirri are described as having been:",
          "• Very tall people of great size",
          "• Giants who oppressed and killed people",
          "• People who lived in and ruled the north-eastern regions",
          "These three features by which the Tiirri are described recur in different ways in Somali through the use of the word Tiirri, and much has come down about them in oral heritage.",
          "Without going further into those details of the Tiirri, it becomes clear to us that when we weigh up both the traces and the oral heritage, there is something in the story of these people.",
          "And so it becomes right to ask ourselves: if the Tiirri did exist, where did they originally come from?",
          "The Italian researcher Enrico Cerulli divided these monuments, looking at their construction, into two or three different types. And this means that the monuments were built at different times.",
          "It may be that some of these monuments were built by people who came from, or had strong ties with, ancient Egypt; as we mentioned, some monuments were made in a form resembling the structure of the pyramids of Egypt, and inside them, as in some pyramids, the objects placed beside the dead were found.",
          "Prof. Cabdalla Cumar Mansuur looks at it from the side of language, and says:",
          "\"But if we look at the word tiirri from its form, it resembles the name of the famous city known as Tiri/Tyre, which for the Phoenicians was the centre of trade and of the navy.",
          "\"So it may be that the name Tiirri is connected with the name Tyre, since it is thought that the Phoenicians reached, or even ruled part of, the coasts of northern Somalia, before the Himyarite Arabs.\"",
          "With that we end our presentation and examination of the archaeological traces found at many sites in the country."
        ],
        "so": [
          "Faahfaahintaas iyo tixiddaas dheer keddib, aan u nimaanno jawaabta su’aasha ah: YAA KA TEGAY RAADREEBYADAN?",
          "Lama hayo wax si cad u muujinaya cidda ka tagtay raadadkaas. Waxaase muuqata calaamado tilmaamaya in badankood ay sameeyeen dad badankoodu dibadda ka yimid.",
          "Taariikhyahannada qaar ayaa waxa ay tilmaameen in deegaanka xeebaha Soomaaliyeed, xilligii Islaamka ka hor, ay gumaysteen kana taliyeen Fiinaqiyiintii ama reer Ximyar.",
          "Prof. Cabdalla Cumar Mansuur waxa uu qabaa in burburka magaalooyinkan uu ku badan yahay deegaannada xeebaha iyo deexda, halka Soomaalida dhaqankeeda sooyaalka ahina uu u badnaa xoolo-dhaqasho, deegaankooda rasmiga ahna uu ahaa dalka gudihiisa oo ay biyo iyo baadba uga heli jireen xoolahooda.",
          "Taasina loo cuskan karo in Soomaalida ab’ogaaga ah aanay keligood samayn raadreebyadaas.",
          "Arrinta taallooyinka ayaa ayana muran badan ku jiraa cidda dhistay ee raadreebyadaas ka tagtay.",
          "Dadka qaar ayaa aamminsan in dadkii hore ay taallooyinkaas ka dhisi jireen xabaasha madaxdooda.",
          "Dadkaas hore ayaa waxaa lagu magacaabaa reer Tiirri, halkaasna uu ka yimid magaca Taallo-Tiirriyaaad ama Xabaal-Tiirriyaad.",
          "Waxaa reer Tiirri lagu sifeeyaa in ay ahaayeen:",
          "• Dad aad u dhaadheer oo lixaad weyn",
          "• Manaxayaal dadka gumaysta oo laaya",
          "• In ay degganaayeen oo ka talin jireen gobollada waqooyi-bari",
          "Tilmaamahaan saddexda ah ee reer Tiirri lagu sifeeyay ayaa Afsoomaaliga siyaabo kala duwan ugu soo noq-noqda ayadoo loo adeegsanayo ereyga Tiirri, hidde-afeedkana wax badan ayaa kaga soo arooray.",
          "Annaga oo aannaan tafaasiishaas reer Tiirri gudaha usii galayn, waxaa inoo caddaanaysa in marka aan qiimeynno raadadka iyo hidda-afeedkaba in dadkaas warkoodu wax ka jiro.",
          "Sidaas awgeedna ay daw noqonayso in aan is weydiinno su’aasha ah Reer Tiirri haddayba jiraan, asalkoodii hore xaggay ka yimaadeen?",
          "Cilmi-baaraha talyaaniga ah ee Enrico Cerulli ayaa u qaybiyay taallooyinkaas, isagoo ka eegaya xagga qaabdhismeedkooda, labo ama saddex nooc oo kala duwan. Taasina waxay la micna tahay in xilliyo kala duwan la dhisay taallooyinkaas.",
          "Waxaa dhici karta in taallooyinkaas qaarkood ay dhiseen dad ka yimid ama xiriir xoog leh la lahaa Masaaridii hore, oo waa taan soo xusnay in taallooyinka qaarkood loo sameeyey si u eg qaabdhismeedkii ahraamta Masar, dhexdoodana, sida ahraamta qaarkood, laga helay agabka la agdhigi jiray maydadka.",
          "Prof. Cabdalla Cumar Mansur ayaa milicsanaya dhanka afka, oo wuxuu leeyahay:",
          "“Haddiise ereyga tiirri aan ka eegno dhanka qaabkiisa wuxuu u egyahay magaca magaaladii caanka ahayd oo loo yiqiin Tiri/Tyri oo Fiiniqiyiinta u ahayd xarunta ganacsiga iyo ciidanka badda.",
          "“Haddaba waa dhici kartaa in magaca Tiirri uu xiriir la leeyahay magacaa Tyri, maadaama loo malaynaayo in Fiiniqiyiintu ay soo gaareen amaba wax ka xukumeen xeebaha woqooyiga Soomaaliya, Carabta reer Ximyar ka hor”.",
          "Annagoo intaas uga harayna bandhigga iyo lafa-gurka raadadka degelbaariseed ee goobo badan oo dalka kamid ah laga helay."
        ]
      },
      {
        "heading": {
          "en": "What the traces tell us",
          "so": "Waxa ay raadreebyadu inoo sheegayaan"
        },
        "en": [
          "So, when we bring all those traces together, what do they tell us?",
          "The rock art and its paintings bear witness that in a distant age this land was home to livestock-herding people, who kept a mix of cattle, sheep, goats, camels and horses, and also that hunters lived in the area.",
          "The writings of the ancient Egyptians, the pyramid-like monuments, and the Greek and Roman objects found at Daamo, Xaafuun and Xiis confirm for us the foreign trade relations the civilizations of the world had with this region.",
          "From these monuments spread across the coastal areas and along their shores we can conclude that at certain points in history those areas were ruled by foreign nations who reached the Somali coasts.",
          "In conclusion, the archaeological traces of the Somali land are still untouched: they have not been properly excavated, and for what is known, many studies still remain to be done.",
          "If this heritage is properly researched and recorded, there is no doubt that it will help us understand our past.",
          "But the danger comes from the fact that many of the sites in which that history is buried face looting, illegal digging, and the buildings of towns that keep spreading and being settled.",
          "And every rock face, and every stone that is lost, is a page of history lost to us."
        ],
        "so": [
          "Haddaba, marka aan isku geyno raadreebyadaas oo dhan, maxay inoo sheegayaan?",
          "Farshaxannada gebiyada iyo sawirradooduba waxa ay inooga marag kacayaan in saman fog geyigaan ay ku noolaayeen dad xoolo dhaqato ah, oo meesin isugu jirta lo’, ido, riyo, geel iyo fardaba ay dhaqan jireen, sidoo kalena ay ugaarsato deegaanka degganaayen.",
          "Qoraallada masaaridii hore, taallooyinka ahraam-u-ekayaasha ah iyo agabka Giriigga iyo Roomaanka ee laga helay Daamo, Xaafuun iyo Xiis waxa ay inoo xaqiijinayaan xiriirradii dibadda ee ganacsiga xadaaradihii dunidu la lahaayeen deegaankan.",
          "Taallooyinkaan ku baahsan deegaannada xeebaha iyo deexdooda waxa aan ka daliilsan karnaa in deegaannadaas gooro taariikhda kamid ah ay ka talin jireen ummado shisheeye oo soo gaaray xeebaha Soomaalida.",
          "Gebagabadii, raadreebyada degel-baariseed ee geyiga Soomaaliyeed weli waa dihin yihiin, oo faagid qumman laguma samayn, inta la ogaadayna diraasado badan ayaa weli ku haray.",
          "Haddii dhaxalkan si fiican loo baaro loona diiwaangeliyo, waxaan shaki ku jirin in uu inaga caawinayo fahanka waayeheennii hore.",
          "Khatartuse waxa ay ka imaanaysaa in goobo badan oo taariikhdaasi ku duugan tahay ay waajahayaan bililiqo, qodista sharci darrada ah iyo dhismayaashii magaalada oo kusii fidaya, lana deegaamaynayo.",
          "Gebi kasta, iyo dhagax walba oo la waayana, waa bog taariikheed oo inaga lumay."
        ]
      },
      {
        "heading": {
          "en": "Closing",
          "so": "Gebagabo"
        },
        "en": [
          "Let today's session end here.",
          "Our historical journey has brought us to the first century after the birth of the Prophet Jesus (peace be upon him).",
          "In our next session we will make the connection from that time up to when Islam reached the Somali regions.",
          "Until then, goodbye, until the next session."
        ],
        "so": [
          "Halkaan ha inoo joogo fadhiga maanta.",
          "Geeddiga taariikheed waxa uu inoogu joogaa qarnigii koowaad keddib dhalashadii Nabi Ciise CS.",
          "Fadhigeenna xiga ayaan isku xir ku samayn doonnaa waqtigaas laga bilaabo illaa iyo goortii Islaamku soo gaaray deegaannada Soomaalida.",
          "Sidaas iyo Nabadgelyo, illaa fadhiga xiga."
        ]
      }
    ],
    sources: ["Divine Fertility"]
  },
  {
    id: 4,
    part: 1,
    years: { en: "1st – 6th century CE", so: "Qarnigii 1aad – 6aad NCKD" },
    title: { en: "Six Centuries Before Islam", so: "Lix Qarni ka hor Islaamka" },
    summary: {
      en: "Ptolemy's Azania and Barbaria, the trading ports of Xaafuun and Xiis, the debate over Himyar, and the struggle of Rome, Persia, Aksum and Himyar over the Red Sea.",
      so: "Azania iyo Barbaria ee Ptolemaeus, dekedaha ganacsiga ee Xaafuun iyo Xiis, doodda Ximyar, iyo loollankii Rooma, Faaris, Aksum iyo Ximyar ee Badda Cas."
    },
    details: {
      en: "Around 150 CE the geographer Ptolemy called the whole Somali coast Azania and the interior Barbaria. Excavations at Xaafuun (Opone) and Xiis (Mundu) found glass, pottery and other goods from Ptolemaic Egypt, Rome, Persia and India, showing these ports were part of the trade between East and West in the first centuries CE. Whether the Himyarites of Yemen ever ruled the Somali coast is still debated: trade across the sea is certain, but there is no firm proof of rule. In the 6th century Aksum crossed the Red Sea and ended Himyar (525 CE); Abraha's march on Mecca failed in the Year of the Elephant (about 570 CE); and Persia then drove the Habesha out of Yemen.",
      so: "Qiyaastii 150 NCKD, juquraafiyahan Ptolemaeus wuxuu xeebaha Soomaaliya oo dhan ku magacaabay Azania, dhulka gudahana Barbaria. Qodisyadii Xaafuun (Opone) iyo Xiis (Mundu) waxaa laga helay quraarado, dheryo iyo agab kale oo ka yimid Masartii Batlomiyiinta, Rooma, Faaris iyo Hindiya, taasoo muujinaysa in dekedahaasi qayb ka ahaayeen ganacsigii bariga iyo galbeedka qarniyadii ugu horreeyay ee Miilaadiyada. In reer Ximyar ee Yaman ay xeebaha Soomaaliya ka talin jireen weli waa la isku hayaa: ganacsiga iyo bad-iskaga-tallawgu waa hubaal, balse caddayn rasmi ah oo talis muujinaysa lama hayo. Qarnigii lixaad, Aksum ayaa badda ka tallawday oo soo afjartay Ximyar (525 NCKD); duullaankii Abraha ee Makka wuxuu ku fashilmay Sannadkii Maroodiga (qiyaastii 570 NCKD); keddibna Faaris ayaa Xabashida ka saartay Yaman."
    },
    // The FULL script of the episode ("Xalqadda 4aad"): Somali word for word, with an English translation.
    article: [
      {
        "heading": {
          "en": "Opening",
          "so": "Furitaan"
        },
        "en": [
          "The year is about 520 CE, and the place is the western coast of the Red Sea, a port called Adulis.",
          "It is a noisy port, and very busy: tied up there are ships of many kinds, from Egypt, India and the other shore of the Red Sea, the Arabian Peninsula.",
          "Goods of every sort are exchanged, and the porters are loading or unloading goods including elephant ivory, cloth and different kinds of incense.",
          "But these days the role of Adulis as a trading port has changed: the king of the Empire of Aksum has sent a strong army, and ships to carry it and take it across the sea.",
          "The army is being sent to attack and conquer the Himyarite state that ruled the south of the Arabian Peninsula, on the other shore of the Red Sea.",
          "In those same days, the head of the town, called Abbas, summoned two foreign traders who happened to be in the town at the time.",
          "One of the two men was named Cosmas; he was a seafaring trader who had travelled through many lands and crossed many of the seas known in the world of that time.",
          "The governor of the town told him that the king of Aksum had asked for a copy to be made of a Greek inscription carved on a stone that stood in the town.",
          "That inscription, carved centuries earlier by one of the kings of Aksum, recorded that king boasting that he had crossed the sea, then fought the people living on the other shore, and conquered their land: people he called \"the people of Saba\".",
          "The inscription also stated that this king claimed his rule reached as far east as the land known as \"the Land of Incense\".",
          "Cosmas, the person who copied the inscription, noted in his book that the Land of Incense was known at that time as Barbaria, and that it stretched as far as the western coasts of the Indian Ocean.",
          "About half a century after the time of this story, an officer of the Aksumite army that had crossed the sea, who became king of Yemen, set out with his army towards Mecca and the Kaaba, intending to level it to the ground.",
          "That man is Abraha, whose story you all know, and the year is the Year of the Elephant, عام الفيل.",
          "How were the great powers of that time, Rome, Persia, Aksum and Himyar, competing over the sea that stretches along our country?",
          "And what part did the Somali coasts play in the events of that time?",
          "What was the role of the states of the south of the Arabian Peninsula on the Somali coasts and land?",
          "And in general, from the 1st century CE to the birth of the Prophet Muhammad, peace and blessings be upon him, what history is known of the Somali land?",
          "The answers to these questions, and many others, you will find in this session.",
          "Peace be upon you, and the mercy of God and His blessings.",
          "Welcome back, and good to be together again.",
          "In our previous session we stopped at the archaeological traces of the Somali land: the monuments, the graves, the paintings, the rock inscriptions and the ruins of ancient towns.",
          "In terms of the historical connection, in the second session we stopped at the account of the text known as the Periplus, written in the middle of the first century.",
          "From that time until the age of the Prophet Muhammad, peace and blessings be upon him, there are six full centuries.",
          "In those six centuries, in the world in general, and especially in the Horn of Africa and around it, great changes took place that altered the course of history and the way the world was governed.",
          "It was when the greatest empires of the world competed over the Red Sea and the Indian Ocean, when Persia and Rome fought over the trade routes of the world; it was when Aksum and Himyar clashed over the Gulf of Aden and the Bab al-Mandab, up to the campaign of the People of the Elephant (أصحاب الفيل), which came just before the birth of the Blessed Prophet, peace and blessings be upon him.",
          "This session, the conclusion of the first part, the ancient history of the Somali, will be the bridge by which we cross to the medieval history of the Somali.",
          "My name is Mohamed Abdulkadir Mohamed.",
          "This is \"Miyir\", the platform for raising awareness and nurturing understanding.",
          "Come closer."
        ],
        "so": [
          "Sannadku waa 520kii Miilaadiga qiyaastii, makaankuna waa xeebta galbeed ee badda cas, deked lagu magacaabo Adulis.",
          "Waa deked buuq badan, mashquulkeeduna baaxad weyn yahay, waxaa ku xiran doonyo kala duwan oo ka kala yimid: Masar, Hindiya iyo daanta kale ee Badda Cas ee Jasiiradda Carabta.",
          "Badeecooyin kala jaad ah ayaa lagu kala weydaaran, xammaaliintuna waxa ay rarayaan ama dejinayaan badeecado ay kamid yihiin: Foolka maroodiga, dharka iyo noocyada kala duwan ee udugga.",
          "Balse, Adulis deked ganacsi doorkeedu waa ka geddisan yahay maalmahan, oo boqorkii Imbaraadooriyaddii Aksum ayaa soo toomiyay ciidan xoog badan iyo maraakiibtii qaadi lahaa, baddana ka gudbin lahaa.",
          "Waxaa loo gelbinayaa ciidankaas waa in lagu weeraro laguna qabsado dawladdii Ximyar ee ka talin jirtay koonfurta Jasiiradda Carabta, waa daanta kale ee xeebta Badda case.",
          "Isla maalmahaas, duqa magaalada oo la oran jiray Abbas, ayaa u yeeray laba ganacsade oo shisheeye ah oo goortaas magaalada ku sugnaa.",
          "Labada nin mid kamid ah waxaa lagu magacaabaa Cosmas, waxa uuna ahaa ganacsade badmareen ah, dhul badan uu maray iyo bado badan oo uu iskaga gooshayna dunidii waqtigaas caan ka ahaa.",
          "Badhasaabkii magaalada ayaa u sheegay in boqorkii Aksum uu dalbaday in loosoo min-guuriyo qoraal af giriig ah oo ku xardhanaa dhagax ka taagnaa magaalada.",
          "Qoraalkaas, oo mid kamid ah boqorradii Aksum uu qarniyo kahor xardhay ayaa waxa uu ka tarjumayay boqorkaas oo ku faanaya in uu badda ka tallaabay, dabadeedna la dagaallamay dadkii degganaa daanta kale ee xeebta, dhulkoodiina uu qabsaday, waa dad uu ugu yeeray “Reer Saba”.",
          "Qoraalku waxa kaloo uu dhigayay oo boqorkaasi sheeganayay in taliskiisu gaaray illaa bariga dhulkii loo aqoon jirey “Dhulkii udgoonka”.",
          "Cosmas oo ahaa qofkii soo koobiyeeyay qoraalka ayaa waxa uu buuggiisa ku xusay in dhulka udgoonka loo yaqaannay waqtigaas Barbariya, uuna illaa xeebaha galbeed ee Badweynta Hindiya ku fidsanaa.",
          "Qiyaastii nus qarni kaddib waqtiga sheekadan, sarkaal ka tirsanaa ciidamadii Aksum ee badda ka tallaabay, noqdayna boqorkii Yaman, ayaa ciidan uu watay ula dhaqaaqay docda Makka iyo Kacbada, asaga oo damacsan in uu dhulka lasoo simo.",
          "Ninkaasi waa Abraha oo aad warkiisa wada haysaan, sannadkuna waa sannadkii Maroodiga ama عام الفيل.",
          "Sidee bay quwadaha waaweyn ee waagaas, Rooma, Faaris, Aksum iyo Ximyar, ugu loolamayeen badda dalkeenna ku teedsan?",
          "Xeebaha Soomaaliyeedse waaqicii waagaas maxay icraabnaayeen?",
          "Muxuu ahaa doorkii dawladihii koonfurta Jasiiradda Carabta ay ku lahaayeen xeebaha iyo geyiga Soomaaliyeed?",
          "Si guudse, laga soo bilaabo qarnigii 1aad ee Miilaadiyada illaa dhalashadii Nabi Muxamad, Nabadgeliyo iyo Naxariis Dushiisa ha ahaatee, maxaa taariikh laga hayaa dhulka Soomaalida?",
          "Weydiimahan iyo qaar kaloo badan, jawaabahooda fadhigan ayaad uga bogan doontaa.",
          "سلام الله عليكم ورحمته وبركاته",
          "Mar kale iyo isku soo laabasho wanaagsan.",
          "Fadhigeennii hore waxa aan soo dul-istaagnay raadreebyada degel-baariseed ee dhulka Soomaalida: taallooyinka, qubuuraha, sawirrada, far-qoraallada gebiyada iyo burburka magaalooyinkii hore.",
          "Marka isku-xirka taariikheed laga eego, fadhigii labaad ayaan ku joojinnay warbixintii dhiganihii Periplus ee bartamihii qarnigii koowaad la qoray.",
          "Laga soo bilaabo waqtigaas iyo illaa laga soo gaaro samankii Nabi Muxamad, Nabadgeliyo iyo Naxariis korkiisa ha ahaatee, waxaa u dhexeeya lix qarni oo taam ah.",
          "Lixdaas qarni waxaa adduunka ka socday guud ahaan, si gar ahaaneedna geeska Afrika iyo hareerihiisa, isbeddello waaweyn oo wax ka beddelay hab-socodka taariikhda iyo hab-maamulka dunidaba.",
          "Waa goortii ay imbaraadooriyadihii adduunka ugu waaweynaa ay ku loollamayeen Badda Cas iyo Badweynta Hindiya, waagii Faaris iyo Roomaanku ay isku hardinayeen dhabbooyinka ganacsiga adduunka; waana waagii Aksum iyo Ximyar ay isku fara-saareen gacanka cadmeed iyo baabul-mandabka, illaa laga soo gaaray duullaankii أصحاب الفيلka oo hordhac u ahaa dhalashadii Suubanaha, Nabadgeliyo iyo Naxariis Dushiisa ha ahaatee.",
          "Fadhigaan oo ah gunaanadka qaybta koowaad ee taariikhda hore ee Soomaalida, ayaa noqonaya buundo aan uga tallaabayno taariikhda dhexe ee Soomaalida.",
          "Magacaygu waa Maxamed Cabdulqaadir Maxamed.",
          "Halkani waa madasha \"Miyir\" ee kobcinta wacyiga iyo ababinta garaadka.",
          "Horey usoo dhawaada."
        ]
      },
      {
        "heading": {
          "en": "Ptolemy's geography",
          "so": "Juquraafiyadii Ptolemaeus"
        },
        "en": [
          "Let us begin in the city of Alexandria in Egypt, in the second century CE, around the year 150.",
          "There lived a Greek geographer called Claudius Ptolemaeus, whom the Arabs call Batlaymus (Ptolemy).",
          "This man wrote a book in which he described the geography of the world at that time, setting down the names of places and where they lie, and he also mapped the world using what are known as latitude and longitude.",
          "In the fourth book of his work he laid out a land he called \"the land below Egypt\", and there he listed part of the coasts of Somalia, beginning from a gulf he named \"the Avalites Gulf\".",
          "The coastal markets he listed include: Avalites… Malao… Mondu… Mosylum… Elephas… Acanna… Opone… Cape Zingis, until he reaches Rhapta, which is thought most likely to belong to the country now called Tanzania.",
          "After that list, he concluded with these words: \"The whole coast as far as Rhaptum is called Azania; and the inland country is called Barbaria, where many elephants live.\"",
          "We have already met most of the names of these coastal markets in the text The Periplus of the Erythraean Sea, a century earlier than Ptolemy, and we have already mentioned which towns stand on their sites today and the names they are known by now.",
          "Dr. Cabdiraxmaan Cali Xirsi matched them as follows: Avalites is Saylac, Malao is Berbera, Mosylum is Ceelaayo or Ras Xantaar, Elephas is Ras Filuuk, Akannai is Caluula, Serapion is Xamar, and Nikon is Baraawe.",
          "And Mondu, as Dhoorre and Dr. Dualeh Jaamac write, is Xiis, while Opone is Xaafuun.",
          "Apart from the closeness of the names and the port towns the two texts record, there is a difference in the use of the two regional names, Azania and Barbaria.",
          "The Periplus divided the coasts of Somalia into two parts:",
          "• The Berber coast, which is the Gulf of Aden and the north-east of the Indian Ocean",
          "• and the coast of Azania, which is everything south of Xaafuun, as far as the area of Rhapta in Tanzania.",
          "While Ptolemy called all the coasts of Somalia Azania, and called the inland country, away from the coast, Barbaria.",
          "Dr. Xirsi noted that in the first century the port of Muza on the coast of Yemen, known today as Mokha, which had long been the region's greatest trading centre, began to decline.",
          "Its trading role was taken over by the port of Adulis in Eritrea, and by Mosylum and Opone in Somalia, which became the place where the trade linking east and west came ashore.",
          "At the time Ptolemy was writing, the Roman Empire had reached its greatest extent, and ruled the whole circle of the Mediterranean.",
          "In the east, the Han dynasty of China held the reins of the eastern powers, especially at the far end of China.",
          "At the heart of the trade relations between east and west were the coasts of Somalia, especially those lying from above Xaafuun as far as Tajura."
        ],
        "so": [
          "Aan ka bilowno magaalada Iskandariya ee dalka Masar, qarnigii labaad ee miilaadiga, qiyaastii sannaddii 150aad.",
          "Halkaas waxaa ku noolaa juquraafiyahan Giriig ah oo la oran jiray Claudius Ptolemaeus, carabtuna ugu yeerto Badlaymuus.",
          "Ninkaasi waxa uu qroray buug uu ku sharraxay juquraadiyadda adduunka waagaas, isaga oo dhigayay goobaha magacyadooda iyo halka ay dhacaan, sidoo kalena khariiradeeyay adduunka asagoo adeegsanaya waxa loo yaqaan loolka (latitude) iyo dhigaha (longitude).",
          "Buugga afaraad ee dhiganihiisa ayuu ku qaabeeyay dhul uu ugu yeeray “dhulka ka hooseeya masar”, halkaas ayuuna ku taxay qayb kamid ah xeebaha Soomaaliya, isagoo ka bilaabaya gacan uu u bixiyay “Gacanka Avalites”.",
          "Suuq-xeebeedyada uu taxay waxaa kamid ah: Avalites… Malao… Mondu… Mosylum… Elephas… Acanna… Opone… raas Zingis, illaa uu ka gaaro Rhapta ee loo badinayo in ay dalka Tanzania maanta la yiraahdo ka tirsan tahay.",
          "Tixiddaas keddib, waxa uu kusoo gunaanaday hadalkan soo socda: “Xeebta oo dhan illaa Rhaptum waxaa lagu magacaabaa Azania; dhulka gudaha ahna waxaa la yiraahdaa Barbaria, oo ay maroodiyaal badani ku nool yihiin.\"",
          "Magacyada suuq-xeebeedyadaan ayaa intoo badan kusoo marnay dhiganihii the Periplus of the Erethrian Sea ee muddo qarni ah ka horreeyay Ptolemaeus, magaalooyinka bartooda dhaca magacyada maanta loo yaqaannana aan horey usoo xusnay.",
          "Dr. Cabdiraxmaan Cali Xirsi, ayaa isku waafajiyay sidaan soo socota: Avalites waa Saylac, Malao waa Berbera, Mosylum waa Ceelaayo ama Raas Xantaar, Elephas waa Raas Filuuk, Akannai waa Caluula, Serapion waa Xamar, Nikon-na waa Baraawe.",
          "Mondu-na, sida ay qoraan Dhoorre iyo Dr. Dualeh Jaamac, waa Xiis, halka Opone-na ay tahay Xaafuun.",
          "Marka laga yimaado isu-dhawaanshaha magacyada iyo magaalo furdooyinka labada qoraal ay dhigeen, waxaa jira kala duwanaansho ku aaddan adeegsiga labada magac-goboleed ee Azania iyo Barbaria.",
          "Periplus waxa uu qaybiyay xeebaha Soomaaliya laba qaybood oo kala ah:",
          "• Xeebta Berberiga oo ah Khooriga Cadmeed iyo Waqooyi Bari Badweynta Hindiya",
          "• iyo Xeebta Azaaniya oo ah wixii Xaafuun ka sii Koofureeya, illaa degaanka Rhapta ee Tanzania.",
          "Halka Ptolemaeus uu dhammaan xeebaha Soomaaliya ku magacaabay Azania, dhulka daakhilka ee xeebta ka fogna uu ugu yeeray Barbaria.",
          "Dr. Xirsi wuxuu xusay in qarnigii koowaad, dekedda Muza ee xeebta Yaman, oo maanta loo yaqaan Makha, oo muddo dheer ahayd xarunta ganacsiga ugu weyn ee gobolka, ay bilowday in ay hoos u dhacdo.",
          "Waxaa doorkeedii ganacsiyeed la wareegay dekedda Adulis ee Eritreeya, iyo Mosylum iyo Opone ee Soomaaliya, kuwaasoo noqday halka uu kusoo hirto ganacsiga isku xira bari iyo galbeed.",
          "Waqtigii Ptolemaeus wax qorayay, Boqortooyada Rooma waxa ay gaartay baaxaddeedii ugu weyneed, waxa ayna ka talinaysay wareegga Badda Dhexe oo dhan.",
          "Dhanka bari, boqortooyadii Han ee Shiinaha ayaa ayana xakamaha u haysay quwadaha bariga gaar ahaan cirifka Shiinaha.",
          "Xiriirka ganacsi ee bariga iyo galbeedka u dhexeeyay ayaa waxaa ubuc u ahaa xeebaha Soomaaliya, gaar ahaan kuwa dhaca wixii Xaafuun ka korreeya illaa Tajuura."
        ]
      },
      {
        "heading": {
          "en": "What the digs at Xaafuun and Xiis show",
          "so": "Waxa ay inoo sheegeen qodisyadii Xaafuun iyo Xiis"
        },
        "en": [
          "To bring to light information on the role our coasts played in the trade between East and West, since written information is scarce for us, let us open once more the archaeology of Somalia and what the land and the traces left behind have told us.",
          "Let us begin with Xaafuun and the site by which the name Opone entered history, about ninety miles south of Gardafui, the easternmost point of the African continent.",
          "The Periplus of the first century described Opone as a coastal market to which goods of various kinds were brought, and from which goods were exported, chief among them cinnamon and tortoise shell.",
          "In the 1970s, a British archaeologist called Neville Chittick carried out an excavation at Xaafuun.",
          "He found two archaeological sites:",
          "One he named West Xaafuun, near a lagoon between the peninsula and the mainland.",
          "And Main Xaafuun, which is thought most likely to be the market the Periplus mentioned and called Opone.",
          "The objects found at both sites of Xaafuun were re-examined by Matthew Smith and Henry Wright; they included: pieces of glass used by the Ptolemies who ruled Egypt in the 2nd and 3rd centuries BCE, pots that came from Persia in the time of the Parthian empire, and other objects thought most likely to have been brought from India.",
          "Chittick noted something that surprised him: that he found no sign of real settlement there, such as buildings and so on; all they saw were graves.",
          "Dr. Ducaale Jaamac drew from these archaeological studies that Xaafuun was a trading site in use from the first century BCE to the fifth century CE.",
          "He also noted that, apart from Xaafuun, there has still been no systematic research that has got to the root of the archaeological traces of the other ports the Periplus and Ptolemy mentioned.",
          "Besides Xaafuun, let us present an archaeological study made at one of the port towns we have mentioned.",
          "Between 2018 and 2020, a team of Spanish archaeologists led by Alfredo González-Ruibal and Jorge de Torres carried out research at Xiis, in the Sanaag region, and at Berbera.",
          "Xiis is the town the Periplus called Mundu, while it named Berbera Malao.",
          "At the site of Xiis they found red bowls, large pots and glass vessels of various colours that are thought most likely to come from the Romans who ruled the Mediterranean, and other objects imported from India.",
          "They dated those objects to between the first and third centuries CE.",
          "They concluded that the area was home to nomadic herders whose buying power was strong, and who took part in the trade linking east and west.",
          "These two archaeological studies, Xaafuun on the Indian Ocean and Xiis on the Gulf of Aden, underline for us that these port towns were active in the first centuries CE, and were at the centre of the trade link between the far east of India and China and the west of the Roman empire.",
          "It also comes to light that this trading activity in these markets did not give rise to settlement and town buildings that entered history; what was going on there was a trading network in which the local people brought their goods to these markets and went back with others, and there was no formal government there that all followed.",
          "This is what we mentioned earlier: that the seafarer of the Periplus described the local people as having no general government that all of them followed, and as being scattered clans, each ruled by chiefs or elders.",
          "So the question that arises is: was the trade of the Somali coasts in Somali hands? Or did foreign powers rule these coasts, and were they the chiefs being spoken of?",
          "Answering this question forces us to cross to the other side of the coast, and make a short connection.",
          "Since the information and details known about this region in this period are only a glimpse, we focus on connecting the general picture of the region's events, noting each time where and how the Somali regions interacted with those events, as far as we can reach."
        ],
        "so": [
          "Si aan usoo dhalaalinno xog la xariirta doorka ay xeebeheennu ka ciyaarayeen xiriirkii ganacsiga ee mashriq&maqrib, maadaama xogaha qoran ay inagu yar yihiin, aan dib usoo kala furno degel-baarista Soomaaliya iyo waxa uu dhulka iyo raadkii looga tegay ay inoo sheegeen.",
          "Aan ka bilawno Xaafuun iyo goobtii magaca Opone uu taariikhda u galay, oo qiyaastii sagaashan mayl Gardafuu koonfur kaga beeggan, ahna goobta ugu geesaysa ee bariga qaaradda Afrika.",
          "Periplus-kii qarnigii koowaad wuxuu Opone ku tilmaamay suuq-xeebeed la keeno alaabo kala nooc ah, lagana dhoofiyo badeecooyin ay qorfaha iyo qolofka diinku ugu horreeyaan.",
          "Toddobaadameeyadii, degel-baare Ingiriis ah oo la yiraah Neville Chittick ayaa qodis ka sameeyay Xaafuun.",
          "Wuxuu helay laba degel-baariseed:",
          "Mid uu ku magacaabay Xaafuunta-Galbeed oo ku ag taalla haro-badeed u dhaxaysa jasiirad-u-ekaha iyo dhulweynaha berriga ah.",
          "Iyo Xaafuunta-weyn oo loo badinayo in ay tahay suuqii Periplus xusay, uguna yeeray Opone.",
          "Agabka laga helay Xaafuun labadeeda degelba, waxaa dib u baaray Matthew Smith iyo Henry Wright, waxa ayna iskugu jireen: jajab quraarado ay adeegsan jireen Batlomiyiintii Masar ka talin jirtay qarniyadii 2aad iyo 3aad ee Miilaadiyada kahor, dheryo kasoo uskumay Faaris waqtiyadii imbaraadooriyaddii Barthiyiinta, iyo agabyo kale oo loo badinayo in Hindiya laga keenay.",
          "Chittick ayaa xusay arrin ka yaabisay, taasoo ah in deegaankaas aysan ka helin wax muujinaya deegaamayn rasmi ah sida dhismayaal iwm, waxa kaliya oo ay arkeenna ay ahaayeen xabaalo.",
          "Dr. Ducaale Jaamac ayaa daraasadaha degelbaaristaan kasoo xooriyay in Xaafuun ay ahayd goob ganacsi oo shaqaynaysay laga soo bilaabo qarnigii koowaad kahor miilaadiga illaa laga soo gaaro qarnigii shanaad ee miilaadiga.",
          "Wuxuu kaloo xusay in, Xaafuun mooyee, aysan weli jirin baaris nidaamsan oo ka sal-gaartay raaddadka degelbaariseed ee dekedaha kale ee Periplus iyo Ptolemaeus ay xuseen.",
          "Xaafuun ka sokow, aan soo bandhigno daraasad degel-baariseed oo laga sameeyay mid ka mid magaalo furdooyinkii aan soo xusnay.",
          "Intii u dhaxaysay 2018 iyo 2020, koox degel-baarayaal Isbaanish ah oo ay hoggaaminayeen Alfredo González-Ruibal iyo Jorge de Torres ayaa baaris ku sameeyay Xiis oo gobolka Sanaag ka tirsan iyo Berbera.",
          "Xiis waa magaalada Periplus ugu yeeray Mundu, halka Berberana uu ku magacaabay Malao.",
          "Degelka Xiis waxa ay ka heleen madiibado cas cas, dheryo waaweyn iyo quraarado midabbo kala jaad ah leh oo loo badinayo in ay Roomaankii Badda Dhexe ka talinayay ku abtirsadaan, iyo agab kale oo Hindiya laga soo waaridey.",
          "Alaabtaas ayay saman ahaan ku xadeeyeen intii u dhaxaysay qarniyadii koowaad illa saddexaad ee miilaadiga.",
          "Waxa ay ku gunaanadeen in dhulkaas ay degganaayeen reer-guuraa xoolo-dhaqato ah, oo awood-iibsashadoodu rooneed, kana qayb qaateen ganacsigii isku xirayay bariga iyo galbeedka.",
          "Labadaan degel-baaris, Xaafuun oo Badweynta Hindiya Saaran, iyo Xiis oo gacanka cadmeed saaran, waxa ay hoosta inooga xarriiqayaan in magaalo-furdooyinkaan ay hawlgal ahaayeen qarniyadii ugu horreeyay ee Miilaadiyada, halkaasna ay udub-dhexaad u ahaayeen isku xirka ganacsiga cirifka bari ee Hindiya iyo Shiinaha iyo dhanka Galbeed ee boqortooyadii Roomaanka.",
          "Waxaa sidoo kale inoo soo dhalaalaysa in dhaqdhaqaaqaan ganacsi ee suuqyadan aysan ka dhalan deegaamayn iyo dhismayaal magaalooyin oo taariikhda gala, waxa meesha ka socdana uu ahaa shabakad ganacsi oo dadka deegaanku badeecadahoodu ku keeni jireen suuqyadan, kulana soo wareegayeen kuwa kale, halkaasna uusan ka jirin maamul rasmi ah, oo laga wada danbeeyo.",
          "Waana innagii horey usoo xusnay in Badmareenkii Periplus uu ku tilmaamay dadka deegaanka in aysan lahayn maamul guud oo ay ka wada danbeeyaan, ayna ahaayeen beelo qoqoban oo mid kasta ay u taliyaan jamaamuur ama waayeello.",
          "Haddaba, su’aasha halkaas ka dhalanaysa ayaa waxa ay tahay: ganacsiga xeebaha Soomaaliya, ma Soomaali baa gacanta ku haysay? Mise quwado shisheeye ayaa xeebahan ka talin jirey oo jammaamuurtaas la sheegayay ahaa?",
          "Ka jawaabidda su’aashaanse waxa ay inagu khasbaysaa in aan xeebta dhanka kale uga tallawno, oo isku soo xir yar oo kooban samayno.",
          "Maadaama, xogaha iyo tafaasiisha deegaankan laga hayo muddadan ay afgelis uun tahay, waxa aan diiradda saaraynaa isku xirka sawirka guud ee dhacdooyinka gobolka, annaga oo xusayna hadba meesha iyo sida ay deegaannada Soomaaliyeed ula falgalayeen dhacdooyinkaas, hadba intaan ka gaarno."
        ]
      },
      {
        "heading": {
          "en": "The states of southern Arabia",
          "so": "Dawladihii koonfurta Jasiiradda Carabta"
        },
        "en": [
          "So let us glance at what was happening in the rest of the world.",
          "The northern coasts of Somalia and the southern coasts of the Arabian Peninsula are separated by a narrow strait which, as Dr. Sada Mire noted, can be crossed in one day or so; for that reason an event that is stirred up on one side has a direct effect reaching the other side.",
          "In the south of the Arabian Peninsula many states grew up one after another, whose main centre was Yemen. Among those states were: Saba, Awsan, Qataban, Ma'in, Hadramawt and Himyar.",
          "Three of those states, Saba, Awsan and Himyar, had strong relations with the Horn of Africa, and various records of them have been left.",
          "So let us set them out one by one.",
          "Saba: it was a kingdom that grew up in the south-west of the Arabian Peninsula, and its capital was the city of Ma'rib in Yemen.",
          "Archaeological excavations in central Yemen show that the civilization of this kingdom began around the tenth to twelfth centuries BCE, and lasted until the third century CE.",
          "God mentioned some of the story of this kingdom in the Qur'an: in Surat an-Naml He tells the story of what passed between the Prophet Solomon (peace be upon him) and Bilqis, the queen of Saba; and the sura named after this kingdom, Surat Saba, tells of the plenty they lived in and the progress they reached, and how, after they grew arrogant, they were tested by the bursting of the great dam of Ma'rib; it is what God said:",
          "﴿فَأَعْرَضُوا فَأَرْسَلْنَا عَلَيْهِمْ سَيْلَ الْعَرِمِ﴾",
          "The scattering caused by the flood from this dam became a proverb the Arabs use when describing people who have scattered in a way that will never bring them back together; they say:",
          "«تفرّقوا أيدي سبأ»",
          "History records that the people of Saba had strong cultural and economic relations with the Habesha government on the other side of the sea.",
          "Awsan: it was a small kingdom that grew up in the valley called Markha, in the Shabwa region of southern Yemen.",
          "At first it was an ally of the kingdom of Saba, but that alliance turned into rivalry and competition, until in the end the king of Saba, called Karib'il Watar, put an end to the kingdom of Awsan at the end of the seventh century BCE.",
          "Did the name \"Azania\", the name given to the coasts from Somalia to Tanzania, come from Awsan?",
          "Prof. Cabdalla Cumar Mansuur finds it likely that the name \"Azania\" came from the name Awsan, referring to \"Saahil Awsan\" (the Awsan coast), the name by which the coasts from eastern Somalia to Tanzania were known; and this would mean that the rule of this state reached the coasts of Somalia.",
          "The Periplus itself described part of that coast as \"the Ausanitic coast\".",
          "Himyar: this state, whose time ran from 115 BCE to the 6th century CE, was originally under the kingdom of Saba, and later inherited its government, its language and its culture.",
          "The seafarer of the Periplus left us brief information on the state of the kingdom of Himyar in the first century CE.",
          "He said that King Karba'il was the rightful king of Himyar and Saba, that his capital was Zafar, and that he had a close friendship with the Romans, sending them many gifts and envoys.",
          "Himyar was brought to an end by two invasions that came from outside:",
          "• The Aksumite invasion of the year 525 CE",
          "• And the Persian one of about 575 CE.",
          "We will describe the details of these two invasions later."
        ],
        "so": [
          "Aan haddaba yara milicsanno waxa adduunka kale ka socday.",
          "Xeebaha waqooyi ee Soomaaliya iyo xeebaha koonfureed ee Jasiiradda Carabta waxaa kala qaybiya dhabba yar oo, sida ay Dr. Sada Mire xustay, hal maalin iyo wax la mid ah la iskaga gudbo, sidaas awgeedna dhacdadii dhan ka aloosmata ay dhanka kale toos saamaynteedu usoo gaarto.",
          "Koonfurta Jasiiradda Carabta waxaa ka hanaqaaday oo iskaga danbeeyay dawlado badan, kuwaasoo xaruntooda rasmiga ah ay ahayd Yaman. Waxaana kamid ah dawladahaas: Saba, Awsaan, Qatabaan, Macin, Xadramawt iyo Ximyar.",
          "Saddex kamid ah dawladahaas, waa Saba, Awsaan iyo Ximyare, xiriirkooda geeska Afrika ayaa ahaa mid xoog badan, oo xogo kala duwan laga reebay.",
          "Aan haddaba kala dhig-dhigno.",
          "Saba: waxa ay ahayd boqortooyo ka hanaqaadday koonfur-galbeed Jasiiradda Carabta, waxaana caasimad u ahayd magaalada Ma’rib ee dalka Yaman.",
          "Qodisyada degel-baariseed ee laga sameeyay bartamaha Yaman waxa ay muujinayaan in ilbaxnimada boqortooyadan ay bilaabatay qiyaastii qarniyadii tobnaad illaa laba iyo tobnaad kahor miilaadiga, ayna xiriir ahayd illaa qarnigii saddexaad ee miilaadiga.",
          "Qaybo kamid ah wararka boqortooyadan Allah ayaa ku xusay Qur’aanka, oo waatii suuratul-Naml looga sheekeeyay qisadii dhexmartay Nabi Sulaymaan CS iyo boqoraddii Saba ee Balqiis, sidoo kale suurada loogu magac daray boqortooyadaan ee Suuratul-Saba waa ayadii lagu sheegay barwaaqa-soorankii ay ku jireen iyo horumarkii ay gaareen, markii ay kibreen keddibna, lagu jirrabay in lagu faruuray biya-xireenkii weynaa ee Ma’rib, waana tii Rabbi lahaa:",
          "﴿فَأَعْرَضُوا فَأَرْسَلْنَا عَلَيْهِمْ سَيْلَ الْعَرِمِ﴾",
          "kala firirkii fatahaadda biya-xireenkan ka dhashay ayaa carabta u noqotay maahmaah ay ku hal-qabsadaan marka ay tilmaamayaan dad u kala firdhay si aan isku soo noqo lahayn, oo waxa ay dhahaan:",
          "«تفرّقوا أيدي سبأ»",
          "Waxa ay taariikhdu xustaa in reer Saba ay xiriir dhaqan-dhaqaale oo xoog badan la lahaayeen taliskii Xabashida ee daanta kale ee badda.",
          "Awsaan: waxa ay ahayd boqortooyo yar oo ka hanaqaaday dooxada la yiraahdo Markha, ee ku taalla gobolka Shabwa ee koonfurta dalka Yaman.",
          "Bilawgeedii waxa ay xulufo la ahayd boqortooyadii Saba, balse xulufaysigaas ayaa tartan iyo loollan isu rogay, halkaasoo ugu danbayn boqorkii Saba oo la odhan jirey Karib’il Watar uu soo afjaray boqortooyadii Awsaan dhammaadkii qarnigii toddobaad ee Miilaadiyada Kahor.",
          "Magaca “Azania” oo ah magacii loogu yeeray xeebaha Soomaaliya illaa Tanzaniya, ma Awsaan buu ka yimid?",
          "Prof. Cabdalla Cumar Mansuur ayaa u dhawaynaya in magaca \"Azania\" uu ka yimid magaca Awsaan, isagoo tixraacaya \"Saaxilu Awsan\", oo ah magaca loo yaqaannay xeebaha laga bilaabo bariga Soomaaliya illaa Tansaaniya, taasina ay ka dhigan tahay in maamulka dawladdaan uu soo gaaray xeebaha Soomaaliya.",
          "Periplus-ka qudhiisu wuxuu xeebtaas qayb kamid ah ku tilmaamay \"xeebta Awsaaniga\".",
          "Ximyar: dawladdan oo waqtigeedu ku beegnaa 115 miiladiga kahor, illaa qarnigii 6aad ee miilaadiga keddib, waxa ay asal ahaan hoos imaanaysay boqortooyadii Saba, keddibna dhaxashay maamulkeedii, afkeedii iyo dhaqankeediiba.",
          "Badmareenkii Periplus ayaa inoo reebay xog kooban oo ku aaddan xaalka boqortooyada Ximyar ee qarnigii koowaad ee miilaadiga.",
          "Waxa uu sheegay in boqor Karba’il uu yahay boqorka sharciga ah ee Ximyar iyo Saba, caasimaddiisuna ay ahayd Zafaar, uuna saaxiibtinimo dhaw la lahaa Roomaanka, hadiyado iyo ergooyin badanna u diri jirey.",
          "Ximyar waxaa soo afjaray laba duullaan oo dibadda uga yimid:",
          "• Duullaankii Aksum ee sannaddii 525 miilaadiga",
          "• Iyo kii Faaris qiyaastii 575 miilaadiga.",
          "Tafaasiisha labadaan duullaanna dib ayaan uga warrami doonnaa."
        ]
      },
      {
        "heading": {
          "en": "Did Himyar rule the Somali coasts?",
          "so": "Ximyar ma ka talin jirtay xeebaha Soomaaliya?"
        },
        "en": [
          "After that short overview of some of the states of Yemen, let us return to our question: did foreign powers rule the Somali coasts?",
          "The longest debate stands over the Himyarites and their traces on the Somali coasts; so we will limit ourselves to presenting the arguments concerning Himyar.",
          "There is wide disagreement and many different views on this subject; let us begin with those who hold that Himyar ruled the Somali coasts at some point in time.",
          "A group of writers, among them Drake-Brockman (1912), Trimingham, Cerulli and Lewis, hold that the Somali port towns mentioned in the various texts of that age were ruled by Himyarites who had crossed the sea.",
          "Lewis wrote that the arrival of the Himyarites on the Somali coasts was the foundation and starting point of a trading government that later turned into the two states of Adal in the north and the emirate of Mogadishu in the south.",
          "Prof. Cabdalla Cumar Mansuur said that the Himyarite traders founded centres in those places, and then tried to mix with the local people, marrying among them and learning their language.",
          "These scholars rely on evidence that includes: first, the oldest text from which this period in these regions can be read is the Periplus, which we have mentioned many times.",
          "The writer of the Periplus said that the coast of Azania, which is everything below Xaafuun, was ruled by the chiefs of Ma'afir (Mapharitis) in Yemen, who were among the leaders of the Himyarite state, and that they held legal authority there.",
          "Added to that are stories of oral heritage that describe Himyar and their presence on the Somali coasts.",
          "Sharif Aydarus, in his book بغية الآمال في تاريخ الصومال, recorded an oral tradition told by the people of Xamar: that eight centuries before Islam, Xamar was ruled by a sultan called Ascad al-Ximyari (As'ad al-Himyari).",
          "The Yemeni writer Nashwan al-Himyari, who died in the 12th century CE, said the following when describing one of the kings of Himyar:",
          "«وكان ملكًا عظيمًا يُجبى إليه من بلاد الحبش إلى جزيرة زيلع وجزيرة بربر وجميع اليمن»",
          "Meaning: \"He was a very great king, to whom tax and tribute were brought from the land of the Habesha, Zeila, the land of Barbar and all the regions of Yemen.\"",
          "Besides this view, on the other side there are scholars who have opposed and rejected the view that the Himyarites had bases and administration on the Somali coasts.",
          "Dr. Cabdiraxmaan Cali Xirsi holds that the ruins and archaeological traces attributed to the Himyarites have not yet been fully and systematically researched, and that the hasty attribution to the Himyarites is rooted in the idea that the local people of that time did not have the ability for that progress and those buildings.",
          "He also noted that Ptolemy, who wrote on the geography of this region in the year 150 CE, did not mention any Arab government ruling the Somali coasts.",
          "Dr. Ducaale Jaamac, one of the scholars who reject the idea of Himyarite rule on the Somali coasts, described the story of Ascad al-Ximyari ruling Xamar before Islam as one that does not stand on firm legs.",
          "Enrico Cerulli, who himself found the Himyar view reasonable, added that many stories are told, but that so far no trace has been found on the Somali coast that can with certainty be attributed to the successive states of South Arabia.",
          "Dr. Sada Mire rejected Lewis's and Trimingham's view that the Himyarites founded Zeila and Mogadishu, saying that they rushed to the conclusion without bringing enough evidence.",
          "Sada Mire herself found traces showing the relationship the Arabs of the south of the peninsula had with the Somali coasts: a gravestone written in the Sabaean script, at Shalcaw in the Sanaag region, and writing resembling that of Himyar found in the paintings of Dhagax-Guure near Hargeisa.",
          "Without going further into teasing apart and analysing the arguments of the two sides, we can conclude by separating three layers that the claims often confuse:",
          "• It is certain that trade and sea-crossing existed, and that both sides took part in it; it is what the Periplus said about the people of Avalites, or Zeila, going to market in Mokha in Yemen.",
          "• There are written traces, found on some rock faces, and various archaeological studies, however few; but no full and thorough research has yet been done, and no direct conclusion can be drawn from them.",
          "• As for rule, government and the building of towns on the Somali coasts, so far there is no firm evidence from which that broad conclusion can be drawn; the arguments some scholars have made are sensible and reasonable, but they are not certainty and fact."
        ],
        "so": [
          "Dulmarkaas kooban ee qayb kamid ah dawladihii Yaman keddib, aan usoo noqonno su’aasheennii ahayd: Xeebaha Soomaaliyeed quwado shisheeye maka talin jireen?",
          "Doodda ugu dheer waxa ay ka taagan tahay reer Ximyar iyo raadkooda xeebaha Soomaaliya, sidaas awgeed, waxa aan ku gaabsanaynaa soo bandhigga doodaha la xiriira Ximyar.",
          "Kala duwanaansho baahsan iyo aragtiyo kala duwan ayaa ku jira mawduucaan, aanse ku bilawno cidda qabta in Ximyar ay ka talin jirtay waa waayada kamid ah xeebaha Soomaaliya.",
          "Koox qoraayaal ah, oo ay ka mid yihiin Drake-Brockman (1912), Trimingham, Cerulli iyo Lewis, waxa ay qabaan in magaalo furdooyinka Soomaalida ee lagu xusay samannadaas dhiganayaasha kala duwan ay ka talin jireen reer Ximyar oo badda kasoo tallaabay.",
          "Lewis waxa uu qoray in soo caga-dhigashadii reer Ximyar ee xeebaha Soomaaliya ay bud-dhig iyo bar-bilaw u ahayd maamul ganacsi oo markii danbe isu rogay labadii dawladood ee: Cadal dhanka waqooyi, iyo imaaradii Muqdisho ee dhanka koonfureed.",
          "Prof. Cabdalla Cumar Mansuur, wuxuu sheegay in ganacsatadii reer Ximyar ay xarumo ka aasaaseen goobahaas, kaddibna ay isku dayeen in ay dadka deegaanka dhexgalaan, iyagoo ka guursanaya, afkoodana baranaya.",
          "Aqoonyahannadan ayaa waxa ay cuskanayaan caddaymo ay kamid yihiin: Waa marka koowaade, qoraalka ugu qadiimsan ee fatradan deegaannadan laga akhristo waa kan Periplus, oo aan marar badan afka kusoo dhufannay.",
          "Qoraaga Periplus waxa uu sheegay in xeebta Azania, oo ah wixii ka hooseeya Xaafuun, ay ka talin jireen madaxda Macaafir (Mapharitis) ee Yaman, oo kamid ahaa madaxdii dawladdii Ximyar, halkaasna ay sharci-maamul ku haystaan.",
          "Waxaa taas soo raaca sheekooyin hidde-afeed ah oo wax ka tilmaamaya Ximyar iyo joogitaankooda xeebaha Soomaaliya.",
          "Shariif Caydaruus, ayaa buuggiisa بغية الآمال في تاريخ الصومال waxa uu kusoo guuriyay sheeko hidda-afeed reer Xamarku sheegaan, taasoo ah in Xamar, siddeed qarni Islaamka ka hor, uu ka talin jiray suldaan la oran jiray Ascad al-Ximyari.",
          "Qoraaaga Yamaniga ah ee Nashwaan Al-Ximyari, oo dhintay qarnigii 12aad ee miilaadiga, ayaa waxa uu yiri asagoo ka warramaay mid kamid ah boqorradii reer Ximyar hadalkan soo socda:",
          "«وكان ملكًا عظيمًا يُجبى إليه من بلاد الحبش إلى جزيرة زيلع وجزيرة بربر وجميع اليمن»",
          "Oo macnihiisu yahay: “Waxa uu ahaa boqor aad u weyn, oo canshuurta iyo jibaayada looga keeni jirey laga soo bilaabo dhulka Xabashida, Saylac, dhulka Barbar iyo dhammaan deegaannadda Yaman”.",
          "Aragtidaan ka sokow, waxaa dhanka kale jira aqoonyahanno gaashaanka u daruuray oo iska diiday aragtidan dhigaysa in reer Ximyar ay saldhigyo iyo agaasinba ku lahaayeen xeebaha Soomaaliya.",
          "Dr. Cabdiraxmaan Cali Xirsi waxa uu qabaa in raadadka burburka iyo degel-baarista ee loo tiiriyo reer Ximyar aan weli si buuxda oo nidaamsan loo baarin, laab-la-kaca loogu nisbeeyay reer Ximyarna ay salka ku hayso fikrad odhanaysa dadka deegaanku horumarkaas iyo dhismayaashaas waagaas joogay itaal uma lahayn.",
          "Waxa kaloo uu xusay in Ptolemaeus oo juquraafiyadda deegaankan wax ka qoray sannaddii 150 miilaadiga, uusan xusin wax maamul carbeed oo xeebaha Soomaaliya ka talinayay.",
          "Dr. Ducaale Jaamac oo kamid ah aqoonyahannada diiddan fikradda taliska reer Ximyar ee xeebaha Soomaaliya, ayaa waxa uu ku tilmaamay sheekada Ascad Al-ximyari iyo in uu Xamar ka talinayay Islaamka kahor, mid aan luga badan ku taagnayn.",
          "Enrico Cerulli, oo qudhiisu macquul ka dhigay aragtida reer Ximyar, ayaa ka daba geeyay in sheekooyin badan la hayo, balse aan illaa hadda xeebta Soomaaliyeed laga helin wax raadreeb ah oo si hubaal ah loogu nisbayn karo Koonfurta Carabta dawladihii isaga danbeeyay.",
          "Dr. Sada Mire ayaa dib ugu celisay Lewis iyo Trimingham aragtida ah in reer Ximyar ay aasaaseen Saylac iyo Muqdisho, waxa ayna sheegtay in ay ku dagdageen natiijada ayagoon caddaymo ku filan keenin.",
          "Sada Mire laftirkeedu waxa ay heshay raad muujinaya xiriirka carabta koonfurta jasiiradda ay la lahaayeen xeebaha Soomaaliya, oo ah dhagax-qabri ku qoran farta Sabaʼiga, oo ku yaal Shalcaw ee gobolka Sanaag, iyo qoraallo u eg kuwa Ximyar oo laga helay sawir-gacmeedyada Dhagax-Guure ee agagaarka Hargeysa.",
          "Annaga oo aannnaan kusii dheeraanayn dhiraandhirinta iyo falanqeynta doodaha labada dhinac, waxa aan ku gunaanadi karnaa in aan kala saarno saddex lakab oo inta badan ay sheegashooyinku isku qaadaan:",
          "• Waa la hubaa in xiriir ganacsi iyo bad-iskaga-tallaw uu jirey, oo labada dhinac ay lahaayeen, waana tii Periplus uu sheegay in dadka Avalites ama Saylac ay Makha ee dalka Yaman u suuq tegi jireen.",
          "• Waa la hayaa raadad qoraal ah, oo laga helay gebiyada qaar, iyo degel-baarisyo kala duwan, haba iska yaraadeene, balse weli baaritaan dhammaystiran oo hufan laguma samayn, oo natiijo toos ah lagama soo dhiraandhirin karo.",
          "• Talis, maamul iyo dhisidda magaalooyinka xeebaha Soomaaliya, illaa iyo hadda caddayn rasmi ah oo natiijadaas ballaaran laga soo dhalaalin karo lama hayo, cuskashooyinka ay aqoonyahannada qaar sameeyeenna, waa maangal iyo macquul balse hubanti iyo xaqiiq ma aha."
        ]
      },
      {
        "heading": {
          "en": "The great powers of the age",
          "so": "Awoodihii waaweynaa ee waagaas"
        },
        "en": [
          "That is the debate on Himyar and where it stands.",
          "As we said before, we will spend some time giving a picture of the changes in the region in that age.",
          "Let us turn to the east and its situation.",
          "In the year 224 CE, Ardashir got rid of the last king of the Parthian dynasty of Persia, and founded the Sasanian dynasty of Persia.",
          "An uncertain story says that, half a century later, the king of Persia, Narseh, who ruled from 293 to 302 CE, had relations with a king the texts called \"Zand Afrik Shah\", the king of the Zanj coast of East Africa.",
          "In the middle of the fifth century, the Sasanians became the unrivalled masters of the trade of the Indian Ocean, and their trade reached the Somali coasts; it is from Xaafuun that we have excavated traces connected with this.",
          "And what was happening in the west?",
          "In the year 330 CE, the Emperor Constantine cut the ribbon on a new capital for his state, which was named after him: Constantinople, the Istanbul of today; and there begins the history of the Eastern Roman or Byzantine empire.",
          "For Persia and Eastern Rome a new page of regional power rivalry began: Christian Eastern Rome and Zoroastrian Persia.",
          "Besides the struggle between Persia and Rome, a third power that arose in the region was growing strong: the empire of Aksum.",
          "Aksum reached the highest peak of its power in the 3rd century and after; the inscription carved on the stone throne we unravelled at the opening of our session is known as the \"Monumentum Adulitanum\".",
          "This inscription, the most valuable account of the rise of Aksum, describes the campaigns of an Aksumite king whose name is not known, and is thought to have been written between 200 and 270 CE.",
          "That king said that he crossed the sea and fought the people living on the other side of the Red Sea, conquering the whole coast as far as the land of the people of Saba. He also said that his rule reached as far as the Land of Incense.",
          "The full details of Aksum and its history we will come to in a later session, when we describe the history of Ethiopia, God willing.",
          "Those three powers, which ruled the world stage and the lands around ours, came to the sixth century, which carried many changes."
        ],
        "so": [
          "Dooddaas Ximyar iyo xaalkeeda keddib.",
          "Waa annagii horey usoo sheegnay in aan ku dheeraan doonno sawir ka bixinta isbeddellada gobolka ee samannadaas.",
          "Aan afka saarno bariga iyo xaalkiisa.",
          "Sannadkii 224tii miilaadiyada, Ardashir ayaa ka takhalusay boqorkii ugu danbeeyay ee boqortooyadii Barthiyiinta ee Faaris, waxa uuna aasaasay boqortooyadii Saasaaniyadda ee Faaris.",
          "Waxaa sheeko aan la hubin lagu sheegaa, Nus qarni kaddib, in boqorkii Faaris, Narseh, oo xukumay 293 illaa 302dii miilaadiyada, uu xiriir la lahaa boqor ay qoraalladu ugu yeereen \"Zand Afrik Shah\", oo ah boqorka xeebta Zanj ee Afrikada Bari.",
          "Bartamihii Qarnigii shanaad, Saasaaniyiinta ayaa noqday madaxda aan laga daba dhufan ee ganacsiga badweynta Hindiya, ganacsigooduna waxa uu soo gaaray xeebaha Soomaaliya, oo waatii aan Xaafuun kasoo faagnay raadreebyo arrintaas la xariiray.",
          "Bal galbeedkana maxaa ka socday;",
          "Sannaddii 330 miilaadiyada, Imbaraadoor Qustantiin ayaa xarigga ka jaray caasimad cusub ee dawladdiisa, taasoo asaga loogu magac daray, waa Qusdandiiniya, ama Istanbuul-ta maanta, halkaas ayaana laga bilaabaa taariikhda imbaraadooriyaddii Rooomaanka-Bari ama Biizantiyiinta.",
          "Faaris iyo Roomaanka-Bari ayaa waxaa u bilaabmay bog cusub oo loollanka awoodda gobolka ah: Roomada-Bari oo Masiixiya ah iyo Faaris oo Majuusiya ah.",
          "Hardanka Faaris iyo Roomaanka ka sokow, waxaa xoogaysanaysay awood saddexaad oo gobolka ka curatay, waana imbaraadooriyaddii Aksum.",
          "Aksum ayaa figta ugu sarraysa ee awooddeeda gaartay qarnigii 3aad iyo wixii ka danbeeyay, qoraalkii ku xardhanaa kursigii dhagaxa ahaa ee aan fadhigeenna ku furfurannay, ayaa loo yaqaannaa \"Monumentum Adulitanum\".",
          "Qoraalkan oo ah kan ugu qiimaha badan ee dhalashadii Aksum ka warramaya, ayaa ka warramaya duullaammadii boqor reer Aksum ah oo magaciisa aan la aqoon, waxaana la qiyaasaa in la qoray intii u dhaxaysay 200 iyo 270 miilaadiga.",
          "Boqorkaasi wuxuu sheegtay in uu badda ka tallaabay oo la dagaallamay dadkii degganaa dhinaca kale ee Badda Cas, kana qabsaday xeebtii oo dhan illaa dhulka reer Saba, Wuxuu kaloo sheegay in taliskiisu gaarsiisanaa illaa dhulkii udgoonka.",
          "Faahfaahinta dhammaystiran ee Aksum iyo taariikhdeeda, waxa aan ugu tegi doonnaa fadhi danbe iyo marka aan taariikhda Itoobiya ka warramayno, Idanka Rabbi.",
          "Awoodahaas saddexda ah, oo saaxada caalamka iyo inta dhulkeenna ku gedaaman ka talinayay, ayaa waxaa la gaaray qarnigii lixaad oo isbeddelo badan xambaarsanaa."
        ]
      },
      {
        "heading": {
          "en": "The sixth century: Najran, Abraha and Persia",
          "so": "Qarnigii lixaad: Najraan, Abraha iyo Faaris"
        },
        "en": [
          "Let us begin with Yemen.",
          "The king of Himyar at that time, named Yusuf Dhu Nuwas, launched an attack on the town of Najran, in what is today southern Saudi Arabia, where people of the Christian religion lived.",
          "This king, who followed the Jewish religion, forced the people of Najran to adopt Judaism; when they refused, he dug great trenches for them, lit fire in them, and then threw them in.",
          "The commentaries say that he was the man the Qur'an described among the People of the Trench (أصحاب الأخدود); it is the story told in Surat al-Buruj and in the story of the young boy that has come down in the Hadith.",
          "The massacre of Najran, carried out on the Christian people, reached Aksum and Constantinople, the capitals of Christianity in the east and south of the world.",
          "The king of Aksum, named Kaleb, a man firm in Christianity, who was then growing in power, decided to cross the sea and avenge the people of Najran.",
          "The Aksumite invasion against Yemen is dated to the year 525 CE; the army was led by a man named Aryat, and among the officers of his army was an officer who would later rise to prominence, named Abraha.",
          "The Aksumite army soon got rid of Dhu Nuwas, who vanished without a trace, and there the rule of the Himyarite kingdom came to an end.",
          "Abraha, who had once been the slave of a Roman man who traded at the port of Adulis, later took over the rule of Yemen.",
          "After he had ruled there for some time, and the government of Yemen had come firmly into his hands, while remaining under the kingdom of Aksum in Ethiopia, he built in Sana'a a great church called al-Qulays, to which he wanted the Arabs streaming to the Kaaba and Mecca to make their pilgrimage from then on.",
          "When that did not succeed, and his church was treated with contempt, he decided to march on Mecca and pull down the Kaaba; and so he set out with an army travelling on elephants, a means of transport little known in the Arabian Peninsula.",
          "And so it was that he and all he had with him, in the valley of al-Mughammas near the Sanctuary of Mecca, were pelted with stones by the birds, which made them like eaten-up straw.",
          "That year, known as the Year of the Elephant (عام الفيل), is estimated to have fallen around 570 CE, and shortly after the event of Abraha and the Elephant, the Prophet Muhammad, peace and blessings be upon him, came into the world.",
          "After the defeat of Abraha and his army, Habesha rule in Yemen did not last: a man called Sayf ibn Dhi Yazan, a survivor of the Himyarite royal house who was still struggling against the Habesha government, sought help from the kingdom of Persia.",
          "The king of Persia answered Sayf ibn Dhi Yazan's request, and sent an army that set sail from the port of al-Ubulla in Iraq and anchored at the port of Aden in southern Yemen.",
          "The Habesha were soon defeated, and the remains of their army crossed back over the Red Sea in retreat, after ruling Yemen for 50 years.",
          "The Chosroes (Kisra) of Persia named Sayf ibn Dhi Yazan as ruler of Yemen, directly under him; after him Badhan was sent from Persia and ruled there until Islam arrived and he became a Muslim.",
          "There the struggle over the Red Sea, which lasted almost 50 years, came to an end: Aksum crossed the sea and got rid of Himyar, and Persia, crossing the Indian Ocean, removed Aksum."
        ],
        "so": [
          "Aan ku bilawno dhanka Yaman.",
          "Boqorkii Ximyar waagaas oo lagu magacaabay Yuusuf Thu-Nuwaas, ayaa duullaan ku qaaday magaalada Najraan, ee maanta ku taal koonfurta Sacuudi Carabiya, halkaas oo ay ku noolaayeen dad diinta kiristaanka haysta.",
          "Boqorkan oo diinta Yahuudiyada haystay, ayaa ku khasbay reer Najraan in ay Yahuudiyada qaataan, markii ay ka diiddeenna waa asagii godad waaweyn u qoday, dabna ku shiday, dabadeedna ku guray.",
          "Tafaasiirtuna waxa ay sheegtaa in أصحاب الأخدود ninkii Quraanku ku tilmaamay uu asaga ahaa, waana tii ay Suuratul-Buruuj iyo qisadii wiilka yarka ah ee Axaadiista kusoo aroortay ay ka sheekaynayeen.",
          "Xasuuqii Najraan, ee dadkii Kiristaanka ahaa lagu sameeyay waxa uu gaaray Aksum iyo Qusdandiiniya, oo ahaa caasimadihii masiixiyadda ee bariga iyo koonfurta Adduunka.",
          "Boqrkii Aksum, oo lagu magacaabay Kaalib, ahaana nin masiixiyadda ku adag, markaasna awood is bidayay, ayaa go’aansaday in uu badda ka tallaabo, una soo aaro reer Najraan.",
          "Duullaankii Aksum ee Yaman ku wajahnaa waxaa lagu asteeyaa sannaddii 525tii Miilaadiyada, waxaana ciidanka hoggaaminayay nin lagu magacaabay Aryaad, waxaana saraakiisha ciidankiisa kamid ahaa sarkaal dib kasoo dhalaali doona oo lagu magacaaby Abraha.",
          "Durbaba ciidankii Aksum waxa ay ka takhalluseen Thu-Nuwaas oo jaan iyo cirib meel uu dhigayna la waayay, halkaasna lagu soo afmeeray maamulkii boqortooyadii Ximyar.",
          "Abraha, oo ahaan jirey addoon uu lahaa nin Roomaan ah oo ka ganacsan jirey dekedda Adulis, ayaa mar danbe xukunkii Yaman la wareegay.",
          "Muddo markii uu halkaas ka talinayay, maamulkii Yamanna si fiican ugu gacan galay, asagoo hoos imaanayay boqortooyadii Aksum ee Itoobiya, ayaa waxa uu Sanca ka dhisay kaniisad weyn oo lagu magacaabay Al-Qulays, taasoo uu rabay in carabta Kacbada iyo Makka ku qulqulaysa ay kaniisaddaan usoo xajiyaan hadda keddib.",
          "Markii ay taasi hirgeli weyday, iyo ficil-darro kaniisaddiisii lagula kacay, waxa uu go’aansaday in uu Makka ku duulo, oo kacbada soo dumiyo, waana asagii kaxaystay ciidan Maroodiyaal ku sadcaalaya, oo ahaa gaadiid aan Jasiiradda carabta aad looga aqoon.",
          "Waana tii isaga iyo wuxuu watayba togga Muqammass ee agagaarka Xaramka Makka ay shimbirihii ku dhagax-tuureen, oo bal la daaqay oo kale ka dhigeen.",
          "Sannadkaas oo loo aqoon ogyahay عام الفيل waxaa lagu qiyaasaa in uu ku beegnaa 570kii miilaadiyadda, waxyar keddib dhacdadii Abhraha iyo Maroodigana waxaa dunida yimid Nabi Muxammad, Nabadgelyo iyo Naxariis korkiisa ha ahaatee.",
          "Jabkii Abraha iyo ciidankiisii keddib, maamulkii Xabashida ee Yaman masii waarin, oo nin la odhan jirey Sayf bin Thii Yazan oo ka haray boqrtooyadii Ximyar, oo haraadigii loollan kula jirtay maamulkii Xabashida, ayaa miciin biday boqortooyadii Faaris.",
          "Boqorkii Faaris ayaa soo ajiibay dalabka Sayf bin Thii Yazan, waxa uuna soo diray ciidan kasoo dhoofay dekedda Al-Ubulla ee Ciraaq, kuna soo xirteen dekedda Cadan ee koonfurta Yaman.",
          "Durbaba xabashidii waa laga adkaaday, haraadigii ciidankoodana waxa ay dib uga tallaabeen badda cas ayagoo gurya-noqod ah 50sano oo ay Yaman ka talinayeen Keddib.",
          "Kisrihii Faaris waxa uu maamulka Yaman u magacaabay Sayf bin Thii Yazan, oo toos asaga u hoos imaanayay, gadaashiisna waxaa Faaris laga soo diray Baadaan oo halkaas ka talinayay illaa Islaamku kasoo gaaray oo uu ku islaamay.",
          "Halkaas waxaa kusoo ekaaday loollankii badda cas oo ku dhawaad 50 sano qaatay: Aksum ayaa badda ka tallawday, Ximyar ayay ka takhalustay, Faaris oo badweynta Hindiya kusoo gooshtay ayaa Aksumna meesha ka saartay."
        ]
      },
      {
        "heading": {
          "en": "What reached the Somali coasts",
          "so": "Waxa ka soo gaaray xeebaha Soomaaliyeed"
        },
        "en": [
          "So, did any of the sparks of those mighty events burning around us reach us?",
          "In truth, the historical sources of that time that wrote about those events, Greek, Roman, Arab and Persian alike, none of them shows or mentions any direct role that the Somali regions played in those events, as far as we have found.",
          "But we can glimpse among them three points of some importance: first, in the crossing of the Red Sea, the ships and the armies they carried crossed through the strait of Bab al-Mandab, which lies close to, or even on, the edge of the Somali coasts.",
          "Second, the Persian ships carrying the relief army to Yemen and Sayf ibn Dhi Yazan anchored at the port of Aden, which is not at all far from our coast.",
          "Third, Somali port towns, such as Xaafuun and Xiis, were part of the trade of the Indian Ocean and the Red Sea, at the ends of which stood Rome, Aksum and Persia.",
          "Added to this is an oral tradition recorded by Liiq-Liiqato and Ducaale Jaamac, which says that at the end of the sixth century, when Habesha rule in Yemen ended, an Arab group displaced from Yemen migrated to north-east Africa."
        ],
        "so": [
          "Haddaba, dhacdooyinkaas lixaadka leh ee ina kulaalayay faniinkoodu wax ma inaga soo gaareen?",
          "Run ahaantii, ilaha taariikheed ee waagaas wax ka qoray dhacdooyinkaas, Giriigga, Roomaanka, Carabta iyo Faarisba midkoodna muujin mahayo, soona hadal-qaadi mahayo kaalin toos ah oo deegaannada Soomaalidu ay ku lahaayeen dhacdooyinkaas, inta aan haleelnay.",
          "Waxaanse ka dhex xuuraamin karnaa saddex qodob oo muhiimaddooda leh: Waa marka koowaade; iskaga-tallawga badda cas, maraakiibtii iyo ciidamaddii ay xambaarsanaayeen waxa ay ka tallaabeen marinka Baab Al-Mandab, oo u dhaw ama dhacaba xaddidka xeebaha Soomaaliyeed.",
          "Waa marka xigtee; Maraakiibtii Faaris ee ciidamadii gurmadka ahaa u waday Yaman iyo Sayf Bin Thee Yazan waxa ay ku xirteen dekedda Cadan, oo aan xeebteenna waxba ka fogeyn.",
          "Waa tan saddexaade; magaalo furdooyinka Soomaaliyeed, sida Xaafuun iyo Xiis, waxa ay qayb ka ahaayeen ganacsigii Badweynta Hindiya iyo Badda Cas ee Rooma, Aksum iyo Faaris ay darafyada ka ahaayeen.",
          "Waxaa intaa soo raacda, sheeko hidda-afeed ah oo ay soo guuriyeen Liiq-Liiqato iyo Ducaale Jaamac taasoo sheegaysa in dhammaadkii qarnigii lixaad, markii xukunkii Xabashida ee Yaman uu idlaaday, ay qolo Carbeed oo ka barakacday Yaman u soo hayaameen waqooyi-bari Afrika."
        ]
      },
      {
        "heading": {
          "en": "Closing",
          "so": "Gebagabo"
        },
        "en": [
          "Let today's session end there.",
          "Our historical journey is passing the end of the 6th century CE, and the birth of our Blessed Prophet Muhammad, peace and blessings be upon him.",
          "Here ends the first part of the series, about the ancient history of the Somali, which we discussed in four sessions of the series.",
          "In our fifth session we will open the medieval history of the Somali, which will be wider in scope than the part we have just finished, its sessions reaching up to 11, if God the Almighty permits.",
          "Until then, goodbye."
        ],
        "so": [
          "Fadhiga maanta intaas ha inoogu joogo.",
          "Waxa uu geeddiga taariikheed inoo marayaa dhammaadkii qarnigii 6aad ee miilaadiyada, iyo dhalashadii Suubaneheenna Muaxammad, Nanbadgelyo iyo Naxariis korkiisa ha ahaatee.",
          "Waxaa halkaan inoogu idlaaday qaybta koowaad ee taxanaha oo ku saabsaneed taariikhda hore ee Soomaalida, taasoo aan uga hadalnay afar fadhi oo taxanaha kamid ah.",
          "Fadhigeenna shanaad waxa aan ku daah-furi doonnaa taariikhda dhexe ee Soomaalida, taasoo ka guda-ballaarnaan doonta midda aan hadda soo afmeernay, oo fadhiyadeeda illaa 11 fadhi ay gaari doonaan, haddii Eebbe weyne inoo oggolaado.",
          "Sidaas iyo Nabadgelyo."
        ]
      }
    ],
    sources: ["Soomaaliya iyo Taariikhdeedii Hore", "Taariikhda Soomaaliya", "A Modern History of the Somali", "Divine Fertility", "The Periplus"]
  },
  {
    id: 5,
    part: 2,
    years: { en: "7th – 14th century CE", so: "Qarnigii 7aad – 14aad NCKD" },
    title: { en: "When Did Islam Reach Somalia?", so: "Goormuu Islaamku Soomaaliya soo gaaray?" },
    summary: {
      en: "The first Hijra to Abyssinia, the Mosque of the Two Qiblas in Zeila, the oldest graves and inscriptions of Mogadishu and Brava, and how Islam came: through traders, refugees and preachers, not armies.",
      so: "Hijradii hore ee Xabasha, Masjidka Labada Qiblo ee Saylac, qabriyada iyo qoraallada ugu da'da weyn ee Muqdisho iyo Baraawe, iyo sida Islaamku inoo soo gaaray: ganacsato, qaxooti iyo ducaad, ee ma ahayn ciidan."
    },
    details: {
      en: "Around 615 CE the first Muslim emigrants crossed the Red Sea to Abyssinia, so Islam reached Africa before Medina; but no early source says they landed on the Somali coast, and the claim that Zeila's \"Mosque of the Two Qiblas\" is that old is not supported by excavation. Islam reached Yemen, Oman, Hadramawt and Bahrain in the Prophet's lifetime, the lands closest to our coasts. The earliest firm traces in the Somali land are later: Muslims in Zeila in the 10th century (al-Mas'udi), an inscription from Brava dated 1105 and a grave in Mogadishu dated 1217 (Cerulli). Two graves dated 719 and 756 reported by Riiraash could not be found in Cerulli's records. The episode concludes that Islam reached the coast no later than the 2nd century of the Hijra, spread slowly from the coastal towns inland, and came through traders, refugees and preachers rather than armies.",
      so: "Qiyaastii 615 NCKD, muhaajiriintii ugu horreeyay ayaa badda cas uga tallaabay dhulka Xabashida, sidaas darteed Islaamku Afrika ayuu gaaray ka hor intii uusan Madina gaarin; balse ilaha hore midkoodna ma sheegin in ay xeebta Soomaaliyeed ku degeen, sheegashada ah in \"Masjidka Labada Qiblo\" ee Saylac uu sidaas u da' weyn yahayna degel-baaristu ma taageerin. Islaamku wuxuu gaaray Yaman, Cumaan, Xadramawt iyo Baxrayn intii Nabigu noolaa, waana dhulka ugu dhow xeebeheenna. Raadadka ugu hubsan ee dhulka Soomaalida waa kuwo danbe: muslimiin Saylac ku noolaa qarnigii 10aad (Al-Mascuudi), qoraal Baraawe ah oo la taariikhaystay 1105 iyo qabri Muqdisho ah oo la taariikhaystay 1217 (Cerulli). Labada qabri ee 719 iyo 756 ee Riiraash sheegay laguma helin diiwaannada Cerulli. Xalqaddu waxay ku gunaanadaysaa in Islaamku xeebta soo gaaray ugu dambayn bilawgii qarnigii 2aad ee Hijriyada, tartiibna uga faafay magaalo-xeebeedyada ilaa daakhilka, una soo gaaray ganacsato, qaxooti iyo ducaad, ee aanu ciidan ku iman."
    },
    // The FULL script of the episode ("Xalqadda 5aad"): Somali word for word, with an English translation.
    article: [
      {
        "heading": {
          "en": "Mecca, 615: the migration to Abyssinia",
          "so": "Makka, 615: hijradii Xabasha"
        },
        "en": [
          "It is the month of Rajab, in the fifth year of the mission of the Prophet Muhammad (peace and blessings be upon him), eight years before his Hijra to Medina, around 615 CE, and the place is the city of Mecca.",
          "Eleven men and four women are slipping secretly out of the city at night, some on foot and some riding.",
          "They are fleeing the torment and pressure piled on them because of a new religion they had taken up, for which their own people had cast them out.",
          "They headed west, to the coast of the Red Sea, to a small port called al-Shu'ayba.",
          "When they reached it, by good fortune two ships happened to be there, about to set out from the harbour, and they boarded them.",
          "Where they were going, and where they had been sent, was a land on the other shore of the sea, where a state called Abyssinia stood, and the man they were going to was the king of that kingdom.",
          "They were going on the guidance the Blessed Prophet (peace and blessings be upon him) had given them:",
          "«إن بأرض الحبشة ملكًا لا يُظلم عنده أحد»",
          "\"Over there in Abyssinia there is a king who does not allow injustice,\" words from which they understood that they should take refuge there.",
          "Those 15 people whom the ships carried across the Red Sea were the first time the religion of Islam crossed out of the Arabian Peninsula; and the first land it set foot on was Africa, and East Africa at that.",
          "So, did those Muslims fleeing the Arabian Peninsula reach the Somali land?",
          "Did Islam reach our land at that time, or in later ages?",
          "Whenever it was: in what way did Islam reach our land, and how did it spread?",
          "And what do the written sources of history and the archaeological evidence say about this?",
          "The answers to these questions, and many others, you will find in this session."
        ],
        "so": [
          "Waa bishii Rajab, sannadkii shanaad ee soo diriddii Nabi Muxammad, NNKH, siddeed sano ka hor Hijradiisii Madina, qiyaastii 615-kii Miilaadiga, Goobtuna waa magaalada Makka.",
          "Kow iyo toban nin iyo afar haween ah ayaa si dhuumasho ah uga huleelaya magaalada xilli habeen ah, qaar waa lugeynayaan, qaarna gaadiid ayay saaran yihiin.",
          "Waxa ay carar ka yihiin cadaab iyo cadaadis loogu la cilloobay diin cusub oo ay qaateen, oo tolkoodii ay kaga takoormeen.",
          "Waxa ay afka saareen dhanka galbeed iyo xeebta badda cas, deked yar oo la yiraahdo Al-Shucayba.",
          "Markii ay halkaas gaareenna, nasiib wanaaggooda waxa ay lasoo istaageen laba doomood oo markaas marsada ka furan rabay, horey ayayna u raaceen.",
          "Meesha ay u socdaan, ee loo soo diray, waa dhul daanta kale ee xeebta ku yaal, oo ay ka dhisneed dawlad lagu magacaabo Xabasha, ninka ay u socdaanna waa boqorka boqortooyadaas.",
          "Waxa ay ku socdaanna waa tusmo Suubanuhu NNKH uu soo siiyay:",
          "«إن بأرض الحبشة ملكًا لا يُظلم عنده أحد»",
          "“dhankaas iyo Xabasha waxaa idin ka jira boqor aan aabiga oggolayn”, hadalkaas oo ay ka dheehdeen in ay halkaas qabtaan.",
          "15-kaas nafar ee doomuhu ka tallaabiyeen badda cas, ayaa ahayd markii ugu horreysay ee ay diinta Islaamku ka gudubto Jasiiradda Carabta, dhulkii ugu horreeyay ay caga dhigatana, Afrika ayuu noqday, weliba bariga Afrika.",
          "Haddaba; Muslimiintaas Jasiiradda Carabta kasoo qaxay dhulka Soomaalida masoo gaareen?",
          "Islaamku ma waagaas buu soo gaaray dhulkeenna mise waayo ka danbeeyay?",
          "Goortay rabto ha ahaatee; habkee ayuu Islaamku kusoo gaaray dhulkeenna, uguna fiday?",
          "Maxaase ilaha qoran ee taariikhda iyo xogta degel-baariseed ay arrintaan ka dheheen?",
          "Weydiimahan iyo qaar kaloo badan, jawaabahooda fadhigan ayaad uga bogan doontaa."
        ]
      },
      {
        "heading": {
          "en": "Introduction",
          "so": "Hordhac"
        },
        "en": [
          "Peace be upon you, and the mercy of God and His blessings.",
          "Welcome back, and good to be together again.",
          "In our previous session we brought to a close the first part of the series, about the ancient history of the Somali.",
          "We stopped at the struggle of the powers, Rome, Persia, Aksum and Himyar, over the Red Sea and the Indian Ocean, up to the Year of the Elephant and the birth of the Blessed Prophet, peace and blessings be upon him.",
          "We had reached the point where the Sasanian kingdom of Persia took Yemen from the Abyssinians of Aksum, and Badhan was the head of the government of Yemen until Islam reached it.",
          "In this session we open the second part of the series, the medieval history of the Somali, which is wider in scope than the first part: it covers the coming of Islam to this land, the history it left behind, the governments founded here, and the struggle of the colonial powers who later carved it up among themselves.",
          "The question we take on in this session is one that is easy to ask, but whose answer branches out widely:",
          "WHEN DID ISLAM REACH SOMALIA?",
          "My name is Mohamed Abdulkadir Mohamed.",
          "This is \"Miyir\", the platform for raising awareness and nurturing understanding.",
          "Come closer."
        ],
        "so": [
          "سلام الله عليكم ورحمته وبركاته",
          "Mar kale iyo isku soo laabasho wanaagsan.",
          "Fadhigeennii hore waxa aan ku soo afmeernay qaybta koowaad ee taxanaha, oo ku saabsaneed taariikhda hore ee Soomaalida.",
          "Waxa aan soo dul-istaagnay loollankii quwadaha ee Rooma, Faaris, Aksum iyo Ximyar ee Badda Cas iyo Badweynta Hindiya, illaa laga soo gaaray sannadkii Maroodiga iyo dhalashadii Suubanaha, Nabadgelyo iyo Naxariis Dushiisa ha ahaatee.",
          "Waxa ay inoo joogtay ayadoo boqortooyadii Saasaaniyadda ee Faaris ay Yaman kala wareegtay Xabashidii Aksum, Baadaanna uu maamulka Yaman madax u ahaa illaa Islaamku kasoo gaaray.",
          "Fadhigaan waxa aan ku daah-furaynaa qaybta labaad ee taxanaha, waa taariikhda dhexe ee Soomaalida, oo ka guda ballaaran qaybtii koowaad, oo waxa ay daboolaysaa imaanshihii Islaamka ee dhulkan, taariikhda uu ku reebay, maamulladii ka aasaasmay, iyo loollankii quwadaha gumeystuhu ay markii danbe ku kala qoqobeen.",
          "Fadhigan su’aasha aan isku taxallujinayno in aan ka jawaabno, waa mid weydiinteedu sahlan tahay, balse jawaab u heliddeedu ay sal ballaaranayso.",
          "GOORMA AYUU ISLAAMKU SOOMAALIYA SOO GAARAY?",
          "Magacaygu waa Maxamed Cabdulqaadir Maxamed.",
          "Halkani waa madasha \"Miyir\" ee kobcinta wacyiga iyo ababinta garaadka.",
          "Horey usoo dhawaada."
        ]
      },
      {
        "heading": {
          "en": "The beginning of revelation and the world of the 7th century",
          "so": "Bilaabashadii waxyiga iyo adduunka qarnigii 7aad"
        },
        "en": [
          "Since this second part of the series runs alongside the history of Islam, we will combine the two calendars, the Hijri and the Gregorian, so that we fully understand the historical events we discuss.",
          "In the year 610 CE, thirteen years before the Hijra, the first revelation was sent down to the Prophet Muhammad (peace and blessings be upon him), while he was in the cave of Hira in the city of Mecca.",
          "\"Read in the name of your Lord who created\" (إقرأ باسم ربّك الذي خلق)",
          "The world into which that revelation came was one whose political power was contested by the two powers we mentioned in our previous session: Eastern Rome and Persia.",
          "In 614 CE, eight years before the Hijra, the Romans were overpowered, and Persia took the city of Jerusalem, a second centre for the Romans.",
          "The defeat that struck the Romans, and that they would be victorious again, God mentioned in the Qur'an, in the sura named after them, al-Rum, where the Lord says:",
          "(الم ۞ غُلِبَتِ الرُّومُ ۞ فِي أَدْنَى الْأَرْضِ وَهُم مِّن بَعْدِ غَلَبِهِمْ سَيَغْلِبُونَ * في بضع سنين)",
          "And so it happened: Heraclius, the emperor of the Romans, broke Persia in a powerful campaign he launched against it in 627 CE, which corresponds to the sixth year of the Hijra.",
          "To the east.",
          "In 618 CE, four years before the Hijra, the Tang dynasty took power in China.",
          "Aksum, which in the 6th century had crossed the Red Sea and removed the Himyarite state that ruled Yemen, declined in power, and the trade of its port, Adulis, dwindled.",
          "So, what kind of role did the Somali coasts play in that world?",
          "As we mentioned in our previous session, the northern coasts of Somalia and the southern coasts of the Arabian Peninsula are separated by a very narrow waterway.",
          "Cosmas, the Greek trader and sailor we met in our previous session at the port of Adulis, noted in his book in the sixth century that Himyar was not far from Barbaria, the name by which the Somali land was known, and that between them lay a sea that could be crossed in \"two days\".",
          "Dr. Sada Mire too pointed out that this waterway is crossed in \"a day or two\", and that contact between the people on both sides of the sea had gone on for thousands of years.",
          "Of the Somali port towns, the one closest in distance to the Arabian Peninsula was the port town of Zeila.",
          "Ahmad ibn Ishaq al-Ya'qubi, the first Arab historian to mention the name Zeila, around the year 278 of the Hijra, which corresponds to 891 CE, said, when listing the coastal markets under or near Yemen on the other side of the sea, that Zeila lies opposite the strait of Bab al-Mandab.",
          "In the fourth century of the Hijra, which corresponds to the tenth century CE, the geographer and historian Ibrahim ibn Muhammad al-Istakhri, when describing the role of Zeila after the lands of Nubia and Abyssinia, said: \"On the coast there is a place called Zeila, a port for crossing to Yemen and the Hijaz.\"",
          "Taken together, the reports of the historians and the archaeology we have mentioned, from the 6th century to our own, all agree on the closeness and the ties of travel and trade between the south of the Arabian Peninsula and the northern coasts of Somalia, especially Zeila, which seems to have been the door into the Horn of Africa for anyone crossing from the Arabian Peninsula.",
          "This point is important for understanding and estimating when and how Islam reached our land."
        ],
        "so": [
          "Maadaama qaybtan labaad ee taxanuhu ay la jaanqaadayso taariikhda Islaamka, waxa aan isku dhafaynaa labada kalendar: Hijriga iyo Miilaadiga, si dhacdooyinka taariikheed ee aan ka hadlayno aan si buuxda ugu fahanno.",
          "Sannadkii 610-kii Miilaadiga, saddex iyo toban sano ka hor Hijriyada, ayaa waxyigii ugu horreeyay lagu soo dejiyay Nabi Muxammad NNKH, isagoo ku sugan godka Xiraa ee magaalada Makka.",
          "إقرأ باسم ربّك الذي خلق",
          "Adduunkii waxyigaasi kusoo degay waxaa awooddiisa siyaasadeed ku loollamayay labadii quwadood ee aan fadhigeennii hore kusoo xusnay: Roomaanka-Bari iyo Faaris",
          "Sannadkii 614-kii Miilaadiga, siddeed sano kahor Hijriyada, Roomaankii ayaa laga itaal roonaaday, Faarisna waxa ay qabsatay magaalada Qudus oo xarun-labaad u ahayd Roomaanka.",
          "Jabka Roomaanka ku dhacay iyo in ay dib u guulaysan doonaan, Allah ayaa ku xusay Qur’aanka, oo waa ayadii Suurada loogu magac daray ee RUUM uu Rabbi ku yiri:",
          "(الم ۞ غُلِبَتِ الرُّومُ ۞ فِي أَدْنَى الْأَرْضِ وَهُم مِّن بَعْدِ غَلَبِهِمْ سَيَغْلِبُونَ * في بضع سنين)",
          "Waana tii dhacday, oo Hiraqle oo ahaa imbaraadoorkii Roomaanka ayaa guluf xooggan oo uu ku qaaday Faaris, ku jebiyay 627-kii Miilaadiga, oo ku aaddanayd, sannadkii lixaad ee Hijriyada.",
          "Dhanka Bari.",
          "Sannadkii 618-kii Miilaadiga, afar sano ka hor Hijriyada, boqortooyadii Tang ayaa la wareegtay xukunka Shiinaha.",
          "Aksum, oo qarnigii 6aad ka tallawday badda cas, meeshana ka saartay dawladii Ximyar ee Yaman ka talin jirtay, ayaa awooddeedu hoos u dhacday, ganacsigii dekeddeedii Adulis-na gabaabsi noqday.",
          "Haddaba, Xeebaha Soomaaliyeed, Adduunkaas kaalin caynkee ah bay ku lahaayeen?",
          "Waa innagii fadhigeennii hore kusoo xusnay in Xeebaha Waqooyi ee Soomaaliya iyo xeebaha Koonfureed ee Jasiiradda Carabta uu kala qaybiyo marin-biyood aad cidhiidhi u ah.",
          "Cosmas, ganacsadihii iyo badmaaxi Giriigga ee aan fadhigeennii hore kula kulannay dekedda Adulis, ayaa qarnigii lixaad buuggiisa ku xusay in Ximyar aysan ka fogayn Barbariya, waa magacii dhulka Soomaalida loo yaqaannaye, ayna u dhaxayso bad la iskaga gooshi karo “laba casho”.",
          "Dr. Sada Mire ayaa Iyana ishaartay in dhabba-biyoodkaas “maalin ama laba” looga gudbo, xiriirka dadka labada dhinac ee baddana ay muddo kumannaan sano ah uu socday.",
          "Magaala-furdooyinka Soomaaliyeed meesha masaafa ahaan ugu dhaw jasiiradda carabta waxa ay ahayd magaala-furdada Saylac.",
          "Axmed Bin Isxaaq Al-Yacquubi, oo ahaa taariikhyahankii carbeed ee ugu horreeyay oo magaca Saylac afka ku dhufta, qiyaastii sannadkii 278 Hijriyada, oo ku beegneed 891-kii Miilaadiga, mar uu tirinayay suuq-xeebeedyada Yaman hoos yimaada ama u dhaw ee dhanka kale ee badda ayuu ku sheegay Saylac in ay ku taallo kasoo horjeedka marin-biyoodka Baab-Al-Mandab.",
          "Qarnigii afraad ee Hijriyada, oo ku beegan qarnigii tobnaad ee Miilaadiga, juquraafiyahankii iyo taariikhyahankii Ibraahim Bin Muxammad Al-Istakhri, ayaa mar uu sharaxayay kaalinta Saylac ee dhulkii Nuuba iyo Xabashi keddib, waxa uu yiri: “Waxaa ku taalla xeebta meel la yiraahdo Saylac, oo ah deked looga tallaabo Yaman iyo Xijaaz”.",
          "Isu-geynta warbixinnada taariikhyahannada iyo degel-baarista ee aan soo xusnay, laga soo bilaabo qarnigii 6aad illaa iyo qarnigan aan joogno, waxa ay isla qirayaan isu dhawaanshaha iyo xiriirka safar iyo ganacsi ee ka dhexeeyay koonfurta Jasiiradda Carabta iyo xeebaha waqooyi ee Soomaaliya, gaar ahaan Saylac, oo u eg in ay ahayd albaabka geeska Afrika laga soo galo marka jasiiradda carabta laga soo tallaabo.",
          "Qodobkan ayaa muhiim u ah fahanka iyo qiyaasta goorta iyo sida Islaamku kusoo gaaray dhulkeenna."
        ]
      },
      {
        "heading": {
          "en": "The names of the Somali land",
          "so": "Magacyadii dhulka Soomaalida"
        },
        "en": [
          "Before we go further, let me point out something important.",
          "This Somali land was called by different names through history: we have seen that it was once named \"Punt\", a name given 3,000 years before the birth of the Prophet Jesus (peace be upon him).",
          "We have also seen that the Greeks and Romans who ruled Egypt one after the other, and reached our land, used various names, among them \"Cinnamomifera\", meaning \"the land of cinnamon\" or something close to it.",
          "We have also seen that the sailor of the Periplus gave the Somali coasts two names: Barbar for the northern coasts, and Azania for the coasts south of Xaafuun.",
          "The Arab historians of the Islamic period called the Somali people \"Barbar\" or \"Barbara\", and their land \"Bilad al-Barbar\" and \"Barr al-'Ajam\".",
          "This name \"Barbar\", used earlier by the Periplus and Cosmas, does not mean the Berbers of North Africa, of Morocco and Algeria; it means the people of the coasts of the Gulf of Aden.",
          "The names \"Somali\" and \"Somalia\" first appear in writing many centuries later; what they mean, who gave them and why, we will discuss in another session, God willing."
        ],
        "so": [
          "Inta aynaan horey u tallaabin, aan qodob muhiim ah baraarujiyo.",
          "Dhulkan Soomaaliyeed waayihii taariikhda magacyo kala duwan ayaa loogu yeeri jirey, waa innagii soo aragnay in mar loogu wanqalay dhulkii “Punt” magacaas oo baxay 3000 sano kahor dhalashadii Nabi Ciise CS.",
          "Waxaan kaloo soo aragnay Giriiggii iyo Roomaankii masar isaga danbeeyay, dhulkeennana soo gaaray in ay magacyo kala duwan adeegsadeen, waxaa kamid ahaa “Cinnamamofera” oo macnihiisu yahay “Dhulkii Qorfaha” ama wax ka ag dhaw.",
          "Sidoo kale waxaan soo aragnay in badmaaxii Periplus uu xeebaha Soomaalida laba magac u bixiyay: Barbar oo ah xeebaha waqooyi, iyo Azania oo ah xeebaha wixii Xaafuun ka koonfureeya.",
          "Taariikhyahannadii Carabta ee xilligii Islaamka dadka Soomaalida ah waxa ay ugu yeeri jireen \"Barbar\" ama \"Barbara\", dhulkoodana \"Bilaad Al-Barbar\" iyo \"Barrul-Cajam\".",
          "Magacan “Barbar” oo horey ay udeegsadeen Periplus iyo Cosmas, loolama jeedo Barbarta Waqooyiga Afrika ee Morooko iyo Aljeeriya, ee waxaa loola jeedaa dadka xeebaha Gacanka Cadmeed.",
          "Magaca “Soomaali” iyo “Soomaaliya” ayaa qoraal ahaan taariikhda ugu horreysay qarniyo badan keddib, waxa laga wado, cidda bixisay iyo sababtiisana fadhi kale ayaan uga warramaynaa, Haddii Eebbe inoo oggolaado."
        ]
      },
      {
        "heading": {
          "en": "Islam and the south of the Arabian Peninsula",
          "so": "Islaamka iyo koonfurta Jasiiradda Carabta"
        },
        "en": [
          "Moving on from the geographical closeness and the ties between the south of the Arabian Peninsula and our coasts, there follows the fact that Islam quickly reached and spread, in the lifetime of the Prophet (peace and blessings be upon him), through the Arab regions next to or facing the Somali coasts.",
          "Between the 6th and the 11th year of the Hijra, that is, 628 to 632 CE, Islam reached Yemen, Oman, Hadramawt and Bahrain.",
          "Badhan, the Persian governor of Yemen, became a Muslim in the 7th year of the Hijra, after the death of the Chosroes of Persia and the arrival of the Blessed Prophet's letter.",
          "Bahrain too accepted Islam in the same 7th year of the Hijra, after a message the Prophet (peace and blessings be upon him) entrusted to the Companion al-'Ala' al-Hadrami.",
          "And in Oman, in the 8th year of the Hijra, the two kings who ruled it, the sons of al-Julanda, became Muslims, after the letter the Prophet (peace and blessings be upon him) entrusted to 'Amr ibn al-'As reached them.",
          "Here we have Islam settled in all the regions of the south of the Arabian Peninsula that are geographically closest to our land; and, as we will see later, Yemen, Oman, Hadramawt and Bahrain would become the countries from which most of the people who later migrated to the Somali coasts came.",
          "Keep two points in mind for me here: first, our coasts had an age-old connection and geographical closeness with the coasts of the south of the Arabian Peninsula.",
          "The second: Islam reached those same Arab regions in the lifetime of the Blessed Prophet (peace and blessings be upon him).",
          "I will add a third; but first let us go back to the ships that set out from the harbour of al-Shu'ayba, and the Companions whom the Prophet (peace and blessings be upon him) advised to seek refuge in the land of Abyssinia."
        ],
        "so": [
          "Markaan kasoo gudubno isu-dhawaanshaha juquraafiyeed iyo xiriirka ka dhexeeyay koonfurta Jasiiradda Carabta iyo xeebeheenna, waxaa taas soo raaca in Islaamku durbaba gaaray kuna faafay, intii Nabigu NNKH noolaa deegaannada carbeed ee kulaala amaba kasoo horjeeda Xeebaha Soomaaliya.",
          "Intii u dhaxaysay sannadkii 6aad illaa 11aad ee Hijriyada, waa 628 illaa 632 Miilaadigee, waxa uu Islaamku gaaray Yaman, Cumaan, Xadramuut iyo Baxrayn.",
          "Baadaan, wakiilkii Faaris ee Yaman, ayaa Islaamay sannaddii 7aad ee Hijriyada, keddib geeridii Kisrihii Faaris iyo warqaddii Suubanaha ee soo gaartay.",
          "Baxrayn ayaa Iyana Islaamka qaadatay isla sannaddii 7aad ee Hijriyada, keddib farriin Nabigu NNKH uu ugu dhiibay saxaabigii Calaa Al-Xadrami.",
          "Cummaanna waxaa sannaddii 8aad ee Hijriyada Islaamay labadii boqor ee ka talinaysay ee ilma Julanda, keddib markii ay gaartay warqaddii Nabigu NNKH ugu dhiibay Camar Bin Caas.",
          "Halkaan waxaan ku haynaa Islaamka oo biya-dhigtay dhammaan gobollada Koonfurta Jasiiradda Carabta ee juquraafi ahaan ugu dhaw dhulkeenna, sidoo kalena sidaan dib ka arki doonno Yaman, Cumaan, Xadramawt iyo Baxrayn ayaa noqon doona dalalkii ay ka yimaadeen inta badan dadkii goor danbe xeebaha Soomaaliya u soo hayaamay.",
          "Halkaas laba qodob iigu sii hay: waa xeebeheenna oo xiriir soo jireen ah iyo dhawaansho juquraafiyeedba la leh xeebaha koonfurta Jasiiradda Carabta.",
          "waa midda labaade, waa Islaamka oo intii Suubanuhu NNKH noolaa soo gaaray isla deegaannadaas carbeed.",
          "Mid saddexaad ayaan raacinayaa, balse marka hore aan dib ugu noqonno doomihii ka ambaxabay marsadii Al-Shucayba iyo saxaabadii Ardul-Xabasha Nabigu NNKH kula taliyay in ay miciin bidaan."
        ]
      },
      {
        "heading": {
          "en": "The emigrants to the land of Abyssinia",
          "so": "Muhaajiriintii dhulka Xabashida"
        },
        "en": [
          "The emigrants reached the land of Abyssinia, where they found what they were seeking; as the Mother of the Believers, Umm Salama, said:",
          "«وقدمنا أرض الحبشة فجاورنا بها خير جار، أمنا على ديننا وعبدنا الله لا نؤذى»",
          "Words meaning: \"We came to the land of Abyssinia, and there we found the best of neighbours, and we were safe in our religion.\"",
          "When those Companions found shelter and safety there, another group of the Companions of Mecca followed them, but this time far more numerous: 83 men and 18 women took part in the second migration to Abyssinia, among them many leading Companions, first of all Ja'far ibn Abi Talib, the cousin of the Prophet (peace and blessings be upon him).",
          "Quraysh, the great tribe of Mecca from which those Companions had fled, did not leave it at that: they sent two men after them to persuade the king of Abyssinia to expel these people.",
          "That was the long debate held in the council of the Abyssinian king, the Najashi, between 'Amr ibn al-'As and 'Abdullah ibn Abi Rabi'a, speaking for Quraysh, and Ja'far ibn Abi Talib, speaking for the Companions who had emigrated.",
          "And in the end the king was convinced by the argument Ja'far put forward, and the envoys of Quraysh were sent back, together with the gifts they had brought.",
          "The Najashi, the king of Abyssinia, whose name was Ashama, embraced Islam, but he hid his Islam, fearing that the Christian priests and the officials of the state would rise against him, and that the Companions under his protection would be harmed.",
          "The Companions who reached Abyssinia stayed there for about 15 years: the first group arrived in the 5th year of the Prophet's mission, while the last group returned home from Abyssinia in the 7th year of the Hijra.",
          "In the 9th year of the Hijra, Ashama, the Najashi of Abyssinia, died, and the Prophet (peace and blessings be upon him) told his Companions the news:",
          "«مات اليوم رجل صالح، فقوموا فصلوا على أخيكم أصحمة»",
          "And the Prophet prayed the funeral prayer in absence for him, since there was no one there who knew of his Islam or who would pray over him.",
          "From this it is understood that through the migration to Abyssinia some of the local people became Muslims, keeping their Islam hidden, as Ashama did; and so Islam spread on the African continent before it even reached Medina.",
          "To the two points you were keeping for me earlier, add this third one: Islam reached Africa, and East Africa at that, before it reached Medina.",
          "We are still laying the groundwork for answering the question: when did Islam reach Somalia?"
        ],
        "so": [
          "Muhaajiriintii waxa ay gaareen dhulkii Xabashida, halkaas oo ay ka heleen wixii ay bidayeen, oo waatii Ummul-Mu’miniin Ummu-Salama ay lahayd:",
          "«وقدمنا أرض الحبشة فجاورنا بها خير جار، أمنا على ديننا وعبدنا الله لا نؤذى»",
          "Hadalkaas oo macnihiisu yahay: “Waxaan soo gaarnay dhulkii Xabashida, waxaana ka helnay deris kii ugu wanaagsanaa, diinteennina waan kula badbaadnay”.",
          "Markii saxaabadaasi ay halkaas ka heleen gabbaad iyo guri-amni, waxaa ka daba yimid rac kale oo saxaabadii Makka ah, balse markaan cadadkoodu intii hore wax badan ayuu dheer yahay, oo 83 nin iyo 18 haween ah ayaa hijradii labaad ee Xabashida ka qaybqaatay, waxaana ku jirey saxaabo badan oo hormuud ahaa, uuna ugu horreeyo Jafcar Bin Abii Daalib, Nabiga NNKH ina adeerkiis.",
          "Qureysh, tolweynihii Makka ee ay saxaabadaasi baxsadka ka ahaayeen, sidaas ugama harine, waxa ay ka daba direen laba nin oo boqorka Xabasha kasoo dhaadhiciya in dadkaan uu iska soo masaafuriyo.",
          "Waatii dooddii dheereed ee Camar Bin Caas iyo Cabdullahi Bin Abii Rabiica oo darafka Qureysh ka socda, iyo Jacfar Bin Abii Daalib oo u hadlayay saxaabadii soo hijrootay ay ku dhexmartay golihii boqorkii xabashadi ee Najaashi.",
          "Waana tii ugu danbayn boqorkii uu ku qancay dood-dhiibashadii Jacfar, ergadii Qureyshna iyaga iyo hadiyadihii ay wadeenba dib loo celiyay.",
          "Najaashi, boqorkii Xabashida oo magaciisu ahaa Asxama, ayaa diinta Islaamka qaatay, balse islaamnimadiisa ayuu qariyay, asagoo ka cabsanaya in wadaaddadii kiristaanka iyo saraakiishii dawladdu ay ku kacaan, dhibna loo geysto saxaabadii maganta ahayd.",
          "Saxaabadii Xabasha gaartay waxa ay halkaas ku nagaatay muddo 15sano ah qiyaastii, oo waatii racii ugu horreeyay uu gaaray sannadkii 5aad ee Bicthada, halka kooxdii ugu danbaysana ay kasoo gurya-noqotay Xabasha sannadkii 7aad ee Hijriyada.",
          "Sannaddii 9aad ee Hijriyada ayaa waxaa geeriyooday Najaashigii Xabasha ee Asxama, Nabiga NNKH ayaa saxaabadiisa u sheegay khabarkaas:",
          "«مات اليوم رجل صالح، فقوموا فصلوا على أخيكم أصحمة»",
          "Nabiguna waxa uu ku tukaday salaatul-qaai’b, maadaama cid Islaamnimadiisa ogeyd iyo cid ku tukanaysa aysan jirin.",
          "Halkaan ayaa laga dugsadaa in Hijradii Xabasha ay ku islaameen dadka deegaanka qaar, islaamnimadoodana ay qarsanayeen, sidii Asxama, sidaas awgeedna uu Islaamku ku fiday Qaaradda Afrika intii uusan Madina xataa gaarin.",
          "Labadii qodob ee horey aad iigu haysay, midkaan saddexaad iigu dar: oo Islaamku Afrika, weliba Bariga Afrika ayuu soo gaaray, intii uusan Madina gaarin.",
          "Weli waxaan u gogol-xaaraynaa ka jawaabidda Su’aasha ah Goormee Islaamku Soomaaliya soo gaaray."
        ]
      },
      {
        "heading": {
          "en": "Did the Companions pass through Zeila?",
          "so": "Saxaabadu ma soo mareen Saylac?"
        },
        "en": [
          "Let us come to the question with which we opened this session: did the sea voyage of the Companions who emigrated pass by, or land on, the Somali coasts?",
          "Some scholars hold that the emigrants passed through Zeila, and that some of them stayed there, and that in this way Islam reached our land in the lifetime of the Prophet (peace and blessings be upon him).",
          "Dr. Sada Mire noted that the oral tradition of the people of Zeila says that the emigrants passed through Zeila on their way to Aksum.",
          "Sharif Muhammad Aydarus wrote in his book أضواء على تاريخ الصومال that Islam reached Somalia \"eight years before the Hijra to Medina\".",
          "Prof. Mohamed Haji Mukhtar also noted that many Somalis believe that their forefathers became Muslims before the Hijra to Medina.",
          "It is worth mentioning that Sibt ibn al-Jawzi (السبط ابن الجوزي) said that the Companions crossed at the narrowest point between the coast of Abyssinia and Yemen.",
          "But when we open the oldest sources referred to in the history of Islam, such as Ibn Sa'd and al-Tabari, they say that the Companions boarded the ships at the harbour of al-Shu'ayba on the coast of Jeddah and crossed to the land of the Najashi of Abyssinia, but they do not mention any place where they anchored or came ashore.",
          "Dr. Ali Abdirahman Hersi described the view that Islam reached Zeila with the migration to Abyssinia as \"speculation\" with no history to support it; but he found it reasonable that individuals among the Arab Muslims may have reached our land at that time and in times close to it.",
          "So the view that Islam reached our land at its very dawn has nothing behind it but a calculation that puts things together, and no recorded history; and for that reason we cannot count it as certain, or even as likely.",
          "But here is the fourth point that I want you to add to the first three, something that cannot be denied and is clear to us here: that migration opened the door to a new kind of crossing, unknown on the earlier voyages of the Red Sea, namely religious travel; for where before the crossings had been limited to trade alone, now travel and migration carrying a religion were added."
        ],
        "so": [
          "Aan u nimaadno su’aashii aan fadhiga ku furfurannay ee ahayd: Safar-badeedkii Saxaabadii soo hijrootay masoo mareen oo maka soo degeen Xeebaha Soomaaliya?",
          "Aqoonyahannada qaar ayaa qaba in muhaajiriintu ay soo mareen Saylac, qaarkoodna halkaas ku hareen, sidaasna uu Islaamku ku soo gaaray dhulkeenna noloshii Nabiga NNKH.",
          "Dr. Sada Mire ayaa xustay in hidda-afeedka reer Saylac uu sheegayo in muhaajiriintu ay Aksum u mareen Saylac.",
          "Shariif Maxamed Caydaruus, buuggiisa أضواء على تاريخ الصومال, waxa uu ku qoray in Islaamku soo gaaray Soomaaliya \"siddeed sano ka hor Hijradii Madina”.",
          "Prof. Maxamed Xaaji Mukhtaar-na waxa uu xusay in Soomaali badan ay aaminsan yihiin in awowayaashood ay Islaameen ka hor Hijradii Madiina.",
          "Waxaa xusid mudan in السبط ابن الجوزي uu sheegay in saxaabadu ay ka gudubtay meesha ugu cidhiidhsan u dhexaysa xeebta Xabashida iyo Yaman.",
          "Markaan dib usoo kala furnay ilaha ugu da’da weyn ee taariikhda Islaamka laga tixraaco sida sida Ibnu Sacd iyo Al-Dabari, waxa ay sheegaan in ay saxaabadu doomaha ka raaceen marsada Al-shucayba ee saaran xeebta Jidda, una tallaabeen dhulkii Najaashigii Xabashida, balse ma aysan soo hadal-qaadin meel ay ku xirteen oo ay doomaha uga degteen.",
          "Dr. Cali Cabdiraxmaan Xirsi ayaa ku tilmaamay aragtida ah in Islaamku soo gaaray Saylac hijradii Xabasha mid “mala-awaal” ah oo aan taariikh loo cuskado loo hayn, balse waxa uu maangal ka dhigay in ay dhici karto in shakhsiyaad kamid ah muslimiintii Carabta ay soo gaareen dhulkeenna xilligaas iyo xilliya ku dhawba.",
          "Haddaba aragtida ah in Islaamku waaberigii horeba uu soo gaaray dhulkeenna ayaan isu-geyn xisaabeed mooyee aan taariikh xusan loo hayn, sidaas awgeedna aannan yaqiin iyo malaba u tirin karin.",
          "Balse, waa qodobka afaraad oo aan rabo in aad iigu geyso saddexdii horee, waxaan la inkiri karin halkaanna inooga cad in Hijriyadaas ay albaabada u furtay saan cusuboo aan safaradii hore ee badda cas lagu aqoon: waa safar-diimeedkee, oo awal haddii isu-gudubku ku koobnaa arrimaha ganacsiga oo qudha, hadda waxaa kusoo biiray safar iyo hijro diin xambaarsan."
        ]
      },
      {
        "heading": {
          "en": "The Mosque of the Two Qiblas in Zeila",
          "so": "Masjidka Labada Qiblo ee Saylac"
        },
        "en": [
          "I said a little earlier that the view that Islam reached us very early has no evidence behind it; but let us go back and examine together the evidence attributed to it.",
          "If you visit the town of Zeila, you will hear of, and be taken by the hand to see, an ancient mosque called \"Masjid al-Qiblatayn\", \"the mosque with two qiblas\".",
          "The two qiblas mentioned mean that at first this mosque's qibla faced Jerusalem (Bayt al-Maqdis), and after the qibla was turned to Mecca, a second qibla was made there; and so this mosque is said to be a witness that Islam reached our land at the very beginning.",
          "For if prayer was made obligatory on the Blessed Prophet (peace and blessings be upon him) in the 10th year of his mission, three years before his Hijra to Medina, and from that time until the middle of the 2nd year of the Hijra the qibla was Jerusalem, and it was then turned to Mecca and the Kaaba, this would tell us that Zeila had Islam and mosques, and was keeping pace with the revelation in Medina and the Islamic community.",
          "But this claim, and the two qiblas of this mosque, need examination and tracing.",
          "Dr. Sada Mire, who surveyed the historical sites of the town of Zeila, recorded the local tradition we have just told, but she added: \"although no archaeological evidence has yet been found to confirm the age of the mosque\".",
          "In 2001 a team of archaeologists led by François-Xavier Fauvelle investigated this mosque; they found one mihrab facing north, over which another structure had been built whose purpose and direction could not be made out.",
          "They confirmed that the mosque was built in two phases: the building standing now was preceded by an earlier one, on whose ruins it was raised.",
          "The objects found in the excavation of the mosque consisted of local pottery and fragments of ceramic ware of a kind used in China in later centuries.",
          "This team of archaeologists suggested that the claim of \"two qiblas\" for the mosque may refer to the two successive phases of the mosque's building.",
          "So neither the archaeological research nor the written sources of history support the point that this mosque came before the Hijra to Medina, and that Islam was settled in Zeila in those times.",
          "There is also a geographical fact worth mentioning: from Zeila, both Mecca and Jerusalem lie to the north; it is not like the \"al-Qiblatayn\" mosque in Medina, whose first qibla was Jerusalem, to the north, while its later qibla was the Kaaba, to the south.",
          "So the two qiblas spoken of are hard to tell apart, since both face the same direction."
        ],
        "so": [
          "Waxaan waxyar kahor afka ku dhuftay in aragtida ah in Islaamku aalasay ina soo gaaray aan caddayn loo hayn, balse aan dib u noqdoo aan caddayn arrintaas loo tiiriyo aan wada lafa-gurno.",
          "Haddii aad booqato magaalada Saylac, waxaa dhegtaada kusoo dhacaya, inta gacanta lagu qabtana isha laguu soo saarayaa masjid qadiimi ah oo lagu magacaabo “Masjid Al-Qiblatayn” ama “Masjidkii labada qiblo lahaa”.",
          "Labada qibloo la sheegayo waxaa loola jeedaa in masjidkaasi markiisii hore ay qibladiisu Baytul-Maqdis u jeedday, keddib markii Qiblada loo soo wareejiyay Makka-na, halkaas qiblo labaad looga yagleelay, sidaas awgeedna uu masjidkaan marag u yahay in Islaamku judhii horeba soo gaaray dhulkeenna.",
          "Oo haddii Salaadda Suubanaha NNKH lagu soo faral-yeelay sannaddii 10aad ee Bicthada, saddex sano kahor hijradiisii Medina, goortaas laga bilaabo illaa bartamihii sannaddii 2aad ee Hijriyadana ay qibladu ahayd Baytul-Maqdis, kedibna loosoo wareejiyay Makka iyo Kacbada, taasi waxa ay ina leedahay Saylac waxaa ka jiray Islaam, masaajidyo leh, isla markaana waxyiga Madina iyo bulshadii Islaamka la jaanqaadayay.",
          "Balse sheegashadan iyo labada qiblo ee masjidkaan ayaa baaris iyo raadraac inooga baahan.",
          "Dr. Sada Mire oo sahan ku samaysay goobaha taariikheed ee magaalada Saylac, ayaa soo guurisay sheeka-afeedka bulshada ee aan hadda soo sheegnay, waxa ayse raacsatay: “inkastoo aan weli la helin wax caddayn degel-baariseed ah oo xaqiijinaya da’da masjidka”.",
          "2001-dii koox degel-baarayaal ah oo uu hoggaaminayay François-Xavier Fauvelle ayaa baaritaan ku sameeyay masjidkaan, waxa ay heleen hal mixraab oo u jeeda dhanka waqooyi, lagana dul dhisay dhismo kale oo aan la garan karin waxa uu ahaa iyo jihada uu u jeeday.",
          "Waxa ay xaqiijiyeen in dhismaha masjidku uu laba marxalo ahaa, dhismaha hadda taaganna uu mid hore ka horreeyay, burburkiisana laga dul taagay.",
          "Agabka laga helay degel-baarista masjidka waxa ay ka koobnaayeen dheryo maxalli ah iyo burbur agab dhoobo ka samaysan oo Shiinaha laga adeegsan jirey qarniyo danbe.",
          "Kooxdan degel-baarayaasha ah waxa ay soo jeediyeen in sheegashada “labada qiblo” ee masjidka laga yaabo in ay tilmaamayso labada weji ee dhismaha masjidka ee kala danbeeyay.",
          "Haddaba, baaritaannada degel-baariseed iyo dhiganayaasha taariikhduba ma taageerin qodobka ah in Masjidkaas uu Hijradii Madina ka horreeyay, isla markaasna Islaamku biya-dhigtay Saylac waayadaas.",
          "Waxaa kaloo jirta xaqiiqo juquraafiyeed oo in aan xusno mudan, taasoo ah in marka Saylac la joogo, Makka iyo Baytul-Maqdisba ay Waqooyi ka xigaan, Oo ma aha sida masjidka “Al-Qiblatayn” ee magaalada Madina, oo qibladiisii koowaad ay Baytul-Maqdis aheed iyo dhanka Waqooyi, halka qibladii danbena ay Kacbada iyo koonfur ahayd.",
          "Haddaba labada qiblo ee la sheegayo kala garashadoodu way adag tahay maadaama ay hal jiho wada qaabilayaan."
        ]
      },
      {
        "heading": {
          "en": "The graves of Mogadishu: the archaeological evidence",
          "so": "Qabriyada Muqdisho: caddaymaha degel-baarista"
        },
        "en": [
          "We have still not answered the question: \"When did Islam reach our land?\"; we are still gathering evidence.",
          "To answer that question, to the four points I have handed you we will attach the reports of the historical sources and the archaeological information, and from putting them together the most reasonable answer will come to light.",
          "Let us begin with the archaeological information:",
          "Sheikh Ahmed Abdullahi Riiraash said in his book كشف السدول عن تاريخ الصومال ومماكلهم السبعة that two graves were found in Mogadishu in which two women are buried, and on the two graves the following information is inscribed:",
          "The first grave records that Fatima bint 'Abd al-Samad Ya'qub died in the year 101 of the Hijra, that is, 719 CE.",
          "And the second grave records that al-Hajiya bint Muhammad Muqaddam died in the month of Dhu al-Hijja, in the year 138 of the Hijra, that is, 756 CE.",
          "If Riiraash's report is correct, it would be the strongest evidence indicating that Muslims lived in Mogadishu at the beginning and the middle of the 2nd century of the Hijra.",
          "Many Somali historians and researchers have repeated this claim from Riiraash, among them: Ali Abdirahman Hersi, Ahmed Dualeh Jama and Prof. Cabdalla Cumar Mansuur.",
          "To check whether this information is sound, we must bring up Enrico Cerulli.",
          "Cerulli was an Italian scholar who specialised in the history and writings of the Horn of Africa, and he worked with the Italian colonial administration in Somalia.",
          "In the 1920s he researched Mogadishu and the towns of Benadir, and recorded the Arabic inscriptions carved on graves, mosques and minarets.",
          "In 1926 he published the results of his collection in an article he titled \"Iscrizioni e documenti arabi per la storia della Somalia\", meaning \"Arabic inscriptions and documents on the history of Somalia\".",
          "Thirty years later he published that article, with other writings added to it, in a book of three volumes, which came out in 1957, 1959 and 1964.",
          "So, since Cerulli is the person who could be referred to, as the original and first-hand source, for the two graves Riiraash mentioned and the inscriptions on them, when we opened his first article of 1926 and his three-volume book completed in 1964, we found in neither any information or record concerning those two graves.",
          "When Cerulli dated the Arabic inscriptions he found, he said that the oldest was a grave inscription he found in northern Shangaani, where there is buried: Abu 'Abdallah ibn Raya ibn Muhammad ibn Ahmad al-Naysaburi al-Khurasani, who died in the year 614 of the Hijra, that is, 1217 CE.",
          "But he added that from the town of Brava he had been sent a copy of an inscription found in the Friday mosque of Brava, which gave the date 498 of the Hijra, that is, 1105 CE, more than a century before the oldest grave inscription in Mogadishu; and Cerulli said that if this Brava date had been copied correctly, it would be the oldest Arabic inscription in the Somali region known so far.",
          "So, the two graves of Fatima bint 'Abd al-Samad and al-Hajiya bint Muhammad, if their information is correct, would let us conclude that Islam and a Muslim community lived in Mogadishu in the very first century of the Hijra.",
          "We can strengthen this point with the Swahili coast of Kenya: the archaeologist Mark Horton found at the town of Shanga the remains of a mosque whose date was estimated at the middle of the eighth century CE, that is, the second century of the Hijra.",
          "If on a coast that much further from the Arabian Peninsula the remains and traces of Islam were found in the same second century of the Hijra, then it is possible, and indeed likely, that Islam reached the Somali coasts at that time or before, for the reasons we have set out."
        ],
        "so": [
          "Weli kama aannan jawaabin weydiintii ahayd: “Goormuu Islaamku soo gaaray geyigeenna”, oo caddaymo ururis ayaan ku jirnaa.",
          "Markaan rabno in aan su’aashaas ka jawaabno, afartii qodob ee aan kuusoo dhiibtay, waxa aan kuugu lifaaqaynaa warbixinnada ilaha-taariikhda iyo xogaha degel-baarista, isu-geyntoodana waxaa inooga soo dhalaalaysa jawaabta ugu macquulsan.",
          "Aan ku bilawno xogaha dedel-baariseed:",
          "Sheekh Axmed Cabdallaah Riiraash ayaa buuggiisa كشف السدول عن تاريخ الصومال ومماكلهم السبعة ku sheegay in Muqdisho laga helay laba qabri oo ay ku aasan yihiin laba haween ah, waxaana ku xardhan labada qabri xogtaan soo socota:",
          "Qabriga koowaad waxaa ku qoran in Faatima bint Cabdi-Samad Yacquub ay dhimatay sannadkii 101 ee Hijriyada, waa 719-kii Miilaadigee.",
          "Qabriga labaadna waxaa ku qoran in Al-Xaajiya bint Muxammad Muqaddam ay dhimatay bisha Dul-Xijja, sannadkii 138 Hijriyada, waa 756-kii Miilaadigee.",
          "Haddii warbixinta Riiraash ay sax tahay waxa ay noqonaysaa caddaynta ugu xoogga badan ee ishaaraysa in Muqdisho ay ku noolaayeen dad muslimiin ah bilawgii iyo bartamihii qarnigii 2aad ee Hijriyada.",
          "Taariikhyahanno iyo cilma-baarayaal badan oo Soomaali ah ayaa Riiraash kasoo guuriyay sheegashadaas, waxaana kamid ah: Cali Cabdiraxamaan Xirsi, Axmed Ducaale Jaamac iyo Prof Cabdalla Cumar Mansuur.",
          "Si aan u hubinno in ay xogtaan qumman tahay, waa in aan soo hadal-qaaadnaa Enrico Cerillu.",
          "Cerulli waxa uu ahaa aqoonyahan Talyaani ah oo ku takhasusay taariikhda iyo qoraallada Geeska Afrika, waxa uuna lasoo shaqeeyay maamulkii Gumeystaha Talyaaniga ee Soomaaliya.",
          "1920-meeyadii waxa uu Muqdisho iyo magaalooyinka Banaadir ka baaray, kana diiwaangeliyay qoraallada Carabiga ah ee ku xardhan qabuuraha, masaajidda iyo minaaradaha.",
          "Sannadkii 1926 ayuu Natiijada ururintiisa ku daabacay maqaal uu cinwaan uga dhigay: \"Iscrizioni e documenti arabi per la storia della Somalia\", oo macnihiisu yahay \"Qoraallo iyo dukumentiyo Carabi ah oo ku saabsan taariikhda Soomaaliya\".",
          "Soddon sano kaddib ayuu maqaalkaas iyo qoraallo kale oo uu raaciyay ku daabacay buug saddex mujallad ah, oo soo baxay sannadihii 1957, 1959 iyo 1964.",
          "Haddaba, maadaama ay Cerulli tahay cidda asal ahaan iyo is-dul taag ahaanba laga tixraaci karo labadaas qabri ee uu Riiraash xusay iyo qoraallada ku xardhanba, markii aan soo kala furnay maqaalkiisii hordhaca ahaa ee 1926 iyo buuggiisa saddexda mujallad ee 1964 soo idlaaday, intaba kama aannan helin wax xog iyo soo guurin quseysa labadaas qabri.",
          "Markii Cerulli uu waqtiyaynayay qoraallada carabiga ah ee uu helay, waxa uu sheegay in uu ugu da’weyn yahay qoraalka qabri uu ka helay waqooyiga Shangaani, halkaas oo uu ku aasan yahay: Abuu Cabdalla ibnu Raya ibnu Muxammad ibnu Axmed an-Naysaabuuri al-Khuraasaani, oo geeriyooday sannaddii 614-kii Hijriyada, waa 1217 Miilaadigee.",
          "Balse waxa uu raaciyay in magaalada Baraawe looga soo dhiibay min-guurinta qoraal laga helay masjid Jaamaca Baraawe, kaasoo xusay taariikhda 498 Hijriyada, waa 1105 Miilaadigee, qarni iyo dheeraad kahor qoraalka qabriga ugu da’da weyn Muqdisho, waxa uuna Cerulli sheegay in haddii taariikhdan Baraawe si sax ah loosoo guuriyay uu noqonayo qoraalka af-carabiga ah ee ugu da’da weyn deegaanka Soomaalida ee illaa hadda la hayo.",
          "Haddaba, labada qabri ee Faatima bint Cabdi-Samad iyo Al-Xaajiya bint Muxammad, haddii xogtoodu sax tahay, waxaan ka daliilasan karnaa in Muqdisho Islaam iyo bulsho muslim ahba ay ku dhaqnaayeen isla qarnigii koowaad ee Hijriyada.",
          "Waxaan middaan ku xoojin karnaa, xeebta Sawaaxiliga ee Kenya, degel-baaraha Mark Horton ayaa magaalada Shanga ka helay haraadiga masjid waqtigiisa lagu qiyaasay bartamihii qarnigii siddeedaad ee Miilaadiga, waa qarnigii labaad ee Hijriyada.",
          "Haddiiba marka xeeb sidaas uga sii durugsan Jasiiradda Carabta laga helay haraadiga iyo raadadka Islaamka isla qarnigii labaad ee Hijriyada, hadde waa suurtagal wayna u badan tahay in xeebaha Soomaaliyeed uu Islaamku soo gaaray goortaas iyo ka horba, asbaabihii aan soo taxnay aawadood."
        ]
      },
      {
        "heading": {
          "en": "Written sources: Duan Chengshi, al-Hamdani and al-Mas'udi",
          "so": "Ilaha qoran: Duan Chengshi, al-Hamdaani iyo al-Mascuudi"
        },
        "en": [
          "Besides those archaeological findings, let us look at the written information the world's historians left about the Somali land, and what they said about the religion of the people there.",
          "In the ninth century CE, which corresponds to the third century of the Hijra, a Chinese writer called Duan Chengshi reported on the coast of Berbera, and said that the country had never come under foreign rule; but he mentioned nothing about the religion of the local people.",
          "Some scholars have taken this to mean that the Somali were not Muslims at that time, or were not known as Muslims; but that is not Duan Chengshi's report: it is an interpretation placed on it.",
          "In the tenth century CE, which corresponds to the 4th century of the Hijra, the Arab geographers and historians began to report on our coasts.",
          "Al-Hamdani, who lived in the middle of the fourth century of the Hijra, said in his work صفة جزيرة العرب, when speaking of Zeila:",
          "\"Zeila has a market where livestock, especially goats, are brought from the land of Abyssinia; there they are slaughtered, their skins are exported, and their remains are thrown into the sea.\"",
          "Ibn Hawqal added that most of the hides imported into Yemen came from Zeila.",
          "Al-Mas'udi mentioned in his history مروج الذهب that in the coastal towns of Zeila, Dahlak and Badi' there lived a group of Muslims, but that the Abyssinians were stronger than them.",
          "So, putting this information together, it emerges that in the fourth century of the Hijra, which corresponds to the tenth century CE, Muslims lived in Zeila; but, as can be understood from al-Mas'udi's words, those people were an outnumbered minority, gathered in that coastal town.",
          "Before we go further, let us point out one matter.",
          "Al-Mas'udi's words \"وهم في ذمّة الحبشة\" (\"and they are under the protection of the Abyssinians\") were taken by historians including Conti Rossini and Trimingham to mean that the Abyssinian kingdom ruled Zeila at that time; but the archaeological research of Fauvelle and his team in the town of Zeila indicated that this reading is wrong, and that the Arab geographers used \"Abyssinia\" as the name of a region, not to mean the kingdom of Aksum.",
          "As they see it, in the 9th and tenth centuries Zeila was an independent port, not under the Christian kingdom of Abyssinia, where a few Muslims, mostly traders, lived among people of the town who had not yet become Muslims."
        ],
        "so": [
          "Ka sokow degel-baarisyadaas, aan milicsanno xogaha qoran ee taariikhyahannadii dunidu ka reebeen dhulka Soomaalida iyo waxa ay ka sheegeen diinta deegaanka.",
          "Qarnigii sagaalaad ee Miilaadiga, oo ku beegan qarnigii saddexaad ee Hijriyada, qoraa Shiinees ah oo la oran jiray Duan Chengshi ayaa ka warramay xeebta Berbera, Waxa uuna sheegay in dalkaasi aanu weligii hoos iman xukun shisheeye, balse diinta dadka deegaanka waxba kama uusan xusin.",
          "Aqoonyahannada qaar ayaa u macneeyay in aysan Soomaalidu waagaas Muslim ahayn ama aan loo aqoon dad muslim ah, balse taasi ma aha warbixinta Duan Chengshi ee waa fasiraad la saaray.",
          "Qarnigii tobanaad ee Miilaadiga, oo ku beegan qarnigii 4aad ee Hijriyada, juqraafiyiinta iyo taariikhyahannada Carabta ayaa bilaabay in ay xeebaheenna ka warramaan.",
          "Al-Hamadaani, oo noolaa bartamihii qarnigii afaraad ee Hijriyada, ayaa dhiganihiisa صفة جزيرة العرب, Saylac mar uu ka hadlayay yiri:",
          "‏“Saylac waxa ay leedahay Saylad xoolaha, gaar ahaan ariga, looga keeno dhulka Xabashida, halkaasoo lagu qalo, haraggoodana laga dhoofiyo, haraadigoodana badda lagu qubo”.",
          "‏Ibnul-Xawqal ayaa intaas raaciyay in inta badan hargaha Yaman loosoo waarido ay Saylac ka imaan jireen.",
          "Al-Mascuudi ayaa taariikhdiisa مروج الذهب ku xusay in magaalo-xeebeedyada: Saylac, Dahlak iyo Baadic ay ku noolyihiin koox muslimiin ah, balse Xabashidu ka itaal roon tahay.",
          "Haddaba, isu-geynta xogahaas waxaa inooga soo baxaysa in qarnigii afaraad ee Hijriyada, oo ku beegan qarnigii tobnaad ee Miilaadiga, ay Saylac dad muslimiin ah ku noolaayeen, balse sida hadalka Mascuudi laga dhadhansanayo dadkaasi aqalliyo laga tira-badan yahay bay ahaayeen, kuna urursan magaala-xeebeeddaas.",
          "Intaynaan horey usii socon, aan hal arrin baraarujinno.",
          "Hadalka Mascuudi ee ah “وهم في ذمّة الحبشة” taariikhyahanno ay kamid yihiin Conti Rossini iyo Trimingham ayaa u qaatay in Boqortooyadii Xabashidu ay Saylac ka talinaysay waqtigaas, balse degel-baaristii Fauvelle iyo kooxdiisa ee magaalada Saylac ayaa waxa ay tilmaameen in akhrintaasi khaldan tahay, juquraafiyiintii carabtuna ay \"Xabasha\" u adeegsanayeen magac gobol, ee aysan ula jeedin boqortooyadii Aksum.",
          "Sida ay qabaanna, Saylac qarnigii 9aad iyo tobanaad waxa ay ahayd deked madax-bannaan oo aan hoos imaan boqortooyadii masiixiga ahayd ee Xabasha, muslimiin kooban oo ganacsato u badanna ay ku dhex noolaayeen dad aan weli islaamin oo magaalada degganaa."
        ]
      },
      {
        "heading": {
          "en": "Excavations in Mogadishu, Barbar and Zeila",
          "so": "Qodisyada Muqdisho, Barbar iyo Saylac"
        },
        "en": [
          "In the south, in 1986 Dr. Ahmed Dualeh Jama dug at the site of the Shangaani mosque in Mogadishu, and at its base he found objects dated to the eleventh century CE, the fifth century of the Hijra; and he said that the earliest foundations of the mosque may go back a century before that date.",
          "Neville Chittick, the British archaeologist whose excavation at Xaafuun we presented in the previous session, holds that there is no evidence showing that a town stood on the site of Mogadishu before the end of the twelfth century CE.",
          "And on the Barbar coast, the team of archaeologists led by Alfredo González-Ruibal found a mosque with a mihrab made of clay, which they dated to the eleventh century CE, which corresponds to the 5th century of the Hijra.",
          "In the year 548 of the Hijra, that is, 1154 CE, the geographer al-Idrisi, describing Brava and what lies below it, said that it was the last place before the land of the unbelievers who believed in nothing:",
          "The reports of archaeology and of the historical sources up to the fifth century of the Hijra, which corresponds to the eleventh century CE, picture for us that Islam had reached this land, but that it was scattered here and there, confined to the coastal areas and their settlements."
        ],
        "so": [
          "Dhanka koonfureed, Dr. Axmed Ducaale Jaamac ayaa sannadkii 1986 qodis ku sameeyay goobta masjidka Shangaani ee Muqdisho, waxa uuna salkiisa ka helay agab lagu qiyaasay saman ahaan qarnigii kow iyo tobnaad ee Miilaadiga, ee shanaad ee Hijriyada, waxa uuna sheegay in aasaaska hore ee masjidku uu qarni kasii horreyn karo taariikhdaas.",
          "Neville Chittick, degel-baarihii Ingiriiska ahaa ee aan fadhigii hore ku soo bandhignay qodistiisii Xaafuun, ayaa qaba in aan la hayn wax caddayn ah oo muujinaysa in goobta Muqdisho ku taal ay ka dhisneed magaalo ka hor dhammaadkii qarnigii laba iyo tobnaad ee miilaadiga.",
          "Xeebta Barbarena, kooxdii degel-baarayaasha ee uu hor kacayay Alfredo González-Ruibal ayaa heshay masjid mixraabkiisu dhoobo ka samaysan yahay, kuna qiyaaseen qarnigii kow iyo tobnaad ee miilaadiga, oo ku beegan qarnigii 5aad ee Hijriyada.",
          "Sannadkii 548 ee Hijriyada, waa 1154-kii Miilaadiga, juqraafiyahanka Al-Idriisi oo ka warramaya Baraawe iyo wixii ka hooseeya ayaa ku tilmaamay in ay dhulka gaalada aan waxba aamminsanayn ay ugu danbayso:",
          "Warbixinta degel-baarista iyo ilaha taariikhda illaa laga soo gaaro qarnigii shanaad ee Hijriyada, oo ku beegan qarnigii kaw iyo tobnaad ee Miilaadiga, waxa ay inoo sawirayaan in Islaamku dhulkan soo gaaray, balse uu teel-teel ku ahaa, kuna koobnaa deegaannada xeebaha iyo rugahooda."
        ]
      },
      {
        "heading": {
          "en": "The 11th to 14th centuries: Zeila and Mogadishu",
          "so": "Qarniyadii 11aad ilaa 14aad: Saylac iyo Muqdisho"
        },
        "en": [
          "But in the thirteenth century CE, the seventh of the Hijra, the general picture of this land changed, and the information left about it differed from what came before.",
          "Yaqut al-Hamawi, who died in the year 626 of the Hijra, that is, 1229 CE, described the people of Zeila as Muslims.",
          "Ibn Sa'id al-Maghribi, who died in the year 685 of the Hijra, which corresponds to 1286 CE, also described the people of Merca as Muslims, and when speaking of Mogadishu he said:",
          "«مدينة الإسلام المشهورة في ذلك الصقع»",
          "\"The most famous city of Islam in that region.\"",
          "Half a century later, in the year 731 of the Hijra, 1331 CE, the famous traveller Ibn Battuta set foot in the Somali regions, from Zeila to Mogadishu, and gave a detailed account of them.",
          "We will go into Ibn Battuta's account in another session; but what concerns us now is that the places he visited, especially Mogadishu, were a land of Islam, where the knowledge of the Sharia, the study circles of the mosques and the religious schools all flourished.",
          "Putting together this information that historians, geographers and travellers left about the Somali land over a period of six centuries, we can draw from it that although Islam arrived early on our coasts, it stayed there for a long time and did not cross into the interior, and the Islamisation of the coasts themselves took several centuries.",
          "Prof. Cabdalla Cumar Mansuur put it this way:",
          "\"Although the religion of Islam reached the Somali coastal towns in those early times, it did not spread quickly to the rest of the country.\""
        ],
        "so": [
          "Balse, Qarnigii saddex iyo tobnaad ee Miilaadiga, ee toddobaad ee Hijriyada, ayaa muuqaalka guud ee dhulkan isbeddelay, xogaha laga reebayna ay ka duwanaayeen kuwii ka horreeyay.",
          "Yaaquut Al-Xamawi, oo dhintay sannadkii 626 Hijriyada, waa 1229-kii Miilaadiga e, ayaa dadka Saylac ku tilmaamay in ay yihiin dad muslimiin ah.",
          "Ibnu Saciid Al-Maqribi, oo dhintay sannadkii 685 Hijriyada, oo ku beegan 1286-kii Miilaadiga, ayaa isna ku tilmaamay reer Marka dad muslimiin ah, Muqdisho markuu ka hadlayayna waxa uu yiri:",
          "«مدينة الإسلام المشهورة في ذلك الصقع»",
          "“Magaalada Islaamka ee ugu caansan deegaankaas”.",
          "Nus qarni keddib, sannadkii 731 Hijriyada, 1331-kii Miilaadiga, dhulmareenkii caanka ahaa ee Ibnu-Batuuta, ayaa soo caga-dhigtay deegaannada Soomaalida, laga soo bilaabo Saylac illaa Muqdisho, oo warbixin faahfaahsan uu ka bixiyay.",
          "Warbixinta Ibnu-Batuuta fadhi kale ayaan ku faahfaahinaynaa, balse hadda waxaa inaga quseeya in deegaannada uu yimid gaar ahaan Muqdisho ay ahayd dhul Islaam, oo weliba Cilmiga sharciga ah, xalaqaadka masaajidda iyo madaarista diiniga ahba ay cammirnaayeen.",
          "Isu-geynta xogahan ay taariikhyahannada, juquraafiyiinta iyo dhulmareennadu ka reebeen dhulka Soomaalida muddo lix qarni ah, waxa aan kala soo bixi karnaa in Islaamku haba kusoo hormaree xeebeheenna, balse uu halkaas muddo dheer ku raagay, oo uusan daakhilka usoo tallaabin, islaamaynta xeebaha laftirkeeduna ay qarniyo dhawr ah qaadatay.",
          "Prof. Cabdalla Cumar Mansuur ayaa u dhigay sidatan:",
          "\"Inkastoo diinta Islaamku ay waayadaa hore soo gaartay magaalo-xeebeedyada Soomaaliyeed, haddana dhaqso uguma fidin dalka intiisa kale.\""
        ]
      },
      {
        "heading": {
          "en": "How did Islam reach us?",
          "so": "Sidee buu Islaamku inagu soo gaaray?"
        },
        "en": [
          "After the question of when Islam reached us comes the question: how did Islam reach us?",
          "Let us go back to the seventh century and the beginning of the religion of Islam.",
          "After the death of the Prophet (peace and blessings be upon him), in the 11th year of the Hijra, that is, 632 CE, Islam spread rapidly to the north and the east of the Arabian Peninsula.",
          "Within decades Syria, Iraq, Egypt, Persia and North Africa were conquered and taken by Islam, and at the end of the 1st century of the Hijra the Muslims crossed to the Iberian peninsula, al-Andalus.",
          "The armies and conquests of Islam that set foot in all those lands did not even glance at the Horn of Africa, and no army was sent there.",
          "This is explained by several things: first, the sea lies between the Horn of Africa and the Arabian Peninsula, and the Muslims only took to fighting and raiding by sea later on.",
          "Second, a hadith has come down saying:",
          "«دعوا الحبشة ما ودعوكم، واتركوا الترك ما تركوكم»",
          "Meaning: \"Leave the Abyssinians and the Turks alone, as long as they leave you alone.\"",
          "This may be what held the Companions back from raiding and conquering the Horn of Africa.",
          "Third, in terms of the natural rivalry of powers, the Muslims were surrounded by two powers that held the richest lands of the Arabian Peninsula and its surroundings, Persia and Rome; and it made sense to take them on first.",
          "So, if no army was sent, and no conquest happened in our land, in what way did Islam reach us?",
          "The widest and most reasonable way Islam reached us was the delegations and trading caravans that came to us from the Arabian Peninsula.",
          "Dr. Ali Abdirahman Hersi said that wherever the Muslim trader went, he was selling both worldly goods and those of the Hereafter.",
          "The second group that carried Islam to us was the refugees who scattered from the struggles for power and the wars of the Arabian Peninsula, which began in the very time of the Companions.",
          "Prof. Mohamed Haji Mukhtar holds that the first groups to settle on the Benadir coast were people fleeing the wars of the Ridda (apostasy), most of them from Oman.",
          "There is a third group that reached us in a different way from those and brought us the religion: the preachers, people who travelled in order to spread the religion, as we will see with the forefathers of the Somali who crossed from the Arabian Peninsula.",
          "Beyond those three ways, trade, refugees and preachers, it is also said that armies sent by the Umayyad and Abbasid caliphates came to the region.",
          "It is said that 'Abd al-Malik ibn Marwan, the fifth Umayyad caliph, sent an army to the coasts of East Africa, and the local people became Muslims without a fight.",
          "Added to that, the Abbasid caliph Abu Ja'far al-Mansur, in the year 149 of the Hijra, that is, 766 CE, is said to have sent a man called Yahya ibn 'Umar al-'Anzi to bring the religion to the people and to collect the zakat.",
          "But these claims of armies and delegations sent from Damascus and Baghdad do not stand on firm legs: all of them are reported from a book called كتاب الزنوج, whose author is not well known, and which was written late, in the last century, the 19th, while the early historical sources such as al-Tabari and others like him mention nothing at all of these events."
        ],
        "so": [
          "Weydiinta waqtiyaynta ee xilligii Islaamku ina soo gaaray keddib, waxaa inoo imaanaysa su’aasha ah: Sidee buu Islaamku inagu soo gaaray?",
          "Aan dib ugu laabanno qarnigii toddobaad iyo bilawgii Diinta Islaamka.",
          "Geeridii Nabiga NNKH keddib, sannadkii 11aad ee Hijriyada, waa 632-kii Miilaadiga, Islaamku waxa uu si degdeg ah ugu fiday docda woqooyi iyo dhanka bari ee Jasiiradda Carabta.",
          "Tobanaan sano gudahood waxaa la furtay oo Islaamku qabsaday Shaam, Ciraaq, Masar, Faaris iyo Waqooyiga Afrika, gebagabadii qarnigii 1aad ee Hijriyadana Muslimiintu waxa ay u tallaabeen Jasiirad-u-yaasha Aybeeriya ama Andalus.",
          "Ciidamaddii iyo Futuuxaadkii Islaamka ee carrigaas oo dhan cagta mariyay, geeska Afrika masoo jalleecin, ciidanna looma soo dirin.",
          "Waxaa loo sababeeyaa arrinta dhawr arrimood, waa midda koowaade Geeska Afrika iyo Jasriiradda Carabta oo badi dhex taal, muslimiintuna ku duulka iyo ku dagaallanka badda waa danbe ayay qabatimeen.",
          "Waa midda xigtee, waxaa soo arooray xadiis odhanaya:",
          "«دعوا الحبشة ما ودعوكم، واتركوا الترك ما تركوكم»",
          "Oo macnihiisu yahay: “Xabashida iyo Turkida inta ay bannaanka idin ka joogaan, faraha ka qaada”.",
          "Middaan oo laga yaabo in ay saxaabada ka hakisay ku duulka iyo furashada Geeska Afrika.",
          "Waa midda saddexaade, marka laga eego dhanka loollanka dabiiciga ah ee quwadaha, Muslimiinta waxaa kulaalayay laba quwadood oo kala haystay dhulkii ugu hodansanaa ee Jasiiradda Carabta iyo hareereheeda, waa Faaris iyo Roomaankee. in ay marka koowaad ayaga madaxa geliyaanna maangal bay ahayd.",
          "Haddaba, haddaan ciidan lasoo dirin, futuuxaadna dhulkeena ka dhicin, habkee buu Islaamku inagu soo gaaray?",
          "Habka ugu ballaaran uguna macquulsan ee Islaamku inagu soo gaaray waxa ay ahayd wufuuddii iyo kolanyadii ganacsiga ee Jasiiradda Carabta inooga timid.",
          "Dr. Cali Cabdiraxmaan Xirsi ayaa sheegay in ganacsadaha muslimka ah meel walba uu tagayay uu ku beecinayay: badeeca adduunyo iyo mid aakhiraba.",
          "Qolada labaad ee Islaamka inoo sidday waxa ay ahayd qaxootigii kasoo firxaday loollankii awoodda iyo dagaalladii Jasiiradda Carabta ee Isla xilligii Saxaabadaba bilawday.",
          "Prof. Maxamed Xaaji Mukhtaar waxa uu qabaa in kooxihii ugu horreeyay ee xeebaha Banaadir soo degay ay ahaayeen dad ka soo cararay dagaalladii Riddada, intooda badanna Cumaan ka yimid.",
          "Waxaa jira qolo saddexaad oo ayana ged kuwaas ka duwan inagu soo gaaray diintana ina soo gaarsiiyay, waa ducaadda iyo dadkii in ay diinta faafiyaan awgeed usoo safray, sida aan ku arki doonno awoowayaashii Soomaalida ee Jasiiradda Carabta kasoo tallaabay.",
          "Saddexdaas hab keddib, waa ganacsiga, qaxootiga iyo ducaadda e, waxaa kaloo la sheegaa in ay deegaanka ay yimaadeen ciidamo ay soo direen khilaafooyinka Umawiyiinta iyo Cabbaasiyiinta.",
          "Waxaa la sheegaa in Cabdulmalik bin Marwaan, oo ahaa khaliifkii shanaad ee Umawiyiinta, uu ciidan u soo diray xeebaha Bariga Afrika, dadkii deegaankuna ay islaameen dagaal la’aan.",
          "Waxaa taas soo raacda in Khaliifkii Cabbaasiga ahaa ee Abuu Jacfar Al-Mansuur uu sannadkii 149 ee Hijriyada, waa 766-kii Miilaadiga, u soo diray nin la yiraahdo Yaxya bin Cumar Al-Canzi, si uu dadka diinta u gaarsiiyo, sakadana u ururiyo.",
          "Balse sheegashooyinkaan tilmaamaya ciidammo iyo wufuud laga soo diray Dimishiq iyo Baqdaad ayaan luga badan ku taagnayn, oo dhammaantood waxaa laga soo weriyaa kitaab la yiraahdo كتاب الزنوج, qoraagiisana aan si fiican loo garanayn, lana qoray waa danbe iyo qarnigii 19aad ee tagay, halka ilaha-taariikhda ee hore sida Al-Dabari iyo kuwa la midka ah aysan dhacdooyinkaas waxba kasoo hadal-qaadin."
        ]
      },
      {
        "heading": {
          "en": "Conclusion: when did Islam reach us?",
          "so": "Gunaanad: goorma ayuu Islaamku soo gaaray?"
        },
        "en": [
          "So, to sum up: WHEN DID ISLAM REACH THE SOMALI LAND?",
          "You were keeping four points for me:",
          "• The geographical closeness of our region to the Arabian Peninsula, where Islam came down.",
          "• The age-old trade ties between the people of this region and the Arabs on the other shore, before and after Islam",
          "• The migration to Abyssinia, and that Islam crossed to the African continent before it had even reached Medina.",
          "• In the lifetime of the Blessed Prophet (peace and blessings be upon him), Islam reached Yemen, Hadramawt, Oman and Bahrain, and they became Muslim: the regions of the Arabian Peninsula closest to our coasts, and the place from which the flow of Arabs and the ties between the two sides came.",
          "When we put those four facts together, and add to them the information on the two Mogadishu graves that Riiraash reported, if it is correct, we can say with confidence that Islam reached our region early, and that its first drop, if it did not come earlier, came no later than the beginning of the 2nd century of the Hijra.",
          "But alongside that I would add: however early Islam reached our land, its spread and the Islamisation of the local people took a good while; the historical information we have gone through confirms that from one century to the next the picture of the region kept changing, until we come to the 8th century of the Hijra and the Somali towns where the knowledge of the Sharia was pursued.",
          "Zeila, Mogadishu, Brava, Merca and the Barbar coast, we can say, were the first places in our land to receive Islam, where its first drops fell.",
          "The Somali, who today are a hundred per cent Muslim, did not receive Islam through any army or war: it was brought to them by traders, refugees and preachers spreading the religion.",
          "In the coming sessions we will see Islam, after passing the coasts, spreading little by little, gradually, into the interior of our land."
        ],
        "so": [
          "Haddaba, isku soo xooriyoo, GOORMUU ISLAAMKU SOO GAARAY DHULKA SOOMAALIDA?",
          "Waxa aad ii haysay afar qodob oo kala ah:",
          "• Isu-dhawaanshaha juquraafiyeed ee deegaankeenna iyo jasiiradda carabta, oo ah halkii Islaamku kusoo degay.",
          "• Xiriirka ganacsi ee soo jireenka ah ee ka dhexeeyay dadkii deegaankan iyo carabtii daanta kale kahor iyo keddib Islaamka",
          "• Hijradii Xabasha iyo in Islaamku uu usoo tallaabay qaaradda Afrika kahor intii uusan xattaa Madina gaarin.",
          "• Intii uu noolaa Suubanuhu NNKH waxaa islaamku gaaray oo la islaamiyay Yaman, Xadramuut, Cummaan iyo Baxreyn oo ah deegaannada ugu dhaw Jasiiradda Carabta ee xeebeheenna, isla markaasna ah meesha qulqulka carabta iyo xiriirka labada dhinac kasoo uskumay.",
          "Afartaas xaqiiqo markii aan isu-geynno, oo weliba u weheshanno xogaha labada qabri ee Muqdisho Riiraash kasoo sheegay, waa haddii ay sax yihiine, waxaan si kalsooni leh ku odhan karnaa Islaamku degelkeenna waqti hore ayuu soo gaaray, dhibicdiisii koowaadna haddii aysan ka horreyn kama danbayn bilawgii qarnigii 2aad ee Hijriyada.",
          "Waxaase taas ii wehelisa, Islaamku waagaas hasoo gaaro dhulkeenna ma xumee, in faafiddiisa iyo Islaamaynta dadka deegaanka ay muddo fiican qaadatay, oo xogaha taariikheed ee aan soo dulmarnay waxa ay inoo xaqiijinayaan in qarniba qarnigii ku xigay uu muuqaalka gobolku isa soo beddelayay, illaa aan u nimid qarnigii 8aad ee Hijriyada iyo magaalooyinka Soomaalida oo cilmiga shareecada laga raacdo.",
          "Saylac, Muqdisho, Baraawe, Marka iyo Xeebta Barbara ayaan odhan karnaa waa meelihii ugu horreeyay ee dhulkeenna Islaamka qaabilay, dhibicdiisuna ay ku hoortay.",
          "Soomaalida oo boqolkiiba boqol maanta Muslim ah, Islaamku kuma soo gaarin ciidan iyo dagaal toona, balse waxaa soo gaarsiiyay Ganacsato, Qaxooti iyo ducaad diinta faafinayay.",
          "Waxaan fadhiyada xiga ku arki doonnaa Islaamka oo intuu xeebaha soo dhaafo, tartiib tartiib iyo siqid ugu faafaya daakhilka dhulkeenna."
        ]
      },
      {
        "heading": {
          "en": "The next session",
          "so": "Fadhiga xiga"
        },
        "en": [
          "Let today's session end there.",
          "If in our earlier sessions we told the history of our land in a summary, all at once, from now on, since the region became settled and entered history, we will stop at it place by place and town by town.",
          "We will open it up, and in our sixth session we will examine MOGADISHU and its history, the great age of its past and the founding of its governments.",
          "Until then, goodbye."
        ],
        "so": [
          "Fadhiga Maantana halkaas ha inoo joogo.",
          "Haddii aan fadhiyadeennii hore taariikhda dhulkeenna aan isku-qaad iyo jumlo uga soo warramaynay, hadda iyo wixii ka danbeeya, maadaama deegaanku camirmay, taariikhdana galay, waxa aan isu dul-istaagi doonnaa goob goob iyo magaalo magaalo.",
          "Waxa aan ku furfuran doonnaa, oo fadhigeenna lixaaad aan ku faaqidaynaa MUQDISHO iyo taariikhdeeda, fac-weynida waayeheeda iyo aasaaska talisyadeeda.",
          "Sidaas iyo Nabadgelyo"
        ]
      }
    ],
    sources: ["السيرة النبوية (ابن هشام)", "معجم البلدان (ياقوت الحموي)", "Ibn Sa'id al-Maghribi, Kitab Bast al-Ard", "أضواء على تاريخ الصومال (الشريف محمد عيدروس)", "كشف السدول (Reeraash)", "Taariikhda Afka iyo Bulshada Soomaaliyeed", "The Christian Topography of Cosmas", "Divine Fertility", "The Arab Factor in Somali History", "Le port de Zeyla et son arrière-pays au Moyen Âge", "Iscrizioni e documenti arabi per la storia della Somalia", "Somalia: scritti vari editi ed inediti (3 vols.)", "The Eastern African Coast", "The Origins and Development of Mogadishu, AD 1000 to 1850", "Asia in the Horn", "Historical Dictionary of Somalia"]
  },
  {
    id: 6,
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
    sources: ["A Modern History of the Somali", "Ibn Sa'id al-Maghribi, Kitab Bast al-Ard"]
  },
  {
    id: 7,
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
    sources: ["Taariikhda Soomaaliya", "Ibn Battuta, Tuhfat al-Nuzzar (Rihla)", "The Shaping of Somali Society", "A Modern History of the Somali", "تاريخ الصومال (Jaamac Cumar Ciise)"]
  },
  {
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    sources: ["The Collapse of the Somali State", "Taariikhda soomaaliyeed iyo tartanka qabiilka", "A Modern History of the Somali"]
  },
  {
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
  footer:   { en: "© 2026 Mohamed Abdulkadir Mohamed · A new episode every Thursday at 7:00 PM, East Africa time", so: "© 2026 Maxamed Cabdulqaadir Maxamed · Xalqad cusub Khamiis walba, 7:00 fiidnimo, saacadda Bariga Afrika" },
  home:     { en: "Home", so: "Bogga Hore" },
  episodesNav: { en: "Episodes", so: "Xalqadaha" },

  // ---- The welcome page (index.html) ----
  seriesTitle: { en: "The Series of the History of the Somali Nation", so: "Taxanaha Taariikhda Ummadda Soomaaliyeed" },
  byline:      { en: "A series by Mohamed Abdulkadir Mohamed", so: "Waxaa diyaariyay Maxamed Cabdulqaadir Maxamed" },
  welcomeHeading: { en: "Welcome", so: "Ku soo dhowow" },
  // The author's portrait on the welcome page
  authorName: { en: "Mohamed Abdulkadir Mohamed", so: "Maxamed Cabdulqaadir Maxamed" },
  authorRole: { en: "Author and presenter of the series", so: "Diyaariyaha iyo soo bandhigaha taxanaha" },
  // Welcome text, taken from the series introduction ("Hordhac"). Each line is one paragraph.
  welcomeText: {
    en: [
      "History is the most important school a society can learn from. To understand where we stand today, we must study and look back at the ages that have passed, and the paths our fathers and ancestors took. As the Somali saying goes: \"A tree is not planted only for the shade of the one who plants it.\"",
      "The greatest obstacle facing our history is not a lack of information. It is that our history is scattered: loose facts, isolated events, names whose place in history we do not know, and no thread to tie them together. That is what led me to prepare \"The Series of the History of the Somali Nation\": a scholarly, detailed account that everyone can understand."
    ],
    so: [
      "Taariikhdu waa dugsiga ugu muhiimsan ee bulsho cashar ka baran karto. Si aan taaganteenna u fahanno, waa inaan darasnaa, dibna u milicsannaa waayeheennii tegay, iyo tubtii aabbayaasheen iyo ab-awalladeen ay qaadeen. Waana meesha Soomaalidu ka tiraahdo: \"Geedka looma abuuro adigaa harsan doona\".",
      "Caqabadda ugu weyn ee taariikhdeenna naga haysata ma aha xog yari iyo keyd la'aan, balse waa filiqsanaanta taariikhdeenna: xog qubane ah, dhacdooyin kaliyaale ah, magacyo meel ay taariikhda kasoo galeen aannan war u hayn, iyo nirgixii isku xiri lahaa oo aan la hayn. Taasi waxay igu dhalisay inaan diyaariyo \"Taxanaha Taariikhda Ummadda Soomaaliyeed\", si cilmiyaysan, faah-faahsan, isla markaasna dadku wada fahmi karaan."
    ]
  },
  // The series motto (from the introduction)
  motto:       { en: "\"Learn your past, so that you may set your future right.\"", so: "\"Tagtadaada baro, timaaddadaada aad saxdid e.\"" },
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
  button:   { en: "Soomaali", so: "English" },

  // ---- Added: navigation, dates, search, tools ----
  sourcesNav:   { en: "Sources", so: "Ilaha-xogta" },
  skipLink:     { en: "Skip to content", so: "U gudub nuxurka" },
  toTop:        { en: "Back to top ↑", so: "Kor u noqo ↑" },
  subscribe:    { en: "Subscribe on YouTube", so: "Ku biir kanaalka YouTube" },
  trailerHeading: { en: "Watch the trailer", so: "Daawo xayeysiiska taxanaha" },
  introVideoHeading: { en: "Watch the introduction (Hordhac)", so: "Daawo Hordhaca taxanaha" },
  firstEpisode: { en: "The first episode is released on", so: "Xalqadda 1aad waxay soo baxaysaa" },
  releasesOn:   { en: "Releases", so: "Soo baxaysa" },
  released:     { en: "Released", so: "Waa soo baxday" },
  watchNow:     { en: "Video available", so: "Muuqaal diyaar ah" },
  statusSoon:   { en: "Coming", so: "Soo socda" },
  statusAvailable: { en: "Watch now", so: "Daawo" },
  articleSoon:  { en: "The full written script of this episode will be published here after its release, with maps and pictures. Until then, this is a short summary.", so: "Qoraalka buuxa ee xalqadan, iyo khariidadaha iyo sawirrada, halkan ayaa lagu soo dhigi doonaa kadib marka ay soo baxdo. Haddaba waa warbixin kooban." },
  minRead:      { en: "min read", so: "daqiiqo oo akhris ah" },
  inThisEpisode: { en: "In this episode", so: "Waxa ku jira xalqadan" },
  scriptHeading: { en: "The episode script", so: "Qoraalka xalqadda" },
  scriptNote:    { en: "The full text of the episode, as it was presented.", so: "Qoraalka buuxa ee xalqadda, sidii loo soo bandhigay." },
  print:        { en: "Print / Save as PDF", so: "Daabac / Ku keydi PDF" },
  share:        { en: "Share", so: "La wadaag" },
  copied:       { en: "Link copied", so: "Xiriirka waa la koobiyeeyay" },
  searchLabel:  { en: "Search the episodes", so: "Ka raadi xalqadaha" },
  searchPlaceholder: { en: "Search (e.g. Punt, Mogadishu, 1960)…", so: "Raadi (tusaale: Punt, Muqdisho, 1960)…" },
  filterAll:    { en: "All parts", so: "Dhammaan qaybaha" },
  expandAll:    { en: "Open all", so: "Fur dhammaan" },
  collapseAll:  { en: "Close all", so: "Xir dhammaan" },
  noResults:    { en: "No episodes match your search.", so: "Xalqad ku haboon raadintaada lama helin." },
  resultsCount: { en: "episodes shown", so: "xalqadood la tusay" },
  sourcesTitle: { en: "Sources and References", so: "Ilaha-xogta iyo Maraajicda" },
  sourcesIntro: { en: "Every book, article and document used in the series. Each episode also lists its own sources at the bottom of the page.", so: "Buug kasta, maqaal kasta iyo dukumiinti kasta oo taxanaha laga isticmaalay. Xalqad walba waxay kaloo hoosteeda ku xustaa ilaheeda." },
  sourcesFilter: { en: "Filter sources", so: "Ka sifee ilaha" },
  usedIn:       { en: "Used in episodes", so: "Waxaa laga isticmaalay xalqadaha" },
  sourcesCount: { en: "sources", so: "ilo" },
  notFoundPage: { en: "This page was not found.", so: "Bogga lama helin." },
  sourcesAllLanguages: { en: "All languages", so: "Dhammaan luqadaha" },
  sourcesCoverNote: { en: "Book covers are shown only to identify the books. They belong to their publishers and authors.", so: "Daboolka buugaagta waxaa loo muujiyay oo keliya in buugga lagu garto. Waxay iska leeyihiin daabacayaasha iyo qorayaasha." },
  sourcesBy: { en: "By", so: "Qoraa" },
  coverOf: { en: "Cover of", so: "Daboolka buugga" },
  furtherReading:     { en: "Further reading", so: "Akhris dheeraad ah" },
  furtherReadingNote: { en: "Other books on Somali history, not yet cited in an episode.", so: "Buugaag kale oo ku saabsan taariikhda Soomaalida, oo aan weli lagu tixraacin xalqad." },
  imageSourcePending: { en: "Image source being verified", so: "Ilaha sawirka waa la xaqiijinayaa" }
};

// =============================================================
// SITE SETTINGS: the things you will change as the series goes live
// =============================================================
const siteConfig = {
  // Episode 1 came out on this day (a Thursday); each next episode a week later.
  // (The introduction, "Hordhac", came out a week before, on 15 October 2026.)
  launchDate: "2026-10-22",
  releaseTime: "7:00 PM",
  // Paste your YouTube channel link between the quotes (leave "" to hide the buttons).
  youtubeChannel: "https://www.youtube.com/@Miyirso",
  // Paste the YouTube link of the series trailer (leave "" to hide it).
  trailer: "https://www.youtube.com/watch?v=t_p6gdq490s",
  // The YouTube link of the introduction episode ("Hordhac"), shown on the About page (leave "" to hide it).
  introVideo: "https://www.youtube.com/watch?v=wktxkoyKdf8",
  // The public address of this site (used for share previews). Change it if the site moves.
  siteUrl: "https://mohammed382-bit.github.io/somali-timeline/"
};


// =============================================================
// The About page (about.html), from the series introduction ("Hordhac")
// =============================================================
const about = {
  title: { en: "About the Series", so: "Ku Saabsan Taxanaha" },
  sections: [
    {
      heading: { en: "Method", so: "Manhaj" },
      points: {
        en: [
          "Somali history is divided into three stages. Part 1, ancient history: the time before Islam reached this land. Part 2, medieval history: from the arrival of Islam until the coming of colonialism. Part 3: from when the colonisers set foot on Somali land at the end of the 19th century until independence.",
          "Historical events are not built on \"it is said\" or \"I heard\", but on written works and references that can be checked. Each episode comes with the list of books and places its information was taken from, so that anyone can go back to them for more detail.",
          "The main aim is to connect Somali history together. But to understand it fully, it is also linked to world history and to what was happening around the globe in each period.",
          "The series uses visual material to explain events: above all maps, but also pictures of people, treaty documents, and written records, so that viewers can clearly see where history happened.",
          "The series follows a span of time stretching from 3,000 years before the birth of the Prophet Jesus (peace be upon him) to the week of independence in 1960. Whether to open the pages after that, or stop there, time will tell.",
          "The series covers the history of the Somali nation in all the regions of the Horn of Africa where Somalis live, known together as \"the Somali land\", and the maps it uses show this. Modern borders, and the lines drawn between the Somali people, have no bearing on how this history is told, and the names \"Somali\" and \"Somalia\" will not be reserved for any one group alone.",
          "When a historical event is reported, disagreement among historians is never absent. So the series will often set out the disagreement over an event and the different positions held; where it prefers one view, it will explain why. It will also separate events that rest on evidence that can be checked from those that rest only on oral tradition with no source to refer to.",
          "The series is weekly: one episode each week, of no more than 20 minutes."
        ],
        so: [
          "Taariikhda Soomaalida waxaan u qaybiyay saddex marxalo. Qaybta 1aad, taariikhda hore: wixii ka horreeyay intii uusan Islaamku soo gaarin dhulkan. Qaybta 2aad, taariikhda dhexe: markii Islaamku soo gaaray carriga Soomaalida illaa gumeystaha laga soo gaaray. Qaybta 3aad: markii gumeystuhu cagaha soo dhigay dhulka Soomaalida dhammaadkii qarnigii 19aad illaa dharaartii xorriyadda iyo madax-bannaanida.",
          "Dhacdooyinka taariikheed laguma saleeyo waxaa la yiri iyo waxaan maqlay, ee waxaa bud-dhig looga dhigaa dhiganayaal iyo maraajic tixraacooda la heli karo. Fadhi walba waxaa la socda liiska buugta iyo meelaha xogta laga soo qaaday, si wixii faah-faahin iyo xaqiijin ah loogu noqdo ilahaas.",
          "Hadafka koowaad ee taxanaha waa isku xirka taariikhda Soomaaliyeed, haddana si fahankeedu u dhammaystirmo, waxaa lagu xiraa taariikhda adduun weynaha iyo dhacdooyinkii ka socday daafaha caalamka marxalad walba.",
          "Taxanaha waxaa lagu lifaaqay muuqaallo sharaxaya dhacdooyinka: ugu horreyn khariidadaha, iyo sidoo kale sawirada ashkhaasta, dukumiintiyada heshiisyada iyo qoraallada, si daawaduhu si waadax ah u fahmo goobaha taariikhdu ka dhacday.",
          "Taxanahan waxaan ku raad joogi doonnaa saman isku dhererinaya 3,000 sano Dhalashadii Nabi Ciise CS ka hor, illaa laga soo gaaro usbuucii xorriyadda ee 1960-kii. Wixii intaas ka danbeeya boggooda in aan furno iyo in aan intaas uga harno, waqtiga ayaa kala sheegi doona.",
          "Taxanuhu waxa uu daboolayaa taariikhda ummadda Soomaaliyeed, dhammaan deegaannadda ay ka degaan geeska Afrika ee isu-geyntooda loo yaqaan \"Dhulka Soomaalida\", khariiradaha aan adeegsan doonnana taas ayay sawiri doonaan. Soohdimaha casriga ah, iyo xuduudaha la kala dhex dhigay bulsha-weynta Soomaalida, wax xiriir ah la yeelan mayso hab-tebinta iyo ka sheekaynta taariikhdaas, magaca \"Soomaali\" ama \"Soomaaliyeed\"-na cid ay keligeed gaar ugu qoondaysan tahay ma jiri doonto.",
          "Marka dhacdo taariikheed la werinayo, lagama waayo khilaaf iyo ku kala duwanaasho culimada taariikhda dhexdeeda. Sidaas awgeed, marar badan waxa aan soo guurin doonaa khilaafka ku jira dhacdada taariikheed iyo sida la kala qabo; haddii aan mid raajaxo oo qaatana, sababta aan ku raacay ayaan waadixin doonaa. Sidoo kale waxa aan kala saari doonaa dhacdada taariikheed ee cuskanaysa caddayn la hubin karo, iyo kuwa ku kooban sheeko-afeedka aan meel loo tixraaco lahayn.",
          "Baahinta taxanuhu waa toddobaadle: usbuuc walba hal fadhi, oo aan ka badnaan doonin 20 daqiiqo."
        ]
      }
    },
    {
      heading: { en: "Disclaimer", so: "Afeef" },
      points: {
        en: [
          "This series focuses only on the historical continuity of the Somali nation's past. Topics such as lineage, clan, languages, dialects, culture, schools of law, Sufi orders, individuals and politics are outside its scope, except where the historical record itself requires them to be mentioned. While following the series, judge it only by the facts of history and their evidence.",
          "Because this is history, people's names will be mentioned. Please do not insult or mock them: you may disapprove of what a person did, but you are not their judge, and history is not a court; it is about learning the facts and taking lessons. As God says: \u2067«تلك أمة قد خلت لها ما كسبت ولكم ما كسبتم ولا تسألون عما كانوا يعملون»\u2069, \"That was a nation which has passed on. It will have what it earned, and you will have what you have earned. And you will not be asked about what they used to do.\"",
          "My role is only to organise and present the historical information I have gathered. Establishing the facts and researching history is the work of researchers and historians; that is why every episode comes with its sources."
        ],
        so: [
          "Taxanahan wuxuu diiradda saarayaa isku xirka taariikheed ee sooyaalkii ummadda Soomaaliyeed oo keli ah. Mawduucyada la xiriira isirka, qabiilka, afafka, lahjadaha, dhaqanka, madaahibta, dariiqooyinka, shakhsiyaadka iyo siyaasadda waa ka baxsan xayndaabka taxanaha, marka laga reebo meesha ay dhacdooyinka taariikhdu lafteedu u baahan yihiin in la xuso. Inta aad la socotid barnaamijkan, ku xukun oo keli ah dhacdooyinka taariikhda xaqiiqdooda iyo xujadooda.",
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
    "Barafasoor C/salaam Maxamed Ciise-Salwe",
    "Faarax Maxamed Jaamac \"Cawl\"",
    "Cilmi-baare Lee V. Cassanelli",
    "Barafasoor Saciid Sheekh Samatar",
    "Dr. Sada Mire"
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


// =============================================================
// THE SOURCE CATALOGUE (used by the Sources page, sources.html)
// One entry for each source named in the episodes above.
//   lang:   "so" (Somali) · "ar" (Arabic) · "en" (English)
//   author: optional
//   cover:  optional: the cover picture, e.g. "media/covers/modern-history.jpg"
//   isbn:   optional: if there is no cover file, the cover is fetched from Open Library by ISBN
// A source with neither a cover nor an ISBN shows a neat title tile instead.
// To change a book's language group, change its "lang".
// =============================================================
const sourceInfo = {

  // ---- Somali ----
  "Taariikhda Soomaaliya": { "lang": "so", "author": "Maxamed Ibraahim Maxamed \"Liiq-Liiqato\"", "cover": "media/covers/taariikhda-soomaaliya.jpg" },
  "Soomaaliya iyo Taariikhdeedii Hore": { "lang": "so", "author": "Cabdulqaadir Salaad Dhoorre", "cover": "media/covers/soomaaliya-taariikhdeedii-hore.jpg" },
  "Taariikhda soomaaliyeed iyo tartanka qabiilka": { "lang": "so", "author": "Dr. Abdisalam Sheikh Hassan", "cover": "media/covers/tartanka-qabiilka.jpg" },
  "Sooyaalka Soomaaliya": { "lang": "so", "author": "Cabdulqaadir Cusmaan Maxamuud (Oromo)", "cover": "media/covers/sooyaalka-soomaaliya.jpg" },
  "Dal Dad Waayey iyo Duni Damiir Beeshay": { "lang": "so", "author": "Maxamed Daahir Afrax", "cover": "media/covers/dal-dad-waayey.jpg" },
  "Garbaduubkii Gumeysiga": { "lang": "so", "author": "Faarax Maxamed Jaamac \"Cawl\"", "cover": "media/covers/garbaduubkii-gumeysiga.jpg" },
  "Taariikhda Afka iyo Bulshada Soomaaliyeed": { "lang": "so", "author": "Cabdalla Cumar Mansuur", "cover": "media/covers/taariikhda-afka-iyo-bulshada.jpg" },
  "Sooyaalka Isirka & Abtirka Soomaalida": { "lang": "so", "author": "Prof. Maxamed Cabdi Maxamed \"Gaandi\"", "cover": "media/covers/sooyaalka-isirka-abtirka.jpg" },
  "Dalkii Udgoonaa": { "lang": "so", "author": "Axmed Cartan Xaange", "year": "1984", "cover": "media/covers/dalkii-udgoonaa.jpg" },
  "Soomaaliya: Horay iyo Hadda": { "lang": "so", "author": "Maxamed Cismaan Cumar", "cover": "media/covers/soomaaliya-horay-iyo-hadda.jpg" },
  "Diiwaanka Gabayadii Sayid Maxamed Cabdulle Xasan": { "lang": "so", "author": "Ururiyey: Sheekh Jaamac Cumar Ciise", "cover": "media/covers/diiwaanka-sayidka.jpg" },

  // ---- Arabic ----
  "تاريخ الصومال (Jaamac Cumar Ciise)": { "lang": "ar", "author": "Jaamac Cumar Ciise", "cover": "media/covers/tarikh-al-sumal.jpg" },
  "كشف السدول (Reeraash)": { "lang": "ar", "author": "Axmed Cabdullaahi Reeraash", "cover": "media/covers/kashf-al-sudul.jpg" },
  "Futuh al-Habasha": { "lang": "ar", "cover": "media/covers/futuh-al-habasha.jpg" },
  "Ibn Battuta, Tuhfat al-Nuzzar (Rihla)": { "lang": "ar", "cover": "media/covers/rihlat-ibn-battuta.jpg" },
  "Ibn Sa'id al-Maghribi, Kitab Bast al-Ard": { "lang": "ar", "author": "Ibn Sa'id al-Maghribi" },
  "بغية الآمال في تاريخ الصومال (الشريف عيدروس)": { "lang": "ar", "author": "Al-Shariif Caydaruus bin Cali al-Nadiiri al-Calawi", "cover": "media/covers/bughyat-al-amal.jpg" },
  "أضواء على تاريخ الصومال (الشريف محمد عيدروس)": {"lang": "ar", "author": "Dr. Al-Shariif Maxamed Caydaruus", "cover": "media/covers/source-1.jpg"},
  "مصر في أفريقيا الشرقية: هرر وزيلع وبربرة (محمد صبري)": { "lang": "ar", "author": "Dr. Muhammad Sabri", "year": "1939", "cover": "media/covers/misr-fi-afriqiya-al-sharqiya.jpg" },
  "ملوك حمير وأقيال اليمن (نشوان الحميري)": {"lang": "ar", "author": "Nashwan al-Himyari", "cover": "media/covers/source-2.jpg"},
  "الإلمام بأخبار من بأرض الحبشة من ملوك الإسلام (المقريزي)": { "lang": "ar", "author": "Al-Maqrizi", "cover": "media/covers/al-ilmam-al-maqrizi.jpg" },
  "تاريخ الرسل والملوك (الطبري)": { "lang": "ar", "author": "Al-Tabari", "cover": "media/covers/tarikh-al-tabari.jpg" },
  "السيرة النبوية (ابن هشام)": { "lang": "ar", "author": "Ibn Hisham", "cover": "media/covers/sirat-ibn-hisham.jpg" },
  "الأخبار الطوال (الدينوري)": { "lang": "ar", "author": "Abu Hanifa al-Dinawari", "cover": "media/covers/al-akhbar-al-tiwal.jpg" },
  "معجم البلدان (ياقوت الحموي)": {"lang": "ar", "author": "Yaqut al-Hamawi", "cover": "media/covers/source-3.jpg"},
  "الصومال في كتب المتقدمين": {"lang": "ar", "cover": "media/covers/source-4.jpg"},

  // ---- English ----
  "A Modern History of the Somali": { "lang": "en", "author": "I. M. Lewis", "isbn": "082141495X", "cover": "media/covers/modern-history-of-the-somali.jpg" },
  "Peoples of the Horn of Africa": { "lang": "en", "author": "I. M. Lewis", "cover": "media/covers/peoples-of-the-horn.jpg" },
  "The Shaping of Somali Society": { "lang": "en", "author": "Lee V. Cassanelli", "cover": "media/covers/shaping-of-somali-society.jpg" },
  "The Collapse of the Somali State": { "lang": "en", "author": "Abdisalam M. Issa-Salwe", "cover": "media/covers/collapse-of-the-somali-state.jpg" },
  "The Scramble in the Horn of Africa": { "lang": "en", "author": "Mohamed Osman Omar", "cover": "media/covers/scramble-horn-of-africa.jpg" },
  "The Somali Peninsula": { "lang": "en", "cover": "media/covers/somali-peninsula.jpg" },
  "Divine Fertility": { "lang": "en", "author": "Sada Mire", "cover": "media/covers/divine-fertility.jpg" },
  "New Perspectives on the Expeditions to the Land of Punt": {"lang": "en", "cover": "media/covers/new-perspectives-punt.jpg"},
  "The Periplus": { "lang": "en", "author": "Wilfred H. Schoff", "cover": "media/covers/periplus.jpg" },
  "The State and Rural Transformation in Northern Somalia": { "lang": "en", "author": "Abdi Ismail Samatar", "year": "1989", "cover": "media/covers/state-and-rural-transformation.jpg" },
  "Somalia: The Untold History 1941–1969": { "lang": "en", "author": "Mohamed Trunji", "year": "2015", "cover": "media/covers/somalia-untold-history.jpg" },
  "Historical Dictionary of Somalia": { "lang": "en", "author": "Mohamed Haji Mukhtar", "cover": "media/covers/historical-dictionary-of-somalia.jpg" },
  "The Arabic Sources on Somalia": {"lang": "en", "author": "Mohamed Haji Mukhtar", "cover": "media/covers/the-arabic-sources-on-somalia.jpg"},
  "The Arab Factor in Somali History": {"lang": "en", "author": "Ali Abdirahman Hersi", "year": "1977", "cover": "media/covers/the-arab-factor-in-somali-history.jpg"},
  "The Origins and Development of Mogadishu, AD 1000 to 1850": { "lang": "en", "author": "Ahmed Dualeh Jama", "year": "1996", "cover": "media/covers/origins-of-mogadishu.jpg" },
  "Archaeology and History (Proceedings of the Second International Congress of Somali Studies, Vol. 1)": { "lang": "en", "author": "Thomas Labahn (ed.)", "year": "1984", "cover": "media/covers/archaeology-and-history.jpg" },
  "A Linguistic Outline of Early Somali History": {"lang": "en", "author": "Mohamed Nuuh Ali", "year": "1983", "cover": "media/covers/a-linguistic-outline-of-early-somali-history.jpg"},
  "Oral Poetry and Somali Nationalism": { "lang": "en", "author": "Said S. Samatar", "year": "1982", "cover": "media/covers/oral-poetry-and-somali-nationalism.jpg" },
  "Saints and Somalis": { "lang": "en", "author": "I. M. Lewis", "year": "1998", "cover": "media/covers/saints-and-somalis.jpg" },
  "The Somali Conquest of the Horn of Africa": {"lang": "en", "author": "I. M. Lewis", "year": "1960", "cover": "media/covers/the-somali-conquest-of-the-horn-of-africa.jpg"},
  "The Origins of the Galla and Somali": {"lang": "en", "author": "I. M. Lewis", "year": "1966", "cover": "media/covers/the-origins-of-the-galla-and-somali.jpg"},
  "Somalia: A Country Study": { "lang": "en", "author": "Helen Chapin Metz (ed.)", "cover": "media/covers/somalia-a-country-study.jpg" },
  "The Historical Trajectory of Somalia": {"lang": "en", "author": "Cabdiraxmaan Cabdullaahi Baadiyow", "cover": "media/covers/the-historical-trajectory-of-somalia.jpg"},
  "Reclaiming Somali History": {"lang": "en", "author": "Cabdiraxmaan Cabdullaahi Baadiyow", "cover": "media/covers/reclaiming-somali-history.jpg"},
  "The Benadiri People of Somalia": {"lang": "en", "author": "Anita Adam", "cover": "media/covers/the-benadiri-people-of-somalia.jpg"},
  "The Banadir Coast: Its Peoples and Cultural History": {"lang": "en", "author": "Kassim & Issa", "year": "2017", "cover": "media/covers/the-banadir-coast-its-peoples-and-cultural-history.jpg"},
  "Social Structure of Southern Somali Tribes": {"lang": "en", "author": "Virginia Luling", "year": "1971", "cover": "media/covers/social-structure-of-southern-somali-tribes.jpg"},
  "Against All Odds: Archaeology in Somalia": {"lang": "en", "author": "Jorge de Torres", "year": "2018", "cover": "media/covers/against-all-odds-archaeology-in-somalia.jpg"},
  "Nomads Trading with Empires": {"lang": "en", "author": "Alfredo González-Ruibal et al.", "cover": "media/covers/nomads-trading-with-empires.jpg"},
  "Asia in the Horn": {"lang": "en", "author": "Alfredo González-Ruibal et al.", "year": "2021", "cover": "media/covers/asia-in-the-horn.jpg"},
  "British-Somali Expedition, 1975": { "lang": "en", "author": "Neville Chittick", "year": "1976", "cover": "media/covers/chittick-1976-azania.jpg" },
  "Early Ports in the Horn of Africa": {"lang": "en", "author": "Neville Chittick", "year": "1979", "cover": "media/covers/early-ports-in-the-horn-of-africa.jpg"},
  "The Eastern African Coast": {"lang": "en", "author": "Stephanie Wynne-Jones & Jeffrey Fleisher", "year": "2021", "cover": "media/covers/the-eastern-african-coast.jpg"},
  "Harar as the Capital City of the Barr Sa'd ad-Din": {"lang": "en", "author": "Amélie Chekroun", "year": "2022", "cover": "media/covers/harar-as-the-capital-city-of-the-barr-sa-d-ad-din.jpg"},
  "The Later Walashma Sultans of Adal and Harar": {"lang": "en", "author": "Ewald Wagner", "year": "1994", "cover": "media/covers/the-later-walashma-sultans-of-adal-and-harar.jpg"},
  "Islamicization and Muslim Shrines of the Harar Plateau": {"lang": "en", "author": "Ulrich Braukämper", "year": "1984", "cover": "media/covers/islamicization-and-muslim-shrines-of-the-harar-pla.jpg"},
  "Effects of Sixteenth-Century Upheavals on the History of the Horn": {"lang": "en", "author": "Mohamed Abdillahi Rirash", "year": "1984", "cover": "media/covers/effects-of-sixteenth-century-upheavals-on-the-hist.jpg"},
  "Futuh al-Habasa: The Conquest of Abyssinia (English translation)": {"lang": "en", "author": "Shihab al-Din Arab Faqih, tr. Paul Lester Stenhouse", "cover": "media/covers/futuh-al-habasa-the-conquest-of-abyssinia-english-.jpg"},
  "The Portuguese Expedition to Abyssinia in 1541–1543": { "lang": "en", "author": "Miguel de Castanhoso, tr. R. S. Whiteway", "cover": "media/covers/portuguese-expedition-abyssinia.jpg" },
  "The Book of Duarte Barbosa (2 vols.)": { "lang": "en", "author": "Duarte Barbosa, tr. Mansel Longworth Dames", "cover": "media/covers/book-of-duarte-barbosa.jpg" },
  "The Travels and Adventures of the Turkish Admiral Sidi Ali Reis, 1553–1556": {"lang": "en", "author": "Sidi Ali Reis, tr. A. Vambéry", "cover": "media/covers/the-travels-and-adventures-of-the-turkish-admiral-.jpg"},
  "The Travels of Ibn Battuta, Vol. II": { "lang": "en", "author": "Ibn Battuta, tr. H. A. R. Gibb", "cover": "media/covers/travels-of-ibn-battuta-gibb.jpg" },
  "The Christian Topography of Cosmas": { "lang": "en", "author": "Cosmas Indicopleustes, tr. J. W. McCrindle", "year": "1897", "cover": "media/covers/christian-topography-cosmas.jpg" },
  "History of the Wars, Vol. I": {"lang": "en", "author": "Procopius, tr. H. B. Dewing", "year": "1914", "cover": "media/covers/history-of-the-wars-vol-i.jpg"},
  "The Geography of Strabo, Vols. VII–VIII": {"lang": "en", "author": "Strabo, tr. H. L. Jones", "year": "1930", "cover": "media/covers/the-geography-of-strabo-vols-viiviii.jpg"},
  "First Footsteps in East Africa (2 vols.)": { "lang": "en", "author": "Richard F. Burton", "year": "1856", "cover": "media/covers/first-footsteps-burton.jpg" },
  "Extract from a Journal by Lieut. W. Christopher": {"lang": "en", "author": "W. Christopher", "year": "1844", "cover": "media/covers/extract-from-a-journal-by-lieut-w-christopher.jpg"},
  "Seventeen Trips through Somaliland and a Visit to Abyssinia": { "lang": "en", "author": "H. G. C. Swayne", "cover": "media/covers/seventeen-trips-swayne.jpg" },
  "The Map of Africa by Treaty (3 vols.)": {"lang": "en", "author": "Edward Hertslet", "cover": "media/covers/the-map-of-africa-by-treaty-3-vols.jpg"},
  "Dispatches: Operations of the Somaliland Field Force": { "lang": "en", "year": "1903", "cover": "media/covers/somaliland-field-force-1903.jpg" },
  "The Mad Mullah of Somaliland": {"lang": "en", "author": "Douglas Jardine", "year": "1923", "cover": "media/covers/the-mad-mullah-of-somaliland.jpg"},
  "British and Somali Views of Muhammad Abdullah Hassan's Jihad, 1899–1920": {"lang": "en", "author": "John P. Slight", "year": "2010", "cover": "media/covers/british-and-somali-views-of-muhammad-abdullah-hass.jpg"},
  "Five Poems by Sayyid Muhammad 'Abdallah Hasan": {"lang": "en", "author": "Lidwien Kapteijns", "year": "1996", "cover": "media/covers/five-poems-by-sayyid-muhammad-abdallah-hasan.jpg"},
  "Corfield and the Dul Madoba Incident": {"lang": "en", "author": "Kakwenzire", "year": "1984", "cover": "media/covers/corfield-and-the-dul-madoba-incident.jpg"},
  "Dance and Society in Nineteenth-Century Mogadishu": {"lang": "en", "author": "Edward A. Alpers", "year": "1984", "cover": "media/covers/dance-and-society-in-nineteenth-century-mogadishu.jpg"},
  "Notes on the History of Berbera": {"lang": "en", "author": "Fearon", "year": "1966", "cover": "media/covers/notes-on-the-history-of-berbera.jpg"},
  "Imperialism Ancient and Modern: the Northern Somali Coastline": {"lang": "en", "author": "Hamilton", "year": "1967", "cover": "media/covers/imperialism-ancient-and-modern-the-northern-somali.jpg"},
  "The Somali Youth League, Ethiopian Somalis and the Greater Somalia Idea, 1946–48": {"lang": "en", "author": "Cedric Barnes", "year": "2007", "cover": "media/covers/the-somali-youth-league-ethiopian-somalis-and-the-.jpg"},
  "The Struggle for Somali Writing": {"lang": "en", "author": "Antonio M. Morone", "year": "2014", "cover": "media/covers/the-struggle-for-somali-writing.jpg"},
  "The Portion of Somali Territory under Ethiopian Colonization": { "lang": "en", "year": "1974", "cover": "media/covers/somali-territory-under-ethiopia-1974.jpg" },
  "The Somali Republic: Geographic Study": {"lang": "en", "author": "CIA", "year": "1961", "cover": "media/covers/the-somali-republic-geographic-study.jpg"},
  "The Geology of Somalia: A Selected Bibliography": { "lang": "en", "author": "R. Lee Hadden", "year": "2007", "cover": "media/covers/geology-of-somalia.jpg" },

  // ---- Italian ----
  "Somalia: scritti vari editi ed inediti (3 vols.)": { "lang": "it", "author": "Enrico Cerulli", "year": "1957–1964", "cover": "media/covers/cerulli-somalia.jpg" },
  "Iscrizioni e documenti arabi per la storia della Somalia": {"lang": "it", "author": "Enrico Cerulli", "cover": "media/covers/iscrizioni-e-documenti-arabi-per-la-storia-della-s.jpg"},
  "Tradizioni storiche e monumenti della Migiurtinia": { "lang": "it", "author": "Enrico Cerulli", "year": "1931", "cover": "media/covers/cerulli-migiurtinia.jpg" },
  "La Somalia nelle cronache etiopiche": {"lang": "it", "author": "Enrico Cerulli", "year": "1929", "cover": "media/covers/la-somalia-nelle-cronache-etiopiche.jpg"},
  "Harar, centro musulmano in Etiopia": {"lang": "it", "author": "Enrico Cerulli", "cover": "media/covers/harar-centro-musulmano-in-etiopia.jpg"},
  "Rapporti storici fra il Banaadir e la penisola arabica": {"lang": "it", "author": "Federico Battera", "year": "1996", "cover": "media/covers/rapporti-storici-fra-il-banaadir-e-la-penisola-ara.jpg"},
  "La questione daraawiish": {"lang": "it", "author": "Federico Battera", "year": "1998", "cover": "media/covers/la-questione-daraawiish.jpg"},
  "Somalia": { "lang": "it", "author": "Alberto Arecchi", "year": "1994", "cover": "media/covers/arecchi-somalia.jpg" },
  "Lafolé: un dramma dell'Italia coloniale": { "lang": "it", "author": "Corada", "year": "1996", "cover": "media/covers/lafole-corada.jpg" },
  "Le origini della Somalia italiana al Parlamento": { "lang": "it", "author": "Della Valle", "year": "1938", "cover": "media/covers/della-valle-1938.jpg" },
  "Elenco degli edifici monumentali: Somalia": {"lang": "it", "year": "1912", "cover": "media/covers/elenco-degli-edifici-monumentali-somalia.jpg"},
  "L'archeologia nel mar Rosso: problemi e prospettive": {"lang": "it", "author": "Rodolfo Fattovich", "year": "1995", "cover": "media/covers/l-archeologia-nel-mar-rosso-problemi-e-prospettive.jpg"},
  "La Somalia italiana nell'antichità classica": { "lang": "it", "author": "Gasparro", "year": "1910", "cover": "media/covers/gasparro-1910.jpg" },
  "Antiche moschee di Mogadiscio": { "lang": "it", "author": "La Lomia", "year": "1982", "cover": "media/covers/antiche-moschee-di-mogadiscio.jpg" },
  "Un genovese a Mogadiscio nel '300": {"lang": "it", "author": "Lefevre", "year": "1937", "cover": "media/covers/un-genovese-a-mogadiscio-nel-300.jpg"},
  "I minareti di Mogadiscio": {"lang": "it", "author": "Ugo Monneret de Villard", "year": "1943", "cover": "media/covers/i-minareti-di-mogadiscio.jpg"},
  "Mogadiscio": { "lang": "it", "author": "Perricone", "year": "1929", "cover": "media/covers/perricone-mogadiscio.jpg" },
  "Le regie navi alla conquista del Benadir (1891–1892)": { "lang": "it", "author": "Po", "year": "1942", "cover": "media/covers/regie-navi-benadir.jpg" },
  "Nell'Harrar": {"lang": "it", "author": "Luigi Robecchi-Bricchetti", "year": "1896", "cover": "media/covers/nell-harrar.jpg"},
  "Il provinciale d'Africa: Benadir, Dulio (1885–1903)": {"lang": "it", "author": "Scardigli", "year": "1995", "cover": "media/covers/il-provinciale-d-africa-benadir-dulio-18851903.jpg"},
  "Gli eventi di Mogadiscio del gennaio 1948": { "lang": "it", "author": "Antonio Varsori", "year": "1981", "cover": "media/covers/eventi-di-mogadiscio-1948.jpg" },
  "Somalia italiana (2 vols.)": {"lang": "it", "author": "Guido Corni", "year": "1937", "cover": "media/covers/corni-somalia-italiana.jpg"},
  "Benadir": {"lang": "it", "author": "Ministero degli Affari Esteri, Direzione Centrale degli Affari Coloniali", "year": "1911", "cover": "media/covers/benadir-1911.jpg"},

  // ---- French ----
  "Documents sur l'histoire, la géographie et le commerce de l'Afrique orientale": {"lang": "fr", "author": "Charles Guillain", "year": "1856", "cover": "media/covers/documents-sur-l-histoire-la-geographie-et-le-comme.jpg"},
  "Voyage à la côte orientale d'Afrique": {"lang": "fr", "author": "Charles Guillain", "year": "1856", "cover": "media/covers/voyage-a-la-cote-orientale-d-afrique.jpg"},
  "Le port de Zeyla et son arrière-pays au Moyen Âge": {"lang": "fr", "author": "François-Xavier Fauvelle-Aymar et al.", "year": "2011", "cover": "media/covers/le-port-de-zeyla-et-son-arriere-pays-au-moyen-age.jpg"},
  "Les explorations italiennes dans la péninsule des Somalis": {"lang": "fr", "author": "Noll", "year": "1897", "cover": "media/covers/les-explorations-italiennes-dans-la-peninsule-des-.jpg"},

  // ---- Greek & Latin ----
  "Geographike hyphegesis (Geography), Vol. II": { "lang": "gr", "author": "Claudius Ptolemy, ed. Karl Müller", "year": "1901", "cover": "media/covers/ptolemy-geography.jpg" }
};

// Books shown under "Further reading" on the Sources page: not yet cited in an episode.
// When an episode starts citing one, add it to that episode's sources and to sourceInfo above, and remove it here.
// (No longer used: every source of the series is now listed in sourceInfo above.)
const furtherReading = [];

// The three language groups, in the order they appear
const sourceLanguages = [
  { key: "so", name: { en: "Somali", so: "Af-Soomaali" }, native: "Soomaali" },
  { key: "ar", name: { en: "Arabic", so: "Carabi" },      native: "العربية" },
  { key: "en", name: { en: "English", so: "Ingiriisi" },  native: "English" },
  { key: "it", name: { en: "Italian", so: "Talyaani" },   native: "Italiano" },
  { key: "fr", name: { en: "French", so: "Faransiis" },   native: "Français" },
  { key: "gr", name: { en: "Greek and Latin", so: "Giriig iyo Laatiin" }, native: "Ἑλληνικά · Latina" }
];
