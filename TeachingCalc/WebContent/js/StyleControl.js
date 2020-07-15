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
	buchstabenArray.push(buchstabenArrayTmp[funktionenListe.length-1]);
	for(let i=0; i<funktionenListe.length; i++){
		let option = document.createElement("option");
		
	    option.text =  buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString;
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

function onChangeIntegralAnzeigen(){
	var liste = document.getElementById("funktionenDropdown");
	let indexGewaehltesElement = 0;
	for(let i=0; i<funktionenListe.length; i++){
		if(liste.value===buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString){
			indexGewaehltesElement = i;
		}
	}
	funktionenListe[indexGewaehltesElement].integralAnzeigen = document.getElementById("IntegralAnzeigenCheckbox").checked;
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
	displayButtonsV2(funktionenListe[indexGewaehltesElement]);
}



function displayButtons(funktionObjekt){ 
	
	
	if(funktionObjekt.einfachGanzrational===false){
		let polynomGradZaehler = funktionObjekt.gekürzt.linkesChild.inhaltKnotenVektor.length-1;
		let polynomGradNenner = funktionObjekt.gekürzt.rechtesChild.inhaltKnotenVektor.length-1;
		
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
		let polynomGrad = 0;
		for(let i=0;i<funktionObjekt.gekuerzt.length;i++){
			if(funktionObjekt.gekuerzt[i].potenz>polynomGrad){
				polynomGrad = funktionObjekt.gekuerzt[i].potenz;
			}
		}
		
		
//		let aktuellerKnoten = funktionObjekt;
//		if(aktuellerKnoten.linkesChild===null&&aktuellerKnoten.rechtesChild===null){			//einfachster fall baum ohne childs wie zb 3*x^3
//			polynomGrad = aktuellerKnoten.inhaltKnotenPolynom.potenz;
//		}else{
//			while(aktuellerKnoten.rechtesChild!=null){											//ansonsten den ganzen baum parsen und höchste porenz suchen			
//				if(aktuellerKnoten.inhaltKnotenSymbol==="+"||aktuellerKnoten.inhaltKnotenSymbol==="-"){
//					if( aktuellerKnoten.linkesChild.inhaltKnotenPolynom.potenz>polynomGrad){
//						polynomGrad = aktuellerKnoten.linkesChild.inhaltKnotenPolynom.potenz;
//					}
//				}	
//				if(aktuellerKnoten.rechtesChild.rechtesChild===null){
//					if( aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz>polynomGrad){
//						polynomGrad = aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz;
//					}
//				}
//				if(aktuellerKnoten.rechtesChild!=null){
//					aktuellerKnoten = aktuellerKnoten.rechtesChild;
//				}
//			}
//		}


		
		
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


function displayButtonsV2(funktionObjekt){ 
	
	
	if(funktionObjekt.gekürzt.inhaltKnotenSymbol==='/'){
		let polynomGradZaehler = funktionObjekt.gekürzt.linkesChild.inhaltKnotenVektor.length-1;
		let polynomGradNenner = funktionObjekt.gekürzt.rechtesChild.inhaltKnotenVektor.length-1;
		
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
		let polynomGrad = getHoechstePotenzV2(funktionObjekt);

		
		
//		let aktuellerKnoten = funktionObjekt;
//		if(aktuellerKnoten.linkesChild===null&&aktuellerKnoten.rechtesChild===null){			//einfachster fall baum ohne childs wie zb 3*x^3
//			polynomGrad = aktuellerKnoten.inhaltKnotenPolynom.potenz;
//		}else{
//			while(aktuellerKnoten.rechtesChild!=null){											//ansonsten den ganzen baum parsen und höchste porenz suchen			
//				if(aktuellerKnoten.inhaltKnotenSymbol==="+"||aktuellerKnoten.inhaltKnotenSymbol==="-"){
//					if( aktuellerKnoten.linkesChild.inhaltKnotenPolynom.potenz>polynomGrad){
//						polynomGrad = aktuellerKnoten.linkesChild.inhaltKnotenPolynom.potenz;
//					}
//				}	
//				if(aktuellerKnoten.rechtesChild.rechtesChild===null){
//					if( aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz>polynomGrad){
//						polynomGrad = aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz;
//					}
//				}
//				if(aktuellerKnoten.rechtesChild!=null){
//					aktuellerKnoten = aktuellerKnoten.rechtesChild;
//				}
//			}
//		}


		
		
		[].forEach.call(document.getElementsByClassName("gebrochenRational"), function(el){
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
			el.style.display = "none";
		});
		[].forEach.call(document.getElementsByClassName("Gerade"), function(el){
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

function getHoechstePotenzV2(funktionObjekt){
	let hoechstePotenz = 0;
	if(funktionObjekt.inhaltKnotenSymbol==='^'||!isNaN(funktionObjekt.inhaltKnotenPolynom.potenz)){
		hoechstePotenz = funktionObjekt.inhaltKnotenPolynom.potenz;
	}
	if(funktionObjekt.rechtesChild!=null){
		if(funktionObjekt.rechtesChild!=null&&funktionObjekt.rechtesChild.inhaltKnotenPolynom.potenz>hoechstePotenz){
			hoechstePotenz = funktionObjekt.rechtesChild.inhaltKnotenPolynom.potenz;
		}
	}
	while(funktionObjekt.linkesChild!=null){
		funktionObjekt = funktionObjekt.linkesChild;
		if(funktionObjekt.rechtesChild!=null&&funktionObjekt.rechtesChild.inhaltKnotenPolynom.potenz>hoechstePotenz){
			hoechstePotenz = funktionObjekt.rechtesChild.inhaltKnotenPolynom.potenz;
		}
		if(funktionObjekt.linkesChild===null&&funktionObjekt.inhaltKnotenPolynom.potenz>hoechstePotenz){
			hoechstePotenz = funktionObjekt.inhaltKnotenPolynom.potenz;
		}
	}
	return hoechstePotenz;
}


function getVector(i){
	let knotenVektor;
	if (funktionenListe[i].einfachGanzrational===false) {
		
	}else if(funktionenListe[i].einfachGanzrational===true){
		knotenVektor = funktionenListe[i].gekuerzt;
	}
//	let knotenVektor = funktionenListe[i].gekürzt.inhaltKnotenVektor;
//	if(funktionenListe[i].inhaltKnotenSymbol==="/"){
//		knotenVektor = funktionenListe[i].gekürzt.linkesChild.inhaltKnotenVektor;
//	}
	return knotenVektor;
}

class quadratischesPolynom {
	constructor(){
		this.a = NaN;
		this.b = NaN; //im normalfall x oder auch konstante Zahl
		this.c = NaN;
	}; 
};

function getABC(funktion){
	let a=0,b=0,c=0;
	if(((funktion.inhaltKnotenSymbol==='^'||funktion.inhaltKnotenSymbol==='*'))||
			(funktion.inhaltKnotenPolynom.potenz==2) && //für wenn nur polynom 2ten grades vorhanden z.b. x^2 oder 2*x^2
			funktion.linkesChild===null &&
			funktion.rechtesChild===null){
		
		
		a = funktion.inhaltKnotenPolynom.koeffizient;
		b = 0;
		c = 0;
		
	}else  if((funktion.inhaltKnotenSymbol==='+'||funktion.inhaltKnotenSymbol==='-') && //für wenn nur polynom 2ten und 1ten grades vorhanden z.b. x^2+x oder 2*x^2+2*x und x^2+1
			funktion.linkesChild.linkesChild===null){
		
		a = funktion.linkesChild.inhaltKnotenPolynom.koeffizient;
        if(funktion.inhaltKnotenSymbol==='-'){
        	if(funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==='x'||funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==='X'){
        		b = -funktion.rechtesChild.inhaltKnotenPolynom.koeffizient;
        	}else{
        		c = -funktion.rechtesChild.inhaltKnotenPolynom.koeffizient;
        	}
        	
        }else{
        	if(funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==='x'||funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName==='X'){
        		b = funktion.rechtesChild.inhaltKnotenPolynom.koeffizient;
        	}else{
        		c = funktion.rechtesChild.inhaltKnotenPolynom.koeffizient;
        	}
        }
        
        
	}else if((funktion.inhaltKnotenSymbol==='+'||funktion.inhaltKnotenSymbol==='-') &&
			funktion.linkesChild.linkesChild.inhaltKnotenPolynom.potenz===2 &&
			funktion.linkesChild.rechtesChild.inhaltKnotenPolynom.potenz===1 &&
			funktion.rechtesChild.inhaltKnotenPolynom.potenz===0){
		
	
		
        
        a = funktion.linkesChild.linkesChild.inhaltKnotenPolynom.koeffizient;
        if(funktion.linkesChild.inhaltKnotenSymbol==='-'){
        	b = -funktion.linkesChild.rechtesChild.inhaltKnotenPolynom.koeffizient;
        }else{
        	b = funktion.linkesChild.rechtesChild.inhaltKnotenPolynom.koeffizient;
        }
       
        if(funktion.inhaltKnotenSymbol==='-'){
        	c = -funktion.rechtesChild.inhaltKnotenPolynom.koeffizient;
        }else{
        	c = funktion.rechtesChild.inhaltKnotenPolynom.koeffizient;
        }
	}else{
		let polynom = new quadratischesPolynom();  
		polynom.a = 0;
		polynom.b = 0;
		polynom.c = 0;
		return polynom;
	}
    let polynom = new quadratischesPolynom();   
    polynom.a = a;
    polynom.b = b;
    polynom.c = c;
    return polynom;
}

function getAB(funktion){
	let polynom = new quadratischesPolynom();
	polynom.a = 0;
	polynom.b = 0;
	if(funktion.inhaltKnotenSymbol==='+'){
		polynom.a = funktion.linkesChild.inhaltKnotenPolynom.koeffizient;
		polynom.b = funktion.rechtesChild.inhaltKnotenPolynom.koeffizient;
	}else if(funktion.inhaltKnotenSymbol==='-'){
		polynom.a = funktion.linkesChild.inhaltKnotenPolynom.koeffizient;
		polynom.b = -funktion.rechtesChild.inhaltKnotenPolynom.koeffizient;
	}else if(funktion.inhaltKnotenSymbol=""&&!isNaN(funktion.rechtesChild.inhaltKnotenPolynom.zahlOderVariablenName)){
		polynom.a = funktion.inhaltKnotenPolynom.koeffizient;
		polynom.b = 0;
	}else if(funktion.inhaltKnotenPolynom.potenz===1){
		polynom.a = funktion.inhaltKnotenPolynom.koeffizient;
		polynom.b = 0;
	}
	 
	return polynom;
}


function onClickEntfernen(){
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			buchstabenArray.splice(i, 1);
			funktionenListe.splice(i, 1);
			removeToFunctionDropdownList(funktionenListe[i]);
			break;
		}
	}
}


function removeToFunctionDropdownList(funktion){
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

	displayButtonsV2(funktionenListe[funktionenListe.length-1]);
}



function onClickGeradengleichungNullstellen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 1;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("NullstellenTextfeld").value = "";
			funktionenListe[i].nullstellen = [];
			
			let polynom = getAB(funktionenListe[i]);
			
			if(polynom.a!=0){

				if(funktionenListe[i].inhaltKnotenSymbol==='+')
					funktionenListe[i].nullstellen.push((-funktionenListe[i].rechtesChild.inhaltKnotenPolynom.koeffizient)/funktionenListe[i].linkesChild.inhaltKnotenPolynom.koeffizient);
				else if(funktionenListe[i].inhaltKnotenSymbol==='-'){
					funktionenListe[i].nullstellen.push((funktionenListe[i].rechtesChild.inhaltKnotenPolynom.koeffizient)/funktionenListe[i].linkesChild.inhaltKnotenPolynom.koeffizient);
				}else if(polynom.b===0){
					funktionenListe[i].nullstellen.push(0);
				}
				
				
//				funktionenListe[i].nullstellen.push((-funktionenListe[i].rechtesChild.inhaltKnotenPolynom.koeffizient)/funktionenListe[i].linkesChild.inhaltKnotenPolynom.koeffizient);
				
				document.getElementById("NullstellenTextfeld").value = "x1=" + zahlRunden(funktionenListe[i].nullstellen[0]);
			}else{
				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss das Polynom muss die Form bx+c haben";
			}
//			if(knotenPolynom.potenz===1){
//					
//				
//			}else if(knotenVektor.length===3){
//				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss das Polynom muss die Form bx+c haben";
//			}else if(knotenVektor.length>3){
//				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss das Polynom muss die Form bx+c haben";
//			}else if(knotenVektor.length===1){
//				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss das Polynom muss die Form bx+c haben";
//			}
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
			
			let a=0,b=0,c=0;
			
			let polynom = getABC(funktionenListe[i]);
            a = polynom.a;
            b = polynom.b;
            c = polynom.c;
            
			if(a===0&&b===0&&c===0){
				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die Mitternachtsformel muss das Polynom muss die Form ax^2+bx+c haben";
				return;
			}
			

                let minusB = (-b);
 				let BQuadrat = Math.pow(b,2);
 				let VierAC = (4*a*c);
 				let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
 				let zweiMalA = 2*a;

 				if(BQuadrat-VierAC>=0){
					let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
					let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;
				
		
					funktionenListe[i].nullstellen.push(x1);
					funktionenListe[i].nullstellen.push(x2);
					document.getElementById("NullstellenTextfeld").value = "x1=" + zahlRunden(x1) + " x2=" + zahlRunden(x2);
				}else{
					document.getElementById("NullstellenTextfeld").value = "Keine Nullstellen gefunden.";
				}

            }
        }
	
			
//			let knotenVektor = getVector(i);
//			if(getHoechstePotenz(knotenVektor)===2){
//				let a=0,b=0,c=0;
//				for(let j=0;j<knotenVektor.length;j++){
//					if(knotenVektor[j].potenz===0){
//						c = knotenVektor[j].koeffizient;
//					}else if(knotenVektor[j].potenz===1){
//						b = knotenVektor[j].koeffizient;
//					}else if(knotenVektor[j].potenz===2){
//						a = knotenVektor[j].koeffizient;
//					}
//				}
//
//				let minusB = (-b);
//				let BQuadrat = Math.pow(b,2);
//				let VierAC = (4*a*c);
//				let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
//				let zweiMalA = 2*a;
//			
//				if(BQuadrat-VierAC>=0){
//					let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
//					let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;
//				
//		
//					funktionenListe[i].nullstellen.push(x1);
//					funktionenListe[i].nullstellen.push(x2);
//					document.getElementById("NullstellenTextfeld").value = "x1=" + zahlRunden(x1) + " x2=" + zahlRunden(x2);
//				}else{
//					document.getElementById("NullstellenTextfeld").value = "Keine Nullstellen gefunden.";
//				}
//							
//				
//			}else{
//				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die Mitternachtsformel muss das Polynom muss die Form ax^2+bx+c haben";
//			}		
//		}
//	}
}

function onClickPQFormelNullstellen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 3;
	aktiverReiter = 6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("NullstellenTextfeld").value = "";
			funktionenListe[i].nullstellen = [];
			
			let bOderP = 0, cOderQ = 0;
			let teilerFuerRichtigeForm = 0;
			
			let polynom = getABC(funktionenListe[i]);
			teilerFuerRichtigeForm = polynom.a;
            bOderP = polynom.b / teilerFuerRichtigeForm;
            cOderQ = polynom.c / teilerFuerRichtigeForm;
			
            if(polynom.a===0&&polynom.b===0&&polynom.c===0){
					document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die PQ-Formel muss das Polynom muss die Form ax^2+bx+c haben";
					return;
				}
	                
				if(Math.pow(bOderP/2,2)-cOderQ>=0){
					let x1 = -(bOderP/2)+Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
					let x2 = -(bOderP/2)-Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
				
					
					funktionenListe[i].nullstellen.push(x1);
					funktionenListe[i].nullstellen.push(x2);
					
					document.getElementById("NullstellenTextfeld").value = "x1=" + zahlRunden(x1) + " x2=" + zahlRunden(x2);
				}else{
					document.getElementById("NullstellenTextfeld").value = "Keine Nullstellen gefunden.";
				}
	
			
			
//			let knotenVektor = getVector(i);
//			
//			if(getHoechstePotenz(knotenVektor)===2){
//				let bOderP = 0, cOderQ = 0;
//				let teilerFuerRichtigeForm = 0;
//				for(let j=0;j<knotenVektor.length;j++){
//					if(knotenVektor[j].potenz===2){
//						teilerFuerRichtigeForm = knotenVektor[j].koeffizient;
//					}
//				}
//				
//				for(let j=0;j<knotenVektor.length;j++){
//					if(knotenVektor[j].potenz===0){
//						cOderQ = knotenVektor[j].koeffizient/teilerFuerRichtigeForm;
//					}else if(knotenVektor[j].potenz===1){
//						bOderP = knotenVektor[j].koeffizient/teilerFuerRichtigeForm;
//					}
//				}
//				
//						
//				if(Math.pow(bOderP/2,2)-cOderQ>=0){
//					let x1 = -(bOderP/2)+Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
//					let x2 = -(bOderP/2)-Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
//				
//					
//					funktionenListe[i].nullstellen.push(x1);
//					funktionenListe[i].nullstellen.push(x2);
//					
//					document.getElementById("NullstellenTextfeld").value = "x1=" + zahlRunden(x1) + " x2=" + zahlRunden(x2);
//				}else{
//					document.getElementById("NullstellenTextfeld").value = "Keine Nullstellen gefunden.";
//				}
//			}else{
//				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die PQ-Formel muss das Polynom muss die Form ax^2+bx+c haben";
//			}
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
			
			
				let p = 0, q = 0;
				let teilerFuerRichtigeForm = 0;			
				
				let polynom = getABC(funktionenListe[i]);
				teilerFuerRichtigeForm = polynom.a;
	            bOderP = polynom.b;
	            cOderQ = polynom.c;
	            
	            q = cOderQ / teilerFuerRichtigeForm;
				p = bOderP / teilerFuerRichtigeForm;
				
//				for(let j=0;j<knotenVektor.length;j++){
//					if(knotenVektor[j].potenz===2){
//						teilerFuerRichtigeForm = knotenVektor[j].koeffizient;
//					}
//				}
//				
//				for(let j=0;j<knotenVektor.length;j++){
//					if(knotenVektor[j].potenz===0){
//						q = knotenVektor[j].koeffizient/teilerFuerRichtigeForm;
//					}else if(knotenVektor[j].potenz===1){
//						p = knotenVektor[j].koeffizient/teilerFuerRichtigeForm;
//					}
//				}
				let gefunden=false;
				
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

//			}else{
//				document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich... Um mit dem Satz von Vieta die Nullstellen ermitteln zu können, muss das Polynom die Form ax^2+bx+c haben";
//			}
		}
	}
}

