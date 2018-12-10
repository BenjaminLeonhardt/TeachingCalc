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



function displayButtons(funktionObjekt){ 
	
	
	if(funktionenListe[funktionenListe.length-1].gekürzt.inhaltKnotenSymbol==="/"){
		let polynomGradZaehler = funktionenListe[funktionenListe.length-1].gekürzt.linkesChild.inhaltKnotenVektor.length-1;
		let polynomGradNenner = funktionenListe[funktionenListe.length-1].gekürzt.rechtesChild.inhaltKnotenVektor.length-1;
		
		[].forEach.call(document.getElementsByClassName("gebrochenRational"), function(el){
			el.style.display = "block";
		});
		
		if(polynomGradZaehler===1){
			[].forEach.call(document.getElementsByClassName("ZweitenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("DrittenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ViertenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("FuenftenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("Gerade"), function(el){
				el.style.display = "block";
			});
		}else if(polynomGradZaehler===2){
			[].forEach.call(document.getElementsByClassName("Gerade"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("DrittenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ViertenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("FuenftenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ZweitenGrades"), function(el){
				el.style.display = "block";
			});
		}else if(polynomGradZaehler===3){
			[].forEach.call(document.getElementsByClassName("Gerade"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ZweitenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ViertenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("FuenftenGrades"), function(el){
				el.style.display = "none";
			});		
			[].forEach.call(document.getElementsByClassName("DrittenGrades"), function(el){
				el.style.display = "block";
			});
			
		}else if(polynomGradZaehler===4){
			[].forEach.call(document.getElementsByClassName("Gerade"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ZweitenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("DrittenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("FuenftenGrades"), function(el){
				el.style.display = "none";
			});		
			[].forEach.call(document.getElementsByClassName("ViertenGrades"), function(el){
				el.style.display = "block";
			});

		}else if(polynomGradZaehler>=5){
			[].forEach.call(document.getElementsByClassName("Gerade"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ZweitenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("DrittenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ViertenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("FuenftenGrades"), function(el){
				el.style.display = "block";
			});

		}
	}else{
		let polynomGrad = funktionenListe[funktionenListe.length-1].gekürzt.inhaltKnotenVektor.length-1;
		
		[].forEach.call(document.getElementsByClassName("gebrochenRational"), function(el){
			el.style.display = "none";
		});
		
		if(polynomGrad===1){
			[].forEach.call(document.getElementsByClassName("ZweitenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("DrittenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ViertenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("FuenftenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("Gerade"), function(el){
				el.style.display = "block";
			});
		}else if(polynomGrad===2){
			[].forEach.call(document.getElementsByClassName("Gerade"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("DrittenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ViertenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("FuenftenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ZweitenGrades"), function(el){
				el.style.display = "block";
			});
		}else if(polynomGrad===3){
			[].forEach.call(document.getElementsByClassName("Gerade"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ZweitenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ViertenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("FuenftenGrades"), function(el){
				el.style.display = "none";
			});		
			[].forEach.call(document.getElementsByClassName("DrittenGrades"), function(el){
				el.style.display = "block";
			});
			
		}else if(polynomGrad===4){
			[].forEach.call(document.getElementsByClassName("Gerade"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ZweitenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("DrittenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("FuenftenGrades"), function(el){
				el.style.display = "none";
			});		
			[].forEach.call(document.getElementsByClassName("ViertenGrades"), function(el){
				el.style.display = "block";
			});

		}else if(polynomGrad>=5){
			[].forEach.call(document.getElementsByClassName("Gerade"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ZweitenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("DrittenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("ViertenGrades"), function(el){
				el.style.display = "none";
			});
			[].forEach.call(document.getElementsByClassName("FuenftenGrades"), function(el){
				el.style.display = "block";
			});

		}
	}
	
}

function getVector(i){
	let knotenVektor = funktionenListe[i].gekürzt.inhaltKnotenVektor;
	if(funktionenListe[i].inhaltKnotenSymbol==="/"){
		knotenVektor = funktionenListe[i].gekürzt.linkesChild.inhaltKnotenVektor;
	}
	return knotenVektor;
}


function onClickGeradengleichungNullstellen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 1;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("NullstellenTextfeld").value = "";
			funktionenListe[i].nullstellen = [];
			
			let knotenVektor = getVector(i);
			
			if(knotenVektor.length===2){
				
				funktionenListe[i].nullstellen.push((-knotenVektor[0])/knotenVektor[1]);
								
				document.getElementById("NullstellenTextfeld").value = "x1=" + zahlRunden(funktionenListe[i].nullstellen[0]);	
				
			}else if(knotenVektor.length===3){
				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss das Polynom muss die Form bx+c haben";
			}else if(knotenVektor.length>3){
				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss das Polynom muss die Form bx+c haben";
			}else if(knotenVektor.length===1){
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
			document.getElementById("NullstellenTextfeld").value = "";
			funktionenListe[i].nullstellen = [];
			
			let knotenVektor = getVector(i);
			
			if(knotenVektor.length===3){

				let minusB = (-knotenVektor[1]);
				let BQuadrat = Math.pow(knotenVektor[1],2);
				let VierAC = (4*knotenVektor[2]*knotenVektor[0]);
				let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
				let zweiMalA = 2*knotenVektor[2];
			
				if(BQuadrat-VierAC>=0){
					let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
					let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;
				
		
					funktionenListe[i].nullstellen.push(x1);
					funktionenListe[i].nullstellen.push(x2);
					document.getElementById("NullstellenTextfeld").value = "x1=" + zahlRunden(x1) + " x2=" + zahlRunden(x2);
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
			document.getElementById("NullstellenTextfeld").value = "";
			funktionenListe[i].nullstellen = [];
			
			let knotenVektor = getVector(i);
			
			if(knotenVektor.length===3){
				
				let bOderP = knotenVektor[1]/knotenVektor[2];
				let cOderQ = knotenVektor[0]/knotenVektor[2];
						
				if(Math.pow(bOderP/2,2)-cOderQ>=0){
					let x1 = -(bOderP/2)+Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
					let x2 = -(bOderP/2)-Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
				
					
					funktionenListe[i].nullstellen.push(x1);
					funktionenListe[i].nullstellen.push(x2);
					
					document.getElementById("NullstellenTextfeld").value = "x1=" + zahlRunden(x1) + " x2=" + zahlRunden(x2);
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
			document.getElementById("NullstellenTextfeld").value = "";
			funktionenListe[i].nullstellen = [];
			
			let knotenVektor = getVector(i);
			
			if(knotenVektor.length===3){
				let gefunden=false;

				let p = knotenVektor[1]/knotenVektor[2];
				let q = knotenVektor[0]/knotenVektor[2];
				
				for(let x1=-100;x1<100;x1++){
					for(let x2=-100;x2<100;x2++){
						if(p===(-(x1+x2))&&q===(x1*x2)){
							funktionenListe[i].nullstellen.push(x1);
							funktionenListe[i].nullstellen.push(x2);
							document.getElementById("NullstellenTextfeld").value = "x1=" + zahlRunden(x1) + " x2=" + zahlRunden(x2);	
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

function onClickNewtonVerfahrenNullstellen(){
	let tolleranz = Math.pow(10,-15);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 5;
	aktiverReiter = 6;
	
	let nullstellenTmp = [];
	

	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("NullstellenTextfeld").value = "";
			funktionenListe[i].nullstellen = [];
			let funktionTmp = funktionenListe[i];
			for(let i=-30;i<30;i++){				
				nullstellenTmp.push(newtonVerfahren_GebrochenRational(i, funktionTmp, false));
			}
			let tolleranzErreicht = false;
			for(let j=0;j<nullstellenTmp.length;j++){
				tolleranzErreicht = false;
				console.log(j+" "+ nullstellenTmp[j]);
				if(nullstellenTmp[j]!=undefined){
					let xtmp = nullstellenTmp[j].x;
					for(let k=0;k<funktionenListe[i].nullstellen.length;k++){
						if(Math.abs(funktionenListe[i].nullstellen[k] - xtmp) < tolleranz){
							tolleranzErreicht = true
						}
					}
					if(!tolleranzErreicht){
						funktionenListe[i].nullstellen.push(nullstellenTmp[j].x);
					}
				}
			}
			let text ="";
			for(let j=0;j<funktionenListe[i].nullstellen.length;j++){
				text +=  "x" + (j+1) + "=" + zahlRunden(funktionenListe[i].nullstellen[j]) + " ";	
			}
			document.getElementById("NullstellenTextfeld").value = text;
		}
	}
	
}


function onClickRegulaFalsiNullstellen(){
	let tolleranz = Math.pow(10,-10);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 6;
	aktiverReiter = 6;
	
	let nullstellenTmp = [];
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("NullstellenTextfeld").value = "";
			funktionenListe[i].nullstellen = [];
			
			let zaehler = 0;
			let nenner = 0;
			
			if (funktionenListe[i].inhaltKnotenSymbol === '/') {
				zaehler = funktionenListe[i].linkesChild.inhaltKnotenVektor;
				nenner = funktionenListe[i].rechtesChild.inhaltKnotenVektor;
			}
			else {
				if (funktionenListe[i].gekürzt.inhaltKnotenVektor.length === 0) {
					zaehler = funktionenListe[i].gekürzt.linkesChild.inhaltKnotenVektor;
				}
				else {
					zaehler = funktionenListe[i].gekürzt.inhaltKnotenVektor;
				}
			}
			
			let y = 0;
			let yOld = 0;
			let rundenCounter = 0;
			let uebergangGefunden = false;
			for (let i = -30; i < 30; i += 0.1) {
				y = f(i, zaehler);
				if (rundenCounter > 0) {
					if (y < 0 && yOld > 0) {
						nullstellenTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, zaehler));
						uebergangGefunden = true;
					}
					else if (y > 0 && yOld < 0) {
						nullstellenTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, zaehler));
						uebergangGefunden = true;
					}
				}

				yOld = y;
				rundenCounter++;
			}
			
			if (uebergangGefunden == false) {
				for (let i = -30; i < 30; i += 0.1) {
					nullstellenTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, zaehler));
				}
				yOld = y;
				rundenCounter++;
			}
			
			let tolleranzErreicht = false;
			for(let j=0;j<nullstellenTmp.length;j++){
				tolleranzErreicht = false;
				console.log(j+" "+ nullstellenTmp[j]);
				if(nullstellenTmp[j]!=undefined){
					let xtmp = nullstellenTmp[j].x;
					for(let k=0;k<funktionenListe[i].nullstellen.length;k++){
						if(Math.abs(funktionenListe[i].nullstellen[k] - xtmp) < tolleranz){
							tolleranzErreicht = true
						}
					}
					if(!tolleranzErreicht){
						funktionenListe[i].nullstellen.push(nullstellenTmp[j].x);
					}
				}
			}
			let text ="";
			for(let j=0;j<funktionenListe[i].nullstellen.length;j++){	
				text +=  "x" + (j+1) + "=" + zahlRunden(funktionenListe[i].nullstellen[j]) + " ";			
			}
			document.getElementById("NullstellenTextfeld").value = text;
			
		}
	}
}

function getVectorErsteAbleitung(i){
	let knotenVektor = funktionenListe[i].gekürzt.ersteAbleitung.inhaltKnotenVektor;
	if(funktionenListe[i].inhaltKnotenSymbol==="/"){
		knotenVektor = funktionenListe[i].gekürzt.ersteAbleitung.linkesChild.inhaltKnotenVektor;
	}
	return knotenVektor;
}


function onClickGeradengleichungExtremstellen(){
	let tolleranz = Math.pow(10,-10);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 7;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("ExtremstellenTextfeld").value = "";
			funktionenListe[i].extremstellen = [];
			
			let knotenVektorErsteAbleitung = getVectorErsteAbleitung(i);
			
			if(knotenVektorErsteAbleitung.length===2){
				
				funktionenListe[i].extremstellen.push((-knotenVektorErsteAbleitung[0])/knotenVektorErsteAbleitung[1]);
								
				
				if(  getPunkt(funktionenListe[i].extremstellen[0],funktionenListe[i].zweiteAbleitung)>0 ){
					document.getElementById("ExtremstellenTextfeld").value =  "t1=" + zahlRunden(funktionenListe[i].extremstellen[0]);
				}else if(getPunkt(funktionenListe[i].extremstellen[0],funktionenListe[i].zweiteAbleitung)<0){
					document.getElementById("ExtremstellenTextfeld").value =  "h1=" + zahlRunden(funktionenListe[i].extremstellen[0]);
				}


			}else if(knotenVektorErsteAbleitung.length===3){
				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die Ableitung des Polynoms die Form bx+c haben";
			}else if(knotenVektorErsteAbleitung.length>3){
				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die Ableitung des Polynoms die Form bx+c haben";
			}else if(knotenVektorErsteAbleitung.length===1){
				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die Ableitung des Polynoms die Form bx+c haben";
			}
		}
	}
}

function onClickMitternachtsformelExtremstellen(){
	let tolleranz = Math.pow(10,-10);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 8;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("ExtremstellenTextfeld").value = "";
			funktionenListe[i].extremstellen = [];
			
			let knotenVektorErsteAbleitung = getVectorErsteAbleitung(i);
			
			if(knotenVektorErsteAbleitung.length===3){

				let minusB = (-knotenVektorErsteAbleitung[1]);
				let BQuadrat = Math.pow(knotenVektorErsteAbleitung[1],2);
				let VierAC = (4*knotenVektorErsteAbleitung[2]*knotenVektor[0]);
				let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
				let zweiMalA = 2*knotenVektorErsteAbleitung[2];
			
				if(BQuadrat-VierAC>=0){
					let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
					let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;
				
					
					funktionenListe[i].extremstellen.push(x1);
					funktionenListe[i].extremstellen.push(x2);
					
					let text = "";
					
					for(let j=0;j<funktionenListe[i].extremstellen.length;j++){
						
						if(  getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)>0 ){
							text +=  "tp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j]) + "|" + zahlRunden(getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
						}else if(getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)<0){
							text +=  "hp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j])+"|"+ zahlRunden(getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
						}
							
						
					}
					
					
					document.getElementById("ExtremstellenTextfeld").value = text;
				}else{
					document.getElementById("ExtremstellenTextfeld").value = "Keine Extremstellen gefunden.";
				}
			}else if(knotenVektorErsteAbleitung.length===2){
				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich... Um mit der Mitternachtsformel die Extremstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
			}else{
				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich... Um mit der Mitternachtsformel die Extremstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
			}		
		}
	}
}



function onClickPQFormelExtremstellen(){
	let tolleranz = Math.pow(10,-10);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 9;
	aktiverReiter = 6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("ExtremstellenTextfeld").value = "";
			funktionenListe[i].extremstellen = [];
			
			let knotenVektorErsteAbleitung = getVectorErsteAbleitung(i);
			
			if(knotenVektorErsteAbleitung.length===3){
				
				let bOderP=knotenVektorErsteAbleitung[1]/knotenVektorErsteAbleitung[2];
				let cOderQ=knotenVektorErsteAbleitung[0]/knotenVektorErsteAbleitung[2];
					
				if(Math.pow(bOderP/2,2)-cOderQ>=0){
					let x1 = -(bOderP/2)+Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
					let x2 = -(bOderP/2)-Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
				
			
					funktionenListe[i].extremstellen.push(x1);
					funktionenListe[i].extremstellen.push(x2);

					
					let text = "";
					
					for(let j=0;j<funktionenListe[i].extremstellen.length;j++){
						if(  getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)>0 ){
							text +=  "tp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j]) + "|" + zahlRunden(getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
						}else if(getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)<0){
							text +=  "hp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j])+"|"+ zahlRunden(getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
						}
					}
					document.getElementById("ExtremstellenTextfeld").value = text;		
				}else{
					document.getElementById("ExtremstellenTextfeld").value = "Keine Extremstellen gefunden.";
				}
			}else{
				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich... Um mit der PQ-Formel die Extremstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
			}
		}
	}
}

