//Diese Klasse ist zum Parsen der eingegebenen Funktion des Benutzers.
//Der Parser wandelt den eingengebenen String in einen Baum aus Polynomen die in Vektor Form daregestellt werden

//Bsp.: f(x)=2*x^3+5
//      +
//     / \
//    *   5
//   / \
//  ^   2
// / \
//x   3


//checkt ob klammern im String sind. Der Boolean schonEntfernt steht für eine entfernung unnötiger Klammer wie z.b.: (3*x^2+4) diese werden bereinigt da sie unnötig sind 
function klammerCheck( functionAlsStringLokal, schonEntfernt) {
	for (let i = schonEntfernt === false ? 1 : 0; i < functionAlsStringLokal.length; i++) {
		if (functionAlsStringLokal[i] === '(') {			
			return true;
		}
	}
	return false;
}

//todo algorithmus ausgiebieg auf fehler/richtigkeit überprüfen
//todo funktionen wie log() sqrt() pow() implementieren
//todo algorithmus vervollständigen. könnte evtl komplett ersetzt werden durch den Shunting-yard-Algorithmus. Ableiten ist damit allerdings nicht möglich, da nur mit dem string gearbeitet wird
//todo 2*x+1 geht nicht

//Parst den linken Part einer ganzrationalen Funktion. Die Blätter eines gebrochenrationalen Polynoms können immer auf ein ganzrationales Polynom reduziert werden
function linkerPart(index, vorzeichenLevel, linkeGrenze, rechteGrenze, aktuellerKnoten, functionAlsStringLokal) {
	if (index === 0) {
		return null;
	}
	let gefunden = false;
	while (!gefunden) {
		for (let i = rechteGrenze - 1; i >= linkeGrenze; i--) {
			if (vorzeichenLevel === 0) {
				if (functionAlsStringLokal[i] === '+' || functionAlsStringLokal[i] === '-') {
					if (i === 0) {

					}
					else if (functionAlsStringLokal[i - 1] === '+' || functionAlsStringLokal[i - 1] === '-' || functionAlsStringLokal[i - 1] === '*' || functionAlsStringLokal[i - 1] === '/') {

					}
					else {
						gefunden = true;
						let neuerLinkerKnoten = new FunktionSyntaxbaum();
						neuerLinkerKnoten.parent=aktuellerKnoten;
						neuerLinkerKnoten.inhaltKnoten=functionAlsStringLokal[i];
						neuerLinkerKnoten.index=i;
						aktuellerKnoten.linkesChild=neuerLinkerKnoten;
						
//						FunktionSyntaxbaum* neuerLinkerKnoten = new FunktionSyntaxbaum();
//						neuerLinkerKnoten.setParent(aktuellerKnoten);
//						neuerLinkerKnoten.setInhalt(functionAlsStringLokal[i]);
//						neuerLinkerKnoten.setIndex(i);
//						aktuellerKnoten.setLinkesChild(neuerLinkerKnoten);
						neuerLinkerKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, aktuellerKnoten.index, neuerLinkerKnoten, functionAlsStringLokal);
						neuerLinkerKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, aktuellerKnoten.index + 1, rechteGrenze, neuerLinkerKnoten, functionAlsStringLokal);
						return neuerLinkerKnoten;
					}
				}
			}
			else if (vorzeichenLevel === 1) {
				if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
					gefunden = true;
					let neuerLinkerKnoten = new FunktionSyntaxbaum();
					neuerLinkerKnoten.parent=aktuellerKnoten;
					neuerLinkerKnoten.inhaltKnoten=functionAlsStringLokal[i];
					neuerLinkerKnoten.index=i;
					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
					
//					FunktionSyntaxbaum* neuerLinkerKnoten = new FunktionSyntaxbaum();
//					neuerLinkerKnoten.setParent(aktuellerKnoten);
//					neuerLinkerKnoten.setInhalt(functionAlsStringLokal[i]);
//					neuerLinkerKnoten.setIndex(i);
//					aktuellerKnoten.setLinkesChild(neuerLinkerKnoten);
					neuerLinkerKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerLinkerKnoten.index, neuerLinkerKnoten, functionAlsStringLokal);
					neuerLinkerKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerLinkerKnoten.index + 1, rechteGrenze, neuerLinkerKnoten, functionAlsStringLokal);
					i = 0;
					return neuerLinkerKnoten;
				}
			}
			else if (vorzeichenLevel === 2) {
				if (functionAlsStringLokal[i] === '^') {
					gefunden = true;
					let neuerLinkerKnoten = new FunktionSyntaxbaum();
					neuerLinkerKnoten.parent=aktuellerKnoten;
					neuerLinkerKnoten.inhaltKnoten=functionAlsStringLokal[i];
					neuerLinkerKnoten.index=i;
					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
					
//					let neuerLinkerKnoten = new FunktionSyntaxbaum();
//					neuerLinkerKnoten.setParent(aktuellerKnoten);
//					neuerLinkerKnoten.setInhalt(functionAlsStringLokal[i]);
//					neuerLinkerKnoten.setIndex(i);
//					aktuellerKnoten.setLinkesChild(neuerLinkerKnoten);
					neuerLinkerKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerLinkerKnoten.index, neuerLinkerKnoten, functionAlsStringLokal);
					neuerLinkerKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerLinkerKnoten.index + 1, rechteGrenze, neuerLinkerKnoten, functionAlsStringLokal);
					i = 0;
					return neuerLinkerKnoten;
				}
			}
			else if (vorzeichenLevel === 3) {
				if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
					gefunden = true;
					let neuerLinkerKnoten = new FunktionSyntaxbaum();
					neuerLinkerKnoten.parent=aktuellerKnoten;
					neuerLinkerKnoten.inhaltKnoten=functionAlsStringLokal[i];
					neuerLinkerKnoten.index=i;
					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
					
//					FunktionSyntaxbaum* neuerLinkerKnoten = new FunktionSyntaxbaum();
//					neuerLinkerKnoten.setParent(aktuellerKnoten);
//					neuerLinkerKnoten.setInhalt(functionAlsStringLokal[i]);
//					neuerLinkerKnoten.setIndex(i);
//					aktuellerKnoten.setLinkesChild(neuerLinkerKnoten);
					neuerLinkerKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerLinkerKnoten.index, neuerLinkerKnoten, functionAlsStringLokal);
					neuerLinkerKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerLinkerKnoten.index + 1, rechteGrenze, neuerLinkerKnoten, functionAlsStringLokal);
					i = 0;
					return neuerLinkerKnoten;
				}
			}
		}
		if (vorzeichenLevel > 3) {
			return null;
		}
		vorzeichenLevel++;
	}
}

