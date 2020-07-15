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

/*todo algorithmus ausgiebieg auf fehler/richtigkeit überprüfen
//todo funktionen wie log() sqrt() pow() implementieren
//todo algorithmus vervollständigen. könnte evtl komplett ersetzt werden durch den Shunting-yard-Algorithmus. Ableiten ist damit allerdings nicht möglich, da nur mit dem string gearbeitet wird
//todo 2*x+1 geht nicht

//Parst den linken Part einer ganzrationalen Funktion. Die Blätter eines gebrochenrationalen Polynoms können immer auf ein ganzrationales Polynom reduziert werden
//function linkerPart(index, vorzeichenLevel, linkeGrenze, rechteGrenze, aktuellerKnoten, functionAlsStringLokal) {
//	if (index === 0) {
//		return null;
//	}
//	let gefunden = false;
//	while (!gefunden) {
//		for (let i = rechteGrenze - 1; i >= linkeGrenze; i--) {
//			if (vorzeichenLevel === 0) {
//				if (functionAlsStringLokal[i] === '+' || functionAlsStringLokal[i] === '-') {
//					if (i === 0) {
//
//					}
//					else if (functionAlsStringLokal[i - 1] === '+' || functionAlsStringLokal[i - 1] === '-' || functionAlsStringLokal[i - 1] === '*' || functionAlsStringLokal[i - 1] === '/') {
//
//					}
//					else {
//						gefunden = true;
//						let neuerLinkerKnoten = new FunktionSyntaxbaum();
//						neuerLinkerKnoten.parent=aktuellerKnoten;
//						neuerLinkerKnoten.inhaltKnotenSymbol=functionAlsStringLokal[i];
//						neuerLinkerKnoten.index=i;
//						aktuellerKnoten.linkesChild=neuerLinkerKnoten;
//						
////						FunktionSyntaxbaum* neuerLinkerKnoten = new FunktionSyntaxbaum();
////						neuerLinkerKnoten.setParent(aktuellerKnoten);
////						neuerLinkerKnoten.setInhalt(functionAlsStringLokal[i]);
////						neuerLinkerKnoten.setIndex(i);
////						aktuellerKnoten.setLinkesChild(neuerLinkerKnoten);
//						neuerLinkerKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, aktuellerKnoten.index, neuerLinkerKnoten, functionAlsStringLokal);
//						neuerLinkerKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, aktuellerKnoten.index + 1, rechteGrenze, neuerLinkerKnoten, functionAlsStringLokal);
//						return neuerLinkerKnoten;
//					}
//				}
//			}
//			else if (vorzeichenLevel === 1) {
//				if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
//					gefunden = true;
//					let neuerLinkerKnoten = new FunktionSyntaxbaum();
//					neuerLinkerKnoten.parent=aktuellerKnoten;
//					neuerLinkerKnoten.inhaltKnoten=functionAlsStringLokal[i];
//					neuerLinkerKnoten.index=i;
//					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
//					
////					FunktionSyntaxbaum* neuerLinkerKnoten = new FunktionSyntaxbaum();
////					neuerLinkerKnoten.setParent(aktuellerKnoten);
////					neuerLinkerKnoten.setInhalt(functionAlsStringLokal[i]);
////					neuerLinkerKnoten.setIndex(i);
////					aktuellerKnoten.setLinkesChild(neuerLinkerKnoten);
//					neuerLinkerKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerLinkerKnoten.index, neuerLinkerKnoten, functionAlsStringLokal);
//					neuerLinkerKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerLinkerKnoten.index + 1, rechteGrenze, neuerLinkerKnoten, functionAlsStringLokal);
//					i = 0;
//					return neuerLinkerKnoten;
//				}
//			}
//			else if (vorzeichenLevel === 2) {
//				if (functionAlsStringLokal[i] === '^') {
//					gefunden = true;
//					let neuerLinkerKnoten = new FunktionSyntaxbaum();
//					neuerLinkerKnoten.parent=aktuellerKnoten;
//					neuerLinkerKnoten.inhaltKnoten=functionAlsStringLokal[i];
//					neuerLinkerKnoten.index=i;
//					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
//					
////					let neuerLinkerKnoten = new FunktionSyntaxbaum();
////					neuerLinkerKnoten.setParent(aktuellerKnoten);
////					neuerLinkerKnoten.setInhalt(functionAlsStringLokal[i]);
////					neuerLinkerKnoten.setIndex(i);
////					aktuellerKnoten.setLinkesChild(neuerLinkerKnoten);
//					neuerLinkerKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerLinkerKnoten.index, neuerLinkerKnoten, functionAlsStringLokal);
//					neuerLinkerKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerLinkerKnoten.index + 1, rechteGrenze, neuerLinkerKnoten, functionAlsStringLokal);
//					i = 0;
//					return neuerLinkerKnoten;
//				}
//			}
//			else if (vorzeichenLevel === 3) {
//				if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
//					gefunden = true;
//					let neuerLinkerKnoten = new FunktionSyntaxbaum();
//					neuerLinkerKnoten.parent=aktuellerKnoten;
//					neuerLinkerKnoten.inhaltKnoten=functionAlsStringLokal[i];
//					neuerLinkerKnoten.index=i;
//					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
//					
////					FunktionSyntaxbaum* neuerLinkerKnoten = new FunktionSyntaxbaum();
////					neuerLinkerKnoten.setParent(aktuellerKnoten);
////					neuerLinkerKnoten.setInhalt(functionAlsStringLokal[i]);
////					neuerLinkerKnoten.setIndex(i);
////					aktuellerKnoten.setLinkesChild(neuerLinkerKnoten);
//					neuerLinkerKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerLinkerKnoten.index, neuerLinkerKnoten, functionAlsStringLokal);
//					neuerLinkerKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerLinkerKnoten.index + 1, rechteGrenze, neuerLinkerKnoten, functionAlsStringLokal);
//					i = 0;
//					return neuerLinkerKnoten;
//				}
//			}
//		}
//		if (vorzeichenLevel > 3) {
//			return null;
//		}
//		vorzeichenLevel++;
//	}
//}
//
////Parst den rechten Part einer ganzrationalen Funktion. Die Blätter eines gebrochenrationalen Polynoms können immer auf ein ganzrationales Polynom reduziert werden
//function rechterPart(index, vorzeichenLevel, linkeGrenze, rechteGrenze, aktuellerKnoten, functionAlsStringLokal) {
//	if (index === functionAlsStringLokal.length - 1) {
//		return null;
//	}
//	let gefunden = false;
//	while (!gefunden) {
//		for (let i = linkeGrenze; i <= rechteGrenze; i++) {
//			if (vorzeichenLevel === 0) {
//				if (functionAlsStringLokal[i] === '+' || functionAlsStringLokal[i] === '-') {
//					if (i === 0) {
//
//					}
//					else if (functionAlsStringLokal[i - 1] === '+' || functionAlsStringLokal[i - 1] === '-' || functionAlsStringLokal[i - 1] === '*' || functionAlsStringLokal[i - 1] === '/') {
//
//					}
//					else {
//						gefunden = true;
//						let neuerRechterKnoten = new FunktionSyntaxbaum();
//						neuerRechterKnoten.parent=aktuellerKnoten;
//						neuerRechterKnoten.inhaltKnoten=functionAlsStringLokal[i];
//						neuerRechterKnoten.index=i;
//						aktuellerKnoten.rechtesChild=neuerRechterKnoten;
//						
////						FunktionSyntaxbaum *neuerRechterKnoten = new FunktionSyntaxbaum();
////						neuerRechterKnoten.setParent(aktuellerKnoten);
////						neuerRechterKnoten.setInhalt(functionAlsStringLokal[i]);
////						neuerRechterKnoten.setIndex(i);
////						aktuellerKnoten.setRechtesChild(neuerRechterKnoten);
//						neuerRechterKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerRechterKnoten.index, neuerRechterKnoten, functionAlsStringLokal);
//						neuerRechterKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerRechterKnoten.index + 1, rechteGrenze, neuerRechterKnoten, functionAlsStringLokal);
//						return neuerRechterKnoten;
//					}
//				}
//			}
//			else if (vorzeichenLevel === 1) {
//				if (functionAlsStringLokal[i] === '^') {
//					gefunden = true;
//					let neuerRechterKnoten = new FunktionSyntaxbaum();
//					neuerRechterKnoten.parent=aktuellerKnoten;
//					neuerRechterKnoten.inhaltKnoten=functionAlsStringLokal[i];
//					neuerRechterKnoten.index=i;
//					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
//					
////					FunktionSyntaxbaum* neuerRechterKnoten = new FunktionSyntaxbaum();
////					neuerRechterKnoten.setParent(aktuellerKnoten);
////					neuerRechterKnoten.setInhalt(functionAlsStringLokal[i]);
////					neuerRechterKnoten.setIndex(i);
////					aktuellerKnoten.setRechtesChild(neuerRechterKnoten);
//					neuerRechterKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerRechterKnoten.index, neuerRechterKnoten, functionAlsStringLokal);
//					neuerRechterKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerRechterKnoten.index + 1, rechteGrenze, neuerRechterKnoten, functionAlsStringLokal);
//					i = functionAlsStringLokal.length;
//					return neuerRechterKnoten;
//				}
//			}
//			else if (vorzeichenLevel === 2) {
//				if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
//					gefunden = true;
//					let neuerRechterKnoten = new FunktionSyntaxbaum();
//					neuerRechterKnoten.parent=aktuellerKnoten;
//					neuerRechterKnoten.inhaltKnoten=functionAlsStringLokal[i];
//					neuerRechterKnoten.index=i;
//					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
//					
////					FunktionSyntaxbaum* neuerRechterKnoten = new FunktionSyntaxbaum();
////					neuerRechterKnoten.setParent(aktuellerKnoten);
////					neuerRechterKnoten.setInhalt(functionAlsStringLokal[i]);
////					neuerRechterKnoten.setIndex(i);
////					aktuellerKnoten.setRechtesChild(neuerRechterKnoten);
//					neuerRechterKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerRechterKnoten.index, neuerRechterKnoten, functionAlsStringLokal);
//					neuerRechterKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerRechterKnoten.index + 1, rechteGrenze, neuerRechterKnoten, functionAlsStringLokal);
//					i = functionAlsStringLokal.length;
//					return neuerRechterKnoten;
//				}
//			}
//			else if (vorzeichenLevel === 3) {
//				if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
//					gefunden = true;
//					let neuerRechterKnoten = new FunktionSyntaxbaum();
//					neuerRechterKnoten.parent=aktuellerKnoten;
//					neuerRechterKnoten.inhaltKnoten=functionAlsStringLokal[i];
//					neuerRechterKnoten.index=i;
//					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
//					
//					
////					FunktionSyntaxbaum* neuerRechterKnoten = new FunktionSyntaxbaum();
////					neuerRechterKnoten.setParent(aktuellerKnoten);
////					neuerRechterKnoten.setInhalt(functionAlsStringLokal[i]);
////					neuerRechterKnoten.setIndex(i);
////					aktuellerKnoten.setRechtesChild(neuerRechterKnoten);
//					neuerRechterKnoten.linkesChild = linkerPart(i, vorzeichenLevel, linkeGrenze, neuerRechterKnoten.index, neuerRechterKnoten, functionAlsStringLokal);
//					neuerRechterKnoten.rechtesChild = rechterPart(i, vorzeichenLevel, neuerRechterKnoten.index + 1, rechteGrenze, neuerRechterKnoten, functionAlsStringLokal);
//					i = functionAlsStringLokal.length;
//					return neuerRechterKnoten;
//				}
//			}
//		}
//		if (vorzeichenLevel > 3) {
//			return null;
//		}
//		vorzeichenLevel++;
//	}
//}

//Parst ganzrationale Funktionen zu einem Syntaxbaum aus dem ein Polynom als Vektor erstellt werden kann
//function parseFuntionBuffer(neuerFunktionSyntaxbaum, functionAlsString) {
//	let gefunden = false;
//	let vorzeichenLevel = 0;
//	let rechteGrenze = functionAlsString.length;
//	let hatKlammern = false;
//
//	for (let i = 0; i < functionAlsString.length; i++) {
//		if (functionAlsString[i] === '(') {
//			hatKlammern = true;
//		}
//	}
//	while (!gefunden) {
//		if (rechteGrenze === 0) {
//			neuerFunktionSyntaxbaum.inhaltKnoten = functionAlsString[0];
//			neuerFunktionSyntaxbaum.index=0;
//			
////			neuerFunktionSyntaxbaum.setRoot(&neuerFunktionSyntaxbaum);
////			neuerFunktionSyntaxbaum.setInhalt(functionAlsString[0]);
////			neuerFunktionSyntaxbaum.setLinkesChild(null);
////			neuerFunktionSyntaxbaum.setRechtesChild(null);
////			neuerFunktionSyntaxbaum.setIndex(0);
//			
//		}
//		for (let i = 0; i < rechteGrenze; i++) { // ^ , vorzeichen, * /, + -
//			if (vorzeichenLevel === 0) {
//				if (functionAlsString[i] === '+' || functionAlsString[i] === '-') {
//					if (i === 0) {
//
//					}
//					else if (functionAlsString[i - 1] === '+' || functionAlsString[i - 1] === '-' || functionAlsString[i - 1] === '*' || functionAlsString[i - 1] === '/') {
//
//					}
//					else {
//						gefunden = true;
//						neuerFunktionSyntaxbaum.inhaltKnoten = functionAlsString[i];
//						neuerFunktionSyntaxbaum.index=i;
////						neuerFunktionSyntaxbaum.setRoot(&neuerFunktionSyntaxbaum);
////						neuerFunktionSyntaxbaum.setInhalt(functionAlsString[i]);
////						neuerFunktionSyntaxbaum.setIndex(i);
//						neuerFunktionSyntaxbaum.linkesChild = linkerPart(i, 0, 0, i, neuerFunktionSyntaxbaum, functionAlsString);
//						neuerFunktionSyntaxbaum.rechtesChild = rechterPart(i, 0, i + 1, rechteGrenze, neuerFunktionSyntaxbaum, functionAlsString);
//						i = rechteGrenze;
//						return neuerFunktionSyntaxbaum;
//					}
//				}
//			}
//			else if (vorzeichenLevel === 1) {
//				if (functionAlsString[i] === '*' || functionAlsString[i] === '/') {
//					gefunden = true;
//					neuerFunktionSyntaxbaum.inhaltKnoten = functionAlsString[i];
//					neuerFunktionSyntaxbaum.index=i;
////					neuerFunktionSyntaxbaum.setRoot(&neuerFunktionSyntaxbaum);
////					neuerFunktionSyntaxbaum.setInhalt(functionAlsString[i]);
////					neuerFunktionSyntaxbaum.setIndex(i);
//					neuerFunktionSyntaxbaum.linkesChild = linkerPart(i, 1, 0, i, neuerFunktionSyntaxbaum, functionAlsString);
//					neuerFunktionSyntaxbaum.rechtesChild = rechterPart(i, 1, i + 1, rechteGrenze, neuerFunktionSyntaxbaum, functionAlsString);
//					i = rechteGrenze;
//					return neuerFunktionSyntaxbaum;
//				}
//			}
//			else if (vorzeichenLevel === 2) {
//				if (functionAlsString[i] === '^') {
//					gefunden = true;
//					neuerFunktionSyntaxbaum.inhaltKnoten = functionAlsString[i];
//					neuerFunktionSyntaxbaum.index=i;
////					neuerFunktionSyntaxbaum.setRoot(&neuerFunktionSyntaxbaum);
////					neuerFunktionSyntaxbaum.setInhalt(functionAlsString[i]);
////					neuerFunktionSyntaxbaum.setIndex(i);
//					neuerFunktionSyntaxbaum.linkesChild = linkerPart(i, 2, 0, i, neuerFunktionSyntaxbaum, functionAlsString);
//					neuerFunktionSyntaxbaum.rechtesChild = rechterPart(i, 2, i + 1, rechteGrenze, neuerFunktionSyntaxbaum, functionAlsString);
//					i = rechteGrenze;
//					return neuerFunktionSyntaxbaum;
//				}
//			}
//			else if (vorzeichenLevel === 3) {
//				if ((parseInt(functionAlsString[i]) >= 0 && parseInt(functionAlsString[i]) <= 9) || functionAlsString[i] === 'x' || functionAlsString[i] === 'X') {
//					gefunden = true;
//					neuerFunktionSyntaxbaum.inhaltKnoten = functionAlsString[i];
//					neuerFunktionSyntaxbaum.index=i;
////					neuerFunktionSyntaxbaum.setRoot(&neuerFunktionSyntaxbaum);
////					neuerFunktionSyntaxbaum.setInhalt(functionAlsString[i]);
////					neuerFunktionSyntaxbaum.setIndex(i);
//					neuerFunktionSyntaxbaum.linkesChild = linkerPart(i, 2, 0, i, neuerFunktionSyntaxbaum, functionAlsString);
//					neuerFunktionSyntaxbaum.rechtesChild = rechterPart(i, 2, i + 1, rechteGrenze, neuerFunktionSyntaxbaum, functionAlsString);
//					i = rechteGrenze;
//					return neuerFunktionSyntaxbaum;
//				}
//			}
//		}
//		if (vorzeichenLevel > 3) {
//			return;
//		}
//		vorzeichenLevel++;
//	}
//}*/














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
	linkerPartGebrochenRationalV3(i, 0, neuerKnoten, substringLinks);
	rechterPartGebrochenRationalV3(i, 0, neuerKnoten, substringRechts);
}


