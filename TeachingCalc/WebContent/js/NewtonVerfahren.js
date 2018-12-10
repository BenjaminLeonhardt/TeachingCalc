self.addEventListener('message', data => {
	console.log(data.data.number);
});
//	self.postMessage(data.data.number);
//	
//});
//	tolleranz = 1 * Math.pow(10, -10);
//	let startPunktNewton;
//	let funktion;
//	
//	startPunktNewton = data.data.number;
//	funktion = data.data.funktion;
//	
//	
//	
//	//berechnet die punkte einer funktion als vektor
//	function f(x, funktion) {
//		let y = 0.0;
//		for (let j = 0; j < funktion.length; j++) {
//			if (j == 0) {
//				y += funktion[j];
//			}
//			else {
//				if (funktion[j] != 0) {
//					y += Math.pow(x, j) * funktion[j];
//				}
//			}
//		}
//		return y;
//	}
//
//	// berechnet die punkte einer funktion des objekts der klasse "funktion als
//	// vektor syntaxbaum"
//	function getPunkt(x, funktion) {
//		let y1 = 0;
//		let y2 = 0;
//		let y = 0;
//		if (funktion.inhaltKnotenSymbol == '/') {
//			y1 = f(x,funktion.linkesChild.inhaltKnotenVektor);
//			y2 = f(x, funktion.rechtesChild.inhaltKnotenVektor);
//			if (y2 != 0) {
//				y = y1 / y2;
//			}
//		}
//		if (funktion.inhaltKnotenSymbol === '^'|| funktion.inhaltKnotenSymbol === '*') {
//			y = f(x, funktion.inhaltKnotenVektor);
//		}
//		if (funktion.inhaltKnotenSymbol >= '0' && funktion.inhaltKnotenSymbol <= '9') {
//			y = f(x, funktion.inhaltKnotenVektor);
//		}
//		if (funktion.inhaltKnotenSymbol === 'x' || funktion.inhaltKnotenSymbol === 'X') {
//			y = f(x, funktion.inhaltKnotenVektor);
//		}
//		if (funktion.inhaltKnotenSymbol === '+'|| funktion.inhaltKnotenSymbol === '-') {
//			y = f(x, funktion.inhaltKnotenVektor);
//		}
//		return y;
//	}
//	
//	
//	let xn = startPunktNewton;
//	let xn1 =0;
//	let counter = 0;
//	let yVonXn1 = 0;
//
//	while((Math.abs(xn-xn1)>tolleranz || Math.abs(getPunkt(xn1,funktion.inhaltKnotenVektor.gekürzt))>tolleranz) && counter<1000){
//		if(counter>0){
//			xn = xn1;
//		}
//		xn1 = xn - (getPunkt(xn,funktion.inhaltKnotenVektor.gekürzt) / getPunkt(xn,funktion.ersteAbleitung.inhaltKnotenVektor));
//		yVonXn1 = getPunkt(xn1,funktion.inhaltKnotenVektor.gekürzt);
//		counter++;
//	}
//	let vector2D = {
//			x:-xn1,
//			y: getPunkt(xn1,funktion.inhaltKnotenVektor.gekürzt)
//	}
//	if(Math.abs(vector2D)> tolleranz){
//		
//	}else if(Math.abs(vector2D) < tolleranz){
//		self.postMessage({vector2D});
//	}
//	
//	
//});


//self.postMessage(e.data);


