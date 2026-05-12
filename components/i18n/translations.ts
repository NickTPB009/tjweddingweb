export type Lang = "sv" | "en" | "pt-BR";

type Dict = Record<string, string>;

export const translations: Record<Lang, Dict> = {
  "sv": {
    "home.hero.date": "Lördag 18 juli 2026",
    "home.hero.invite": "Med kärlek och tacksamhet bjuder vi in dig att dela glädjen med oss på vårt bröllop.",
    "home.hero.location": "Borghamn Strand, Borghamnsvägen 1A, 592 93 Borghamn, Sverige",
    "lang.continue": "Fortsätt",
    "lang.english": "English",
    "lang.portuguese": "Português (Brasil)",
    "lang.subtitle": "Du kan ändra detta senare.",
    "lang.swedish": "Svenska",
    "lang.title": "Välj språk",
    "nav.details": "DETALJER",
    "nav.home": "HEM",
    "nav.ourStory": "VÅR HISTORIA",
    "nav.rsvp": "OSA",
    "registry.accountName": "Kontonamn:",
    "registry.accountNumber": "Kontonummer:",
    "registry.adminPassword": "Admin-lösenord",
    "registry.bankTitle": "Bankuppgifter",
    "registry.bsb": "BSB:",
    "registry.coupleAdmin": "PARETS ADMIN",
    "registry.error": "Något gick fel. Försök igen.",
    "registry.goal": "Mål:",
    "registry.kicker": "Smekmånad",
    "registry.lastUpdated": "Senast uppdaterad:",
    "registry.notUpdated": "Inte uppdaterad än",
    "registry.progress": "Framsteg",
    "registry.received": "Mottaget:",
    "registry.reference": "Referens:",
    "registry.referenceHint": "Ditt namn (t.ex. ”Alex & Sam”)",
    "registry.remaining": "Återstår:",
    "registry.save": "Spara",
    "registry.saved": "Sparat",
    "registry.saving": "Sparar…",
    "registry.subtext": "Eftersom vi inte kan ta med fysiska gåvor tillbaka till Australien ber vi vänligen att ni inte tar med gåvor.\\nEr närvaro är en gåva i sig. Om ni ändå vill ge något uppskattar vi ett bidrag till vår smekmånad.\\nAnvänd bankuppgifterna nedan (ingen betalning på webbplatsen).",
    "registry.thankYou": "Stort tack för din generositet.",
    "registry.title": "Bröllopsgåvor",
    "registry.unauthorized": "Fel lösenord.",
    "registry.updateAmount": "Uppdatera belopp",
    "registry.newAmount": "Mottaget belopp (AUD)",
    "rsvp.areYouJoining": "Kommer du?",
    "rsvp.checkin": "Incheckning (datum)",
    "rsvp.checkout": "Utcheckning (datum)",
    "rsvp.collectAttend": "Boende har reserverats på Borghamn Strand för gäster som önskar stanna över natt. Vi rekommenderar starkt att stannar, eftersom det kan vara svårt att ordna taxi från denna plats. När du bekräftar ditt deltagande och rumstyp, kommer hotellet att kontakta dig för betalning och slutlig bekräftelse av rummet. ",
    "rsvp.collectDecline": "Vi samlar endast in ditt namn och närvaro.",
    "rsvp.deadlineLabel": "OSA senast:",
    "rsvp.email": "E-post",
    "rsvp.guestName": "Gästnamn",
    "rsvp.guestsNumber": "Antal gäster",
    "rsvp.julyOnly": "Endast datum i juli 2026",
    "rsvp.no": "KAN TYVÄRR INTE KOMMA",
    "rsvp.roomType": "Rumstyp",
    "rsvp.selectName": "Välj ditt namn…",
    "rsvp.stayDetails": "Boende",
    "rsvp.submitAttend": "SKICKA OSA",
    "rsvp.submitDecline": "SKICKA ÅTERBUD",
    "rsvp.subtitle": "Välj ditt namn och meddela om du kan komma eller ej.",
    "rsvp.title": "OSA",
    "rsvp.yes": "JA, Absolut",
    "gifts.milestone.kicker": "WEDDING GIFTS",
    "gifts.milestone.subtitle": "Tack för din gåva — den hjälper oss att skapa minnen på vår smekmånad.",
    "gifts.milestone.receivedLabel": "Mottaget",

    "gifts.milestone.level1": "Skäggetorp",
    "gifts.milestone.level2": "Köpenhamn",
    "gifts.milestone.level3": "Paris",
    "gifts.milestone.level4": "Maldiverna",

    "gifts.milestone.admin.title": "Couple Admin",
    "gifts.milestone.admin.subtitle": "Uppdatera beloppet som visas på sidan.",
    "gifts.milestone.admin.password": "Admin-lösenord",
    "gifts.milestone.admin.passwordPlaceholder": "Ange lösenord",
    "gifts.milestone.admin.amountLabel": "Mottaget belopp (AUD)",
    "gifts.milestone.admin.amountPlaceholder": "t.ex. 3250",
    "gifts.milestone.admin.wrongPassword": "Fel lösenord ❌",
    "gifts.milestone.admin.invalidNumber": "Ange ett giltigt nummer.",
    "gifts.milestone.admin.cancel": "Avbryt",
    "gifts.milestone.admin.save": "Spara",
    "gifts.milestone.admin.tip": "Tips: Håll Shift + klicka på titeln 5 gånger för att öppna panelen.",
    "quicklinks.story": "Vår historia",
    "quicklinks.details": "Detaljerna",
    "quicklinks.rsvp": "OSA",
    "quicklinks.gifts": "Bröllopsgåvor",
    "details.invite.p1": "Vi bjuder in dig till vårt bröllop på Borghamn Strand – en förtrollande plats där höga almar möter ljuslyktor längs stigarna. Och där vårt nästa äventyr börjar.",
    "details.invite.ceremony": "Vigsel: Kristbergs kyrka",
    "details.invite.cta": "OSA",

    "travel.hero.kicker": "Om Sverige",

    "details.info.leftTitle": "Så tar du dig dit",
    "details.info.rightTitle": "Schema",

    /* -------- Details Page -------- */
    "details.howToGetThere.title": "HOW TO GET THERE",

    "details.howToGetThere.intro":
      "Vigseln kommer att hållas i Kristbergs kyrka i Borensberg, 30 km (30 minuter) från Linköping. Mottagningen kommer senare att äga rum på Borghamn Strand vid Vättern, 20-25 km (20-25 minuter) från kyrkan och cirka 50 km (45 minuter) från Linköping. Boende har förbokats på Borghamn Strand för gäster som önskar övernatta. Vi rekommenderar att ni bokar rum, eftersom taxibilar kan vara svåra att ordna från denna plats",

    "details.howToGetThere.accommodation":
      "Boende har reserverats på Borghamn Strand för gäster som önskar stanna över natten. Vi rekommenderar starkt att stanna över natten, eftersom det kan vara svårt att ordna taxi från denna plats. När du bekräftar ditt deltagande och bestämmer dig för att bo på samma hotell som festen, kommer hotellet att kontakta dig för betalning och slutlig bekräftelse.",

    "details.howToGetThere.optionsTitle":
      "För att ta sig till Linköping, som är den närmaste staden till bröllopet, kan du:",

    "details.howToGetThere.option1":
      "Flyga direkt med KLM till Linköping via Amsterdam – Detta är det snabbaste alternativet, med en flygtid på cirka 1 timme och 40 minuter från Amsterdam.",

    "details.howToGetThere.option2":
      "Flyga till Stockholm, Sverige (Arlanda flygplats) och ta tåget – Direkt­tåg går från Arlanda flygplats till Linköping och resan tar cirka 3 timmar. Alternativt kan du hyra bil för den cirka 250 km långa resan.",

    "details.howToGetThere.option3":
      "Flyga till Köpenhamn, Danmark (Kastrup flygplats) och ta tåget – Direkt­tåg från Kastrup flygplats till Linköping tar cirka 4 timmar. Det är också möjligt att hyra bil för den cirka 450 km långa bilresan.",
    
      // Details page - Info Grid (RIGHT: Schedule)
    "details.infogrid.schedule.title": "SCHEMA",

    "details.infogrid.schedule.day1.date": "Fredag, 17 juli 2026",
    "details.infogrid.schedule.day1.note": "(Vår 47-månadersdag)",
    "details.infogrid.schedule.day1.eventTitle": "Välkomstträff",
    "details.infogrid.schedule.day1.body":
      "Följ med på en informell träff och umgås på Borghamn Strand från kl. 17:00 och framåt. Detta är ett avslappnat tillfälle att träffa familj och vänner innan den stora dagen.",
    "details.infogrid.schedule.day1.dress": "Klädsel: avslappnad.",

    "details.infogrid.schedule.day2.date": "Lördag, 18 juli 2026",
    "details.infogrid.schedule.day2.item1.time": "16:15",
    "details.infogrid.schedule.day2.item1.text":
      "Gästerna anländer till Kristbergs kyrka i Borensberg. Ta er själva till kyrkan och var på plats senast 16:30.",
    "details.infogrid.schedule.day2.item2.time": "16:30",
    "details.infogrid.schedule.day2.item2.text":
      "Vigseln börjar. Alla gäster ska sitta ner innan ceremonin startar.",
    "details.infogrid.schedule.day2.item3.time": "17:15 (ca)",
    "details.infogrid.schedule.day2.item3.text":
      "Ceremonin avslutas. Gästerna går ut först och väntar utanför. Brudparet går ut efter gratulationer.",
    "details.infogrid.schedule.day2.item4.time": "17:45",
    "details.infogrid.schedule.day2.item4.text":
      "Färd till mottagningen. Ta er själva till Borghamn Strand (20–25 min med bil).",
    "details.infogrid.schedule.day2.item5.time": "18:30",
    "details.infogrid.schedule.day2.item5.text":
      "Mottagningen börjar med drinkar och canapéer. Njut av tilltugg och dryck medan vi väntar på att brudparet anländer. Gästerna kan också checka in på boendet.",
    "details.infogrid.schedule.day2.item6.time": "19:30",
    "details.infogrid.schedule.day2.item6.text":
      "Brudparet anländer för en champagne-skål.",
    "details.infogrid.schedule.day2.item7.time": "20:30",
    "details.infogrid.schedule.day2.item7.text": "Middagen serveras.",
    "details.infogrid.schedule.day2.item8.time": "Sen kväll",
    "details.infogrid.schedule.day2.item8.text":
      "Musik och dans fortsätter in på natten.",

      // Details page - guest Info
    "details.guestInfo.title": "TOASTMASTER & GÄSTINFORMATION",
    "details.guestInfo.toastmasterTitle": "Toastmaster och tal",
    "details.guestInfo.toastmasterBody": "Toastmastern ansvarar för ordningen under middagen och fördelar ordet till talarna. Alla som vill hålla tal, uppträda eller bjuda på upptåg bör anmäla sig i förväg till toastmastern. Lekar och skämt ska hållas i god smak och aldrig ske på brudparets bekostnad.",
    "details.guestInfo.toastmasterLabel": "Toastmaster:",
    "details.guestInfo.traditionTitle": "En klassisk svensk tradition",
    "details.guestInfo.traditionBride": "Om bruden lämnar bordet får alla kvinnor gå fram och ge brudgummen en kindpuss.",
    "details.guestInfo.traditionGroom": "Om brudgummen lämnar bordet får alla män gå fram och ge bruden en kindpuss.",
    "details.guestInfo.dressCodeTitle": "Klädkod:",
    "details.guestInfo.dressCode": "Kavaj / Lounge suit",
    "details.guestInfo.whiteNote": "Vänligen undvik helvitt (detta är förbehållet bruden).",
    "details.guestInfo.giftsTitle": "Presenter och uppvaktning",
    "details.guestInfo.giftsBody": "Då vi inte har möjlighet att ta med fysiska gåvor önskar vi oss istället ett bidrag till vår bröllopsresa.",
    "details.guestInfo.finalNote": "Visa hänsyn mot övriga gäster och ha kul!",
    
      // ---------------- Travel cards (Details page) ----------------
    "travel.cards.vikings.title": "Sverige – Vikingarnas land",
    "travel.cards.vikings.p1":
    "Sverige är ett land med storslagen natur och rik historia. Ni firar i Östergötland, en region vars bördiga slätter och tillgång till viktiga vattenleder som Vättern gjorde området attraktivt redan under tidig forntid. Förekomsten av många runstenar i regionen visar dess betydelse under vikingatiden som centrum för handel, kommunikation och tidiga politiska strukturer. Mest känd är Rökstenen, rest omkring år 800–850 e.Kr., som bär den längsta kända runinskriften med cirka 760 runor och ofta kallas det första stycket skriven svensk litteratur. Denna unika sten ligger bara 15 minuters bilresa från Borghamn Strand.",
    "travel.cards.vikings.p2":
    "Även om Östergötland har djupa vikingarötter blev Uppsala ännu viktigare som religiöst centrum under vikingatiden för hela Skandinavien, med ett tempel tillägnat de nordiska gudarna Oden, Tor och Frej. Vikingar från Danmark, Norge och Sverige reste till Uppsala för stora religiösa högtider och offer, likt pilgrimer som reser till heliga platser idag.",
    "travel.cards.vikings.p3":
    "De danska vikingarna var först med att konvertera till kristendomen och fokuserade sina räder mot Frankrike, England och Medelhavet. De norska vikingarna var kända som de modigaste och mest äventyrliga och seglade till Island, Grönland och till och med Amerika.",
    "travel.cards.vikings.p4":
    "De svenska vikingarna, även kända som väringar eller rus, tog en annan väg. De färdades österut och var skickliga upptäcktsresande och handelsmän som höll fast vid sin hedniska tro ända in på 1100-talet. Svenska vikingar var betydligt mindre våldsamma än sina motsvarigheter och fokuserade främst på fredliga handelsvägar som sträckte sig ända till Istanbul. Namnet väringar betyder ”svuren följeslagare”, och svenska vikingar blev elitlegosoldater och livvakter åt de bysantinska kejsarna i Konstantinopel. Dessa östliga handelsmän gav även Ryssland sitt namn, då ordet ”rus” kan härledas från fornnordiskans benämning på ett roddarlag.",

    "travel.cards.empire.title": "Från vikingarike till europeisk stormakt",
    "travel.cards.empire.p1":
    "Vid sin höjdpunkt år 1658 var det svenska riket en av Europas stormakter. Rikets territorier omfattade dagens Sverige, Finland, Estland, Lettland, delar av Norge samt stora områden i nuvarande Tyskland, Polen och Ryssland. Vid denna tid kontrollerade Sverige Europas tredje största landyta, endast överträffad av Ryssland och Spanien.",

    "travel.cards.lakes.title": "Ett land av sjöar och öar",
    "travel.cards.lakes.p1":
    "Århundraden efter vikingatiden gav sig Sverige in i ännu ett storslaget projekt – ett som bokstavligen band samman landet från kust till kust. Göta kanal, som passerar nära era bröllopsplatser, berättar en imponerande historia om ambition och beslutsamhet. Syftet var att förkorta transporterna mellan Sveriges öst- och västkust genom att låta fartyg färdas genom landet istället för runt det, och därmed undvika dyra danska tullar.",
    "travel.cards.lakes.p2":
    "Göta kanal invigdes den 11 april 1810 och kostade motsvarande cirka 251 miljoner USD i dagens värde. Det tog över tjugo år att färdigställa och krävde insatser från omkring 58 000 soldater. Den visionäre arkitekten Baltzar von Platen, som drev projektet, är begravd i Motala, cirka 20 minuter från Borghamn Strand. Detta 190 kilometer långa ingenjörsverk, ofta kallat ”Sveriges blå band”, förbinder Östersjön med Nordsjön genom 58 slussar och kopplar samman de stora sjöarna Vänern och Vättern.",
    "travel.cards.lakes.p3":
    "Sverige är verkligen ett land format av vatten. Landet har fler öar än något annat i världen – uppskattningsvis 267 570 kustöar – samt närmare 100 000 sjöar. Er bröllopsfest vid Vättern placerar er vid stranden av Sveriges näst största sjö, en storslagen vattenyta som är en central del av Göta kanal-systemet.",

    "travel.cards.coffee.title": "Kaffe och innovation",
    "travel.cards.coffee.p1":
    "Svenskar är världens näst största kaffedrickare, endast slagna av sina finska grannar. Brasilien, världens största kaffeexportör, levererar en stor del av Sveriges älskade kaffe. Så när ni njuter av en klassisk fika under ert besök kan bönorna mycket väl ha rest hela vägen från brasilianska plantager till svenska kaffekoppar.",
    "travel.cards.coffee.p2":
    "Kanske är det kombinationen av kaffe och långa, mörka vintrar som driver Sveriges starka innovationsanda. Alfred Nobel gav världen dynamit och Nobelpriset. Sverige har också bidragit med trepunktsbältet (som Volvo generöst delade med alla biltillverkare för att rädda liv), blixtlåset, kullager (SKF), Spotify, Bluetooth, Minecraft, Tetra Pak-förpackningar, den första implanterbara pacemakern, säkerhetständstickor och till och med Celsiusskalan.",
    "travel.cards.coffee.p3":
    "En av Sveriges mest dominerande moderna exportvaror är musik. Den svenska låtskrivaren och producenten Max Martin har haft 26 förstaplaceringar på Billboardlistan, endast slagen av Paul McCartney. Har du lyssnat på popradio de senaste 25 åren har du nästan garanterat hört hans musik.",
    
    // ---------------- Our Story ----------------
    "ourStory.hero.alt": "Vår historia – omslagsbild",
    "ourStory.couple.alt": "Paret",
    "ourStory.title": "VÅR HISTORIA",
    "ourStory.rsvp": "OSA",

    "ourStory.ch1.title": "Kapitel ett – januari 2022. São Paulo.",
    "ourStory.ch2.title": "Kapitel två – Uppbrottet (och tänk om)",
    "ourStory.ch3.title": "Kapitel tre – 17 augusti 2022. Paris.",
    "ourStory.ch4.title": "Kapitel fyra – \"Barbès - Rochechouart!\"",
    "ourStory.ch5.title": "Kapitel fem – Paris-berättelsen",
    "ourStory.ch6.title": "Kapitel sex – Sverige. En verklighetscheck.",
    "ourStory.ch7.title": "Kapitel sju – Jul i Hobart, Tasmanien",
    "ourStory.ch8.title": "Kapitel åtta – resten",

    // Body 
    "ourStory.ch1.p1": "Doften av regn på het asfalt blandades med bullret från gatan nedanför. Tais låg på sin soffa, utmattningen efter COVID kvarstod i hennes muskler som minnet av samba dansad för länge. Hennes fingrar rörde sig över Tinder-skärmen— swipe vänster, swipe vänster, swipe vänster. Paraden av ansikten suddades ut till en beige monotoni som matchade hennes humör perfekt. Samtidigt, 10 000 kilometer nordväst, låg Linköping frusen under ett täcke av snö. Joakim—den seriöse, metodiske, svensk till sin kärna—hade närmat sig Tinder som ett forskningsprojekt. Kalkylblad kunde ha varit inblandade då han har ett ingenjörssinne. Han var redo att starta om sitt liv. Redo för något äkta. Redo för... tja, han skulle veta det när han såg det. Sedan dök hon upp. Bronsfärgad hud som glödde som karamell. Mörkt lockigt hår som forsade som ett vattenfall av midnattssilke. Joakims finger tvekade över skärmen. Det här är definitivt ett falskt konto, tänkte han, hans nordiska skepticism kom fram. Ingen som såg ut så där var på Tinder i São Paulo och letade efter en frånskild svensk kille. Några dagar senare var Tais tillbaka i appen, tummen jobbade övertid, när ett ansikte stoppade henne mitt i en swipe. Blont hår, nästan albinoblont. Blå ögon som såg ut som bitar av baltisk is. Vassa kindben som kunde skära glas. Hon rynkade på näsan. Fake!! Måste vara fake. Men som ett gott vin som behöver tid att andas, dröjde bilden kvar i hennes sinne. Hon återvände nästa dag. Och nästa. Till slut, med samma impulsivitet som fick henne att boka flyg klockan två på natten, swipade hon höger. BLING! MATCH!!! Nästan som om han hade suttit där och väntat (det hade han), dök Joakims meddelande upp omedelbart: 'Hej Tais!! Hur mår du?' Tais, veteran av tusen falska konton, beslutade sig för att avslöja bluffen. 'Videosamtal?' Hans svar fick henne att le brett: 'Visst, jag behöver bara sätta på mig lite parfym' Fem minuter senare var han där, verklig, svensk och lite awkward på det där charmiga sättet som fick hennes hjärta att dansa en liten samba. De pratade i timmar, röster som färdades över kontinenter, skratt som blandades med knastret från internetanslutningen.",
    "ourStory.ch2.p1": "Ungefär en månad senare gjorde de slut. Olika mål. Olika kontinenter. Olika allt, egentligen. Det var logiskt. Det var praktiskt. Det var förnuftigt. Joakim hatade det. Ytterligare en månad gick. Han satt i sitt hus, den svenska vintern trycktes mot fönstren, och tänkte: Vad har jag att förlora? I värsta fall säger hon nej. Hans fingrar skrev innan hans hjärna kunde övertänka: 'Är du fortfarande singel?' 'Ja, varför frågar du?' kom svaret som förändrade allt.",
    "ourStory.ch3.p1": "Charles de Gaulle-flygplatsen var en symfoni av kaos av oändliga fotsteg som ekade mot kalla golv, meddelanden på tre språk överlappade som italienare som bråkar, det rullande dundret av tusen resväskor. Men Sheraton-lobbyn? En oas av lugn. Mjukt ljus, plyschsoffor, den sortens tystnad som sveper runt dig som en kaschmirfilt. Joakim sjönk ner i en soffa, trött från att ha gått upp alldeles för tidigt, men uppvarvad av förväntan. En timme gick. Sedan en till. Kanske kommer hon inte, tänkte han, men han var för avslappnad för att få panik. Vad han inte visste: Tais var där. Lurade i skuggorna som en jaguar som studerar sitt byte, kollade in honom, såg till att mannen matchade löftet. Hennes hjärta hamrade mot hennes revben. Äntligen—Bora, Tais, Bora!— hon steg fram. Joakim tittade upp, såg henne, och hans ansikte förvandlades. Han reste sig, korsade lobbyn på tre steg och svepte in henne i en kram som kändes som att komma hem. Han höll nästan på att kyssa henne där och då (hon märkte det, men sparade det ögonblicket till senare). Det kändes som om de hade känt varandra för evigt.",
    "ourStory.ch4.p1": "Tunnelbanemeddelandet blev deras privata skämt—det där härligt förvanska uttalet som bara är logiskt om man är fransman, vilket ingen av dem var. Varje gång de passerade den stationen, löste de upp sig i skrattattacker som tonåringar som snattar vin från föräldrarnas källare. Inom några timmar var Tais redo. De kysstes. Magi, ren och enkel, med en smak av vin och mod och med en söt spänningen av risk.",
    "ourStory.ch5.p1": "Å, de där dagarna! Målade i Monet-färger och ackompanjerade av jazzsaxofon. De rörde sig genom staden som dansare som äntligen hade hittat sin rytm—ibland trampade de varandra på tårna (de där passionerade argumenten! den flygande portugisiska-svenska ordsalladen!), men alltid, alltid kom de tillbaka till centrum. De besteg de kullerstenbelagda gatorna i Montmartre där doften av crêpes och färg blandades med möjligheter som hängde i luften. Vid Sacré-Cœur hägde de upp sitt lås. Deras namn sammanflätade i metall, ett löfte beseglat med en kyss medan Paris spred ut sig under dem som en bankett av ljus och kärlek. Champagnebubbor på deras tungor, skratt i deras hjärtan. Champagne, självklart! Alltid Champagne! Tais första riktiga picknick! Och i Parc Floral! Romantik i varje ögonblick. Jordgubbar som sprängdes av sötma. Champagnebubbor som fångade solljuset som flytande diamanter. Ost, kallskuret och en Paris-bagett—när man är i Paris, gör som parisarna! Eiffeltornet glittrade i natten, dess ljus dansade varje hel timme medan de stod på en bro över Seine, vidögda som barn som ser magi för första gången. Den hemliga ingrediensen var kärlek. Sedan en närliggande jazzklubb—en intim grotta där musik levde och andades. De förlorade sig själva i jamsessioner som sträckte sig till de tidiga timmarna, saxofonen ylande berättelser om kärlek och förlust. Några öl, den varma surret av samhörighet, sedan en taxi hem genom gator målade med gatljus. Deras favoritrestaurang blev en ritual, inbäddad i kvarteret vid Moulin Rouge där turister jagade cancan men lokalinvånarna jagade smak. Boeuf bourguignon, rik och djup—den sortens rätt som tar timmar att laga och minuter att sluka. Köttet föll sönder när gaffeln nuddade det. Och det röda vinet—mon dieu, det röda vinet—öppnade sig på tungan som ett kärleksbrev, komplext och ärligt och sant. Eller var det kärleken igen? Mer jazz och fler sena middagar. Gott vin flödade som konversation, varje glas lossade tungor och öppnade hjärtan. Skratt studsade mot urgamla stenmurar, ekade genom smala gator där deras historia började på riktigt.",
    "ourStory.ch6.p1": "Tais följde Joakim till Sverige och mötte Tiger och Freya, Joakims tonårskrigare. Introduktionen skedde i Joakims bakgård över en grill—svensk sommar som sträckte sig långt in på kvällen, lukten av grillat kött och rök som hängde i luften. Tiger och Tais diskuterade bländare och komposition. Fotograferingens universella språk överbryggade klyftan mellan brasiliansk värme och svensk reservation. Och sedan Freya—blyga, observanta Freya—som hade gjort platskort till alla. På Tais kort, tre ord: 'I love you.' Tais hjärta smälte, kände sig hemma men höll fortfarande garden uppe. Tais upptäckte nattlivet i Linköping—så annorlunda från Paris vibrerande puls, men fyllt av varma möten med Joakims vänner. Mysiga pubar där alla verkade känna varandra, skratt som kändes genuint och utan baktankar, den sortens gemenskap som sveper runt dig sakta men fullständigt. Sedan, plötsligt, var Tais på ett plan tillbaka till Brasilien. Joakim stod ensam i sitt kaoshus och packade sitt liv i en container på väg till Australien. Jorden fortsatte snurra medan deras liv rörde sig ännu längre bort från varandra.",
    "ourStory.ch7.p1": "Tais kom och hälsade på i tre månader. En provtur, kallade hon det. Luften var fylld av passion igen—tjock som tasmanisk dimma som rullade ner från berget. De lagade mat tillsammans, bråkade om rätt mängd vitlök. 'Det finns aldrig för mycket,' insisterade Tais, hennes träslev punkterade varje ord. Joakim—som inte äter vitlök—reflekterade djupt över sitt val av partner och undrade om kärleken skulle döda honom. De delade vin på altanen vid solnedgången, himlen färgades lila och guld över kullarna. De pratade om familj—Joakims tonåringar som navigerade sina egna stormar nånstans i Sverige, Tais släktingar spridda över Brasilien som stjärnor i en konstellation hon kunde kartlägga med ögonen slutna. De pratade om hennes två hundar, Bella och Lola, som väntade på henne tillbaka i São Paulo—hennes pälsklädda döttrar som hon saknade med en värk som aldrig riktigt gick över. Två passionerade själar. Två stora hjärtan som hade blivit krossade tidigare, med ärr som vittnade om överlevnad. Argument flammade upp som tändstickor—två starka sinnen, två sårade hjärtan, båda rädda för att göra fel igen. Ord flög på portugisiska och svenska och desperata esperanto av frustration. Men alltid—alltid—valde de varandra.",
    "ourStory.ch8.p1": "Resten är som man säger, en historia för en annan gång. Men det här partiet? Det här partiet skrevs i champagnebubbor och jazznoter, i dåligt uttalade tunnelbanestationer och picknicker under paris himmel, i argument som slutade i skratt och kyssar som smakade mod.",

    "registry.desc1" : "Eftersom vi inte har möjlighet att ta med oss fysiska presenter tillbaka till Australien, ber vi vänligen att ni inte tar med några gåvor. ",
    "registry.desc2" : "Er närvaro är den största gåvan för oss. ",
    "registry.desc3" : "Om ni ändå önskar ge något, skulle ett bidrag till vår smekmånad uppskattas mycket.",


  },
  "en": {
    "home.hero.date": "Saturday, July 18, 2026",
    "home.hero.invite": "With love and gratitude, we invite you to share in the joy of our wedding day.",
    "home.hero.location": "Borghamn Strand, Borghamnsvägen 1A, 592 93 Borghamn, Sweden",
    "lang.continue": "Continue",
    "lang.english": "English",
    "lang.portuguese": "Brazil (Portuguese)",
    "lang.subtitle": "You can change this later.",
    "lang.swedish": "Swedish",
    "lang.title": "Choose your language",
    "nav.details": "DETAILS",
    "nav.home": "HOME",
    "nav.ourStory": "OUR STORY",
    "nav.rsvp": "RSVP",
    "registry.accountName": "Account Name:",
    "registry.accountNumber": "Account Number:",
    "registry.adminPassword": "Admin password",
    "registry.bankTitle": "Bank Details",
    "registry.bsb": "BSB:",
    "registry.coupleAdmin": "COUPLE ADMIN",
    "registry.error": "Something went wrong. Please try again.",
    "registry.goal": "Goal:",
    "registry.kicker": "Honeymoon Fund",
    "registry.lastUpdated": "Last updated:",
    "registry.notUpdated": "Not updated yet",
    "registry.progress": "Progress",
    "registry.received": "Received:",
    "registry.reference": "Reference:",
    "registry.referenceHint": "Your name (e.g. “Alex & Sam”)",
    "registry.remaining": "Remaining:",
    "registry.save": "Save",
    "registry.saved": "Saved",
    "registry.saving": "Saving…",
    "registry.subtext": "As we are unable to bring gifts back to Australia, we kindly ask that you do not bring physical gifts.\\nYour presence is a gift in itself. If you would still like to give a gift, a contribution toward our honeymoon would be greatly appreciated.\\nPlease use the bank details below (no payment on the website).",
    "registry.thankYou": "Thank you so much for your generosity.",
    "registry.title": "Wedding Gifts",
    "registry.unauthorized": "Wrong password.",
    "registry.updateAmount": "Update amount",
    "registry.newAmount": "Received amount (AUD)",
    "rsvp.areYouJoining": "Are you joining us?",
    "rsvp.checkin": "Check-in (date)",
    "rsvp.checkout": "Check-out (date)",
    "rsvp.collectAttend": "Accommodation has been reserved at Borghamn Strand for guests who wish to stay overnight. We strongly recommend staying overnight, as taxis can be difficult to arrange from this location. Once you confirm your attendance and decide to stay at the same hotel as the party, the hotel will contact you for payment and final confirmation",
    "rsvp.collectDecline": "We collect your name and attendance only.",
    "rsvp.deadlineLabel": "RSVP deadline:",
    "rsvp.email": "Email",
    "rsvp.guestName": "Guest name",
    "rsvp.guestsNumber": "Guests Number",
    "rsvp.julyOnly": "Dates available in July 2026 only",
    "rsvp.no": "UNABLE TO ATTEND",
    "rsvp.roomType": "Room Type",
    "rsvp.selectName": "Select your name…",
    "rsvp.stayDetails": "Stay Details",
    "rsvp.submitAttend": "SUBMIT RSVP",
    "rsvp.submitDecline": "SEND REGRETS",
    "rsvp.subtitle": "Please select your name and let us know if you can attend.",
    "rsvp.title": "RSVP",
    "rsvp.yes": "YES, WITH JOY",

    "gifts.milestone.kicker": "WEDDING GIFTS",
    "gifts.milestone.subtitle": "Thank you for your gift — it helps us create memories on our honeymoon.",
    "gifts.milestone.receivedLabel": "Received",

    "gifts.milestone.level1": "Glenorchy",
    "gifts.milestone.level2": "Melbourne",
    "gifts.milestone.level3": "Fiji",
    "gifts.milestone.level4": "Maldives",

    "gifts.milestone.admin.title": "Couple Admin",
    "gifts.milestone.admin.subtitle": "Update the received amount shown on the site.",
    "gifts.milestone.admin.password": "Admin password",
    "gifts.milestone.admin.passwordPlaceholder": "Enter password",
    "gifts.milestone.admin.amountLabel": "Received amount (AUD)",
    "gifts.milestone.admin.amountPlaceholder": "e.g. 3250",
    "gifts.milestone.admin.wrongPassword": "Password incorrect ❌",
    "gifts.milestone.admin.invalidNumber": "Please enter a valid number.",
    "gifts.milestone.admin.cancel": "Cancel",
    "gifts.milestone.admin.save": "Save",
    "gifts.milestone.admin.tip": "Tip: Shift + click the title 5 times to open this panel.",
    "quicklinks.story": "Our Story",
    "quicklinks.details": "The Details",
    "quicklinks.rsvp": "RSVP",
    "quicklinks.gifts": "Wedding Gifts",

    // ✅ Details page (Phase 1)
    "details.invite.p1": "We invite you to our wedding at Borghamn Strand, an enchanting place where towering elms meet candlelit pathways. And where our next adventure begins.",
    "details.invite.ceremony": "Wedding Ceremony: Kristbergs Kyrka (Kristbergs Church)",
    "details.invite.cta": "RSVP",

    "travel.hero.kicker": "About Sweden",

    "details.info.leftTitle": "How to get there",
    "details.info.rightTitle": "Schedule",


    /* -------- Details Page -------- */
    "details.howToGetThere.title": "HOW TO GET THERE",

    "details.howToGetThere.intro":
      "The wedding ceremony will be held at Kristbergs Church in Borensberg, 30 km (30 minutes) from Linköping. The reception will take place at Borghamn Strand on Lake Vättern, 20–25 km (20–25 minutes) from the church and approximately 50 km (45 minutes) from Linköping.",

    "details.howToGetThere.accommodation":
      "Accommodation has been reserved at Borghamn Strand for guests who wish to stay overnight. We strongly recommend staying overnight, as taxis can be difficult to arrange from this location and drinking and driving is a serious offense in Sweden and never an acceptable option. It is advisable to drive to the church and eventually park at the reception venue until the following day.",

    "details.howToGetThere.optionsTitle":
      "To reach Linköping, which is the closest city to the wedding, you can:",

    "details.howToGetThere.option1":
      "Fly directly with KLM to Linköping via Amsterdam – This is the fastest option with a 1h 40m flight from Amsterdam.",

    "details.howToGetThere.option2":
      "Fly to Stockholm, Sweden (Arlanda Airport) and take the train – Direct trains run from Arlanda Airport to Linköping in about 3 hours, or you can rent a car for the approximately 250 km journey.",

    "details.howToGetThere.option3":
      "Fly to Copenhagen, Denmark (Kastrup Airport) and take the train – Direct trains from Kastrup Airport to Linköping take around 4 hours, or you can rent a car for the approximately 450 km drive.",
    
      // Details page - Info Grid (RIGHT: Schedule)
    "details.infogrid.schedule.title": "SCHEDULE",

    "details.infogrid.schedule.day1.date": "Friday, July 17, 2026",
    "details.infogrid.schedule.day1.note": "(Our 47-month anniversary)",
    "details.infogrid.schedule.day1.eventTitle": "Welcome Gathering",
    "details.infogrid.schedule.day1.body":
      "Join us for an informal meet and greet at Borghamn Strand from 17:00 onwards. This is a relaxed opportunity to catch up with family and friends before the big day.",
    "details.infogrid.schedule.day1.dress": "Casual dress.",

    "details.infogrid.schedule.day2.date": "Saturday, July 18, 2026",
    "details.infogrid.schedule.day2.item1.time": "16:15",
    "details.infogrid.schedule.day2.item1.text":
      "Guests arrive at Kristbergs Church in Borensberg. Please make your own way to the church and be seated by 16:30.",
    "details.infogrid.schedule.day2.item2.time": "16:30",
    "details.infogrid.schedule.day2.item2.text":
      "Wedding ceremony begins. All guests should be seated before the ceremony starts.",
    "details.infogrid.schedule.day2.item3.time": "17:15 (approx.)",
    "details.infogrid.schedule.day2.item3.text":
      "Ceremony concludes. Guests exit the church first and wait outside. The bride and groom will exit after congratulations.",
    "details.infogrid.schedule.day2.item4.time": "17:45",
    "details.infogrid.schedule.day2.item4.text":
      "Travel to the reception. Make your own way to Borghamn Strand (20–25 minutes by car).",
    "details.infogrid.schedule.day2.item5.time": "18:30",
    "details.infogrid.schedule.day2.item5.text":
      "Reception begins with drinks and canapés. Enjoy nibbles and drinks while we wait for the newlyweds to arrive. Guests may also check in to their accommodation.",
    "details.infogrid.schedule.day2.item6.time": "19:30",
    "details.infogrid.schedule.day2.item6.text":
      "Bride and groom arrive for a champagne toast.",
    "details.infogrid.schedule.day2.item7.time": "20:30",
    "details.infogrid.schedule.day2.item7.text": "Dinner is served.",
    "details.infogrid.schedule.day2.item8.time": "Late evening",
    "details.infogrid.schedule.day2.item8.text":
      "Music and dancing continue into the night.",

      // Details page - guest Info
    "details.guestInfo.title": "TOASTMASTER & GUEST INFORMATION",
    "details.guestInfo.toastmasterTitle": "Toastmaster and Speeches",
    "details.guestInfo.toastmasterBody": "The Toastmaster is responsible for the order of events during dinner and for introducing the speakers. Anyone who wishes to give a speech, perform, or organize a surprise should register in advance with the Toastmaster. Games and jokes should be in good taste and never at the expense of the bride and groom.",
    "details.guestInfo.toastmasterLabel": "Toastmaster:",
    "details.guestInfo.traditionTitle": "A Classic Swedish Tradition",
    "details.guestInfo.traditionBride": "If the bride leaves the table, all women are invited to come up and give the groom a kiss on the cheek.",
    "details.guestInfo.traditionGroom": "If the groom leaves the table, all men are invited to come up and give the bride a kiss on the cheek.",
    "details.guestInfo.dressCodeTitle": "Dress Code:",
    "details.guestInfo.dressCode": "Lounge suit",
    "details.guestInfo.whiteNote": "Please avoid wearing all-white (this is reserved for the bride).",
    "details.guestInfo.giftsTitle": "Gifts",
    "details.guestInfo.giftsBody": "As we are unable to bring physical gifts back with us, we would instead appreciate a contribution toward our honeymoon.",
    "details.guestInfo.finalNote": "Please show consideration for all guests and have a wonderful time!",
      
    // ---------------- Travel cards (Details page) ----------------
    "travel.cards.vikings.title": "Welcome to Sweden – A Land of Vikings",
    "travel.cards.vikings.p1":
    "Sweden is a country of stunning natural beauty and rich history. You're celebrating in Östergötland, a region whose fertile plains and access to key waterways like Lake Vättern made it an attractive settlement from very early times. The presence of numerous runestones across the region underscores its importance during the Viking era as a center for trade, communication, and emerging political structures. Most famous is the Rök Runestone, erected around 800-850 AD, which bears the longest known runic inscription on any stone with about 760 runes and is often called the first piece of written Swedish literature. This remarkable stone is only a 15-minute drive from Borghamn Strand.",
    "travel.cards.vikings.p2":
    "While Östergötland holds deep Viking roots, Uppsala in Sweden became even more important as a religious center during the Viking Age for all Scandinavian Vikings, with a temple dedicated to the Norse gods Odin, Thor, and Freyr. Vikings from Denmark, Norway, and Sweden would travel to Uppsala for major religious festivals and sacrifices, much like pilgrims traveling to sacred sites today.",
    "travel.cards.vikings.p3":
    "Danish Vikings were the first to convert to Christianity, focusing their raids on France, England, and the Mediterranean. Norwegian Vikings were known as the bravest and most adventurous, sailing to Iceland, Greenland, and even America.",
    "travel.cards.vikings.p4":
    "The Swedish Vikings, known as Varangians or Rus, took a different path. They ventured eastward and were excellent explorers and tradesmen, staying true to their pagan religion until the early 12th century. Swedish Vikings were far less violent than their counterparts, focusing primarily on peaceful trade routes extending all the way to Istanbul. The name Varangians means \"sworn companion,\" and Swedish Vikings became elite mercenaries and bodyguards serving the Byzantine emperors in Constantinople. These eastern traders even gave Russia its name, as the term \"Rus\" may derive from Old Norse for \"a crew of oarsmen.\"",

    "travel.cards.empire.title": "From Viking Kingdom to a European Superpower",
    "travel.cards.empire.p1":
    "At its height in 1658, the Swedish Empire was one of Europe's great powers. The empire's territorial holdings included modern-day Sweden, Finland, Estonia, Latvia, parts of Norway, and significant areas in what is now Germany, Poland, and Russia. At this time, Sweden controlled the third-largest territory in Europe by land area, surpassed only by Russia and Spain.",

    "travel.cards.lakes.title": "A Country of Lakes and Islands",
    "travel.cards.lakes.p1":
    "Centuries after the Vikings, Sweden embarked on another grand adventure—one that would physically connect the country from coast to coast. The Göta Kanal, which passes close to your wedding venues, tells a remarkable story of ambition and determination. Its purpose was to shorten transportation between Sweden's eastern and western coasts, allowing ships to navigate through the country rather than around it, thereby avoiding the costly Danish tolls.",
    "travel.cards.lakes.p2":
    "Commissioned on April 11, 1810, the Göta Kanal cost approximately US$251 million in today's value. It took more than twenty years to complete and required the efforts of 58,000 soldiers. The visionary architect Baltzar von Platen, who championed this project, is buried in Motala, about 20 minutes from Borghamn Strand. This 190-kilometer engineering marvel, often called \"Sweden's Blue Ribbon,\" connects the Baltic Sea to the North Sea through a series of 58 locks, linking the great lakes Vänern and Vättern.",
    "travel.cards.lakes.p3":
    "Sweden truly is a land shaped by water. The country boasts the most islands of any nation in the world with an estimated 267,570 coastal islands, and also has close to 100,000 lakes. Your wedding reception at Lake Vättern places you at the shores of Sweden's second-largest lake, a stunning body of water that forms a vital part of the Göta Kanal system.",

    "travel.cards.coffee.title": "Coffee and Innovations",
    "travel.cards.coffee.p1":
    "The Swedes are the world's second most enthusiastic coffee drinkers, second only to their Finnish neighbors. Brazil, the world's largest coffee exporter, supplies much of Sweden's beloved brew, so when you enjoy an excellent fika (coffee break) during your visit, those beans may well have traveled from Brazilian plantations to Swedish cups.",
    "travel.cards.coffee.p2":
    "Perhaps it's the combination of coffee and long, dark winter months that fuels Sweden's remarkable spirit of innovation. Alfred Nobel gave the world dynamite and the prestigious Nobel Prize. Sweden also gave us the three-point seatbelt (which Volvo generously shared with all car manufacturers to save lives), the zipper, ball bearings (SKF), Spotify, Bluetooth, Minecraft, Tetra Pak packaging, the first implantable pacemaker, safety matches (still called \"Swedish matches\" in many countries), and even the Celsius temperature scale.",
    "travel.cards.coffee.p3":
    "One of Sweden's most dominant modern exports is music. Swedish songwriter and producer Max Martin has 26 number-one singles on the Billboard charts, second only to Paul McCartney. If you've listened to pop radio in the past 25 years, you've almost certainly heard Max Martin's work.",


    // ---------------- Our Story ----------------
    "ourStory.hero.alt": "Our story hero",
    "ourStory.couple.alt": "Couple",
    "ourStory.title": "OUR STORY CHAPTERS",
    "ourStory.rsvp": "RSVP",

    "ourStory.ch1.title": "Chapter One - January 2022. São Paulo.",
    "ourStory.ch1.p1": "The scent of rain on hot pavement mixed with the noise from the street below. Tais laid on her couch, post-COVID exhaustion still lingering in her muscles like the memory of samba danced too long. Her fingers moved across the Tinder screen— swipe left, swipe left, swipe left. The parade of faces blurred into a beige monotony that matched her mood perfectly. Meanwhile, 10,000 kilometers northwest, Linkoping sat frozen under a blanket of snow. Joakim the serious, methodical, Swedish to his core had been approaching Tinder like a research project. Spreadsheets could have been involved as he has an engineer’s mind He was ready to restart his life. Ready for something real. Ready for... well, he would know it when he saw it. Then she appeared. Sun-kissed bronze skin glowing like caramel. Dark curly hair cascading like a waterfall of midnight silk. Joakim's finger hovered over the screen. This is definitely a fake account, he thought, his Nordic skepticism kicking in. Nobody who looked like that was on Tinder in São Paulo looking for a divorced Swedish guy. A few days later, Tais was back on the app, thumb working overtime, when a face stopped her mid-swipe. Blond hair, almost albinoblond. Blue eyes that looked like chips of Baltic ice. Sharp cheekbones that could cut glass. She squinted at the screen. Fake!! Has to be fake. But like a good wine that needs time to breathe, the image lingered in her mind. She returned the next day. And the next. Finally, with the same impulsiveness that made her book flights at 2 AM, she swiped right. BLING! MATCH!!! Almost like he'd been sitting there waiting (he had), Joakim's message popped up instantly: \"Hi Tais!! How are you?\" Tais, veteran of a thousand fake accounts, decided to call the bluff. \"Video call?\" His response made her face put on a wide smile \"Sure, I just need to put on some perfume\" Five minutes later, there he was, real, Swedish, and slightly awkward in that endearing way that made her heart do a little samba. They talked for hours, voices carrying across continents, laughter mixing with the crackle of internet connection.",

    "ourStory.ch2.title": "Chapter Two - The Breakup (and the What-If)", 
    "ourStory.ch2.p1": "About a month later, they broke up. Different goals. Different continents. Different everything, really. It made sense. It was practical. It was sensible. Joakim hated it. Another month passed. He sat in his house, the Swedish winter pressing against the windows, and thought: What do I have to lose? Worst case, she says no. His fingers typed before his brain could overthink: \"Are you still single?\" \"Yes, why do you ask?\" came the reply that changed everything.",

    "ourStory.ch3.title": "Chapter Three - August 17, 2022. Paris.",
    "ourStory.ch3.p1": "Charles de Gaulle Airport was a symphony of chaos of endless footsteps echoing off cold floors, announcements in three languages overlapping like Italians arguing, the wheeling thunder of a thousand suitcases. But the Sheraton lobby? An oasis of calm. Soft lighting, plush sofas, the kind of quiet that wraps around you like a cashmere blanket. Joakim sank into a sofa, tired from getting up way too early, but wired on anticipation. An hour passed. Then another. Maybe she's not coming, he thought, but he was too relaxed to panic properly. What he didn't know: Tais was there. Lurking in the shadows like a jaguar stalking prey, checking him out, making sure the man matched the promise. Her heart hammered against her ribs. Finally—Bora, Tais, Bora!—she stepped forward. Joakim looked up, saw her, and his face transformed. He stood, crossed the lobby in three strides, and wrapped her in a hug that felt like coming home. He almost kissed her right there (she noticed, but saved that moment for later). It felt like they'd known each other forever.",

    "ourStory.ch4.title": "Chapter Four - \"Barbès - Rochechouart!\"",
    "ourStory.ch4.p1": "The metro announcement became their private joke—that gloriously mangled pronunciation that only makes sense if you're French, which neither of them were. Every time they passed that station, they dissolved into giggles like teenagers sneaking wine from their parents' cellar. Within hours, Tais was ready. They kissed. Magic, pure and simple, with a taste of wine and bravery and the sweet thrill of risk.",

    "ourStory.ch5.title": "Chapter Five - The Paris story",
    "ourStory.ch5.p1": "Oh, those days! Painted in Monet colors and scored with jazz saxofone. They moved through the city like dancers who had finally found their rhythm—sometimes stepping on each other's toes (those passionate arguments! the flying Portuguese-Swedish word salad!), but always, always coming back to center. They climbed the cobblestone streets of Montmartre where the scent of crêpes and paint mingled with possibilities hanging in the air. At Sacré-Cœur, they added their lock. Their names intertwined in metal, a promise sealed with a kiss while Paris spread below them like a banquet of lights and love. Champagne bubbles on their tongues, laughter in their hearts. Champagne, of course! Always champagne! Tais's first real picnic! And at Parc Floral! Romance in every moment. Strawberries bursting with sweetness. Champagne bubbles catching the sunlight like liquid diamonds. Cheese, cold cut meats, and a Paris baguette—when in Paris, do as the Parisians do! The Eiffel Tower sparkled in the night, its lights dancing on the hour as they stood on a bridge over the Seine, wide-eyed like children seeing magic for the first time. The secret ingredient was love. Then a nearby jazz club—an intimate cave where music lived and breathed. They lost themselves in jam sessions that stretched into the early hours, the saxophone wailing stories of love and loss and redemption. A few beers, the warm buzz of connection, then a taxi home through streets painted with streetlight. Their favourite restaurant became a ritual, tucked in the neighbourhood of Moulin Rouge where tourists chased the cancan but locals chased flavour. Boeuf bourguignon, rich and deep—the kind of dish that takes hours to make and minutes to devour. The meat fell apart at the touch of a fork. And the red wine—mon dieu, the red wine—opened on the tongue like a love letter, complex and honest and true. Or was it the love again? More jazz and more late-night dinners. Good wine flowed like conversation, each glass loosening tongues and opening hearts. Laughter bounced off ancient stone walls, echoing through narrow streets where their history began for real.",

    "ourStory.ch6.title": "Chapter Six - Sweden. A Reality Check.",
    "ourStory.ch6.p1": "Tais followed Joakim to Sweden and met Tiger and Freya, Joakim's teenage warriors. The introduction happened in Joakim's backyard over a barbecue—Swedish summer stretching long into the evening, the smell of grilled meat and smoke hanging in the air. Tiger and Tais discussed apertures and composition, the universal language of photography bridging the gap between Brazilian warmth and Swedish reserve. And then Freya—shy, observant Freya—who had made seating cards for everyone. On Tais's card, three words: \"I love you.\" Tais's heart softened, feeling at home yet still keeping her guard up. Tais discovered the nightlife of Linköping—so different from the vibrant pulse of Paris, but filled with warm meetings with Joakim's friends. Cozy pubs where everyone seemed to know each other, laughter that felt genuine and unguarded, the kind of community that wraps around you slowly but completely. Then, suddenly, Tais was on a plane back to Brazil. Joakim stood alone in his house of chaos, packing his life into a container bound for Australia. The earth kept spinning as their lives moved even further apart.",

    "ourStory.ch7.title": "Chapter Seven - Christmas time in Hobart Tasmania",
    "ourStory.ch7.p1": "Tais came for three months. A test drive, she called it. The air was filled with passion again—thick as Tasmanian mist rolling down the mountain. They cooked together, arguing about the correct amount of garlic. \"There is never enough,\" Tais insisted, her wooden spoon punctuating each word. Joakim—who doesn't eat garlic—reflected deeply upon his choice of companion, wondering if love would kill him. They shared wine on the deck at sunset, the sky bruising purple and gold over the hills. They talked about family—Joakim's teenagers navigating their own storms back in Sweden, Tais's relatives scattered across Brazil like stars in a constellation she could map with her eyes closed. They talked about her two dogs, Bella and Lola, waiting for her back in São Paulo—her furry daughters who she missed with an ache that never quite went away. Two passionate souls. Two big hearts that had been broken before, still carrying the scars like badges of survival. Arguments flared like matches—two strong minds, two wounded hearts, both terrified of getting it wrong again. Words flew in Portuguese and Swedish and the desperate Esperanto of frustration. But always—always—they chose each other.",

    "ourStory.ch8.title": "Chapter Eight - The rest",
    "ourStory.ch8.p1": "As they say, is a story for another time. But this part? This part was written in champagne bubbles and jazz notes, in badly pronounced metro stops and picnics under Parisian skies, in arguments that ended in laughter and kisses that tasted like courage.",

    "registry.desc1" : "As we are unable to bring gifts back to Australia, we kindly ask that you do not bring physical gifts. ",
    "registry.desc2" : "Your presence is a gift in itself.",
    "registry.desc3" : "If you would still like to give a gift, a contribution toward our honeymoon would be greatly appreciated.",


  },
  "pt-BR": {
    "home.hero.date": "Sábado, 18 de julho de 2026",
    "home.hero.invite": "Com amor e gratidão, convidamos você a compartilhar a alegria do nosso casamento.",
    "home.hero.location": "Borghamn Strand, Borghamnsvägen 1A, 592 93 Borghamn, Suécia",
    "lang.continue": "Continuar",
    "lang.english": "English",
    "lang.portuguese": "Português (Brasil)",
    "lang.subtitle": "Você poderá alterar isso depois.",
    "lang.swedish": "Svenska",
    "lang.title": "Escolha o idioma",
    "nav.details": "DETALHES",
    "nav.home": "INÍCIO",
    "nav.ourStory": "NOSSA HISTÓRIA",
    "nav.rsvp": "RSVP",
    "registry.accountName": "Nome da conta:",
    "registry.accountNumber": "Número da conta:",
    "registry.adminPassword": "Senha de admin",
    "registry.bankTitle": "Dados Bancários",
    "registry.bsb": "BSB:",
    "registry.coupleAdmin": "ADMIN DO CASAL",
    "registry.error": "Algo deu errado. Tente novamente.",
    "registry.goal": "Meta:",
    "registry.kicker": "Fundo da Lua de Mel",
    "registry.lastUpdated": "Última atualização:",
    "registry.notUpdated": "Ainda não atualizado",
    "registry.progress": "Progresso",
    "registry.received": "Recebido:",
    "registry.reference": "Referência:",
    "registry.referenceHint": "Seu nome (ex.: “Alex & Sam”)",
    "registry.remaining": "Restante:",
    "registry.save": "Salvar",
    "registry.saved": "Salvo",
    "registry.saving": "Salvando…",
    "registry.subtext": "Como não podemos levar presentes físicos de volta para a Austrália, pedimos gentilmente que não tragam presentes físicos.\\nSua presença já é um presente. Se ainda assim quiser presentear, uma contribuição para a nossa lua de mel será muito apreciada.\\nUse os dados bancários abaixo (sem pagamento no site).",
    "registry.thankYou": "Muito obrigado pela sua generosidade.",
    "registry.title": "Presentes de Casamento",
    "registry.unauthorized": "Senha incorreta.",
    "registry.updateAmount": "Atualizar valor",
    "registry.newAmount": "Valor recebido (AUD)",
    "rsvp.areYouJoining": "Você vai participar?",
    "rsvp.checkin": "Check-in (data)",
    "rsvp.checkout": "Check-out (data)",
    "rsvp.collectAttend": "A acomodação foi pré-reservada. Recomendamos fortemente pernoitar, pois táxis podem ser difíceis de serem encontrados nessa localização. Caso decida pernoitar no local da festa, o hotel entrará em contato para o pagamento e a confirmação final.",
    "rsvp.collectDecline": "Coletamos apenas seu nome e presença.",
    "rsvp.deadlineLabel": "Prazo do RSVP:",
    "rsvp.email": "E-mail",
    "rsvp.guestName": "Nome do convidado",
    "rsvp.guestsNumber": "Número de hóspedes",
    "rsvp.julyOnly": "Datas disponíveis apenas em julho de 2026",
    "rsvp.no": "NÃO PODEREI IR",
    "rsvp.roomType": "Tipo de quarto",
    "rsvp.selectName": "Selecione seu nome…",
    "rsvp.stayDetails": "Detalhes da estadia",
    "rsvp.submitAttend": "ENVIAR RSVP",
    "rsvp.submitDecline": "ENVIAR DESCULPAS",
    "rsvp.subtitle": "Selecione seu nome e nos diga se poderá comparecer.",
    "rsvp.title": "RSVP",
    "rsvp.yes": "SIM, COM ALEGRIA",

    "gifts.milestone.kicker": "WEDDING GIFTS",
    "gifts.milestone.subtitle": "Obrigado pelo seu presente — ele nos ajuda a criar memórias na nossa lua de mel.",
    "gifts.milestone.receivedLabel": "Recebido",

    "gifts.milestone.level1": "Osasco",
    "gifts.milestone.level2": "Bahia",
    "gifts.milestone.level3": "Paris",
    "gifts.milestone.level4": "Maldives",

    "gifts.milestone.admin.title": "Couple Admin",
    "gifts.milestone.admin.subtitle": "Atualize o valor recebido exibido no site.",
    "gifts.milestone.admin.password": "Senha de admin",
    "gifts.milestone.admin.passwordPlaceholder": "Digite a senha",
    "gifts.milestone.admin.amountLabel": "Valor recebido (AUD)",
    "gifts.milestone.admin.amountPlaceholder": "ex: 3250",
    "gifts.milestone.admin.wrongPassword": "Senha incorreta ❌",
    "gifts.milestone.admin.invalidNumber": "Por favor, insira um número válido.",
    "gifts.milestone.admin.cancel": "Cancelar",
    "gifts.milestone.admin.save": "Salvar",
    "gifts.milestone.admin.tip": "Dica: Segure Shift + clique no título 5 vezes para abrir este painel.",
    "quicklinks.story": "Nossa história",
    "quicklinks.details": "Detalhes",
    "quicklinks.rsvp": "RSVP",
    "quicklinks.gifts": "Presentes",

    "details.invite.p1": "Convidamos você para o nosso casamento em Borghamn Strand, um lugar encantador onde grandes olmos encontram caminhos iluminados por velas. É onde começa a nossa próxima aventura.",
    "details.invite.ceremony": "Cerimônia: Kristbergs Kyrka (Igreja de Kristberg)",
    "details.invite.cta": "RSVP",

    "travel.hero.kicker": "Sobre a Suécia",

    "details.info.leftTitle": "Como chegar",
    "details.info.rightTitle": "Programação",

    /* -------- Details Page -------- */
    "details.howToGetThere.title": "COMO CHEGAR",

    "details.howToGetThere.intro":
      "A cerimônia de casamento será realizada na Igreja de Kristberg em Borensberg, a 30 km (30 minutos) de Linköping. A recepção acontecerá em Borghamn Strand, às margens do Lago Vättern, a 20–25 km (20–25 minutos) da igreja e aproximadamente 50 km (45 minutos) de Linköping.",

    "details.howToGetThere.accommodation":
      "A acomodação foi pré-reservada em Borghamn Strand para os convidados que desejarem pernoitar. Recomendamos fortemente que fiquem para passar a noite, pois táxis podem ser difíceis de conseguir neste local e dirigir sob efeito de álcool é uma infração grave na Suécia e nunca é uma opção aceitável. É aconselhável ir de carro até a igreja e estacioná-lo no local da recepção até o dia seguinte.",

    "details.howToGetThere.optionsTitle":
      "Para chegar a Linköping, que é a cidade mais próxima do casamento, você pode:",

    "details.howToGetThere.option1":
      "Voar diretamente com a KLM para Linköping via Amsterdam – Esta é a opção mais rápida, com um voo de aproximadamente 1h40 desde Amsterdam.",

    "details.howToGetThere.option2":
      "Voar para Estocolmo, Suécia (Aeroporto de Arlanda) e pegar o trem – Trens diretos partem do Aeroporto de Arlanda para Linköping em cerca de 3 horas, ou você pode alugar um carro para a viagem de aproximadamente 250 km.",

    "details.howToGetThere.option3":
      "Voar para Copenhague, Dinamarca (Aeroporto de Kastrup) e pegar o trem – Trens diretos do Aeroporto de Kastrup para Linköping levam cerca de 4 horas, ou você pode alugar um carro para a viagem de aproximadamente 450 km.",

    // Details page - Info Grid (RIGHT: Schedule)
    "details.infogrid.schedule.title": "PROGRAMAÇÃO",

    "details.infogrid.schedule.day1.date": "Sexta-feira, 17 de julho de 2026",
    "details.infogrid.schedule.day1.note": "(Nosso aniversário de 47 meses)",
    "details.infogrid.schedule.day1.eventTitle": "Encontro de Boas-vindas",
    "details.infogrid.schedule.day1.body":
      "Junte-se a nós para um encontro informal em Borghamn Strand a partir das 17:00. É uma oportunidade descontraída para colocar o papo em dia com família e amigos antes do grande dia.",
    "details.infogrid.schedule.day1.dress": "Traje casual.",

    "details.infogrid.schedule.day2.date": "Sábado, 18 de julho de 2026",
    "details.infogrid.schedule.day2.item1.time": "16:15",
    "details.infogrid.schedule.day2.item1.text":
      "Chegada dos convidados à Igreja de Kristberg em Borensberg. Por favor, chegue por conta própria e esteja sentado(a) até 16:30.",
    "details.infogrid.schedule.day2.item2.time": "16:30",
    "details.infogrid.schedule.day2.item2.text":
      "Início da cerimônia. Todos os convidados devem estar sentados antes de começar.",
    "details.infogrid.schedule.day2.item3.time": "17:15 (aprox.)",
    "details.infogrid.schedule.day2.item3.text":
      "Fim da cerimônia. Os convidados saem primeiro e aguardam do lado de fora. Os noivos saem após as congratulações.",
    "details.infogrid.schedule.day2.item4.time": "17:45",
    "details.infogrid.schedule.day2.item4.text":
      "Deslocamento para a recepção. Vá por conta própria para Borghamn Strand (20–25 minutos de carro).",
    "details.infogrid.schedule.day2.item5.time": "18:30",
    "details.infogrid.schedule.day2.item5.text":
      "Início da recepção com drinks e canapés. Aproveite os petiscos e bebidas enquanto aguardamos a chegada dos noivos. Os convidados também podem fazer check-in na acomodação.",
    "details.infogrid.schedule.day2.item6.time": "19:30",
    "details.infogrid.schedule.day2.item6.text":
      "Chegada dos noivos para um brinde com champagne.",
    "details.infogrid.schedule.day2.item7.time": "20:30",
    "details.infogrid.schedule.day2.item7.text": "Jantar servido.",
    "details.infogrid.schedule.day2.item8.time": "Noite",
    "details.infogrid.schedule.day2.item8.text":
      "Música e dança continuam pela noite.",  

      // Details page - guest Info
    "details.guestInfo.title": "MESTRE DE CERIMÔNIAS & INFORMAÇÕES",
    "details.guestInfo.toastmasterTitle": "Mestre de Cerimônias e Discursos",
    "details.guestInfo.toastmasterBody": "O Mestre de Cerimônias é responsável pela ordem dos eventos durante o jantar e por introduzir os oradores. Quem desejar fazer um discurso, uma apresentação ou organizar alguma surpresa deve se registrar com antecedência com o Mestre de Cerimônias. Brincadeiras e piadas devem ser de bom gosto e nunca às custas dos noivos.",
    "details.guestInfo.toastmasterLabel": "Mestre de Cerimônias:",
    "details.guestInfo.traditionTitle": "Uma tradição clássica sueca",
    "details.guestInfo.traditionBride": "Se a noiva sair da mesa, todas as mulheres estão convidadas a dar um beijo no rosto do noivo.",
    "details.guestInfo.traditionGroom": "Se o noivo sair da mesa, todos os homens estão convidados a dar um beijo no rosto da noiva.",
    "details.guestInfo.dressCodeTitle": "Traje:",
    "details.guestInfo.dressCode": "Social completo / Lounge suit",
    "details.guestInfo.whiteNote": "Por favor, evite usar branco total, pois essa cor é reservada exclusivamente para a noiva.",
    "details.guestInfo.giftsTitle": "Presentes",
    "details.guestInfo.giftsBody": "Como não teremos como levar presentes físicos conosco, agradeceríamos, em vez disso, uma contribuição para a nossa viagem de lua de mel.",
    "details.guestInfo.finalNote": "Pedimos a gentileza de demonstrarem consideração por todos os convidados e divirtam-se muito!",
    
      // ---------------- Travel cards (Details page) ----------------
    "travel.cards.vikings.title": "Bem-vindo à Suécia – Terra dos Vikings",
    "travel.cards.vikings.p1":
    "A Suécia é um país de beleza natural impressionante e rica história. Vocês estão celebrando em Östergötland, uma região cujas planícies férteis e acesso a importantes vias navegáveis como o Lago Vättern a tornaram atrativa desde os primeiros tempos. A presença de numerosas pedras rúnicas na região destaca sua importância durante a Era Viking como centro de comércio, comunicação e formação de estruturas políticas iniciais. A mais famosa é a Pedra Rúnica de Rök, erguida por volta de 800–850 d.C., que contém a mais longa inscrição rúnica conhecida, com cerca de 760 runas, sendo frequentemente considerada a primeira obra da literatura escrita sueca. Essa pedra extraordinária fica a apenas 15 minutos de carro de Borghamn Strand.",
    "travel.cards.vikings.p2":
    "Embora Östergötland tenha profundas raízes vikings, Uppsala tornou-se ainda mais importante como centro religioso durante a Era Viking para toda a Escandinávia, com um templo dedicado aos deuses nórdicos Odin, Thor e Freyr. Vikings da Dinamarca, Noruega e Suécia viajavam até Uppsala para grandes festivais religiosos e sacrifícios, assim como peregrinos visitam locais sagrados nos dias de hoje.",
    "travel.cards.vikings.p3":
    "Os vikings dinamarqueses foram os primeiros a se converter ao cristianismo, concentrando suas incursões na França, Inglaterra e no Mediterrâneo. Os vikings noruegueses eram conhecidos como os mais corajosos e aventureiros, navegando até a Islândia, Groenlândia e até a América.",
    "travel.cards.vikings.p4":
    "Os vikings suecos, conhecidos como Varangianos ou Rus, seguiram um caminho diferente. Eles viajaram para o leste e foram excelentes exploradores e comerciantes, mantendo sua religião pagã até o início do século XII. Os vikings suecos eram muito menos violentos que seus equivalentes e focavam principalmente em rotas comerciais pacíficas que se estendiam até Istambul. O nome Varangianos significa “companheiro juramentado”, e os vikings suecos tornaram-se mercenários de elite e guarda-costas dos imperadores bizantinos em Constantinopla. Esses comerciantes orientais também deram nome à Rússia, já que o termo “Rus” pode derivar do antigo nórdico para “tripulação de remadores”.",

    "travel.cards.empire.title": "De reino viking a potência europeia",
    "travel.cards.empire.p1":
    "No auge do seu poder, em 1658, o Império Sueco era uma das grandes potências da Europa. Seus territórios incluíam a atual Suécia, Finlândia, Estônia, Letônia, partes da Noruega e extensas áreas do que hoje são Alemanha, Polônia e Rússia. Naquela época, a Suécia controlava o terceiro maior território da Europa em extensão terrestre, ficando atrás apenas da Rússia e da Espanha.",

    "travel.cards.lakes.title": "Um país de lagos e ilhas",
    "travel.cards.lakes.p1":
    "Séculos após os vikings, a Suécia embarcou em outra grande aventura — uma que conectaria fisicamente o país de costa a costa. O Canal de Göta, que passa próximo aos locais do casamento, conta uma história impressionante de ambição e perseverança. Seu objetivo era encurtar o transporte entre as costas leste e oeste da Suécia, permitindo que navios navegassem pelo interior do país em vez de contorná-lo, evitando assim os caros pedágios dinamarqueses.",
    "travel.cards.lakes.p2":
    "Inaugurado em 11 de abril de 1810, o Canal de Göta custou aproximadamente US$ 251 milhões em valores atuais. Levou mais de vinte anos para ser concluído e contou com o trabalho de cerca de 58.000 soldados. O arquiteto visionário Baltzar von Platen, responsável pelo projeto, está enterrado em Motala, a cerca de 20 minutos de Borghamn Strand. Essa obra de engenharia com 190 quilômetros de extensão, frequentemente chamada de “Fita Azul da Suécia”, conecta o Mar Báltico ao Mar do Norte por meio de 58 eclusas, ligando os grandes lagos Vänern e Vättern.",
    "travel.cards.lakes.p3":
    "A Suécia é verdadeiramente um país moldado pela água. Possui o maior número de ilhas costeiras do mundo, estimadas em cerca de 267.570, além de quase 100.000 lagos. A recepção do casamento às margens do Lago Vättern coloca vocês à beira do segundo maior lago da Suécia, um corpo d’água impressionante e parte essencial do sistema do Canal de Göta.",

    "travel.cards.coffee.title": "Café e inovação",
    "travel.cards.coffee.p1":
    "Os suecos são os segundos maiores consumidores de café do mundo, ficando atrás apenas dos finlandeses. O Brasil, maior exportador de café do planeta, fornece grande parte da bebida apreciada na Suécia. Portanto, ao desfrutar de uma tradicional fika (pausa para o café) durante a visita, os grãos podem muito bem ter viajado das plantações brasileiras até as xícaras suecas.",
    "travel.cards.coffee.p2":
    "Talvez seja a combinação de café com os longos e escuros invernos que alimente o notável espírito inovador da Suécia. Alfred Nobel deu ao mundo a dinamite e o Prêmio Nobel. A Suécia também nos deu o cinto de segurança de três pontos (que a Volvo compartilhou gratuitamente com outros fabricantes para salvar vidas), o zíper, os rolamentos (SKF), o Spotify, o Bluetooth, o Minecraft, as embalagens Tetra Pak, o primeiro marca-passo implantável, os fósforos de segurança e até a escala Celsius.",
    "travel.cards.coffee.p3":
    "Uma das exportações modernas mais influentes da Suécia é a música. O compositor e produtor sueco Max Martin tem 26 músicas número um nas paradas da Billboard, ficando atrás apenas de Paul McCartney. Se você ouviu rádio pop nos últimos 25 anos, quase certamente já escutou alguma de suas músicas.",
    // ---------------- Our Story ----------------
    "ourStory.hero.alt": "Nossa história – imagem principal",
    "ourStory.couple.alt": "Casal",
    "ourStory.title": "CAPÍTULOS DA NOSSA HISTÓRIA",
    "ourStory.rsvp": "RSVP",

    "ourStory.ch1.title": "Capítulo Um — janeiro de 2022. São Paulo.",
    "ourStory.ch2.title": "Capítulo Dois — O término (e o “e se?”)",
    "ourStory.ch3.title": "Capítulo Três — 17 de agosto de 2022. Paris.",
    "ourStory.ch4.title": "Capítulo Quatro — \"Barbès - Rochechouart!\"",
    "ourStory.ch5.title": "Capítulo Cinco — A história de Paris",
    "ourStory.ch6.title": "Capítulo Seis — Suécia. Um choque de realidade.",
    "ourStory.ch7.title": "Capítulo Sete — Natal em Hobart, Tasmânia",
    "ourStory.ch8.title": "Capítulo Oito — o resto",

   // Body
    "ourStory.ch1.p1": "O cheiro de chuva no asfalto quente se misturava com o barulho da rua lá embaixo. Tais estava deitada no sofá, o cansaço pós-COVID ainda persistindo em seus músculos como a memória de um samba dançado por tempo demais. Seus dedos deslizavam pela tela do Tinder— swipe para a esquerda, swipe para a esquerda, swipe para a esquerda. O desfile de rostos se transformava em uma monotonia bege que combinava perfeitamente com seu humor. Enquanto isso, 10.000 quilômetros a noroeste, Linköping estava congelada sob um cobertor de neve. Joakim—o sério, metódico, sueco até a medula—vinha abordando o Tinder como um projeto de pesquisa. Planilhas poderiam estar envolvidas, já que ele tem uma mente de engenheiro. Ele estava pronto para recomeçar sua vida. Pronto para algo real. Pronto para... bem, ele saberia quando visse. Então ela apareceu. Pele bronzeada beijada pelo sol brilhando como caramelo. Cabelo cacheado escuro caindo em cascata como uma cachoeira de seda da meia-noite. O dedo de Joakim pairou sobre a tela. Isso definitivamente é uma conta falsa, ele pensou, seu ceticismo nórdico entrando em ação. Ninguém que parecesse assim estava no Tinder em São Paulo procurando por um sueco divorciado. Alguns dias depois, Tais estava de volta ao app, o polegar trabalhando horas extras, quando um rosto a parou no meio de um swipe. Cabelo loiro, quase albino. Olhos azuis que pareciam pedaços de gelo do Báltico. Maçãs do rosto afiadas que poderiam cortar vidro. Ela olhou para a tela apertando os olhos. Fake!! Tem que ser fake. Mas como um bom vinho que precisa de tempo para respirar, a imagem ficou em sua mente. Ela voltou no dia seguinte. E no outro. Finalmente, com a mesma impulsividade que a fazia reservar voos às 2 da manhã, ela deu swipe para a direita. BLING! MATCH!!! Quase como se ele estivesse sentado ali esperando (e estava), a mensagem de Joakim apareceu instantaneamente: 'Oi Tais!! Como você está?' Tais, veterana de mil contas falsas, decidiu desmascarar o blefe. 'Chamada de vídeo?' A resposta dele fez seu rosto se abrir num sorriso largo: 'Claro, só preciso passar um perfume' Cinco minutos depois, lá estava ele, real, sueco e meio sem jeito daquele jeito adorável que fez seu coração dar um sambinha. Eles conversaram por horas, vozes atravessando continentes, risadas se misturando com o chiado da conexão de internet.",
    "ourStory.ch2.p1": "Cerca de um mês depois, eles terminaram. Objetivos diferentes. Continentes diferentes. Tudo diferente, na verdade. Fazia sentido. Era prático. Era sensato. Joakim odiou. Mais um mês se passou. Ele sentou em sua casa, o inverno sueco pressionando contra as janelas, e pensou: O que eu tenho a perder? Na pior das hipóteses, ela diz não. Seus dedos digitaram antes que seu cérebro pudesse pensar demais: 'Você ainda está solteira?' 'Sim, por que você pergunta?' veio a resposta que mudou tudo.",
    "ourStory.ch3.p1": "O aeroporto Charles de Gaulle era uma sinfonia de caos de passos infinitos ecoando em pisos frios, anúncios em três idiomas se sobrepondo como italianos discutindo, o trovão rodante de mil malas. Mas o lobby do Sheraton? Um oásis de calma. Iluminação suave, sofás macios, o tipo de silêncio que te envolve como um cobertor de cashmere. Joakim afundou num sofá, cansado por ter acordado cedo demais, mas ligado na antecipação. Uma hora passou. Depois outra. Talvez ela não venha, ele pensou, mas estava relaxado demais para entrar em pânico direito. O que ele não sabia: Tais estava lá. Espiando nas sombras como uma onça espreitando a presa, conferindo ele, certificando-se de que o homem correspondia à promessa. Seu coração batia forte contra as costelas. Finalmente—Bora, Tais, Bora!—ela deu um passo à frente. Joakim olhou para cima, a viu, e seu rosto se transformou. Ele se levantou, atravessou o lobby em três passos e a envolveu num abraço que parecia chegar em casa. Ele quase a beijou ali mesmo (ela percebeu, mas guardou aquele momento para depois). Parecia que se conheciam desde sempre, como se o tempo jamais os tivesse separado ",
    "ourStory.ch4.p1": "O anúncio do metrô se tornou sua piada particular—aquela pronúncia gloriosamente massacrada que só faz sentido se você é francês, o que nenhum dos dois era. Toda vez que passavam por aquela estação, eles caíam na risada como adolescentes roubando vinho da adega dos pais. Dentro de horas, Tais estava pronta. Eles se beijaram. Mágica, pura e simples, com um gosto de vinho e coragem e a emoção doce do risco.",
    "ourStory.ch5.p1": "Ah, aqueles dias! Pintados em cores de Monet e embalados por saxofone de jazz. Eles se moviam pela cidade como dançarinos que finalmente haviam encontrado seu ritmo—às vezes pisando nos pés um do outro (aquelas discussões apaixonadas! a salada de palavras portuguesa-sueca voando!), mas sempre, sempre voltando ao centro. Eles subiram as ruas de paralelepípedos de Montmartre onde o cheiro de crêpes e tinta se misturava com possibilidades pairando no ar. Na Sacré-Cœur, eles colocaram seu cadeado. Seus nomes entrelaçados em metal, uma promessa selada com um beijo enquanto Paris se espalhava abaixo deles como um banquete de luzes e amor. Bolhas de champanhe em suas línguas, risadas em seus corações. Champanhe, é claro! Sempre champanhe! O primeiro piquenique de verdade da Tais! E no Parc Floral! Romance em cada momento. Morangos explodindo de doçura. Bolhas de champanhe capturando a luz do sol como diamantes líquidos. Queijo, frios e uma baguete parisiense—quando em Paris, faça como os parisienses! A Torre Eiffel cintilava à noite, suas luzes dançando a cada hora enquanto eles ficavam numa ponte sobre o Sena, de olhos arregalados como crianças vendo mágica pela primeira vez. O ingrediente secreto era amor. Depois um clube de jazz nas redondezas—uma caverna íntima onde a música vivia e respirava. Eles se perderam em jam sessions que se estendiam até as primeiras horas, o saxofone uivando histórias de amor e perda e redenção. Algumas cervejas, o burburinho quente da conexão, depois um táxi para casa por ruas pintadas com luz de postes. Seu restaurante favorito se tornou um ritual, escondido no bairro do Moulin Rouge onde turistas perseguiam o cancan mas os locais perseguiam sabor. Boeuf bourguignon, rico e profundo—o tipo de prato que leva horas para fazer e minutos para devorar. A carne se desmanchava ao toque de um garfo. E o vinho tinto—mon dieu, o vinho tinto—se abria na língua como uma carta de amor, complexo e honesto e verdadeiro. Ou era o amor de novo? Mais jazz e mais jantares tarde da noite. Bom vinho fluía como conversa, cada taça soltando línguas e abrindo corações. Risadas ricocheteavam em antigas paredes de pedra, ecoando por ruas estreitas onde sua história começou de verdade.",
    "ourStory.ch6.p1": "Tais seguiu Joakim para a Suécia e conheceu Tiger e Freya, os guerreiros adolescentes de Joakim. A apresentação aconteceu no quintal de Joakim durante um churrasco—o verão sueco se estendendo até tarde, o cheiro de carne grelhada e fumaça pairando no ar. Tiger e Tais discutiram aberturas e composição, a linguagem universal da fotografia construindo uma ponte entre o calor brasileiro e a reserva sueca. E então Freya—a tímida e observadora Freya—que havia feito cartões de mesa para todos. No cartão de Tais, três palavras: 'I love you.' O coração de Tais amoleceu, sentindo-se em casa mas ainda mantendo a guarda erguida. Tais descobriu a vida noturna de Linköping—tão diferente do pulso vibrante de Paris, mas cheia de encontros calorosos com os amigos de Joakim. Pubs aconchegantes onde todos pareciam se conhecer, risadas que pareciam genuínas e desarmadas, o tipo de comunidade que te envolve devagar mas completamente. Então, de repente, Tais estava num avião de volta ao Brasil. Joakim ficou sozinho em sua casa caótica, empacotando sua vida num container com destino à Austrália. A Terra continuou girando enquanto suas vidas se afastavam ainda mais.",
    "ourStory.ch7.p1": "Tais veio por três meses. Um test drive, ela chamou. O ar estava cheio de paixão de novo—espesso como a névoa da Tasmânia descendo a montanha. Eles cozinhavam juntos, discutindo sobre a quantidade correta de alho. 'Nunca é demais,' Tais insistia, sua colher de pau pontuando cada palavra. Joakim—que não come alho—refletiu profundamente sobre sua escolha de companheira, perguntando-se se o amor iria matá-lo. Eles compartilhavam vinho no deck ao pôr do sol, o céu ficando roxo e dourado sobre as colinas. Eles conversavam sobre família—os adolescentes de Joakim navegando suas próprias tempestades de volta na Suécia, os parentes de Tais espalhados pelo Brasil como estrelas numa constelação que ela podia mapear de olhos fechados. Eles conversavam sobre suas duas cachorras, Bella e Lola, esperando por ela em São Paulo—suas filhas peludas que ela sentia falta com uma dor que nunca realmente passava. Duas almas apaixonadas. Dois grandes corações que haviam sido partidos antes, ainda carregando as cicatrizes como distintivos de sobrevivência. Discussões surgiam como fósforos—duas mentes fortes, dois corações feridos, ambos apavorados de errar de novo. Palavras voavam em português e sueco e o esperanto desesperado da frustração. Mas sempre—sempre—eles escolhiam um ao outro.",
    "ourStory.ch8.p1": "Como dizem, é uma história para outra hora. Mas essa parte? Essa parte foi escrita em bolhas de champanhe e notas de jazz, em estações de metrô mal pronunciadas e piqueniques sob céus parisienses, em discussões que terminavam em risadas e beijos que tinham gosto de coragem.",

    "registry.desc1" : "Como não podemos levar presentes físicos de volta para a Austrália, pedimos gentilmente que não tragam presentes materiais. ",
    "registry.desc2" : "A presença de vocês já é um presente por si só.",
    "registry.desc3" : "Caso ainda desejem oferecer algo, uma contribuição para a nossa lua de mel será muito apreciada.",


  }
};


export function translate(lang: Lang, key: string): string {
  return translations[lang]?.[key] ?? key;
}