function onClickSatzVonVietaExtremstellen(){
	let tolleranz = Math.pow(10,-10);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 10;
	aktiverReiter = 6;
	
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("ExtremstellenTextfeld").value = "";
			funktionenListe[i].extremstellen = [];
			
			let knotenVektorErsteAbleitung = getVectorErsteAbleitung(i);
			
			if(knotenVektorErsteAbleitung.length===3){
				let gefunden=false;

				let p = knotenVektorErsteAbleitung[1]/knotenVektorErsteAbleitung[2];
				let q = knotenVektorErsteAbleitung[0]/knotenVektorErsteAbleitung[2];
				
				for(let x1=-100;x1<100;x1++){
					for(let x2=-100;x2<100;x2++){
						if(p===(-(x1+x2))&&q===(x1*x2)){
							
							funktionenListe[i].extremstellen.push(x1);
							funktionenListe[i].extremstellen.push(x2);
							
							let text = "";
							
							for(let j=0;j<funktionenListe[i].extremstellen.length;j++){
								if(  getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)>0 ){
									text +=  "tp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j]) + "|" + zahlRunden(getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
								}else if(getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)<0){
									text +=  "hp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j])+"|"+ zahlRunden(getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
								}
							}
							document.getElementById("ExtremstellenTextfeld").value = text;
							
							gefunden = true;
							x1=100;
							x2=100;
						}
					}	
				}
				
				
				if(gefunden===false){
					document.getElementById("ExtremstellenTextfeld").value = "Keine Extremstellen gefunden.";
				}

			}else{
				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich... Um mit dem Satz von Vieta die Extremstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
			}
		}
	}
}


