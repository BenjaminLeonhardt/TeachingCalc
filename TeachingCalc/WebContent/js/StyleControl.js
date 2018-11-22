let navBarToggleBool = true;
function toggleLeftNavBar(){
	if(navBarToggleBool){
		document.getElementById("leftNavBar").style.left = "-300px";
		document.getElementById("canvasCalc").style.marginLeft = "0px";
		canvas.width = window.innerWidth-2;
		document.getElementById("eingabefeld").style.marginLeft = "20px";
		navBarToggleBool=false;
	}else{
		document.getElementById("leftNavBar").style.left = "0px";
		document.getElementById("canvasCalc").style.marginLeft = "300px";
		canvas.width = window.innerWidth-302;
		document.getElementById("eingabefeld").style.marginLeft = "320px";
		navBarToggleBool=true;
	}
}

function toggelLeftNavBarButton(){
	if( ((event.pageX - canvas.offsetLeft)>0 && (event.pageX - canvas.offsetLeft)<20) 
			&& ((event.pageY - canvas.offsetTop)>(canvas.height/2)-45)&&((event.pageY - canvas.offsetTop)<(canvas.height/2)+45)){
		
		backgroundColorLeftNavBarButton = 'rgba(64,64,64,1)';
		animateLeftNavBarButton = true;
	}else{
		backgroundColorLeftNavBarButton = 'rgba(40,40,40,1)';
		animateLeftNavBarButton = false;
	}
}

function addToFunctionDropdownList(funktion){
	let liste = document.getElementById("funktionenDropdown");
	while (liste.options.length > 0) {
		liste.options.remove(liste.options.length-1);
	}
	for(let i=0; i<funktionenListe.length; i++){
		let option = document.createElement("option");
	    option.text = buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString;
	    liste.add(option);
	}
	liste.value = liste.options[liste.length-1].text;
	
	document.getElementById("GraphAnzeigenCheckbox").checked = funktionenListe[funktionenListe.length-1].graphAnzeigen;
	document.getElementById("TangenteAnzeigenCheckbox").checked = funktionenListe[funktionenListe.length-1].tangenteAnzeigen;
	document.getElementById("ErsteAbleitungAnzeigenCheckbox").checked = funktionenListe[funktionenListe.length-1].ersteAbleitungAnzeigen;
	document.getElementById("ZweiteAbleitungAnzeigenCheckbox").checked = funktionenListe[funktionenListe.length-1].zweiteAbleitungAnzeigen;
	document.getElementById("DritteAbleitungAnzeigenCheckbox").checked = funktionenListe[funktionenListe.length-1].dritteAbleitungAnzeigen;
	document.getElementById("NormaleAnzeigenCheckbox").checked = funktionenListe[funktionenListe.length-1].normaleAnzeigen;
	document.getElementById("KrümmungskreisAnzeigenCheckbox").checked = funktionenListe[funktionenListe.length-1].krümmungskreisAnzeigen;

}

function onChangeGraphAnzeigen(){
	var liste = document.getElementById("funktionenDropdown");
	let indexGewaehltesElement = 0;
	for(let i=0; i<funktionenListe.length; i++){
		if(liste.value===buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString){
			indexGewaehltesElement = i;
		}
	}
	funktionenListe[indexGewaehltesElement].graphAnzeigen = document.getElementById("GraphAnzeigenCheckbox").checked;
}

function onChangeTangenteAnzeigen(){
	var liste = document.getElementById("funktionenDropdown");
	let indexGewaehltesElement = 0;
	for(let i=0; i<funktionenListe.length; i++){
		if(liste.value===buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString){
			indexGewaehltesElement = i;
		}
	}
	funktionenListe[indexGewaehltesElement].tangenteAnzeigen = document.getElementById("TangenteAnzeigenCheckbox").checked;
}

function onChangeErsteAbleitungAnzeigen(){
	var liste = document.getElementById("funktionenDropdown");
	let indexGewaehltesElement = 0;
	for(let i=0; i<funktionenListe.length; i++){
		if(liste.value===buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString){
			indexGewaehltesElement = i;
		}
	}
	funktionenListe[indexGewaehltesElement].ersteAbleitungAnzeigen = document.getElementById("ErsteAbleitungAnzeigenCheckbox").checked;
}