//Parst den rechten Part einer ganzrationalen Funktion. Die Blätter eines gebrochenrationalen Polynoms können immer auf ein ganzrationales Polynom reduziert werden
function rechterPart(index, vorzeichenLevel, linkeGrenze, rechteGrenze, aktuellerKnoten, functionAlsStringLokal) {
	if (index === functionAlsStringLokal.length - 1) {
		return null;
	}
	let gefunden = false;
	while (!gefunden) {
		for (let i = linkeGrenze; i <= rechteGrenze; i++) {
			if (vorzeichenLevel === 0) {
				if (functionAlsStringLokal[i] === '+' || functionAlsStringLokal[i] === '-') {
					if (i === 0) {

					}
					else if (functionAlsStringLokal[i - 1] === '+' || functionAlsStringLokal[i - 1] === '-' || functionAlsStringLokal[i - 1] === '*' || functionAlsStringLokal[i - 1] === '/') {

					}
					else {
						gefunden = true;
						let neuerRechterKnoten = new FunktionSyntaxbaum();
						neuerRechterKnoten.parent=aktuellerKnoten;
						neuerRechterKnoten.inhaltKnoten=functionAlsStringLokal[i];
						neuerRechterKnoten.index=i;
						aktuellerKnoten.rechtesChild=neuerRechterKnoten;
						
//						FunktionSyntaxbaum *neuerRechterKnoten = new FunktionSyntaxbaum();
//						neuerRechterKnoten.setParent(aktuellerKnoten);
//						neuerRechterKnoten.setInhalt(functionAlsStringLokal[i]);
//						neuerRechterKnoten.setIndex(i);
//						aktuellerKnoten.setRechtesChild(neuerRechterKnoten);
						neuerRechterKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerRechterKnoten.index, neuerRechterKnoten, functionAlsStringLokal);
						neuerRechterKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerRechterKnoten.index + 1, rechteGrenze, neuerRechterKnoten, functionAlsStringLokal);
						return neuerRechterKnoten;
					}
				}
			}
			else if (vorzeichenLevel === 1) {
				if (functionAlsStringLokal[i] === '^') {
					gefunden = true;
					let neuerRechterKnoten = new FunktionSyntaxbaum();
					neuerRechterKnoten.parent=aktuellerKnoten;
					neuerRechterKnoten.inhaltKnoten=functionAlsStringLokal[i];
					neuerRechterKnoten.index=i;
					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
					
//					FunktionSyntaxbaum* neuerRechterKnoten = new FunktionSyntaxbaum();
//					neuerRechterKnoten.setParent(aktuellerKnoten);
//					neuerRechterKnoten.setInhalt(functionAlsStringLokal[i]);
//					neuerRechterKnoten.setIndex(i);
//					aktuellerKnoten.setRechtesChild(neuerRechterKnoten);
					neuerRechterKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerRechterKnoten.index, neuerRechterKnoten, functionAlsStringLokal);
					neuerRechterKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerRechterKnoten.index + 1, rechteGrenze, neuerRechterKnoten, functionAlsStringLokal);
					i = functionAlsStringLokal.length;
					return neuerRechterKnoten;
				}
			}
			else if (vorzeichenLevel === 2) {
				if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
					gefunden = true;
					let neuerRechterKnoten = new FunktionSyntaxbaum();
					neuerRechterKnoten.parent=aktuellerKnoten;
					neuerRechterKnoten.inhaltKnoten=functionAlsStringLokal[i];
					neuerRechterKnoten.index=i;
					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
					
//					FunktionSyntaxbaum* neuerRechterKnoten = new FunktionSyntaxbaum();
//					neuerRechterKnoten.setParent(aktuellerKnoten);
//					neuerRechterKnoten.setInhalt(functionAlsStringLokal[i]);
//					neuerRechterKnoten.setIndex(i);
//					aktuellerKnoten.setRechtesChild(neuerRechterKnoten);
					neuerRechterKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerRechterKnoten.index, neuerRechterKnoten, functionAlsStringLokal);
					neuerRechterKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerRechterKnoten.index + 1, rechteGrenze, neuerRechterKnoten, functionAlsStringLokal);
					i = functionAlsStringLokal.length;
					return neuerRechterKnoten;
				}
			}
			else if (vorzeichenLevel === 3) {
				if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
					gefunden = true;
					let neuerRechterKnoten = new FunktionSyntaxbaum();
					neuerRechterKnoten.parent=aktuellerKnoten;
					neuerRechterKnoten.inhaltKnoten=functionAlsStringLokal[i];
					neuerRechterKnoten.index=i;
					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
					
					
//					FunktionSyntaxbaum* neuerRechterKnoten = new FunktionSyntaxbaum();
//					neuerRechterKnoten.setParent(aktuellerKnoten);
//					neuerRechterKnoten.setInhalt(functionAlsStringLokal[i]);
//					neuerRechterKnoten.setIndex(i);
//					aktuellerKnoten.setRechtesChild(neuerRechterKnoten);
					neuerRechterKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerRechterKnoten.index, neuerRechterKnoten, functionAlsStringLokal);
					neuerRechterKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerRechterKnoten.index + 1, rechteGrenze, neuerRechterKnoten, functionAlsStringLokal);
					i = functionAlsStringLokal.length;
					return neuerRechterKnoten;
				}
			}
		}
		if (vorzeichenLevel > 3) {
			return null;
		}
		vorzeichenLevel++;
	}
}

