//berechnet die punkte einer funktion als vektor (x^3+2*x-2)/(x-2) macht probleme
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

// berechnet die punkte einer funktion des objekts der klasse "funktion als
// vektor syntaxbaum"
function getPunkt(x, funktion) {
	let y1 = 0;
	let y2 = 0;
	let y = 0;
	if (funktion.inhaltKnotenSymbol == '/') {
		y1 = f(x,funktion.linkesChild.inhaltKnotenVektor);
		y2 = f(x, funktion.rechtesChild.inhaltKnotenVektor);
		if (y2 != 0) {
			y = y1 / y2;
		}
	}
	if (funktion.inhaltKnotenSymbol === '^'|| funktion.inhaltKnotenSymbol === '*') {
		y = f(x, funktion.inhaltKnotenVektor);
	}
	if (funktion.inhaltKnotenSymbol >= '0' && funktion.inhaltKnotenSymbol <= '9') {
		y = f(x, funktion.inhaltKnotenVektor);
	}
	if (funktion.inhaltKnotenSymbol === 'x' || funktion.inhaltKnotenSymbol === 'X') {
		y = f(x, funktion.inhaltKnotenVektor);
	}
	if (funktion.inhaltKnotenSymbol === '+'|| funktion.inhaltKnotenSymbol === '-') {
		y = f(x, funktion.inhaltKnotenVektor);
	}
	return y;
}

function funktionAbleiten(funktion) {
	abgeleiteteFunktion = [];
	if (funktion.length > 0) {
		for(let i=0;i<funktion.length-1;i++){
			abgeleiteteFunktion.push(0);
		}
		
		for (let j = funktion.length-1; j > 0; j--) {
			if (funktion[j] != 0) {
				abgeleiteteFunktion[j - 1] = funktion[j] * j;
			}
		}
	}
	return abgeleiteteFunktion;
}