function onClickNewtonVerfahrenExtremstellen(){
	let tolleranz = Math.pow(10,-15);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 11;
	aktiverReiter = 6;
	
	let extremstellenTmp = [];

	if(workersAvailable){
		for(let i=0;i<funktionenListe.length;i++){
			if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
				document.getElementById("ExtremstellenTextfeld").value = "";
				funktionenListe[i].extremstellen = [];
				let funktionTmp = funktionenListe[i];
				for(let i=-30;i<30;i++){				
					if(funktionTmp.inhaltKnotenSymbol!="/"){
						extremstellenTmp.push(newtonVerfahren_GebrochenRational(i, funktionTmp.ersteAbleitung, false));
					
					}else{
						extremstellenTmp.push(newtonVerfahren_GebrochenRational(i, funktionTmp, true));
					}
					
				}
				let tolleranzErreicht = false;
				for(let j=0;j<extremstellenTmp.length;j++){
					tolleranzErreicht = false;
					console.log(j+" "+ extremstellenTmp[j]);
					if(extremstellenTmp[j]!=undefined){
						let xtmp = extremstellenTmp[j].x;
						for(let k=0;k<funktionenListe[i].extremstellen.length;k++){
							if(Math.abs(funktionenListe[i].extremstellen[k] - xtmp) < tolleranz){
								tolleranzErreicht = true
							}
						}
						if(!tolleranzErreicht){
							funktionenListe[i].extremstellen.push(extremstellenTmp[j].x);
						}
					}
				}
				
				let text = "";
				
				for(let j=0;j<funktionenListe[i].extremstellen.length;j++){
					if(  getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)>0 ){
						text +=  "tp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j]) + "|" + zahlRunden(getPunkt(Math.round(funktionenListe[i].extremstellen[j]),funktionenListe[i])) + ") ";
					}else if(getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)<0){
						text +=  "hp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j])+"|"+ zahlRunden(getPunkt(Math.round(funktionenListe[i].extremstellen[j]),funktionenListe[i])) + ") ";
					}
				}
				document.getElementById("ExtremstellenTextfeld").value = text;
			}
		}
	}
}

