// import {fullTexts} from ./data.js;
//
// let fullTexts = fullTexts();
// console.log(fullTexts)

const randomText = document.querySelector('#random-text');
const randomTextBtn = document.querySelector('#random-text-btn');
//let fullTexts = require('./data');

function randomizeText() {
	let text = ['Ha az Ön vállalkozása a művészet és kultúra rétegéhez tartozik, biztosan tudja, hogy kifejezetten fontos az, hogy a weboldala magas minőségű vizuális tartalommal rendelkezzen. Ha Ön egy DJ, művész, festő vagy egy honlapra van szüksége a szolgáltatásai, film előfizetések, színház jegyvásárlás vagy hasonló tevékenységek számára. Eljött az idő, hogy egy professzionális online jelenlétet teremtsen a weboldala számára.',
			'A <a href=”https://www.templatemonster.com/hu/kategoria/muveszet-kultura-wordpress-temak/”>Művészeti témák</a>  a különböző típusú művészeti stílusokat egészítik ki. Minden sablon könnyen testreszabható, legyen ez egy művészeti blog, iskola vagy galéria. Válasszon a semleges tervezések a fényesebb alkotások bemutatására vagy az élénkebb vektoros témák között. Minden illusztrációs WordPress téma hivatásos webfejlesztők által a legújabb webes technológiák segítségével lett létrehozva. Abban az esetben, ha egy hivatásos tervezésre van szüksége egy teljeskörű művészeti közösség létrehozásához, lehetősége lesz a digitális művészet közösség <a href=”https://www.templatemonster.com/hu/wordpress-sablonok/”>WordPress sablonok</a> között választani.',
			 'Egy zenebolt, blog, felvételi stúdió, portál számára szeretne WordPress témát? Vessen egy pillantást a TemplateMonster által kínált legjobb WordPress Zenei témákra.',
			 'A múzeumok mindig inspirálták az érdeklődést a történelmi tények iránt, de manapság már elkerülik őket az emberek. Annak éredekében, hogy feltámassza a múzeumok iránti szenvedélyt, eljött az idő, hogy a tudást ott terjessze, ahol a legtöbb ember mostanában megtalálható: online. Az érdekes információk kiváló képekkel és fantasztikus színsémákkal lesznek támogatva. Nem számít, hogy egy történelmi vagy írói múzeumot szeretne előmozdítani - használja a WordPress sablonokat a céljai eléréséhez!',
			 'Ha az olyan filmportál, amely évre/műfajra/értékelésre csoportosítja a filmeket, elég sok problémát okoz, vessen egy pillantást az előre elkészített dizájnokra, amelyek a Filmes WordPress gyűjteményben találhatók meg. Itt Ön olyan dizájnokat találhat, amelyek ideálisan megfelelnek a tartalomban gazdag weboldalak számára: film streaming portálok és blogok. A Filmes WordPress témák elrendezése egy fejlett oszlopstruktúrával rendelkezik, amely minden információt egy tiszta, érthető módon jelenít meg.',
			 'Úgy tűnik, Önt a színház üzleti része érdekli. Ebben az esetben nem kell megmagyarázni, hogy mennyire nehéz manapság a színházi darabok hirdetése. Mint minden niche tevékenységnél, az online jelenlét egy fontos tényező, ami minden üzlet életképességét jelentősen befolyásolja.',
			 'A művészeti galériák a művészeti élményekről szólnak. Ha Ön ebben az üzletben tevékenykedik, biztosan tudja, hogy mennyire fontos az, hogy a portfóliója minél több ember által legyen felfedezve. A mai naptól ez is lehetséges, mivel az egyszerű galéria sablonoknál sokkal többet nyújtunk!',
			 'A művészet, rajzolás tanítása önmagában is gyönyörű kihívás lehet. De, ha Ön azt szeretné. hogy az Ön művészeti iskolája vagy akadémiája új diákokat ést résztvevőket vonzzon, egy kiváló online jelenlétet kell kínálnia. A művészet a látványról szól. Egy lehetőséget kell teremteni az embereknek, hogy azok azt a megfelelő módon tapasztalják meg.',
			 'A művészet egy olyan médium, amely kommunikál az emberekkel. Az vagy a művész vízióját képviseli, vagy képes arra, hogy az emberek kifejezzék az érzelmeiket. De egy dolog biztos - a művészet egy vizuális élmény. Ezért is fontos az, hogy helyesen legyen bemutatva. Az online jelenlét sokat mondhat a művészről, de elég nehéz egy olyan weboldalt készíteni, amely kiegészítené a művészeti alkotásokat.', 'A nyomtatási technológiák gyorsan fejlődnek. A mai világban, ha Ön egy nyomdaipari vállalkozásnak a tulajdonosa, meg kell mutatnia a potenciális ügyfeleknek, hogy Ön könnyen alkalmazkodik az új technológiák kihívásához.'];
	randomText.value = text[Math.floor(Math.random() * 10)];
};