function onChangeZweiteAbleitungAnzeigen(){
	var liste = document.getElementById("funktionenDropdown");
	let indexGewaehltesElement = 0;
	for(let i=0; i<funktionenListe.length; i++){
		if(liste.value===buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString){
			indexGewaehltesElement = i;
		}
	}
	funktionenListe[indexGewaehltesElement].zweiteAbleitungAnzeigen = document.getElementById("ZweiteAbleitungAnzeigenCheckbox").checked;
}

function onChangeDritteAbleitungAnzeigen(){
	var liste = document.getElementById("funktionenDropdown");
	let indexGewaehltesElement = 0;
	for(let i=0; i<funktionenListe.length; i++){
		if(liste.value===buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString){
			indexGewaehltesElement = i;
		}
	}
	funktionenListe[indexGewaehltesElement].dritteAbleitungAnzeigen = document.getElementById("DritteAbleitungAnzeigenCheckbox").checked;
}

function onChangeNormaleAnzeigen(){
	var liste = document.getElementById("funktionenDropdown");
	let indexGewaehltesElement = 0;
	for(let i=0; i<funktionenListe.length; i++){
		if(liste.value===buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString){
			indexGewaehltesElement = i;
		}
	}
	funktionenListe[indexGewaehltesElement].normaleAnzeigen = document.getElementById("NormaleAnzeigenCheckbox").checked;
}

function onChangeKrümmungskreisAnzeigen(){
	var liste = document.getElementById("funktionenDropdown");
	let indexGewaehltesElement = 0;
	for(let i=0; i<funktionenListe.length; i++){
		if(liste.value===buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString){
			indexGewaehltesElement = i;
		}
	}
	funktionenListe[indexGewaehltesElement].krümmungskreisAnzeigen = document.getElementById("KrümmungskreisAnzeigenCheckbox").checked;
}

function onChangeFunktionenDropdown(){
	let liste = document.getElementById("funktionenDropdown");
	for(let i=0; i<funktionenListe.length; i++){
		if(liste.value===buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString){
			indexGewaehltesElement = i;
		}
	}
	document.getElementById("GraphAnzeigenCheckbox").checked = funktionenListe[indexGewaehltesElement].graphAnzeigen;
	document.getElementById("TangenteAnzeigenCheckbox").checked = funktionenListe[indexGewaehltesElement].tangenteAnzeigen;
	document.getElementById("ErsteAbleitungAnzeigenCheckbox").checked = funktionenListe[indexGewaehltesElement].ersteAbleitungAnzeigen;
	document.getElementById("ZweiteAbleitungAnzeigenCheckbox").checked = funktionenListe[indexGewaehltesElement].zweiteAbleitungAnzeigen;
	document.getElementById("DritteAbleitungAnzeigenCheckbox").checked = funktionenListe[indexGewaehltesElement].dritteAbleitungAnzeigen;
	document.getElementById("NormaleAnzeigenCheckbox").checked = funktionenListe[indexGewaehltesElement].normaleAnzeigen;
	document.getElementById("KrümmungskreisAnzeigenCheckbox").checked = funktionenListe[indexGewaehltesElement].krümmungskreisAnzeigen;
}

function onClickGeradengleichungNullstellen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 1;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			funktionenListe[i].nullstellen = [];
			if(funktionenListe[i].inhaltKnotenVektor.length===2){
				
				funktionenListe[i].nullstellen.push((-funktionenListe[i].inhaltKnotenVektor[0])/funktionenListe[i].inhaltKnotenVektor[1]);
								
				document.getElementById("NullstellenTextfeld").value = "x1=" + funktionenListe[i].nullstellen[0].toFixed(2);	
				
			}else if(funktionenListe[i].inhaltKnotenVektor.length===3){
				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss das Polynom muss die Form bx+c haben";
			}else if(funktionenListe[i].inhaltKnotenVektor.length>3){
				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss das Polynom muss die Form bx+c haben";
			}else if(funktionenListe[i].inhaltKnotenVektor.length===1){
				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss das Polynom muss die Form bx+c haben";
			}
		}
	}
}