function entferneUnnoetigeKlammern(functionAlsStringLokal) {
	let rechteGrenze = functionAlsStringLokal.length;
	let hatKlammern = true;
	let klammerZaehlerAuf = 0;
	let klammerZaehlerZu = 0;
	let klammerLevel = 0;
	let indexErsteKlammerAuf = -1;
	let indexErsteKlammerZu = -1;
	let klammerZuGefundenUndNichtAmEnde = false;
	
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
					if (indexErsteKlammerAuf == -1) { // TODO (x^3+2)/(x^2+4) passt
						indexErsteKlammerAuf = i;	// ((x^3+2)+4*x^3) 
					}								// (x^3+2+(4*x^3))
					klammerZaehlerAuf++;			// (x^3+2+4*x^2) passt
					klammerLevel++;					// x^3*(2*x^3)+4
				}									// x^3*((x^3+2)+4*x^3) 
				if (functionAlsStringLokal[i] == ')') {	// ((x^3+2)+4*x^3)*3*x
					if(i!=functionAlsStringLokal.length-1&&klammerLevel===1){
						klammerZuGefundenUndNichtAmEnde = true;
					}
					
					//if (indexLetzteKlammerZu == -1) {//(x^2+3)/(x^3-2)/(x^4+2)... (produkt regel, summenregel)
					indexLetzteKlammerZu = i;		//(((x^20+30*x)))passt
					//}
					klammerZaehlerZu++;
					klammerLevel--;
				}

				if (klammerZaehlerAuf == klammerZaehlerZu && klammerLevel == 0 && indexErsteKlammerAuf == 0 && indexLetzteKlammerZu == rechteGrenze - 1 && !klammerZuGefundenUndNichtAmEnde) {
					functionAlsStringOhneKlammern = functionAlsStringLokal.substring(indexErsteKlammerAuf + 1,indexLetzteKlammerZu);
					hatteUnnoetigeKlammern = true;
				}

			}
		}
		else {
			return functionAlsStringLokal;
		}
	}

// (x^3+2)/(x^2+4) passt
// ((x^3+2)+4*x^3) 
// (x^3+2+(4*x^3))
// (x^3+2+4*x^2) passt
// x^3*(2*x^3)+4
// x^3*((x^3+2)+4*x^3) 
// ((x^3+2)+4*x^3)*3*x

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
//
////Parst den linken Teil eines gebrochenrationalen polynoms 
//function linkerPartGebrochenRationalV3( index, vorzeichenLevel, aktuellerKnoten, functionAlsStringLokal) {
//	if (index === 0) {
//		return;
//	}
//	let rechteGrenze = functionAlsStringLokal.length;
//
//	let hatKlammern = false;
//	hatKlammern = klammerCheck(functionAlsStringLokal, true);
//	
//	let klammerZaehlerAuf = 0;
//	let klammerZaehlerZu = 0;
//	let klammerLevel = 0;
//	let gefunden = false;
//	while (!gefunden) {
//		let klammerZaehlerAuf = 0;
//		let klammerZaehlerZu = 0;
//		let klammerLevel = 0;
//		for (let i = 0; i < rechteGrenze; i++) {
//			if (functionAlsStringLokal[i] === '(') {
//				klammerZaehlerAuf++;
//				klammerLevel++;
//			}
//			if (functionAlsStringLokal[i] === ')') {
//				klammerZaehlerZu++;
//				klammerLevel--;
//			}
//			if (((klammerZaehlerAuf === 1 && klammerZaehlerZu === 0) && klammerLevel === 1 && functionAlsStringLokal[0] === '(') || ((klammerZaehlerAuf === 0 && klammerZaehlerZu === 0) && klammerLevel === 0)) {
//				if (vorzeichenLevel === 0) {
//					if (functionAlsStringLokal[i] === '+' || functionAlsStringLokal[i] === '-') {
//						if (i === 0) {
//
//						}
//						else if (functionAlsStringLokal[i - 1] === '+' || functionAlsStringLokal[i - 1] === '-' || functionAlsStringLokal[i - 1] === '*' || functionAlsStringLokal[i - 1] === '/') {
//
//						}
//						else {
//							gefunden = true;
//							let neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
////							FunktionAlsVektorSyntaxbaum* neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
//							if (hatKlammern) {
//								stringSplitten(i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerLinkerKnoten);
//							}
//							else {
//								vectorAnhaengen(functionAlsStringLokal, neuerLinkerKnoten);
//							}
//							return;
//						}
//					}
//				}
//				else if (vorzeichenLevel === 1) {
//					if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
//						gefunden = true;
//						let neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
////						FunktionAlsVektorSyntaxbaum* neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
//						if (hatKlammern) {
//							stringSplitten(i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerLinkerKnoten);
//						}
//						else {
//							vectorAnhaengen(functionAlsStringLokal, neuerLinkerKnoten);
//						}
//						return;
//					}
//				}
//				else if (vorzeichenLevel === 2) {
//					if (functionAlsStringLokal[i] === '^') {
//						gefunden = true;
//						let neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
////						FunktionAlsVektorSyntaxbaum* neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
//						if (hatKlammern) {
//							stringSplitten(i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerLinkerKnoten);
//						}
//						else {
//							vectorAnhaengen(functionAlsStringLokal, neuerLinkerKnoten);
//						}
//						return;
//					}
//				}
//				else if (vorzeichenLevel === 3) {
//					if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
//						gefunden = true;
//						let neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
////						FunktionAlsVektorSyntaxbaum* neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
//						vectorAnhaengen(functionAlsStringLokal, neuerLinkerKnoten);
//						return;
//					}
//				}
//			}
//		}
//		if (vorzeichenLevel > 3) {
//			return;
//		}
//		vorzeichenLevel++;
//	}
//}
//
////Parst den rechten Teil eines gebrochenrationalen polynoms 
//function rechterPartGebrochenRationalV3(index, vorzeichenLevel, aktuellerKnoten, functionAlsStringLokal) {
//	if (index === 0) {
//		return;
//	}
//	let gefunden = false;
//	let klammerZaehlerAuf = 0;
//	let klammerZaehlerZu = 0;
//	let klammerLevel = 0;
//	let rechteGrenze = functionAlsStringLokal.length;
//	let hatKlammern = false;
//	hatKlammern = klammerCheck(functionAlsStringLokal, true);
//	
//	
//	while (!gefunden) {
//		let klammerZaehlerAuf = 0;
//		let klammerZaehlerZu = 0;
//		let klammerLevel = 0;
//		for (let i = 0; i < rechteGrenze; i++) {
//			if (functionAlsStringLokal[i] === '(') {
//				klammerZaehlerAuf++;
//				klammerLevel++;
//			}
//			if (functionAlsStringLokal[i] === ')') {
//				klammerZaehlerZu++;
//				klammerLevel--;
//			}
//			if (((klammerZaehlerAuf === 1 && klammerZaehlerZu === 0) && klammerLevel === 1 && functionAlsStringLokal[0] === '(') || ((klammerZaehlerAuf === 0 && klammerZaehlerZu === 0) && klammerLevel === 0)) {
//				if (vorzeichenLevel === 0) {
//					if (functionAlsStringLokal[i] === '+' || functionAlsStringLokal[i] === '-') {
//						if (i === 0) {
//
//						}
//						else if (functionAlsStringLokal[i - 1] === '+' || functionAlsStringLokal[i - 1] === '-' || functionAlsStringLokal[i - 1] === '*' || functionAlsStringLokal[i - 1] === '/') {
//
//						}
//						else {
//							gefunden = true;
//							let neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
////							FunktionAlsVektorSyntaxbaum* neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
//							if (hatKlammern) {
//								stringSplitten(i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerRechterKnoten);
//							}
//							else {
//								vectorAnhaengen(functionAlsStringLokal, neuerRechterKnoten);
//							}
//							return null;
//						}
//					}
//				}
//				else if (vorzeichenLevel === 1) {
//					if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
//						gefunden = true;
//						let neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
////						FunktionAlsVektorSyntaxbaum* neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
//						if (hatKlammern) {
//							stringSplitten(i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerRechterKnoten);
//						}
//						else {
//							vectorAnhaengen(functionAlsStringLokal, neuerRechterKnoten);
//						}
//						return null;
//					}
//				}
//				else if (vorzeichenLevel === 2) {
//					if (functionAlsStringLokal[i] === '^') {
//						gefunden = true;
//						let neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
////						FunktionAlsVektorSyntaxbaum* neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
//						if (hatKlammern) {
//							stringSplitten(i, rechteGrenze, klammerLevel, functionAlsStringLokal, neuerRechterKnoten);
//						}
//						else {
//							vectorAnhaengen(functionAlsStringLokal, neuerRechterKnoten);
//						}
//						return null;
//					}
//				}
//				else if (vorzeichenLevel === 3) {
//					if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
//						gefunden = true;
//						let neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
////						FunktionAlsVektorSyntaxbaum* neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
//						vectorAnhaengen(functionAlsStringLokal, neuerRechterKnoten);
//						return null;
//					}
//				}
//			}
//		}
//		if (vorzeichenLevel > 3) {
//			return null;
//		}
//		vorzeichenLevel++;
//	}
//}