function onClickRegulaFalsiExtremstellen(){
	let tolleranz = Math.pow(10,-10);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 12;
	aktiverReiter = 6;
	
	let extremstellenTmp = [];
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("ExtremstellenTextfeld").value = "";
			funktionenListe[i].extremstellen = [];
			
			let zaehler = 0;
			let nenner = 0;
			
			if (funktionenListe[i].inhaltKnotenSymbol === '/') {
				zaehler = funktionenListe[i].linkesChild.inhaltKnotenVektor;
				nenner = funktionenListe[i].rechtesChild.inhaltKnotenVektor;
			}
			else {
				if (funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length === 0) {
					nenner = funktionenListe[i].ersteAbleitung.linkesChild.inhaltKnotenVektor;
				}
				else {
					nenner = funktionenListe[i].ersteAbleitung.inhaltKnotenVektor;
				}
			}
			
			let y = 0;
			let yOld = 0;
			let rundenCounter = 0;
			let uebergangGefunden = false;
			for (let i = -30; i < 30; i += 0.1) {
				y = f(i, nenner);
				if (rundenCounter > 0) {
					if (y < 0 && yOld > 0) {
						extremstellenTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, nenner));
						uebergangGefunden = true;
					}
					else if (y > 0 && yOld < 0) {
						extremstellenTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, nenner));
						uebergangGefunden = true;
					}
				}

				yOld = y;
				rundenCounter++;
			}
			
			if (uebergangGefunden == false) {
				for (let i = -30; i < 30; i += 0.1) {
					extremstellenTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, nenner));
				}
				yOld = y;
				rundenCounter++;
			}
			
			let tolleranzErreicht = false;
			for(let j=0;j<extremstellenTmp.length;j++){
				tolleranzErreicht = false;
				console.log(j+" "+ extremstellenTmp[j]);
				if(extremstellenTmp[j]!=undefined){
					let xtmp = extremstellenTmp[j].x;
					for(let k=0;k<funktionenListe[i].extremstellen.length;k++){
						if(Math.abs(funktionenListe[i].extremstellen[k] - xtmp) < tolleranz){
							tolleranzErreicht = true
						}
					}
					if(!tolleranzErreicht){
						funktionenListe[i].extremstellen.push(extremstellenTmp[j].x);
					}
				}
			}
			
			let text = "";
			
			for(let j=0;j<funktionenListe[i].extremstellen.length;j++){
				if(  getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)>0 ){
					text +=  "tp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j]) + "|" + zahlRunden(getPunkt(Math.round(funktionenListe[i].extremstellen[j]),funktionenListe[i])) + ") ";
				}else if(getPunkt(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)<0){
					text +=  "hp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j])+"|"+ zahlRunden(getPunkt(Math.round(funktionenListe[i].extremstellen[j]),funktionenListe[i])) + ") ";
				}
			}
			document.getElementById("ExtremstellenTextfeld").value = text;
			
		}
	}
}