function onClickMitternachtsformelNullstellen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 2;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			
			funktionenListe[i].nullstellen = [];
			if(funktionenListe[i].inhaltKnotenVektor.length===3){

				let minusB = (-funktionenListe[i].inhaltKnotenVektor[1]);
				let BQuadrat = Math.pow(funktionenListe[i].inhaltKnotenVektor[1],2);
				let VierAC = (4*funktionenListe[i].inhaltKnotenVektor[2]*funktionenListe[i].inhaltKnotenVektor[0]);
				let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
				let zweiMalA = 2*funktionenListe[i].inhaltKnotenVektor[2];
			
				if(BQuadrat-VierAC>=0){
					let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
					let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;
				
		
					funktionenListe[i].nullstellen.push(x1);
					funktionenListe[i].nullstellen.push(x2);
					document.getElementById("NullstellenTextfeld").value = "x1=" + x1.toFixed(2) + " x2="+x2.toFixed(2);
				}else{
					document.getElementById("NullstellenTextfeld").value = "Keine Nullstellen gefunden.";
				}
							
				
			}else{
				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die Mitternachtsformel muss das Polynom muss die Form ax^2+bx+c haben";
			}		
		}
	}
}

function onClickPQFormelNullstellen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 3;
	aktiverReiter = 6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			funktionenListe[i].nullstellen = [];
			if(funktionenListe[i].inhaltKnotenVektor.length===3){
				
				let bOderP = funktionenListe[i].inhaltKnotenVektor[1]/funktionenListe[i].inhaltKnotenVektor[2];
				let cOderQ = funktionenListe[i].inhaltKnotenVektor[0]/funktionenListe[i].inhaltKnotenVektor[2];
						
				if(Math.pow(bOderP/2,2)-cOderQ>=0){
					let x1 = -(bOderP/2)+Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
					let x2 = -(bOderP/2)-Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
				
					
					funktionenListe[i].nullstellen.push(x1);
					funktionenListe[i].nullstellen.push(x2);
					
					document.getElementById("NullstellenTextfeld").value = "x1=" + x1.toFixed(2) + " x2="+x2.toFixed(2);
				}else{
					document.getElementById("NullstellenTextfeld").value = "Keine Nullstellen gefunden.";
				}
			}else{
				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die PQ-Formel muss das Polynom muss die Form ax^2+bx+c haben";
			}
		}
	}
}

function onClickSatzVonVietaNullstellen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 4;
	aktiverReiter = 6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			funktionenListe[i].nullstellen = [];
			if(funktionenListe[i].inhaltKnotenVektor.length===3){
				let gefunden=false;

				let p = funktionenListe[i].inhaltKnotenVektor[1]/funktionenListe[i].inhaltKnotenVektor[2];
				let q = funktionenListe[i].inhaltKnotenVektor[0]/funktionenListe[i].inhaltKnotenVektor[2];
				
				for(let x1=-100;x1<100;x1++){
					for(let x2=-100;x2<100;x2++){
						if(p===(-(x1+x2))&&q===(x1*x2)){
							funktionenListe[i].nullstellen.push(x1);
							funktionenListe[i].nullstellen.push(x2);
							document.getElementById("NullstellenTextfeld").value = "x1=" + x1.toFixed(2) + " x2="+x2.toFixed(2);	
							gefunden = true;
							x1=100;
							x2=100;
						}
					}	
				}
				if(gefunden===false){
					document.getElementById("NullstellenTextfeld").value = "Keine Nullstellen gefunden.";
				}

			}else{
				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich... Um mit dem Satz von Vieta die Nullstellen ermitteln zu können, muss das Polynom die Form ax^2+bx+c haben";
			}
		}
	}
}