//Parst den linken Teil eines gebrochenrationalen polynoms 
function linkerPartGebrochenRationalV3( index, vorzeichenLevel, aktuellerKnoten, functionAlsStringLokal) {
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
								erstelleSyntaxBaumV3(neuerLinkerKnoten,functionAlsStringLokal);
//								vectorAnhaengen(functionAlsStringLokal, neuerLinkerKnoten);
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
							erstelleSyntaxBaumV3(neuerLinkerKnoten,functionAlsStringLokal);
//							vectorAnhaengen(functionAlsStringLokal, neuerLinkerKnoten);
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
							erstelleSyntaxBaumV3(neuerLinkerKnoten,functionAlsStringLokal);
//							vectorAnhaengen(functionAlsStringLokal, neuerLinkerKnoten);
						}
						return;
					}
				}
				else if (vorzeichenLevel === 3) {
					if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
						gefunden = true;
						let neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
//						FunktionAlsVektorSyntaxbaum* neuerLinkerKnoten = knotenAnhaengen(true, aktuellerKnoten, functionAlsStringLokal, i);
						erstelleSyntaxBaumV3(neuerLinkerKnoten,functionAlsStringLokal);
//						vectorAnhaengen(functionAlsStringLokal, neuerLinkerKnoten);
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
function rechterPartGebrochenRationalV3(index, vorzeichenLevel, aktuellerKnoten, functionAlsStringLokal) {
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
								erstelleSyntaxBaumV3(neuerRechterKnoten,functionAlsStringLokal);
//								vectorAnhaengen(functionAlsStringLokal, neuerRechterKnoten);
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
							erstelleSyntaxBaumV3(neuerRechterKnoten,functionAlsStringLokal);
//							vectorAnhaengen(functionAlsStringLokal, neuerRechterKnoten);
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
							erstelleSyntaxBaumV3(neuerRechterKnoten,functionAlsStringLokal);
//							vectorAnhaengen(functionAlsStringLokal, neuerRechterKnoten);
						}
						return null;
					}
				}
				else if (vorzeichenLevel === 3) {
					if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
						gefunden = true;
						let neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
//						FunktionAlsVektorSyntaxbaum* neuerRechterKnoten = knotenAnhaengen(false, aktuellerKnoten, functionAlsStringLokal, i);
//						vectorAnhaengen(functionAlsStringLokal, neuerRechterKnoten);
						erstelleSyntaxBaumV3(neuerRechterKnoten,functionAlsStringLokal);
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
								linkerPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks);
								rechterPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
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
							linkerPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks); //wenn 2 klammern gefunden, vorzeichenlevel wieder auf 0 für in der klammer
							rechterPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
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
							linkerPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks);
							rechterPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
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
						linkerPartGebrochenRationalV3(i, 0, &neuerFunktionSyntaxbaumGebrochenRational, substringLinks);
						rechterPartGebrochenRationalV3(i, 0, &neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
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

/*//erstellt vektoren aus einem Syntaxbaum
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
				}
				
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
				}
				
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
}*/


function convertiereStringZuVerketteteListe(string){
	let liste = [];
	for(let i=0;i<string.length;i++){
		if(string[i]==="x"||string[i]==="X"||string[i]==="^"||string[i]==="+"||string[i]==="-"||string[i]==="*"
			||string[i]==="/"||string[i]==="("||string[i]===")"){
			let neuesElement  = new StringAlsVerketteteListeObjekt();	
			neuesElement.inhalt = string[i];
			neuesElement.indexVon = i;
			neuesElement.indexBis = i;
			if(liste.length!=0){
				neuesElement.prev = liste[liste.length-1];
				liste[liste.length-1].next = neuesElement;
			}
			liste.push(neuesElement);
		
		}else if(((string[i]==="s"&&string[i+1]==="i"&&string[i+2]==="n")||(string[i]==="c"&&string[i+1]==="o"&&string[i+2]==="s")||(string[i]==="t"&&string[i+1]==="a"&&string[i+2]==="n")||(string[i]==="l"&&string[i+1]==="o"&&string[i+2]==="g"))&&string[i+3]==="("){
			let laengeMathematischeFunktion = 0;
			for(let j=i;j<string.length;j++){
				laengeMathematischeFunktion++;
				if(string[j]===")"){
					j=string.length;
				}
			}
			let neuesElement  = new StringAlsVerketteteListeObjekt();	
			neuesElement.inhalt = string.substring(i,laengeMathematischeFunktion);
			neuesElement.indexVon = i;
			neuesElement.indexBis = i+laengeMathematischeFunktion;
			if(liste.length!=0){
				neuesElement.prev = liste[liste.length-1];
				liste[liste.length-1].next = neuesElement;
			}
			liste.push(neuesElement);
			i=i+laengeMathematischeFunktion+1;
		}else if(!isNaN(parseInt(string[i]))){
			let j=0;		
			let kommaZahl = false;
			while(!isNaN(parseInt(string[i+j]))){
				j++;
				if(string[i+j]==="."||string[i+j]===","){
					j++;
					kommaZahl=true;
				}
			}
			let tmpString = string.substring(i,i+j);
			tmpString = tmpString.replace(/,/g,".");
			if(tmpString[tmpString.length-1]==="."){
				tmpString+="0";
			}
		
			let neuesElement  = new StringAlsVerketteteListeObjekt();	
			neuesElement.indexVon = i;
			neuesElement.indexBis = i+j-1;
			if(kommaZahl){
				neuesElement.inhalt = parseFloat(tmpString);
			}else{
				neuesElement.inhalt = parseInt(tmpString);
			}
			
			if(liste.length!=0){
				neuesElement.prev = liste[liste.length-1];
				liste[liste.length-1].next = neuesElement;
			}
			liste.push(neuesElement);
			i=i+j-1;
		}else if((string[i]==="l"&&string[i+1]==="n"&&string[i+2]==="(")){
			let tmpString = string.substring(i,i+2);
		
			let neuesElement  = new StringAlsVerketteteListeObjekt();	
			neuesElement.indexVon = i;
			neuesElement.indexBis = i+2;
			neuesElement.inhalt = parseInt(tmpString);
			if(liste.length!=0){
				neuesElement.prev = liste[liste.length-1];
				liste[liste.length-1].next = neuesElement;
			}
			liste.push(neuesElement);
			i=i+2;
		}
//		else if((string[i]==="s"&&string[i+1]==="i"&&string[i+2]==="n"&&string[i+3]==="(")||(string[i]==="c"&&string[i+1]==="o"&&string[i+2]==="s"&&string[i+3]==="(")||(string[i]==="t"&&string[i+1]==="a"&&string[i+2]==="n"&&string[i+3]==="(")){
//			let tmpString = string.substring(i,i+3);
//		
//			let neuesElement  = new StringAlsVerketteteListeObjekt();	
//			neuesElement.indexVon = i;
//			neuesElement.indexBis = i+3;
//			neuesElement.inhalt = parseInt(tmpString);
//			if(liste.length!=0){
//				neuesElement.prev = liste[liste.length-1];
//				liste[liste.length-1].next = neuesElement;
//			}
//			liste.push(neuesElement);
//			i=i+3;
//		}
		else if(string[i]==="s"&&string[i+1]==="q"&&string[i+2]==="r"&&string[i+3]==="t"&&string[i+4]==="("){
			let tmpString = string.substring(i,i+4);
		
			let neuesElement  = new StringAlsVerketteteListeObjekt();	
			neuesElement.indexVon = i;
			neuesElement.indexBis = i+4;
			neuesElement.inhalt = parseInt(tmpString);
			if(liste.length!=0){
				neuesElement.prev = liste[liste.length-1];
				liste[liste.length-1].next = neuesElement;
			}
			liste.push(neuesElement);
			i=i+4;
		}
	}
	return liste;
}



function aktuellesListenElementSuchen(i,functionAlsListe){
	let aktuellesListenElement = null;
	for(let j=0;j<functionAlsListe.length;j++){
		if(functionAlsListe[j].indexVon<=i&& functionAlsListe[j].indexBis>=i){
			aktuellesListenElement = functionAlsListe[j];
			j=functionAlsListe.length;
		}
	}
	return aktuellesListenElement;
}


/*function erstelleSyntaxBaumV2(neuerFunktionSyntaxbaumGebrochenRational, funktionAlsString){
	let stringOld = "";
	let stringTmp = funktionAlsString;
	let klammernEntfernt = true;
	while(klammernEntfernt){ //"rekursiv" klammern entfernen, also so oft wie halt klammern drin sind 
		stringOld = entferneUnnoetigeKlammern(stringTmp);
		if(stringOld!=stringTmp){
			stringTmp=stringOld;
		}else if(stringOld===stringTmp){
			klammernEntfernt=false;
		}
	}
	functionAlsString = stringTmp;
	let functionAlsListe = convertiereStringZuVerketteteListe(functionAlsString);
	
	let gefunden = false;
	let vorzeichenLevel = 0;
	let rechteGrenze = functionAlsString.length;
	let klammerZaehlerAuf = 0;
	let klammerZaehlerZu = 0;
	let klammerLevel = 0;
	let hatKlammern = false;
	
	hatKlammern = klammerCheck(functionAlsString, true);
	
	while (!gefunden) {
		if (rechteGrenze === 0) {
			neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = functionAlsString[0];
		}
		let aktuellesListenElement = null;
		for (let i = 0; i < rechteGrenze; i++) { // ^ , vorzeichen, * /, + -
			aktuellesListenElement = aktuellesListenElementSuchen(i,functionAlsListe);
			if(aktuellesListenElement!=null){
				i=aktuellesListenElement.indexBis;
			}
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
							
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;
							
							if (hatKlammern) {
								let substringLinks="";
								let substringRechts="";
								
								substringLinks = functionAlsString.substring(klammerLevel === 0 ? 0 : 1,i);
								substringRechts = functionAlsString.substring(i + 1, klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1);

								linkerPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks);
								rechterPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
							}
							else {
								let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
								neuerFunktionSyntaxbaum = parseFuntionBufferV2(neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
								let vectorKnoten=[];
								vectorKnoten = ausSyntaxbaumVektorErstellenV2(neuerFunktionSyntaxbaum, vectorKnoten);
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
							}
							i = rechteGrenze;

						}
					}
				}
				else if (vorzeichenLevel === 1) {
					if (functionAlsString[i] === '*' || functionAlsString[i] === '/') {
						gefunden = true;
						

						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;

						if (hatKlammern) {
						
							let substringLinks="";
							let substringRechts="";

							
							substringLinks = functionAlsString.substring(functionAlsString[0] === '(' ? 1 : 0, (functionAlsString[i-1] === ')' ? i - 1 : i));
							substringRechts = functionAlsString.substring(functionAlsString[i + 1] === '(' ? i + 2 : i + 1, functionAlsString[rechteGrenze-1] === ')' ? rechteGrenze - 1 : rechteGrenze);

							linkerPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks); //wenn 2 klammern gefunden, vorzeichenlevel wieder auf 0 für in der klammer
							rechterPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
						}
						else {
							let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
							neuerFunktionSyntaxbaum = parseFuntionBufferV2(neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
							let vectorKnoten=[];
							vectorKnoten = ausSyntaxbaumVektorErstellenV2(neuerFunktionSyntaxbaum, vectorKnoten);
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
						}
						i = rechteGrenze;
					}
				}
				else if (vorzeichenLevel === 2) {
					if (functionAlsString[i] === '^') {
						gefunden = true;
						

						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;

						if (hatKlammern) {
							let substringLinks = "";
							let substringRechts = "";
							
							substringLinks = functionAlsString.substring(klammerLevel === 0 ? 0 : 1,i);
							substringRechts = functionAlsString.substring(i + 1,klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1);

							linkerPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks);
							rechterPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
						}else {
							let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
							neuerFunktionSyntaxbaum = parseFuntionBufferV2(neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
							let vectorKnoten=[];
							vectorKnoten = ausSyntaxbaumVektorErstellenV2(neuerFunktionSyntaxbaum, vectorKnoten);
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
						}
						i = rechteGrenze;
					}
				}
				else if (vorzeichenLevel === 3) {
					
					//if ((parseInt(functionAlsString[i]) >= 0 && parseInt(functionAlsString[i]) <= 9) || functionAlsString[i] === 'x' || functionAlsString[i] === 'X') {
					if (!isNaN(aktuellesListenElement.inhalt) || functionAlsString[i] === 'x' || functionAlsString[i] === 'X') {
						gefunden = true;
						

						//neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = functionAlsString[i];
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;
						let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
						neuerFunktionSyntaxbaum = parseFuntionBufferV2(neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
						let vectorKnoten=[];
						vectorKnoten = ausSyntaxbaumVektorErstellenV2(neuerFunktionSyntaxbaum, vectorKnoten);
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
					}
				}
				if (vorzeichenLevel > 3) {
					return;
				}
			}
		}
		vorzeichenLevel++;
	}
	
}


function linkerPartV2(index, vorzeichenLevel, linkeGrenze, rechteGrenze, aktuellerKnoten, functionAlsStringLokal, functionAlsListe) {
	if (index === 0) {
		return null;
	}
	let gefunden = false;
	while (!gefunden) {
		let aktuellesListenElement=null;
		for (let i = rechteGrenze - 1; i >= linkeGrenze; i--) {
			aktuellesListenElement = aktuellesListenElementSuchen(i,functionAlsListe);
			if(aktuellesListenElement!=null){
				i=aktuellesListenElement.indexVon;//x^3+2,5*x-2,5
			}
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
						neuerLinkerKnoten.inhaltKnoten=aktuellesListenElement.inhalt;
						neuerLinkerKnoten.index=i;
						aktuellerKnoten.linkesChild=neuerLinkerKnoten;
						
						neuerLinkerKnoten.linkesChild = linkerPartV2(i, vorzeichenLevel, linkeGrenze, aktuellerKnoten.index, neuerLinkerKnoten, functionAlsStringLokal, functionAlsListe);
						neuerLinkerKnoten.rechtesChild = rechterPartV2(i, vorzeichenLevel, aktuellerKnoten.index + 1, rechteGrenze, neuerLinkerKnoten, functionAlsStringLokal, functionAlsListe);
						i = 0;
						return neuerLinkerKnoten;
					}
				}
			}
			else if (vorzeichenLevel === 1) {
				if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
					gefunden = true;
					let neuerLinkerKnoten = new FunktionSyntaxbaum();
					neuerLinkerKnoten.parent=aktuellerKnoten;
					neuerLinkerKnoten.inhaltKnoten=aktuellesListenElement.inhalt;
					neuerLinkerKnoten.index=i;
					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
					
					neuerLinkerKnoten.linkesChild = linkerPartV2(i, vorzeichenLevel, linkeGrenze, neuerLinkerKnoten.index, neuerLinkerKnoten, functionAlsStringLokal, functionAlsListe);
					neuerLinkerKnoten.rechtesChild = rechterPartV2(i, vorzeichenLevel, neuerLinkerKnoten.index + 1, rechteGrenze, neuerLinkerKnoten, functionAlsStringLokal, functionAlsListe);
					i = 0;
					return neuerLinkerKnoten;
				}
			}
			else if (vorzeichenLevel === 2) {
				if (functionAlsStringLokal[i] === '^') {
					gefunden = true;
					let neuerLinkerKnoten = new FunktionSyntaxbaum();
					neuerLinkerKnoten.parent=aktuellerKnoten;
					neuerLinkerKnoten.inhaltKnoten=aktuellesListenElement.inhalt;
					neuerLinkerKnoten.index=i;
					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
					
					neuerLinkerKnoten.linkesChild = linkerPartV2(i, vorzeichenLevel, linkeGrenze, neuerLinkerKnoten.index, neuerLinkerKnoten, functionAlsStringLokal, functionAlsListe);
					neuerLinkerKnoten.rechtesChild = rechterPartV2(i, vorzeichenLevel, neuerLinkerKnoten.index + 1, rechteGrenze, neuerLinkerKnoten, functionAlsStringLokal, functionAlsListe);
					i = 0;
					return neuerLinkerKnoten;
				}
			}
			else if (vorzeichenLevel === 3) {
				//if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
				if (!isNaN(aktuellesListenElement.inhalt) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
					gefunden = true;
					let neuerLinkerKnoten = new FunktionSyntaxbaum();
					neuerLinkerKnoten.parent=aktuellerKnoten;
					if(!isNaN(aktuellesListenElement.inhalt)){
						
						neuerLinkerKnoten.inhaltKnoten=aktuellesListenElement.inhalt;
						neuerLinkerKnoten.index=i;
						if(linkeGrenze<aktuellesListenElement.indexBis){
							i=aktuellesListenElement.indexBis;
							neuerLinkerKnoten.index=i;
							linkeGrenze = aktuellesListenElement.indexBis;
						}
						
					}else{
						i=aktuellesListenElement.indexBis;
						neuerLinkerKnoten.index=i;
						neuerLinkerKnoten.inhaltKnoten=aktuellesListenElement.inhalt;
					}

					
					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
					
					neuerLinkerKnoten.linkesChild = linkerPartV2(i, vorzeichenLevel, linkeGrenze, neuerLinkerKnoten.index, neuerLinkerKnoten, functionAlsStringLokal, functionAlsListe);
					neuerLinkerKnoten.rechtesChild = rechterPartV2(i, vorzeichenLevel, neuerLinkerKnoten.index + 1, rechteGrenze, neuerLinkerKnoten, functionAlsStringLokal, functionAlsListe);
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
function rechterPartV2(index, vorzeichenLevel, linkeGrenze, rechteGrenze, aktuellerKnoten, functionAlsStringLokal, functionAlsListe) {
	if (index === functionAlsStringLokal.length - 1) {
		return null;
	}
	let gefunden = false;
	while (!gefunden) {
		let aktuellesListenElement=null;
		for (let i = linkeGrenze; i <= rechteGrenze; i++) {
			aktuellesListenElement = aktuellesListenElementSuchen(i,functionAlsListe);
			if(aktuellesListenElement!=null){
				i=aktuellesListenElement.indexBis;
			}
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
						
						neuerRechterKnoten.linkesChild = linkerPartV2(i, vorzeichenLevel, linkeGrenze, neuerRechterKnoten.index, neuerRechterKnoten, functionAlsStringLokal, functionAlsListe);
						neuerRechterKnoten.rechtesChild = rechterPartV2(i, vorzeichenLevel, neuerRechterKnoten.index + 1, rechteGrenze, neuerRechterKnoten, functionAlsStringLokal, functionAlsListe);
						i = functionAlsStringLokal.length;
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
					
					neuerRechterKnoten.linkesChild = linkerPartV2(i, vorzeichenLevel, linkeGrenze, neuerRechterKnoten.index, neuerRechterKnoten, functionAlsStringLokal, functionAlsListe);
					neuerRechterKnoten.rechtesChild = rechterPartV2(i, vorzeichenLevel, neuerRechterKnoten.index + 1, rechteGrenze, neuerRechterKnoten, functionAlsStringLokal, functionAlsListe);
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
					
					neuerRechterKnoten.linkesChild = linkerPartV2(i, vorzeichenLevel, linkeGrenze, neuerRechterKnoten.index, neuerRechterKnoten, functionAlsStringLokal, functionAlsListe);
					neuerRechterKnoten.rechtesChild = rechterPartV2(i, vorzeichenLevel, neuerRechterKnoten.index + 1, rechteGrenze, neuerRechterKnoten, functionAlsStringLokal, functionAlsListe);
					i = functionAlsStringLokal.length;
					return neuerRechterKnoten;
				}
			}
			else if (vorzeichenLevel === 3) {
				//if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
				if (!isNaN(aktuellesListenElement.inhalt) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
					gefunden = true;
					let neuerRechterKnoten = new FunktionSyntaxbaum();
					neuerRechterKnoten.parent=aktuellerKnoten;
					if(!isNaN(aktuellesListenElement.inhalt)){
						neuerRechterKnoten.inhaltKnoten=aktuellesListenElement.inhalt;
						i=aktuellesListenElement.indexBis;
						neuerRechterKnoten.index=i;
						if(linkeGrenze<aktuellesListenElement.indexBis){
							linkeGrenze = aktuellesListenElement.indexBis;
						}
																	
					}else{
						i=aktuellesListenElement.indexBis;
						neuerRechterKnoten.index=i;
						neuerRechterKnoten.inhaltKnoten=aktuellesListenElement.inhalt;
					}
					
					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
					
					neuerRechterKnoten.linkesChild = linkerPartV2(i, vorzeichenLevel, linkeGrenze, neuerRechterKnoten.index, neuerRechterKnoten, functionAlsStringLokal, functionAlsListe);
					neuerRechterKnoten.rechtesChild = rechterPartV2(i, vorzeichenLevel, neuerRechterKnoten.index + 1, rechteGrenze, neuerRechterKnoten, functionAlsStringLokal, functionAlsListe);
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
function parseFuntionBufferV2(neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe) {
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
			neuerFunktionSyntaxbaum.inhaltKnoten = aktuellesListenElement;
			neuerFunktionSyntaxbaum.index=0;
			
		}
		aktuellesListenElement=null;
		for (let i = 0; i < rechteGrenze; i++) { // ^ , vorzeichen, * /, + -
			aktuellesListenElement = aktuellesListenElementSuchen(i,functionAlsListe);
			if(aktuellesListenElement!=null){
				i=aktuellesListenElement.indexBis;
			}
			if (vorzeichenLevel === 0) {
				if (functionAlsString[i] === '+' || functionAlsString[i] === '-') {
					if (i === 0) {

					}
					else if (functionAlsString[i - 1] === '+' || functionAlsString[i - 1] === '-' || functionAlsString[i - 1] === '*' || functionAlsString[i - 1] === '/') {

					}
					else {
						gefunden = true;
						neuerFunktionSyntaxbaum.inhaltKnoten = aktuellesListenElement.inhalt;
						neuerFunktionSyntaxbaum.index=i;
						neuerFunktionSyntaxbaum.linkesChild = linkerPartV2(i, 0, 0, i, neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
						neuerFunktionSyntaxbaum.rechtesChild = rechterPartV2(i, 0, i + 1, rechteGrenze, neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
						i = rechteGrenze;
						return neuerFunktionSyntaxbaum;
					}
				}
			}
			else if (vorzeichenLevel === 1) {
				if (functionAlsString[i] === '*' || functionAlsString[i] === '/') {
					gefunden = true;
					neuerFunktionSyntaxbaum.inhaltKnoten = aktuellesListenElement.inhalt;
					neuerFunktionSyntaxbaum.index=i;
					neuerFunktionSyntaxbaum.linkesChild = linkerPartV2(i, 1, 0, i, neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
					neuerFunktionSyntaxbaum.rechtesChild = rechterPartV2(i, 1, i + 1, rechteGrenze, neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
					i = rechteGrenze;
					return neuerFunktionSyntaxbaum;
				}
			}
			else if (vorzeichenLevel === 2) {
				if (functionAlsString[i] === '^') {
					gefunden = true;
					neuerFunktionSyntaxbaum.inhaltKnoten = aktuellesListenElement.inhalt;
					neuerFunktionSyntaxbaum.index=i;
					neuerFunktionSyntaxbaum.linkesChild = linkerPartV2(i, 2, 0, i, neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
					neuerFunktionSyntaxbaum.rechtesChild = rechterPartV2(i, 2, i + 1, rechteGrenze, neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
					i = rechteGrenze;
					return neuerFunktionSyntaxbaum;
				}
			}
			else if (vorzeichenLevel === 3) {
				if (!isNaN(aktuellesListenElement.inhalt) || functionAlsString[i] === 'x' || functionAlsString[i] === 'X') {
					gefunden = true;
					neuerFunktionSyntaxbaum.inhaltKnoten = aktuellesListenElement.inhalt;
					neuerFunktionSyntaxbaum.index=i;
					neuerFunktionSyntaxbaum.linkesChild = linkerPartV2(i, 2, 0, i, neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
					neuerFunktionSyntaxbaum.rechtesChild = rechterPartV2(i, 2, i + 1, rechteGrenze, neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
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



function ausSyntaxbaumVektorErstellenV2(aktuellerKnoten,  functionAlsVectorLokal) {
	if (aktuellerKnoten.linkesChild === null && aktuellerKnoten.rechtesChild === null) {
		if (aktuellerKnoten.inhaltKnoten === 'x' || aktuellerKnoten.inhaltKnoten === 'X') {
			if (functionAlsVectorLokal.length < 2) {
				while(functionAlsVectorLokal.length < 2){
					functionAlsVectorLokal.push(0)
				}				
			}
			functionAlsVectorLokal[1] += 1;
		}
		else if (!isNaN(aktuellerKnoten.inhaltKnoten)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += aktuellerKnoten.inhaltKnoten;
		}
	}
	if (aktuellerKnoten.linkesChild !== null) {
		if (aktuellerKnoten.linkesChild.linkesChild !== null) {
			ausSyntaxbaumVektorErstellenV2(aktuellerKnoten.linkesChild, functionAlsVectorLokal);
		}
	}
	if (aktuellerKnoten.rechtesChild !== null) {
		if (aktuellerKnoten.rechtesChild.rechtesChild !== null&&(aktuellerKnoten.inhaltKnoten === '+' || aktuellerKnoten.inhaltKnoten === '^' || aktuellerKnoten.inhaltKnoten === '*' )) {
			ausSyntaxbaumVektorErstellenV2(aktuellerKnoten.rechtesChild, functionAlsVectorLokal);
		}
	
		if (aktuellerKnoten.rechtesChild.rechtesChild !== null && aktuellerKnoten.inhaltKnoten === '-' ) {
			ausSyntaxbaumVektorErstellenV2(aktuellerKnoten.rechtesChild, functionAlsVectorLokal);
		}
	}
	if (aktuellerKnoten.inhaltKnoten === '^') {
		if ((aktuellerKnoten.linkesChild.inhaltKnoten === 'x' || aktuellerKnoten.linkesChild.inhaltKnoten === 'X') && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnoten) ) {
			let hochZahl = aktuellerKnoten.rechtesChild.inhaltKnoten;
			if (functionAlsVectorLokal.length < hochZahl + 1) {
				while(functionAlsVectorLokal.length < hochZahl + 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			let multiplyer = 1.0;
			if (aktuellerKnoten.parent !== null) {
				if (aktuellerKnoten.parent.inhaltKnoten === '*' && aktuellerKnoten.parent.rechtesChild === aktuellerKnoten) {
					multiplyer = aktuellerKnoten.parent.linkesChild.inhaltKnoten;
				}
			}
			let vorzeichen = false;
			let next = aktuellerKnoten;
			while (next.parent !== null) {
				
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
		
		
		else if (!isNaN(aktuellerKnoten.rechtesChild.inhaltKnoten)  && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnoten) ) {
			let konstante = Math.pow(aktuellerKnoten.linkesChild.inhaltKnoten, aktuellerKnoten.rechtesChild.inhaltKnoten);
			let hochZahl = 0;
			if (functionAlsVectorLokal.length < hochZahl + 1) {
				functionAlsVectorLokal.push(0);
			}
			let multiplyer = 1.0;
			if (aktuellerKnoten.parent !== null) {
				if (aktuellerKnoten.parent.inhaltKnoten === '*' && aktuellerKnoten.parent.rechtesChild === aktuellerKnoten) {
					multiplyer = aktuellerKnoten.parent.linkesChild.inhaltKnoten;
				}
			}
			let vorzeichen = false;
			let next = aktuellerKnoten;
			while (next.parent !== null) {

				
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
		if ((aktuellerKnoten.rechtesChild.inhaltKnoten === 'x' || aktuellerKnoten.rechtesChild.inhaltKnoten === 'X') && !isNaN(aktuellerKnoten.linkesChild.inhaltKnoten)) {

			if (functionAlsVectorLokal.length < 2) {
				while(functionAlsVectorLokal.length < 2){
					functionAlsVectorLokal.push(0)
				}	
			}
			if (aktuellerKnoten.parent !== null) {
				let minusGerechnet = false;
				if (aktuellerKnoten.parent.parent !== null) {
					if (!isNaN(aktuellerKnoten.parent.rechtesChild.inhaltKnoten) && aktuellerKnoten.parent.parent.inhaltKnoten === '-') {
						functionAlsVectorLokal[1] -= aktuellerKnoten.linkesChild.inhaltKnoten;
						minusGerechnet=true;
					}
					if (!isNaN(aktuellerKnoten.parent.rechtesChild.inhaltKnoten) && aktuellerKnoten.parent.parent.inhaltKnoten === '+') { //hier könnte noch was falsch sein
						functionAlsVectorLokal[1] += aktuellerKnoten.linkesChild.inhaltKnoten;
					}
				}
			
				if (aktuellerKnoten.parent.inhaltKnoten === '+' && aktuellerKnoten.parent.rechtesChild === aktuellerKnoten) {
					functionAlsVectorLokal[1] += aktuellerKnoten.linkesChild.inhaltKnoten;
				}else if (aktuellerKnoten.parent.inhaltKnoten === '-' && aktuellerKnoten.parent.rechtesChild === aktuellerKnoten) {
					functionAlsVectorLokal[1] -= aktuellerKnoten.linkesChild.inhaltKnoten;
				}else if(!minusGerechnet){
					functionAlsVectorLokal[1] += aktuellerKnoten.linkesChild.inhaltKnoten;
				}
			}
			else {
				functionAlsVectorLokal[1] += aktuellerKnoten.linkesChild.inhaltKnoten;
			}			
		}
	}
	if (aktuellerKnoten.inhaltKnoten === '+') {
		if (aktuellerKnoten.linkesChild.inhaltKnoten === '^' && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnoten)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += aktuellerKnoten.rechtesChild.inhaltKnoten;
		}
		if (aktuellerKnoten.linkesChild.inhaltKnoten === '*' && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnoten)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += aktuellerKnoten.rechtesChild.inhaltKnoten;
		}
		if (aktuellerKnoten.linkesChild.inhaltKnoten === 'x' || aktuellerKnoten.linkesChild.inhaltKnoten === 'X' && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnoten)) {
			if (functionAlsVectorLokal.length < 2) {
				while(functionAlsVectorLokal.length < 2){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += aktuellerKnoten.rechtesChild.inhaltKnoten;
			functionAlsVectorLokal[1] += 1;
		}
		if (!isNaN(aktuellerKnoten.linkesChild.inhaltKnoten) && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnoten)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += aktuellerKnoten.linkesChild.inhaltKnoten + aktuellerKnoten.rechtesChild.inhaltKnoten;
		}
	}
	else if (aktuellerKnoten.inhaltKnoten === '-') {
		if (aktuellerKnoten.linkesChild.inhaltKnoten === '^' && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnoten)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] -= aktuellerKnoten.rechtesChild.inhaltKnoten;
		}
		if (aktuellerKnoten.linkesChild.inhaltKnoten === '*' && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnoten)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] -= aktuellerKnoten.rechtesChild.inhaltKnoten;
		}
		if (aktuellerKnoten.linkesChild.inhaltKnoten === 'x' || aktuellerKnoten.linkesChild.inhaltKnoten === 'X' && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnoten)) {
			if (functionAlsVectorLokal.length < 2) {
				while(functionAlsVectorLokal.length < 2){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] -= aktuellerKnoten.rechtesChild.inhaltKnoten;
			functionAlsVectorLokal[1] += 1;
		}
	}
	return functionAlsVectorLokal;
}
*/














function erstelleSyntaxBaumV3(neuerFunktionSyntaxbaumGebrochenRational, funktionAlsString){
	let stringOld = "";
	let stringTmp = funktionAlsString;
	let klammernEntfernt = true;
	while(klammernEntfernt){ //"rekursiv" klammern entfernen, also so oft wie halt klammern drin sind 
		stringOld = entferneUnnoetigeKlammern(stringTmp);
		if(stringOld!=stringTmp){
			stringTmp=stringOld;
		}else if(stringOld===stringTmp){
			klammernEntfernt=false;
		}
	}
	functionAlsString = stringTmp;
	let functionAlsListe = convertiereStringZuVerketteteListe(functionAlsString);
	
	let gefunden = false;
	let vorzeichenLevel = 0;
	let rechteGrenze = functionAlsString.length;
	let klammerZaehlerAuf = 0;
	let klammerZaehlerZu = 0;
	let klammerLevel = 0;
	let hatKlammern = false;
	
	hatKlammern = klammerCheck(functionAlsString, true);
	
	while (!gefunden) {
		if (rechteGrenze === 0) {
			neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = functionAlsString[0];
		}
		let aktuellesListenElement = null;
		for (let i = 0; i < rechteGrenze; i++) { // ^ , vorzeichen, * /, + -
			aktuellesListenElement = aktuellesListenElementSuchen(i,functionAlsListe);
			if(aktuellesListenElement!=null){
				i=aktuellesListenElement.indexBis;
			}
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
							
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;
							
							if (hatKlammern) {
								let substringLinks="";
								let substringRechts="";
								
								substringLinks = functionAlsString.substring(klammerLevel === 0 ? 0 : 1,i);
								substringRechts = functionAlsString.substring(i + 1, klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1);

								linkerPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks);
								rechterPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
							}
							else {

								neuerFunktionSyntaxbaumGebrochenRational = parseFuntionBufferV3(neuerFunktionSyntaxbaumGebrochenRational, functionAlsString, functionAlsListe);
								
							}
							i = rechteGrenze;

						}
					}
				}else if (vorzeichenLevel === 1) {
					if (functionAlsString[i] === '*' || functionAlsString[i] === '/') {
						gefunden = true;
						

						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;

						if (hatKlammern) {
						
							let substringLinks="";
							let substringRechts="";

							
							substringLinks = functionAlsString.substring(functionAlsString[0] === '(' ? 1 : 0, (functionAlsString[i-1] === ')' ? i - 1 : i));
							substringRechts = functionAlsString.substring(functionAlsString[i + 1] === '(' ? i + 2 : i + 1, functionAlsString[rechteGrenze-1] === ')' ? rechteGrenze - 1 : rechteGrenze);

							linkerPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks); //wenn 2 klammern gefunden, vorzeichenlevel wieder auf 0 für in der klammer
							rechterPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
						}
						else {
							if(aktuellesListenElement.next.next.inhalt==="^"){
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.inhalt;
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.next.inhalt;
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.next.next.inhalt;
							}
							
							

							
//							let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
//							neuerFunktionSyntaxbaum = parseFuntionBufferV3(neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
//							let vectorKnoten=[];
//							vectorKnoten = ausSyntaxbaumVektorErstellenV3(neuerFunktionSyntaxbaum, vectorKnoten);
//							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
						}
						i = rechteGrenze;
					}
				}
				else if (vorzeichenLevel === 2) {
					if (functionAlsString[i] === '^') {
						gefunden = true;
						

						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;

						if (hatKlammern) {
							let substringLinks = "";
							let substringRechts = "";
							
							substringLinks = functionAlsString.substring(klammerLevel === 0 ? 0 : 1,i);
							substringRechts = functionAlsString.substring(i + 1,klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1);

							linkerPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks);
							rechterPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
						}else {
							

							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = "^";
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.prev.inhalt;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.inhalt;
							if(aktuellesListenElement.prev.prev==null){
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.koeffizient = 1;
							}else{
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.prev.prev.inhalt;
							}
//							let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
//							neuerFunktionSyntaxbaum = parseFuntionBufferV3(neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
//							let vectorKnoten=[];
//							vectorKnoten = ausSyntaxbaumVektorErstellenV3(neuerFunktionSyntaxbaum, vectorKnoten);
//							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
						}
						i = rechteGrenze;
					}
				}
				
				
				else if (vorzeichenLevel === 3) {
					
					//if ((parseInt(functionAlsString[i]) >= 0 && parseInt(functionAlsString[i]) <= 9) || functionAlsString[i] === 'x' || functionAlsString[i] === 'X') {
					if (!isNaN(aktuellesListenElement.inhalt) || functionAlsString[i] === 'x' || functionAlsString[i] === 'X' || ((aktuellesListenElement.inhalt[0]==="s")&&(aktuellesListenElement.inhalt[1]==="i")&&(aktuellesListenElement.inhalt[2]==="n"))) {
						gefunden = true;
						
						if((aktuellesListenElement.inhalt[0]==="s")&&(aktuellesListenElement.inhalt[1]==="i")&&(aktuellesListenElement.inhalt[2]==="n")){
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;		
							let inhaltKlammern = aktuellesListenElement.inhalt.substring(4,aktuellesListenElement.inhalt.length-1);														
							neuerFunktionSyntaxbaumGebrochenRational.matheFunktionSyntaxbaum = new FunktionAlsVektorSyntaxbaum();
							erstelleSyntaxBaumV3(neuerFunktionSyntaxbaumGebrochenRational.matheFunktionSyntaxbaum, inhaltKlammern);
											
						}else{
							
							//neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = functionAlsString[i];
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.inhalt;
							if(!isNaN(neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.zahlOderVariablenName)){
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.potenz = 0;
							}else{
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.potenz = 1;
							}
							
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.koeffizient = 1;
							
							let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
							neuerFunktionSyntaxbaum = parseFuntionBufferV3(neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
							let vectorKnoten=[];
							vectorKnoten = ausSyntaxbaumVektorErstellenV3(neuerFunktionSyntaxbaum, vectorKnoten);
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
						}
						
					}
				}
				if (vorzeichenLevel > 3) {
					return;
				}
			}
		}
		vorzeichenLevel++;
	}
	
}