function onClickNewtonVerfahrenNullstellen(){
	let tolleranz = Math.pow(10,-13);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 5;
	aktiverReiter = 6;
	
	let nullstellenTmp = [];
	

	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			document.getElementById("NullstellenTextfeld").value = "";
			funktionenListe[i].nullstellen = [];
			let funktionTmp = funktionenListe[i];
			for(let j=-30;j<30;j++){				
				nullstellenTmp.push(newtonVerfahren_GebrochenRational(j, funktionTmp, false));
			}
			let tolleranzErreicht = false;
			for(let j=0;j<nullstellenTmp.length;j++){
				tolleranzErreicht = false;
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
			
			if (funktionenListe[i].inhaltKnotenSymbol==='/') {
				zaehler = funktionenListe[i].linkesChild.inhaltKnotenVektor;
				nenner = funktionenListe[i].rechtesChild.inhaltKnotenVektor;
			}
			else{
				
				zaehler = funktionenListe[i];
				
			}
			
			let y = 0;
			let yOld = 0;
			let rundenCounter = 0;
			let uebergangGefunden = false;
			for (let j = -30; j < 30; j += 0.1) {
				if (funktionenListe[i].einfachGanzrational===false) {
					y = f(j, zaehler);
				}
				if(funktionenListe[i].einfachGanzrational===true){
					y = getPunktEinfachesGanzrational(j, zaehler);
				}
				
				if (rundenCounter > 0) {
					if (y < 0 && yOld > 0) {
						if (funktionenListe[i].einfachGanzrational===false) {
							nullstellenTmp.push(regulaFalsi_GebrochenRational( j,  j-0.1, zaehler));
						}else if(funktionenListe[i].einfachGanzrational===true){
							nullstellenTmp.push(regulaFalsi_GanzRational( j,  j-0.1, zaehler));
						}
						uebergangGefunden = true;
					}
					else if (y > 0 && yOld < 0) {
						if (funktionenListe[i].einfachGanzrational===false) {
							nullstellenTmp.push(regulaFalsi_GebrochenRational( j,  j-0.1, zaehler));
						}else if(funktionenListe[i].einfachGanzrational===true){
							nullstellenTmp.push(regulaFalsi_GanzRational( j,  j-0.1, zaehler));
						}
						uebergangGefunden = true;
					}
				}

				yOld = y;
				rundenCounter++;
			}
			
			if (uebergangGefunden == false) {
				for (let j = -30; j < 30; j += 0.1) {
					if (funktionenListe[i].einfachGanzrational===false) {
						nullstellenTmp.push(regulaFalsi_GebrochenRational( j,  j-0.1, zaehler));
					}else if(funktionenListe[i].einfachGanzrational===true){
						nullstellenTmp.push(regulaFalsi_GanzRational( j,  j-0.1, zaehler));
					}
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
	if (funktionenListe[i].einfachGanzrational===false) {
		
	}else if(funktionenListe[i].einfachGanzrational===true){
		knotenVektor = funktionenListe[i].ersteAbleitung.gekuerzt;
	}
//	let knotenVektor = funktionenListe[i].gekürzt.ersteAbleitung.inhaltKnotenVektor;
//	if(funktionenListe[i].inhaltKnotenSymbol==="/"){
//		knotenVektor = funktionenListe[i].gekürzt.ersteAbleitung.linkesChild.inhaltKnotenVektor;
//	}
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
			
			let polynom = getAB(funktionenListe[i].ersteAbleitung);
			
			if(polynom.a!=0){
				
				if(funktionenListe[i].ersteAbleitung.inhaltKnotenSymbol==='+')
					funktionenListe[i].extremstellen.push((-funktionenListe[i].ersteAbleitung.rechtesChild.inhaltKnotenPolynom.koeffizient)/funktionenListe[i].ersteAbleitung.linkesChild.inhaltKnotenPolynom.koeffizient);
				else if(funktionenListe[i].ersteAbleitung.inhaltKnotenSymbol==='-'){
					funktionenListe[i].extremstellen.push((funktionenListe[i].ersteAbleitung.rechtesChild.inhaltKnotenPolynom.koeffizient)/funktionenListe[i].ersteAbleitung.linkesChild.inhaltKnotenPolynom.koeffizient);
				}else if(polynom.b===0){
					funktionenListe[i].extremstellen.push(0);
				}
				if(  getPunktV4(funktionenListe[i].extremstellen[0],funktionenListe[i].zweiteAbleitung)>0 ){
					document.getElementById("ExtremstellenTextfeld").value =  "t1=" + zahlRunden(funktionenListe[i].extremstellen[0]);
				}else if(getPunktV4(funktionenListe[i].extremstellen[0],funktionenListe[i].zweiteAbleitung)<0){
					document.getElementById("ExtremstellenTextfeld").value =  "h1=" + zahlRunden(funktionenListe[i].extremstellen[0]);
				}
			}else{
				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss das Polynom muss die Form bx+c haben";
			}
			
			
//			let knotenVektorErsteAbleitung = getVectorErsteAbleitung(i);
//			
//			if(getHoechstePotenz(knotenVektorErsteAbleitung)===1){
//				let mx=0,b=0;
//				for(let j=0;j<knotenVektorErsteAbleitung.length;j++){
//					if(knotenVektorErsteAbleitung[j].potenz===0){
//						b = knotenVektorErsteAbleitung[j].koeffizient;
//					}else if(knotenVektorErsteAbleitung[j].potenz===1){
//						mx = knotenVektorErsteAbleitung[j].koeffizient;
//					}
//				}
//				
//				funktionenListe[i].extremstellen.push((-b)/mx);
								
				
				


//			}else if(knotenVektorErsteAbleitung.length===3){
//				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die Ableitung des Polynoms die Form bx+c haben";
//			}else if(knotenVektorErsteAbleitung.length>3){
//				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die Ableitung des Polynoms die Form bx+c haben";
//			}else if(knotenVektorErsteAbleitung.length===1){
//				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die Ableitung des Polynoms die Form bx+c haben";
//			}
		}
	}
}

function getHoechstePotenz(polynomArray){
	let hoechstePotenz = 0;
	for(let i=0;i<polynomArray.length;i++){
		if(polynomArray[i].potenz>hoechstePotenz){
			hoechstePotenz = polynomArray[i].potenz;
		}
	}
	return hoechstePotenz;
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
			
//			let knotenVektorErsteAbleitung = getVectorErsteAbleitung(i);
//			
//			if(getHoechstePotenz(knotenVektorErsteAbleitung)===2){
//				let a=0,b=0,c=0;
//				for(let j=0;j<knotenVektorErsteAbleitung.length;j++){
//					if(knotenVektorErsteAbleitung[j].potenz===0){
//						c = knotenVektorErsteAbleitung[j].koeffizient;
//					}else if(knotenVektorErsteAbleitung[j].potenz===1){
//						b = knotenVektorErsteAbleitung[j].koeffizient;
//					}else if(knotenVektorErsteAbleitung[j].potenz===2){
//						a = knotenVektorErsteAbleitung[j].koeffizient;
//					}
//				}
				let a=0,b=0,c=0;
			

				let polynom = getABC(funktionenListe[i].ersteAbleitung);
				a = polynom.a;
				b = polynom.b;
				c = polynom.c;

				if(a==0&&b==0&&c==0){
					document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich... Um mit der Mitternachtsformel die Extremstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
					return
				}
				
				let minusB = (-b);
				let BQuadrat = Math.pow(b,2);
				let VierAC = (4*a*c);
				let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
				let zweiMalA = 2*a;
			
				if(BQuadrat-VierAC>=0){
					let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
					let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;
				
					
					funktionenListe[i].extremstellen.push(x1);
					funktionenListe[i].extremstellen.push(x2);
					
					let text = "";
					if(x1===x2){
						text += "Doppelter Hoch/Tiefpunkt: ";
					}
					
					for(let j=0;j<funktionenListe[i].extremstellen.length;j++){
						
						if(  getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)>0 ){
							text +=  "tp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j]) + "|" + zahlRunden(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
						}else if(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)<0){
							text +=  "hp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j])+"|"+ zahlRunden(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
						}else if(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)===0){
							text +=  "p" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j])+"|"+ zahlRunden(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
						}
							
						
					}
					
					
					document.getElementById("ExtremstellenTextfeld").value = text;
				}else{
					document.getElementById("ExtremstellenTextfeld").value = "Keine Extremstellen gefunden.";
				}
