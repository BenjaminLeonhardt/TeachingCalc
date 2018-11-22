//berechnet die punkte einer funktion als vektor
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