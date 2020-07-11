var canvas = document.querySelector('canvas');
var canvasContext = canvas.getContext('2d');
canvas.width = window.innerWidth-302;
canvas.height = window.innerHeight-70;
let vergroesserung = 60;
let backgroundColor = 'rgba(0,0,25,1)';
let backgroundColorLeftNavBarButton = 'rgba(40,40,40,1)';
let animateLeftNavBarButton = false;
let rotationswinkel=0;

let funktionenVorschau=0;
let funktionenListe = [];

hoeheInfoLeiste = 50;
hoeheInfoLeisteReiter = 20;
canvasContext.font = '15px Calibri';
//canvasContext.fillStyle = 'rgba(30,30,30,1)'
canvasContext.textAlign = "left";
let breitePunktAmGraph = canvasContext.measureText("Punkt am Graph");

let workersAvailable =false;
if(window.Worker){
	workersAvailable = true;
}

let verschiebungDurchBenutzer = {
	x : 0,
	y : 0
}
let verschiebungDurchBenutzerStart = {
	x : 0,
	y : 0
}
let verschiebungDurchBenutzerEnde = {
	x : 0,
	y : 0
}

let alteVerschiebung={
	x : 0,
	y : 0
}

let farbeVorschau={
		r:150,
		g:150,
		b:255,
		a:1
}

let aktiverReiter = 1;

let farbeReiter1 = {
		r:150,
		b:150,
		g:150,
		a:2
}
let farbeReiter2 = {
		r:100,
		b:100,
		g:100,
		a:1
}
let farbeReiter3 = {
		r:100,
		b:100,
		g:100,
		a:1
}
let farbeReiter4 = {
		r:100,
		b:100,
		g:100,
		a:1
}
let farbeReiter5 = {
		r:100,
		b:100,
		g:100,
		a:1
}
let farbeReiter6 = {
		r:100,
		b:100,
		g:100,
		a:1
}

let farbeNullstellen = {
		r:200,
		b:0,
		g:0,
		a:1
}

let farbeExtremstellen = {
		r:200,
		b:0,
		g:100,
		a:1
}

let farbeWendestellen = {//TODO angleichen stelle und punkte
		r:04,
		b:180,
		g:130,
		a:1
}

let farbePolstellen = {
		r:100,
		b:0,
		g:0,
		a:1
}




let farbeSchriftInfoLeiste = {
		r:0,
		b:0,
		g:0,
		a:1
}

let fontSchriftInfoLeiste = '15px Calibri';

zeichneReiter6 = false;

let farbenArrayFunktionen = [];
let farbenArrayFunktionenErsteAbleitung = [];
let farbenArrayFunktionenZweiteAbleitung = [];
let farbenArrayFunktionenDritteAbleitung = [];

farbenInitialisieren();
function farbenInitialisieren(){

	let farbenDerFunktionen1={r:38,  g:38,  b:178, a:1}
	let farbenDerFunktionen2={r:31,  g:177,  b:31,  a:1}
	let farbenDerFunktionen3={r:97,  g:11,  b:11,  a:1}
	let farbenDerFunktionen4={r:132, g:75,  b:8,   a:1}
	let farbenDerFunktionen5={r:134, g:138, b:11,  a:1}	
	let farbenDerFunktionen6={r:8,   g:138, b:104, a:1}
	let farbenDerFunktionen7={r:138, g:8,   b:134, a:1}
	
	farbenArrayFunktionen.push(farbenDerFunktionen1);	
	farbenArrayFunktionen.push(farbenDerFunktionen2);
	farbenArrayFunktionen.push(farbenDerFunktionen3);
	farbenArrayFunktionen.push(farbenDerFunktionen4);
	farbenArrayFunktionen.push(farbenDerFunktionen5);
	farbenArrayFunktionen.push(farbenDerFunktionen6);
	farbenArrayFunktionen.push(farbenDerFunktionen7);
	
	let farbenDerFunktionen1ErsteAbleitung={r:46,  g:46,  b:254, a:1}
	let farbenDerFunktionen2ErsteAbleitung={r:46,  g:254, b:46,  a:1}
	let farbenDerFunktionen3ErsteAbleitung={r:254, g:46,  b:46,  a:1}
	let farbenDerFunktionen4ErsteAbleitung={r:254, g:154, b:46,  a:1}
	let farbenDerFunktionen5ErsteAbleitung={r:247, g:254, b:46,  a:1}
	let farbenDerFunktionen6ErsteAbleitung={r:46,  g:254, b:200, a:1}
	let farbenDerFunktionen7ErsteAbleitung={r:254, g:46,  b:247, a:1}
	
	farbenArrayFunktionenErsteAbleitung.push(farbenDerFunktionen1ErsteAbleitung);
	farbenArrayFunktionenErsteAbleitung.push(farbenDerFunktionen2ErsteAbleitung);
	farbenArrayFunktionenErsteAbleitung.push(farbenDerFunktionen3ErsteAbleitung);
	farbenArrayFunktionenErsteAbleitung.push(farbenDerFunktionen4ErsteAbleitung);
	farbenArrayFunktionenErsteAbleitung.push(farbenDerFunktionen5ErsteAbleitung);
	farbenArrayFunktionenErsteAbleitung.push(farbenDerFunktionen6ErsteAbleitung);
	farbenArrayFunktionenErsteAbleitung.push(farbenDerFunktionen7ErsteAbleitung);
	
	let farbenDerFunktionen1ZweiteAbleitung={r:68,  g:68,  b:230, a:1}
	let farbenDerFunktionen2ZweiteAbleitung={r:58,  g:250, b:88,  a:1}
	let farbenDerFunktionen3ZweiteAbleitung={r:250, g:88,  b:88,  a:1}
	let farbenDerFunktionen4ZweiteAbleitung={r:250, g:254, b:88,  a:1}
	let farbenDerFunktionen5ZweiteAbleitung={r:244, g:250, b:88,  a:1}
	let farbenDerFunktionen6ZweiteAbleitung={r:88,  g:250, b:208, a:1}
	let farbenDerFunktionen7ZweiteAbleitung={r:250, g:88,  b:244, a:1}
	
	farbenArrayFunktionenZweiteAbleitung.push(farbenDerFunktionen1ZweiteAbleitung);
	farbenArrayFunktionenZweiteAbleitung.push(farbenDerFunktionen2ZweiteAbleitung);
	farbenArrayFunktionenZweiteAbleitung.push(farbenDerFunktionen3ZweiteAbleitung);
	farbenArrayFunktionenZweiteAbleitung.push(farbenDerFunktionen4ZweiteAbleitung);
	farbenArrayFunktionenZweiteAbleitung.push(farbenDerFunktionen5ZweiteAbleitung);
	farbenArrayFunktionenZweiteAbleitung.push(farbenDerFunktionen6ZweiteAbleitung);
	farbenArrayFunktionenZweiteAbleitung.push(farbenDerFunktionen7ZweiteAbleitung);
	
	let farbenDerFunktionen1DritteAbleitung={r:129, g:129, b:247, a:1}
	let farbenDerFunktionen2DritteAbleitung={r:129, g:247, b:129, a:1}
	let farbenDerFunktionen3DritteAbleitung={r:247, g:129, b:129, a:1}
	let farbenDerFunktionen4DritteAbleitung={r:247, g:190, b:129, a:1}
	let farbenDerFunktionen5DritteAbleitung={r:243, g:247, b:129, a:1}
	let farbenDerFunktionen6DritteAbleitung={r:129, g:247, b:216, a:1}
	let farbenDerFunktionen7DritteAbleitung={r:247, g:129, b:243, a:1}
	
	farbenArrayFunktionenDritteAbleitung.push(farbenDerFunktionen1DritteAbleitung);
	farbenArrayFunktionenDritteAbleitung.push(farbenDerFunktionen2DritteAbleitung);
	farbenArrayFunktionenDritteAbleitung.push(farbenDerFunktionen3DritteAbleitung);
	farbenArrayFunktionenDritteAbleitung.push(farbenDerFunktionen4DritteAbleitung);
	farbenArrayFunktionenDritteAbleitung.push(farbenDerFunktionen5DritteAbleitung);
	farbenArrayFunktionenDritteAbleitung.push(farbenDerFunktionen6DritteAbleitung);
	farbenArrayFunktionenDritteAbleitung.push(farbenDerFunktionen7DritteAbleitung);
}

let buchstabenArray = ['f','g','h','i','j','k'];



let isDown = false;

window.addEventListener("resize", function() {
	canvas.width = window.innerWidth-2;
	canvas.height = window.innerHeight-90;
});


//DrawRectStatisch(0, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter, breitePunktAmGraph.width+20, hoeheInfoLeisteReiter, 150, 150, 150,0.7);
//DrawRectStatisch((breitePunktAmGraph.width+20)*1, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter, breitePunktAmGraph.width+20, hoeheInfoLeisteReiter, 100, 100, 100,0.7);
//DrawRectStatisch((breitePunktAmGraph.width+20)*2, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter, breitePunktAmGraph.width+20, hoeheInfoLeisteReiter, 100, 100, 100,0.7);
//DrawRectStatisch((breitePunktAmGraph.width+20)*3, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter, breitePunktAmGraph.width+20, hoeheInfoLeisteReiter, 100, 100, 100,0.7);

radiusKruemmung = 0;

xKreisKruemmung = 0;
yKreisKruemmung = 0;

canvas.addEventListener("mousedown", function(event) { //(0,(canvas.height/2)-45,20,90);
	if( ((event.pageX - canvas.offsetLeft)>0 && (event.pageX - canvas.offsetLeft)<20) && ((event.pageY - canvas.offsetTop)>(canvas.height/2)-45)&&((event.pageY - canvas.offsetTop)<(canvas.height/2)+45)){
		toggleLeftNavBar();
	}
	if( ((event.pageX - canvas.offsetLeft)>0 && (event.pageX - canvas.offsetLeft)< (breitePunktAmGraph.width+20)) 
			&& ((event.pageY - canvas.offsetTop)>(canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter)&&((event.pageY - canvas.offsetTop)<(canvas.height-hoeheInfoLeiste)))){
		aktiverReiter=1;
	}
	if( ((event.pageX - canvas.offsetLeft)>(breitePunktAmGraph.width+20)*1 && (event.pageX - canvas.offsetLeft)< ((breitePunktAmGraph.width+20)*1) + (breitePunktAmGraph.width+20)) 
			&& ((event.pageY - canvas.offsetTop)>(canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter)&&((event.pageY - canvas.offsetTop)<(canvas.height-hoeheInfoLeiste)))){
		aktiverReiter=2;
	}
	if( ((event.pageX - canvas.offsetLeft)>(breitePunktAmGraph.width+20)*2 && (event.pageX - canvas.offsetLeft)< ((breitePunktAmGraph.width+20)*2) + (breitePunktAmGraph.width+20)) 
			&& ((event.pageY - canvas.offsetTop)>(canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter)&&((event.pageY - canvas.offsetTop)<(canvas.height-hoeheInfoLeiste)))){
		aktiverReiter=3;
	}
	if( ((event.pageX - canvas.offsetLeft)>(breitePunktAmGraph.width+20)*3 && (event.pageX - canvas.offsetLeft)< ((breitePunktAmGraph.width+20)*3) + (breitePunktAmGraph.width+20)) 
			&& ((event.pageY - canvas.offsetTop)>(canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter)&&((event.pageY - canvas.offsetTop)<(canvas.height-hoeheInfoLeiste)))){
		aktiverReiter=4;
	}
	if( ((event.pageX - canvas.offsetLeft)>(breitePunktAmGraph.width+20)*4 && (event.pageX - canvas.offsetLeft)< ((breitePunktAmGraph.width+20)*4) + (breitePunktAmGraph.width+20)) 
			&& ((event.pageY - canvas.offsetTop)>(canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter)&&((event.pageY - canvas.offsetTop)<(canvas.height-hoeheInfoLeiste)))){
		aktiverReiter=5;
	}
	if( ((event.pageX - canvas.offsetLeft)>canvas.width-breitePunktAmGraph.width-20) && (event.pageX - canvas.offsetLeft) < canvas.width
			&& ((event.pageY - canvas.offsetTop)>(canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter)&&((event.pageY - canvas.offsetTop)<(canvas.height-hoeheInfoLeiste)))){
		aktiverReiter=6;
	}
	verschiebungDurchBenutzerStart.x = event.pageX - canvas.offsetLeft;
	verschiebungDurchBenutzerStart.y = event.pageY - canvas.offsetTop;
	isDown = true;
	alteVerschiebung.x = verschiebungDurchBenutzer.x;
	alteVerschiebung.y = verschiebungDurchBenutzer.y;
});

canvas.addEventListener('mouseleave', function() {
	isDown=false;
	animateLeftNavBarButton=false;
});

let punktAmAusgewaehltenGraph={
	x:0,
	y:0
}