//			}else if(knotenVektorErsteAbleitung.length===1){
//				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich... Um mit der Mitternachtsformel die Extremstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
//			}else{
//				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich... Um mit der Mitternachtsformel die Extremstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
//			}		
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
			
//			let knotenVektorErsteAbleitung = getVectorErsteAbleitung(i);
//			
//			if(getHoechstePotenz(knotenVektorErsteAbleitung)===2){
			
			
			
//				let bOderP = 0, cOderQ = 0;
//				let teilerFuerRichtigeForm = 0;
//				for(let j=0;j<knotenVektor.length;j++){
//					if(knotenVektor[j].potenz===2){
//						teilerFuerRichtigeForm = knotenVektor[j].koeffizient;
//					}
//				}
				
//				for(let j=0;j<knotenVektor.length;j++){
//					if(knotenVektor[j].potenz===0){
//						cOderQ = knotenVektor[j].koeffizient/teilerFuerRichtigeForm;
//					}else if(knotenVektor[j].potenz===1){
//						bOderP = knotenVektor[j].koeffizient/teilerFuerRichtigeForm;
//					}
//				}
			
			let bOderP = 0, cOderQ = 0;
			let teilerFuerRichtigeForm = 0;
			
			let polynom = getABC(funktionenListe[i].ersteAbleitung);
			teilerFuerRichtigeForm = polynom.a;
            bOderP = polynom.b / teilerFuerRichtigeForm;
            cOderQ = polynom.c / teilerFuerRichtigeForm;
			
            if(polynom.a===0&&polynom.b===0&&polynom.c===0){
					document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die PQ-Formel muss das Polynom muss die Form ax^2+bx+c haben";
					return;
				}
					
				if(Math.pow(bOderP/2,2)-cOderQ>=0){
					let x1 = -(bOderP/2)+Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
					let x2 = -(bOderP/2)-Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
				
			
					funktionenListe[i].extremstellen.push(x1);
					funktionenListe[i].extremstellen.push(x2);

					
					let text = "";
					if(x1===x2){
						text += "Doppelter Hoch/Tiefpunkt: ";
					}
					
					for(let j=0;j<funktionenListe[i].extremstellen.length;j++){
						if(  getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)>0 ){
							text +=  "tp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j]) + "|" + zahlRunden(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
						}else if(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)<0){
							text +=  "hp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j])+"|"+ zahlRunden(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
						}else if(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)===0){
							text +=  "p" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j])+"|"+ zahlRunden(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
						}
					}
					document.getElementById("ExtremstellenTextfeld").value = text;		
				}else{
					document.getElementById("ExtremstellenTextfeld").value = "Keine Extremstellen gefunden.";
				}
