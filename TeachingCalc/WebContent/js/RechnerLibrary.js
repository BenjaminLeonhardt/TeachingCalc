////berechnet die punkte einer funktion als vektor (x^3+2*x-2)/(x-2) macht probleme
function f(x, funktion) {
	let y = 0.0;
	for (let j = 0; j < funktion.length; j++) {
		if (j == 0) {
			y += funktion[j];
		}
		else {
			if (funktion[j] != 0) {
				y += Math.pow(x, j) * funktion[j];
			}
		}
	}
	return y;
}

//berechnet die punkte einer funktion als vektor (x^3+2*x-2)/(x-2) macht probleme
function fV3(x, funktion) {
	let y = 0;
	if(funktion.zahlOderVariablenName==='x'||funktion.zahlOderVariablenName==='X'){
		y = Math.pow(x, funktion.potenz) * funktion.koeffizient;
	}else{
		y += funktion.zahlOderVariablenName;
	}
	
	return y;
}


function getPunktEinfachesGanzrational(x, funktion) {
	let y = 0;
	for(let i=0;i<funktion.length;i++){
		y += fV3(x,funktion[i]);
	}
	return y;
}

//// berechnet die punkte einer funktion des objekts der klasse "funktion als
//// vektor syntaxbaum"
//function getPunkt(x, funktion) {
//	let y1 = 0;
//	let y2 = 0;
//	let y = 0;
//	if (funktion.inhaltKnotenSymbol == '/') {
//		y1 = f(x,funktion.linkesChild.inhaltKnotenVektor);
//		y2 = f(x, funktion.rechtesChild.inhaltKnotenVektor);
//		if (y2 != 0) {
//			y = y1 / y2;
//		}
//	}
//	if (funktion.inhaltKnotenSymbol === '^'|| funktion.inhaltKnotenSymbol === '*') {
//		y = f(x, funktion.inhaltKnotenVektor);
//	}
//	if (funktion.inhaltKnotenSymbol >= '0' && funktion.inhaltKnotenSymbol <= '9') {
//		y = f(x, funktion.inhaltKnotenVektor);
//	}
//	if (funktion.inhaltKnotenSymbol === 'x' || funktion.inhaltKnotenSymbol === 'X') {
//		y = f(x, funktion.inhaltKnotenVektor);
//	}
//	if (funktion.inhaltKnotenSymbol === '+'|| funktion.inhaltKnotenSymbol === '-') {
//		y = f(x, funktion.inhaltKnotenVektor);  3*x^4+2*x^2-5*x^3+3
//	}
//	return y;
//}