let aufgerundet=false;
let steigungTangente = 0;
let yfStrich = 0;
let yfZweiStrich = 0;
let yf =0;
canvas.addEventListener('mousemove', function(event) {
	if (isDown) {
		verschiebungDurchBenutzerEnde.x = event.pageX - canvas.offsetLeft;
		verschiebungDurchBenutzerEnde.y = event.pageY - canvas.offsetTop;
		const walkx = verschiebungDurchBenutzerEnde.x-verschiebungDurchBenutzerStart.x;
		const walky = verschiebungDurchBenutzerEnde.y-verschiebungDurchBenutzerStart.y;
		verschiebungDurchBenutzer.x = alteVerschiebung.x+walkx;
		verschiebungDurchBenutzer.y = alteVerschiebung.y+walky;
	}
	toggelLeftNavBarButton();
	for(let i=0;i<funktionenListe.length;i++){
		if(document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString){
			let posX = (event.pageX - canvas.offsetLeft)/vergroesserung;
			let canvaswidth = (canvas.width/2)/vergroesserung;
			let verschx = verschiebungDurchBenutzer.x/vergroesserung;
			let mausPositionX = posX - canvaswidth - verschx;
			if(Math.abs(mausPositionX-Math.floor(mausPositionX))<=0.01){
				punktAmAusgewaehltenGraph.x = Math.floor(mausPositionX);
				aufgerundet = true;
			}else{
				punktAmAusgewaehltenGraph.x = mausPositionX;
				aufgerundet = false;
			}
			//punktAmAusgewaehltenGraph.x = mausPositionX;//parseFloat(mausPositionX.toFixed(1));
			punktAmAusgewaehltenGraph.y = -getPunktV4(punktAmAusgewaehltenGraph.x,funktionenListe[i],0);//parseFloat(-getPunkt(punktAmAusgewaehltenGraph.x,funktionenListe[i].gekürzt).toFixed(2));
			
			steigungTangente = getPunktV4(punktAmAusgewaehltenGraph.x,funktionenListe[i].ersteAbleitung,0);
			zeichneTangenteAmPunkt(punktAmAusgewaehltenGraph.y, steigungTangente);
			
			yf = getPunktV4(punktAmAusgewaehltenGraph.x, funktionenListe[i],0);
			if(Math.abs(yf)<2500){
				yfStrich = getPunktV4(punktAmAusgewaehltenGraph.x, funktionenListe[i].ersteAbleitung,0);
				yfZweiStrich = getPunktV4(punktAmAusgewaehltenGraph.x, funktionenListe[i].zweiteAbleitung,0);
				let yfStrichQuadrat = Math.pow(yfStrich, 2);
				let einsPlusYStrichQuadrat = 1 + yfStrichQuadrat;
	
				if(yfZweiStrich!=0){
					radiusKruemmung = (Math.pow(einsPlusYStrichQuadrat, 1.5) / Math.abs(yfZweiStrich));
	
					xKreisKruemmung = punktAmAusgewaehltenGraph.x - (yfStrich*(einsPlusYStrichQuadrat / yfZweiStrich));
					yKreisKruemmung = yf + (einsPlusYStrichQuadrat / yfZweiStrich);
					let tmp=1;
				}
			}
		}
	}
});

let punkteNormaleLinksVonNull = [];
let punkteNormaleRechtsVonNull = [];
let punkteTangenteLinksVonNull = [];
let punkteTangenteRechtsVonNull = [];

function zeichneTangenteAmPunkt(hoehe, steigung){
	punkteNormaleLinksVonNull = [];
	punkteNormaleRechtsVonNull = [];
	punkteTangenteLinksVonNull = [];
	punkteTangenteRechtsVonNull = [];
	let funktionsVektorTangente = [];
	funktionsVektorTangente.push(-hoehe);
	funktionsVektorTangente.push(steigung);
	let funktionsVektorNormale = [];
	funktionsVektorNormale.push(-hoehe);
	funktionsVektorNormale.push(-(1/steigung));
	let yTangente=0;
	let yNormale=0;
	
	for (let i = 0; i < 1000; i += 100) {
		ytangente = f(i, funktionsVektorTangente);
		yNormale = f(i, funktionsVektorNormale);
			let p1={
					x: (i + punktAmAusgewaehltenGraph.x),
					y: ytangente
			};
			punkteTangenteRechtsVonNull.push(p1);
			let p2={
					x: (i + punktAmAusgewaehltenGraph.x),
					y: yNormale
			};
			punkteNormaleRechtsVonNull.push(p2);
	}
	
	
	for (let i = 0; i > -1000; i -= 100) {
		ytangente = f(i, funktionsVektorTangente);
		yNormale = f(i, funktionsVektorNormale);
		
			let p1={
					x: (i + punktAmAusgewaehltenGraph.x),
					y: ytangente
			};
			punkteTangenteLinksVonNull.push(p1);
			let p2={
					x: (i + punktAmAusgewaehltenGraph.x),
					y: yNormale
			};
			punkteNormaleLinksVonNull.push(p2);
	}
}

canvas.addEventListener("mousewheel", function(event) {
	let delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
	if((vergroesserung==1)&&(delta-1)){
		return;
	}else{
		vergroesserung += delta;
	}
	if(funktionenVorschau!=0){
		funktionenVorschau.punkteLinksVonNullVergroessert = [];
		funktionenVorschau.punkteRechtsVonNullVergroessert = [];
		for(let i=0;i<funktionenVorschau.punkteLinksVonNull.length;i++){
			punktVergroessert={
					x:funktionenVorschau.punkteLinksVonNull[i].x*vergroesserung,
					y:funktionenVorschau.punkteLinksVonNull[i].y*vergroesserung
			}
			funktionenVorschau.punkteLinksVonNullVergroessert.push(punktVergroessert);
		}
		for(let i=0;i<funktionenVorschau.punkteRechtsVonNull.length;i++){
			punktVergroessert={
					x:funktionenVorschau.punkteRechtsVonNull[i].x*vergroesserung,
					y:funktionenVorschau.punkteRechtsVonNull[i].y*vergroesserung
			}
			funktionenVorschau.punkteRechtsVonNullVergroessert.push(punktVergroessert);
		}
	}

	for(let j=0;j<funktionenListe.length;j++){
		funktionenListe[j].punkteLinksVonNullVergroessert = [];
		funktionenListe[j].punkteRechtsVonNullVergroessert = [];
		for(let i=0;i<funktionenListe[j].punkteLinksVonNull.length;i++){
			punktVergroessert={
					x:funktionenListe[j].punkteLinksVonNull[i].x*vergroesserung,
					y:funktionenListe[j].punkteLinksVonNull[i].y*vergroesserung
			}
			funktionenListe[j].punkteLinksVonNullVergroessert.push(punktVergroessert);
		}
		for(let i=0;i<funktionenListe[j].punkteRechtsVonNull.length;i++){
			punktVergroessert={
					x:funktionenListe[j].punkteRechtsVonNull[i].x*vergroesserung,
					y:funktionenListe[j].punkteRechtsVonNull[i].y*vergroesserung
			}
			funktionenListe[j].punkteRechtsVonNullVergroessert.push(punktVergroessert);
		}
		
		funktionenListe[j].ersteAbleitung.punkteLinksVonNullVergroessert = [];
		funktionenListe[j].ersteAbleitung.punkteRechtsVonNullVergroessert = [];
		for(let i=0;i<funktionenListe[j].ersteAbleitung.punkteLinksVonNull.length;i++){
			punktVergroessert={
					x:funktionenListe[j].ersteAbleitung.punkteLinksVonNull[i].x*vergroesserung,
					y:funktionenListe[j].ersteAbleitung.punkteLinksVonNull[i].y*vergroesserung
			}
			funktionenListe[j].ersteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessert);
		}
		for(let i=0;i<funktionenListe[j].ersteAbleitung.punkteRechtsVonNull.length;i++){
			punktVergroessert={
					x:funktionenListe[j].ersteAbleitung.punkteRechtsVonNull[i].x*vergroesserung,
					y:funktionenListe[j].ersteAbleitung.punkteRechtsVonNull[i].y*vergroesserung
			}
			funktionenListe[j].ersteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessert);
		}
		
		funktionenListe[j].zweiteAbleitung.punkteLinksVonNullVergroessert = [];
		funktionenListe[j].zweiteAbleitung.punkteRechtsVonNullVergroessert = [];
		for(let i=0;i<funktionenListe[j].zweiteAbleitung.punkteLinksVonNull.length;i++){
			punktVergroessert={
					x:funktionenListe[j].zweiteAbleitung.punkteLinksVonNull[i].x*vergroesserung,
					y:funktionenListe[j].zweiteAbleitung.punkteLinksVonNull[i].y*vergroesserung
			}
			funktionenListe[j].zweiteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessert);
		}
		for(let i=0;i<funktionenListe[j].zweiteAbleitung.punkteRechtsVonNull.length;i++){
			punktVergroessert={
					x:funktionenListe[j].zweiteAbleitung.punkteRechtsVonNull[i].x*vergroesserung,
					y:funktionenListe[j].zweiteAbleitung.punkteRechtsVonNull[i].y*vergroesserung
			}
			funktionenListe[j].zweiteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessert);
		}
		
		funktionenListe[j].dritteAbleitung.punkteLinksVonNullVergroessert = [];
		funktionenListe[j].dritteAbleitung.punkteRechtsVonNullVergroessert = [];
		for(let i=0;i<funktionenListe[j].dritteAbleitung.punkteLinksVonNull.length;i++){
			punktVergroessert={
					x:funktionenListe[j].dritteAbleitung.punkteLinksVonNull[i].x*vergroesserung,
					y:funktionenListe[j].dritteAbleitung.punkteLinksVonNull[i].y*vergroesserung
			}
			funktionenListe[j].dritteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessert);
		}
		for(let i=0;i<funktionenListe[j].dritteAbleitung.punkteRechtsVonNull.length;i++){
			punktVergroessert={
					x:funktionenListe[j].dritteAbleitung.punkteRechtsVonNull[i].x*vergroesserung,
					y:funktionenListe[j].dritteAbleitung.punkteRechtsVonNull[i].y*vergroesserung
			}
			funktionenListe[j].dritteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessert);
		}
	}
}, false);


canvas.addEventListener("mouseup", function(event) {
	isDown = false;
});

equationForm = document.getElementById("equationForm");
if(equationForm!=null){
	equationForm.addEventListener("keypress", function(event) {//todo felder leermachen bei neuer eingabe
		let key = event.keyCode;
		if(key === 13){
			if(funktionenVorschau!=0){
				funktionenListe.push(funktionenVorschau);
				let funktionGekuerzt = funktionenVorschau; 
				kuerzeSyntaxbaumGebrochenRational(funktionGekuerzt);
				funktionenListe[funktionenListe.length-1].gekürzt = funktionGekuerzt;
				funktionenListe[funktionenListe.length-1].gekürzt.inhaltKnotenText = syntaxBaumZuText(funktionenListe[funktionenListe.length-1].gekürzt);
				
				addToFunctionDropdownList(funktionenVorschau);
				
				funktionenListe[funktionenListe.length-1].ersteAbleitung = funktionAbleitenGebrochenRationalV3(funktionGekuerzt);
				funktionenListe[funktionenListe.length-1].zweiteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenListe[funktionenListe.length-1].ersteAbleitung);
				funktionenListe[funktionenListe.length-1].ersteAbleitung.ersteAbleitung = funktionenListe[funktionenListe.length-1].zweiteAbleitung;
				funktionenListe[funktionenListe.length-1].dritteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenListe[funktionenListe.length-1].zweiteAbleitung);
				funktionenListe[funktionenListe.length-1].ersteAbleitung.zweiteAbleitung = funktionenListe[funktionenListe.length-1].dritteAbleitung;
				funktionenListe[funktionenListe.length-1].zweiteAbleitung.ersteAbleitung = funktionenListe[funktionenListe.length-1].dritteAbleitung;
				funktionenListe[funktionenListe.length-1].ersteAbleitung.dritteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenListe[funktionenListe.length-1].dritteAbleitung);
				funktionenListe[funktionenListe.length-1].zweiteAbleitung.zweiteAbleitung = funktionenListe[funktionenListe.length-1].ersteAbleitung.dritteAbleitung;
				funktionenListe[funktionenListe.length-1].dritteAbleitung.ersteAbleitung = funktionenListe[funktionenListe.length-1].ersteAbleitung.dritteAbleitung;
				funktionenListe[funktionenListe.length-1].zweiteAbleitung.dritteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenListe[funktionenListe.length-1].zweiteAbleitung.zweiteAbleitung);
				funktionenListe[funktionenListe.length-1].dritteAbleitung.zweiteAbleitung = funktionenListe[funktionenListe.length-1].zweiteAbleitung.dritteAbleitung;
				funktionenListe[funktionenListe.length-1].dritteAbleitung.dritteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenListe[funktionenListe.length-1].dritteAbleitung.zweiteAbleitung);
				
				for(let i=0;i<1000;i+=0.1){
					let punkterste = {
							x:i,
							y:getPunkt(i,funktionenListe[funktionenListe.length-1].ersteAbleitung)
					}
					let punktzweite = {
							x:i,
							y:getPunkt(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung)
					}
					let punktdritte = {
							x:i,
							y:getPunkt(i,funktionenListe[funktionenListe.length-1].dritteAbleitung)
					}
					funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteRechtsVonNull.push(punkterste);
					funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteRechtsVonNull.push(punktzweite);
					funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteRechtsVonNull.push(punktdritte);
					let punktVergroessertErste = {
							x:i*vergroesserung,
							y:getPunkt(i,funktionenListe[funktionenListe.length-1].ersteAbleitung)*vergroesserung
					}
					let punktVergroessertZweite = {
							x:i*vergroesserung,
							y:getPunkt(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung)*vergroesserung
					}
					let punktVergroessertDritte = {
							x:i*vergroesserung,
							y:getPunkt(i,funktionenListe[funktionenListe.length-1].dritteAbleitung)*vergroesserung
					}
					funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessertErste);
					funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessertZweite);
					funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessertDritte);
		
				}
				for(let i=0;i>-1000;i-=0.1){
					
					let punkterste = {
							x:i,
							y:getPunkt(i,funktionenListe[funktionenListe.length-1].ersteAbleitung)
					}
					let punktzweite = {
							x:i,
							y:getPunkt(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung)
					}
					let punktdritte = {
							x:i,
							y:getPunkt(i,funktionenListe[funktionenListe.length-1].dritteAbleitung)
					}
					funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteLinksVonNull.push(punkterste);
					funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteLinksVonNull.push(punktzweite);
					funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteLinksVonNull.push(punktdritte);
			
					let punktVergroessErterste = {
							x:i*vergroesserung,
							y:getPunkt(i,funktionenListe[funktionenListe.length-1].ersteAbleitung)*vergroesserung
					}
					let punktVergroessertZweite = {
							x:i*vergroesserung,
							y:getPunkt(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung)*vergroesserung
					}
					let punktVergroessertDritte = {
							x:i*vergroesserung,
							y:getPunkt(i,funktionenListe[funktionenListe.length-1].dritteAbleitung)*vergroesserung
					}
					funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessErterste);
					funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessertZweite);
					funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessertDritte);
					
				}
				
				funktionenVorschau = 0;
			}
		}
	});

}