randomTextBtn.addEventListener('click', randomizeText);

// let fullTexts = [`<p>A fémiparba való beépülés a stabilitás és a bizalom sugározását követeli. Önnek egy jó dizájnra lesz szüksége, hogy jó benyomást tudjon keltetni.</p>
//
// <p>Szerencsére az Acélmű WordPress témák mindennel rendelkeznek ahhoz, hogy azt adják meg Önnek, amire szüksége van.</p>
//
// <p>Mivel az admin panellel rendelkező Cherry Framework és a Bootstrap funkciói működtetik őket, az Acélmű WordPress sablonok egy teljesen reszponzív tervezést kínálnak. A sablonhoz fejlett témaopciók és egyedi oldal sablonok járnak, amelyek lehetővé teszik a sokoldalú 2 oszlopos elrendezések létrehozását. A böngésző-közötti kompatibilitás szintén sok előnnyel jár, mivel a segítségével többen látogathatják zökkenőmentesen a weboldalát.</p>
//
// <p>Ahogy változtatni fogja az online acélszervezet tartalmát az admin panel segítségével, a Google betűkészletek és hang és videó integráció szintén elég hasznosan lesznek. A weboldal vizuális elemei HTML és JS animációkkal lettek életre keltvé. Továbbá Ön számos kiváló minőségű stock fotót is kap a sablonhoz, amelyek segítségével szebbé teheti a weboldal dizájnját. A látogatók képesek lesznek megosztani és részt venni a weboldalán zajló tevékenységekben a közösségi média opciók segítségével. Ezen kívül Ön egyszerűen bemutathatja a acélintézetét a "Csapatunk", portfólió, ajánlólevél és a GYIK oldalakat használva, amelyek a WordPRess Fémmegmunkálási témák részét képezik.</p>
//
// <p>Végül Ön nyugodt lehet azt tudván, hogy mindig Önnel lesz a 24/7 ügyfélszolgálatunk, ha bármilyen problémája akad.</p>
//
// <p>Vásároljon egy olyan sablont, amely mindent tartalmaz az acélipari vállalatok számára. Használja bármelyiket az Acélmű WordPRess témák közül.</p>`,
//
// `<p>Ami a belsőépítészetet érinti, a világitás valóban sokat számít a kényelem érzésének a létrehozása közben. Ha nincs elegendő fény, vagy éppen ellenkezőleg, túl sok van belőle, akkor biztosan valami nem stimmel. Ugyanez igaz a weboldal dizájnokra is. Ha nem illenek a színek, akkor az ügyfelei nem fogják érezni a vállalkozását! Tehát ez rendkívül fontos annak érdekében, hogy ne veszítse el a potenciális ügyfeleit.</p>
//
// <p>A TemplateMonster ügyfelei nagyra értékelik a nagy hatássál lévő tervezéseket. Ezért is a legtöbb WordPress sablon, a Világitástechnika és villamosság WordPress témákat beleértve, úgy volt megteremtve, hogy látványos és nagyon funkcionális legyen. A hivatásos grafikusok csapata a témákat az Ön üzleti igényeit szem előtt tartva készítették.</p>
//
// <p>A drag-and-drop oldalépítőnek köszönhetően rendkívül könnyű lesz a szükséges weboldal elrendezések elkészítése. Továbbá lehetősége lesz arra, hogy kísérletezzen a különböző elrendezés típusokkal a beépített könyvtár segítségével. Gazdagítja kedvére a weboldalát a "Blog", "Térkép", "Kapcsolatfelvételi Űrlap" és más hasonló modulokkal.</p>
//
// <p>Bármilyen változtatás végrehajtása igazán egyszerű lesz a Live Customizer alkalmazással. Mostantól több témaopciót módosíthat anélkül, hogy újra be kellen töltenie az oldalt.</p>
//
// <p>A jó hír az, hogy a válogatásban megtalálható minden sablon a keresőmotorok számára lettek optimalizálva. Mindegyik WordPress elektromos téma SEO-barát jellege nem egy opció, hanem egy választás. A speciális bővítményeknek köszönhetően a weboldala jobb rangsorolásokat fog kapni a SERP-ekben. Így több potenciális ügyfél fedezheti fel a villamosenergia vállalkozását. A gyűjteményben megtalálható sablonok a GPL v.3.0. licenc alatt voltak létrehozva. Ez engedélyt ad arra, hogy a sablont több domain-re is feltelepítse. </p>
//
// <p>Egy WordPress Villanyszerelő téma vásárlása garantálja azt, hogy Ön egy 24/7 ügyféltámogatást is kap a TemplateMonstertől. Böngéssze kedvére a Világítás WordPress sablonokat ahhoz, hogy reklámozni tudja a vállalkozását az interneten!</p>`]

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

console.table(dividedTexts);