//berechnet die punkte einer funktion des objekts der klasse "funktion als
//vektor syntaxbaum" 5*x^2-3*x^2
function getPunktV3(x, funktion, y) {

	if(funktion.linkesChild!=undefined||funktion.linkesChild!=null){
		if ((funktion.inhaltKnotenSymbol === '+'|| funktion.inhaltKnotenSymbol === '-') && (funktion.linkesChild.inhaltKnotenSymbol==="+"||funktion.linkesChild.inhaltKnotenSymbol==="-")) {//bis an das linke ende des baums
			y += getPunktV3(x,funktion.linkesChild,y);
		}
	}
	if(funktion.rechtesChild!=undefined||funktion.rechtesChild!=null){
		if ((funktion.inhaltKnotenSymbol === '+'|| funktion.inhaltKnotenSymbol === '-') && (funktion.rechtesChild.inhaltKnotenSymbol==="+"||funktion.rechtesChild.inhaltKnotenSymbol==="-")) {//bis an das rechte ende des baums
			y += getPunktV3(x,funktion.rechtesChild,y);
		}
	}
//	if((funktion.linkesChild===undefined||funktion.linkesChild===null)&&(funktion.linkesChild===undefined||funktion.linkesChild===null)){
//		y += fV3(x, funktion.inhaltKnotenPolynom);
//	}

	if((funktion.linkesChild!=undefined||funktion.linkesChild!=null)&&(funktion.rechtesChild!=undefined||funktion.rechtesChild!=null)){
		if (funktion.inhaltKnotenSymbol === '+' && (funktion.rechtesChild.inhaltKnotenSymbol==="*"||funktion.linkesChild.inhaltKnotenSymbol==="*")) {//bis an das rechte ende des baums
			y += fV3(x, funktion.linkesChild.inhaltKnotenPolynom);
			if(!isNaN(funktion.rechtesChild.inhaltKnotenPolynom.koeffizient)){
				y += fV3(x, funktion.rechtesChild.inhaltKnotenPolynom);
			}
			return y;
		}else if (funktion.inhaltKnotenSymbol === '-' && (funktion.rechtesChild.inhaltKnotenSymbol==="*"||funktion.linkesChild.inhaltKnotenSymbol==="*")) {//bis an das rechte ende des baums
			if(funktion.parent===null){
				y = fV3(x, funktion.linkesChild.inhaltKnotenPolynom) - y;
				if(!isNaN(funktion.rechtesChild.inhaltKnotenPolynom.koeffizient)){
					y += fV3(x, funktion.rechtesChild.inhaltKnotenPolynom);
				}
			}else{
				y += fV3(x, funktion.linkesChild.inhaltKnotenPolynom);
				if(!isNaN(funktion.rechtesChild.inhaltKnotenPolynom.koeffizient)){
					y -= fV3(x, funktion.rechtesChild.inhaltKnotenPolynom);
				}
			}
			
			return y;
		}else if (funktion.inhaltKnotenSymbol === '/' && (funktion.rechtesChild.inhaltKnotenSymbol==="*"||funktion.linkesChild.inhaltKnotenSymbol==="*")) {//bis an das rechte ende des baums
			y += getPunktV3(x,funktion.linkesChild,0); 
			let ynenner = getPunktV3(x,funktion.rechtesChild,0);
			if(ynenner!=0){
				y = y/ynenner;
			}else{
				return NaN;
			}
			
			return y;
		}
	}

	
	if(funktion.inhaltKnotenPolynom!=undefined && !isNaN(funktion.inhaltKnotenPolynom.koeffizient)){
		y += fV3(x, funktion.inhaltKnotenPolynom);
	} 
	
	if(funktion.linkesChild!=undefined||funktion.linkesChild!=null){
		if(funktion.linkesChild.inhaltKnotenPolynom!=undefined && !isNaN(funktion.linkesChild.inhaltKnotenPolynom.koeffizient)){
			
			if(!isNaN(funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName)&&funktion.parent.inhaltKnotenSymbol==="+"){ //wenn konstante, es fehlt noch 2² und 2*2
				y += funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName;
			}
			else if(!isNaN(funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName)&&funktion.parent.inhaltKnotenSymbol==="-"){ //wenn konstante, es fehlt noch 2² und 2*2
				y -= funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName;
			}
			if(funktion.parent!=null){
				if((funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X")&&(funktion.parent.inhaltKnotenSymbol === '+')){
					y += fV3(x, funktion.linkesChild.inhaltKnotenPolynom);
				}else if((funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X")&&(funktion.parent.inhaltKnotenSymbol === '-')){
					y -= fV3(x, funktion.linkesChild.inhaltKnotenPolynom);
				}
			}
			if(funktion.parent===null){
				if((funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X")){
					y += fV3(x, funktion.linkesChild.inhaltKnotenPolynom);
				}
//				else if((funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X")&&(funktion.parent.inhaltKnotenSymbol === '-')){
//					y -= fV3(x, funktion.linkesChild.inhaltKnotenPolynom);3,5*x^5-2*x^4-5*x^3+3
//				}3,5*x^0,5
			}
		}
	}
	
	if(funktion.rechtesChild!=undefined||funktion.rechtesChild!=null){
		if((funktion.rechtesChild.rechtesChild!=undefined||funktion.rechtesChild.rechtesChild!=null)&&(funktion.rechtesChild.linkesChild!=undefined||funktion.rechtesChild.linkesChild!=null)){
			if(funktion.rechtesChild.inhaltKnotenSymbol==='+'){
				y += fV3(x, funktion.rechtesChild.rechtesChild.inhaltKnotenPolynom);
				y += fV3(x, funktion.rechtesChild.linkesChild.inhaltKnotenPolynom);
			}else if(funktion.rechtesChild.inhaltKnotenSymbol==='-'){
				let tmp; 
				tmp += fV3(x, funktion.rechtesChild.linkesChild.inhaltKnotenPolynom);
				tmp -= fV3(x, funktion.rechtesChild.rechtesChild.inhaltKnotenPolynom);
				y -= tmp;
			}
		}
		if(funktion.rechtesChild.inhaltKnotenPolynom!=undefined && !isNaN(funktion.rechtesChild.inhaltKnotenPolynom.koeffizient)){
			
			if(!isNaN(funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName)&&funktion.inhaltKnotenSymbol==="+"){ //wenn +konstante, es fehlt noch 2² und 2*2 
				y += funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName;
			}else if(!isNaN(funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName)&&funktion.inhaltKnotenSymbol==="-"){ //wenn -konstante, es fehlt noch 2² und 2*2 
				y -= funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName;
			}
			
			if((funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X") //wenn +2x²
				&&funktion.inhaltKnotenSymbol === '+'){
				y += fV3(x, funktion.rechtesChild.inhaltKnotenPolynom);
			}else if((funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X")//wenn -2x²
					&&(funktion.inhaltKnotenSymbol === '-')){
				y -= fV3(x, funktion.rechtesChild.inhaltKnotenPolynom);
			}

			if(funktion.parent===null){
				if((funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X")){
					if(funktion.inhaltKnotenSymbol==='/'){
						y /= fV3(x, funktion.rechtesChild.inhaltKnotenPolynom);
					}
				}
			}
		}
	}
	
	

	return y;
}




function getPunktV4(x, funktion, y) {

	if(funktion.linkesChild!=undefined||funktion.linkesChild!=null){
		if ((funktion.inhaltKnotenSymbol === '+'|| funktion.inhaltKnotenSymbol === '-') && (funktion.linkesChild.inhaltKnotenSymbol==="+"||funktion.linkesChild.inhaltKnotenSymbol==="-")) {//bis an das linke ende des baums
			y += getPunktV4(x,funktion.linkesChild,y);
		}
	}
	if(funktion.rechtesChild!=undefined||funktion.rechtesChild!=null){
		if ((funktion.inhaltKnotenSymbol === '+'|| funktion.inhaltKnotenSymbol === '-') && (funktion.rechtesChild.inhaltKnotenSymbol==="+"||funktion.rechtesChild.inhaltKnotenSymbol==="-")) {//bis an das rechte ende des baums
			y += getPunktV4(x,funktion.rechtesChild,y);
		}
	}
//	if((funktion.linkesChild===undefined||funktion.linkesChild===null)&&(funktion.linkesChild===undefined||funktion.linkesChild===null)){
//		y += fV3(x, funktion.inhaltKnotenPolynom);
//	}

	if((funktion.linkesChild!=undefined||funktion.linkesChild!=null)&&(funktion.rechtesChild!=undefined||funktion.rechtesChild!=null)){
		if (funktion.inhaltKnotenSymbol === '+' && (funktion.rechtesChild.inhaltKnotenSymbol==="*"||funktion.linkesChild.inhaltKnotenSymbol==="*")) {//bis an das rechte ende des baums
			y += fV3(x, funktion.rechtesChild.inhaltKnotenPolynom);
			
			if(!isNaN(funktion.linkesChild.inhaltKnotenPolynom.koeffizient)){
				y += fV3(x, funktion.linkesChild.inhaltKnotenPolynom);
			}
			return y;
		}else if (funktion.inhaltKnotenSymbol === '-' && (funktion.rechtesChild.inhaltKnotenSymbol==="*"||funktion.linkesChild.inhaltKnotenSymbol==="*")) {//bis an das rechte ende des baums
			if(funktion.parent===null){
				y += fV3(x, funktion.rechtesChild.inhaltKnotenPolynom);
				
				if(!isNaN(funktion.linkesChild.inhaltKnotenPolynom.koeffizient)){
					y = fV3(x, funktion.linkesChild.inhaltKnotenPolynom) - y;
				}
			}else{
				y -= fV3(x, funktion.rechtesChild.inhaltKnotenPolynom);
				if(!isNaN(funktion.linkesChild.inhaltKnotenPolynom.koeffizient)){
					
					y += fV3(x, funktion.linkesChild.inhaltKnotenPolynom);
				}
			}
			
			return y;
		}else if (funktion.inhaltKnotenSymbol === '/' && (funktion.rechtesChild.inhaltKnotenSymbol==="*"||funktion.linkesChild.inhaltKnotenSymbol==="*")) {//bis an das rechte ende des baums
			y += getPunktV4(x,funktion.linkesChild,0); 
			let ynenner = getPunktV4(x,funktion.rechtesChild,0);
			if(ynenner!=0){
				y = y/ynenner;
			}else{
				return NaN;
			}
			
			return y;
		}
	}

	
	if(funktion.inhaltKnotenPolynom!=undefined && !isNaN(funktion.inhaltKnotenPolynom.koeffizient)){
		y += fV3(x, funktion.inhaltKnotenPolynom);
	} 
	
	if(funktion.linkesChild!=undefined||funktion.linkesChild!=null){
		if(funktion.linkesChild.inhaltKnotenPolynom!=undefined && !isNaN(funktion.linkesChild.inhaltKnotenPolynom.koeffizient)){
			
			if(!isNaN(funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName)&&funktion.parent.inhaltKnotenSymbol==="+"){ //wenn konstante, es fehlt noch 2² und 2*2
				y += funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName;
			}
			else if(!isNaN(funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName)&&funktion.parent.inhaltKnotenSymbol==="-"){ //wenn konstante, es fehlt noch 2² und 2*2
				y -= funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName;
			}
			if(funktion.parent!=null){
				if((funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X")&&(funktion.parent.inhaltKnotenSymbol === '+')){
					y += fV3(x, funktion.linkesChild.inhaltKnotenPolynom);
				}else if((funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X")&&(funktion.parent.inhaltKnotenSymbol === '-')){
					y += fV3(x, funktion.linkesChild.inhaltKnotenPolynom);
				}
			}
			if(funktion.parent===null){
				if((funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X")){
					y += fV3(x, funktion.linkesChild.inhaltKnotenPolynom);
				}
//				else if((funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X")&&(funktion.parent.inhaltKnotenSymbol === '-')){
//					y -= fV3(x, funktion.linkesChild.inhaltKnotenPolynom);3,5*x^5-2*x^4-5*x^3+3
//				}3,5*x^0,5
			}
		}
	}
	
	if(funktion.rechtesChild!=undefined||funktion.rechtesChild!=null){
		if((funktion.rechtesChild.rechtesChild!=undefined||funktion.rechtesChild.rechtesChild!=null)&&(funktion.rechtesChild.linkesChild!=undefined||funktion.rechtesChild.linkesChild!=null)){
			if(funktion.rechtesChild.inhaltKnotenSymbol==='+'){
				y += fV3(x, funktion.rechtesChild.rechtesChild.inhaltKnotenPolynom);
				y += fV3(x, funktion.rechtesChild.linkesChild.inhaltKnotenPolynom);
			}else if(funktion.rechtesChild.inhaltKnotenSymbol==='-'){
				let tmp; 
				tmp += fV3(x, funktion.rechtesChild.linkesChild.inhaltKnotenPolynom);
				tmp -= fV3(x, funktion.rechtesChild.rechtesChild.inhaltKnotenPolynom);
				y -= tmp;
			}
		}
		if(funktion.rechtesChild.inhaltKnotenPolynom!=undefined && !isNaN(funktion.rechtesChild.inhaltKnotenPolynom.koeffizient)){
			
			if(!isNaN(funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName)&&funktion.inhaltKnotenSymbol==="+"){ //wenn +konstante, es fehlt noch 2² und 2*2 
				y += funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName;
			}else if(!isNaN(funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName)&&funktion.inhaltKnotenSymbol==="-"){ //wenn -konstante, es fehlt noch 2² und 2*2 
				y -= funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName;
			}
			
			if((funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X") //wenn +2x²
				&&funktion.inhaltKnotenSymbol === '+'){
				y += fV3(x, funktion.rechtesChild.inhaltKnotenPolynom);
			}else if((funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X")//wenn -2x²
					&&(funktion.inhaltKnotenSymbol === '-')){
				y -= fV3(x, funktion.rechtesChild.inhaltKnotenPolynom);
			}

			if(funktion.parent===null){
				if((funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==="x"||funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==="X")){
					if(funktion.inhaltKnotenSymbol==='/'){
						y /= fV3(x, funktion.rechtesChild.inhaltKnotenPolynom);
					}
				}
			}
		}
	}
	
	if(funktion.rechtesChild===undefined||funktion.rechtesChild===null&&funktion.linkesChild===undefined||funktion.linkesChild===null){
		if(!isNaN(funktion.inhaltKnotenSymbol)){
			y += funktion.inhaltKnotenSymbol;
		}
		
	}

	return y;
}

//function funktionAbleiten(funktion) {
//	abgeleiteteFunktion = [];
//	if (funktion.length > 0) {
//		for(let i=0;i<funktion.length-1;i++){
//			abgeleiteteFunktion.push(0);
//		}
//		
//		for (let j = funktion.length-1; j > 0; j--) {
//			if (funktion[j] != 0) {
//				abgeleiteteFunktion[j - 1] = funktion[j] * j;
//			}
//		}
//	}
//	return abgeleiteteFunktion;
//}

function funktionAbleitenV3(polynomF) {
	let polynomFStrich = new Polynom();		
	polynomFStrich.koeffizient = polynomF.koeffizient*polynomF.potenz;
	polynomFStrich.potenz =  polynomF.potenz - 1;
	if(polynomFStrich.potenz===0){
		polynomFStrich.zahlOderVariablenName = polynomFStrich.koeffizient;
	}else{
		polynomFStrich.zahlOderVariablenName = polynomF.zahlOderVariablenName;
	}
	
	
	return polynomFStrich;
}



//function funktionAbleitenGebrochenRational(funktion) {
//	if (funktion.inhaltKnotenSymbol === '/') { // Quotientenregel
//		let gX = new FunktionAlsVektorSyntaxbaum();
//		gX.inhaltKnotenVektor = funktion.linkesChild.inhaltKnotenVektor;
//		gX.inhaltKnotenString = funktionVectorToString(gX.inhaltKnotenVektor, false);
//		gX.inhaltKnotenSymbol = funktion.linkesChild.inhaltKnotenSymbol;
//
//		let gStrichX = new FunktionAlsVektorSyntaxbaum();
//		gStrichX.inhaltKnotenVektor = funktionAbleiten(funktion.linkesChild.inhaltKnotenVektor);
//		gStrichX.inhaltKnotenString = funktionVectorToString(gStrichX.inhaltKnotenVektor, false);
//		gStrichX.inhaltKnotenSymbol = funktion.linkesChild.inhaltKnotenSymbol;
//		
//		let hX = new FunktionAlsVektorSyntaxbaum();
//		hX.inhaltKnotenVektor = funktion.rechtesChild.inhaltKnotenVektor;
//		hX.inhaltKnotenString = funktionVectorToString(hX.inhaltKnotenVektor, false);
//		hX.inhaltKnotenSymbol = funktion.rechtesChild.inhaltKnotenSymbol;	
//		
//
//		let hStrichX = new FunktionAlsVektorSyntaxbaum();
//		hStrichX.inhaltKnotenVektor = funktionAbleiten(funktion.rechtesChild.inhaltKnotenVektor);
//		hStrichX.inhaltKnotenString = funktionVectorToString(hStrichX.inhaltKnotenVektor, false);
//		hStrichX.inhaltKnotenSymbol = funktion.rechtesChild.inhaltKnotenSymbol;
//
//		let fStrichX = new FunktionAlsVektorSyntaxbaum();
//		fStrichX.inhaltKnotenSymbol = '/';
//		
//		let hXQuadrat = new FunktionAlsVektorSyntaxbaum(); // unter
//																					// dem
//																					// Bruchstrich
//		hXQuadrat.inhaltKnotenSymbol = '*';
//		hXQuadrat.linkesChild = hX;
//		hXQuadrat.rechtesChild = hX;
//		hXQuadrat.inhaltKnotenString = hX.inhaltKnotenString + '*' + hX.inhaltKnotenString;
//		fStrichX.rechtesChild = hXQuadrat;
//		
//
//		
//		let hXMalgStrichXMinusgXMalHStrichX = new FunktionAlsVektorSyntaxbaum(); // Über
//																											// dem
//																											// Bruchstrich
//		hXMalgStrichXMinusgXMalHStrichX.inhaltKnotenSymbol = '-';
//		let hXMalgStrichX = new FunktionAlsVektorSyntaxbaum();
//		hXMalgStrichX.inhaltKnotenSymbol = '*';
//		hXMalgStrichX.linkesChild = hX;
//		hXMalgStrichX.rechtesChild = gStrichX;
//		hXMalgStrichX.inhaltKnotenString = hX.inhaltKnotenString + '*' + gStrichX.inhaltKnotenString;
//		hXMalgStrichXMinusgXMalHStrichX.linkesChild = hXMalgStrichX;
//
//		this.inhaltKnotenSymbol = "";
//		this.inhaltKnotenString = "";
//		this.inhaltKnotenVektor = [];
//
//		
//		let gXMalHStrichX = new FunktionAlsVektorSyntaxbaum();
//		gXMalHStrichX.inhaltKnotenSymbol = '*';
//		gXMalHStrichX.linkesChild = gX;
//		gXMalHStrichX.rechtesChild = hStrichX;
//		gXMalHStrichX.inhaltKnotenString = gX.inhaltKnotenString + '*' + hStrichX.inhaltKnotenString;
//		
//		hXMalgStrichXMinusgXMalHStrichX.rechtesChild = gXMalHStrichX;
//		hXMalgStrichXMinusgXMalHStrichX.inhaltKnotenString = hXMalgStrichX.inhaltKnotenString + '-' + gXMalHStrichX.inhaltKnotenString;
//		fStrichX.linkesChild=hXMalgStrichXMinusgXMalHStrichX;
//
//		fStrichX.inhaltKnotenString = hXMalgStrichXMinusgXMalHStrichX.inhaltKnotenString + "/" + hXQuadrat.inhaltKnotenString;
//		kuerzeSyntaxbaumGebrochenRational(fStrichX);
//		return fStrichX;
//	}
//	else if (funktion.inhaltKnotenSymbol === '+' || funktion.inhaltKnotenSymbol === '-' || funktion.inhaltKnotenSymbol === '*' || funktion.inhaltKnotenSymbol === '^') {
//		
//		let fStrichX = new FunktionAlsVektorSyntaxbaum();
//		fStrichX.inhaltKnotenSymbol = funktion.inhaltKnotenSymbol;
//		fStrichX.inhaltKnotenVektor = funktionAbleiten(funktion.inhaltKnotenVektor);
//		fStrichX.inhaltKnotenString = funktionVectorToString(fStrichX.inhaltKnotenVektor, false);
//		return fStrichX;
//	}else if ((funktion.inhaltKnotenSymbol === 'x'||funktion.inhaltKnotenSymbol === 'X')&&funktion.linkesChild==null&&funktion.rechtesChild==null){
//		let fStrichX = new FunktionAlsVektorSyntaxbaum();
//		fStrichX.inhaltKnotenSymbol = funktion.inhaltKnotenSymbol;
//		fStrichX.inhaltKnotenVektor = funktionAbleiten(funktion.inhaltKnotenVektor);
//		fStrichX.inhaltKnotenString = funktionVectorToString(fStrichX.inhaltKnotenVektor, false);
//		return fStrichX;
//	}
//}

function syntaxBaumZuText(root){
	funktionAlsText = "";
	let aktuellerKnoten = root;
	while(aktuellerKnoten.rechtesChild!=null){
		if(aktuellerKnoten.inhaltKnotenSymbol==="+"||aktuellerKnoten.inhaltKnotenSymbol==="-"){
			if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom.koeffizient!=0){
				if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom.koeffizient!=1){
					funktionAlsText += aktuellerKnoten.linkesChild.inhaltKnotenPolynom.koeffizient;
					funktionAlsText += "*";
				}
				funktionAlsText += aktuellerKnoten.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName;
				if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom.potenz!=1){
					funktionAlsText += "^"
					funktionAlsText += aktuellerKnoten.linkesChild.inhaltKnotenPolynom.potenz;
				}
				funktionAlsText += aktuellerKnoten.inhaltKnotenSymbol;
			}
		}	
		if(aktuellerKnoten.rechtesChild.rechtesChild===null){
			if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient!=0){
				if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient!=1){
					funktionAlsText += aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient;
					funktionAlsText += "*";
				}
				funktionAlsText += aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName;
				if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz!=1){
					funktionAlsText += "^"
					funktionAlsText += aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz;
				}
			}
		}
		if(aktuellerKnoten.rechtesChild!=null){
			aktuellerKnoten = aktuellerKnoten.rechtesChild;
		}
	}
	if(aktuellerKnoten.rechtesChild===null&&aktuellerKnoten.linkesChild===null){
		if(aktuellerKnoten.inhaltKnotenPolynom.koeffizient!=0){
			if(aktuellerKnoten.inhaltKnotenPolynom.koeffizient!=1){
				funktionAlsText += aktuellerKnoten.inhaltKnotenPolynom.koeffizient;
				funktionAlsText += "*";
			}
			funktionAlsText += aktuellerKnoten.inhaltKnotenPolynom.zahlOderVariablenName;
			if(aktuellerKnoten.inhaltKnotenPolynom.potenz!=1){
				funktionAlsText += "^"
				funktionAlsText += aktuellerKnoten.inhaltKnotenPolynom.potenz;
			}
		}
	}

	
	return funktionAlsText;
}


function syntaxBaumZuTextV2(root,funktionAlsText){
	
	let aktuellerKnoten = root;
	if(aktuellerKnoten.linkesChild===null&&aktuellerKnoten.rechtesChild===null&&aktuellerKnoten.parent===null){
		funktionAlsText += aktuellerKnoten.inhaltKnotenPolynom.koeffizient;
		return funktionAlsText;
	}
	if(aktuellerKnoten.linkesChild!=null){
		if(aktuellerKnoten.linkesChild.linkesChild!=null){
			funktionAlsText += syntaxBaumZuTextV2(aktuellerKnoten.linkesChild,funktionAlsText);
			if(aktuellerKnoten.linkesChild.inhaltKnotenSymbol==='+'||aktuellerKnoten.linkesChild.inhaltKnotenSymbol==='-'){
				
				if(aktuellerKnoten.rechtesChild!=null){
					
					funktionAlsText += aktuellerKnoten.inhaltKnotenSymbol;
			 		
					if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient!=0&&isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName)){
						if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient!=1){
							funktionAlsText += aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient;
							funktionAlsText += "*";
						}
						funktionAlsText += aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName;
						if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz!=0){
							if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz!=1){
								funktionAlsText += "^"
								funktionAlsText += aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz;
							}
						}
					}else if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient!=0&&!isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName)){
						if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient!=1){
							funktionAlsText += aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient;
							
						}					
					}
					
				}
			}
		}
		
		if(aktuellerKnoten.linkesChild.linkesChild===null){
			if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom.koeffizient!=0){
				if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom.koeffizient!=1){
					funktionAlsText += aktuellerKnoten.linkesChild.inhaltKnotenPolynom.koeffizient;
					funktionAlsText += "*";
				}
				funktionAlsText += aktuellerKnoten.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName;
				if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom.potenz!=1){
					funktionAlsText += "^"
					funktionAlsText += aktuellerKnoten.linkesChild.inhaltKnotenPolynom.potenz;
				}
			}
			if(aktuellerKnoten.rechtesChild!=null){
				funktionAlsText += aktuellerKnoten.inhaltKnotenSymbol;
	 		
				if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient!=0&&isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName)){
					if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient!=1){
						funktionAlsText += aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient;
						funktionAlsText += "*";
					}
					funktionAlsText += aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName;
					if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz!=0){
						if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz!=1){
							funktionAlsText += "^"
							funktionAlsText += aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz;
						}
					}
				}else if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient!=0&&!isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName)){
					if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient!=1){
						funktionAlsText += aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient;
						
					}					
				}
			}
		}
	}
	
	
	if(aktuellerKnoten.rechtesChild===null&&aktuellerKnoten.linkesChild===null){
		if(aktuellerKnoten.inhaltKnotenPolynom.koeffizient!=0){
			if(aktuellerKnoten.inhaltKnotenPolynom.koeffizient!=1&&isNaN(aktuellerKnoten.inhaltKnotenPolynom.zahlOderVariablenName)){
				funktionAlsText += aktuellerKnoten.inhaltKnotenPolynom.koeffizient;
				funktionAlsText += "*";
				funktionAlsText += aktuellerKnoten.inhaltKnotenPolynom.zahlOderVariablenName;
			}else if(aktuellerKnoten.inhaltKnotenPolynom.koeffizient!=1&&!isNaN(aktuellerKnoten.inhaltKnotenPolynom.zahlOderVariablenName)){
				funktionAlsText += aktuellerKnoten.inhaltKnotenPolynom.koeffizient;
			}
			
			if(aktuellerKnoten.inhaltKnotenPolynom.potenz>1){
				funktionAlsText += "^"
				funktionAlsText += aktuellerKnoten.inhaltKnotenPolynom.potenz;
			}
		}
	}

	
	return funktionAlsText;
}