function getVectorZweiteAbleitung(i){
	let knotenVektor = funktionenListe[i].gekürzt.ersteAbleitung.inhaltKnotenVektor;
	if(funktionenListe[i].inhaltKnotenSymbol==="/"){
		knotenVektor = funktionenListe[i].gekürzt.ersteAbleitung.linkesChild.inhaltKnotenVektor;
	}
	return knotenVektor;
}


function onClickGeradengleichungWendepunkte(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 13;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("WendepunkteTextfeld").value = "";
			funktionenListe[i].wendepunkte = [];
			
			let knotenVektorZweiteAbleitung = getVectorZweiteAbleitung(i);
			
			if(knotenVektorZweiteAbleitung.length===2){
				
				funktionenListe[i].wendepunkte.push((-knotenVektorZweiteAbleitung[0])/knotenVektorZweiteAbleitung[1]);
				
				document.getElementById("WendepunkteTextfeld").value =  "w1(" + zahlRunden(funktionenListe[i].wendepunkte[0])+"|"+zahlRunden(getPunkt(funktionenListe[i].wendepunkte[0],funktionenListe[i]))+")";

			}else if(knotenVektorZweiteAbleitung.length===3){
				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die zweite Ableitung des Polynoms die Form bx+c haben";
			}else if(knotenVektorZweiteAbleitung.length>3){
				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die zweite Ableitung des Polynoms die Form bx+c haben";
			}else if(knotenVektorZweiteAbleitung.length===1){
				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die zweite Ableitung des Polynoms die Form bx+c haben";
			}
		}
	}
}


function onClickMitternachtsformelWendepunkte(){
	let tolleranz = Math.pow(10,-10);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 14;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("WendepunkteTextfeld").value = "";
			funktionenListe[i].wendepunkte = [];
			
			let knotenVektorZweiteAbleitung = getVectorZweiteAbleitung(i);
			
			if(knotenVektorZweiteAbleitung.length===3){

				let minusB = (-knotenVektorZweiteAbleitung[1]);
				let BQuadrat = Math.pow(knotenVektorZweiteAbleitung[1],2);
				let VierAC = (4*knotenVektorZweiteAbleitung[2]*knotenVektorZweiteAbleitung[0]);
				let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
				let zweiMalA = 2*knotenVektorZweiteAbleitung[2];
			
				if(BQuadrat-VierAC>=0){
					let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
					let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;
				
					
					funktionenListe[i].wendepunkte.push(x1);
					funktionenListe[i].wendepunkte.push(x2);
					
					let text = "";
					
					for(let j=0;j<funktionenListe[i].wendepunkte.length;j++){
						text +=  "w"+ (j+1) +"(" + zahlRunden(funktionenListe[i].wendepunkte[j])+"|"+zahlRunden(getPunkt(funktionenListe[i].wendepunkte[j],funktionenListe[i]))+") ";
					}
					
					
					document.getElementById("WendepunkteTextfeld").value = text;
				}else{
					document.getElementById("WendepunkteTextfeld").value = "Keine Wendepunkte gefunden.";
				}
			}else if(knotenVektorZweiteAbleitung.length===2){
				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich... Um mit der Mitternachtsformel die Wendepunkte ermitteln zu können, muss die zweite Ableitung des Polynom die Form ax^2+bx+c haben";
			}else{
				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich... Um mit der Mitternachtsformel die Wendepunkte ermitteln zu können, muss die zweite Ableitung des Polynom die Form ax^2+bx+c haben";
			}		
		}
	}
}


function onClickPQFormelWendepunkte(){
	let tolleranz = Math.pow(10,-10);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 15;
	aktiverReiter = 6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("WendepunkteTextfeld").value = "";
			funktionenListe[i].wendepunkte = [];
			
			let knotenVektorZweiteAbleitung = getVectorZweiteAbleitung(i);
			
			if(knotenVektorZweiteAbleitung.length===3){
				
				let bOderP=knotenVektorZweiteAbleitung[1]/knotenVektorZweiteAbleitung[2];
				let cOderQ=knotenVektorZweiteAbleitung[0]/knotenVektorZweiteAbleitung[2];
					
				if(Math.pow(bOderP/2,2)-cOderQ>=0){
					let x1 = -(bOderP/2)+Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
					let x2 = -(bOderP/2)-Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
				
			
					funktionenListe[i].wendepunkte.push(x1);
					funktionenListe[i].wendepunkte.push(x2);

					
					let text = "";
					
					for(let j=0;j<funktionenListe[i].wendepunkte.length;j++){
						text +=  "wp" + (j+1) + "(" + zahlRunden(funktionenListe[i].wendepunkte[j]) + "|" + zahlRunden(getPunkt(funktionenListe[i].wendepunkte[j],funktionenListe[i])) + ") ";
					}
					document.getElementById("WendepunkteTextfeld").value = text;		
				}else{
					document.getElementById("WendepunkteTextfeld").value = "Keine Wendepunkte gefunden.";
				}
			}else{
				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich... Um mit der PQ-Formel die Wendepunkte ermitteln zu können, muss die zweite Ableitung des Polynom die Form ax^2+bx+c haben";
			}
		}
	}
}



