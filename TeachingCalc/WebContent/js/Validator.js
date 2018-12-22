//check ob eingabe korrekt ist
function checkAufFalscheSymbole(str) { //0-9 +-*/^ () sind erlaubt bis jetzt
	let i = 0;
	while (str[i] != str[str.length]) {
		if (str[i] != '^'&&str[i] != '*'&&str[i] != '/'&&str[i] != '+'&&str[i] != '-'&&str[i] != '('&&str[i] != ')' && !(parseInt(str[i])>=0 && parseInt(str[i])<10) && str[i] != 'x'&&str[i] != 'X'&&str[i] != ',') {
			return false;
		}
		i++;
	}
	return true;
}

function checkKlammernKorrekt(str) { //richtige anzahl und ob jede öffnende klammer eine schließende hat
	let klammerLevel = 0;
	let i = 0;
	while (str[i] != str[str.length]) {
		if (str[i] == '(') {
			klammerLevel++;
		}
		if (str[i] == ')') {
			klammerLevel--;
		}
		i++;
		if (klammerLevel < 0) {
			return false;
		}
	}
	if (klammerLevel != 0) {
		return false;
	}
	return true;
}

function checkDerSyntax(str) { //zum Beispiel x^*3
	let i = 0;
	while (str[i] != str[str.length]) {
		if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/' || str[i] == '^' || str[i] == ',') {
			if (str[i+1] == '+' || str[i + 1] == '-' || str[i + 1] == '*' || str[i + 1] == '/' || str[i + 1] == '^' || str[i + 1] == ')') {
				return false;
			}
		}//xx fehlt noch
		i++;
	}
	return true;
}

function checkObVollständigerAusdruck(str){ //für operatoren die 2 zahlen brauchen aber die zweite fehlt z.b. 5+
	let i = 0;
	while (str[i] != str[str.length]) {
		if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/' || str[i] == '^'|| str[i] == '(' ) {
			if(i===str.length-1){
				return false
			}
		}//xx fehlt noch
		i++;
	}
	return true;
}

function leererString(string){
	if(string.length==0){
		return true;
	}
}