equationFormAlternativ = document.getElementById("equationFormAlternativ");
if(equationFormAlternativ!=null){
	equationFormAlternativ.addEventListener("keypress", function(event) {//todo felder leermachen bei neuer eingabe
		let key = event.keyCode;
		if(key === 13){
			if(funktionenVorschau!=0){
				
				if(funktionenVorschau.einfachGanzrational){
					funktionenListe.push(funktionenVorschau);
					addToFunctionDropdownList(funktionenVorschau);
					
					displayButtons(funktionenListe[funktionenListe.length-1]);
					berechneKurvenDiskusionsPunkteV4(funktionenListe[funktionenListe.length-1]);
					
					let abstandPunktZuPunkt = 0.1;
					funktionenListe[funktionenListe.length-1].punkteRechtsVonNull = [];
					funktionenListe[funktionenListe.length-1].punkteRechtsVonNullVergroessert = [];
					let naheKurvenDiskusionsPunkt = false;
					for(let i=0;i<1000;i+=abstandPunktZuPunkt){
						naheKurvenDiskusionsPunkt = false;
						for(let j=0;j<funktionenListe[funktionenListe.length-1].polstellen.length;j++){
							if(i>funktionenListe[funktionenListe.length-1].polstellen[j]-1&&i<funktionenListe[funktionenListe.length-1].polstellen[j]+1){
								naheKurvenDiskusionsPunkt = true;
								abstandPunktZuPunkt = 0.01
							}
						}
						for(let j=0;j<funktionenListe[funktionenListe.length-1].nullstellen.length;j++){
							if(i>funktionenListe[funktionenListe.length-1].nullstellen[j]-1&&i<funktionenListe[funktionenListe.length-1].nullstellen[j]+1){
								naheKurvenDiskusionsPunkt = true;
								abstandPunktZuPunkt = 0.01
							}
						}
						for(let j=0;j<funktionenListe[funktionenListe.length-1].extremstellen.length;j++){
							if(i>funktionenListe[funktionenListe.length-1].extremstellen[j]-1&&i<funktionenListe[funktionenListe.length-1].extremstellen[j]+1){
								naheKurvenDiskusionsPunkt = true;
								abstandPunktZuPunkt = 0.01
							}
						}
						for(let j=0;j<funktionenListe[funktionenListe.length-1].wendepunkte.length;j++){
							if(i>funktionenListe[funktionenListe.length-1].wendepunkte[j]-1&&i<funktionenListe[funktionenListe.length-1].wendepunkte[j]+1){
								naheKurvenDiskusionsPunkt = true;
								abstandPunktZuPunkt = 0.01
							}
						}
						if(!naheKurvenDiskusionsPunkt){
							abstandPunktZuPunkt = 0.1;
						}
						if(funktionenListe[funktionenListe.length-1].einfachGanzrational===true){
							let punkt = {
									x:i,
									y:getPunktEinfachesGanzrational(i,funktionenVorschau.gekuerzt,0)
							}
							funktionenListe[funktionenListe.length-1].punkteRechtsVonNull.push(punkt);
						}else{
							let punkt = {
									x:i,
									y:getPunktV4(i,funktionenVorschau.gekürzt,0)
							}
							funktionenListe[funktionenListe.length-1].punkteRechtsVonNull.push(punkt);
						}

						if(funktionenListe[funktionenListe.length-1].einfachGanzrational===true){
							let punktVergroessert = {
									x:i*vergroesserung,
									y:getPunktEinfachesGanzrational(i,funktionenVorschau.gekuerzt,0)*vergroesserung
							}
							funktionenListe[funktionenListe.length-1].punkteRechtsVonNullVergroessert.push(punktVergroessert);
						}else{
							let punktVergroessert = {
									x:i*vergroesserung,
									y:getPunktV4(i,funktionenVorschau.gekürzt,0)*vergroesserung
							}
							funktionenListe[funktionenListe.length-1].punkteRechtsVonNullVergroessert.push(punktVergroessert);
						}
					
					}
					abstandPunktZuPunkt = 0.1;
					
					funktionenListe[funktionenListe.length-1].punkteLinksVonNull = [];
					funktionenListe[funktionenListe.length-1].punkteLinksVonNullVergroessert = [];
					
					for(let i=0;i>-1000;i-=abstandPunktZuPunkt){
						let naheKurvenDiskusionsPunkt = false;
						for(let j=0;j<funktionenListe[funktionenListe.length-1].polstellen.length;j++){
							if(i>funktionenListe[funktionenListe.length-1].polstellen[j]-1&&i<funktionenListe[funktionenListe.length-1].polstellen[j]+1){
								naheKurvenDiskusionsPunkt = true;
								abstandPunktZuPunkt = 0.01
							}
						}
						for(let j=0;j<funktionenListe[funktionenListe.length-1].nullstellen.length;j++){
							if(i>funktionenListe[funktionenListe.length-1].nullstellen[j]-1&&i<funktionenListe[funktionenListe.length-1].nullstellen[j]+1){
								naheKurvenDiskusionsPunkt = true;
								abstandPunktZuPunkt = 0.01
							}
						}
						for(let j=0;j<funktionenListe[funktionenListe.length-1].extremstellen.length;j++){
							if(i>funktionenListe[funktionenListe.length-1].extremstellen[j]-1&&i<funktionenListe[funktionenListe.length-1].extremstellen[j]+1){
								naheKurvenDiskusionsPunkt = true;
								abstandPunktZuPunkt = 0.01
							}
						}
						for(let j=0;j<funktionenListe[funktionenListe.length-1].wendepunkte.length;j++){
							if(i>funktionenListe[funktionenListe.length-1].wendepunkte[j]-1&&i<funktionenListe[funktionenListe.length-1].wendepunkte[j]+1){
								naheKurvenDiskusionsPunkt = true;
								abstandPunktZuPunkt = 0.01
							}
						}
						if(!naheKurvenDiskusionsPunkt){
							abstandPunktZuPunkt = 0.1;
						}
						if(funktionenListe[funktionenListe.length-1].einfachGanzrational===true){
							let punkt = {
									x:i,
									y:getPunktEinfachesGanzrational(i,funktionenVorschau.gekuerzt,0)
							}
							funktionenListe[funktionenListe.length-1].punkteLinksVonNull.push(punkt);
						}else{
							let punkt = {
									x:i,
									y:getPunktV3(i,funktionenVorschau.gekürzt,0)
							}
							funktionenListe[funktionenListe.length-1].punkteLinksVonNull.push(punkt);
						}
						if(funktionenListe[funktionenListe.length-1].einfachGanzrational===true){
							let punktVergroessert = {
									x:i*vergroesserung,
									y:getPunktEinfachesGanzrational(i,funktionenVorschau.gekuerzt,0)*vergroesserung
							}
							funktionenListe[funktionenListe.length-1].punkteLinksVonNullVergroessert.push(punktVergroessert);
						}else{
							let punktVergroessert = {
									x:i*vergroesserung,
									y:getPunktV3(i,funktionenVorschau.gekürzt,0)*vergroesserung
							}
							funktionenListe[funktionenListe.length-1].punkteLinksVonNullVergroessert.push(punktVergroessert);
						}
						
					}
					
					
					
					
					if(funktionenListe[funktionenListe.length-1].einfachGanzrational===true){
						for(let i=0;i<1000;i+=0.1){
							
							let punkterste = {
									x:i,
									y:getPunktEinfachesGanzrational(i,funktionenListe[funktionenListe.length-1].ersteAbleitung.gekuerzt,0)
							}
							let punktzweite = {
									x:i,
									y:getPunktEinfachesGanzrational(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung.gekuerzt,0)
							}
							let punktdritte = {
									x:i,
									y:getPunktEinfachesGanzrational(i,funktionenListe[funktionenListe.length-1].dritteAbleitung.gekuerzt,0)
							}
							funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteRechtsVonNull.push(punkterste);
							funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteRechtsVonNull.push(punktzweite);
							funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteRechtsVonNull.push(punktdritte);
							let punktVergroessertErste = {
									x:i*vergroesserung,
									y:getPunktEinfachesGanzrational(i,funktionenListe[funktionenListe.length-1].ersteAbleitung.gekuerzt,0)*vergroesserung
							}
							let punktVergroessertZweite = {
									x:i*vergroesserung,
									y:getPunktEinfachesGanzrational(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung.gekuerzt,0)*vergroesserung
							}
							let punktVergroessertDritte = {
									x:i*vergroesserung,
									y:getPunktEinfachesGanzrational(i,funktionenListe[funktionenListe.length-1].dritteAbleitung.gekuerzt,0)*vergroesserung
							}
							funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessertErste);
							funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessertZweite);
							funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessertDritte);
				
						}
						for(let i=0;i>-1000;i-=0.1){
							
							let punkterste = {
									x:i,
									y:getPunktEinfachesGanzrational(i,funktionenListe[funktionenListe.length-1].ersteAbleitung.gekuerzt,0)
							}
							let punktzweite = {
									x:i,
									y:getPunktEinfachesGanzrational(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung.gekuerzt,0)
							}
							let punktdritte = {
									x:i,
									y:getPunktEinfachesGanzrational(i,funktionenListe[funktionenListe.length-1].dritteAbleitung.gekuerzt,0)
							}
							funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteLinksVonNull.push(punkterste);
							funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteLinksVonNull.push(punktzweite);
							funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteLinksVonNull.push(punktdritte);
					
							let punktVergroessErterste = {
									x:i*vergroesserung,
									y:getPunktEinfachesGanzrational(i,funktionenListe[funktionenListe.length-1].ersteAbleitung.gekuerzt,0)*vergroesserung
							}
							let punktVergroessertZweite = {
									x:i*vergroesserung,
									y:getPunktEinfachesGanzrational(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung.gekuerzt,0)*vergroesserung
							}
							let punktVergroessertDritte = {
									x:i*vergroesserung,
									y:getPunktEinfachesGanzrational(i,funktionenListe[funktionenListe.length-1].dritteAbleitung.gekuerzt,0)*vergroesserung
							}
							funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessErterste);
							funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessertZweite);
							funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessertDritte);
							
						}
					}else{
						for(let i=0;i<1000;i+=0.1){
							
							let punkterste = {
									x:i,
									y:getPunktV4(i,funktionenListe[funktionenListe.length-1].ersteAbleitung.gekuerzt,0)
							}
							let punktzweite = {
									x:i,
									y:getPunktV4(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung.gekuerzt,0)
							}
							let punktdritte = {
									x:i,
									y:getPunktV4(i,funktionenListe[funktionenListe.length-1].dritteAbleitung.gekuerzt,0)
							}
							funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteRechtsVonNull.push(punkterste);
							funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteRechtsVonNull.push(punktzweite);
							funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteRechtsVonNull.push(punktdritte);
							let punktVergroessertErste = {
									x:i*vergroesserung,
									y:getPunktV4(i,funktionenListe[funktionenListe.length-1].ersteAbleitung.gekuerzt,0)*vergroesserung
							}
							let punktVergroessertZweite = {
									x:i*vergroesserung,
									y:getPunktV4(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung.gekuerzt,0)*vergroesserung
							}
							let punktVergroessertDritte = {
									x:i*vergroesserung,
									y:getPunktV4(i,funktionenListe[funktionenListe.length-1].dritteAbleitung.gekuerzt,0)*vergroesserung
							}
							funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessertErste);
							funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessertZweite);
							funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessertDritte);
				
						}
						for(let i=0;i>-1000;i-=0.1){
							
							let punkterste = {
									x:i,
									y:getPunktV4(i,funktionenListe[funktionenListe.length-1].ersteAbleitung.gekuerzt,0)
							}
							let punktzweite = {
									x:i,
									y:getPunktV4(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung.gekuerzt,0)
							}
							let punktdritte = {
									x:i,
									y:getPunktV4(i,funktionenListe[funktionenListe.length-1].dritteAbleitung.gekuerzt,0)
							}
							funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteLinksVonNull.push(punkterste);
							funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteLinksVonNull.push(punktzweite);
							funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteLinksVonNull.push(punktdritte);
					
							let punktVergroessErterste = {
									x:i*vergroesserung,
									y:getPunktV4(i,funktionenListe[funktionenListe.length-1].ersteAbleitung.gekuerzt,0)*vergroesserung
							}
							let punktVergroessertZweite = {
									x:i*vergroesserung,
									y:getPunktV4(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung.gekuerzt,0)*vergroesserung
							}
							let punktVergroessertDritte = {
									x:i*vergroesserung,
									y:getPunktV4(i,funktionenListe[funktionenListe.length-1].dritteAbleitung.gekuerzt,0)*vergroesserung
							}
							funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessErterste);
							funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessertZweite);
							funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessertDritte);
							
						}
					}
					
					
					
					
					
					
				}else{
					funktionenListe.push(funktionenVorschau);
					addToFunctionDropdownList(funktionenVorschau);
					
					let funktionGekuerzt = funktionenVorschau; 
					//kuerzeSyntaxbaumGebrochenRationalV3(funktionGekuerzt);
					funktionenListe[funktionenListe.length-1].gekürzt = funktionGekuerzt;
					funktionenListe[funktionenListe.length-1].gekürzt.inhaltKnotenText = syntaxBaumZuTextV2(funktionenListe[funktionenListe.length-1].gekürzt,"");
					
					funktionenListe[funktionenListe.length-1].ersteAbleitung = funktionAbleitenSyntaxbaum(funktionGekuerzt);
					funktionenListe[funktionenListe.length-1].zweiteAbleitung = funktionAbleitenSyntaxbaum(funktionenVorschau.ersteAbleitung);
					funktionenListe[funktionenListe.length-1].ersteAbleitung.ersteAbleitung = funktionenVorschau.zweiteAbleitung;
					funktionenListe[funktionenListe.length-1].dritteAbleitung = funktionAbleitenSyntaxbaum(funktionenVorschau.zweiteAbleitung);
					funktionenListe[funktionenListe.length-1].ersteAbleitung.zweiteAbleitung = funktionenVorschau.dritteAbleitung;
					funktionenListe[funktionenListe.length-1].zweiteAbleitung.ersteAbleitung = funktionenVorschau.dritteAbleitung;
					funktionenListe[funktionenListe.length-1].ersteAbleitung.dritteAbleitung = funktionAbleitenSyntaxbaum(funktionenVorschau.dritteAbleitung);
					funktionenListe[funktionenListe.length-1].zweiteAbleitung.zweiteAbleitung = funktionenVorschau.ersteAbleitung.dritteAbleitung;
					funktionenListe[funktionenListe.length-1].dritteAbleitung.ersteAbleitung = funktionenVorschau.ersteAbleitung.dritteAbleitung;
					funktionenListe[funktionenListe.length-1].zweiteAbleitung.dritteAbleitung = funktionAbleitenSyntaxbaum(funktionenVorschau.zweiteAbleitung.zweiteAbleitung);
					funktionenListe[funktionenListe.length-1].dritteAbleitung.zweiteAbleitung = funktionenVorschau.zweiteAbleitung.dritteAbleitung;
					funktionenListe[funktionenListe.length-1].dritteAbleitung.dritteAbleitung = funktionAbleitenSyntaxbaum(funktionenVorschau.dritteAbleitung.zweiteAbleitung);

					
//					funktionenListe[funktionenListe.length-1].stammfunktion = 
					
					displayButtonsV2(funktionenListe[funktionenListe.length-1]);
					//berechneKurvenDiskusionsPunkte(funktionenListe[funktionenListe.length-1]);
					
					let abstandPunktZuPunkt = 0.1;
					funktionenListe[funktionenListe.length-1].punkteRechtsVonNull = [];
					funktionenListe[funktionenListe.length-1].punkteRechtsVonNullVergroessert = [];
					
					for(let i=0;i<1000;i+=abstandPunktZuPunkt){
						let nahePolstelle = false;
						for(let j=0;j<funktionenListe[funktionenListe.length-1].polstellen.length;j++){
							if(i>funktionenListe[funktionenListe.length-1].polstellen[j]-1&&i<funktionenListe[funktionenListe.length-1].polstellen[j]+1){
								nahePolstelle = true;
								abstandPunktZuPunkt = 0.01
							}
						}
						if(!nahePolstelle){
							abstandPunktZuPunkt = 0.1;
						}
						
						let punkt = {
								x:i,
								y:getPunktV4(i,funktionenVorschau,0)
						}
						funktionenListe[funktionenListe.length-1].punkteRechtsVonNull.push(punkt);
						let punktVergroessert = {
								x:i*vergroesserung,
								y:getPunktV4(i,funktionenVorschau,0)*vergroesserung
						}
						funktionenListe[funktionenListe.length-1].punkteRechtsVonNullVergroessert.push(punktVergroessert);
					}
					abstandPunktZuPunkt = 0.1;
					
					funktionenListe[funktionenListe.length-1].punkteLinksVonNull = [];
					funktionenListe[funktionenListe.length-1].punkteLinksVonNullVergroessert = [];
					for(let i=0;i>-1000;i-=0.1){
						let nahePolstelle = false;
						for(let j=0;j<funktionenListe[funktionenListe.length-1].polstellen.length;j++){
							if(i>funktionenListe[funktionenListe.length-1].polstellen[j]-1&&i<funktionenListe[funktionenListe.length-1].polstellen[j]+1){
								nahePolstelle = true;
								abstandPunktZuPunkt = 0.01
							}
						}
						if(!nahePolstelle){
							abstandPunktZuPunkt = 0.1;
						}
						let punkt = {
								x:i,
								y:getPunktV4(i,funktionenVorschau.gekürzt,0)
						}
						funktionenListe[funktionenListe.length-1].punkteLinksVonNull.push(punkt);
						let punktVergroessert = {
								x:i*vergroesserung,
								y:getPunktV4(i,funktionenVorschau.gekürzt,0)*vergroesserung
						}
						funktionenListe[funktionenListe.length-1].punkteLinksVonNullVergroessert.push(punktVergroessert);
					}
					
					for(let i=0;i<1000;i+=0.1){
						let punkterste = {
								x:i,
								y:getPunktV4(i,funktionenListe[funktionenListe.length-1].ersteAbleitung,0)
						}
						let punktzweite = {
								x:i,
								y:getPunktV4(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung,0)
						}
						let punktdritte = {
								x:i,
								y:getPunktV4(i,funktionenListe[funktionenListe.length-1].dritteAbleitung,0)
						}
						funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteRechtsVonNull.push(punkterste);
						funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteRechtsVonNull.push(punktzweite);
						funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteRechtsVonNull.push(punktdritte);
						let punktVergroessertErste = {
								x:i*vergroesserung,
								y:getPunktV4(i,funktionenListe[funktionenListe.length-1].ersteAbleitung,0)*vergroesserung
						}
						let punktVergroessertZweite = {
								x:i*vergroesserung,
								y:getPunktV4(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung,0)*vergroesserung
						}
						let punktVergroessertDritte = {
								x:i*vergroesserung,
								y:getPunktV4(i,funktionenListe[funktionenListe.length-1].dritteAbleitung,0)*vergroesserung
						}
						funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessertErste);
						funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessertZweite);
						funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteRechtsVonNullVergroessert.push(punktVergroessertDritte);
			
					}
					for(let i=0;i>-1000;i-=0.1){
						
						let punkterste = {
								x:i,
								y:getPunktV4(i,funktionenListe[funktionenListe.length-1].ersteAbleitung,0)
						}
						let punktzweite = {
								x:i,
								y:getPunktV4(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung,0)
						}
						let punktdritte = {
								x:i,
								y:getPunktV4(i,funktionenListe[funktionenListe.length-1].dritteAbleitung,0)
						}
						funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteLinksVonNull.push(punkterste);
						funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteLinksVonNull.push(punktzweite);
						funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteLinksVonNull.push(punktdritte);
				
						let punktVergroessErterste = {
								x:i*vergroesserung,
								y:getPunktV4(i,funktionenListe[funktionenListe.length-1].ersteAbleitung,0)*vergroesserung
						}
						let punktVergroessertZweite = {
								x:i*vergroesserung,
								y:getPunktV4(i,funktionenListe[funktionenListe.length-1].zweiteAbleitung,0)*vergroesserung
						}
						let punktVergroessertDritte = {
								x:i*vergroesserung,
								y:getPunktV4(i,funktionenListe[funktionenListe.length-1].dritteAbleitung,0)*vergroesserung
						}
						funktionenListe[funktionenListe.length-1].ersteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessErterste);
						funktionenListe[funktionenListe.length-1].zweiteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessertZweite);
						funktionenListe[funktionenListe.length-1].dritteAbleitung.punkteLinksVonNullVergroessert.push(punktVergroessertDritte);
						
					}
				}
				
		
				

				
				funktionenVorschau = 0;
			}
		}
	});
}