function onClickSatzVonVietaWendepunkte(){
	let tolleranz = Math.pow(10,-10);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 16;
	aktiverReiter = 6;
	
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("WendepunkteTextfeld").value = "";
			funktionenListe[i].wendepunkte = [];
			
			let knotenVektorZweiteAbleitung = getVectorZweiteAbleitung(i);
			
			if(knotenVektorZweiteAbleitung.length===3){
				let gefunden=false;

				let p = knotenVektorZweiteAbleitung[1]/knotenVektorZweiteAbleitung[2];
				let q = knotenVektorZweiteAbleitung[0]/knotenVektorZweiteAbleitung[2];
				
				for(let x1=-100;x1<100;x1++){
					for(let x2=-100;x2<100;x2++){
						if(p===(-(x1+x2))&&q===(x1*x2)){
							
							funktionenListe[i].wendepunkte.push(x1);
							funktionenListe[i].wendepunkte.push(x2);
							
							let text = "";
							
							for(let j=0;j<funktionenListe[i].wendepunkte.length;j++){
								text +=  "wp" + (j+1) + "(" + zahlRunden(funktionenListe[i].wendepunkte[j]) + "|" + zahlRunden(getPunkt(funktionenListe[i].wendepunkte[j],funktionenListe[i])) + ") ";
							}
							document.getElementById("WendepunkteTextfeld").value = text;
							
							gefunden = true;
							x1=100;
							x2=100;
						}
					}	
				}
				if(gefunden===false){
					document.getElementById("WendepunkteTextfeld").value = "Keine Wendepunkte gefunden.";
				}

			}else{
				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich... Um mit dem Satz von Vieta die Wendepunkte ermitteln zu können, muss die zweite Ableitung des Polynom die Form ax^2+bx+c haben";
			}
		}
	}
}



function onClickNewtonVerfahrenWendepunkte(){
	let tolleranz = Math.pow(10,-15);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 17;
	aktiverReiter = 6;
	
	let wendepunkteTmp = [];

	if(workersAvailable){
		for(let i=0;i<funktionenListe.length;i++){
			if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
				document.getElementById("WendepunkteTextfeld").value = "";
				funktionenListe[i].wendepunkte = [];
				let funktionTmp = funktionenListe[i];
				for(let i=-30;i<30;i++){				
					if(funktionTmp.inhaltKnotenSymbol!="/"){
						wendepunkteTmp.push(newtonVerfahren_GebrochenRational(i, funktionTmp.zweiteAbleitung, false));
					
					}else{
						wendepunkteTmp.push(newtonVerfahren_GebrochenRational(i, funktionTmp, true));
					}
					
				}
				let tolleranzErreicht = false;
				for(let j=0;j<wendepunkteTmp.length;j++){
					tolleranzErreicht = false;
					console.log(j+" "+ wendepunkteTmp[j]);
					if(wendepunkteTmp[j]!=undefined){
						let xtmp = wendepunkteTmp[j].x;
						for(let k=0;k<funktionenListe[i].wendepunkte.length;k++){
							if(Math.abs(funktionenListe[i].wendepunkte[k] - xtmp) < tolleranz){
								tolleranzErreicht = true
							}
						}
						if(!tolleranzErreicht){
							funktionenListe[i].wendepunkte.push(wendepunkteTmp[j].x);
						}
					}
				}
				
				let text = "";
				
				for(let j=0;j<funktionenListe[i].wendepunkte.length;j++){
					text +=  "wp" + (j+1) + "(" + zahlRunden(funktionenListe[i].wendepunkte[j]) + "|" + zahlRunden(getPunkt(funktionenListe[i].wendepunkte[j],funktionenListe[i])) + ") ";
				}
				document.getElementById("WendepunkteTextfeld").value = text;
			}
		}
	}
}