//Parst ganzrationale Funktionen zu einem Syntaxbaum aus dem ein Polynom als Vektor erstellt werden kann
function parseFuntionBuffer(neuerFunktionSyntaxbaum, functionAlsString) {
	let gefunden = false;
	let vorzeichenLevel = 0;
	let rechteGrenze = functionAlsString.length;
	let hatKlammern = false;

	for (let i = 0; i < functionAlsString.length; i++) {
		if (functionAlsString[i] === '(') {
			hatKlammern = true;
		}
	}
	while (!gefunden) {
		if (rechteGrenze === 0) {
			neuerFunktionSyntaxbaum.inhaltKnoten = functionAlsString[0];
			neuerFunktionSyntaxbaum.index=0;
			
//			neuerFunktionSyntaxbaum.setRoot(&neuerFunktionSyntaxbaum);
//			neuerFunktionSyntaxbaum.setInhalt(functionAlsString[0]);
//			neuerFunktionSyntaxbaum.setLinkesChild(null);
//			neuerFunktionSyntaxbaum.setRechtesChild(null);
//			neuerFunktionSyntaxbaum.setIndex(0);
			
		}
		for (let i = 0; i < rechteGrenze; i++) { // ^ , vorzeichen, * /, + -
			if (vorzeichenLevel === 0) {
				if (functionAlsString[i] === '+' || functionAlsString[i] === '-') {
					if (i === 0) {

					}
					else if (functionAlsString[i - 1] === '+' || functionAlsString[i - 1] === '-' || functionAlsString[i - 1] === '*' || functionAlsString[i - 1] === '/') {

					}
					else {
						gefunden = true;
						neuerFunktionSyntaxbaum.inhaltKnoten = functionAlsString[i];
						neuerFunktionSyntaxbaum.index=i;
//						neuerFunktionSyntaxbaum.setRoot(&neuerFunktionSyntaxbaum);
//						neuerFunktionSyntaxbaum.setInhalt(functionAlsString[i]);
//						neuerFunktionSyntaxbaum.setIndex(i);
						neuerFunktionSyntaxbaum.linkesChild = linkerPart(i, 0, 0, i, neuerFunktionSyntaxbaum, functionAlsString);
						neuerFunktionSyntaxbaum.rechtesChild = rechterPart(i, 0, i + 1, rechteGrenze, neuerFunktionSyntaxbaum, functionAlsString);
						i = rechteGrenze;
						return neuerFunktionSyntaxbaum;
					}
				}
			}
			else if (vorzeichenLevel === 1) {
				if (functionAlsString[i] === '*' || functionAlsString[i] === '/') {
					gefunden = true;
					neuerFunktionSyntaxbaum.inhaltKnoten = functionAlsString[i];
					neuerFunktionSyntaxbaum.index=i;
//					neuerFunktionSyntaxbaum.setRoot(&neuerFunktionSyntaxbaum);
//					neuerFunktionSyntaxbaum.setInhalt(functionAlsString[i]);
//					neuerFunktionSyntaxbaum.setIndex(i);
					neuerFunktionSyntaxbaum.linkesChild = linkerPart(i, 1, 0, i, neuerFunktionSyntaxbaum, functionAlsString);
					neuerFunktionSyntaxbaum.rechtesChild = rechterPart(i, 1, i + 1, rechteGrenze, neuerFunktionSyntaxbaum, functionAlsString);
					i = rechteGrenze;
					return neuerFunktionSyntaxbaum;
				}
			}
			else if (vorzeichenLevel === 2) {
				if (functionAlsString[i] === '^') {
					gefunden = true;
					neuerFunktionSyntaxbaum.inhaltKnoten = functionAlsString[i];
					neuerFunktionSyntaxbaum.index=i;
//					neuerFunktionSyntaxbaum.setRoot(&neuerFunktionSyntaxbaum);
//					neuerFunktionSyntaxbaum.setInhalt(functionAlsString[i]);
//					neuerFunktionSyntaxbaum.setIndex(i);
					neuerFunktionSyntaxbaum.linkesChild = linkerPart(i, 2, 0, i, neuerFunktionSyntaxbaum, functionAlsString);
					neuerFunktionSyntaxbaum.rechtesChild = rechterPart(i, 2, i + 1, rechteGrenze, neuerFunktionSyntaxbaum, functionAlsString);
					i = rechteGrenze;
					return neuerFunktionSyntaxbaum;
				}
			}
			else if (vorzeichenLevel === 3) {
				if ((parseInt(functionAlsString[i]) >= 0 && parseInt(functionAlsString[i]) <= 9) || functionAlsString[i] === 'x' || functionAlsString[i] === 'X') {
					gefunden = true;
					neuerFunktionSyntaxbaum.inhaltKnoten = functionAlsString[i];
					neuerFunktionSyntaxbaum.index=i;
//					neuerFunktionSyntaxbaum.setRoot(&neuerFunktionSyntaxbaum);
//					neuerFunktionSyntaxbaum.setInhalt(functionAlsString[i]);
//					neuerFunktionSyntaxbaum.setIndex(i);
					neuerFunktionSyntaxbaum.linkesChild = linkerPart(i, 2, 0, i, neuerFunktionSyntaxbaum, functionAlsString);
					neuerFunktionSyntaxbaum.rechtesChild = rechterPart(i, 2, i + 1, rechteGrenze, neuerFunktionSyntaxbaum, functionAlsString);
					i = rechteGrenze;
					return neuerFunktionSyntaxbaum;
				}
			}
		}
		if (vorzeichenLevel > 3) {
			return;
		}
		vorzeichenLevel++;
	}
}

//Splittet Strings auf, um den elementen im Syntaxbaum den teilstring des Polynoms speichern zu können
//z.B. (x^3+3)/(x^2-4)
//           /
//          / \
//     x^3+3   x^2-4
function stringSplitten( i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerKnoten) {
	let substringLinks = "";
	let substringRechts = "";
	
	substringLinks = functionAlsStringLokal.substring(0,i);
	substringRechts = functionAlsStringLokal.substring(i + 1,klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1);
	
//	let g = 0;
//	for (let j = 0; j < i; j++, g++) {
//		substringLinks[g] = functionAlsStringLokal[j];
//	}
//	substringLinks[g] = 0; g = 0;
//	let bis = klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1;
//	for (let j = i + 1; j < bis; j++, g++) {
//		substringRechts[g] = functionAlsStringLokal[j];
//	}
//	substringRechts[g] = 0;
	substringLinks = entferneUnnoetigeKlammern(substringLinks);
	substringRechts = entferneUnnoetigeKlammern(substringRechts);
	linkerPartGebrochenRational(i, 0, neuerKnoten, substringLinks);
	rechterPartGebrochenRational(i, 0, neuerKnoten, substringRechts);
}