function funktionAbleitenGebrochenRational(funktion) {
	if (funktion.inhaltKnotenSymbol === '/') { // Quotientenregel
		let gX = new FunktionAlsVektorSyntaxbaum();
		gX.inhaltKnotenVektor = funktion.linkesChild.inhaltKnotenVektor;
		gX.inhaltKnotenString = funktionVectorToString(gX.inhaltKnotenVektor, false);
		gX.inhaltKnotenSymbol = funktion.linkesChild.inhaltKnotenSymbol;

		let gStrichX = new FunktionAlsVektorSyntaxbaum();
		gStrichX.inhaltKnotenVektor = funktionAbleiten(funktion.linkesChild.inhaltKnotenVektor);
		gStrichX.inhaltKnotenString = funktionVectorToString(gStrichX.inhaltKnotenVektor, false);
		gStrichX.inhaltKnotenSymbol = funktion.linkesChild.inhaltKnotenSymbol;
		
		let hX = new FunktionAlsVektorSyntaxbaum();
		hX.inhaltKnotenVektor = funktion.rechtesChild.inhaltKnotenVektor;
		hX.inhaltKnotenString = funktionVectorToString(hX.inhaltKnotenVektor, false);
		hX.inhaltKnotenSymbol = funktion.rechtesChild.inhaltKnotenSymbol;	
		

		let hStrichX = new FunktionAlsVektorSyntaxbaum();
		hStrichX.inhaltKnotenVektor = funktionAbleiten(funktion.rechtesChild.inhaltKnotenVektor);
		hStrichX.inhaltKnotenString = funktionVectorToString(hStrichX.inhaltKnotenVektor, false);
		hStrichX.inhaltKnotenSymbol = funktion.rechtesChild.inhaltKnotenSymbol;

		let fStrichX = new FunktionAlsVektorSyntaxbaum();
		fStrichX.inhaltKnotenSymbol = '/';
		
		let hXQuadrat = new FunktionAlsVektorSyntaxbaum(); // unter
																					// dem
																					// Bruchstrich
		hXQuadrat.inhaltKnotenSymbol = '*';
		hXQuadrat.linkesChild = hX;
		hXQuadrat.rechtesChild = hX;
		hXQuadrat.inhaltKnotenString = hX.inhaltKnotenString + '*' + hX.inhaltKnotenString;
		fStrichX.rechtesChild = hXQuadrat;
		

		
		let hXMalgStrichXMinusgXMalHStrichX = new FunktionAlsVektorSyntaxbaum(); // Über
																											// dem
																											// Bruchstrich
		hXMalgStrichXMinusgXMalHStrichX.inhaltKnotenSymbol = '-';
		let hXMalgStrichX = new FunktionAlsVektorSyntaxbaum();
		hXMalgStrichX.inhaltKnotenSymbol = '*';
		hXMalgStrichX.linkesChild = hX;
		hXMalgStrichX.rechtesChild = gStrichX;
		hXMalgStrichX.inhaltKnotenString = hX.inhaltKnotenString + '*' + gStrichX.inhaltKnotenString;
		hXMalgStrichXMinusgXMalHStrichX.linkesChild = hXMalgStrichX;

		this.inhaltKnotenSymbol = "";
		this.inhaltKnotenString = "";
		this.inhaltKnotenVektor = [];

		
		let gXMalHStrichX = new FunktionAlsVektorSyntaxbaum();
		gXMalHStrichX.inhaltKnotenSymbol = '*';
		gXMalHStrichX.linkesChild = gX;
		gXMalHStrichX.rechtesChild = hStrichX;
		gXMalHStrichX.inhaltKnotenString = gX.inhaltKnotenString + '*' + hStrichX.inhaltKnotenString;
		
		hXMalgStrichXMinusgXMalHStrichX.rechtesChild = gXMalHStrichX;
		hXMalgStrichXMinusgXMalHStrichX.inhaltKnotenString = hXMalgStrichX.inhaltKnotenString + '-' + gXMalHStrichX.inhaltKnotenString;
		fStrichX.linkesChild=hXMalgStrichXMinusgXMalHStrichX;

		fStrichX.inhaltKnotenString = hXMalgStrichXMinusgXMalHStrichX.inhaltKnotenString + "/" + hXQuadrat.inhaltKnotenString;
		kuerzeSyntaxbaumGebrochenRational(fStrichX);
		return fStrichX;
	}
	else if (funktion.inhaltKnotenSymbol === '+' || funktion.inhaltKnotenSymbol === '-' || funktion.inhaltKnotenSymbol === '*' || funktion.inhaltKnotenSymbol === '^') {
		
		let fStrichX = new FunktionAlsVektorSyntaxbaum();
		fStrichX.inhaltKnotenSymbol = funktion.inhaltKnotenSymbol;
		fStrichX.inhaltKnotenVektor = funktionAbleiten(funktion.inhaltKnotenVektor);
		fStrichX.inhaltKnotenString = funktionVectorToString(fStrichX.inhaltKnotenVektor, false);
		return fStrichX;
	}else if ((funktion.inhaltKnotenSymbol === 'x'||funktion.inhaltKnotenSymbol === 'X')&&funktion.linkesChild==null&&funktion.rechtesChild==null){
		let fStrichX = new FunktionAlsVektorSyntaxbaum();
		fStrichX.inhaltKnotenSymbol = funktion.inhaltKnotenSymbol;
		fStrichX.inhaltKnotenVektor = funktionAbleiten(funktion.inhaltKnotenVektor);
		fStrichX.inhaltKnotenString = funktionVectorToString(fStrichX.inhaltKnotenVektor, false);
		return fStrichX;
	}
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


function kuerzeSyntaxbaumGebrochenRational(aktuellerKnoten) {
	if (aktuellerKnoten.linkesChild == null && aktuellerKnoten.rechtesChild == null) {
		return;
	}
	if (aktuellerKnoten.linkesChild != null) {
		if (aktuellerKnoten.linkesChild.linkesChild != null) {
			kuerzeSyntaxbaumGebrochenRational(aktuellerKnoten.linkesChild);
		}
	}
	if (aktuellerKnoten.rechtesChild != null) {
		if (aktuellerKnoten.rechtesChild.rechtesChild != null) {
			kuerzeSyntaxbaumGebrochenRational(aktuellerKnoten.rechtesChild);
		}
	}

	if (aktuellerKnoten.inhaltKnotenSymbol == '^') {

	}


	if (aktuellerKnoten.inhaltKnotenSymbol == '*') {
		if (aktuellerKnoten.rechtesChild != null && aktuellerKnoten.linkesChild != null) {
			if ((aktuellerKnoten.rechtesChild.rechtesChild == null && aktuellerKnoten.rechtesChild.linkesChild == null) && (aktuellerKnoten.linkesChild.linkesChild == null && aktuellerKnoten.linkesChild.rechtesChild == null)) {
				let rechtesPolynom = aktuellerKnoten.rechtesChild.inhaltKnotenVektor;
				let linkesPolynom = aktuellerKnoten.linkesChild.inhaltKnotenVektor;
				aktuellerKnoten.inhaltKnotenVektor = polynomMultiplikation(linkesPolynom, rechtesPolynom);
				aktuellerKnoten.inhaltKnotenString = funktionVectorToString(aktuellerKnoten.inhaltKnotenVektor,false);
				aktuellerKnoten.rechtesChild=null;
				aktuellerKnoten.linkesChild=null;
			}
		}
	}

	if (aktuellerKnoten.inhaltKnotenSymbol == '+') {
		if (aktuellerKnoten.rechtesChild != null&&aktuellerKnoten.linkesChild != null) {
			if ((aktuellerKnoten.rechtesChild.rechtesChild == null && aktuellerKnoten.rechtesChild.linkesChild == null)&& (aktuellerKnoten.linkesChild.linkesChild == null && aktuellerKnoten.linkesChild.rechtesChild == null)) {
				let rechtesPolynom = aktuellerKnoten.rechtesChild.inhaltKnotenVektor;
				let linkesPolynom = aktuellerKnoten.linkesChild.inhaltKnotenVektor;
				aktuellerKnoten.inhaltKnotenVektor = polynomAddition(linkesPolynom, rechtesPolynom);
				aktuellerKnoten.inhaltKnotenString = funktionVectorToString(aktuellerKnoten.inhaltKnotenVektor, false);
				aktuellerKnoten.rechtesChild=null;
				aktuellerKnoten.linkesChild=null;
			}
		}
	}

	if (aktuellerKnoten.inhaltKnotenSymbol == '-') {
		if (aktuellerKnoten.rechtesChild != null&&aktuellerKnoten.linkesChild != null) {
			if ((aktuellerKnoten.rechtesChild.rechtesChild == null && aktuellerKnoten.rechtesChild.linkesChild == null) && (aktuellerKnoten.linkesChild.linkesChild == null && aktuellerKnoten.linkesChild.rechtesChild == null)) {
				let rechtesPolynom = aktuellerKnoten.rechtesChild.inhaltKnotenVektor;
				let linkesPolynom = aktuellerKnoten.linkesChild.inhaltKnotenVektor;
				aktuellerKnoten.inhaltKnotenVektor = polynomSubtraktion(linkesPolynom, rechtesPolynom);
				aktuellerKnoten.inhaltKnotenString = funktionVectorToString(aktuellerKnoten.inhaltKnotenVektor, false);
				aktuellerKnoten.rechtesChild=null;
				aktuellerKnoten.linkesChild=null;
			}
		}
	}

	if (aktuellerKnoten.inhaltKnotenSymbol == '/') {
		aktuellerKnoten.inhaltKnotenString = "(" + aktuellerKnoten.linkesChild.inhaltKnotenString + ')/(' + aktuellerKnoten.rechtesChild.inhaltKnotenString+")";
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


function polynomAddition(summand1, summand2) {
	let groesserePolynom = 0;
	if (summand1.length > summand2.length) {
		groesserePolynom = summand1.length;
	}
	else {
		groesserePolynom = summand2.length;
	}
	let ergebnis = [];
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



//function newtonVerfahren(startPunktNewton, funktion){
//	let xn = startPunktNewton;
//	let xn1 =0;
//	let counter = 0;
//	let yVonXn1 = 0;
//	let funktionTmp = funktion;
//
//	while((Math.abs(xn-xn1)>tolleranz || Math.abs(getPunkt(xn1,funktionTmp))>tolleranz) && counter<1000){
//		if(counter>0){
//			xn = xn1;
//		}
//		xn1 = xn - (getPunkt(xn,funktionTmp) / getPunkt(xn,funktionTmp.ersteAbleitung));
//		yVonXn1 = getPunkt(xn1,funktionTmp);
//		counter++;
//	}
//	let vector2D = {
//			x: xn1,
//			y: getPunkt(xn1,funktionTmp)
//	}
//	
//	if(Math.abs(vector2D.y)> tolleranz){
//		
//	}else if(Math.abs(vector2D.y) < tolleranz){
//		return vector2D;
//	}
//}

function newtonVerfahren_GebrochenRational(startPunktNewton, funktion, gebrochenRationalPolstellen){
	let tolleranz = Math.pow(10,-15);
	let xnZaehler = startPunktNewton;
	let xn1Zaehler = 0;
	let counterZaehler = 0;
	let yVonXn1Zaehler = 0;
	let fXZaehler = undefined;
	let fStrichXZaehler = undefined;
	
	if(gebrochenRationalPolstellen==false){
		if(funktion.inhaltKnotenSymbol === "/"){
			fXZaehler = funktion.linkesChild;
			fStrichXZaehler = funktionAbleitenGebrochenRational(funktion.linkesChild);
		}else{
			if(funktion.gekürzt!=undefined){
				fXZaehler = funktion.gekürzt;
				fStrichXZaehler = funktionAbleitenGebrochenRational(funktion.gekürzt);
			}else{
				fXZaehler = funktion;
				fStrichXZaehler = funktionAbleitenGebrochenRational(funktion);
			}
			
		}
		while (getPunkt(xn1Zaehler, fStrichXZaehler) == 0) {
			xn1Zaehler++;
		}
		while ((Math.abs(xnZaehler - xn1Zaehler)>tolleranz || Math.abs(getPunkt(xn1Zaehler, fXZaehler))>tolleranz) && counterZaehler<1000) {
			if (counterZaehler > 0) {
				xnZaehler = xn1Zaehler;
			}
			xn1Zaehler = xnZaehler - (getPunkt(xn1Zaehler, fXZaehler) / getPunkt(xn1Zaehler, fStrichXZaehler));
			yVonXn1Zaehler = getPunkt(xn1Zaehler, fXZaehler);
			counterZaehler++;
		}
		let p1Zaehler = {
				x:xn1Zaehler,
				y:getPunkt(xn1Zaehler, fXZaehler)
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

tolleranzRunden = Math.pow(10,-10);
function zahlRunden(zahl){
	if(  Math.abs(zahl - Math.round(zahl)) <tolleranzRunden  ){
		return Math.round(zahl);
	}else{
		return zahl.toFixed(2);
	}
}


function berechneKurvenDiskusionsPunkte(funktionObjekt){
	
	if(funktionObjekt.inhaltKnotenSymbol==="/"){
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
		
	}else{
		let polynomGrad = funktionObjekt.gekürzt.inhaltKnotenVektor.length-1;
		if(polynomGrad===1){
			
		}else if(polynomGrad===2){
			onClickGeradengleichungNullstellen();
			onClickGeradengleichungExtremstellen();
		}else if(polynomGrad===3){
			onClickRegulaFalsiNullstellen();
			onClickMitternachtsformelExtremstellen();
			onClickGeradengleichungWendepunkte();
		}else if(polynomGrad===4){
			onClickRegulaFalsiNullstellen();
			onClickRegulaFalsiExtremstellen();
			onClickMitternachtsformelWendepunkte();
		}else if(polynomGrad>=5){
			onClickRegulaFalsiNullstellen();
			onClickRegulaFalsiExtremstellen();
			onClickRegulaFalsiWendepunkte();
		}
	}
}

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