function zeichneLegende(){
	if(funktionenListe.length>0){
		let abstand = 30;
		let hoeheLegende = funktionenListe.length*abstand+25;
		let anzahlStrings = 0;
		for(let i=0;i<funktionenListe.length;i++){
			if(funktionenListe[i].ersteAbleitungAnzeigen){
				hoeheLegende += abstand;
			}
			if(funktionenListe[i].zweiteAbleitungAnzeigen){
				hoeheLegende += abstand;
			}
			if(funktionenListe[i].dritteAbleitungAnzeigen){
				hoeheLegende += abstand;
			}
		}
		roundRect(0, 0, 370, hoeheLegende, 10, true, true,'rgba(150,150,150,0.7)');
		let maxBuchstabenlaengeLegende=30;
		for(let i=0;i<funktionenListe.length;i++){
			canvasContext.font = '20px Calibri';
//			canvasContext.fillStyle = 'rgba(50,50,200,1)';
			canvasContext.fillStyle = 'rgba(' + String(farbenArrayFunktionen[i].r) + ',' + String(farbenArrayFunktionen[i].g) + ',' + String(farbenArrayFunktionen[i].b) + ',' + String(farbenArrayFunktionen[i].a) + ')';
			canvasContext.textAlign = "left";
			if(funktionenListe[i].inhaltKnotenString.length>maxBuchstabenlaengeLegende){
				canvasContext.fillText( buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString.substring(0,28)+"...", 20, (1+(anzahlStrings++))*abstand);
			}else{
				canvasContext.fillText( buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString, 20, (1+(anzahlStrings++))*abstand);
			}
			
			if(funktionenListe[i].ersteAbleitungAnzeigen){
				canvasContext.font = '20px Calibri';
//				canvasContext.fillStyle = 'rgba(50,50,200,1)';
				canvasContext.fillStyle = 'rgba(' + String(farbenArrayFunktionenErsteAbleitung[i].r) + ',' + String(farbenArrayFunktionenErsteAbleitung[i].g) + ',' + String(farbenArrayFunktionenErsteAbleitung[i].b) + ',' + String(farbenArrayFunktionenErsteAbleitung[i].a) + ')';
				canvasContext.textAlign = "left";
				if(funktionenListe[i].ersteAbleitung.inhaltKnotenString.length>maxBuchstabenlaengeLegende){
					canvasContext.fillText( buchstabenArray[i] + "'(x) = " + funktionenListe[i].ersteAbleitung.inhaltKnotenString.substring(0,28)+"...", 20, (1+(anzahlStrings++))*abstand);
				}else{
					canvasContext.fillText( buchstabenArray[i] + "'(x) = " + funktionenListe[i].ersteAbleitung.inhaltKnotenString, 20, (1+(anzahlStrings++))*abstand);
				}
				
			}
			if(funktionenListe[i].zweiteAbleitungAnzeigen){
				canvasContext.font = '20px Calibri';
//				canvasContext.fillStyle = 'rgba(50,50,200,1)';
				canvasContext.fillStyle = 'rgba(' + String(farbenArrayFunktionenZweiteAbleitung[i].r) + ',' + String(farbenArrayFunktionenZweiteAbleitung[i].g) + ',' + String(farbenArrayFunktionenZweiteAbleitung[i].b) + ',' + String(farbenArrayFunktionenZweiteAbleitung[i].a) + ')';
				canvasContext.textAlign = "left";
				if(funktionenListe[i].zweiteAbleitung.inhaltKnotenString.length>maxBuchstabenlaengeLegende){
					canvasContext.fillText( buchstabenArray[i] + "''(x) = " + funktionenListe[i].zweiteAbleitung.inhaltKnotenString.substring(0,28)+"...", 20, (1+(anzahlStrings++))*abstand);
				}else{
					canvasContext.fillText( buchstabenArray[i] + "''(x) = " + funktionenListe[i].zweiteAbleitung.inhaltKnotenString, 20, (1+(anzahlStrings++))*abstand);
				}		
			}
			if(funktionenListe[i].dritteAbleitungAnzeigen){
				canvasContext.font = '20px Calibri';
//				canvasContext.fillStyle = 'rgba(50,50,200,1)';
				canvasContext.fillStyle = 'rgba(' + String(farbenArrayFunktionenDritteAbleitung[i].r) + ',' + String(farbenArrayFunktionenDritteAbleitung[i].g) + ',' + String(farbenArrayFunktionenDritteAbleitung[i].b) + ',' + String(farbenArrayFunktionenDritteAbleitung[i].a) + ')';
				canvasContext.textAlign = "left";
				if(funktionenListe[i].dritteAbleitung.inhaltKnotenString.length>maxBuchstabenlaengeLegende){
					canvasContext.fillText( buchstabenArray[i] + "'''(x) = " + funktionenListe[i].dritteAbleitung.inhaltKnotenString.substring(0,28)+"...", 20, (1+(anzahlStrings++))*abstand);
				}else{
					canvasContext.fillText( buchstabenArray[i] + "'''(x) = " + funktionenListe[i].dritteAbleitung.inhaltKnotenString, 20, (1+(anzahlStrings++))*abstand);
				}
			}
		}
	}
	
}