//			}else{
//				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich... Um mit der PQ-Formel die Extremstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
//			}
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
			
			let p = 0, q = 0;
			let teilerFuerRichtigeForm = 0;			
			
			let polynom = getABC(funktionenListe[i].ersteAbleitung);
			teilerFuerRichtigeForm = polynom.a;
            bOderP = polynom.b;
            cOderQ = polynom.c;
            
            q = cOderQ / teilerFuerRichtigeForm;
			p = bOderP / teilerFuerRichtigeForm;
			
			if(polynom.a==0&&polynom.c==0&&polynom.b==0){
				document.getElementById("ExtremstellenTextfeld").value = "Leider nicht möglich... Um mit dem Satz von Vieta die Extremstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
			}
			
//			let knotenVektorErsteAbleitung = getVectorErsteAbleitung(i);
//			
//			if(getHoechstePotenz(knotenVektorErsteAbleitung)===2){
//				let p = 0, q = 0;
//				let teilerFuerRichtigeForm = 0;
//				for(let j=0;j<knotenVektorErsteAbleitung.length;j++){
//					if(knotenVektorErsteAbleitung[j].potenz===2){
//						teilerFuerRichtigeForm = knotenVektorErsteAbleitung[j].koeffizient;
//					}
//				}
//				
//				for(let j=0;j<knotenVektorErsteAbleitung.length;j++){
//					if(knotenVektorErsteAbleitung[j].potenz===0){
//						q = knotenVektorErsteAbleitung[j].koeffizient/teilerFuerRichtigeForm;
//					}else if(knotenVektorErsteAbleitung[j].potenz===1){
//						p = knotenVektorErsteAbleitung[j].koeffizient/teilerFuerRichtigeForm;
//					}
//				}
				let gefunden=false;

			
				for(let x1=-100;x1<100;x1++){
					for(let x2=-100;x2<100;x2++){
						if(p===(-(x1+x2))&&q===(x1*x2)){
							
							funktionenListe[i].extremstellen.push(x1);
							funktionenListe[i].extremstellen.push(x2);
							
							let text = "";
							
							for(let j=0;j<funktionenListe[i].extremstellen.length;j++){
								if(  getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)>0 ){
									text +=  "tp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j]) + "|" + zahlRunden(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
								}else if(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung)<0){
									text +=  "hp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j])+"|"+ zahlRunden(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i])) + ") ";
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

			
		}
	}
}