function erstelleSyntaxBaumV4(neuerFunktionSyntaxbaumGebrochenRational, funktionAlsString){
	let stringOld = "";
	let stringTmp = funktionAlsString;
	let klammernEntfernt = true;
	while(klammernEntfernt){ //"rekursiv" klammern entfernen, also so oft wie halt klammern drin sind 
		stringOld = entferneUnnoetigeKlammern(stringTmp);
		if(stringOld!=stringTmp){
			stringTmp=stringOld;
		}else if(stringOld===stringTmp){
			klammernEntfernt=false;
		}
	}
	functionAlsString = stringTmp;
	let functionAlsListe = convertiereStringZuVerketteteListe(functionAlsString);
	
	let gefunden = false;
	let vorzeichenLevel = 0;
	let rechteGrenze = functionAlsString.length;
	let klammerZaehlerAuf = 0;
	let klammerZaehlerZu = 0;
	let klammerLevel = 0;
	let hatKlammern = false;
	
	hatKlammern = klammerCheck(functionAlsString, true);
	
	while (!gefunden) {
		if (rechteGrenze === 0) {
			neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = functionAlsString[0];
		}
		let aktuellesListenElement = null;
		for (let i = rechteGrenze-1; i >= 0; i--) { // ^ , vorzeichen, * /, + -
			aktuellesListenElement = aktuellesListenElementSuchen(i,functionAlsListe);
//			if(aktuellesListenElement!=null){
//				i=aktuellesListenElement.indexBis;
//			}
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
							
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;

							
							if (hatKlammern) {
								let substringLinks="";
								let substringRechts="";
								
								substringLinks = functionAlsString.substring(klammerLevel === 0 ? 0 : 1,i);
								substringRechts = functionAlsString.substring(i + 1, klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1);

								linkerPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks);
								rechterPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
							}
							else {

								neuerFunktionSyntaxbaumGebrochenRational = parseFuntionBufferV4(neuerFunktionSyntaxbaumGebrochenRational, functionAlsString, functionAlsListe);
								
							}
							i = 0;

						}
					}
				}else if (vorzeichenLevel === 1) {
					if (functionAlsString[i] === '*' || functionAlsString[i] === '/') {
						gefunden = true;
						

						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;

						if (hatKlammern) {
						
							let substringLinks="";
							let substringRechts="";

							
							substringLinks = functionAlsString.substring(functionAlsString[0] === '(' ? 1 : 0, (functionAlsString[i-1] === ')' ? i - 1 : i));
							substringRechts = functionAlsString.substring(functionAlsString[i + 1] === '(' ? i + 2 : i + 1, functionAlsString[rechteGrenze-1] === ')' ? rechteGrenze - 1 : rechteGrenze);

							linkerPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks); //wenn 2 klammern gefunden, vorzeichenlevel wieder auf 0 für in der klammer
							rechterPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
						}
						else {
							if(aktuellesListenElement.next.next!=null){
								if(aktuellesListenElement.next.next.inhalt==="^"){
									neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.inhalt;
									neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.next.inhalt;
									neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.next.next.inhalt;
								}
							}else{
								if(aktuellesListenElement.inhalt==='*'){
									neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.inhalt;
									neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.next.inhalt;
									neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.potenz = 1;
								}
							}
							
							
							

							
//							let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
//							neuerFunktionSyntaxbaum = parseFuntionBufferV3(neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
//							let vectorKnoten=[];
//							vectorKnoten = ausSyntaxbaumVektorErstellenV3(neuerFunktionSyntaxbaum, vectorKnoten);
//							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
						}
						i = 0;
					}
				}
				else if (vorzeichenLevel === 2) {
					if (functionAlsString[i] === '^') {
						gefunden = true;
						

						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
						neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;

						if (hatKlammern) {
							let substringLinks = "";
							let substringRechts = "";
							
							substringLinks = functionAlsString.substring(klammerLevel === 0 ? 0 : 1,i);
							substringRechts = functionAlsString.substring(i + 1,klammerLevel === 0 ? rechteGrenze : rechteGrenze - 1);

							linkerPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringLinks);
							rechterPartGebrochenRationalV3(i, 0, neuerFunktionSyntaxbaumGebrochenRational, substringRechts);
						}else {
							

							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = "^";
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.prev.inhalt;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.inhalt;
							if(aktuellesListenElement.prev.prev==null){
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.koeffizient = 1;
							}else{
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.prev.prev.inhalt;
							}
//							let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
//							neuerFunktionSyntaxbaum = parseFuntionBufferV3(neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
//							let vectorKnoten=[];
//							vectorKnoten = ausSyntaxbaumVektorErstellenV3(neuerFunktionSyntaxbaum, vectorKnoten);
//							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
						}
						i = 0;
					}
				}
				
				
				else if (vorzeichenLevel === 3) {
					
					//if ((parseInt(functionAlsString[i]) >= 0 && parseInt(functionAlsString[i]) <= 9) || functionAlsString[i] === 'x' || functionAlsString[i] === 'X') {
					if (!isNaN(aktuellesListenElement.inhalt) || functionAlsString[i] === 'x' || functionAlsString[i] === 'X' || ((aktuellesListenElement.inhalt[0]==="s")&&(aktuellesListenElement.inhalt[1]==="i")&&(aktuellesListenElement.inhalt[2]==="n"))) {
						gefunden = true;
						
						if((aktuellesListenElement.inhalt[0]==="s")&&(aktuellesListenElement.inhalt[1]==="i")&&(aktuellesListenElement.inhalt[2]==="n")){
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;		
							let inhaltKlammern = aktuellesListenElement.inhalt.substring(4,aktuellesListenElement.inhalt.length-1);														
							neuerFunktionSyntaxbaumGebrochenRational.matheFunktionSyntaxbaum = new FunktionAlsVektorSyntaxbaum();
							erstelleSyntaxBaumV3(neuerFunktionSyntaxbaumGebrochenRational.matheFunktionSyntaxbaum, inhaltKlammern);
											
						}else{
							
							//neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = functionAlsString[i];
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenString = functionAlsString;
							
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.inhalt;
							if(functionAlsString[i] === 'x' || functionAlsString[i] === 'X'){
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.koeffizient = 1;
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.potenz = 1;
							}else if(!isNaN(aktuellesListenElement.inhalt)){
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.inhalt;
								neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenPolynom.potenz = 0;
							}
							
							let neuerFunktionSyntaxbaum = new FunktionSyntaxbaum();
							neuerFunktionSyntaxbaum = parseFuntionBufferV3(neuerFunktionSyntaxbaum, functionAlsString, functionAlsListe);
							let vectorKnoten=[];
							vectorKnoten = ausSyntaxbaumVektorErstellenV3(neuerFunktionSyntaxbaum, vectorKnoten);
							neuerFunktionSyntaxbaumGebrochenRational.inhaltKnotenVektor=vectorKnoten;
						}
						
					}
				}
				if (vorzeichenLevel > 3) {
					return;
				}
			}
		}
		vorzeichenLevel++;
	}
	
}