function zeichneInfoLeiste(){	
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			if(aktiverReiter==1){
				reiter1Aktiv(i);
			}else if (aktiverReiter==2){		
				reiter2Aktiv(i)
			}else if (aktiverReiter==3){
				reiter3Aktiv(i);
			}else if (aktiverReiter==4){
				reiter4Aktiv(i);
			}else if (aktiverReiter==5){
				reiter5Aktiv(i);
			} else if(aktiverReiter==6){
				if(zeigeInhaltReiter6===1){
					reiter61GeradengleichungNullstellen(i);
				}else if(zeigeInhaltReiter6===2){
					reiter62MitternachtsformelNullstellen(i);
				}else if(zeigeInhaltReiter6===3){
					reiter63PQFormelNullstellen(i);
				}else if(zeigeInhaltReiter6===4){
					reiter64SatzVonVietaNullstellen(i);
				}else if(zeigeInhaltReiter6===5){
					reiter65NewtonVerfahrenNullstellen(i);
				}else if(zeigeInhaltReiter6===6){
					reiter66RegulaFalsiNullstellen(i);
				}
				
				else if(zeigeInhaltReiter6===7){
					reiter67GeradengleichungExtremstellen(i);
				}else if(zeigeInhaltReiter6===8){
					reiter68MitternachtsformelExtremstellen(i);
				}else if(zeigeInhaltReiter6===9){
					reiter69PQFormelExtremstellen(i);
				}else if(zeigeInhaltReiter6===10){
					reiter610SatzVonVietaExtremstellen(i);
				}else if(zeigeInhaltReiter6===11){
					reiter611NewtonVerfahrenExtremstellen(i);
				}else if(zeigeInhaltReiter6===12){
					reiter612RegulaFalsiExtremstellen(i);
				}
				
				else if(zeigeInhaltReiter6===13){
					reiter613GeradengleichungWendepunkte(i);
				}else if(zeigeInhaltReiter6===14){
					reiter614MitternachtsformelWendepunkte(i);
				}else if(zeigeInhaltReiter6===15){
					reiter615PQFormelWendepunkte(i);
				}else if(zeigeInhaltReiter6===16){
					reiter616SatzVonVietaWendepunkte(i);
				}else if(zeigeInhaltReiter6===17){
					reiter617NewtonVerfahrenWendepunkte(i);
				}else if(zeigeInhaltReiter6===18){
					reiter618RegulaFalsiWendepunkte(i);
				}
				
				else if(zeigeInhaltReiter6===19){
					reiter619GeradengleichungPolstellen(i);
				}else if(zeigeInhaltReiter6===20){
					reiter620MitternachtsformelPolstellen(i);
				}else if(zeigeInhaltReiter6===21){
					reiter621PQFormelPolstellen(i);
				}else if(zeigeInhaltReiter6===22){
					reiter622SatzVonVietaPolstellen(i);
				}else if(zeigeInhaltReiter6===23){
					reiter623NewtonVerfahrenPolstellen(i);
				}else if(zeigeInhaltReiter6===24){
					reiter624RegulaFalsiPolstellen(i);
				}
			}
		}
	}
}

let zeigeInhaltReiter6 = 0;



function zeichneKoordinatenkreuz() {
	let steps = 1;
	let strichhoehe = 0.1;
	let textEntfernung = 0.5;
	let von = -1000;
	let bis = 1000;

	//Zeichnen des Koordinatenkreuz
	canvasContext.beginPath();
//	DrawLine(-(canvas.width/2), 0, canvas.width/2, 0, 200, 200, 200, 1);
	canvasContext.strokeStyle = 'rgba(200,200,200,1)';
	canvasContext.lineTo(0 , (canvas.height / 2) + verschiebungDurchBenutzer.y);
	canvasContext.lineTo(canvas.width, (canvas.height / 2) + verschiebungDurchBenutzer.y);
	canvasContext.stroke();

	canvasContext.font = '20px Calibri';
	canvasContext.fillStyle = 'rgba(200,200,200,1)';
	canvasContext.textAlign = "center";
	canvasContext.fillText("y", (canvas.width/2)+verschiebungDurchBenutzer.x-30, 30);
	
	canvasContext.beginPath();
//	DrawLine(0, -(canvas.height/2), 0, canvas.height/2, 200, 200, 200, 1);
	
	canvasContext.strokeStyle = 'rgba(200,200,200,1)';
	canvasContext.lineTo((canvas.width / 2) + verschiebungDurchBenutzer.x,  0);
	canvasContext.lineTo((canvas.width / 2) + verschiebungDurchBenutzer.x, canvas.height);
	canvasContext.stroke();
	
	canvasContext.font = '20px Calibri';
	canvasContext.fillStyle = 'rgba(200,200,200,1)';
	canvasContext.textAlign = "center";
	canvasContext.fillText("x", (canvas.width)-30, ((canvas.height/2)+verschiebungDurchBenutzer.y-30) );

	//Zeichnen der einheitsstriche
	let aufZehnerRundenX=Math.floor((verschiebungDurchBenutzer.x/steps));		//durch das subtrahieren der verschiebungen wander der strich nicht mehr, daher wird nur umgekehrt modulo vom start und endwert der for schleife abgezogen
	aufZehnerRundenX=aufZehnerRundenX*steps;									//umgekerht modulo heist nicht den rest abziehen sondern das abgerundete ohne rest
	//damit die Striche nur innerhalb der sichtbaren Fläche gezeichnet werden werden die Verschiebungen vom den Starwert und Endwert subtrahiert 
	//Die einheitsstriche müssen von innen nach ausen gezeichnet werden,damit die Striche an den richtigen stellen sind und nicht verschoben gezeichnet werden 
	let ersterDurchgangUebersrpingen=false;
	j=0;
	startPunkt=0;
	let beschriftungNurEinmal=true;
	if(verschiebungDurchBenutzer.x<-(canvas.width/2)){
		startPunkt = -(((canvas.width/2)+verschiebungDurchBenutzer.x)/vergroesserung);
		startPunkt = -(Math.floor(startPunkt/steps)*steps);
		j=startPunkt/steps;
	}
	endPunkt=-(((canvas.width/2)+verschiebungDurchBenutzer.x)/vergroesserung);

	for(let i=startPunkt;i>endPunkt;i-=steps,j--){
		
		if(!ersterDurchgangUebersrpingen){
			ersterDurchgangUebersrpingen=true;
		}else{
			canvasContext.beginPath();
			DrawLineColor(i, 0+strichhoehe, i, 0-strichhoehe, 200, 200, 200, 1,true,true);
			canvasContext.stroke();
			
			
			canvasContext.beginPath();			
			canvasContext.beginPath();
			DrawLineColor(i, canvas.width, i, -canvas.width, 200, 200, 200, 0.2 ,false,false);
			canvasContext.stroke();
			canvasContext.stroke();
			
			DrawText(i, 0+textEntfernung, i, 0, j, false, true, 200, 200, 200, 1);
		}
	}
	ersterDurchgangUebersrpingen=false;
	j=0;
	startPunkt=0;
	if(verschiebungDurchBenutzer.x<-(canvas.width/2)){
		startPunkt = -(((canvas.width/2)+verschiebungDurchBenutzer.x)/vergroesserung);
		startPunkt = (Math.floor(startPunkt/steps)*steps);
		j=startPunkt/steps;
	}
	endPunkt=(((canvas.width/2)-verschiebungDurchBenutzer.x)/vergroesserung);

	for(let i=startPunkt;i<endPunkt;i+=steps,j++){
		
		if(!ersterDurchgangUebersrpingen){
			ersterDurchgangUebersrpingen=true;
		}else{
			canvasContext.beginPath();
			DrawLineColor(i, 0+strichhoehe, i, 0-strichhoehe, 200, 200, 200, 1,true,true);
			canvasContext.stroke();
			
			canvasContext.beginPath();
			DrawLineColor(i, canvas.width, i, -canvas.width, 200, 200, 200, 0.2 ,false,false);
			canvasContext.stroke();
			

			DrawText(i, 0+textEntfernung, i, 0, j, false, true, 200, 200, 200, 1);
			if(beschriftungNurEinmal){
				if(i>endPunkt-1){
//					DrawText(i, 0+(textEntfernung*2), i, 0, "x", false, true, 200, 200, 200, 1);				
					beschriftungNurEinmal=false;
				}			
			}
		}
	}

	ersterDurchgangUebersrpingen=false;
	j=0;
	startPunkt=0;
	if(verschiebungDurchBenutzer.y<-(canvas.height/2)){
		startPunkt = -(((canvas.height/2)+verschiebungDurchBenutzer.y)/vergroesserung);
		startPunkt = (Math.floor(startPunkt/steps)*steps);
		j=startPunkt/steps;
	}
	
	beschriftungNurEinmal=true;
	endPunkt=-(((canvas.height/2)+verschiebungDurchBenutzer.y)/vergroesserung);
	for(let i=startPunkt;i>endPunkt;i-=steps,j++){

		if(!ersterDurchgangUebersrpingen){
			ersterDurchgangUebersrpingen=true;
		}else{
			canvasContext.beginPath();
			DrawLineColor(0+strichhoehe, i, 0-strichhoehe, i, 200, 200, 200, 1,true,true);
			canvasContext.stroke();
			
			canvasContext.beginPath();
			DrawLineColor(canvas.height, i, -canvas.height, i, 200, 200, 200, 0.2 ,false,false);
			canvasContext.stroke();
			
			
			DrawText(0+textEntfernung, i, i, 0, j, false, true, 200, 200, 200, 1);
			if(beschriftungNurEinmal){
				if(i<endPunkt+1){
					
					beschriftungNurEinmal=false;
				}			
			}
		}
	}
	ersterDurchgangUebersrpingen=false;
	j=0;
	startPunkt=0;
	if(verschiebungDurchBenutzer.y<-(canvas.height/2)){
		startPunkt = (((canvas.height/2)+verschiebungDurchBenutzer.y)/vergroesserung);
		startPunkt = (Math.floor(startPunkt/steps)*steps);
		j=-startPunkt/steps;
	}
	endPunkt=(((canvas.height/2)-verschiebungDurchBenutzer.y)/vergroesserung);

	for(let i=startPunkt;i<endPunkt;i+=steps,j--){

		if(!ersterDurchgangUebersrpingen){
			ersterDurchgangUebersrpingen=true;
		}else{
			canvasContext.beginPath();
			DrawLineColor(0+strichhoehe, i, 0-strichhoehe, i, 200, 200, 200, 1,true,true);
			canvasContext.stroke();
			
			canvasContext.beginPath();
			DrawLineColor(canvas.height, i, -canvas.height, i, 200, 200, 200, 0.2 ,false,false);
			canvasContext.stroke();
			
			DrawText(0+textEntfernung, i, i, 0, j, false, true, 200, 200, 200, 1);
			
		}
	}

}

function ClearCanvas() {
	// canvasContext.clearRect(0,0,innerWidth,innerHeight);
	canvasContext.fillStyle = backgroundColor;
	canvasContext.fillRect(0, 0, window.innerWidth, window.innerHeight);

}