function funktionPolynomeNachGradSortieren(rootFunktion){
	for(let i=0;i<rootFunktion.length;i++){
		for(let j=0;j<rootFunktion.length;j++){
			if(i!=j){
				if(rootFunktion[i].potenz<rootFunktion[j].potenz){
					let tmp = rootFunktion[i];
					rootFunktion[i] = rootFunktion[j];
					rootFunktion[j] = tmp;
				}
			}
		}
	}
}

function funktionKuerzenEinfachGanzrational(rootFunktion){
	for(let i=0;i<rootFunktion.length;i++){
		for(let j=i;j<rootFunktion.length;j++){
			if(i!=j){
				if(rootFunktion[i].zahlOderVariablenName===rootFunktion[j].zahlOderVariablenName){
					if(rootFunktion[i].potenz===rootFunktion[j].potenz){
						rootFunktion[i].koeffizient += rootFunktion[j].koeffizient;
						if(rootFunktion[i].koeffizient!=0){
							tmp = [];
							for(let k=0;k<rootFunktion.length;k++){
								if(k!=j){
									tmp.push(rootFunktion[k]);
								}		
							}
							rootFunktion=tmp;
						}else if(rootFunktion[i].koeffizient===0){
							tmp = [];
							for(let k=0;k<rootFunktion.length;k++){
								if(k!=j&&k!=i){
									tmp.push(rootFunktion[k]);
								}		
							}
							rootFunktion=tmp;
							i=0;
						}
					}
				}
			}
		}
	}
	
	funktionPolynomeNachGradSortieren(rootFunktion);
	
	return rootFunktion;
}