function entferneUnnoetigeKlammern(functionAlsStringLokal) {
	let rechteGrenze = functionAlsStringLokal.length;
	let hatKlammern = true;


	let klammerZaehlerAuf = 0;
	let klammerZaehlerZu = 0;
	let klammerLevel = 0;
	let indexErsteKlammerAuf = -1;
	let indexErsteKlammerZu = -1;
	
	klammerCheck(functionAlsStringLokal, false);

	hatKlammern = false;//todo mal schauen ob das hier nicht unnötig oder falsch ist
	for (let i = 0; i < rechteGrenze; i++) {
		if (functionAlsStringLokal[i] == '(') {
			hatKlammern = true;
		}
	}
	let functionAlsStringOhneKlammern=null;
	let hatteUnnoetigeKlammern = false;
	if (rechteGrenze > 2) {
		functionAlsStringOhneKlammern = "";
		
		if (hatKlammern) {
			for (let i = 0; i < rechteGrenze; i++) {
				if (functionAlsStringLokal[i] == '(') {
					if (indexErsteKlammerAuf == -1) { // todo (x^3+2)/(x^2+4) passt
						indexErsteKlammerAuf = i;	// ((x^3+2)+4*x^3) 
					}								// (x^3+2+(4*x^3))
					klammerZaehlerAuf++;			// (x^3+2+4*x^2) passt
					klammerLevel++;					// x^3*(2*x^3)+4
				}									// x^3*((x^3+2)+4*x^3) 
				if (functionAlsStringLokal[i] == ')') {	// ((x^3+2)+4*x^3)*3*x
					if (indexErsteKlammerZu == -1) {//(x^2+3)/(x^3-2)/(x^4+2)... (produkt regel, summenregel)
						indexErsteKlammerZu = i;
					}
					klammerZaehlerZu++;
					klammerLevel--;
				}
				/*if (klammerZaehlerAuf == klammerZaehlerZu && klammerLevel == 0 && klammerZaehlerAuf == 1 && klammerZaehlerZu == 1) {
					int g = 0;
					for (int j = indexErsteKlammerAuf+1; j < indexErsteKlammerZu; j++) {
						functionAlsStringOhneKlammern[g++] = functionAlsStringLokal[j];
					}
					functionAlsStringOhneKlammern[g++] = 0;
					break;
				}*/
				if (klammerZaehlerAuf == klammerZaehlerZu && klammerLevel == 0 && indexErsteKlammerAuf == 0 && indexErsteKlammerZu == rechteGrenze - 1) {
					functionAlsStringOhneKlammern = functionAlsStringLokal.substring(indexErsteKlammerAuf + 1,indexErsteKlammerZu);
					hatteUnnoetigeKlammern = true;
				}

			}
		}
		else {
			return functionAlsStringLokal;
		}
	}
	/*for (int i = 0; i < rechteGrenze; i++) { 
		if (functionAlsString[i] == '(') {
			if (indexErsteKlammerAuf - 1) { // (x^3+2)/(x^2+4) passt
				indexErsteKlammerAuf = i;	// ((x^3+2)+4*x^3) 
			}								// (x^3+2+(4*x^3))
			klammerZaehlerAuf++;			// (x^3+2+4*x^2) passt
			klammerLevel++;					// x^3*(2*x^3)+4
		}									// x^3*((x^3+2)+4*x^3) 
		if (functionAlsString[i] == ')') {	// ((x^3+2)+4*x^3)*3*x
			if (indexErsteKlammerZu - 1) {
				indexErsteKlammerZu = i;
			}
			klammerZaehlerZu++;
			klammerLevel--;
		}
		if (klammerZaehlerAuf == klammerZaehlerZu && klammerLevel == 0 && klammerZaehlerAuf == 1 && klammerZaehlerZu == 1) {
			int g = 0;
			for (int j = indexErsteKlammerAuf; j < indexErsteKlammerZu; j++) {
				functionAlsStringOhneKlammern[g++] = functionAlsStringLokal[j];
			}
		}
	}*/
	if (hatteUnnoetigeKlammern) {
		return functionAlsStringOhneKlammern;
	} else {
		return functionAlsStringLokal;
	}
}

//Hängt einem gebrochenrationalen Syntaxbaum einen neuen knoten mit polynom als vector an
function vectorAnhaengen( functionAlsStringLokal, neuerKnoten) {
	let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
	parseFuntionBuffer(neuerFunktionSyntaxbaum, functionAlsStringLokal);
	let vectorKnoten = [];
	ausSyntaxbaumVektorErstellen(neuerFunktionSyntaxbaum, vectorKnoten);
	neuerKnoten.inhaltKnotenVektor=vectorKnoten;
}


function knotenAnhaengen( links, aktuellerKnoten, functionAlsStringLokal, i) {
	neuerKnoten = new FunktionAlsVektorSyntaxbaum();
	neuerKnoten.parent = aktuellerKnoten;
	neuerKnoten.inhaltKnotenSymbol = functionAlsStringLokal[i];
	neuerKnoten.inhaltKnotenString = functionAlsStringLokal;
	neuerKnoten.index = i;
	if (links) {
		aktuellerKnoten.linkesChild = neuerKnoten;	
	}
	else {
		aktuellerKnoten.rechtesChild = neuerKnoten;
	}
	return neuerKnoten;
}