let equationOld = "";
function checkEingabe(){
	let equation;
	if(document.getElementById("equationForm")!=null){
		equation = document.getElementById("equationForm").value;
	}
	if(equation!=null){
		if(!leererString(equation)){
			if(equation !== equationOld){
				equationOld=equation;
				if(checkAufFalscheSymbole(equation)&&checkKlammernKorrekt(equation)&&checkDerSyntax(equation)&&checkObVollständigerAusdruck(equation)){
					let rootSyntaxbaum = new FunktionAlsVektorSyntaxbaum();	
					funktionenVorschau = rootSyntaxbaum;
	
					splitEquationBuffer(rootSyntaxbaum, equation);
					let funktionGekuerzt = funktionenVorschau; 
					kuerzeSyntaxbaumGebrochenRational(funktionGekuerzt);
					funktionenVorschau.gekürzt = funktionGekuerzt;
					
					for(let i=0;i<1000;i+=0.1){
						let punkt = {
								x:i,
								y:getPunkt(i,funktionenVorschau.gekürzt)
						}
						rootSyntaxbaum.punkteRechtsVonNull.push(punkt);
						let punktVergroessert = {
								x:i*vergroesserung,
								y:getPunkt(i,funktionenVorschau.gekürzt)*vergroesserung
						}
						rootSyntaxbaum.punkteRechtsVonNullVergroessert.push(punktVergroessert);
					}
					for(let i=0;i>-1000;i-=0.1){
						let punkt = {
								x:i,
								y:getPunkt(i,funktionenVorschau.gekürzt)
						}
						rootSyntaxbaum.punkteLinksVonNull.push(punkt);
						let punktVergroessert = {
								x:i*vergroesserung,
								y:getPunkt(i,funktionenVorschau.gekürzt)*vergroesserung
						}
						rootSyntaxbaum.punkteLinksVonNullVergroessert.push(punktVergroessert);
					}
				}
			}else{			
				return;
			}
		}else{
			funktionenVorschau = 0;
		}
	}
	
	equation = document.getElementById("equationFormAlternativ").value;
	if(!leererString(equation)){
		if(equation !== equationOld){
			equationOld=equation;
			if(checkAufFalscheSymbole(equation)&&checkKlammernKorrekt(equation)&&checkDerSyntax(equation)&&checkObVollständigerAusdruck(equation)){
				let rootSyntaxbaum = new FunktionAlsVektorSyntaxbaum();	
				funktionenVorschau = rootSyntaxbaum;

				splitEquationBuffer(rootSyntaxbaum, equation);
				let funktionGekuerzt = funktionenVorschau; 
				kuerzeSyntaxbaumGebrochenRational(funktionGekuerzt);
				funktionenVorschau.gekürzt = funktionGekuerzt;
				
				for(let i=0;i<1000;i+=0.1){
					let punkt = {
							x:i,
							y:getPunkt(i,funktionenVorschau.gekürzt)
					}
					rootSyntaxbaum.punkteRechtsVonNull.push(punkt);
					let punktVergroessert = {
							x:i*vergroesserung,
							y:getPunkt(i,funktionenVorschau.gekürzt)*vergroesserung
					}
					rootSyntaxbaum.punkteRechtsVonNullVergroessert.push(punktVergroessert);
				}
				for(let i=0;i>-1000;i-=0.1){
					let punkt = {
							x:i,
							y:getPunkt(i,funktionenVorschau.gekürzt)
					}
					rootSyntaxbaum.punkteLinksVonNull.push(punkt);
					let punktVergroessert = {
							x:i*vergroesserung,
							y:getPunkt(i,funktionenVorschau.gekürzt)*vergroesserung
					}
					rootSyntaxbaum.punkteLinksVonNullVergroessert.push(punktVergroessert);
				}
			}
		}else{			
			return;
		}
	}else{
		funktionenVorschau = 0;
	}
}

let eingabeAlsVerketteteListe = null;
function checkEingabeV2(){
	let equation = "";
	if(document.getElementById("equationFormAlternativ")!=null){
		equation = document.getElementById("equationFormAlternativ").value;
	}
	if(!leererString(equation)){
		if(equation !== equationOld){
			equationOld=equation;
			if(checkAufFalscheSymbole(equation)&&checkKlammernKorrekt(equation)&&checkDerSyntax(equation)&&checkObVollständigerAusdruck(equation)&&checkObKorrekteKommaZahl(equation)){

//				let tree = math.parse(equation);
//				let erg = math.derivative(equation, "x"); 
//				let text = tree.toString();
				let rootSyntaxbaum = new FunktionAlsVektorSyntaxbaum();	
				funktionenVorschau = rootSyntaxbaum;
				let polynomListe = [];
				
				eingabeAlsVerketteteListe = convertiereStringZuVerketteteListe(equation);
				
				erstelleSyntaxBaumV4(rootSyntaxbaum, equation);
				let funktionGekuerzt = funktionenVorschau; 
				//kuerzeSyntaxbaumGebrochenRationalV3(funktionGekuerzt);
				//funktionenVorschau.gekürzt = funktionGekuerzt;
				
				funktionenVorschau.ersteAbleitung = funktionAbleitenSyntaxbaum(funktionGekuerzt);
				funktionenVorschau.zweiteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenVorschau.ersteAbleitung);
				funktionenVorschau.ersteAbleitung.ersteAbleitung = funktionenVorschau.zweiteAbleitung;
				funktionenVorschau.dritteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenVorschau.zweiteAbleitung);
				funktionenVorschau.ersteAbleitung.zweiteAbleitung = funktionenVorschau.dritteAbleitung;
				funktionenVorschau.zweiteAbleitung.ersteAbleitung = funktionenVorschau.dritteAbleitung;
				funktionenVorschau.ersteAbleitung.dritteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenVorschau.dritteAbleitung);
				funktionenVorschau.zweiteAbleitung.zweiteAbleitung = funktionenVorschau.ersteAbleitung.dritteAbleitung;
				funktionenVorschau.dritteAbleitung.ersteAbleitung = funktionenVorschau.ersteAbleitung.dritteAbleitung;
				funktionenVorschau.zweiteAbleitung.dritteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenVorschau.zweiteAbleitung.zweiteAbleitung);
				funktionenVorschau.dritteAbleitung.zweiteAbleitung = funktionenVorschau.zweiteAbleitung.dritteAbleitung;
				funktionenVorschau.dritteAbleitung.dritteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenVorschau.dritteAbleitung.zweiteAbleitung);
				
				for(let i=0;i<1000;i+=0.1){
					let punkt = {
							x:i,
//							y:getPunktV3(i,funktionenVorschau.gekürzt)
							y:getPunktV4(i,funktionenVorschau,0)
					}
					rootSyntaxbaum.punkteRechtsVonNull.push(punkt);
					let punktVergroessert = {
							x:i*vergroesserung,
//							y:getPunktV3(i,funktionenVorschau.gekürzt)*vergroesserung
							y:getPunktV4(i,funktionenVorschau,0)*vergroesserung
					}
					rootSyntaxbaum.punkteRechtsVonNullVergroessert.push(punktVergroessert);
				}
				for(let i=0;i>-1000;i-=0.1){
					let punkt = {
							x:i,
//							y:getPunktV3(i,funktionenVorschau.gekürzt)
							y:getPunktV4(i,funktionenVorschau,0)
					}
					rootSyntaxbaum.punkteLinksVonNull.push(punkt);
					let punktVergroessert = {
							x:i*vergroesserung,
							y:getPunktV4(i,funktionenVorschau,0)*vergroesserung
//							y:getPunktV3(i,funktionenVorschau.gekürzt)*vergroesserung
					}
					rootSyntaxbaum.punkteLinksVonNullVergroessert.push(punktVergroessert);
				}
				
//				if(einfachesGanzrationalesPolynom(eingabeAlsVerketteteListe, polynomListe)){
//					funktionenVorschau.inhaltKnotenString = equation;
//					funktionenVorschau.einfachGanzrational = true; 
//					funktionenVorschau.gekuerzt = funktionKuerzenEinfachGanzrational(polynomListe);
//					funktionenVorschau.ersteAbleitung = new FunktionAlsVektorSyntaxbaum();	
//					funktionenVorschau.ersteAbleitung.gekuerzt = funktionAbleitenEinfachGanzrational(funktionenVorschau.gekuerzt);
//					
//					funktionenVorschau.zweiteAbleitung = new FunktionAlsVektorSyntaxbaum();	
//					funktionenVorschau.ersteAbleitung.ersteAbleitung = new FunktionAlsVektorSyntaxbaum();	
//					funktionenVorschau.dritteAbleitung = new FunktionAlsVektorSyntaxbaum();	
//					funktionenVorschau.ersteAbleitung.zweiteAbleitung = new FunktionAlsVektorSyntaxbaum();	
//					funktionenVorschau.zweiteAbleitung.ersteAbleitung = new FunktionAlsVektorSyntaxbaum();	
//					funktionenVorschau.ersteAbleitung.dritteAbleitung = new FunktionAlsVektorSyntaxbaum();	
//					funktionenVorschau.zweiteAbleitung.zweiteAbleitung = new FunktionAlsVektorSyntaxbaum();	
//					funktionenVorschau.dritteAbleitung.ersteAbleitung = new FunktionAlsVektorSyntaxbaum();	
//					funktionenVorschau.zweiteAbleitung.dritteAbleitung = new FunktionAlsVektorSyntaxbaum();	
//					funktionenVorschau.dritteAbleitung.zweiteAbleitung = new FunktionAlsVektorSyntaxbaum();	
//					funktionenVorschau.dritteAbleitung.dritteAbleitung = new FunktionAlsVektorSyntaxbaum();	
//
//					
//					funktionenVorschau.zweiteAbleitung.gekuerzt = funktionAbleitenEinfachGanzrational(funktionenVorschau.ersteAbleitung.gekuerzt);
//					funktionenVorschau.ersteAbleitung.ersteAbleitung.gekuerzt = funktionenVorschau.zweiteAbleitung.gekuerzt;
//					funktionenVorschau.dritteAbleitung.gekuerzt = funktionAbleitenEinfachGanzrational(funktionenVorschau.zweiteAbleitung.gekuerzt);
//					funktionenVorschau.ersteAbleitung.zweiteAbleitung.gekuerzt = funktionenVorschau.dritteAbleitung.gekuerzt;
//					funktionenVorschau.zweiteAbleitung.ersteAbleitung.gekuerzt = funktionenVorschau.dritteAbleitung.gekuerzt;
//					funktionenVorschau.ersteAbleitung.dritteAbleitung.gekuerzt = funktionAbleitenEinfachGanzrational(funktionenVorschau.dritteAbleitung.gekuerzt);
//					funktionenVorschau.zweiteAbleitung.zweiteAbleitung.gekuerzt = funktionenVorschau.ersteAbleitung.dritteAbleitung.gekuerzt;
//					funktionenVorschau.dritteAbleitung.ersteAbleitung.gekuerzt = funktionenVorschau.ersteAbleitung.dritteAbleitung.gekuerzt;
//					funktionenVorschau.zweiteAbleitung.dritteAbleitung.gekuerzt = funktionAbleitenEinfachGanzrational(funktionenVorschau.zweiteAbleitung.zweiteAbleitung.gekuerzt);
//					funktionenVorschau.dritteAbleitung.zweiteAbleitung.gekuerzt = funktionenVorschau.zweiteAbleitung.dritteAbleitung.gekuerzt;
//					funktionenVorschau.dritteAbleitung.dritteAbleitung.gekuerzt = funktionAbleitenGebrochenRationalV3(funktionenVorschau.dritteAbleitung.zweiteAbleitung.gekuerzt);
//
//					
//					for(let i=0;i<1000;i+=0.1){
//						let punkt = {
//								x:i,
//								y:getPunktEinfachesGanzrational(i,funktionenVorschau.gekuerzt)								
//						}
//						rootSyntaxbaum.punkteRechtsVonNull.push(punkt);
//						let punktVergroessert = {
//								x:i*vergroesserung,
//								y:getPunktEinfachesGanzrational(i,funktionenVorschau.gekuerzt)*vergroesserung								
//						}
//						rootSyntaxbaum.punkteRechtsVonNullVergroessert.push(punktVergroessert);
//					}
//					for(let i=0;i>-1000;i-=0.1){
//						let punkt = {
//								x:i,
//								y:getPunktEinfachesGanzrational(i,funktionenVorschau.gekuerzt)							
//						}
//						rootSyntaxbaum.punkteLinksVonNull.push(punkt);
//						let punktVergroessert = {
//								x:i*vergroesserung,
//								y:getPunktEinfachesGanzrational(i,funktionenVorschau.gekuerzt)*vergroesserung
//						}
//						rootSyntaxbaum.punkteLinksVonNullVergroessert.push(punktVergroessert);
//					}
//					
//				}else{
//					erstelleSyntaxBaumV3(rootSyntaxbaum, equation);
//					
//					let funktionGekuerzt = funktionenVorschau; 
//					kuerzeSyntaxbaumGebrochenRationalV3(funktionGekuerzt);
//					funktionenVorschau.gekürzt = funktionGekuerzt;
//					
//					funktionenVorschau.ersteAbleitung = funktionAbleitenGebrochenRationalV3(funktionGekuerzt);
//					funktionenVorschau.zweiteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenVorschau.ersteAbleitung);
//					funktionenVorschau.ersteAbleitung.ersteAbleitung = funktionenVorschau.zweiteAbleitung;
//					funktionenVorschau.dritteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenVorschau.zweiteAbleitung);
//					funktionenVorschau.ersteAbleitung.zweiteAbleitung = funktionenVorschau.dritteAbleitung;
//					funktionenVorschau.zweiteAbleitung.ersteAbleitung = funktionenVorschau.dritteAbleitung;
//					funktionenVorschau.ersteAbleitung.dritteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenVorschau.dritteAbleitung);
//					funktionenVorschau.zweiteAbleitung.zweiteAbleitung = funktionenVorschau.ersteAbleitung.dritteAbleitung;
//					funktionenVorschau.dritteAbleitung.ersteAbleitung = funktionenVorschau.ersteAbleitung.dritteAbleitung;
//					funktionenVorschau.zweiteAbleitung.dritteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenVorschau.zweiteAbleitung.zweiteAbleitung);
//					funktionenVorschau.dritteAbleitung.zweiteAbleitung = funktionenVorschau.zweiteAbleitung.dritteAbleitung;
//					funktionenVorschau.dritteAbleitung.dritteAbleitung = funktionAbleitenGebrochenRationalV3(funktionenVorschau.dritteAbleitung.zweiteAbleitung);
////					funktionenVorschau.stammfunktion = 
//					
////					displayButtons(funktionenVorschau);
////					berechneKurvenDiskusionsPunkteV3(funktionenVorschau);
//					
//					for(let i=0;i<1000;i+=0.1){
//						let punkt = {
//								x:i,
////								y:getPunktV3(i,funktionenVorschau.gekürzt)
//								y:getPunktV3(i,funktionenVorschau,0)
//						}
//						rootSyntaxbaum.punkteRechtsVonNull.push(punkt);
//						let punktVergroessert = {
//								x:i*vergroesserung,
////								y:getPunktV3(i,funktionenVorschau.gekürzt)*vergroesserung
//								y:getPunktV3(i,funktionenVorschau,0)*vergroesserung
//						}
//						rootSyntaxbaum.punkteRechtsVonNullVergroessert.push(punktVergroessert);
//					}
//					for(let i=0;i>-1000;i-=0.1){
//						let punkt = {
//								x:i,
////								y:getPunktV3(i,funktionenVorschau.gekürzt)
//								y:getPunktV3(i,funktionenVorschau,0)
//						}
//						rootSyntaxbaum.punkteLinksVonNull.push(punkt);
//						let punktVergroessert = {
//								x:i*vergroesserung,
//								y:getPunktV3(i,funktionenVorschau,0)*vergroesserung
////								y:getPunktV3(i,funktionenVorschau.gekürzt)*vergroesserung
//						}
//						rootSyntaxbaum.punkteLinksVonNullVergroessert.push(punktVergroessert);
//					}
//				}
				
			}
		}else{			
			return;
		}
	}else{
		funktionenVorschau = 0;
	}
}