function funktionAbleitenEinfachGanzrational(rootFunktion){
	let fStrich = [];
	for(let i=0;i<rootFunktion.length;i++){
		if(rootFunktion[i].zahlOderVariablenName==="x"){
			if(rootFunktion[i].koeffizient===0){

			}else{
				polyTmp = new Polynom();
				polyTmp.potenz = rootFunktion[i].potenz-1;
				if(!isNaN(rootFunktion[i].koeffizient)){
					polyTmp.koeffizient = rootFunktion[i].koeffizient*rootFunktion[i].potenz;
				}else{
					polyTmp.koeffizient = 1*rootFunktion[i].potenz;
				}
				
				if(polyTmp.potenz!=0){
					polyTmp.zahlOderVariablenName = rootFunktion[i].zahlOderVariablenName;
				}else{
					polyTmp.potenz = 0;
					polyTmp.zahlOderVariablenName = 0;
				}
				fStrich.push(polyTmp);
			}
		}else if(rootFunktion[i].zahlOderVariablenName===0){
			
		}
		
	}
	return fStrich;
}

function schaueAlleKnotenAnUndLeiteAb(rootFunktion, fStrich){
	let aktuellerKnoten = rootFunktion;	
	let fStrichTmp = fStrich;
	fStrichTmp.inhaltKnotenSymbol = aktuellerKnoten.inhaltKnotenSymbol;
	while(aktuellerKnoten.rechtesChild!=null){
		fStrichTmp.rechtesChild =  new FunktionAlsVektorSyntaxbaum();
		fStrichTmp.rechtesChild.inhaltKnotenSymbol = aktuellerKnoten.rechtesChild.inhaltKnotenSymbol;
		if(aktuellerKnoten.linkesChild!=null){
			if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom!=null){
				fStrichTmp.linkesChild =  new FunktionAlsVektorSyntaxbaum();
				fStrichTmp.linkesChild.inhaltKnotenPolynom = funktionAbleitenV3(aktuellerKnoten.linkesChild.inhaltKnotenPolynom);
			}			
		}
		if(aktuellerKnoten.rechtesChild!=null){
			aktuellerKnoten = aktuellerKnoten.rechtesChild;
			fStrichTmp = fStrichTmp.rechtesChild;
		}
	}
	if(aktuellerKnoten.rechtesChild===null){
//		fStrichTmp =  new FunktionAlsVektorSyntaxbaum();
		fStrichTmp.inhaltKnotenPolynom = funktionAbleitenV3(aktuellerKnoten.inhaltKnotenPolynom);
	}
}

function schaueAlleKnotenAnUndLeiteAbV2(rootFunktion, fStrich){
	if(rootFunktion.linkesChild===null&&rootFunktion.rechtesChild===null&&rootFunktion.parent===null){
		fStrich.inhaltKnotenPolynom.potenz = 0;
		fStrich.inhaltKnotenPolynom.zahlOderVariablenName = 0;
		fStrich.inhaltKnotenPolynom.koeffizient = 0;
		return;
	}
	if(rootFunktion.linkesChild!=null){
		schaueAlleKnotenAnUndLeiteAbV2(rootFunktion.linkesChild, fStrich)
	}else{
		if(isNaN(fStrich.inhaltKnotenPolynom.koeffizient)&&isNaN(fStrich.inhaltKnotenPolynom.potenz)&&isNaN(fStrich.inhaltKnotenPolynom.zahlOderVariablenName)){
			fStrich.inhaltKnotenPolynom = funktionAbleitenV3(rootFunktion.inhaltKnotenPolynom);
		}else{
			fStrich.parent =  new FunktionAlsVektorSyntaxbaum();
			fStrich.parent.inhaltKnotenPolynom = funktionAbleitenV3(rootFunktion.inhaltKnotenPolynom);
		}
	}
	if(rootFunktion.rechtesChild!=null){
		if(isNaN(rootFunktion.rechtesChild.inhaltKnotenPolynom.koeffizient)&&isNaN(rootFunktion.rechtesChild.inhaltKnotenPolynom.potenz)&&isNaN(rootFunktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName)){
			
		}else{
			if(rootFunktion.rechtesChild.inhaltKnotenPolynom.potenz>0&&isNaN(rootFunktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName)){
				if(fStrich.parent!=null){
					fStrich = fStrich.parent;
				}
				fStrich.parent =  new FunktionAlsVektorSyntaxbaum();
				fStrich.parent.inhaltKnotenSymbol = rootFunktion.inhaltKnotenSymbol;
				fStrich.parent.rechtesChild =  new FunktionAlsVektorSyntaxbaum();
				fStrich.parent.rechtesChild.inhaltKnotenPolynom =  funktionAbleitenV3(rootFunktion.rechtesChild.inhaltKnotenPolynom);
				fStrich.parent.linkesChild = fStrich;
			}	
		}
	}
	
}