function onClickRegulaFalsiWendepunkte(){
	let tolleranz = Math.pow(10,-10);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 18;
	aktiverReiter = 6;
	
	let wendepunkteTmp = [];
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("WendepunkteTextfeld").value = "";
			funktionenListe[i].wendepunkte = [];
			
			let zaehler = 0;
			let nenner = 0;
			
			if (funktionenListe[i].inhaltKnotenSymbol === '/') {
				zaehler = funktionenListe[i].linkesChild.inhaltKnotenVektor;
				nenner = funktionenListe[i].rechtesChild.inhaltKnotenVektor;
			}
			else {
				if (funktionenListe[i].zweiteAbleitung.inhaltKnotenVektor.length === 0) {
					nenner = funktionenListe[i].zweiteAbleitung.linkesChild.inhaltKnotenVektor;
				}
				else {
					nenner = funktionenListe[i].zweiteAbleitung.inhaltKnotenVektor;
				}
			}
			
			let y = 0;
			let yOld = 0;
			let rundenCounter = 0;
			let uebergangGefunden = false;
			for (let i = -30; i < 30; i += 0.1) {
				y = f(i, nenner);
				if (rundenCounter > 0) {
					if (y < 0 && yOld > 0) {
						wendepunkteTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, nenner));
						uebergangGefunden = true;
					}
					else if (y > 0 && yOld < 0) {
						wendepunkteTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, nenner));
						uebergangGefunden = true;
					}
				}

				yOld = y;
				rundenCounter++;
			}
			
			if (uebergangGefunden == false) {
				for (let i = -30; i < 30; i += 0.1) {
					wendepunkteTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, nenner));
				}
				yOld = y;
				rundenCounter++;
			}
			
			let tolleranzErreicht = false;
			for(let j=0;j<wendepunkteTmp.length;j++){
				tolleranzErreicht = false;
				console.log(j+" "+ wendepunkteTmp[j]);
				if(wendepunkteTmp[j]!=undefined){
					let xtmp = wendepunkteTmp[j].x;
					for(let k=0;k<funktionenListe[i].wendepunkte.length;k++){
						if(Math.abs(funktionenListe[i].wendepunkte[k] - xtmp) < tolleranz){
							tolleranzErreicht = true
						}
					}
					if(!tolleranzErreicht){
						funktionenListe[i].wendepunkte.push(wendepunkteTmp[j].x);
					}
				}
			}
			
			let text = "";
			
			for(let j=0;j<funktionenListe[i].wendepunkte.length;j++){				
				text +=  "wp" + (j+1) + "(" + zahlRunden(funktionenListe[i].wendepunkte[j]) + "|" + zahlRunden(getPunkt(funktionenListe[i].wendepunkte[j],funktionenListe[i])) + ") ";
			}
			document.getElementById("WendepunkteTextfeld").value = text;
			
		}
	}
}