function zeichneFunktionsgraphen(){
	if(funktionenListe.length>0){
		for(let i=0;i<funktionenListe.length;i++){
			if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			
				if(funktionenListe[i].tangenteAnzeigen){
					for (let j = 1; j < punkteTangenteLinksVonNull.length; j++) {
						canvasContext.beginPath();
						DrawLineColor(punkteTangenteLinksVonNull[j].x, -punkteTangenteLinksVonNull[j].y, punkteTangenteLinksVonNull[j-1].x , -punkteTangenteLinksVonNull[j-1].y, farbenArrayFunktionen[i].r, farbenArrayFunktionen[i].g, farbenArrayFunktionen[i].b, farbenArrayFunktionen[i].a, false,false);
						canvasContext.stroke();
					}
					for (let j = 1; j < punkteTangenteRechtsVonNull.length; j++) {
						canvasContext.beginPath();
						DrawLineColor(punkteTangenteRechtsVonNull[j].x, -punkteTangenteRechtsVonNull[j].y, punkteTangenteRechtsVonNull[j-1].x , -punkteTangenteRechtsVonNull[j-1].y, farbenArrayFunktionen[i].r, farbenArrayFunktionen[i].g, farbenArrayFunktionen[i].b, farbenArrayFunktionen[i].a, false,false);
						canvasContext.stroke();
					}
				}
				if(funktionenListe[i].normaleAnzeigen){
					for (let j = 1; j < punkteNormaleRechtsVonNull.length; j++) {
						canvasContext.beginPath();
						DrawLineColor(punkteNormaleRechtsVonNull[j].x, -punkteNormaleRechtsVonNull[j].y, punkteNormaleRechtsVonNull[j-1].x , -punkteNormaleRechtsVonNull[j-1].y,farbenArrayFunktionen[i].r, farbenArrayFunktionen[i].g, farbenArrayFunktionen[i].b, farbenArrayFunktionen[i].a, false,false);
						canvasContext.stroke();
					}
					for (let j = 1; j < punkteNormaleLinksVonNull.length; j++) {
						canvasContext.beginPath();
						DrawLineColor(punkteNormaleLinksVonNull[j].x, -punkteNormaleLinksVonNull[j].y, punkteNormaleLinksVonNull[j-1].x , -punkteNormaleLinksVonNull[j-1].y, farbenArrayFunktionen[i].r, farbenArrayFunktionen[i].g, farbenArrayFunktionen[i].b, farbenArrayFunktionen[i].a, false,false);
						canvasContext.stroke();
					}
				}if(funktionenListe[i].krümmungskreisAnzeigen){
					canvasContext.beginPath();
					canvasContext.fillStyle = "rgba(70,70,255,1)";
					DrawCircle(xKreisKruemmung, -yKreisKruemmung, radiusKruemmung*2, farbenArrayFunktionen[i].r, farbenArrayFunktionen[i].g, farbenArrayFunktionen[i].b, farbenArrayFunktionen[i].a,true,true);
					DrawCircle(xKreisKruemmung, -yKreisKruemmung, 0.1, farbenArrayFunktionen[i].r, farbenArrayFunktionen[i].g, farbenArrayFunktionen[i].b, farbenArrayFunktionen[i].a,false,false);
				}if(funktionenListe[i].nullstellenAnzeigen){
					for(let j=0;j<funktionenListe[i].nullstellen.length;j++){						
						DrawCircle(funktionenListe[i].nullstellen[j], 0, 0.1, farbeNullstellen.r, farbeNullstellen.g, farbeNullstellen.b, farbeNullstellen.a,true,false);
					}
				}if(funktionenListe[i].extremstellenAnzeigen){
					for(let j=0;j<funktionenListe[i].extremstellen.length;j++){
						canvasContext.stroke();
						canvasContext.beginPath();
						canvasContext.strokeStyle = 'rgba(' + String(farbeExtremstellen.r) + ',' + String(farbeExtremstellen.g) + ',' + String(farbeExtremstellen.b) + ',' + String(farbeExtremstellen.a) + ')';
						DrawLine(funktionenListe[i].extremstellen[j], 0);	
						if(funktionenListe[i].einfachGanzrational===true){
							DrawLine(funktionenListe[i].extremstellen[j], -getPunktEinfachesGanzrational(funktionenListe[i].extremstellen[j],funktionenListe[i].gekuerzt));	
							canvasContext.stroke();
							DrawCircle(funktionenListe[i].extremstellen[j], -getPunktEinfachesGanzrational(funktionenListe[i].extremstellen[j],funktionenListe[i].gekuerzt), 0.1, farbeExtremstellen.r, farbeExtremstellen.g, farbeExtremstellen.b, farbeExtremstellen.a,true,false);
						
						}else{
							DrawLine(funktionenListe[i].extremstellen[j], -getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i].gekürzt));	
							canvasContext.stroke();
							DrawCircle(funktionenListe[i].extremstellen[j], -getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i].gekürzt), 0.1, farbeExtremstellen.r, farbeExtremstellen.g, farbeExtremstellen.b, farbeExtremstellen.a,true,false);
						
						}
						
					}
				}if(funktionenListe[i].wendepunkteAnzeigen){
					for(let j=0;j<funktionenListe[i].wendepunkte.length;j++){
						canvasContext.stroke();
						canvasContext.beginPath();
						canvasContext.strokeStyle = 'rgba(' + String(farbeWendestellen.r) + ',' + String(farbeWendestellen.g) + ',' + String(farbeWendestellen.b) + ',' + String(farbeWendestellen.a) + ')';
						DrawLine(funktionenListe[i].wendepunkte[j], 0);	
						DrawLine(funktionenListe[i].wendepunkte[j], -getPunktEinfachesGanzrational(funktionenListe[i].wendepunkte[j],funktionenListe[i].gekuerzt));	
						canvasContext.stroke();
						DrawCircle(funktionenListe[i].wendepunkte[j], -getPunktEinfachesGanzrational(funktionenListe[i].wendepunkte[j],funktionenListe[i].gekuerzt), 0.1, farbeWendestellen.r, farbeWendestellen.g, farbeWendestellen.b, farbeWendestellen.a,true,false);
					}
				}if(funktionenListe[i].polstellenAnzeigen){
					for(let j=0;j<funktionenListe[i].polstellen.length;j++){
						canvasContext.stroke();
						canvasContext.beginPath();
						canvasContext.strokeStyle = 'rgba(' + String(farbePolstellen.r) + ',' + String(farbePolstellen.g) + ',' + String(farbePolstellen.b) + ',' + String(farbePolstellen.a) + ')';
						canvasContext.moveTo(funktionenListe[i].polstellen[j]*vergroesserung+verschiebungDurchBenutzer.x+(canvas.width / 2), 10 + canvas.height);
						canvasContext.lineTo(funktionenListe[i].polstellen[j]*vergroesserung+verschiebungDurchBenutzer.x+(canvas.width / 2), 10 + canvas.height);
						canvasContext.lineTo(funktionenListe[i].polstellen[j]*vergroesserung+verschiebungDurchBenutzer.x+(canvas.width / 2), -10);
						canvasContext.stroke();
						DrawCircle(funktionenListe[i].polstellen[j], 0, 0.1, farbePolstellen.r, farbePolstellen.g, farbePolstellen.b, farbePolstellen.a,true,false);
					}
				}if(funktionenListe[i].graphAnzeigen){
					DrawCircle(punktAmAusgewaehltenGraph.x,punktAmAusgewaehltenGraph.y, 0.2, 70, 70, 255, 1,true,false);
				}
			}
		}//(2^3+2*x-2)/(x-2)             (x^3-5*x-2)/(x^5+3*x+2)
	}

	for(let k=0;k<funktionenListe.length;k++){
		if(funktionenListe[k].graphAnzeigen){
			canvasContext.beginPath();
			canvasContext.strokeStyle = 'rgba(' + String(farbenArrayFunktionen[k].r) + ',' + String(farbenArrayFunktionen[k].g) + ',' + String(farbenArrayFunktionen[k].b) + ',' + String(farbenArrayFunktionen[k].a) + ')';
			let xOld=0;
			for(let i=0;i<funktionenListe[k].punkteRechtsVonNullVergroessert.length;i++){	
				let yTmp = (-funktionenListe[k].punkteRechtsVonNullVergroessert[i].y);
				for(let j=0;j<funktionenListe[k].polstellen.length;j++){
					
					if(xOld<funktionenListe[k].polstellen[j]&&funktionenListe[k].punkteRechtsVonNull[i].x>funktionenListe[k].polstellen[j]){
						canvasContext.stroke();
						canvasContext.beginPath();
					}
					
					if(i<funktionenListe[k].punkteRechtsVonNull.length-1){
						if(funktionenListe[k].punkteRechtsVonNull[i].x<funktionenListe[k].polstellen[j] && funktionenListe[k].punkteRechtsVonNull[i+1].x>funktionenListe[k].polstellen[j]){
							if((-funktionenListe[k].punkteRechtsVonNull[i].y)<0){
								canvasContext.lineTo(funktionenListe[k].punkteRechtsVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), -10);
							}
							else if((-funktionenListe[k].punkteRechtsVonNull[i].y)>0){
								canvasContext.lineTo(funktionenListe[k].punkteRechtsVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), 10 + canvas.height);
							}
							
						}
					}
					
					if(i>1){
						if(funktionenListe[k].punkteRechtsVonNull[i-1].x<funktionenListe[k].polstellen[j] && funktionenListe[k].punkteRechtsVonNull[i].x>funktionenListe[k].polstellen[j]){
							if((-funktionenListe[k].punkteRechtsVonNull[i].y)<0){
								canvasContext.lineTo(funktionenListe[k].punkteRechtsVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), -10);
							}
							else if((-funktionenListe[k].punkteRechtsVonNull[i].y)>0){
								canvasContext.lineTo(funktionenListe[k].punkteRechtsVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), 10 + canvas.height);
							}
						}
					}
					
				}
				
				DrawLineOhneVergroeserung(funktionenListe[k].punkteRechtsVonNullVergroessert[i].x, yTmp, false);	
				xOld=funktionenListe[k].punkteRechtsVonNull[i].x;
			}
			xOld=0;
			canvasContext.stroke();
			canvasContext.beginPath();
			canvasContext.strokeStyle = 'rgba(' + String(farbenArrayFunktionen[k].r) + ',' + String(farbenArrayFunktionen[k].g) + ',' + String(farbenArrayFunktionen[k].b) + ',' + String(farbenArrayFunktionen[k].a) + ')';
			for(let i=0;i<funktionenListe[k].punkteLinksVonNullVergroessert.length;i++){			
				let yTmp = (-funktionenListe[k].punkteLinksVonNullVergroessert[i].y);
				for(let j=0;j<funktionenListe[k].polstellen.length;j++){
					if(xOld>funktionenListe[k].polstellen[j]&&funktionenListe[k].punkteLinksVonNull[i].x<funktionenListe[k].polstellen[j]){
						canvasContext.stroke();
						canvasContext.beginPath();
					}
					
					if(i<funktionenListe[k].punkteLinksVonNull.length-2){
						if(funktionenListe[k].punkteLinksVonNull[i].x>funktionenListe[k].polstellen[j] && funktionenListe[k].punkteLinksVonNull[i+1].x<funktionenListe[k].polstellen[j]){
							if((-funktionenListe[k].punkteLinksVonNull[i].y)<0){
								canvasContext.lineTo(funktionenListe[k].punkteLinksVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), -10);
							}
							else if((-funktionenListe[k].punkteLinksVonNull[i].y)>0){
								canvasContext.lineTo(funktionenListe[k].punkteLinksVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), 10 + canvas.height);
							}
							
						}
					}
					
					if(i>1){
						if(funktionenListe[k].punkteLinksVonNull[i-1].x>funktionenListe[k].polstellen[j] && funktionenListe[k].punkteLinksVonNull[i].x<funktionenListe[k].polstellen[j]){
							if((-funktionenListe[k].punkteLinksVonNull[i].y)<0){
								canvasContext.lineTo(funktionenListe[k].punkteLinksVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), -10);
							}
							else if((-funktionenListe[k].punkteLinksVonNull[i].y)>0){
								canvasContext.lineTo(funktionenListe[k].punkteLinksVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), 10 + canvas.height);
							}
						}
					}
					
				}
				DrawLineOhneVergroeserung(funktionenListe[k].punkteLinksVonNullVergroessert[i].x, yTmp, false);	
				xOld=funktionenListe[k].punkteLinksVonNull[i].x;
			}
			canvasContext.stroke();
		}		

		if(funktionenListe[k].ersteAbleitungAnzeigen){
					canvasContext.beginPath();
					canvasContext.strokeStyle = 'rgba(' + String(farbenArrayFunktionenErsteAbleitung[k].r) + ',' + String(farbenArrayFunktionenErsteAbleitung[k].g) + ',' + String(farbenArrayFunktionenErsteAbleitung[k].b) + ',' + String(farbenArrayFunktionenErsteAbleitung[k].a) + ')';
					
					for(let i=0;i<funktionenListe[k].ersteAbleitung.punkteRechtsVonNullVergroessert.length;i++){				
						DrawLineOhneVergroeserung(funktionenListe[k].ersteAbleitung.punkteRechtsVonNullVergroessert[i].x, (-funktionenListe[k].ersteAbleitung.punkteRechtsVonNullVergroessert[i].y), false);		
					}
					canvasContext.stroke();
					canvasContext.beginPath();
					canvasContext.strokeStyle = 'rgba(' + String(farbenArrayFunktionenErsteAbleitung[k].r) + ',' + String(farbenArrayFunktionenErsteAbleitung[k].g) + ',' + String(farbenArrayFunktionenErsteAbleitung[k].b) + ',' + String(farbenArrayFunktionenErsteAbleitung[k].a) + ')';
					for(let i=0;i<funktionenListe[k].ersteAbleitung.punkteLinksVonNullVergroessert.length;i++){			
						DrawLineOhneVergroeserung(funktionenListe[k].ersteAbleitung.punkteLinksVonNullVergroessert[i].x, (-funktionenListe[k].ersteAbleitung.punkteLinksVonNullVergroessert[i].y), false);			
					}
					canvasContext.stroke();
			
		}
		if(funktionenListe[k].zweiteAbleitungAnzeigen){
			canvasContext.beginPath();
					canvasContext.strokeStyle = 'rgba(' + String(farbenArrayFunktionenZweiteAbleitung[k].r) + ',' + String(farbenArrayFunktionenZweiteAbleitung[k].g) + ',' + String(farbenArrayFunktionenZweiteAbleitung[k].b) + ',' + String(farbenArrayFunktionenZweiteAbleitung[k].a) + ')';
					
					for(let i=0;i<funktionenListe[k].zweiteAbleitung.punkteRechtsVonNullVergroessert.length;i++){				
						DrawLineOhneVergroeserung(funktionenListe[k].zweiteAbleitung.punkteRechtsVonNullVergroessert[i].x, (-funktionenListe[k].zweiteAbleitung.punkteRechtsVonNullVergroessert[i].y), false);		
					}
					canvasContext.stroke();
					canvasContext.beginPath();
					canvasContext.strokeStyle = 'rgba(' + String(farbenArrayFunktionenZweiteAbleitung[k].r) + ',' + String(farbenArrayFunktionenZweiteAbleitung[k].g) + ',' + String(farbenArrayFunktionenZweiteAbleitung[k].b) + ',' + String(farbenArrayFunktionenZweiteAbleitung[k].a) + ')';
					for(let i=0;i<funktionenListe[k].zweiteAbleitung.punkteLinksVonNullVergroessert.length;i++){			
						DrawLineOhneVergroeserung(funktionenListe[k].zweiteAbleitung.punkteLinksVonNullVergroessert[i].x, (-funktionenListe[k].zweiteAbleitung.punkteLinksVonNullVergroessert[i].y), false);			
					}
					canvasContext.stroke();
			
		}
		if(funktionenListe[k].dritteAbleitungAnzeigen){
			canvasContext.beginPath();
					canvasContext.strokeStyle = 'rgba(' + String(farbenArrayFunktionenDritteAbleitung[k].r) + ',' + String(farbenArrayFunktionenDritteAbleitung[k].g) + ',' + String(farbenArrayFunktionenDritteAbleitung[k].b) + ',' + String(farbenArrayFunktionenDritteAbleitung[k].a) + ')';
					
					for(let i=0;i<funktionenListe[k].dritteAbleitung.punkteRechtsVonNullVergroessert.length;i++){				
						DrawLineOhneVergroeserung(funktionenListe[k].dritteAbleitung.punkteRechtsVonNullVergroessert[i].x, (-funktionenListe[k].dritteAbleitung.punkteRechtsVonNullVergroessert[i].y), false);		
					}
					canvasContext.stroke();
					canvasContext.beginPath();
					canvasContext.strokeStyle = 'rgba(' + String(farbenArrayFunktionenDritteAbleitung[k].r) + ',' + String(farbenArrayFunktionenDritteAbleitung[k].g) + ',' + String(farbenArrayFunktionenDritteAbleitung[k].b) + ',' + String(farbenArrayFunktionenDritteAbleitung[k].a) + ')';
					for(let i=0;i<funktionenListe[k].dritteAbleitung.punkteLinksVonNullVergroessert.length;i++){			
						DrawLineOhneVergroeserung(funktionenListe[k].dritteAbleitung.punkteLinksVonNullVergroessert[i].x, (-funktionenListe[k].dritteAbleitung.punkteLinksVonNullVergroessert[i].y),false);			
					}
					canvasContext.stroke();
			
		}
		if(funktionenListe[k].krümmungskreisAnzeigen){
			
		}
		
	}
	if(funktionenVorschau!=0){
		canvasContext.beginPath();
		canvasContext.strokeStyle = 'rgba(' + String(farbeVorschau.r) + ',' + String(farbeVorschau.g) + ',' + String(farbeVorschau.b) + ',' + String(farbeVorschau.a) + ')';
		
		let xOld = 0;
		for(let i=0;i<funktionenVorschau.punkteRechtsVonNullVergroessert.length;i++){				
			let yTmp = (-funktionenVorschau.punkteRechtsVonNullVergroessert[i].y);
			for(let j=0;j<funktionenVorschau.polstellen.length;j++){
				
				if(xOld<funktionenVorschau.polstellen[j]&&funktionenVorschau.punkteRechtsVonNull[i].x>funktionenVorschau.polstellen[j]){
					canvasContext.stroke();
					canvasContext.beginPath();
				}
				
				if(i<funktionenVorschau.punkteRechtsVonNull.length-1){
					if(funktionenVorschau.punkteRechtsVonNull[i].x<funktionenVorschau.polstellen[j] && funktionenVorschau.punkteRechtsVonNull[i+1].x>funktionenVorschau.polstellen[j]){
						if((-funktionenVorschau.punkteRechtsVonNull[i].y)<0){
							canvasContext.lineTo(funktionenVorschau.punkteRechtsVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), -10);
						}
						else if((-funktionenVorschau.punkteRechtsVonNull[i].y)>0){
							canvasContext.lineTo(funktionenVorschau.punkteRechtsVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), 10 + canvas.height);
						}
						
					}
				}
				
				if(i>1){
					if(funktionenVorschau.punkteRechtsVonNull[i-1].x<funktionenVorschau.polstellen[j] && funktionenVorschau.punkteRechtsVonNull[i].x>funktionenVorschau.polstellen[j]){
						if((-funktionenVorschau.punkteRechtsVonNull[i].y)<0){
							canvasContext.lineTo(funktionenVorschau.punkteRechtsVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), -10);
						}
						else if((-funktionenVorschau.punkteRechtsVonNull[i].y)>0){
							canvasContext.lineTo(funktionenVorschau.punkteRechtsVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), 10 + canvas.height);
						}
					}
				}
				
			}
			DrawLineOhneVergroeserung(funktionenVorschau.punkteRechtsVonNullVergroessert[i].x, yTmp, false);
			xOld=funktionenVorschau.punkteRechtsVonNull[i].x;
		}
		canvasContext.stroke();
		canvasContext.beginPath();
		canvasContext.strokeStyle = 'rgba(' + String(farbeVorschau.r) + ',' + String(farbeVorschau.g) + ',' + String(farbeVorschau.b) + ',' + String(farbeVorschau.a) + ')';

		xOld=0;
		for(let i=0;i<funktionenVorschau.punkteLinksVonNullVergroessert.length;i++){	
			let yTmp = (-funktionenVorschau.punkteLinksVonNullVergroessert[i].y);
			for(let j=0;j<funktionenVorschau.polstellen.length;j++){
				if(xOld>funktionenVorschau.polstellen[j]&&funktionenVorschau.punkteLinksVonNull[i].x<funktionenVorschau.polstellen[j]){
					canvasContext.stroke();
					canvasContext.beginPath();
				}
				
				if(i<funktionenVorschau.punkteLinksVonNull.length-2){
					if(funktionenVorschau.punkteLinksVonNull[i].x>funktionenVorschau.polstellen[j] && funktionenVorschau.punkteLinksVonNull[i+1].x<funktionenVorschau.polstellen[j]){
						if((-funktionenVorschau.punkteLinksVonNull[i].y)<0){
							canvasContext.lineTo(funktionenVorschau.punkteLinksVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), -10);
						}
						else if((-funktionenVorschau.punkteLinksVonNull[i].y)>0){
							canvasContext.lineTo(funktionenVorschau.punkteLinksVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), 10 + canvas.height);
						}
						
					}
				}
				
				if(i>1){
					if(funktionenVorschau.punkteLinksVonNull[i-1].x>funktionenVorschau.polstellen[j] && funktionenVorschau.punkteLinksVonNull[i].x<funktionenVorschau.polstellen[j]){
						if((-funktionenVorschau.punkteLinksVonNull[i].y)<0){
							canvasContext.lineTo(funktionenVorschau.punkteLinksVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), -10);
						}
						else if((-funktionenVorschau.punkteLinksVonNull[i].y)>0){
							canvasContext.lineTo(funktionenVorschau.punkteLinksVonNullVergroessert[i].x+verschiebungDurchBenutzer.x+(canvas.width / 2), 10 + canvas.height);
						}
					}
				}
				
			}
			DrawLineOhneVergroeserung(funktionenVorschau.punkteLinksVonNullVergroessert[i].x, yTmp, false);		
			xOld=funktionenVorschau.punkteLinksVonNull[i].x;
		}
		canvasContext.stroke();
	}
}