function onClickGeradengleichungPolstellen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 7;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			funktionenListe[i].polstellen = [];
			if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length===2){
				
				funktionenListe[i].polstellen.push((-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0])/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]);
								
				document.getElementById("PolstellenTextfeld").value = "x1=" + funktionenListe[i].polstellen[0].toFixed(2);	
				
			}else if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length===3){
				document.getElementById("PolstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die Ableitung des Polynoms die Form bx+c haben";
			}else if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length>3){
				document.getElementById("PolstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die Ableitung des Polynoms die Form bx+c haben";
			}else if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length===1){
				document.getElementById("PolstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die Ableitung des Polynoms die Form bx+c haben";
			}
		}
	}
}

function onClickMitternachtsformelPolstellen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 8;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			funktionenListe[i].polstellen = [];
			if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length===3){

				let minusB = (-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]);
				let BQuadrat = Math.pow(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1],2);
				let VierAC = (4*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]);
				let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
				let zweiMalA = 2*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2];
			
				if(BQuadrat-VierAC>=0){
					let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
					let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;
				
					
					funktionenListe[i].polstellen.push(x1);
					funktionenListe[i].polstellen.push(x2);
					document.getElementById("PolstellenTextfeld").value = "x1=" + x1.toFixed(2) + " x2=" + x2.toFixed(2);
				}else{
					document.getElementById("PolstellenTextfeld").value = "Keine Polstellen gefunden.";
				}
			}else if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length===2){
				document.getElementById("PolstellenTextfeld").value = "Leider nicht möglich... Um mit der Mitternachtsformel die Polstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
			}else{
				document.getElementById("PolstellenTextfeld").value = "Leider nicht möglich... Um mit der Mitternachtsformel die Polstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
			}		
		}
	}
}



function onClickPQFormelPolstellen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 9;
	aktiverReiter = 6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			funktionenListe[i].polstellen = [];
			if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length===3){
				
				let bOderP=funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2];
				let cOderQ=funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2];
					
				if(Math.pow(bOderP/2,2)-cOderQ>=0){
					let x1 = -(bOderP/2)+Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
					let x2 = -(bOderP/2)-Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
				
			
					funktionenListe[i].polstellen.push(x1);
					funktionenListe[i].polstellen.push(x2);

					
					document.getElementById("PolstellenTextfeld").value = "x1=" + x1.toFixed(2) + " x2="+x2.toFixed(2);				
				}else{
					document.getElementById("PolstellenTextfeld").value = "Keine Polstellen gefunden.";
				}
			}else{
				document.getElementById("PolstellenTextfeld").value = "Leider nicht möglich... Um mit der PQ-Formel die Polstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
			}
		}
	}
}

function onClickSatzVonVietaPolstellen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 10;
	aktiverReiter = 6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			funktionenListe[i].polstellen = [];
			if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length===3){
				let gefunden=false;

				let p = funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2];
				let q = funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2];
				
				for(let x1=-100;x1<100;x1++){
					for(let x2=-100;x2<100;x2++){
						if(p===(-(x1+x2))&&q===(x1*x2)){
							
							funktionenListe[i].polstellen.push(x1);
							funktionenListe[i].polstellen.push(x2);
							document.getElementById("PolstellenTextfeld").value = "x1=" + x1.toFixed(2) + " x2="+x2.toFixed(2);	
							gefunden = true;
							x1=100;
							x2=100;
						}
					}	
				}
				if(gefunden===false){
					document.getElementById("PolstellenTextfeld").value = "Keine Polstellen gefunden.";
				}

			}else{
				document.getElementById("PolstellenTextfeld").value = "Leider nicht möglich... Um mit dem Satz von Vieta die Polstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
			}
		}
	}
}

function onChangeNullstellenAnzeigen(){
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			funktionenListe[i].nullstellenAnzeigen=document.getElementById("NullstellenAnzeigenCheckbox").checked;
		}
	}
}

function onChangePolstellenAnzeigen(){
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			funktionenListe[i].polstellenAnzeigen=document.getElementById("PolstellenAnzeigenCheckbox").checked;
		}
	}
}