//Parst den linken Teil eines gebrochenrationalen polynoms 
function linkerPartGebrochenRational( index, vorzeichenLevel, aktuellerKnoten, functionAlsStringLokal) {
	if (index === 0) {
		return;
	}
	let rechteGrenze = functionAlsStringLokal.length;

	let hatKlammern = false;
	hatKlammern = klammerCheck(functionAlsStringLokal, true);
	
	let klammerZaehlerAuf = 0;
	let klammerZaehlerZu = 0;
	let klammerLevel = 0;
	let gefunden = false;
	while (!gefunden) {
		let klammerZaehlerAuf = 0;
		let klammerZaehlerZu = 0;
		let klammerLevel = 0;
		for (let i = 0; i < rechteGrenze; i++) {
			if (functionAlsStringLokal[i] === '(') {
				klammerZaehlerAuf++;
				klammerLevel++;
			}
			if (functionAlsStringLokal[i] === ')') {
				klammerZaehlerZu++;
				klammerLevel--;
			}
			if (((klammerZaehlerAuf === 1 && klammerZaehlerZu === 0) && klammerLevel === 1 && functionAlsStringLokal[0] === '(') || ((klammerZaehlerAuf === 0 && klammerZaehlerZu === 0) && klammerLevel === 0)) {
				if (vorzeichenLevel === 0) {
					if (functionAlsStringLokal[i] === '+' || functionAlsStringLokal[i] === '-') {
						if (i === 0) {

						}
						else if (functionAlsStringLokal[i - 1] === '+' || functionAlsStringLokal[i - 1] === '-' || functionAlsStringLokal[i - 1] === '*' || functionAlsStringLokal[i - 1] === '/') {

						}
						else {
							gefunden = true;
							let neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
//							FunktionAlsVektorSyntaxbaum* neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
							if (hatKlammern) {
								stringSplitten(i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerLinkerKnoten);
							}
							else {
								vectorAnhaengen(functionAlsStringLokal, neuerLinkerKnoten);
							}
							return;
						}
					}
				}
				else if (vorzeichenLevel === 1) {
					if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
						gefunden = true;
						let neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
//						FunktionAlsVektorSyntaxbaum* neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
						if (hatKlammern) {
							stringSplitten(i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerLinkerKnoten);
						}
						else {
							vectorAnhaengen(functionAlsStringLokal, neuerLinkerKnoten);
						}
						return;
					}
				}
				else if (vorzeichenLevel === 2) {
					if (functionAlsStringLokal[i] === '^') {
						gefunden = true;
						let neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
//						FunktionAlsVektorSyntaxbaum* neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
						if (hatKlammern) {
							stringSplitten(i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerLinkerKnoten);
						}
						else {
							vectorAnhaengen(functionAlsStringLokal, neuerLinkerKnoten);
						}
						return;
					}
				}
				else if (vorzeichenLevel === 3) {
					if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
						gefunden = true;
						let neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
//						FunktionAlsVektorSyntaxbaum* neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
						vectorAnhaengen(functionAlsStringLokal, neuerLinkerKnoten);
						return;
					}
				}
			}
		}
		if (vorzeichenLevel > 3) {
			return;
		}
		vorzeichenLevel++;
	}
}

//Parst den rechten Teil eines gebrochenrationalen polynoms 
function rechterPartGebrochenRational(index, vorzeichenLevel, aktuellerKnoten, functionAlsStringLokal) {
	if (index === 0) {
		return;
	}
	let gefunden = false;
	let klammerZaehlerAuf = 0;
	let klammerZaehlerZu = 0;
	let klammerLevel = 0;
	let rechteGrenze = functionAlsStringLokal.length;
	let hatKlammern = false;
	hatKlammern = klammerCheck(functionAlsStringLokal, true);
	
	
	while (!gefunden) {
		let klammerZaehlerAuf = 0;
		let klammerZaehlerZu = 0;
		let klammerLevel = 0;
		for (let i = 0; i < rechteGrenze; i++) {
			if (functionAlsStringLokal[i] === '(') {
				klammerZaehlerAuf++;
				klammerLevel++;
			}
			if (functionAlsStringLokal[i] === ')') {
				klammerZaehlerZu++;
				klammerLevel--;
			}
			if (((klammerZaehlerAuf === 1 && klammerZaehlerZu === 0) && klammerLevel === 1 && functionAlsStringLokal[0] === '(') || ((klammerZaehlerAuf === 0 && klammerZaehlerZu === 0) && klammerLevel === 0)) {
				if (vorzeichenLevel === 0) {
					if (functionAlsStringLokal[i] === '+' || functionAlsStringLokal[i] === '-') {
						if (i === 0) {

						}
						else if (functionAlsStringLokal[i - 1] === '+' || functionAlsStringLokal[i - 1] === '-' || functionAlsStringLokal[i - 1] === '*' || functionAlsStringLokal[i - 1] === '/') {

						}
						else {
							gefunden = true;
							let neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
//							FunktionAlsVektorSyntaxbaum* neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
							if (hatKlammern) {
								stringSplitten(i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerRechterKnoten);
							}
							else {
								vectorAnhaengen(functionAlsStringLokal, neuerRechterKnoten);
							}
							return null;
						}
					}
				}
				else if (vorzeichenLevel === 1) {
					if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
						gefunden = true;
						let neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
//						FunktionAlsVektorSyntaxbaum* neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
						if (hatKlammern) {
							stringSplitten(i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerRechterKnoten);
						}
						else {
							vectorAnhaengen(functionAlsStringLokal, neuerRechterKnoten);
						}
						return null;
					}
				}
				else if (vorzeichenLevel === 2) {
					if (functionAlsStringLokal[i] === '^') {
						gefunden = true;
						let neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
//						FunktionAlsVektorSyntaxbaum* neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
						if (hatKlammern) {
							stringSplitten(i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerRechterKnoten);
						}
						else {
							vectorAnhaengen(functionAlsStringLokal, neuerRechterKnoten);
						}
						return null;
					}
				}
				else if (vorzeichenLevel === 3) {
					if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
						gefunden = true;
						let neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
//						FunktionAlsVektorSyntaxbaum* neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
						vectorAnhaengen(functionAlsStringLokal, neuerRechterKnoten);
						return null;
					}
				}
			}
		}
		if (vorzeichenLevel > 3) {
			return null;
		}
		vorzeichenLevel++;
	}
}