function linkerPartV4(aktuellerKnoten, functionAlsStringLokal) {
	if (functionAlsStringLokal.length === 0) {
		return null;
	}
	let functionAlsListeLokal = convertiereStringZuVerketteteListe(functionAlsStringLokal);
	let gefunden = false;
	let vorzeichenLevel = 0;
	let rechteGrenze = functionAlsStringLokal.length;
	while (!gefunden) {
		let aktuellesListenElement=null;
		for (let i =  functionAlsStringLokal.length-1; i >= 0; i--) {
			aktuellesListenElement = aktuellesListenElementSuchen(i,functionAlsListeLokal);
//			if(aktuellesListenElement!=null){
//				i=aktuellesListenElement.indexBis;//x^3+2,5*x-2,5
//			}
			if (vorzeichenLevel === 0) {
				if (functionAlsStringLokal[i] === '+' || functionAlsStringLokal[i] === '-') {
					if (i === 0) {

					}
					else if (functionAlsStringLokal[i - 1] === '+' || functionAlsStringLokal[i - 1] === '-' || functionAlsStringLokal[i - 1] === '*' || functionAlsStringLokal[i - 1] === '/') {

					}
					else {
						gefunden = true;
						let neuerLinkerKnoten = new FunktionAlsVektorSyntaxbaum();
						neuerLinkerKnoten.parent=aktuellerKnoten;
						neuerLinkerKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
						neuerLinkerKnoten.index=i;
						aktuellerKnoten.linkesChild=neuerLinkerKnoten;
						
						neuerLinkerKnoten.linkesChild = linkerPartV4(neuerLinkerKnoten, functionAlsStringLokal.substring(0,i));
						neuerLinkerKnoten.rechtesChild = rechterPartV4( neuerLinkerKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));
						i = functionAlsStringLokal.length;
						return neuerLinkerKnoten;
					}
				}
			}else if (vorzeichenLevel === 1) {
				if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
					gefunden = true;
					let neuerLinkerKnoten = new FunktionAlsVektorSyntaxbaum();
					neuerLinkerKnoten.parent=aktuellerKnoten;
					neuerLinkerKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
					neuerLinkerKnoten.index=i;
					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
					if((aktuellesListenElement.next.inhalt==="x"||aktuellesListenElement.next.inhalt==="X")&&aktuellesListenElement.next.next===null){
						neuerLinkerKnoten.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.inhalt;
						neuerLinkerKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.next.inhalt;
						neuerLinkerKnoten.inhaltKnotenPolynom.potenz = 1;
						i = functionAlsStringLokal.length;
					}else if(aktuellesListenElement.next.next.inhalt==="^"){
						neuerLinkerKnoten.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.inhalt;
						neuerLinkerKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.next.inhalt;
						neuerLinkerKnoten.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.next.next.inhalt;
						i = functionAlsStringLokal.length;
					}else{
						neuerLinkerKnoten.linkesChild = linkerPartV4(neuerLinkerKnoten, functionAlsStringLokal.substring(0,i));
						neuerLinkerKnoten.rechtesChild = rechterPartV4( neuerLinkerKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));
						i = functionAlsStringLokal.length;

					}
					return neuerLinkerKnoten;
				}
			}
			else if (vorzeichenLevel === 2) {
				if (functionAlsStringLokal[i] === '^') {
					gefunden = true;
					let neuerLinkerKnoten = new FunktionAlsVektorSyntaxbaum();
					neuerLinkerKnoten.parent=aktuellerKnoten;
					neuerLinkerKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
					neuerLinkerKnoten.index=i;
					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
					
					neuerLinkerKnoten.inhaltKnotenPolynom.koeffizient = 1;
					neuerLinkerKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.prev.inhalt;
					neuerLinkerKnoten.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.inhalt;
					i = functionAlsStringLokal.length;
					
//					neuerLinkerKnoten.linkesChild = linkerPartV3(neuerLinkerKnoten, functionAlsStringLokal.substring(0,i));
//					neuerLinkerKnoten.rechtesChild = rechterPartV3( neuerLinkerKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));
//					i = functionAlsStringLokal.length;
					return neuerLinkerKnoten;
				}
			}
			
			
			else if (vorzeichenLevel === 3) {
				//if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
				if (!isNaN(aktuellesListenElement.inhalt) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
					gefunden = true;
					let neuerLinkerKnoten = new FunktionAlsVektorSyntaxbaum();
					neuerLinkerKnoten.parent=aktuellerKnoten;
					if(!isNaN(aktuellesListenElement.inhalt)){
						
						neuerLinkerKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
						neuerLinkerKnoten.index=i;
						i=aktuellesListenElement.indexBis;
//						if(linkeGrenze<aktuellesListenElement.indexBis){
//							i=aktuellesListenElement.indexBis;
//							neuerLinkerKnoten.index=i;
//							linkeGrenze = aktuellesListenElement.indexBis;
//						}
						
					}else{
						i=aktuellesListenElement.indexBis;
						neuerLinkerKnoten.index=i;
						neuerLinkerKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
						
						neuerLinkerKnoten.inhaltKnotenPolynom.koeffizient = 1;
						neuerLinkerKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.inhalt;
						neuerLinkerKnoten.inhaltKnotenPolynom.potenz = 1;
						
					}

					
					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
					
					neuerLinkerKnoten.linkesChild = linkerPartV4(neuerLinkerKnoten, functionAlsStringLokal.substring(0,i));
					neuerLinkerKnoten.rechtesChild = rechterPartV4( neuerLinkerKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));
					i = functionAlsStringLokal.length;
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
//function rechterPartV3(index, vorzeichenLevel, linkeGrenze, rechteGrenze, aktuellerKnoten, functionAlsStringLokal, functionAlsListe) {
function rechterPartV4(aktuellerKnoten, functionAlsStringLokal) {
	if (0 === functionAlsStringLokal.length) {
		return null;
	}
	let functionAlsListeLokal = convertiereStringZuVerketteteListe(functionAlsStringLokal);
	let vorzeichenLevel = 0;
	let gefunden = false;
	let rechteGrenze = functionAlsStringLokal.length;
	while (!gefunden) {
		let aktuellesListenElement=null;
		for (let i = functionAlsStringLokal.length-1; i >= 0; i--) {
			aktuellesListenElement = aktuellesListenElementSuchen(i,functionAlsListeLokal);
//			if(aktuellesListenElement!=null){
//				i=aktuellesListenElement.indexBis;
//			}
			if (vorzeichenLevel === 0) {
				if (functionAlsStringLokal[i] === '+' || functionAlsStringLokal[i] === '-') {
					if (i === 0) {

					}
					else if (functionAlsStringLokal[i - 1] === '+' || functionAlsStringLokal[i - 1] === '-' || functionAlsStringLokal[i - 1] === '*' || functionAlsStringLokal[i - 1] === '/') {

					}
					else {
						gefunden = true;
						let neuerRechterKnoten = new FunktionAlsVektorSyntaxbaum();
						neuerRechterKnoten.parent=aktuellerKnoten;
						neuerRechterKnoten.inhaltKnotenSymbol=functionAlsStringLokal[i];
						neuerRechterKnoten.index=i;
						aktuellerKnoten.rechtesChild=neuerRechterKnoten;
					
						neuerRechterKnoten.linkesChild = linkerPartV4(neuerRechterKnoten, functionAlsStringLokal.substring(0,i));
						neuerRechterKnoten.rechtesChild = rechterPartV4(neuerRechterKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));
						
						i = functionAlsStringLokal.length;
						return neuerRechterKnoten;
					}
				}
			}else if (vorzeichenLevel === 1) {
				if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
					gefunden = true;
					let neuerRechterKnoten = new FunktionAlsVektorSyntaxbaum();
					neuerRechterKnoten.parent=aktuellerKnoten;
					neuerRechterKnoten.inhaltKnotenSymbol=functionAlsStringLokal[i];
					neuerRechterKnoten.index=i;
					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
					if(aktuellesListenElement.next.next != null){
						if(aktuellesListenElement.next.next.inhalt === "^"){
							neuerRechterKnoten.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.inhalt;
							neuerRechterKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.next.inhalt;
							neuerRechterKnoten.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.next.next.inhalt;
						}else{		
							neuerRechterKnoten.linkesChild = linkerPartV4(neuerRechterKnoten, functionAlsStringLokal.substring(0,i));
							neuerRechterKnoten.rechtesChild = rechterPartV4(neuerRechterKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));					
						}		
					}else{
						neuerRechterKnoten.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.next.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.potenz = 1;
					}
							
					i = functionAlsStringLokal.length;
					return neuerRechterKnoten;
				}
			}
			else if (vorzeichenLevel === 2) {
				if (functionAlsStringLokal[i] === '^') {
					gefunden = true;
					let neuerRechterKnoten = new FunktionAlsVektorSyntaxbaum();
					neuerRechterKnoten.parent=aktuellerKnoten;
					neuerRechterKnoten.inhaltKnotenSymbol=functionAlsStringLokal[i];
					neuerRechterKnoten.index=i;
					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
					if(aktuellesListenElement.next.next != null){
						if(aktuellesListenElement.next.next.inhalt==="^"){
							neuerRechterKnoten.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.inhalt;
							neuerRechterKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.next.inhalt;
							neuerRechterKnoten.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.next.next.inhalt;
						}else{		
							neuerRechterKnoten.linkesChild = linkerPartV4(neuerRechterKnoten, functionAlsStringLokal.substring(0,i));
							neuerRechterKnoten.rechtesChild = rechterPartV4(neuerRechterKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));					
						}
					}else{
						if(aktuellesListenElement.inhalt==="^"){
							neuerRechterKnoten.inhaltKnotenPolynom.koeffizient = 1;
							neuerRechterKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.prev.inhalt;
							neuerRechterKnoten.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.inhalt;
						}
						
					}
					
					i = functionAlsStringLokal.length;
					return neuerRechterKnoten;
				}
			}
			
			else if (vorzeichenLevel === 3) {
				//if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
				if (!isNaN(aktuellesListenElement.inhalt) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
					gefunden = true;
					let neuerRechterKnoten = new FunktionAlsVektorSyntaxbaum();
					neuerRechterKnoten.parent=aktuellerKnoten;
					if(!isNaN(aktuellesListenElement.inhalt)){
						neuerRechterKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.potenz = 0;
						i=aktuellesListenElement.indexBis;
						neuerRechterKnoten.index=i;
//						if(linkeGrenze<aktuellesListenElement.indexBis){
//							linkeGrenze = aktuellesListenElement.indexBis;
//						}
																	
					}else{
						i=aktuellesListenElement.indexBis;
						neuerRechterKnoten.index=i;
						neuerRechterKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.koeffizient = 1;
						neuerRechterKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.potenz = 1;
					}
					
					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
					
					neuerRechterKnoten.linkesChild = linkerPartV4(neuerRechterKnoten, functionAlsStringLokal.substring(0,i));
					neuerRechterKnoten.rechtesChild = rechterPartV4(neuerRechterKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));					
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



function linkerPartV3(aktuellerKnoten, functionAlsStringLokal) {
	if (functionAlsStringLokal.length === 0) {
		return null;
	}
	let functionAlsListeLokal = convertiereStringZuVerketteteListe(functionAlsStringLokal);
	let gefunden = false;
	let vorzeichenLevel = 0;
	let rechteGrenze = functionAlsStringLokal.length;
	while (!gefunden) {
		let aktuellesListenElement=null;
		for (let i = 0; i < functionAlsStringLokal.length; i++) {
			aktuellesListenElement = aktuellesListenElementSuchen(i,functionAlsListeLokal);
			if(aktuellesListenElement!=null){
				i=aktuellesListenElement.indexBis;//x^3+2,5*x-2,5
			}
			if (vorzeichenLevel === 0) {
				if (functionAlsStringLokal[i] === '+' || functionAlsStringLokal[i] === '-') {
					if (i === 0) {

					}
					else if (functionAlsStringLokal[i - 1] === '+' || functionAlsStringLokal[i - 1] === '-' || functionAlsStringLokal[i - 1] === '*' || functionAlsStringLokal[i - 1] === '/') {

					}
					else {
						gefunden = true;
						let neuerLinkerKnoten = new FunktionAlsVektorSyntaxbaum();
						neuerLinkerKnoten.parent=aktuellerKnoten;
						neuerLinkerKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
						neuerLinkerKnoten.index=i;
						aktuellerKnoten.linkesChild=neuerLinkerKnoten;
						
						neuerLinkerKnoten.linkesChild = linkerPartV3(neuerLinkerKnoten, functionAlsStringLokal.substring(0,i));
						neuerLinkerKnoten.rechtesChild = rechterPartV3( neuerLinkerKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));
						i = functionAlsStringLokal.length;
						return neuerLinkerKnoten;
					}
				}
			}else if (vorzeichenLevel === 1) {
				if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
					gefunden = true;
					let neuerLinkerKnoten = new FunktionAlsVektorSyntaxbaum();
					neuerLinkerKnoten.parent=aktuellerKnoten;
					neuerLinkerKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
					neuerLinkerKnoten.index=i;
					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
					if((aktuellesListenElement.next.inhalt==="x"||aktuellesListenElement.next.inhalt==="X")&&aktuellesListenElement.next.next===null){
						neuerLinkerKnoten.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.inhalt;
						neuerLinkerKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.next.inhalt;
						neuerLinkerKnoten.inhaltKnotenPolynom.potenz = 1;
						i = functionAlsStringLokal.length;
					}else if(aktuellesListenElement.next.next.inhalt==="^"){
						neuerLinkerKnoten.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.inhalt;
						neuerLinkerKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.next.inhalt;
						neuerLinkerKnoten.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.next.next.inhalt;
						i = functionAlsStringLokal.length;
					}else{
						neuerLinkerKnoten.linkesChild = linkerPartV3(neuerLinkerKnoten, functionAlsStringLokal.substring(0,i));
						neuerLinkerKnoten.rechtesChild = rechterPartV3( neuerLinkerKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));
						i = functionAlsStringLokal.length;

					}
					return neuerLinkerKnoten;
				}
			}
			else if (vorzeichenLevel === 2) {
				if (functionAlsStringLokal[i] === '^') {
					gefunden = true;
					let neuerLinkerKnoten = new FunktionAlsVektorSyntaxbaum();
					neuerLinkerKnoten.parent=aktuellerKnoten;
					neuerLinkerKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
					neuerLinkerKnoten.index=i;
					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
					
					neuerLinkerKnoten.inhaltKnotenPolynom.koeffizient = 1;
					neuerLinkerKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.prev.inhalt;
					neuerLinkerKnoten.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.inhalt;
					i = functionAlsStringLokal.length;
					
//					neuerLinkerKnoten.linkesChild = linkerPartV3(neuerLinkerKnoten, functionAlsStringLokal.substring(0,i));
//					neuerLinkerKnoten.rechtesChild = rechterPartV3( neuerLinkerKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));
//					i = functionAlsStringLokal.length;
					return neuerLinkerKnoten;
				}
			}
			
			
			else if (vorzeichenLevel === 3) {
				//if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
				if (!isNaN(aktuellesListenElement.inhalt) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
					gefunden = true;
					let neuerLinkerKnoten = new FunktionAlsVektorSyntaxbaum();
					neuerLinkerKnoten.parent=aktuellerKnoten;
					if(!isNaN(aktuellesListenElement.inhalt)){
						
						neuerLinkerKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
						neuerLinkerKnoten.index=i;
						i=aktuellesListenElement.indexBis;
//						if(linkeGrenze<aktuellesListenElement.indexBis){
//							i=aktuellesListenElement.indexBis;
//							neuerLinkerKnoten.index=i;
//							linkeGrenze = aktuellesListenElement.indexBis;
//						}
						
					}else{
						i=aktuellesListenElement.indexBis;
						neuerLinkerKnoten.index=i;
						neuerLinkerKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
						neuerLinkerKnoten.inhaltKnotenPolynom.koeffizient = 1;
						neuerLinkerKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.inhalt;
						neuerLinkerKnoten.inhaltKnotenPolynom.potenz = 1;
					}

					
					aktuellerKnoten.linkesChild=neuerLinkerKnoten;
					
					neuerLinkerKnoten.linkesChild = linkerPartV3(neuerLinkerKnoten, functionAlsStringLokal.substring(0,i));
					neuerLinkerKnoten.rechtesChild = rechterPartV3( neuerLinkerKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));
					i = functionAlsStringLokal.length;
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
//function rechterPartV3(index, vorzeichenLevel, linkeGrenze, rechteGrenze, aktuellerKnoten, functionAlsStringLokal, functionAlsListe) {
function rechterPartV3(aktuellerKnoten, functionAlsStringLokal) {
	if (0 === functionAlsStringLokal.length) {
		return null;
	}
	let functionAlsListeLokal = convertiereStringZuVerketteteListe(functionAlsStringLokal);
	let vorzeichenLevel = 0;
	let gefunden = false;
	let rechteGrenze = functionAlsStringLokal.length;
	while (!gefunden) {
		let aktuellesListenElement=null;
		for (let i = 0; i <= functionAlsStringLokal.length; i++) {
			aktuellesListenElement = aktuellesListenElementSuchen(i,functionAlsListeLokal);
			if(aktuellesListenElement!=null){
				i=aktuellesListenElement.indexBis;
			}
			if (vorzeichenLevel === 0) {
				if (functionAlsStringLokal[i] === '+' || functionAlsStringLokal[i] === '-') {
					if (i === 0) {

					}
					else if (functionAlsStringLokal[i - 1] === '+' || functionAlsStringLokal[i - 1] === '-' || functionAlsStringLokal[i - 1] === '*' || functionAlsStringLokal[i - 1] === '/') {

					}
					else {
						gefunden = true;
						let neuerRechterKnoten = new FunktionAlsVektorSyntaxbaum();
						neuerRechterKnoten.parent=aktuellerKnoten;
						neuerRechterKnoten.inhaltKnotenSymbol=functionAlsStringLokal[i];
						neuerRechterKnoten.index=i;
						aktuellerKnoten.rechtesChild=neuerRechterKnoten;
					
						neuerRechterKnoten.linkesChild = linkerPartV3(neuerRechterKnoten, functionAlsStringLokal.substring(0,i));
						neuerRechterKnoten.rechtesChild = rechterPartV3(neuerRechterKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));
						
						i = functionAlsStringLokal.length;
						return neuerRechterKnoten;
					}
				}
			}else if (vorzeichenLevel === 1) {
				if (functionAlsStringLokal[i] === '*' || functionAlsStringLokal[i] === '/') {
					gefunden = true;
					let neuerRechterKnoten = new FunktionAlsVektorSyntaxbaum();
					neuerRechterKnoten.parent=aktuellerKnoten;
					neuerRechterKnoten.inhaltKnotenSymbol=functionAlsStringLokal[i];
					neuerRechterKnoten.index=i;
					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
					
					if(aktuellesListenElement.next.next.inhalt==="^"){
						neuerRechterKnoten.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.next.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.next.next.inhalt;
					}else{		
						neuerRechterKnoten.linkesChild = linkerPartV3(neuerRechterKnoten, functionAlsStringLokal.substring(0,i));
						neuerRechterKnoten.rechtesChild = rechterPartV3(neuerRechterKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));					
					}				
					i = functionAlsStringLokal.length;
					return neuerRechterKnoten;
				}
			}
			else if (vorzeichenLevel === 2) {
				if (functionAlsStringLokal[i] === '^') {
					gefunden = true;
					let neuerRechterKnoten = new FunktionAlsVektorSyntaxbaum();
					neuerRechterKnoten.parent=aktuellerKnoten;
					neuerRechterKnoten.inhaltKnotenSymbol=functionAlsStringLokal[i];
					neuerRechterKnoten.index=i;
					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
					
					if(aktuellesListenElement.next.next.inhalt==="^"){
						neuerRechterKnoten.inhaltKnotenPolynom.koeffizient = aktuellesListenElement.prev.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.next.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.potenz = aktuellesListenElement.next.next.next.inhalt;
					}else{		
						neuerRechterKnoten.linkesChild = linkerPartV3(neuerRechterKnoten, functionAlsStringLokal.substring(0,i));
						neuerRechterKnoten.rechtesChild = rechterPartV3(neuerRechterKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));					
					}
					i = functionAlsStringLokal.length;
					return neuerRechterKnoten;
				}
			}
			
			else if (vorzeichenLevel === 3) {
				//if ((parseInt(functionAlsStringLokal[i]) >= 0 && parseInt(functionAlsStringLokal[i]) <= 9) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
				if (!isNaN(aktuellesListenElement.inhalt) || functionAlsStringLokal[i] === 'x' || functionAlsStringLokal[i] === 'X') {
					gefunden = true;
					let neuerRechterKnoten = new FunktionAlsVektorSyntaxbaum();
					neuerRechterKnoten.parent=aktuellerKnoten;
					if(!isNaN(aktuellesListenElement.inhalt)){
						neuerRechterKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.koeffizient = 1;
						neuerRechterKnoten.inhaltKnotenPolynom.zahlOderVariablenName = aktuellesListenElement.inhalt;
						neuerRechterKnoten.inhaltKnotenPolynom.potenz = 0;
						i=aktuellesListenElement.indexBis;
						neuerRechterKnoten.index=i;
//						if(linkeGrenze<aktuellesListenElement.indexBis){
//							linkeGrenze = aktuellesListenElement.indexBis;
//						}
																	
					}else{
						i=aktuellesListenElement.indexBis;
						neuerRechterKnoten.index=i;
						neuerRechterKnoten.inhaltKnotenSymbol=aktuellesListenElement.inhalt;
					}
					
					aktuellerKnoten.rechtesChild=neuerRechterKnoten;
					
					neuerRechterKnoten.linkesChild = linkerPartV3(neuerRechterKnoten, functionAlsStringLokal.substring(0,i));
					neuerRechterKnoten.rechtesChild = rechterPartV3(neuerRechterKnoten, functionAlsStringLokal.substring(i+1,rechteGrenze));					
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
function parseFuntionBufferV3(neuerFunktionSyntaxbaum, functionAlsString,functionAlsListe) {
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
			neuerFunktionSyntaxbaum.inhaltKnotenSymbol = aktuellesListenElement;
			neuerFunktionSyntaxbaum.index=0;
			
		}
		aktuellesListenElement=null;
		for (let i = 0; i < rechteGrenze; i++) { // ^ , vorzeichen, * /, + -
			aktuellesListenElement = aktuellesListenElementSuchen(i,functionAlsListe);
			if(aktuellesListenElement!=null){
				i=aktuellesListenElement.indexBis;
			}
			if (vorzeichenLevel === 0) {
				if (functionAlsString[i] === '+' || functionAlsString[i] === '-') {
					if (i === 0) {

					}
					else if (functionAlsString[i - 1] === '+' || functionAlsString[i - 1] === '-' || functionAlsString[i - 1] === '*' || functionAlsString[i - 1] === '/') {

					}
					else {
						gefunden = true;
						neuerFunktionSyntaxbaum.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
						neuerFunktionSyntaxbaum.index=i;
						neuerFunktionSyntaxbaum.linkesChild = linkerPartV3(neuerFunktionSyntaxbaum, functionAlsString.substring(0,i));
						neuerFunktionSyntaxbaum.rechtesChild = rechterPartV3(neuerFunktionSyntaxbaum, functionAlsString.substring(i+1,rechteGrenze));		
						

						i = rechteGrenze;
						return neuerFunktionSyntaxbaum;
					}
				}
			}
			else if (vorzeichenLevel === 1) {
				if (functionAlsString[i] === '*' || functionAlsString[i] === '/') {
					gefunden = true;
					neuerFunktionSyntaxbaum.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
					neuerFunktionSyntaxbaum.index=i;
					neuerFunktionSyntaxbaum.linkesChild = linkerPartV3(neuerFunktionSyntaxbaum, functionAlsString.substring(0,i));
					neuerFunktionSyntaxbaum.rechtesChild = rechterPartV3(neuerFunktionSyntaxbaum, functionAlsString.substring(i+1,rechteGrenze));		
					i = rechteGrenze;
					return neuerFunktionSyntaxbaum;
				}
			}
			else if (vorzeichenLevel === 2) {
				if (functionAlsString[i] === '^') {
					gefunden = true;
					neuerFunktionSyntaxbaum.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
					neuerFunktionSyntaxbaum.index=i;
					neuerFunktionSyntaxbaum.linkesChild = linkerPartV3(neuerFunktionSyntaxbaum, functionAlsString.substring(0,i));
					neuerFunktionSyntaxbaum.rechtesChild = rechterPartV3(neuerFunktionSyntaxbaum, functionAlsString.substring(i+1,rechteGrenze));		
					i = rechteGrenze;
					return neuerFunktionSyntaxbaum;
				}
			}
			else if (vorzeichenLevel === 3) {
				if (!isNaN(aktuellesListenElement.inhalt) || functionAlsString[i] === 'x' || functionAlsString[i] === 'X') {
					gefunden = true;
					neuerFunktionSyntaxbaum.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
					neuerFunktionSyntaxbaum.index=i;
					neuerFunktionSyntaxbaum.linkesChild = linkerPartV3(neuerFunktionSyntaxbaum, functionAlsString.substring(0,i));
					neuerFunktionSyntaxbaum.rechtesChild = rechterPartV3(neuerFunktionSyntaxbaum, functionAlsString.substring(i+1,rechteGrenze));		
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


//Parst ganzrationale Funktionen zu einem Syntaxbaum aus dem ein Polynom als Vektor erstellt werden kann
function parseFuntionBufferV4(neuerFunktionSyntaxbaum, functionAlsString,functionAlsListe) {
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
			neuerFunktionSyntaxbaum.inhaltKnotenSymbol = aktuellesListenElement;
			neuerFunktionSyntaxbaum.index=0;
			
		}
		aktuellesListenElement=null;
		for (let i = rechteGrenze-1; i >= 0; i--) { // ^ , vorzeichen, * /, + -
			aktuellesListenElement = aktuellesListenElementSuchen(i,functionAlsListe);
//			if(aktuellesListenElement!=null){
//				i=aktuellesListenElement.indexBis;
//			}
			if (vorzeichenLevel === 0) {
				if (functionAlsString[i] === '+' || functionAlsString[i] === '-') {
					if (i === 0) {

					}
					else if (functionAlsString[i - 1] === '+' || functionAlsString[i - 1] === '-' || functionAlsString[i - 1] === '*' || functionAlsString[i - 1] === '/') {

					}
					else {
						gefunden = true;
						neuerFunktionSyntaxbaum.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
						neuerFunktionSyntaxbaum.index=i;
						neuerFunktionSyntaxbaum.linkesChild = linkerPartV4(neuerFunktionSyntaxbaum, functionAlsString.substring(0,i));
						neuerFunktionSyntaxbaum.rechtesChild = rechterPartV4(neuerFunktionSyntaxbaum, functionAlsString.substring(i+1,rechteGrenze));		
						

						i = rechteGrenze;
						return neuerFunktionSyntaxbaum;
					}
				}
			}
			else if (vorzeichenLevel === 1) {
				if (functionAlsString[i] === '*' || functionAlsString[i] === '/') {
					gefunden = true;
					neuerFunktionSyntaxbaum.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
					neuerFunktionSyntaxbaum.index=i;
					neuerFunktionSyntaxbaum.linkesChild = linkerPartV4(neuerFunktionSyntaxbaum, functionAlsString.substring(0,i));
					neuerFunktionSyntaxbaum.rechtesChild = rechterPartV4(neuerFunktionSyntaxbaum, functionAlsString.substring(i+1,rechteGrenze));		
					i = rechteGrenze;
					return neuerFunktionSyntaxbaum;
				}
			}
			else if (vorzeichenLevel === 2) {
				if (functionAlsString[i] === '^') {
					gefunden = true;
					neuerFunktionSyntaxbaum.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
					neuerFunktionSyntaxbaum.index=i;
					neuerFunktionSyntaxbaum.linkesChild = linkerPartV4(neuerFunktionSyntaxbaum, functionAlsString.substring(0,i));
					neuerFunktionSyntaxbaum.rechtesChild = rechterPartV4(neuerFunktionSyntaxbaum, functionAlsString.substring(i+1,rechteGrenze));		
					i = rechteGrenze;
					return neuerFunktionSyntaxbaum;
				}
			}
			else if (vorzeichenLevel === 3) {
				if (!isNaN(aktuellesListenElement.inhalt) || functionAlsString[i] === 'x' || functionAlsString[i] === 'X') {
					gefunden = true;
					neuerFunktionSyntaxbaum.inhaltKnotenSymbol = aktuellesListenElement.inhalt;
					neuerFunktionSyntaxbaum.index=i;
					neuerFunktionSyntaxbaum.linkesChild = linkerPartV4(neuerFunktionSyntaxbaum, functionAlsString.substring(0,i));
					neuerFunktionSyntaxbaum.rechtesChild = rechterPartV4(neuerFunktionSyntaxbaum, functionAlsString.substring(i+1,rechteGrenze));		
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


function ausSyntaxbaumVektorErstellenV3(aktuellerKnoten,  functionAlsVectorLokal) {
	if (aktuellerKnoten.linkesChild === null && aktuellerKnoten.rechtesChild === null) {
		if (aktuellerKnoten.inhaltKnotenSymbol === 'x' || aktuellerKnoten.inhaltKnotenSymbol === 'X') {
			if (functionAlsVectorLokal.length < 2) {
				while(functionAlsVectorLokal.length < 2){
					functionAlsVectorLokal.push(0)
				}				
			}
			functionAlsVectorLokal[1] += 1;
		}
		else if (!isNaN(aktuellerKnoten.inhaltKnotenSymbol)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += aktuellerKnoten.inhaltKnotenSymbol;
		}
	}
	if (aktuellerKnoten.linkesChild !== null) {
		if (aktuellerKnoten.linkesChild.linkesChild !== null) {
			ausSyntaxbaumVektorErstellenV3(aktuellerKnoten.linkesChild, functionAlsVectorLokal);
		}
	}
	if (aktuellerKnoten.rechtesChild !== null) {
		if (aktuellerKnoten.rechtesChild.rechtesChild !== null&&(aktuellerKnoten.inhaltKnotenSymbol === '+' || aktuellerKnoten.inhaltKnotenSymbol === '^' || aktuellerKnoten.inhaltKnotenSymbol === '*' )) {
			ausSyntaxbaumVektorErstellenV3(aktuellerKnoten.rechtesChild, functionAlsVectorLokal);
		}
	
		if (aktuellerKnoten.rechtesChild.rechtesChild !== null && aktuellerKnoten.inhaltKnotenSymbol === '-' ) {
			ausSyntaxbaumVektorErstellenV3(aktuellerKnoten.rechtesChild, functionAlsVectorLokal);
		}
	}
	if (aktuellerKnoten.inhaltKnotenSymbol === '^') {
		if ((aktuellerKnoten.linkesChild.inhaltKnotenSymbol === 'x' || aktuellerKnoten.linkesChild.inhaltKnotenSymbol === 'X') && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenSymbol) ) {
			let hochZahl = aktuellerKnoten.rechtesChild.inhaltKnotenSymbol;
			if (functionAlsVectorLokal.length < hochZahl + 1) {
				while(functionAlsVectorLokal.length < hochZahl + 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			let multiplyer = 1.0;
			if (aktuellerKnoten.parent !== null) {
				if (aktuellerKnoten.parent.inhaltKnotenSymbol === '*' && aktuellerKnoten.parent.rechtesChild === aktuellerKnoten) {
					multiplyer = aktuellerKnoten.parent.linkesChild.inhaltKnotenSymbol;
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
				
				if ((next.parent.inhaltKnotenSymbol === '+' || next.parent.inhaltKnotenSymbol === '-') && next.parent.rechtesChild === next) {
					if (next.parent.inhaltKnotenSymbol === '+') {
						vorzeichen = false;
						break;
					}
					else if (next.parent.inhaltKnotenSymbol === '-') {
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
		
		
		else if (!isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenSymbol)  && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenSymbol) ) {
			let konstante = Math.pow(aktuellerKnoten.linkesChild.inhaltKnotenSymbol, aktuellerKnoten.rechtesChild.inhaltKnotenSymbol);
			let hochZahl = 0;
			if (functionAlsVectorLokal.length < hochZahl + 1) {
				functionAlsVectorLokal.push(0);
			}
			let multiplyer = 1.0;
			if (aktuellerKnoten.parent !== null) {
				if (aktuellerKnoten.parent.inhaltKnotenSymbol === '*' && aktuellerKnoten.parent.rechtesChild === aktuellerKnoten) {
					multiplyer = aktuellerKnoten.parent.linkesChild.inhaltKnotenSymbol;
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
				
				if ((next.parent.inhaltKnotenSymbol === '+' || next.parent.inhaltKnotenSymbol === '-') && next.parent.rechtesChild === next) {
					if (next.parent.inhaltKnotenSymbol === '+') {
						vorzeichen = false;
						break;
					}
					else if (next.parent.inhaltKnotenSymbol === '-') {
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

	if (aktuellerKnoten.inhaltKnotenSymbol === '*') {
		if ((aktuellerKnoten.rechtesChild.inhaltKnotenSymbol === 'x' || aktuellerKnoten.rechtesChild.inhaltKnotenSymbol === 'X') && !isNaN(aktuellerKnoten.linkesChild.inhaltKnotenSymbol)) {

			if (functionAlsVectorLokal.length < 2) {
				while(functionAlsVectorLokal.length < 2){
					functionAlsVectorLokal.push(0)
				}	
			}
			if (aktuellerKnoten.parent !== null) {
				let minusGerechnet = false;
				if (aktuellerKnoten.parent.parent !== null) {
					if (!isNaN(aktuellerKnoten.parent.rechtesChild.inhaltKnotenSymbol) && aktuellerKnoten.parent.parent.inhaltKnotenSymbol === '-') {
						functionAlsVectorLokal[1] -= aktuellerKnoten.linkesChild.inhaltKnotenSymbol;
						minusGerechnet=true;
					}
					if (!isNaN(aktuellerKnoten.parent.rechtesChild.inhaltKnotenSymbol) && aktuellerKnoten.parent.parent.inhaltKnotenSymbol === '+') { //hier könnte noch was falsch sein
						functionAlsVectorLokal[1] += aktuellerKnoten.linkesChild.inhaltKnotenSymbol;
					}
				}
			
				if (aktuellerKnoten.parent.inhaltKnotenSymbol === '+' && aktuellerKnoten.parent.rechtesChild === aktuellerKnoten) {
					functionAlsVectorLokal[1] += aktuellerKnoten.linkesChild.inhaltKnotenSymbol;
				}else if (aktuellerKnoten.parent.inhaltKnotenSymbol === '-' && aktuellerKnoten.parent.rechtesChild === aktuellerKnoten) {
					functionAlsVectorLokal[1] -= aktuellerKnoten.linkesChild.inhaltKnotenSymbol;
				}else if(!minusGerechnet){
					functionAlsVectorLokal[1] += aktuellerKnoten.linkesChild.inhaltKnotenSymbol;
				}
			}
			else {
				functionAlsVectorLokal[1] += aktuellerKnoten.linkesChild.inhaltKnotenSymbol;
			}			
		}
	}
	if (aktuellerKnoten.inhaltKnotenSymbol === '+') {
		if (aktuellerKnoten.linkesChild.inhaltKnotenSymbol === '^' && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenSymbol)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += aktuellerKnoten.rechtesChild.inhaltKnotenSymbol;
		}
		if (aktuellerKnoten.linkesChild.inhaltKnotenSymbol === '*' && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenSymbol)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += aktuellerKnoten.rechtesChild.inhaltKnotenSymbol;
		}
		if (aktuellerKnoten.linkesChild.inhaltKnotenSymbol === 'x' || aktuellerKnoten.linkesChild.inhaltKnotenSymbol === 'X' && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenSymbol)) {
			if (functionAlsVectorLokal.length < 2) {
				while(functionAlsVectorLokal.length < 2){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += aktuellerKnoten.rechtesChild.inhaltKnotenSymbol;
			functionAlsVectorLokal[1] += 1;
		}
		if (!isNaN(aktuellerKnoten.linkesChild.inhaltKnotenSymbol) && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenSymbol)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] += aktuellerKnoten.linkesChild.inhaltKnotenSymbol + aktuellerKnoten.rechtesChild.inhaltKnotenSymbol;
		}
	}
	else if (aktuellerKnoten.inhaltKnotenSymbol === '-') {
		if (aktuellerKnoten.linkesChild.inhaltKnotenSymbol === '^' && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenSymbol)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] -= aktuellerKnoten.rechtesChild.inhaltKnotenSymbol;
		}
		if (aktuellerKnoten.linkesChild.inhaltKnotenSymbol === '*' && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenSymbol)) {
			if (functionAlsVectorLokal.length < 1) {
				while(functionAlsVectorLokal.length < 1){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] -= aktuellerKnoten.rechtesChild.inhaltKnotenSymbol;
		}
		if (aktuellerKnoten.linkesChild.inhaltKnotenSymbol === 'x' || aktuellerKnoten.linkesChild.inhaltKnotenSymbol === 'X' && !isNaN(aktuellerKnoten.rechtesChild.inhaltKnotenSymbol)) {
			if (functionAlsVectorLokal.length < 2) {
				while(functionAlsVectorLokal.length < 2){
					functionAlsVectorLokal.push(0)
				}	
			}
			functionAlsVectorLokal[0] -= aktuellerKnoten.rechtesChild.inhaltKnotenSymbol;
			functionAlsVectorLokal[1] += 1;
		}
	}
	return functionAlsVectorLokal;
}