function onClickNewtonVerfahrenExtremstellen(){
	let tolleranz = Math.pow(10,-13);
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 11;
	aktiverReiter = 6;
	
	let extremstellenTmp = [];

	if(workersAvailable){
		for(let i=0;i<funktionenListe.length;i++){
			if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
				document.getElementById("ExtremstellenTextfeld").value = "";
				funktionenListe[i].extremstellen = [];
				let funktionTmp = funktionenListe[i].ersteAbleitung;
				for(let j=-30;j<30;j++){				
//					if(funktionTmp.inhaltKnotenSymbol==="/"){
					extremstellenTmp.push(newtonVerfahren_GebrochenRational(j, funktionTmp, false));
//					
//					}else{
//
//						extremstellenTmp.push(newtonVerfahren_GanzRational(j, funktionTmp.ersteAbleitung));
//					}
					
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
					if(  getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung,0)>0 ){
						text +=  "tp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j]) + "|" + zahlRunden(getPunktV4(Math.round(funktionenListe[i].extremstellen[j]),funktionenListe[i],0)) + ") ";
					}else if(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung,0)<0){
						text +=  "hp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j])+"|"+ zahlRunden(getPunktV4(Math.round(funktionenListe[i].extremstellen[j]),funktionenListe[i],0)) + ") ";
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
			
			if (funktionenListe[i].einfachGanzrational===false) {
				if (funktionenListe[i].inhaltKnotenSymbol === '/') {
					zaehler = funktionenListe[i].ersteAbleitung.linkesChild;
					nenner = funktionenListe[i].ersteAbleitung.rechtesChild;
				}
				else {
					if (funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length === 0) {
						zaehler = funktionenListe[i].ersteAbleitung;
					}
					else {
						zaehler = funktionenListe[i].ersteAbleitung;
					}
				}
			}else if (funktionenListe[i].einfachGanzrational===true){
				zaehler = funktionenListe[i].ersteAbleitung;
			}
			
			
			let y = 0;
			let yOld = 0;
			let rundenCounter = 0;
			let uebergangGefunden = false;
			for (let j = -30; j < 30; j += 0.1) {
				if (funktionenListe[i].einfachGanzrational===false) {
					y = getPunktV4(j, zaehler,0);
				}else if (funktionenListe[i].einfachGanzrational===true){
					y = getPunktV4(j, zaehler,0);
				}
				
				if (rundenCounter > 0) {
					if (y < 0 && yOld > 0) {
						
						if (funktionenListe[i].einfachGanzrational===false) {
							extremstellenTmp.push(regulaFalsi_GebrochenRational( j,  j-0.1, zaehler));
						}else if(funktionenListe[i].einfachGanzrational===true){
							extremstellenTmp.push(regulaFalsi_GanzRational( j,  j-0.1, zaehler));
						}
						
//						extremstellenTmp.push(regulaFalsi_GebrochenRational( j,  j-0.1, zaehler));
						uebergangGefunden = true;
					}
					else if (y > 0 && yOld < 0) {
						if (funktionenListe[i].einfachGanzrational===false) {
							extremstellenTmp.push(regulaFalsi_GebrochenRational( j,  j-0.1, zaehler));
						}else if(funktionenListe[i].einfachGanzrational===true){
							extremstellenTmp.push(regulaFalsi_GanzRational( j,  j-0.1, zaehler));
						}
						
//						extremstellenTmp.push(regulaFalsi_GebrochenRational( j,  j-0.1, zaehler));
						uebergangGefunden = true;
					}
				}

				yOld = y;
				rundenCounter++;
			}
			
			if (uebergangGefunden == false) {
				for (let j = -30; j < 30; j += 0.1) {
					if (funktionenListe[i].einfachGanzrational===false) {
						extremstellenTmp.push(regulaFalsi_GebrochenRational( j,  j-0.1, zaehler));
					}else if(funktionenListe[i].einfachGanzrational===true){
						extremstellenTmp.push(regulaFalsi_GanzRational( j,  j-0.1, zaehler));
					}
//					extremstellenTmp.push(regulaFalsi_GebrochenRational( j,  j-0.1, zaehler));
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
				if(  getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung,0)>0 ){
					text +=  "tp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j]) + "|" + zahlRunden(getPunktV4(Math.round(funktionenListe[i].extremstellen[j]),funktionenListe[i],0)) + ") ";
				}else if(getPunktV4(funktionenListe[i].extremstellen[j],funktionenListe[i].zweiteAbleitung,0)<0){
					text +=  "hp" + (j+1) + "(" + zahlRunden(funktionenListe[i].extremstellen[j])+"|"+ zahlRunden(getPunktV4(Math.round(funktionenListe[i].extremstellen[j]),funktionenListe[i],0)) + ") ";
				}
			}
			document.getElementById("ExtremstellenTextfeld").value = text;
			
		}
	}
}