function funktionAbleitenGebrochenRationalV3(funktion) {
	let fStrich = new FunktionAlsVektorSyntaxbaum();
	schaueAlleKnotenAnUndLeiteAb(funktion, fStrich);

	fStrich.inhaltKnotenString = syntaxBaumZuText(fStrich);
	return fStrich;
	
//	if (funktion.inhaltKnotenSymbol === '/') { // Quotientenregel
//		let gX = new FunktionAlsVektorSyntaxbaum();
//		gX.inhaltKnotenVektor = funktion.linkesChild.inhaltKnotenVektor;
//		gX.inhaltKnotenString = funktionVectorToString(gX.inhaltKnotenVektor, false);
//		gX.inhaltKnotenSymbol = funktion.linkesChild.inhaltKnotenSymbol;
//
//		let gStrichX = new FunktionAlsVektorSyntaxbaum();
//		gStrichX.inhaltKnotenVektor = funktionAbleiten(funktion.linkesChild.inhaltKnotenVektor);
//		gStrichX.inhaltKnotenString = funktionVectorToString(gStrichX.inhaltKnotenVektor, false);
//		gStrichX.inhaltKnotenSymbol = funktion.linkesChild.inhaltKnotenSymbol;
//		
//		let hX = new FunktionAlsVektorSyntaxbaum();
//		hX.inhaltKnotenVektor = funktion.rechtesChild.inhaltKnotenVektor;
//		hX.inhaltKnotenString = funktionVectorToString(hX.inhaltKnotenVektor, false);
//		hX.inhaltKnotenSymbol = funktion.rechtesChild.inhaltKnotenSymbol;	
//		
//
//		let hStrichX = new FunktionAlsVektorSyntaxbaum();
//		hStrichX.inhaltKnotenVektor = funktionAbleiten(funktion.rechtesChild.inhaltKnotenVektor);
//		hStrichX.inhaltKnotenString = funktionVectorToString(hStrichX.inhaltKnotenVektor, false);
//		hStrichX.inhaltKnotenSymbol = funktion.rechtesChild.inhaltKnotenSymbol;
//
//		let fStrichX = new FunktionAlsVektorSyntaxbaum();
//		fStrichX.inhaltKnotenSymbol = '/';
//		
//		let hXQuadrat = new FunktionAlsVektorSyntaxbaum(); // unter dem Bruchstrich
//																				 
//		hXQuadrat.inhaltKnotenSymbol = '*';
//		hXQuadrat.linkesChild = hX;
//		hXQuadrat.rechtesChild = hX;
//		hXQuadrat.inhaltKnotenString = hX.inhaltKnotenString + '*' + hX.inhaltKnotenString;
//		fStrichX.rechtesChild = hXQuadrat;
//		
//
//		
//		let hXMalgStrichXMinusgXMalHStrichX = new FunktionAlsVektorSyntaxbaum(); // Über dem Bruchstrich
//																							 				
//		hXMalgStrichXMinusgXMalHStrichX.inhaltKnotenSymbol = '-';
//		let hXMalgStrichX = new FunktionAlsVektorSyntaxbaum();
//		hXMalgStrichX.inhaltKnotenSymbol = '*';
//		hXMalgStrichX.linkesChild = hX;
//		hXMalgStrichX.rechtesChild = gStrichX;
//		hXMalgStrichX.inhaltKnotenString = hX.inhaltKnotenString + '*' + gStrichX.inhaltKnotenString;
//		hXMalgStrichXMinusgXMalHStrichX.linkesChild = hXMalgStrichX;
//
//		this.inhaltKnotenSymbol = "";
//		this.inhaltKnotenString = "";
//		this.inhaltKnotenVektor = [];
//
//		
//		let gXMalHStrichX = new FunktionAlsVektorSyntaxbaum();
//		gXMalHStrichX.inhaltKnotenSymbol = '*';
//		gXMalHStrichX.linkesChild = gX;
//		gXMalHStrichX.rechtesChild = hStrichX;
//		gXMalHStrichX.inhaltKnotenString = gX.inhaltKnotenString + '*' + hStrichX.inhaltKnotenString;
//		
//		hXMalgStrichXMinusgXMalHStrichX.rechtesChild = gXMalHStrichX;
//		hXMalgStrichXMinusgXMalHStrichX.inhaltKnotenString = hXMalgStrichX.inhaltKnotenString + '-' + gXMalHStrichX.inhaltKnotenString;
//		fStrichX.linkesChild=hXMalgStrichXMinusgXMalHStrichX;
//
//		fStrichX.inhaltKnotenString = hXMalgStrichXMinusgXMalHStrichX.inhaltKnotenString + "/" + hXQuadrat.inhaltKnotenString;
//		kuerzeSyntaxbaumGebrochenRational(fStrichX);
//		return fStrichX;
//	}else if (funktion.inhaltKnotenSymbol === '+' || funktion.inhaltKnotenSymbol === '-' ) {
//		
//		let fStrichX = new FunktionAlsVektorSyntaxbaum();
//		fStrichX.inhaltKnotenSymbol = funktion.inhaltKnotenSymbol;
//		fStrichX.inhaltKnotenPolynom = funktionAbleitenV3(funktion.inhaltKnotenPolynom);
//		fStrichX.inhaltKnotenString = funktionVectorToString(fStrichX.inhaltKnotenVektor, false);
//		return fStrichX;
//	}else if (funktion.inhaltKnotenSymbol === '*') {
//		
//		let fStrichX = new FunktionAlsVektorSyntaxbaum();
//		fStrichX.inhaltKnotenSymbol = funktion.inhaltKnotenSymbol;
//		fStrichX.inhaltKnotenPolynom = funktionAbleitenV3(funktion.inhaltKnotenPolynom);
////			fStrichX.inhaltKnotenString = funktionVectorToString(fStrichX.inhaltKnotenVektor, false);
//		return fStrichX;
//	}else if (funktion.inhaltKnotenSymbol === '^') {
//		
//		let fStrichX = new FunktionAlsVektorSyntaxbaum();
//		fStrichX.inhaltKnotenSymbol = funktion.inhaltKnotenSymbol;
//		fStrichX.inhaltKnotenPolynom = funktionAbleitenV3(funktion.inhaltKnotenPolynom);
//		//fStrichX.inhaltKnotenString = funktionVectorToString(fStrichX.inhaltKnotenVektor, false);
//		return fStrichX;
//	}else if ((funktion.inhaltKnotenSymbol === 'x'||funktion.inhaltKnotenSymbol === 'X')&&funktion.linkesChild==null&&funktion.rechtesChild==null){
//		
//		let fStrichX = new FunktionAlsVektorSyntaxbaum();
//		fStrichX.inhaltKnotenSymbol = funktion.inhaltKnotenSymbol;
//		fStrichX.inhaltKnotenVektor = funktionAbleitenV3(funktion.inhaltKnotenPolynom);
//		fStrichX.inhaltKnotenString = funktionVectorToString(fStrichX.inhaltKnotenVektor, false);
//		return fStrichX;
//	}

	
}


function funktionAbleitenSyntaxbaum(funktion) {
	let fStrich = new FunktionAlsVektorSyntaxbaum();
	schaueAlleKnotenAnUndLeiteAbV2(funktion, fStrich);

	while(fStrich.parent != null){
		fStrich = fStrich.parent;
	}
	
	fStrich.inhaltKnotenString = syntaxBaumZuTextV2(fStrich,"");
	return fStrich;
}


function funktionVectorToString(funktionAlsVector, mitMalZeichenZwischenXundZahl) {
	let vectorAlsString = "";
	for(let i=funktionAlsVector.length-1;i>=0;i--){
		if(i>1){
			if(funktionAlsVector[i]!=0){
				if(funktionAlsVector[i]<0){
					if(funktionAlsVector[i]===-1){
						vectorAlsString += "-x^" + String(i);
					}else{
						vectorAlsString += String(funktionAlsVector[i])+"x^" + String(i);
					}				
				}else if(funktionAlsVector[i]>0){
					if(i===funktionAlsVector.length-1){
						if(funktionAlsVector[i]===1){
							vectorAlsString += "x^" + String(i);
						}else{
							vectorAlsString += String(funktionAlsVector[i])+"x^" + String(i);
						}
					}else{
						if(funktionAlsVector[i]===1){
							vectorAlsString += "+x^" + String(i);
						}else{
							vectorAlsString += "+"+String(funktionAlsVector[i])+"x^" + String(i);
						}						
					}
				}				
			}
		}if(i===1){
			if(funktionAlsVector[i]!=0){
				if(funktionAlsVector[i]<0){
					if(funktionAlsVector[i]===-1){
						vectorAlsString += "x";
					}else{
						vectorAlsString += String(funktionAlsVector[i])+"x";
					}
					
				}else if(funktionAlsVector[i]>0){
					if(i===funktionAlsVector.length-1){
						if(funktionAlsVector[i]===1){
							vectorAlsString += "x";
						}else{
							vectorAlsString += String(funktionAlsVector[i])+"x";
						}
						
					}else{
						if(funktionAlsVector[i]===1){
							vectorAlsString += "+x";
						}else{
							vectorAlsString += "+"+String(funktionAlsVector[i])+"x";
						}
						
					}
				}		
			}
		}if(i===0){
			if(funktionAlsVector[i]!=0){
				if(funktionAlsVector[i]<0){
					vectorAlsString += String(funktionAlsVector[i]);
				}else if(funktionAlsVector[i]>0){
					if(i===funktionAlsVector.length-1){
						vectorAlsString += String(funktionAlsVector[i]);
					}else{
						vectorAlsString += "+"+String(funktionAlsVector[i]);
					}					
				}
			}
		}
	}
	if(vectorAlsString===""){
		vectorAlsString="0";
	}
	return vectorAlsString;
}

