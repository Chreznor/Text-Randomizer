const randomText = document.querySelector('.random-text');
const randomTextBtn = document.querySelector('#random-text-btn');
const outputResultsBtn = document.querySelector('#output-results-btn');
const bodyArea = document.querySelector('#textarea2');
const conclusionArea = document.querySelector('#textarea3');
const resultsContainer = document.querySelector('#results-container')
//let fullTexts = require('./data');

//Materialize stuff

$(document).ready(function() {
    $('select').material_select();
});

//Materialize stuff

let fullTexts = [`<p>A fémiparba való beépülés a stabilitás és a bizalom sugározását követeli. Önnek egy jó dizájnra lesz szüksége, hogy jó benyomást tudjon keltetni.</p>

<p>Szerencsére az Acélmű WordPress témák mindennel rendelkeznek ahhoz, hogy azt adják meg Önnek, amire szüksége van.</p>

<p>Mivel az admin panellel rendelkező Cherry Framework és a Bootstrap funkciói működtetik őket, az Acélmű WordPress sablonok egy teljesen reszponzív tervezést kínálnak. A sablonhoz fejlett témaopciók és egyedi oldal sablonok járnak, amelyek lehetővé teszik a sokoldalú 2 oszlopos elrendezések létrehozását. A böngésző-közötti kompatibilitás szintén sok előnnyel jár, mivel a segítségével többen látogathatják zökkenőmentesen a weboldalát.</p>

<p>Ahogy változtatni fogja az online acélszervezet tartalmát az admin panel segítségével, a Google betűkészletek és hang és videó integráció szintén elég hasznosan lesznek. A weboldal vizuális elemei HTML és JS animációkkal lettek életre keltvé. Továbbá Ön számos kiváló minőségű stock fotót is kap a sablonhoz, amelyek segítségével szebbé teheti a weboldal dizájnját. A látogatók képesek lesznek megosztani és részt venni a weboldalán zajló tevékenységekben a közösségi média opciók segítségével. Ezen kívül Ön egyszerűen bemutathatja a acélintézetét a "Csapatunk", portfólió, ajánlólevél és a GYIK oldalakat használva, amelyek a WordPRess Fémmegmunkálási témák részét képezik.</p>

<p>Végül Ön nyugodt lehet azt tudván, hogy mindig Önnel lesz a 24/7 ügyfélszolgálatunk, ha bármilyen problémája akad.</p>

<p>Vásároljon egy olyan sablont, amely mindent tartalmaz az acélipari vállalatok számára. Használja bármelyiket az Acélmű WordPRess témák közül. Ha netán más témájú sablont keres, látogassa meg a <a href="https://www.templatemonster.com/hu/wordpress-sablonok/">WordPress sablonok</a> válogatását.</p>`,

`<p>Ami a belsőépítészetet érinti, a világitás valóban sokat számít a kényelem érzésének a létrehozása közben. Ha nincs elegendő fény, vagy éppen ellenkezőleg, túl sok van belőle, akkor biztosan valami nem stimmel. Ugyanez igaz a weboldal dizájnokra is. Ha nem illenek a színek, akkor az ügyfelei nem fogják érezni a vállalkozását! Tehát ez rendkívül fontos annak érdekében, hogy ne veszítse el a potenciális ügyfeleit.</p>

<p>A TemplateMonster ügyfelei nagyra értékelik a nagy hatássál lévő tervezéseket. Ezért is a legtöbb WordPress sablon, a Világitástechnika és villamosság WordPress témákat beleértve, úgy volt megteremtve, hogy látványos és nagyon funkcionális legyen. A hivatásos grafikusok csapata a témákat az Ön üzleti igényeit szem előtt tartva készítették.</p>

<p>A drag-and-drop oldalépítőnek köszönhetően rendkívül könnyű lesz a szükséges weboldal elrendezések elkészítése. Továbbá lehetősége lesz arra, hogy kísérletezzen a különböző elrendezés típusokkal a beépített könyvtár segítségével. Gazdagítja kedvére a weboldalát a "Blog", "Térkép", "Kapcsolatfelvételi Űrlap" és más hasonló modulokkal.</p>

<p>Bármilyen változtatás végrehajtása igazán egyszerű lesz a Live Customizer alkalmazással. Mostantól több témaopciót módosíthat anélkül, hogy újra be kellen töltenie az oldalt.</p>

<p>A jó hír az, hogy a válogatásban megtalálható minden sablon a keresőmotorok számára lettek optimalizálva. Mindegyik WordPress elektromos téma SEO-barát jellege nem egy opció, hanem egy választás. A speciális bővítményeknek köszönhetően a weboldala jobb rangsorolásokat fog kapni a SERP-ekben. Így több potenciális ügyfél fedezheti fel a villamosenergia vállalkozását. A gyűjteményben megtalálható sablonok a GPL v.3.0. licenc alatt voltak létrehozva. Ez engedélyt ad arra, hogy a sablont több domain-re is feltelepítse. </p>

<p>Egy WordPress Villanyszerelő téma vásárlása garantálja azt, hogy Ön egy 24/7 ügyféltámogatást is kap a TemplateMonstertől. Böngéssze kedvére a Világítás WordPress sablonokat ahhoz, hogy reklámozni tudja a vállalkozását az interneten! Ha netán más témájú sablont keres, látogassa meg a <a href="https://www.templatemonster.com/hu/wordpress-sablonok/">WordPress sablonok</a> válogatását.</p>`,

`<p>Ha az Ön vállalkozása a művészet és kultúra rétegéhez tartozik, biztosan tudja, hogy kifejezetten fontos az, hogy a weboldala magas minőségű vizuális tartalommal rendelkezzen. Ha Ön egy DJ, művész, festő vagy egy honlapra van szüksége a szolgáltatásai, film előfizetések, színház jegyvásárlás vagy hasonló tevékenységek számára. Eljött az idő, hogy egy professzionális online jelenlétet teremtsen a weboldala számára.</p>

<p>Ha Ön azt gondolja, hogy ez sokba fog kerülni, a TemplateMonster be fogja bizonyitani, hogy ez olcsó is lehet. Miközben a kódolás, tervezés és minden elem összeszerelése idő és pénzigényes, egy téma testreszabása, hogy az minden követelményének megfeleljen, igazán egyszerű. Ezt szem előtt tartva mutatjuk be Önnek ezt a művészet és kultúra WoWrdPress sablonokat.</p>

<p>Minden sablon egy egyszerű, de mégis esztétikailag kellemes kialakítással rendelkezik, amely tökéletesen kiegészíti a weboldala vizuális tartalmát. A tartalom szépen van blokkokba rendezve, amelyek minden szükséges könnyen érthető információt tartalmaznak. Ezek a sablonok tökéletesen megfelelnek a különböző portfóliók számára, mivel hasznát veszik a galéria és csúszka funkcióknak, amelyek számos betöltési effektekkel és átmeneti animációkkal rendelkeznek, legyen ez hang vagy videó tartalom.</p>

<p>Néhány téma egy keresősáv funkcionalitással rendelkezik, amely lehetővé teszi a látogatóknak, hogy gyorsan megtalálják azt, amit keresnek. Ön kihasználhatja a blogolás előnyeit is, valamit érdekes tartalmat oszthat meg az interneten keresztül. Ez növelni fogja a márka láthatóságát, ami a webhelyforgalmat is javítani fogja. </p>

<p>Ha Önnek segítségre van szüksége a sablon feltelepítésével kapcsolatban, a TemplateMonster egy 24/7 támogatást kínál. Ha Önnek bármilyen kérdése lesz, vegye fel velünk a kapcsolatot az alul megtalálható chaten keresztül.</p>

<p>Böngéssze a Művészeti és kultúra WordPress sablonjaink legújabb Stílusos WordPress sablonok gyűjteményében. Ha mégse talált sablont, tekintse meg a <a href="https://www.templatemonster.com/hu/wordpress-sablonok/">WordPress sablonok</a> gyűjteményét. Tegye elérhetővé az üzletét mások számára.</p>
`,

`<p>A <a href="https://www.templatemonster.com/hu/kategoria/muveszet-kultura-wordpress-temak/">Művészeti témák</a> a különböző típusú művészeti stílusokat egészítik ki. Minden sablon könnyen testreszabható, legyen ez egy művészeti blog, iskola vagy galéria. Válasszon a semleges tervezések a fényesebb alkotások bemutatására vagy az élénkebb vektoros témák között. Minden illusztrációs WordPress téma hivatásos webfejlesztők által a legújabb webes technológiák segítségével lett létrehozva. Abban az esetben, ha egy hivatásos tervezésre van szüksége egy teljeskörű művészeti közösség létrehozásához, lehetősége lesz a digitális művészet közösség <a href=”https://www.templatemonster.com/hu/wordpress-sablonok/”>WordPress sablonok</a>; között választani.</p>

<p>Annak köszönhetően, hogy a sablonok teljesen reszponzívak, minden Szépművészet téma kiválóan fog mutatni a különböző eszközökön és képernyőkön. Így az Ön látogatói mobiltelefonról, táblagépről vagy asztali számitógépről is megtekinthetik a webhelyét. Ezen kívül az itt megtalálható sablonok teljesen kereső optimalizáltak, ami azt jelenti, hogy az Ön weboldala magasabb rangsorolásokat fog szerezni a legnépszerűbb keresőmotorokban.</p>

<p>Élvezze az Ön művészi ötleteit és projektjeit ábrázoló magas minőségű képeket a lehető legjobb módon. A TemplateMonster egy óriási Művészeti aukció WordPress sablonválogatással rendelkezik, amely folyamatosan új dizájnokkal bővül. Fedezze fel a művészi portfólió WordPress sablonokat, használja ki az előnyeiket. Továbbá, mielőtt vásárolna valamit, kipróbálhatja az ingyenes sablonmintáinkat is. Szabja testre a sablonjainkat úgy, ahogy ezt szeretné. A TemplateMonster készen áll arra, hogy segítsen Önnek az álmai weboldala létrehozásában.</p>
`,

`<p>Egy zenebolt, blog, felvételi stúdió, portál számára szeretne WordPress témát? Vessen egy pillantást a TemplateMonster által kínált legjobb WordPress Zenei témákra.</p>

<p>A webfejlesztők különböző stílusú projektek számára készítettek sablonokat - klasszikus zene, pop, rock, r-n-b, jazz stb. Ön zenei klubok és fesztiválok számára is fog találni WordPress sablonokat. Bármilyen zeneszerző és művész a legjobb módon lesz bemutatva az énekesek számára létrehozott témáknak köszönhetően. A WordPress zenei témák élethosszig rendelkezésre álló képeket és fényképeket tartalmaznak. Ön beállíthassa a sablonhoz mellékelt képeket, hogy így ne legyen szüksége újabb tartalmat keresni az interneten. Természetesen minden kép, fénykép, valamint logó, szöveg és színséma bármilyen más tartalomra is változtatható. Az itt megtalálható válogatásban elhelyezett sablonok egy admin panellel is rendelkeznek. Ez azt jelenti, hogy nem lesz kötelező webfejlesztőt alkalmazni, mivel Ön egyedül is végrehajthatja a szükséges változtatásokat. A panelben elhelyezett minden eszköz kifejezetten praktikus és intuitív.</p>

<p>Ha Ön egy zeneiskolának szeretne egy webhelyt, pillantást vethet a Felnőtt zeneiskola WordPress témákra. És mi van akkor, ha egy zenei blogot szeretne? A zeneblog WordPress témák tökéletesen fognak mutatni a mobileszközökön. A 100% reszponzív tervezésnek köszönhetően, a látogatói bármilyen kézi eszközön böngészhetik a weboldalát. A dizájn bármilyen képernyőmérethez igazódig, ami garantálja azt, hogy mindig szép lesz.</p>

<p>Ami a zenei blogokat illeti, ha klasszikus zenei darabokat vagy zene lejátszási listákat szeretne közzétenni, bármikor pillantást vethet a Zenelemez WordPress témákra. Vagy talán egy zenemegosztó portált szeretne? Akkor nézze át a WordPress MP3 tárhely szolgáltatás témákat, hogy így meg tudja osztani a zene szerelmeseivel az Ön kedvenc dalait. </p>

<p>A <a href=”https://www.templatemonster.com/hu/kategoria/muveszet-kultura-wordpress-temak/">Művészet és kultúra sablonok</a> számos meglepő funkcióval rendelkeznek. A Parallax görgetés effekttel kezdve és a Bootstrap funkcióval végezve, Ön olyan funkcionalitást fog találni, amire szüksége van.</p>

<p>Ha netán más művészet témájú sablont keres, látogassa meg a <a href="https://www.templatemonster.com/hu/wordpress-sablonok/">WordPress sablonok</a> válogatását, ahol Ön reszponzív mintákat találhat. Abban az esetben, ha kérdései vannak, forduljon az ügyfélszolgálati szakembereinkhez. Ők mindent megtesznek annak érdekében, hogy megtalálják a legjobb megoldást. Válasszon a Zene témakörű WordPress témák között!</p>
`,

`<p>A múzeumok mindig inspirálták az érdeklődést a történelmi tények iránt, de manapság már elkerülik őket az emberek. Annak éredekében, hogy feltámassza a múzeumok iránti szenvedélyt, eljött az idő, hogy a tudást ott terjessze, ahol a legtöbb ember mostanában megtalálható: online. Az érdekes információk kiváló képekkel és fantasztikus színsémákkal lesznek támogatva. Nem számít, hogy egy történelmi vagy írói múzeumot szeretne előmozdítani - használja a WordPress sablonokat a céljai eléréséhez!</p>

<p>A múzeum WordPress témák kifejezetten azért lettek megtervezve, hogy segítsenek a múzeumoknak lendületet tartani a legújabb technológiai innovációkkal. Az egyszerű, kiváló színekkel és képekkel rendelkező témák a legjobb megoldást képezik, ha be szeretné mutatni a világnak a múzeumok érdekességét.</p>

<p>Ahogyan a műtárgyak elrendezése fontos a múzeumokban, ugyanúgy szükséges ez a webhelyek számára is. Fontos megmutatni a látogatókat azt, hogy mennyire érdekes és izgalmas az Ön virtuális múzeumja a fantasztikusan elhelyezett, magas minőségű képeket tartalmazó csúszkáknak köszönhetően. A színséma és tartalomelrendezés növelni fogja a látogatók érdeklődését és kíváncsiságát, ami így egy fantasztikus élményt nyújt.</p>

<p>Ha netán más témájú sablont keres, látogassa meg a <a href="https://www.templatemonster.com/hu/wordpress-sablonok/">WordPress sablonok</a> válogatását. Ne hagyja, hogy a történelem elfelejtse Önt, vásároljon egy WordPress Emlékmúzeum témát és mutassa meg az embereknek, hogy mennyire érdekesek a múzeumok!</p>
`,

`<p>Ha az olyan filmportál, amely évre/műfajra/értékelésre csoportosítja a filmeket, elég sok problémát okoz, vessen egy pillantást az előre elkészített dizájnokra, amelyek a Filmes WordPress gyűjteményben találhatók meg. Itt Ön olyan dizájnokat találhat, amelyek ideálisan megfelelnek a tartalomban gazdag weboldalak számára: film streaming portálok és blogok. A Filmes WordPress témák elrendezése egy fejlett oszlopstruktúrával rendelkezik, amely minden információt egy tiszta, érthető módon jelenít meg.</p>

<p>A fejlécbe beépített jQuery csúszkák számos vonzó vizuális effekttel büszkélkednek, amelynek a célja, hogy egy figyelemre méltó módon mutassák be a szükséges tartalmakat. Ön az igényeinek megfelelően változtathatja a csúszkák képeit, betűtípusokat, színeket.</p>

<p>Vásároljon a Mozi WordPress témák gyűjteményéből, szabja testre azokat, és senki se fogja tudni, hogy a webhelye nem egyedi.</p>`,

`<p>Úgy tűnik, Önt a színház üzleti része érdekli. Ebben az esetben nem kell megmagyarázni, hogy mennyire nehéz manapság a színházi darabok hirdetése. Mint minden niche tevékenységnél, az online jelenlét egy fontos tényező, ami minden üzlet életképességét jelentősen befolyásolja.</p>

<p>Mivel a színházak különböznek egymástól, sok olyan sablont készítettünk, amely teljesen szerkeszthető. Így Önnek egy olyan weboldala lehet, amely valójában ábrázolni fogja a színházi darabok szellemét.</p>

<p>Valószínűleg a témák legjobb tulajdonsága az esztétikai vonzeröjük. Csak töltse fel a szükséges tartalmat és tapasztalja meg a weboldala életre kelését!</p>

<p>Tájékoztassa a nézőit az új, izgalmas darabokról és tegye lehetővé számukra azt, hogy könnyen kapcsolatba léphessenek Önnel.</p>

<p>Ezen kívül Ön bemutathatja a korábbi előadásait is, valamint azokat, amelyek most állnak rendelkezésre. A világhírű WordPress tartalomkezelő rendszerekkel Ön könnyen tölthet fel képeket, videókat, hang tartalmat, galériákat, élénk csúszkákat és több más elemet! A legfőbb jellemzője az, hogy könnyen használható. Még akkor is, ha nincs bármilyen tapasztalata, Ön látni fogja, hogy a WordPress igazán intuitív. Használja a blogot, ahol írni tud a darabjairól, a jövőbeli terveiről stb.</p>

<p>Ön bármikor szabadon használhatja az ingyenes, 24/7 online támogatást abban az esetben, ha bármilyen segítségre van szüksége a témáinkkal kapcsolatban.</p>

<p>Böngéssze kedvére az élő demó opciót - képzelje el az Ön tartalmát a Színház WordPress témáinkban, és, ha a dizájn megfelel az elképzeléseinek, vásárolja azt meg. Ön látni fogja, hogy mennyire egyszerű és stresszmentes a feltelepítésük. Ha netán más témájú sablont keres, látogassa meg a <a href="https://www.templatemonster.com/hu/wordpress-sablonok/">WordPress sablonok</a> válogatását.</p>
`,

`<p>A művészeti galériák a művészeti élményekről szólnak. Ha Ön ebben az üzletben tevékenykedik, biztosan tudja, hogy mennyire fontos az, hogy a portfóliója minél több ember által legyen felfedezve. Mától ez is lehetséges, mivel az egyszerű galéria sablonoknál sokkal többet nyújtunk!</p>

<p>Mi biztosan rendelkezünk azzal, amire szüksége lehet. A TemplateMonster számos Művészeti galéria WordPress témát tervezett meg, amelyek szabadságot biztosítanak Önnek arra, hogy úgy módosítsa őket, hogy egy versenyelőnyt tudjanak biztosítani. A weboldal és galéria látogatók élvezni fogják ezt az egyedülálló megközelítést. </p>

<p>Biztosan meglepő lesz az, hogy mennyire könnyen testreszabhatók a Kiállítás WordPress témák! A hangsúly elsősorban a vizuális tartalomra lett fektetve. Az óriási képek és nagy csúszkák a vizuális tartalmat központozni fogják. A szöveges mezők könnyen megkülönbözhető blokkokba vannak felosztva, amelyek az információt könnyen olvashatóvá teszik.</p>

<p>Minden művészeti galériáknak szánt WordPress téma felhasználóbarát és intuitív. Ami a WordPress illeti, az az egyik legkönnyebben használható admin panellel rendelkező tartalomkezelő rendszert tartalmazza. Így akár a kezdő felhasználók is kezelni tudják az általuk létrehozott honlapot. </p>

<p>Minden Kiállítás WordPress téma számos különböző eszközzel, widgettel és modullal rendelkezik, ami biztosítani fogja azt, hogy a weboldal működőképes lesz. A Cherry framework be van építve a sablonba. Ha segítségre lesz szüksége az újonnan megvásárolt termékekkel kapcsolatban, bármikor felveheti velünk a kapcsolatot, mivel minden egyes tőlünk megvásárolt sablon mellé egy 24/7 ingyenes támogatást kínálunk.</p>

<p>Böngéssze a Művészeti galéria WordPress témákat és találja meg azt, amely megfelel az Ön vállalkozásának és követelményeinek. Ha netán más témájú sablont keres, látogassa meg a <a href="https://www.templatemonster.com/hu/wordpress-sablonok/">WordPress sablonok</a> válogatását.</p>
`,

`<p>A művészet, rajzolás tanítása önmagában is gyönyörű kihívás lehet. De, ha Ön azt szeretné. hogy az Ön művészeti iskolája vagy akadémiája új diákokat és résztvevőket vonzzon, egy kiváló online jelenlétet kell kínálnia. A művészet a látványról szól. Egy lehetőséget kell teremteni az embereknek, hogy azok azt a megfelelő módon tapasztalják meg.</p>

<p>Ne pazarolja az idejét és pénzét egy weboldal semmiből való létrehozására. Ehelyett összpontosítsa figyelmét a saját művészi alkotásaira, mivel számos Művészeti iskola WordPress témával állunk rendelkezésre az Ön számára. Válassza ki a legszebbet és módosítsa azt kedvére, hogy az minden követelményének meg tudjon felelni. Ez egy jó mód arra, hogy bemutassa a rajz és festészet óráit!</p>

<p>A legtöbb figyelmet a vizuális tartalomra fordítottuk, hogy elő tudjuk mozdítani a művészeti iskoláját a gyönyörű WordPress témáinkkal. Használja a nagy csúszkákat és galériákat, amelyek számos betöltési effektel és átmeneti animációval büszkélkednek. Ezen kívül a különböző hang és videó tartalmak beágyazása szintén lehetséges.</p>

<p>Az elrendezés eléggé intuitív, mivel a felhasználókat figyelembe véve lett megtervezve. A szövegek könnyen olvasható blokkokba vannak elhelyezve. Hirdesse szolgáltatásait és legjobb ajánlatait a blog funkcióval. Ossza meg a tartalmait a közösségi hálózatokon keresztül. A WordPress admin panel az egyszerűsége miatt ismert. Így akár akkor is, ha nem rendelkezik programozási ismeretekkel, Ön a weboldala minden elemét be fogja tudni állítani.</p>

<p>Minden Művészeti iskola sablon 100% reszponzív. Ezt azt jelenti, hogy minden sablon alkalmazkodni fog a különböző méretű képernyőkhöz.</p>

<p>A sablonok a Cherry Framework rendszert is támogatják. Ha bármilyen segítségre van szüksége a sablon szerkesztésével kapcsolatban, egy 24/7 ingyenes ügyféltámogatást is kínálunk.</p>

<p>Böngéssze a Művészeti galéria WordPress témákat és válasszon egyet, amely új diákokat fog vonzani a művészeti főiskolájához. Ha netán más témájú sablont keres, látogassa meg a <a href="https://www.templatemonster.com/hu/wordpress-sablonok/">WordPress sablonok</a> válogatását.</p>
`,

`<p>A művészet egy olyan médium, amely kommunikál az emberekkel. Az vagy a művész vízióját képviseli, vagy képes arra, hogy az emberek kifejezzék az érzelmeiket. De egy dolog biztos - a művészet egy vizuális élmény. Ezért is fontos az, hogy helyesen legyen bemutatva. Az online jelenlét sokat mondhat a művészről, de elég nehéz egy olyan weboldalt készíteni, amely kiegészítené a művészeti alkotásokat.</p>

<p>Ezt szem előtt tartva kínáljuk a Művészi portfólió WordPress témákat. Ezek a sablonok az Ön szükségleteit figyelembe véve lettek megteremtve, mivel egy nagyszerű módon mutassák be az alkotásokat.</p>

<p>Ezek a Művész WordPress témák nagyon egyszerűek és elegánsak, valamint egy esztétikailag kellemes dizájnnal és váltható színsémákkal rendelkeznek. A sablonok minden portfólióhoz szükséges információt tartalmaznak. A kapcsolatfelvételi űrlap segíteni fog abban, hogy a potenciális ügyfelek fel tudják venni Önnel a kapcsolatot.</p>

<p>Ami az Ön képeit illeti, azok különböző carousel, csúszka vagy betöltési effektekkel tölthetők be. Ne aggódjon a sablonok fenntartásáról vagy a webhely beállításáról. A WordPress egy olyan platform, amely olyan emberek számára lett fejlesztve, akiknek nincs szakmai ismeretük a számitógépekről. A WordPress rendszerrel bárki szerkeszteni tudja a weboldalát, mivel a folyamat eléggé egyszerű és gyors.</p>

<p>Minden Művész WordPress téma 100% reszponzív és a legfrissebb weboldaltervezési és kódolási eljárásokkal lett létrehozva. Ez azt jelenti, hogy az Ön tartalma, legyen ez egy asztali számitógép vagy okostelefon, minden egyes készüléken tökéletesen fog megjelenni. Továbbá a TemplateMonster egy 24/7 korlátlan támogatást is kínál.</p>

<p>Gondoskodjon arról, hogy a művészi portfóliója elérhető legyen mások számára is, válasszon a Művész portfólió WordPress témák között és mutassa be a világnak, hogy mit tud. Ha netán más témájú sablont keres, látogassa meg a <a href="https://www.templatemonster.com/hu/wordpress-sablonok/">WordPress sablonok</a> válogatását.</p>
`,

`<p>A nyomtatási technológiák gyorsan fejlődnek. A mai világban, ha Ön egy nyomdaipari vállalkozásnak a tulajdonosa, meg kell mutatnia a potenciális ügyfeleknek, hogy Ön könnyen alkalmazkodik az új technológiák kihívásához.</p>

<p>A Nyomtatóiroda WordPress témák magas minőségű képeket és színsémákat tartalmaznak, amelyek vonzzák a figyelmet, valamint a szükséges elemekhez vezetik az ügyfeleket. A sablonok modernek és csodálatos vizuális effektekkel rendelkeznek.</p>

<p>A Nyomtatási üzlet WordPress sablonok legfőbb célja, hogy a magas minőségű képekkel és dinamikus HTML és JS vizuális effektekkel segítsenek a különböző cégeknek az eladások megnövelésében. A weboldalra látogatók könnyen meg fogják találni az általuk keresett tartalmat a csúszkának és fő menünek köszönhetően, amelyek az oldal tetején vannak elhelyezve. A navigáció igazán egyszerű, valamint minden termék kategóriákba van rendezve, hogy így minden egyszerűen megtalálható legyen.</p>

<p>A WordPress nyomdaipari vállalat témák jól megtervezettek és olyan színeket használnak, amelyek növelik a kreativitást és a vállalat felé irányult felhasználói érdeklődést. A fejlett téma opciók implementálásával Ön könnyen testre tudja szabni sablont. A hátsó panel felülete rendkívül intuitív, ami könnyű hozzáférést nyújt az olyan összetett funkciókhoz, mint például az aktív modulok váltása vagy új front-end szabályok bevezetése.</p>

<p>Minden Nyomtatási szolgáltatás WordPress sablon modern elrendezéssel rendelkezik a böngésző-közötti kompatibilitásnak és Cherry Framework integrációnak köszönhetően. A Nyomtatási WordPress sablonjaink jól dokumentáltak. Ezen kívül minden vásárláshoz egy 24/7 támogatást is kínálunk.</p>

<p>Látogassa meg a weboldalunkat és válasszon egy sablont a webhelye számára. Az eladások növekedése csak egy lépésnyire van Öntől! Ha netán más témájú sablont keres, látogassa meg a <a href="https://www.templatemonster.com/hu/wordpress-sablonok/">WordPress sablonok</a> válogatását.</p>
`,

`<p>Ön egy olyan szobrász, aki be szeretné mutatni a művészetét a tömegeknek? Talán Ön egy olyan galériatulajdonos, aki szobrokat árul és egy nagyobb piaccal szeretné növelni az eladásait?</p>

<p>Bármit is keres, a TemplateMonster segíteni tud. A WordPress szobrászati témáink számos naprakész tervezésben kaphatók. Mivel hivatásos webfejlesztők által lettek megtervezve, minden vásárlásnál garantálni tudjuk, hogy minőséges terméket vásárol.</p>

<p>A szobrászati szolgáltatások WordPress sablonok számos jellemzővel kaphatók, ami lehetővé teszi az egyedi és trendi weboldalak létrehozását. A fejlett témaopciók egy teljes irányítást biztosítanak a weboldal megjelenése felett. Változtassa a színeket és elrendezéseket, hogy minden elem megfeleljen az Ön személyes igényeinek. Ha Ön egy szobrászati iskolaigazgató, amely már eléggé népszerű, egyesítse a sablon színeit a márkája stílusával, ami egy szakmai megjelenést fog biztosítani.</p>

<p>Használja ki a kiváló rendezhető galéria funkciót, hogy reklámozni tudja a szobrait. Ossza meg az alkotásait ábrázoló képeket a közösségi média opcióval. Minden megosztott kép ingyen reklámot biztosít.</p>

<p>Az Ön weboldala reszponzív és böngésző-közötti kompatibilis lesz, hogy így minden látogató ugyanabban a kiváló felhasználói élményben részesüljön.</p>

<p>Az Ön sablonja keresőmotor-barát, ami segíteni fog abban, hogy jobb rangsorolásokat szerezzen a legnépszerűbb keresőmotorokban. </p>

<p>A Szobrász WordPress témák mellé egy ingyenes, korlátlan 24 órás támogatás jár. Bárhol is tartózkodik a világban, mi segíteni fogunk.</p>

<p>Ne késleltesse a vállalkozása fejlesztését, hozzon létre egy tökéletes weboldalt. Ha netán más témájú sablont keres, látogassa meg a <a href="https://www.templatemonster.com/hu/wordpress-sablonok/">WordPress sablonok</a> válogatását.</p>
`,

`<p>Akár az Ön zenekara egy hosszú távú tapasztalattal rendelkezik a sikeres koncert-tevékenységekkel kapcsolatban vagy csak álmodik arról, hogy egy sikeres zenésszé váljon, Önnek egy weboldalra van szüksége, hogy tartani tudja a kapcsolatot a rajongóival. De hogyan is kezdje ezt a tevékenységet? A legkönnyebb és a legegyszerűbb mód arra, hogy elkezdje a weboldala létrehozását, az, hogy választ egy sablont és elkezdi annak a testreszabását a kreatív ötleteit követve. A legjobb Rock zenekar WordPress témák előre lettek létrehozva, hogy megfeleljenek az Ön egyedi követelményeinek, mivel azok egy kiváló csúszkával és kisebb képekkel rendelkeznek, hogy be tudjanak számolni a legfontosabb eseményekről.</p>

<p>A rugalmas WordPress platform a legjobb választást jelenti, ha Ön nem rendelkezik weboldalfejlesztési készségekkel, de mégis egyedül szeretné módosítani azt. Minden módosítás az intuitív admin panelen keresztül könnyen végrehajtható. Kezdje el a WordPress CMS felfedezését a Kiváló Zenekar WordPress témákkal, amelyek azért lettek összerakva, hogy segíteni tudjanak a rock témájú weboldalak kiépítésében.</p>

<p>Ha Ön többet szeretne, látogassa meg a WordPress zenekar témák teljes gyűjteményét! Ha netán más témájú sablont keres, látogassa meg a <a href="https://www.templatemonster.com/hu/wordpress-sablonok/">WordPress sablonok</a> válogatását.</p>
`,

`<p>A Zeneportál WordPress sablonok egy jól szervezett tervezést tartalmaznak, amely egy egyszerű színsémával rendelkezik, ami serkenti a látogatók érdeklődését az Ön weboldala iránt. A témák könnyen feltelepíthetők és beállíthatók, ami lehetővé teszi a fantasztikus és egyedi megjelenések létrehozását.</p>

<p>Egy jól rendezett dizájn, ami modern jellemzőkkel rendelkezik, mindig le fogja venni a nézőket a lábukról. Ezért is valósítottuk meg a következőket:</p>

<p>- Magas minőségű képek gyönyörű átmeneti effektekkel, amelyek a HTML és JS technológiáival lettek létrehozva. Ez garantálni fogja azt, hogy minden vizuális elem e helyén marad akkor is, ha egy mobil eszközről lesz felkeresve.</p>

<p>- Egy lehetőség arra, hogy szerkeszteni tudja az összes oldalt és a teljes sablont olyan opciókat használva, mint a réteges PSD fájl, több galéria szkript opció és olyan előre létrehozott oldalak, mint a Cégünk, Portfólió, Szolgáltatások, Ajánlólevél.</p>

<p>- Olyan modern jellemzők, mint a hang és videó lejátszó integráció, ami elengedhetetlen a zenével kapcsolatos webhelyek számára. A látogatóknak lehetőségül lesz egy teljes és kielégítő online élményben részesülni.</p>

<p>Ezen kívül a sablonjaink a Bootstrap és Cherry Framework által vannak működtetve, ami jelentősen megkönnyebbíti a beállítási folyamatot.</p>

<p>Böngéssze a WordPress zene sablonok csúcs gyűjteményét, és válassza ki a legjobb Zeneportál WordPress témát a weboldala számára!</p>
`,

`<p>Ha Ön egy énekes, biztosan tudja, hogy mennyire fontos egy erős online jelenléttel rendelkezni. A szórakoztatóiparban a tehetség csak a munka felét képezi. Szükség van arra, hogy bizonyítani tudja, hogy komolyan szeretne ezzel foglalkozni. Hagyja, hogy az emberek megtalálják a dalait az interneten. Az Ön hivatalos zenész weboldala meg fogja mutatni, hogy mit kínál a világnak.</p>

<p>A webáruházunk rendelkezik azzal, amire szüksége van! Előadó WordPress témákat készítettünk, amelyek egyediek és különböznek egymástól. Ön versenyelőnyt szerezhet, valamint az Ön rajongói jól fogják értékelni a magas minőségű, innovatív weboldalt.</p>

<p>A hangsúlyt a vizuális, videó és hang tartalomra fektettük. A magas felbontású képek és csúszkák felhívják a látogatók figyelmét. A műfaj nem igazán számit mindaddig, amíg biztosítani fogja a zene magas minőségét. Például, ha Ön egy feltörekvő rapper, használja a WordPress Rapper témákat.</p>

<p>Egy weboldal fenntartása még sosem volt ennyire könnyű. A WordPress admin felület nagyon könnyen használható és intuitív. Ez azt jelenti, hogy akár akkor is, ha Ön nem rendelkezik számítástechnikai ismeretekkel, a sablonok könnyen szerkeszthetők. Könnyedén változtassa a weboldal tartalmát akkor, amikor erre szükség van, használja a galéria nézetet és videó integrációt. Mindez mindössze néhány kattintást igényel!</p>

<p>Minden Énekes WordPress téma 100% reszponzív. Az Ön rajongói bármilyen készülékről meglátogathatják a honlapját. Továbbá, mivel az éneklés és szórakoztatóipar a hírnévről szól, számos közösségi média lehetőséget mellékeltünk a sablonokhoz.</p>

<p>Ha bármilyen segítségre van szüksége, bármikor felveheti velünk a kapcsolatot - egy 24/7 támogatást kínálunk.</p>

<p>Böngéssze az Éneklés WordPress témákat, mutassa be az alkotásait és szerezzen új rajongókat! Válasszon egy Énekes WordPress témát, ha még többre van szüksége!</p>
`,

`<p>Ha Ön még nem találta meg a kívánt sablont a DJ blogja számára, ez a kategória hasznos lesz az Ön számára. A friss albumok, a legfrissebb és közelgő események bemutatása, a zenei közösségek csoportosítása - mindezt megteheti a DJ WordPress témák segítségével. A WordPress Techno DJ témákat használva kihasználhatja a WordPress legjobb funkcióját - a bogolást.</p>

<p>Ezek a kész megoldások segíthetnek a weboldal készítésben a csábító megjelenésüknek köszönhetően. A hangsúlyt a tartalomra helyeztük, amely egy átgondolt tartalomstruktúrával rendelkezik, ami tökéletes lesz, ha az információt egy mindent átfogó módon szeretné bemutatni. Minden témához egy élő demót és biztosítunk, ami működés közben mutatja meg annak a funkcióit. Indítsa el könnyen a zenei weboldalát a DJ WordPress sablonokkal.</p>

<p>Ezek a sablonok a Zene témakörű WordPress témák széles gyűjteményének a részét képezik.</p>`,

// ``,
//
// ``,

];