function onClickGeradengleichungPolstellen(){
	let tolleranz = Math.pow(10,-10);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 19;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("PolstellenTextfeld").value = "";
			funktionenListe[i].polstellen = [];
			if(funktionenListe[i].inhaltKnotenSymbol === "/"){
				if(funktionenListe[i].rechtesChild.inhaltKnotenVektor.length===2){
					
					funktionenListe[i].polstellen.push((-funktionenListe[i].rechtesChild.inhaltKnotenVektor[0])/funktionenListe[i].rechtesChild.inhaltKnotenVektor[1]);
									
					document.getElementById("PolstellenTextfeld").value = "x1=" + zahlRunden(funktionenListe[i].polstellen[0]);	
					
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
}





function onClickMitternachtsformelPolstellen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 8;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("PolstellenTextfeld").value = "";
			funktionenListe[i].polstellen = [];
			if(funktionenListe[i].inhaltKnotenSymbol === "/"){
				if(funktionenListe[i].rechtesChild.inhaltKnotenVektor.length===3){
	
					let minusB = (-funktionenListe[i].rechtesChild.inhaltKnotenVektor[1]);
					let BQuadrat = Math.pow(funktionenListe[i].rechtesChild.inhaltKnotenVektor[1],2);
					let VierAC = (4*funktionenListe[i].rechtesChild.inhaltKnotenVektor[2]*funktionenListe[i].rechtesChild.inhaltKnotenVektor[0]);
					let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
					let zweiMalA = 2*funktionenListe[i].rechtesChild.inhaltKnotenVektor[2];
				
					if(BQuadrat-VierAC>=0){
						let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
						let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;
					
						
						funktionenListe[i].polstellen.push(x1);
						funktionenListe[i].polstellen.push(x2);
						document.getElementById("PolstellenTextfeld").value = "x1=" + zahlRunden(x1) + " x2=" + zahlRunden(x2);
					}else{
						document.getElementById("PolstellenTextfeld").value = "Keine Polstellen gefunden.";
					}
				}else if(funktionenListe[i].rechtesChild.inhaltKnotenVektor.length===2){
					document.getElementById("PolstellenTextfeld").value = "Leider nicht möglich... Um mit der Mitternachtsformel die Polstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
				}else{
					document.getElementById("PolstellenTextfeld").value = "Leider nicht möglich... Um mit der Mitternachtsformel die Polstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
				}		
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
			document.getElementById("PolstellenTextfeld").value = "";
			funktionenListe[i].polstellen = [];
			if(funktionenListe[i].inhaltKnotenSymbol === "/"){
				if(funktionenListe[i].rechtesChild.inhaltKnotenVektor.length===3){
					
					let bOderP=funktionenListe[i].rechtesChild.inhaltKnotenVektor[1]/funktionenListe[i].rechtesChild.inhaltKnotenVektor[2];
					let cOderQ=funktionenListe[i].rechtesChild.inhaltKnotenVektor[0]/funktionenListe[i].rechtesChild.inhaltKnotenVektor[2];
						
					if(Math.pow(bOderP/2,2)-cOderQ>=0){
						let x1 = -(bOderP/2)+Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
						let x2 = -(bOderP/2)-Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
					
				
						funktionenListe[i].polstellen.push(x1);
						funktionenListe[i].polstellen.push(x2);
	
						
						document.getElementById("PolstellenTextfeld").value = "x1=" + zahlRunden(x1) + " x2=" + zahlRunden(x2);				
					}else{
						document.getElementById("PolstellenTextfeld").value = "Keine Polstellen gefunden.";
					}
				}else{
					document.getElementById("PolstellenTextfeld").value = "Leider nicht möglich... Um mit der PQ-Formel die Polstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
				}
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
			document.getElementById("PolstellenTextfeld").value = "";
			funktionenListe[i].polstellen = [];
			if(funktionenListe[i].inhaltKnotenSymbol === "/"){
				if(funktionenListe[i].rechtesChild.inhaltKnotenVektor.length===3){
					let gefunden=false;
	
					let p = funktionenListe[i].rechtesChild.inhaltKnotenVektor[1]/funktionenListe[i].rechtesChild.inhaltKnotenVektor[2];
					let q = funktionenListe[i].rechtesChild.inhaltKnotenVektor[0]/funktionenListe[i].rechtesChild.inhaltKnotenVektor[2];
					
					for(let x1=-100;x1<100;x1++){
						for(let x2=-100;x2<100;x2++){
							if(p===(-(x1+x2))&&q===(x1*x2)){
								
								funktionenListe[i].polstellen.push(x1);
								funktionenListe[i].polstellen.push(x2);
								document.getElementById("PolstellenTextfeld").value = "x1=" + zahlRunden(x1) + " x2=" + zahlRunden(x2);	
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
}


function onClickNewtonVerfahrenPolstellen(){
	let tolleranz = Math.pow(10,-15);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 11;
	aktiverReiter = 6;
	
	let polstellenTmp = [];

	if(workersAvailable){
		for(let i=0;i<funktionenListe.length;i++){
			if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
				document.getElementById("PolstellenTextfeld").value = "";
				funktionenListe[i].polstellen = [];
				let funktionTmp = funktionenListe[i];
				for(let i=-30;i<30;i++){				
						polstellenTmp.push(newtonVerfahren_GebrochenRational(i, funktionTmp.rechtesChild, false));
				}
				let tolleranzErreicht = false;
				for(let j=0;j<polstellenTmp.length;j++){
					tolleranzErreicht = false;
					console.log(j+" "+ polstellenTmp[j]);
					if(polstellenTmp[j]!=undefined){
						let xtmp = polstellenTmp[j].x;
						for(let k=0;k<funktionenListe[i].polstellen.length;k++){
							if(Math.abs(funktionenListe[i].polstellen[k] - xtmp) < tolleranz){
								tolleranzErreicht = true
							}
						}
						if(!tolleranzErreicht){
							funktionenListe[i].polstellen.push(polstellenTmp[j].x);
						}
					}
				}
				let text ="";
				for(let j=0;j<funktionenListe[i].polstellen.length;j++){

						text +=  "x" + (j+1) + "=" + zahlRunden(funktionenListe[i].polstellen[j]) + " ";
					
				}
				document.getElementById("PolstellenTextfeld").value = text;
			}
		}
	}
}

function onClickRegulaFalsiPolstellen(){
	let tolleranz = Math.pow(10,-10);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 12;
	aktiverReiter = 6;
	
	let polstellenTmp = [];
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("PolstellenTextfeld").value = "";
			funktionenListe[i].polstellen = [];
			
			let zaehler = 0;
			let nenner = 0;
			
			if (funktionenListe[i].inhaltKnotenSymbol === '/') {
				zaehler = funktionenListe[i].linkesChild.inhaltKnotenVektor;
				nenner = funktionenListe[i].rechtesChild.inhaltKnotenVektor;
			}
			else {
				if (funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length === 0) {
					nenner = funktionenListe[i].ersteAbleitung.linkesChild.inhaltKnotenVektor;
				}
				else {
					nenner = funktionenListe[i].ersteAbleitung.inhaltKnotenVektor;
				}
			}
			
			let y = 0;
			let yOld = 0;
			let rundenCounter = 0;
			let uebergangGefunden = false;
			for (let i = -30; i < 30; i += 0.1) {
				y = f(i, nenner);
				if (rundenCounter > 0) {
					if (y < 0 && yOld > 0) {
						polstellenTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, nenner));
						uebergangGefunden = true;
					}
					else if (y > 0 && yOld < 0) {
						polstellenTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, nenner));
						uebergangGefunden = true;
					}
				}

				yOld = y;
				rundenCounter++;
			}
			
			if (uebergangGefunden == false) {
				for (let i = -30; i < 30; i += 0.1) {
					polstellenTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, nenner));
				}
				yOld = y;
				rundenCounter++;
			}
			
			let tolleranzErreicht = false;
			for(let j=0;j<polstellenTmp.length;j++){
				tolleranzErreicht = false;
				console.log(j+" "+ polstellenTmp[j]);
				if(polstellenTmp[j]!=undefined){
					let xtmp = polstellenTmp[j].x;
					for(let k=0;k<funktionenListe[i].polstellen.length;k++){
						if(Math.abs(funktionenListe[i].polstellen[k] - xtmp) < tolleranz){
							tolleranzErreicht = true
						}
					}
					if(!tolleranzErreicht){
						funktionenListe[i].polstellen.push(polstellenTmp[j].x);
					}
				}
			}
			let text ="";
			for(let j=0;j<funktionenListe[i].polstellen.length;j++){
					text +=  "x" + (j+1) + "=" + zahlRunden(funktionenListe[i].polstellen[j]) + " ";
			}
			document.getElementById("PolstellenTextfeld").value = text;
			
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

function onChangeExtremstellenAnzeigen(){
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			funktionenListe[i].extremstellenAnzeigen=document.getElementById("ExtremstellenAnzeigenCheckbox").checked;
		}
	}
}

function onChangeWendepunkteAnzeigen(){
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			funktionenListe[i].wendepunkteAnzeigen=document.getElementById("WendepunkteAnzeigenCheckbox").checked;
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