//
//function kuerzeSyntaxbaumGebrochenRational(aktuellerKnoten) {
//	if (aktuellerKnoten.linkesChild == null && aktuellerKnoten.rechtesChild == null) {
//		return aktuellerKnoten;
//	}
//	if (aktuellerKnoten.linkesChild != null) {
//		if (aktuellerKnoten.linkesChild.linkesChild != null) {
//			kuerzeSyntaxbaumGebrochenRational(aktuellerKnoten.linkesChild);
//		}
//	}
//	if (aktuellerKnoten.rechtesChild != null) {
//		if (aktuellerKnoten.rechtesChild.rechtesChild != null) {
//			kuerzeSyntaxbaumGebrochenRational(aktuellerKnoten.rechtesChild);
//		}
//	}
//
//	if (aktuellerKnoten.inhaltKnotenSymbol == '^') {
//
//	}
//
//
//	if (aktuellerKnoten.inhaltKnotenSymbol == '*') {
//		if (aktuellerKnoten.rechtesChild != null && aktuellerKnoten.linkesChild != null) {
//			if ((aktuellerKnoten.rechtesChild.rechtesChild == null && aktuellerKnoten.rechtesChild.linkesChild == null) && (aktuellerKnoten.linkesChild.linkesChild == null && aktuellerKnoten.linkesChild.rechtesChild == null)) {
//				let rechtesPolynom = aktuellerKnoten.rechtesChild.inhaltKnotenVektor;
//				let linkesPolynom = aktuellerKnoten.linkesChild.inhaltKnotenVektor;
//				aktuellerKnoten.inhaltKnotenVektor = polynomMultiplikation(linkesPolynom, rechtesPolynom);
//				aktuellerKnoten.inhaltKnotenString = funktionVectorToString(aktuellerKnoten.inhaltKnotenVektor,false);
//				aktuellerKnoten.rechtesChild=null;
//				aktuellerKnoten.linkesChild=null;
//			}
//		}
//	}
//
//	if (aktuellerKnoten.inhaltKnotenSymbol == '+') {
//		if (aktuellerKnoten.rechtesChild != null&&aktuellerKnoten.linkesChild != null) {
//			if ((aktuellerKnoten.rechtesChild.rechtesChild == null && aktuellerKnoten.rechtesChild.linkesChild == null)&& (aktuellerKnoten.linkesChild.linkesChild == null && aktuellerKnoten.linkesChild.rechtesChild == null)) {
//				let rechtesPolynom = aktuellerKnoten.rechtesChild.inhaltKnotenVektor;
//				let linkesPolynom = aktuellerKnoten.linkesChild.inhaltKnotenVektor;
//				aktuellerKnoten.inhaltKnotenVektor = polynomAddition(linkesPolynom, rechtesPolynom);
//				aktuellerKnoten.inhaltKnotenString = funktionVectorToString(aktuellerKnoten.inhaltKnotenVektor, false);
//				aktuellerKnoten.rechtesChild=null;
//				aktuellerKnoten.linkesChild=null;
//			}
//		}
//	}
//
//	if (aktuellerKnoten.inhaltKnotenSymbol == '-') {
//		if (aktuellerKnoten.rechtesChild != null&&aktuellerKnoten.linkesChild != null) {
//			if ((aktuellerKnoten.rechtesChild.rechtesChild == null && aktuellerKnoten.rechtesChild.linkesChild == null) && (aktuellerKnoten.linkesChild.linkesChild == null && aktuellerKnoten.linkesChild.rechtesChild == null)) {
//				let rechtesPolynom = aktuellerKnoten.rechtesChild.inhaltKnotenVektor;
//				let linkesPolynom = aktuellerKnoten.linkesChild.inhaltKnotenVektor;
//				aktuellerKnoten.inhaltKnotenVektor = polynomSubtraktion(linkesPolynom, rechtesPolynom);
//				aktuellerKnoten.inhaltKnotenString = funktionVectorToString(aktuellerKnoten.inhaltKnotenVektor, false);
//				aktuellerKnoten.rechtesChild=null;
//				aktuellerKnoten.linkesChild=null;
//			}
//		}
//	}
//
//	if (aktuellerKnoten.inhaltKnotenSymbol == '/') 2*x^3+4*x^4-3*x^3+5*x^4
//		aktuellerKnoten.inhaltKnotenString = "(" + aktuellerKnoten.linkesChild.inhaltKnotenString + ')/(' + aktuellerKnoten.rechtesChild.inhaltKnotenString+")";
//	}
//}

function schaueAlleKnotenAn(root){
	let aktuellerKnoten = root;
	while(aktuellerKnoten.rechtesChild!=null){
		if(aktuellerKnoten.linkesChild!=null){
			if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom!=null){
				vergleicheMitAllenAnderen(aktuellerKnoten.linkesChild);
			}			
		}
		if(aktuellerKnoten.rechtesChild!=null){
			aktuellerKnoten = aktuellerKnoten.rechtesChild;
		}
	}
}

function vergleicheMitAllenAnderen(polynom){
	let aktuellerKnoten = polynom.parent;
	
	while(aktuellerKnoten.rechtesChild!=null){
		let rechtesChildGetauscht = false;
		if(aktuellerKnoten.rechtesChild.linkesChild!=null){
			if(aktuellerKnoten.rechtesChild.linkesChild.inhaltKnotenPolynom.potenz===polynom.inhaltKnotenPolynom.potenz){//entlang des baumes und nicht ende letztes blatt
			
				if(aktuellerKnoten.inhaltKnotenSymbol==="-"){
					polynom.inhaltKnotenPolynom.koeffizient = polynom.inhaltKnotenPolynom.koeffizient - aktuellerKnoten.rechtesChild.linkesChild.inhaltKnotenPolynom.koeffizient;
				}else{
					polynom.inhaltKnotenPolynom.koeffizient = polynom.inhaltKnotenPolynom.koeffizient + aktuellerKnoten.rechtesChild.linkesChild.inhaltKnotenPolynom.koeffizient;
				}
				aktuellerKnoten.inhaltKnotenSymbol=aktuellerKnoten.rechtesChild.inhaltKnotenSymbol;
				aktuellerKnoten.rechtesChild = aktuellerKnoten.rechtesChild.rechtesChild;
				rechtesChildGetauscht=true;

			}if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz===polynom.inhaltKnotenPolynom.potenz){//letztes blatt
				
				if(aktuellerKnoten.inhaltKnotenSymbol==="-"){
					polynom.inhaltKnotenPolynom.koeffizient = polynom.inhaltKnotenPolynom.koeffizient - aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient;
				}else{
					polynom.inhaltKnotenPolynom.koeffizient = polynom.inhaltKnotenPolynom.koeffizient + aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient;
				}
				if(aktuellerKnoten.parent!=null){
					aktuellerKnoten.parent.rechtesChild = aktuellerKnoten.linkesChild;
				}else{
					aktuellerKnoten.inhaltKnotenPolynom = polynom.inhaltKnotenPolynom;
					aktuellerKnoten.linkesChild = null;
					aktuellerKnoten.rechtesChild = null;
					aktuellerKnoten.inhaltKnotenSymbol = "";
				}
				
			}
		}else if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz===polynom.inhaltKnotenPolynom.potenz){
			if(aktuellerKnoten.inhaltKnotenSymbol==="-"){
				polynom.inhaltKnotenPolynom.koeffizient = polynom.inhaltKnotenPolynom.koeffizient - aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient;
			}else{
				polynom.inhaltKnotenPolynom.koeffizient = polynom.inhaltKnotenPolynom.koeffizient + aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient;
			}

			aktuellerKnoten.inhaltKnotenPolynom = polynom.inhaltKnotenPolynom;
			aktuellerKnoten.linkesChild = null;
			aktuellerKnoten.rechtesChild = null;
			aktuellerKnoten.inhaltKnotenSymbol = "";

		}
		if(aktuellerKnoten.rechtesChild!=null){
			if(rechtesChildGetauscht===false){
				aktuellerKnoten = aktuellerKnoten.rechtesChild;
			}		
		}
	}
}

function kuerzeSyntaxbaumGebrochenRationalV3(root) {
	if(root.inhaltKnotenSymbol==="/"){
		schaueAlleKnotenAn(root.linkesChild);
		schaueAlleKnotenAn(root.rechtesChild);
	}else{
		schaueAlleKnotenAn(root);
	}
	
	
	
//	if(aktuellerKnoten.inhaltKnotenSymbol==="+") {
//		if(aktuellerKnoten.linkesChild!=undefined && aktuellerKnoten.rechtesChild!=undefined){
//			if (aktuellerKnoten.linkesChild.inhaltKnotenPolynom.potenz === aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz){
//				aktuellerKnoten.linkesChild.inhaltKnotenPolynom.koeffizient += aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.koeffizient;
//				if(aktuellerKnoten.rechtesChild.rechtesChild!=undefined){
//					aktuellerKnoten.rechtesChild = aktuellerKnoten.rechtesChild.rechtesChild;
//				}else{
//					aktuellerKnoten.rechtesChild = null;
//				}
//				
//			}
//		}
//	}
//	
//	if(aktuellerKnoten.inhaltKnotenSymbol==="+"){
//		if(kuerzeSyntaxbaumGebrochenRationalV3.linkesChild!=undefined){
//			if(!isNaN(kuerzeSyntaxbaumGebrochenRationalV3.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName)){
//				kuerzeSyntaxbaumGebrochenRationalV3(kuerzeSyntaxbaumGebrochenRationalV3.linkesChild);
//			}
//			if(!isNaN(kuerzeSyntaxbaumGebrochenRationalV3.linkesChild.inhaltKnotenPolynom.zahlOderVariablenName)){
//				kuerzeSyntaxbaumGebrochenRationalV3(kuerzeSyntaxbaumGebrochenRationalV3.rechtesChild);
//			}
//		}
//
//	}
//	if(aktuellerKnoten.inhaltKnotenSymbol==="*"){
//		if(!isNaN(kuerzeSyntaxbaumGebrochenRationalV3.inhaltKnotenPolynom.zahlOderVariablenName)){
//			
//		}
//	}
}


function schaueAlleKnotenAnV2(root){
	let aktuellerKnoten = root;
	while(aktuellerKnoten.rechtesChild!=null){
		if(aktuellerKnoten.linkesChild!=null){
			if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom!=null){
				vergleicheMitAllenAnderen(aktuellerKnoten.linkesChild);
			}			
		}
		if(aktuellerKnoten.rechtesChild!=null){
			aktuellerKnoten = aktuellerKnoten.rechtesChild;
		}
	}
}


function kuerzeSyntaxbaumGebrochenRationalV4(root) {
	if(root.inhaltKnotenSymbol==="/"){
		schaueAlleKnotenAnV2(root.linkesChild);
		schaueAlleKnotenAnV2(root.rechtesChild);
	}else{
		schaueAlleKnotenAnV2(root);
	}

}