const dividedTexts = {
	intro: [],
	bodyParts: [],
	conclusion: []
}

function splitTexts (texts) {
	fullTexts.forEach(text => {
		splitAndArrange(text);
	})
}


function splitAndArrange (fullText) {
	fullText = fullText.split('</p>');
	fullText.pop();
	dividedTexts.intro.push(fullText.shift());
	dividedTexts.conclusion.push(fullText.pop());
	fullText.forEach(text => {
		dividedTexts.bodyParts.push(text);
	});
}

splitTexts(fullTexts);

function randomizeText() {
	const selectedValue = parseFloat(document.getElementById('select_path').value);
	console.log(selectedValue);
	let i = 0;

	randomText.value = dividedTexts.intro[Math.floor(Math.random() * dividedTexts.intro.length)] + '</p>';
	$('#textarea1').trigger('autoresize');

	if (selectedValue) {
		let text = ''
		while (i<selectedValue) {
			text += dividedTexts.bodyParts[Math.floor(Math.random() * dividedTexts.bodyParts.length)]  + '</p>';
			i++;
		}
		bodyArea.value = text;
	} else {
			bodyArea.value = dividedTexts.bodyParts[Math.floor(Math.random() * dividedTexts.bodyParts.length)]  + '</p>';
	};


	$('#textarea2').trigger('autoresize');

	conclusionArea.value =  dividedTexts.conclusion[Math.floor(Math.random() * dividedTexts.conclusion.length)]  + '</p>';
	$('#textarea3').trigger('autoresize');
};

function displayResults() {
	resultsContainer.innerHTML = `${randomText.value}
	 															${bodyArea.value}
															  ${conclusionArea.value}`;
}

outputResultsBtn.addEventListener('click', displayResults);
randomTextBtn.addEventListener('click', randomizeText);