function zeichneLeftNavBarButton() {
	canvasContext.fillStyle = backgroundColorLeftNavBarButton;
	canvasContext.beginPath();
	canvasContext.moveTo(0, (canvas.height/2)-85);
	canvasContext.lineTo(0, (canvas.height/2)-45);
	canvasContext.lineTo(20, (canvas.height/2)-45);
	canvasContext.closePath();
	canvasContext.strokeStyle = backgroundColorLeftNavBarButton;
	canvasContext.stroke();
	canvasContext.fill();
	
	canvasContext.beginPath();
	canvasContext.moveTo(0, (canvas.height/2)+85);
	canvasContext.lineTo(0, (canvas.height/2)+45);
	canvasContext.lineTo(20, (canvas.height/2)+45);
	canvasContext.closePath();
	canvasContext.stroke();
	canvasContext.fill();
	
	canvasContext.fillRect(0,(canvas.height/2)-46,20,92);

	canvasContext.beginPath();
	canvasContext.strokeStyle = "#ffffff";
	if(animateLeftNavBarButton){	
		if(animateNavBarButton>40){
			animateNavBarButton=0;
		}
		if(navBarToggleBool){
			canvasContext.moveTo(17-(animateNavBarButton/7),(canvas.height/2)-15);
			canvasContext.lineTo(7-(animateNavBarButton/7),(canvas.height/2));
			canvasContext.lineTo(17-(animateNavBarButton/7),(canvas.height/2)+15);
		}else{
			canvasContext.moveTo(3+(animateNavBarButton/7),(canvas.height/2)-15);
			canvasContext.lineTo(13+(animateNavBarButton/7),(canvas.height/2));
			canvasContext.lineTo(3+(animateNavBarButton/7),(canvas.height/2)+15);
		}

		animateNavBarButton++;
		
	}else{
		if(navBarToggleBool){
			canvasContext.moveTo(17,(canvas.height/2)-15);
			canvasContext.lineTo(7,(canvas.height/2));
			canvasContext.lineTo(17,(canvas.height/2)+15);
		}else{
			canvasContext.moveTo(3,(canvas.height/2)-15);
			canvasContext.lineTo(13,(canvas.height/2));
			canvasContext.lineTo(3,(canvas.height/2)+15);
		}
	}
	canvasContext.lineWidth = 2;
	canvasContext.stroke();
	canvasContext.lineWidth = 1;
}

var x = 200;
var dx = 4;
var vector;
let rootKnotenFunktionSyntaxbaeume = [];
let animateNavBarButton = 0;
function animate() {
	requestAnimationFrame(animate);
	ClearCanvas();

	zeichneKoordinatenkreuz();
	zeichneLegende();
	
	

//	checkEingabe();
	checkEingabeV2();
	zeichneFunktionsgraphen();
	zeichneInfoLeiste();
	zeichneLeftNavBarButton();//todo button animation läuft weiter wenn maus canvas verlassen hat
	
}


animate();

