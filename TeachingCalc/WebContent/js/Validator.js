//check ob eingabe korrekt ist
function checkAufFalscheSymbole(str) { //0-9 +-*/^ () sind erlaubt bis jetzt
	let i = 0;
	while (str[i] != str[str.length]) {
		if (str[i] != '^'&&str[i] != '*'&&str[i] != '/'&&str[i] != '+'&&str[i] != '-'&&str[i] != '('&&str[i] != ')' 
			&& !(parseInt(str[i])>=0 && parseInt(str[i])<10) && str[i] != 'x'&&str[i] != 'X'&&str[i] != ',' 
				&& str[i]=== 's'&& str[i]=== 'i'&& str[i]=== 'n'&& str[i]=== 'c'&& str[i]=== 'o' &&  str[i]=== 't'&& str[i]=== 'a'&&  str[i]=== 'l'&& str[i]=== 'g') {
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
		}else if(str[i] == 'x'){
			if(str[i+1] == 'x'){
				return false;
			}
		}else if(str[i] == 's'){
			if(str[i+1] != 'i'){
				return false;
			}
			if(str[i+2] != 'n'){
				return false;
			}
			if(str[i+3] != '('){
				return false;
			}
		}else if(str[i] == 'c'){
			if(str[i+1] != 'o'){
				return false;
			}
			if(str[i+2] != 's'){
				return false;
			}
			if(str[i+3] != '('){
				return false;
			}
		}else if(str[i] == 't'){
			if(str[i+1] != 'a'){
				return false;
			}
			if(str[i+2] != 'n'){
				return false;
			}
			if(str[i+3] != '('){
				return false;
			}
		}else if(str[i] == 'l'){
			if(str[i+1] != 'o'){
				return false;
			}
			if(str[i+2] != 'g'){
				return false;
			}
			if(str[i+3] != '('){
				return false;
			}
		}
		i++;
	}
	return true;
}

function checkObVollständigerAusdruck(str){ //für operatoren die 2 zahlen brauchen aber die zweite fehlt z.b. 5+
	let i = 0;
	while (str[i] != str[str.length]) {
		if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/' || str[i] == '^'|| str[i] == '('|| str[i] == ',' ) {
			if(i===str.length-1){
				return false
			}
		}//xx fehlt noch
		i++;
	}
	return true;
}

function checkObKorrekteKommaZahl(str){ //für operatoren die 2 zahlen brauchen aber die zweite fehlt z.b. 5+
	let i = 0;
	while (str[i] != str[str.length]) {
		if (str[i] == ',') {
			if(isNaN(str[i+1])){
				return false;
			}
			if(isNaN(str[i-1])){
				return false;
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