function getVectorZweiteAbleitung(i){

	let knotenVektor = funktionenListe[i].zweiteAbleitung.gekuerzt;
	if(funktionenListe[i].inhaltKnotenSymbol==="/"){
		knotenVektor = funktionenListe[i].gekürzt.zweiteAbleitung.linkesChild.inhaltKnotenVektor;
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
			
			
			if(((funktionenListe[i].zweiteAbleitung.inhaltKnotenSymbol==='+'||funktionenListe[i].zweiteAbleitung.inhaltKnotenSymbol==='-')&&funktionenListe[i].zweiteAbleitung.linkesChild.inhaltKnotenPolynom.potenz===1&&funktionenListe[i].zweiteAbleitung.rechtesChild.inhaltKnotenPolynom.potenz===0)
					||funktionenListe[i].zweiteAbleitung.inhaltKnotenPolynom.potenz===1){
				
				if(funktionenListe[i].zweiteAbleitung.inhaltKnotenSymbol==='+')
					funktionenListe[i].wendepunkte.push((-funktionenListe[i].zweiteAbleitung.rechtesChild.inhaltKnotenPolynom.koeffizient)/funktionenListe[i].zweiteAbleitung.linkesChild.inhaltKnotenPolynom.koeffizient);
				else if(funktionenListe[i].zweiteAbleitung.inhaltKnotenSymbol==='-'){
					funktionenListe[i].wendepunkte.push((funktionenListe[i].zweiteAbleitung.rechtesChild.inhaltKnotenPolynom.koeffizient)/funktionenListe[i].zweiteAbleitung.linkesChild.inhaltKnotenPolynom.koeffizient);
				}else if(funktionenListe[i].zweiteAbleitung.inhaltKnotenPolynom.potenz===1){
					funktionenListe[i].wendepunkte.push(0);
				}
				if(  getPunktV4(funktionenListe[i].wendepunkte[0],funktionenListe[i].dritteAbleitung)>0 ){
					document.getElementById("WendepunkteTextfeld").value =  "w1=" + zahlRunden(funktionenListe[i].wendepunkte[0]);
				}else if(getPunktV4(funktionenListe[i].wendepunkte[0],funktionenListe[i].dritteAbleitung)<0){
					document.getElementById("WendepunkteTextfeld").value =  "w1=" + zahlRunden(funktionenListe[i].wendepunkte[0]);
				}
			}else{
				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss das Polynom die Form bx+c haben";
			}
			
			
//			let knotenVektorZweiteAbleitung = getVectorZweiteAbleitung(i);
//			
//			if(getHoechstePotenz(knotenVektorZweiteAbleitung)===1){
//				let mx=0,b=0;
//				for(let j=0;j<knotenVektorZweiteAbleitung.length;j++){
//					if(knotenVektorZweiteAbleitung[j].potenz===0){
//						b = knotenVektorZweiteAbleitung[j].koeffizient;
//					}else if(knotenVektorZweiteAbleitung[j].potenz===1){
//						mx = knotenVektorZweiteAbleitung[j].koeffizient;
//					}
//				}
//				
//				funktionenListe[i].wendepunkte.push((-b)/mx);
//				
//				document.getElementById("WendepunkteTextfeld").value =  "w1(" + zahlRunden(funktionenListe[i].wendepunkte[0])+"|"+zahlRunden(getPunktEinfachesGanzrational(funktionenListe[i].wendepunkte[0],funktionenListe[i]))+")";
//
//			}else if(knotenVektorZweiteAbleitung.length===3){
//				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die zweite Ableitung des Polynoms die Form bx+c haben";
//			}else if(knotenVektorZweiteAbleitung.length>3){
//				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die zweite Ableitung des Polynoms die Form bx+c haben";
//			}else if(knotenVektorZweiteAbleitung.length===0){
//				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich...Für die Geradengleichung muss die zweite Ableitung des Polynoms die Form bx+c haben";
//			}
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
						
				let a=0,b=0,c=0;
				
				let polynom = getABC(funktionenListe[i].zweiteAbleitung);
				a = polynom.a;
				b = polynom.b;
				c = polynom.c;
				
			if(a===0&&b===0&&c===0){
				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich... Um mit der Mitternachtsformel die Wendepunkte ermitteln zu können, muss die zweite Ableitung des Polynom die Form ax^2+bx+c haben";
				return;
			}	
				
//				for(let j=0;j<knotenVektorZweiteAbleitung.length;j++){
//					if(knotenVektorZweiteAbleitung[j].potenz===0){
//						c = knotenVektorZweiteAbleitung[j].koeffizient;
//					}else if(knotenVektorZweiteAbleitung[j].potenz===1){
//						b = knotenVektorZweiteAbleitung[j].koeffizient;
//					}else if(knotenVektorZweiteAbleitung[j].potenz===2){
//						a = knotenVektorZweiteAbleitung[j].koeffizient;
//					}
//				}

				let minusB = (-b);
				let BQuadrat = Math.pow(b,2);
				let VierAC = (4*a*c);
				let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
				let zweiMalA = 2*a;
			
				if(BQuadrat-VierAC>=0){
					let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
					let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;
				
					
					funktionenListe[i].wendepunkte.push(x1);
					funktionenListe[i].wendepunkte.push(x2);
					
					let text = "";
					
					for(let j=0;j<funktionenListe[i].wendepunkte.length;j++){
						text +=  "w"+ (j+1) +"(" + zahlRunden(funktionenListe[i].wendepunkte[j])+"|"+zahlRunden(getPunktV4(funktionenListe[i].wendepunkte[j],funktionenListe[i]))+") ";
					}
					
					
					document.getElementById("WendepunkteTextfeld").value = text;
				}else{
					document.getElementById("WendepunkteTextfeld").value = "Keine Wendepunkte gefunden.";
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
			
//			let knotenVektorZweiteAbleitung = getVectorZweiteAbleitung(i);
//			
//			if(knotenVektorZweiteAbleitung.length===3){
			
			let bOderP = 0, cOderQ = 0;
			let teilerFuerRichtigeForm = 0;
			
			let polynom = getABC(funktionenListe[i].zweiteAbleitung);
			teilerFuerRichtigeForm = polynom.a;
            bOderP = polynom.b / teilerFuerRichtigeForm;
            cOderQ = polynom.c / teilerFuerRichtigeForm;
			
            if(polynom.a===0&&polynom.b===0&&polynom.c===0){
					document.getElementById("NullstellenTextfeld").value = "Leider nicht möglich...Für die PQ-Formel muss das Polynom muss die Form ax^2+bx+c haben";
					return;
				}
			
//			
//				let bOderP=knotenVektorZweiteAbleitung[1]/knotenVektorZweiteAbleitung[2];
//				let cOderQ=knotenVektorZweiteAbleitung[0]/knotenVektorZweiteAbleitung[2];
					
				if(Math.pow(bOderP/2,2)-cOderQ>=0){
					let x1 = -(bOderP/2)+Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
					let x2 = -(bOderP/2)-Math.sqrt(Math.pow(bOderP/2,2)-cOderQ);
				
			
					funktionenListe[i].wendepunkte.push(x1);
					funktionenListe[i].wendepunkte.push(x2);

					
					let text = "";
					
					for(let j=0;j<funktionenListe[i].wendepunkte.length;j++){
						text +=  "wp" + (j+1) + "(" + zahlRunden(funktionenListe[i].wendepunkte[j]) + "|" + zahlRunden(getPunktV4(funktionenListe[i].wendepunkte[j],funktionenListe[i])) + ") ";
					}
					document.getElementById("WendepunkteTextfeld").value = text;		
				}else{
					document.getElementById("WendepunkteTextfeld").value = "Keine Wendepunkte gefunden.";
				}
//			}else{
//				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich... Um mit der PQ-Formel die Wendepunkte ermitteln zu können, muss die zweite Ableitung des Polynom die Form ax^2+bx+c haben";
//			}
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
			let gefunden=false;
			let p = 0, q = 0;
			let teilerFuerRichtigeForm = 0;			
			
			let polynom = getABC(funktionenListe[i].zweiteAbleitung);
			teilerFuerRichtigeForm = polynom.a;
            bOderP = polynom.b;
            cOderQ = polynom.c;
            
            q = cOderQ / teilerFuerRichtigeForm;
			p = bOderP / teilerFuerRichtigeForm;
			
			if(polynom.a==0&&polynom.c==0&&polynom.b==0){
				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich... Um mit dem Satz von Vieta die Extremstellen ermitteln zu können, muss die Ableitung des Polynom die Form ax^2+bx+c haben";
			}
			
			
//			let knotenVektorZweiteAbleitung = getVectorZweiteAbleitung(i);
//			
//			if(knotenVektorZweiteAbleitung.length===3){
//				let gefunden=false;
//
//				let p = knotenVektorZweiteAbleitung[1]/knotenVektorZweiteAbleitung[2];
//				let q = knotenVektorZweiteAbleitung[0]/knotenVektorZweiteAbleitung[2];
				
				for(let x1=-100;x1<100;x1++){
					for(let x2=-100;x2<100;x2++){
						if(p===(-(x1+x2))&&q===(x1*x2)){
							
							funktionenListe[i].wendepunkte.push(x1);
							funktionenListe[i].wendepunkte.push(x2);
							
							let text = "";
							
							for(let j=0;j<funktionenListe[i].wendepunkte.length;j++){
								text +=  "wp" + (j+1) + "(" + zahlRunden(funktionenListe[i].wendepunkte[j]) + "|" + zahlRunden(getPunktV4(funktionenListe[i].wendepunkte[j],funktionenListe[i])) + ") ";
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

//			}else{
//				document.getElementById("WendepunkteTextfeld").value = "Leider nicht möglich... Um mit dem Satz von Vieta die Wendepunkte ermitteln zu können, muss die zweite Ableitung des Polynom die Form ax^2+bx+c haben";
//			}
		}
	}
}

function onClickNewtonVerfahrenWendepunkte(){
	let tolleranz = Math.pow(10,-13);
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
				for(let j=-30;j<30;j++){				
					
					
					if(funktionTmp.inhaltKnotenSymbol!="/"){
						wendepunkteTmp.push(newtonVerfahren_GebrochenRational(j, funktionTmp.zweiteAbleitung,false));
					
					}else{
						wendepunkteTmp.push(newtonVerfahren_GebrochenRational(j, funktionTmp, true));
					}
					
//					
//					if(funktionTmp.inhaltKnotenSymbol!="/"){
//						wendepunkteTmp.push(newtonVerfahren_GebrochenRational(i, funktionTmp.zweiteAbleitung, false));
//					
//					}else{
//						wendepunkteTmp.push(newtonVerfahren_GebrochenRational(i, funktionTmp, true));
//					}
					
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
					text +=  "wp" + (j+1) + "(" + zahlRunden(funktionenListe[i].wendepunkte[j]) + "|" + zahlRunden(getPunktEinfachesGanzrational(funktionenListe[i].wendepunkte[j],funktionenListe[i])) + ") ";
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
			if (funktionenListe[i].einfachGanzrational===false) {
				if (funktionenListe[i].inhaltKnotenSymbol === '/') {
					zaehler = funktionenListe[i].zweiteAbleitung.linkesChild;
					nenner = funktionenListe[i].zweiteAbleitung.rechtesChild;
				}
				else {
					if (funktionenListe[i].zweiteAbleitung.inhaltKnotenVektor.length === 0) {
						zaehler = funktionenListe[i].zweiteAbleitung;
					}
					else {
						zaehler = funktionenListe[i].zweiteAbleitung;
					}
				}
			}else if (funktionenListe[i].einfachGanzrational===true){
				zaehler = funktionenListe[i].zweiteAbleitung;
			}
			let y = 0;
			let yOld = 0;
			let rundenCounter = 0;
			let uebergangGefunden = false;
			for (let j = -30; j < 30; j += 0.1) {
				y = f(j, nenner);
				if (rundenCounter > 0) {
					if (y < 0 && yOld > 0) {
						if (funktionenListe[i].einfachGanzrational===false) {
							wendepunkteTmp.push(regulaFalsi_GebrochenRational( j,  j-0.1, zaehler));
						}else if(funktionenListe[i].einfachGanzrational===true){
							wendepunkteTmp.push(regulaFalsi_GanzRational( j,  j-0.1, zaehler));
						}
//						wendepunkteTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, zaehler));
						uebergangGefunden = true;
					}
					else if (y > 0 && yOld < 0) {
						if (funktionenListe[i].einfachGanzrational===false) {
							wendepunkteTmp.push(regulaFalsi_GebrochenRational( j,  j-0.1, zaehler));
						}else if(funktionenListe[i].einfachGanzrational===true){
							wendepunkteTmp.push(regulaFalsi_GanzRational( j,  j-0.1, zaehler));
						}
//						wendepunkteTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, zaehler));
						uebergangGefunden = true;
					}
				}

				yOld = y;
				rundenCounter++;
			}
			
			if (uebergangGefunden == false) {
				for (let j = -30; j < 30; j += 0.1) {
					if (funktionenListe[i].einfachGanzrational===false) {
						wendepunkteTmp.push(regulaFalsi_GebrochenRational( j,  j-0.1, zaehler));
					}else if(funktionenListe[i].einfachGanzrational===true){
						wendepunkteTmp.push(regulaFalsi_GanzRational( j,  j-0.1, zaehler));
					}
//					wendepunkteTmp.push(regulaFalsi_GebrochenRational( i,  i-0.1, zaehler));
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
				text +=  "wp" + (j+1) + "(" + zahlRunden(funktionenListe[i].wendepunkte[j]) + "|" + zahlRunden(getPunktV4(funktionenListe[i].wendepunkte[j],funktionenListe[i])) + ") ";
			}
			document.getElementById("WendepunkteTextfeld").value = text;
			
		}
	}
}

function onClickIntegralBerechnen(){
	zeichneReiter6 = true;
	zeigeInhaltReiter6 = 19;
	aktiverReiter=6;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			onClickNewtonVerfahrenNullstellen();
			
			funktionenListe[i].integralVon = parseFloat(document.getElementById("IntegralVonTextfeld").value);
			funktionenListe[i].integralBis = parseFloat(document.getElementById("IntegralBisTextfeld").value);
			if(funktionenListe[i].integralVon>funktionenListe[i].integralBis){
				document.getElementById("IntegralErgebnisTextfeld").value = "Die von-Grenze ist größer als die bis-Grenze keine berechnung möglich";
				return;
			}else{
				
				let uebergangspunkte = []
				
				for(let j=0;j<funktionenListe[i].nullstellen.length;j++){
					if(funktionenListe[i].nullstellen[j]>funktionenListe[i].integralVon&&funktionenListe[i].nullstellen[j]<funktionenListe[i].integralBis){
						uebergangspunkte.push(funktionenListe[i].nullstellen[j]);
					}
				}
                
                let punktVon = 0;
				let punktBis = 0;

                let flaeche = 0;
                
                if(uebergangspunkte.length===0){
                	let punktVon = getPunktV4(funktionenListe[i].integralVon, funktionenListe[i].stammfunktion,0);
				    let punktBis = getPunktV4(funktionenListe[i].integralBis, funktionenListe[i].stammfunktion,0);
				    flaeche = Math.abs(punktBis - punktVon);
				    document.getElementById("IntegralErgebnisTextfeld").value = flaeche;
				    return;
                }
                
                //uebergangspunkte.sort();
                
				for(let j=0;j<=uebergangspunkte.length;j++){
					if(j==0){
                             punktVon = getPunktV4(funktionenListe[i].integralVon, funktionenListe[i].stammfunktion,0);
				             punktBis = getPunktV4(uebergangspunkte[j], funktionenListe[i].stammfunktion,0);

					}else if(j<uebergangspunkte.length){
                            punktVon = getPunktV4(uebergangspunkte[j-1], funktionenListe[i].stammfunktion,0);
				            punktBis = getPunktV4(uebergangspunkte[j], funktionenListe[i].stammfunktion,0);
					}if(j===uebergangspunkte.length){
						    punktVon = getPunktV4(uebergangspunkte[j-1], funktionenListe[i].stammfunktion,0);
				            punktBis = getPunktV4(funktionenListe[i].integralBis, funktionenListe[i].stammfunktion,0);
					}

					flaeche += Math.abs(punktBis - punktVon);
				}
			
				document.getElementById("IntegralErgebnisTextfeld").value = flaeche;
				
				funktionenListe[i].integralFlaecheAnzeigen = true;
				document.getElementById("IntegralFlaecheAnzeigenCheckbox").checked = true;
			}
			
			
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
	let gefunden = false;
	let polstellenTmp = [];
	let funktion = null;
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			gefunden = true;
			funktion = funktionenListe[i];
		}
	}
	if(!gefunden){
		funktion = funktionenVorschau;
	}
	
	gefunden = true;
	document.getElementById("PolstellenTextfeld").value = "";
	funktion.polstellen = [];
	
	let zaehler = 0;
	let nenner = 0;
	
	if (funktion.inhaltKnotenSymbol === '/') {
		zaehler = funktion.linkesChild.inhaltKnotenVektor;
		nenner = funktion.rechtesChild.inhaltKnotenVektor;
	}
	else {
		if (funktion.ersteAbleitung.inhaltKnotenVektor.length === 0) {
			nenner = funktion.ersteAbleitung.linkesChild.inhaltKnotenVektor;
		}
		else {
			nenner = funktion.ersteAbleitung.inhaltKnotenVektor;
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
			for(let k=0;k<funktion.polstellen.length;k++){
				if(Math.abs(funktion.polstellen[k] - xtmp) < tolleranz){
					tolleranzErreicht = true
				}
			}
			if(!tolleranzErreicht){
				funktion.polstellen.push(polstellenTmp[j].x);
			}
		}
	}
	let text ="";
	for(let j=0;j<funktion.polstellen.length;j++){
			text +=  "x" + (j+1) + "=" + zahlRunden(funktion.polstellen[j]) + " ";
	}
	document.getElementById("PolstellenTextfeld").value = text;
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

function onChangeIntegralFlaecheAnzeigen(){
	for(let i=0;i<funktionenListe.length;i++){
		if((document.getElementById("funktionenDropdown").value === buchstabenArray[i] + "(x) = " + funktionenListe[i].inhaltKnotenString)){
			funktionenListe[i].integralFlaecheAnzeigen=document.getElementById("IntegralFlaecheAnzeigenCheckbox").checked;
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