function polynomdivision(zaehler, nenner) {
	let ergebnis = []; 
	let tmp = []; 
	let rest = []; 
	for(let i =0;i<zaehler.length;i++){
		rest.push(0);
		tmp.push(0);
	}
	for(let i=0; i<zaehler.length-nenner.length-1; i++){
		ergebnis.push(0);
	}
	let round = 0;
	let i, j, k;
	for ( i = zaehler.length-1 ,  j= nenner.length - 1 ,  k= ergebnis.length-1; i > -1+ (nenner.length-1); i--) {
		ergebnis[k- round] = zaehler[i] / nenner[j];
		for (let g = tmp.length-1; j > -1 ; g--,j--) {
			tmp[g-round] = nenner[j] * ergebnis[k-round];
		}
		j = nenner.length - 1;
		
		for (let g = zaehler.length - 1 - round; g > zaehler.length - 1 - round - nenner.length;g--) {
			zaehler[g] = zaehler[g] - tmp[g];
			if ((-1 + (nenner.length - 1))<i) {
				tmp[g] = 0;
			}			
		}
		round++;
	}
	for (let i = 0; i < zaehler.length; i++) {
		rest[i] = zaehler[i] - tmp[i];
	}
	let ErgebnisMitRest;
	ErgebnisMitRest.push(ergebnis);
	ErgebnisMitRest.push(rest);
	return ErgebnisMitRest;
}


//function polynomAddition(summand1, summand2) {
//	let groesserePolynom = 0;
//	if (summand1.length > summand2.length) {
//		groesserePolynom = summand1.length;
//	}
//	else {
//		groesserePolynom = summand2.length;
//	}
//	let ergebnis = [];
//	for (let i=0; i<groesserePolynom; i++){
//		ergebnis.push(0);
//	}
//	for (let i = 0; i < groesserePolynom; i++) {
//		if (i>=summand1.length) {
//			ergebnis[i] = summand2[i];
//		}
//		else if(i>=summand2.length) {
//			ergebnis[i] = summand1[i];
//		}
//		else{
//			ergebnis[i] = summand1[i] + summand2[i];
//		}		
//	}
//	return ergebnis;
//}


function polynomAdditionV3(summand1, summand2) {
	let groesserePolynom = 0;
	if (summand1.length > summand2.length) {
		groesserePolynom = summand1.length;
	}
	else {
		groesserePolynom = summand2.length;
	}
	let ergebnis = new Polynom();
	ergebnis.potenz = groesserePolynom;
	
	this.koeffizient = NaN;
	this.zahlOderVariablenName = NaN; //im normalfall x oder auch konstante Zahl
	this.potenz = NaN;
	for (let i=0; i<groesserePolynom; i++){
		ergebnis.push(0);
	}
	for (let i = 0; i < groesserePolynom; i++) {
		if (i>=summand1.length) {
			ergebnis[i] = summand2[i];
		}
		else if(i>=summand2.length) {
			ergebnis[i] = summand1[i];
		}
		else{
			ergebnis[i] = summand1[i] + summand2[i];
		}		
	}
	return ergebnis;
}



function polynomSubtraktion(subtrahend1, subtrahend2) {
	let groesserePolynom = 0;
	if (subtrahend1.length > subtrahend2.length) {
		groesserePolynom = subtrahend1.length;
	}
	else {
		groesserePolynom = subtrahend2.length;
	}
	let ergebnis = [];
	for (let i=0; i<groesserePolynom; i++){
		ergebnis.push(0);
	}
	for (let i = 0; i < groesserePolynom; i++) {
		if (i >= subtrahend1.length) {
			ergebnis[i] = subtrahend2[i];
		}
		else if (i >= subtrahend2.length) {
			ergebnis[i] = subtrahend1[i];
		}
		else {
			ergebnis[i] = subtrahend1[i] - subtrahend2[i];
		}
		
	}
	return ergebnis;
}


function polynomMultiplikation(poly1, poly2) {
	let ergebnis = [];
	for (let i=0; i<poly1.length+ poly2.length-1; i++){
		ergebnis.push(0);
	}
	for (let i = 0; i < poly1.length; i++) {
		for (let j = 0; j < poly2.length; j++) {
			ergebnis[i+j] += poly1[i] * poly2[j];
		}	
	}
	return ergebnis;
}



function newtonVerfahren_GanzRational(startPunktNewton, funktion){
	let tolleranz = Math.pow(10,-10);
	let xn = startPunktNewton;
	let xn1 =0;
	let counter = 0;
	let yVonXn1 = 0;
	let funktionTmp = funktion.gekuerzt;
	let funktionTmpErsteAbleitung = funktion.ersteAbleitung.gekuerzt;

	while((Math.abs(xn-xn1)>tolleranz || Math.abs(getPunktEinfachesGanzrational(xn1,funktionTmp))>tolleranz) && counter<1000){
		if(counter>0){
			xn = xn1;
		}
		xn1 = xn - (getPunktEinfachesGanzrational(xn,funktionTmp) / getPunktEinfachesGanzrational(xn,funktionTmpErsteAbleitung));
		yVonXn1 = getPunktEinfachesGanzrational(xn1,funktionTmp);
		counter++;
	}
	
	let vector2D = {
			x: xn1,
			y: getPunktEinfachesGanzrational(xn1,funktionTmp)
	}
	
	if(Math.abs(vector2D.y)> tolleranz){
		
	}else if(Math.abs(vector2D.y) < tolleranz){
		return vector2D;
	}
}

function newtonVerfahren_GebrochenRational(startPunktNewton, funktion, gebrochenRationalPolstellen){
	let tolleranz = Math.pow(10,-15);
	let xnZaehler = startPunktNewton;
	let xn1Zaehler = 0;
	let counterZaehler = 0;
	let yVonXn1Zaehler = 0;
	let fXZaehler = undefined;
	let fStrichXZaehler = undefined;
	
	if(gebrochenRationalPolstellen===false){
		if(funktion.einfachGanzrational===false){
			if(funktion.inhaltKnotenSymbol === "/"){
				fXZaehler = funktion.linkesChild;
				fStrichXZaehler = funktionAbleitenGebrochenRational(funktion.linkesChild);
			}else{
				if(funktion.gekürzt!=undefined){
					fXZaehler = funktion.gekürzt;
					fStrichXZaehler = funktionAbleitenGebrochenRational(funktion.gekürzt);
				}else{
					fXZaehler = funktion;
					fStrichXZaehler = funktionAbleitenGebrochenRational(funktion.gekuerzt);
				}
				
			}
		}else if(funktion.einfachGanzrational===true){
			fXZaehler = funktion.gekuerzt;
			fStrichXZaehler = funktion.ersteAbleitung;
		}
		
		while (getPunktEinfachesGanzrational(xn1Zaehler, fStrichXZaehler) === 0) {
			xn1Zaehler++;
		}
		while ((Math.abs(xnZaehler - xn1Zaehler)>tolleranz || Math.abs(getPunktEinfachesGanzrational(xn1Zaehler, fXZaehler))>tolleranz) && counterZaehler<1000) {
			if (counterZaehler > 0) {
				xnZaehler = xn1Zaehler;
			}
			xn1Zaehler = xnZaehler - (getPunktEinfachesGanzrational(xn1Zaehler, fXZaehler) / getPunktEinfachesGanzrational(xn1Zaehler, fStrichXZaehler));
			yVonXn1Zaehler = getPunktEinfachesGanzrational(xn1Zaehler, fXZaehler);
			counterZaehler++;
		}
		let p1Zaehler = {
				x:xn1Zaehler,
				y:getPunktEinfachesGanzrational(xn1Zaehler, fXZaehler)
		}

		if (Math.abs(p1Zaehler.y) > tolleranz) {

		}
		else if (Math.abs(p1Zaehler.y) < tolleranz) {
			return p1Zaehler;
		}
	}else{
		
		if (funktion.gekürzt.inhaltKnotenSymbol == '/') {
			let xnNenner = x;
			let xn1Nenner = 0;
			let counterNenner = 0;
			let yVonXn1Nenner = 0;
			let tmp1 = 0;
			let tmp2 = 0;
		
			let fXNenner = undefined;
			let fStrichXNenner = undefined;

			if (funktion.gekürzt.inhaltKnotenSymbol == '/') {
				fXNenner = funktion.gekürzt.rechtesChild;
				fStrichXNenner = funktionAbleitenGebrochenRational(funktion.gekürzt.rechtesChild);
			}
			while (getPunkt(xn1Nenner, fStrichXNenner) == 0) {
				xn1Nenner++;
			}
			while ((Math.abs(xnNenner - xn1Nenner) > tolleranz || Math.abs(getPunkt(xn1Nenner, fXNenner)) > tolleranz) && counterNenner < 1000) {
				if (counterNenner > 0) {
					xnNenner = xn1Nenner;
				}
				tmp1 = getPunkt(xn1Nenner, fXNenner);
				tmp2 = getPunkt(xn1Nenner, fStrichXNenner);
				xn1Nenner = xnNenner - (tmp1 / tmp2);
				yVonXn1Nenner = getPunkt(xn1Nenner, fXNenner);
				counterNenner++;
			}
			let p1Nenner = {
					x:xn1Nenner,
					y:getPunkt(xn1Nenner, fXNenner)
			}

			if (Math.abs(p1Nenner.y) > tolleranz) {

			}
			else if (Math.abs(p1Nenner.y) < tolleranz) {
				return p1Nenner;
			}
		}
	}
}