//Parst den eingegebenen String ab und baut je nach eingabe einen ganzrationalen oder gebrochenrationalen Baum aus Polynomen auf mit denen gerechnet werden kann
function splitEquationBuffer(neuerFunktionSyntaxbaumGebrochenRational, functionAlsString){
	let gefunden = false;
	let vorzeichenLevel = 0;
	let rechteGrenze = functionAlsString.length;
	let klammerZaehlerAuf = 0;
	let klammerZaehlerZu = 0;
	let klammerLevel = 0;
	let hatKlammern = false;
	
	hatKlammern = klammerCheck(functionAlsString, false);
	
	while (!gefunden) {
		if (rechteGrenze === 0) {
			neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = functionAlsString[0];
//			neuerFunktionSyntaxbaumGebrochenRational.setRoot(neuerFunktionSyntaxbaumGebrochenRational);
//			neuerFunktionSyntaxbaumGebrochenRational.setInhalt(functionAlsString[0]);
//			neuerFunktionSyntaxbaumGebrochenRational.setLinkesChild(null);
//			neuerFunktionSyntaxbaumGebrochenRational.setRechtesChild(null);
//			neuerFunktionSyntaxbaumGebrochenRational.setUnaeresChild(null);
		}
		for (let i = 0; i < rechteGrenze; i++) { // ^ , vorzeichen, * /, + -
			if (functionAlsString[i] === '(') {
				klammerZaehlerAuf++;
				klammerLevel++;
			}
			if (functionAlsString[i] === ')') {
				klammerZaehlerZu++;
				klammerLevel--;
			}
			if ((klammerZaehlerAuf === klammerZaehlerZu) && klammerLevel === 0) {
				if (vorzeichenLevel === 0) {
					if (functionAlsString[i] === '+' || functionAlsString[i] === '-') {
						if (i === 0) {

						}
						else if (functionAlsString[i - 1] === '+' || functionAlsString[i - 1] === '-' || functionAlsString[i - 1] === '*' || functionAlsString[i - 1] === '/') {

						}
						else {
							gefunden = true;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = functionAlsString[i];
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;
							
//							neuerFunktionSyntaxbaumGebrochenRational.setRoot(&neuerFunktionSyntaxbaumGebrochenRational);
//							neuerFunktionSyntaxbaumGebrochenRational.setInhalt(functionAlsString[i]);
//							neuerFunktionSyntaxbaumGebrochenRational.setInhalt(functionAlsString);
							if (hatKlammern) {
								let substringLinks="";
								let substringRechts="";
								
								substringLinks = functionAlsString.substring(klammerLevel === 0 ? 0 : 1,i);
								substringRechts = functionAlsString.substring(i + 1, klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1);

								
//								let g = 0;
//								for (let j = klammerLevel === 0 ? 0 : 1; j < i; j++, g++) {
//									substringLinks[g] = functionAlsString[j];
//								}
//								substringLinks[g] = 0; g = 0;
//								let bis = klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1;
//								for (let j = i + 1; j < bis; j++, g++) {
//									substringRechts[g] = functionAlsString[j];
//								}
//								substringRechts[g] = 0;
								linkerPartGebrochenRational(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks);
								rechterPartGebrochenRational(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
							}
							else {
								let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
								neuerFunktionSyntaxbaum = parseFuntionBuffer(neuerFunktionSyntaxbaum, functionAlsString);
								let vectorKnoten=[];
								vectorKnoten = ausSyntaxbaumVektorErstellen(neuerFunktionSyntaxbaum, vectorKnoten);
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
							}
							i = rechteGrenze;

						}
					}
				}
				else if (vorzeichenLevel === 1) {
					if (functionAlsString[i] === '*' || functionAlsString[i] === '/') {
						gefunden = true;
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = functionAlsString[i];
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;
//						neuerFunktionSyntaxbaumGebrochenRational.setRoot(&neuerFunktionSyntaxbaumGebrochenRational);
//						neuerFunktionSyntaxbaumGebrochenRational.setInhalt(functionAlsString[i]);
//						neuerFunktionSyntaxbaumGebrochenRational.setInhalt(functionAlsString);
						if (hatKlammern) {
						
							let substringLinks="";
							let substringRechts="";

							
							substringLinks = functionAlsString.substring(functionAlsString[0] === '(' ? 1 : 0, (functionAlsString[i-1] === ')' ? i - 1 : i));
							substringRechts = functionAlsString.substring(functionAlsString[i + 1] === '(' ? i + 2 : i + 1, functionAlsString[rechteGrenze-1] === ')' ? rechteGrenze - 1 : rechteGrenze);
//							let g = 0;
							//							for (let j = functionAlsString[0] === '(' ? 1 : 0; j < (functionAlsString[i-1] === ')' ? i - 1 : i); j++, g++) {
//								substringLinks[g] = functionAlsString[j];
//							}substringLinks[g] = 0; g = 0;
//							let bis = functionAlsString[rechteGrenze-1] === ')' ? rechteGrenze - 1 : rechteGrenze;
//							for (let j = functionAlsString[i + 1] === '(' ? i + 2 : i + 1; j < bis; j++, g++) {
//								substringRechts[g] = functionAlsString[j];
//							}substringRechts[g] = 0;
							linkerPartGebrochenRational(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks); //wenn 2 klammern gefunden, vorzeichenlevel wieder auf 0 für in der klammer
							rechterPartGebrochenRational(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
						}
						else {
							let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
							neuerFunktionSyntaxbaum = parseFuntionBuffer(neuerFunktionSyntaxbaum, functionAlsString);
							let vectorKnoten=[];
							vectorKnoten = ausSyntaxbaumVektorErstellen(neuerFunktionSyntaxbaum, vectorKnoten);
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
						}
						i = rechteGrenze;
					}
				}
				else if (vorzeichenLevel === 2) {
					if (functionAlsString[i] === '^') {
						gefunden = true;
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = functionAlsString[i];
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;
//						neuerFunktionSyntaxbaumGebrochenRational.setRoot(&neuerFunktionSyntaxbaumGebrochenRational);
//						neuerFunktionSyntaxbaumGebrochenRational.setInhalt(functionAlsString[i]);
//						neuerFunktionSyntaxbaumGebrochenRational.setInhalt(functionAlsString);
						if (hatKlammern) {
							let substringLinks = "";
							let substringRechts = "";
							
							substringLinks = functionAlsString.substring(klammerLevel === 0 ? 0 : 1,i);
							substringRechts = functionAlsString.substring(i + 1,klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1);
							
//							let g = 0;
//							for (let j = klammerLevel === 0 ? 0 : 1; j < i; j++, g++) {
//								substringLinks[g] = functionAlsString[j];
//							}substringLinks[g] = 0; g = 0;
//							let bis = klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1;
//							for (let j = i + 1; j < bis; j++, g++) {
//								substringRechts[g] = functionAlsString[j];
//							}substringRechts[g] = 0;
							linkerPartGebrochenRational(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks);
							rechterPartGebrochenRational(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
						}else {
							let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
							neuerFunktionSyntaxbaum = parseFuntionBuffer(neuerFunktionSyntaxbaum, functionAlsString);
							let vectorKnoten=[];
							vectorKnoten = ausSyntaxbaumVektorErstellen(neuerFunktionSyntaxbaum, vectorKnoten);
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
						}
						i = rechteGrenze;
					}
				}
				else if (vorzeichenLevel === 3) {

					if ((parseInt(functionAlsString[i]) >= 0 && parseInt(functionAlsString[i]) <= 9) || functionAlsString[i] === 'x' || functionAlsString[i] === 'X') {
						gefunden = true;
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = functionAlsString[i];
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;
//						neuerFunktionSyntaxbaumGebrochenRational.setRoot(&neuerFunktionSyntaxbaumGebrochenRational);
//						neuerFunktionSyntaxbaumGebrochenRational.setInhalt(functionAlsString[i]);
//						neuerFunktionSyntaxbaumGebrochenRational.setInhalt(functionAlsString);
						let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
						neuerFunktionSyntaxbaum = parseFuntionBuffer(neuerFunktionSyntaxbaum, functionAlsString);
						let vectorKnoten=[];
						vectorKnoten = ausSyntaxbaumVektorErstellen(neuerFunktionSyntaxbaum, vectorKnoten);
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
						/*WCHAR* substringLinks = new WCHAR[i];
						WCHAR* substringRechts = new WCHAR[rechteGrenze - i];
						letg = 0;
						for (letj = klammerLevel === 0 ? 0 : 1; j < i; j++, g++) {
							substringLinks[g] = functionAlsString[j];
						}substringLinks[g] = 0; g = 0;
						letbis = klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1;
						for (letj = i + 1; j < bis; j++, g++) {
							substringRechts[g] = functionAlsString[j];
						}substringRechts[g] = 0;
						linkerPartGebrochenRational(i, 0, &neuerFunktionSyntaxbaumGebrochenRational, substringLinks);
						rechterPartGebrochenRational(i, 0, &neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
						i = rechteGrenze;*/
					}
				}
				if (vorzeichenLevel > 3) {
					return;
				}
			}
		}
		vorzeichenLevel++;
	}
};

//erstellt vektoren aus einem Syntaxbaum
//z.B.: x^3+2*x^2+3*x+4
//      4,3,2,1 -> der index des vektorelements entspricht dabei der hochzahl vektor[0] == x^0  vektor[1] == x^1 usw
// die darin gespeicherte zahl entspricht dem multiplyer wenn vector[2] 3 ist heißt das 3*x^2
function ausSyntaxbaumVektorErstellen(aktuellerKnoten,  functionAlsVectorLokal) {
	if (aktuellerKnoten.linkesChild === null && aktuellerKnoten.rechtesChild === null) {
		if (aktuellerKnoten.inhaltKnoten === 'x' || aktuellerKnoten.inhaltKnoten === 'X') {
			if (functionAlsVectorLokal.length < 2) {
				while(functionAlsVectorLokal.length < 2){
					functionAlsVectorLokal.push(0)
				}				
			}
			functionAlsVectorLokal[1] += 1;
		}
		else if (parseInt(aktuellerKnoten.inhaltKnoten) >= 0 || parseInt(aktuellerKnoten.inhaltKnoten) <= 9) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += parseInt(aktuellerKnoten.inhaltKnoten);
		}
	}
	if (aktuellerKnoten.linkesChild !== null) {
		if (aktuellerKnoten.linkesChild.linkesChild !== null) {
			ausSyntaxbaumVektorErstellen(aktuellerKnoten.linkesChild, functionAlsVectorLokal);
		}
	}
	if (aktuellerKnoten.rechtesChild !== null) {
		if (aktuellerKnoten.rechtesChild.rechtesChild !== null&&(aktuellerKnoten.inhaltKnoten === '+' || aktuellerKnoten.inhaltKnoten === '^' || aktuellerKnoten.inhaltKnoten === '*' )) {
			ausSyntaxbaumVektorErstellen(aktuellerKnoten.rechtesChild, functionAlsVectorLokal);
		}
	
		if (aktuellerKnoten.rechtesChild.rechtesChild !== null && aktuellerKnoten.inhaltKnoten === '-' ) {
			ausSyntaxbaumVektorErstellen(aktuellerKnoten.rechtesChild, functionAlsVectorLokal);
		}
	}
	if (aktuellerKnoten.inhaltKnoten === '^') {
		if ((aktuellerKnoten.linkesChild.inhaltKnoten === 'x' || aktuellerKnoten.linkesChild.inhaltKnoten === 'X') && (parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) <= 9)) {
			let hochZahl = parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten);
			if (functionAlsVectorLokal.length < hochZahl + 1) {
				while(functionAlsVectorLokal.length < hochZahl + 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			let multiplyer = 1.0;
			if (aktuellerKnoten.parent !== null) {
				if (aktuellerKnoten.parent.inhaltKnoten === '*' && aktuellerKnoten.parent.rechtesChild === aktuellerKnoten) {
					multiplyer = parseInt(aktuellerKnoten.parent.linkesChild.inhaltKnoten);
				}
			}
			let vorzeichen = false;
			let next = aktuellerKnoten;
			while (next.parent !== null) {
				/*if ((next.parent.inhalt === '+'|| next.parent.inhalt === '-') && next.parent.linkesChild === next) {
					next = next.parent;
				}
				else if ((next.parent.inhalt === '*' || next.parent.inhalt === '/')) {
					next = next.parent;
				}*/
				
				if ((next.parent.inhaltKnoten === '+' || next.parent.inhaltKnoten === '-') && next.parent.rechtesChild === next) {
					if (next.parent.inhaltKnoten === '+') {
						vorzeichen = false;
						break;
					}
					else if (next.parent.inhaltKnoten === '-') {
						vorzeichen = true;
						break;
					}
				}
				else {
					next = next.parent;
				}
			}
			//if (aktuellerKnoten.parent.rechtesChild.inhalt >= '1' && aktuellerKnoten.parent.rechtesChild.inhalt >= '9' && aktuellerKnoten.parent.parent.inhalt === '-') {				
			if(vorzeichen){
				functionAlsVectorLokal[hochZahl] -= multiplyer;
			}
			else {
				functionAlsVectorLokal[hochZahl] += multiplyer;
			}			
		}
		
		
		else if ((parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) <= 9) && (parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) <= 9)) {
			let konstante = Math.pow(parseInt(aktuellerKnoten.linkesChild.inhaltKnoten),parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten));
			let hochZahl = 0;
			if (functionAlsVectorLokal.length < hochZahl + 1) {
				functionAlsVectorLokal.push(0);
			}
			let multiplyer = 1.0;
			if (aktuellerKnoten.parent !== null) {
				if (aktuellerKnoten.parent.inhaltKnoten === '*' && aktuellerKnoten.parent.rechtesChild === aktuellerKnoten) {
					multiplyer = parseInt(aktuellerKnoten.parent.linkesChild.inhaltKnoten);
				}
			}
			let vorzeichen = false;
			let next = aktuellerKnoten;
			while (next.parent !== null) {
				/*if ((next.parent.inhalt === '+'|| next.parent.inhalt === '-') && next.parent.linkesChild === next) {
					next = next.parent;
				}
				else if ((next.parent.inhalt === '*' || next.parent.inhalt === '/')) {
					next = next.parent;
				}*/
				
				if ((next.parent.inhaltKnoten === '+' || next.parent.inhaltKnoten === '-') && next.parent.rechtesChild === next) {
					if (next.parent.inhaltKnoten === '+') {
						vorzeichen = false;
						break;
					}
					else if (next.parent.inhaltKnoten === '-') {
						vorzeichen = true;
						break;
					}
				}
				else {
					next = next.parent;
				}
			}
			//if (aktuellerKnoten.parent.rechtesChild.inhalt >= '1' && aktuellerKnoten.parent.rechtesChild.inhalt >= '9' && aktuellerKnoten.parent.parent.inhalt === '-') {				
			if(vorzeichen){
				functionAlsVectorLokal[hochZahl] -= multiplyer*konstante;
			}
			else {
				functionAlsVectorLokal[hochZahl] += multiplyer*konstante;
			}			
		}
	}

	if (aktuellerKnoten.inhaltKnoten === '*') {
		if ((aktuellerKnoten.rechtesChild.inhaltKnoten === 'x' || aktuellerKnoten.rechtesChild.inhaltKnoten === 'X') && (parseInt(aktuellerKnoten.linkesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.linkesChild.inhaltKnoten) <= 9)) {

			if (functionAlsVectorLokal.length < 2) {
				while(functionAlsVectorLokal.length < 2){
					functionAlsVectorLokal.push(0)
				}	
			}
			if (aktuellerKnoten.parent !== null) {
				if (aktuellerKnoten.parent.parent !== null) {
					if (parseInt(aktuellerKnoten.parent.rechtesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.parent.rechtesChild.inhaltKnoten) <= 9 && aktuellerKnoten.parent.parent.inhaltKnoten === '-') {
						functionAlsVectorLokal[1] -= parseInt(aktuellerKnoten.linkesChild.inhaltKnoten);
					}
					if (parseInt(aktuellerKnoten.parent.rechtesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.parent.rechtesChild.inhaltKnoten) <= 9 && aktuellerKnoten.parent.parent.inhaltKnoten === '+') { //hier könnte noch was falsch sein
						functionAlsVectorLokal[1] += parseInt(aktuellerKnoten.linkesChild.inhaltKnoten);
					}
				}
			
				if (aktuellerKnoten.parent.inhaltKnoten === '-' && aktuellerKnoten.parent.rechtesChild === aktuellerKnoten) {
					functionAlsVectorLokal[1] -= parseInt(aktuellerKnoten.linkesChild.inhaltKnoten);
				}
			}
			else {
				functionAlsVectorLokal[1] += parseInt(aktuellerKnoten.linkesChild.inhaltKnoten);
			}			
		}
	}
	if (aktuellerKnoten.inhaltKnoten === '+') {
		if (aktuellerKnoten.linkesChild.inhaltKnoten === '^' && (parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) <= 9)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten);
		}
		if (aktuellerKnoten.linkesChild.inhaltKnoten === '*' && (parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) <= 9)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten);
		}
		if (aktuellerKnoten.linkesChild.inhaltKnoten === 'x' || aktuellerKnoten.linkesChild.inhaltKnoten === 'X' && (parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) <= 9)) {
			if (functionAlsVectorLokal.length < 2) {
				while(functionAlsVectorLokal.length < 2){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten);
			functionAlsVectorLokal[1] += 1;
		}
		if ((parseInt(aktuellerKnoten.linkesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.linkesChild.inhaltKnoten) <= 9) && (parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) <= 9)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += parseInt(aktuellerKnoten.linkesChild.inhaltKnoten) + parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten);
		}
	}
	else if (aktuellerKnoten.inhaltKnoten === '-') {
		if (aktuellerKnoten.linkesChild.inhaltKnoten === '^' && (parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) <= 9)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] -= parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten);
		}
		if (aktuellerKnoten.linkesChild.inhaltKnoten === '*' && (parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) <= 9)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] -= parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten);
		}
		if (aktuellerKnoten.linkesChild.inhaltKnoten === 'x' || aktuellerKnoten.linkesChild.inhaltKnoten === 'X' && (parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) >= 1 && parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten) <= 9)) {
			if (functionAlsVectorLokal.length < 2) {
				while(functionAlsVectorLokal.length < 2){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] -= parseInt(aktuellerKnoten.rechtesChild.inhaltKnoten);
			functionAlsVectorLokal[1] += 1;
		}
	}
	return functionAlsVectorLokal;
}