function regulaFalsi_GebrochenRational( a,  b, funktion) {
	let tolleranz = Math.pow(10,-10);
	let c = 0;
	let counter = 0;
	let fb = f(b, funktion);
	let fa = f(a, funktion);
	let fc = 0;
	
	while (Math.abs(fb) > tolleranz && Math.abs(fa) > tolleranz && counter<1000) {
		fb = f(b, funktion);
		fa = f(a, funktion);
		c = b - (((b - a) / (fb - fa))*fb);
		let fc = f(c, funktion);
		if (fc*fa<0) {
			a = c;
		}
		else if (fc*fb<0) {
			b = c;
		}
		counter++;
	}
	
	let p = undefined;
	if (Math.abs(fa) < tolleranz) {
		p = {
				x:a,
				y:f(a, funktion)
		};
		return p;
	}
	if (Math.abs(fb) < tolleranz) {
		p = {
				x:b,
				y:f(b, funktion)
		};
		return p;
	}
	
}


function regulaFalsi_GanzRational( a,  b, funktion) {
	let tolleranz = Math.pow(10,-10);
	let c = 0;
	let counter = 0;
	let fb = getPunktEinfachesGanzrational(b, funktion);
	let fa = getPunktEinfachesGanzrational(a, funktion);
	let fc = 0;
	
	while (Math.abs(fb) > tolleranz && Math.abs(fa) > tolleranz && counter<1000) {
		fb = getPunktEinfachesGanzrational(b, funktion);
		fa = getPunktEinfachesGanzrational(a, funktion);
		c = b - (((b - a) / (fb - fa))*fb);
		let fc = getPunktEinfachesGanzrational(c, funktion);
		if (fc*fa<0) {
			a = c;
		}
		else if (fc*fb<0) {
			b = c;
		}
		counter++;
	}
	
	let p = undefined;
	if (Math.abs(fa) < tolleranz) {
		p = {
				x:a,
				y:getPunktEinfachesGanzrational(a, funktion)
		};
		return p;
	}
	if (Math.abs(fb) < tolleranz) {
		p = {
				x:b,
				y:getPunktEinfachesGanzrational(b, funktion)
		};
		return p;
	}
	
}

tolleranzRunden = Math.pow(10,-10);
function zahlRunden(zahl){
	if(  Math.abs(zahl - Math.round(zahl)) <tolleranzRunden  ){
		return Math.round(zahl);
	}else{
		return zahl.toFixed(2);
	}
}


//function berechneKurvenDiskusionsPunkte(funktionObjekt){
//	
//	if(funktionObjekt.inhaltKnotenSymbol==="/"){
//		let polynomGradZaehler = funktionObjekt.gekürzt.linkesChild.inhaltKnotenVektor.length-1;
//		let polynomGradNenner = funktionObjekt.gekürzt.rechtesChild.inhaltKnotenVektor.length-1;
//		let polynomGradZaehlerErsteAbleitung = funktionObjekt.gekürzt.ersteAbleitung.linkesChild.inhaltKnotenVektor.length-1;
//		let polynomGradZaehlerZweiteAbleitung = funktionObjekt.gekürzt.zweiteAbleitung.linkesChild.inhaltKnotenVektor.length-1;
//		
//		if(polynomGradZaehler===1){
//			onClickGeradengleichungNullstellen();
//		}else if(polynomGradZaehler===2){
//			onClickMitternachtsformelNullstellen()
//		}else if(polynomGradZaehler===3){
//			onClickRegulaFalsiNullstellen();
//		}
//		
//		if(polynomGradZaehlerErsteAbleitung===1){
//			onClickGeradengleichungExtremstellen();
//		}else if(polynomGradZaehlerErsteAbleitung===2){
//			onClickMitternachtsformelExtremstellen();
//		}else if(polynomGradZaehlerErsteAbleitung>=3){
//			onClickRegulaFalsiExtremstellen();
//		}
//		
//		if(polynomGradZaehlerZweiteAbleitung===1){
//			onClickGeradengleichungWendepunkte();
//		}else if(polynomGradZaehlerZweiteAbleitung===2){
//			onClickMitternachtsformelWendepunkte();
//		}else if(polynomGradZaehlerZweiteAbleitung>=3){
//			onClickRegulaFalsiWendepunkte();
//		}
//		
//
//		if(polynomGradNenner===1){
//			onClickGeradengleichungPolstellen();
//		}else if(polynomGradNenner===2){
//			onClickMitternachtsformelPolstellen();
//		}else if(polynomGradNenner>=3){
//			onClickRegulaFalsiPolstellen();
//		}
//		
//	}else{
//		let polynomGrad = funktionObjekt.gekürzt.inhaltKnotenVektor.length-1;
//		if(polynomGrad===1){
//			
//		}else if(polynomGrad===2){
//			onClickGeradengleichungNullstellen();
//			onClickGeradengleichungExtremstellen();
//		}else if(polynomGrad===3){
//			onClickRegulaFalsiNullstellen();
//			onClickMitternachtsformelExtremstellen();
//			onClickGeradengleichungWendepunkte();
//		}else if(polynomGrad===4){
//			onClickRegulaFalsiNullstellen();
//			onClickRegulaFalsiExtremstellen();
//			onClickMitternachtsformelWendepunkte();
//		}else if(polynomGrad>=5){
//			onClickRegulaFalsiNullstellen();
//			onClickRegulaFalsiExtremstellen();
//			onClickRegulaFalsiWendepunkte();
//		}
//	}
//}

function integrieren(funktionAlsVektor){
	let stammfunktionAlsVektor = [];
	while(stammfunktionAlsVektor.length<funktionAlsVektor.length+1){
		stammfunktionAlsVektor.push(0);
	}
	for(let i=0;i<funktionAlsVektor.length;i++){
		stammfunktionAlsVektor[i+1] = funktionAlsVektor[i] / (i+1);
	}
	return stammfunktionAlsVektor;
}


function berechneKurvenDiskusionsPunkteV3(funktionObjekt){
	
	if(funktionObjekt.einfachGanzrational===false){
		let polynomGradZaehler = funktionObjekt.gekürzt.linkesChild.inhaltKnotenVektor.length-1;
		let polynomGradNenner = funktionObjekt.gekürzt.rechtesChild.inhaltKnotenVektor.length-1;
		let polynomGradZaehlerErsteAbleitung = funktionObjekt.gekürzt.ersteAbleitung.linkesChild.inhaltKnotenVektor.length-1;
		let polynomGradZaehlerZweiteAbleitung = funktionObjekt.gekürzt.zweiteAbleitung.linkesChild.inhaltKnotenVektor.length-1;
		
		if(polynomGradZaehler===1){
			onClickGeradengleichungNullstellen();
		}else if(polynomGradZaehler===2){
			onClickMitternachtsformelNullstellen()
		}else if(polynomGradZaehler===3){
			onClickRegulaFalsiNullstellen();
		}
		
		if(polynomGradZaehlerErsteAbleitung===1){
			onClickGeradengleichungExtremstellen();
		}else if(polynomGradZaehlerErsteAbleitung===2){
			onClickMitternachtsformelExtremstellen();
		}else if(polynomGradZaehlerErsteAbleitung>=3){
			onClickRegulaFalsiExtremstellen();
		}
		
		if(polynomGradZaehlerZweiteAbleitung===1){
			onClickGeradengleichungWendepunkte();
		}else if(polynomGradZaehlerZweiteAbleitung===2){
			onClickMitternachtsformelWendepunkte();
		}else if(polynomGradZaehlerZweiteAbleitung>=3){
			onClickRegulaFalsiWendepunkte();
		}
		

		if(polynomGradNenner===1){
			onClickGeradengleichungPolstellen();
		}else if(polynomGradNenner===2){
			onClickMitternachtsformelPolstellen();
		}else if(polynomGradNenner>=3){
			onClickRegulaFalsiPolstellen();
		}
		
	}else if(funktionObjekt.einfachGanzrational===true){
		let polynomGrad = 0;
		for(let i=0;i<funktionObjekt.gekuerzt.length;i++){
			if(funktionObjekt.gekuerzt[i].potenz>polynomGrad){
				polynomGrad = funktionObjekt.gekuerzt[i].potenz;
			}
		}
		let glattePotenzen = true;
		for(let i=0;i<funktionObjekt.gekuerzt.length;i++){
			if((funktionObjekt.gekuerzt[i].potenz-Math.floor(funktionObjekt.gekuerzt[i].potenz)!=0)){
				glattePotenzen=false;
			}
		}
//		let polynomGrad = funktionObjekt.gekuerzt.inhaltKnotenPolynom.potenz;
		if(glattePotenzen){
			if(polynomGrad===0){
				
			}else if(polynomGrad===1){
				onClickGeradengleichungNullstellen();
			}else if(polynomGrad===2){
				onClickMitternachtsformelNullstellen();
				onClickGeradengleichungExtremstellen();
			}else if(polynomGrad===3){
				onClickRegulaFalsiNullstellen();
				onClickMitternachtsformelExtremstellen();
				onClickGeradengleichungWendepunkte();
			}else if(polynomGrad===4){
				onClickRegulaFalsiNullstellen();
				onClickRegulaFalsiExtremstellen();
				onClickMitternachtsformelWendepunkte();
			}	if(polynomGrad>=5){
				onClickRegulaFalsiNullstellen();
				onClickRegulaFalsiExtremstellen();
				onClickRegulaFalsiWendepunkte();
			}	
		}else{
			onClickRegulaFalsiNullstellen();
			onClickRegulaFalsiExtremstellen();
			onClickRegulaFalsiWendepunkte();
		}
	}
}


