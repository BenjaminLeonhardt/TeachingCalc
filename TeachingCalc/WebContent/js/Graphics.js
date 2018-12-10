//Zeichen Engine 
//kümmer sich um korrektes zoomen und scrollen und drehen der Objekte auf dem Bildschirm


function Rotieren(x, y) {
	let piDurch180 = Math.PI / 180.0;
	let rad = piDurch180*rotationswinkel;
	
	let xErg = x * cos(rad) - y * sin(rad);
	let yErg = x * sin(rad) + y * cos(rad);

	x = xErg;
	y = yErg;
}

function DrawCircle(x, y, radius, r, g, b, a, move, stroke) {
	if (typeof stroke == "undefined" ) {
	    stroke = true;
	  }
	//Rotieren(x, y);
	radius *= (vergroesserung/2);

	x *= vergroesserung;
	y *= vergroesserung;

	x += verschiebungDurchBenutzer.x+(canvas.width/2);
	y += verschiebungDurchBenutzer.y+(canvas.height/2);
	

	punktX = x+radius;
	punktY = y;
	canvasContext.beginPath();
	canvasContext.moveTo(punktX,punktY);
	if(stroke){
		canvasContext.strokeStyle = 'rgba('+String(r)+','+String(g)+','+String(b)+','+String(a)+')';
	}else{
		canvasContext.fillStyle = 'rgba('+String(r)+','+String(g)+','+String(b)+','+String(a)+')';

	}
	
	canvasContext.arc(x,y,radius,0,Math.PI * 2,false);
	if(stroke){
		canvasContext.stroke();
	}else{
		canvasContext.fill();
	}
	
	
}


function DrawOval(x, y, radius1, radius2, r, g, b, a) {
	//Rotieren(x, y);
	radius1 *= (vergroesserung / 2);
	radius2 *= (vergroesserung / 2);

	x *= vergroesserung;
	y *= vergroesserung;
	x += verschiebungDurchBenutzer.x+(canvas.width / 2);
	y += verschiebungDurchBenutzer.y+(canvas.height / 2);

}


function DrawRect(x, y, width, height, r, g, b, a) {
	width *= (vergroesserung / 2);
	height *= (vergroesserung / 2);
	x *= vergroesserung;
	y *= vergroesserung;
	x += verschiebungDurchBenutzer.x+(canvas.width / 2);
	y += verschiebungDurchBenutzer.y+(canvas.height / 2);
	
	canvasContext.fillStyle = 'rgba('+String(r)+','+String(g)+','+String(b)+','+String(a)+')';
	canvasContext.fillRect(x, y, width, height);
}

function DrawRectStatisch(x, y, width, height, r, g, b, a) {
//	width *= (vergroesserung / 2);
//	height *= (vergroesserung / 2);
//	x *= vergroesserung;
//	y *= vergroesserung;
//	x += verschiebungDurchBenutzer.x+(canvas.width / 2);
//	y += verschiebungDurchBenutzer.y+(canvas.height / 2);
	
	canvasContext.fillStyle = 'rgba('+String(r)+','+String(g)+','+String(b)+','+String(a)+')';
	canvasContext.fillRect(x, y, width, height);
}

function DrawRectStatischFarbeAlsString(x, y, width, height, farbe) {
//	width *= (vergroesserung / 2);
//	height *= (vergroesserung / 2);
//	x *= vergroesserung;
//	y *= vergroesserung;
//	x += verschiebungDurchBenutzer.x+(canvas.width / 2);
//	y += verschiebungDurchBenutzer.y+(canvas.height / 2);
	
	canvasContext.fillStyle = farbe;
	canvasContext.fillRect(x, y, width, height);
}

function roundRect(x, y, width, height, radius, fill, stroke, fillStyle) {
	  if (typeof stroke == "undefined" ) {
	    stroke = true;
	  }
	  if (typeof radius === "undefined") {
	    radius = 5;
	  }
	  canvasContext.beginPath();
	  canvasContext.fillStyle = fillStyle;
	  canvasContext.moveTo(x + radius, y);
	  canvasContext.lineTo(x + width - radius, y);
	  canvasContext.quadraticCurveTo(x + width, y, x + width, y + radius);
	  canvasContext.lineTo(x + width, y + height - radius);
	  canvasContext.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	  canvasContext.lineTo(x + radius, y + height);
	  canvasContext.quadraticCurveTo(x, y + height, x, y + height - radius);
	  canvasContext.lineTo(x, y + radius);
	  canvasContext.quadraticCurveTo(x, y, x + radius, y);
	  canvasContext.closePath();
	  if (stroke) {
		  canvasContext.stroke();
	  }
	  if (fill) {
		  canvasContext.fill();
	  }        
	}

function DrawLineColor(x1, y1, x2, y2, r, g, b, a, xTesten, yTesten) {
//	Rotieren(x1, y1);
//	Rotieren(x2, y2);
	x1 *= vergroesserung;
	y1 *= vergroesserung;
	x2 *= vergroesserung;
	y2 *= vergroesserung;

	x1 += verschiebungDurchBenutzer.x+(canvas.width / 2);
	y1 += verschiebungDurchBenutzer.y+(canvas.height / 2);
	x2 += verschiebungDurchBenutzer.x+(canvas.width / 2);
	y2 += verschiebungDurchBenutzer.y+(canvas.height / 2);
	
	if(xTesten){
		if(x1<0||x1>canvas.width&&x2<0||x2>canvas.width){
			return;
		}
	}

	if(yTesten){
		if(y1<0||y1>canvas.height&&y2<0||y2>canvas.height){
			return;
		}
	}

	
	canvasContext.strokeStyle = 'rgba('+String(r)+','+String(g)+','+String(b)+','+String(a)+')';
	canvasContext.lineTo(x1, y1);
	canvasContext.lineTo(x2, y2);
}

function DrawLine(x1, y1) {
//	Rotieren(x1, y1);
//	Rotieren(x2, y2);
	x1 *= vergroesserung;
	y1 *= vergroesserung;


	x1 += verschiebungDurchBenutzer.x+(canvas.width / 2);
	y1 += verschiebungDurchBenutzer.y+(canvas.height / 2);
	if(x1<0||x1>canvas.width){
		return;
	}

	if(y1<0||y1>canvas.height){
		return;
	}
	
	canvasContext.lineTo(x1, y1);
}

function DrawLineOhneVergroeserung(x1, y1) {
//	Rotieren(x1, y1);
//	Rotieren(x2, y2);
//	x1 *= vergroesserung;
//	y1 *= vergroesserung;


	x1 += verschiebungDurchBenutzer.x+(canvas.width / 2);
	y1 += verschiebungDurchBenutzer.y+(canvas.height / 2);
	if(x1<0||x1>canvas.width){
		return;
	}

	if(y1<0||y1>canvas.height){
		if(y1<0){
			y1=0;
		}if(y1>canvas.height){
			y1=canvas.height;
		}
		canvasContext.moveTo(x1, y1);
		return;
	}
	
	canvasContext.lineTo(x1, y1);
}


function DrawLineRelativ(x, y, u, v, r, g, b, a, normale) {
	//Rotieren(x, y);
	//Rotieren(u, v);
	x *= vergroesserung;
	y *= vergroesserung;

	if (normale) {
		u *= vergroesserungNormale;
		v *= vergroesserungNormale;
	}
	else {
		u *= 5* vergroesserung;
		v *= 5* vergroesserung;
	}

	x += verschiebungDurchBenutzer.x+(canvas.width / 2);
	y += verschiebungDurchBenutzer.y+(canvas.height / 2);

	u += x;
	v += y;
	
	canvasContext.strokeStyle = 'rgba('+String(r)+','+String(g)+','+String(b)+','+String(a)+')';
	canvasContext.lineTo(x, y);
	canvasContext.lineTo(u, v);

}

function DrawLineStatisch(x, y, u, v, r, g, b, a) {
	
	
	canvasContext.strokeStyle = 'rgba('+String(r)+','+String(g)+','+String(b)+','+String(a)+')';
	canvasContext.lineTo(x, y);
	canvasContext.lineTo(u, v);

}

function DrawTextStatisch(x, y, width, height, str, rotieren, bewegen, r, g, b, a) {
	if (rotieren) {
		Rotieren(x, y);
	}
	/*x *= vergroesserung;
	y *= vergroesserung;*/

	x += +(canvas.width / 2);
	y += +(canvas.height / 2);
	
	
	canvasContext.font = '20px Calibri';
	canvasContext.fillStyle = 'rgba('+String(r)+','+String(g)+','+String(b)+','+String(a)+')';
	canvasContext.textAlign = "center";
	canvasContext.fillText(str, x, y);

}


function DrawText(x, y, width, height, str, rotieren, bewegen, r, g, b, a) {
	if (rotieren) {
		Rotieren(x, y);
	}
	let x2 = 0;
	let y2 = 0;
//	if (bewegen) {
//		x2 = (x - 2) * vergroesserung;
//		y2 = y * vergroesserung;
//
//		x2 = x2 + verschiebungDurchBenutzer.x+(canvas.width / 2);
//		y2 = y2 + verschiebungDurchBenutzer.y+(canvas.height / 2);
//
//		x *= vergroesserung;
//		y *= vergroesserung;
//
//		x += verschiebungDurchBenutzer.x+(canvas.width / 2);
//		y += verschiebungDurchBenutzer.y+(canvas.height / 2);
//	}
//	else {
//		x2 = (x - 2);
//		y2 = y;
//	}
	x *= vergroesserung;
	y *= vergroesserung;

	x += verschiebungDurchBenutzer.x+(canvas.width / 2);
	y += verschiebungDurchBenutzer.y+(canvas.height / 2);

	canvasContext.font = '20px Calibri';
	canvasContext.fillStyle = 'rgba('+String(r)+','+String(g)+','+String(b)+','+String(a)+')';
	canvasContext.textAlign = "center";
	canvasContext.fillText(String(str), x, y);
	
}


function DrawPoint(x, y, r, g, b, a) {
	Rotieren(x, y);

	x *= vergroesserung;
	y *= vergroesserung;
	x += verschiebungDurchBenutzer.x+(canvas.width / 2);
	y += verschiebungDurchBenutzer.y+(canvas.height / 2);
	
	canvasContext.strokeStyle = 'rgba('+String(r)+','+String(g)+','+String(b)+','+String(a)+')';
	canvasContext.lineTo(x, y);
	canvasContext.lineTo(x+1, y);

}

function WriteText(text, x, y, r, g, b, a,font){
	let hoeheWurzelZeichen1Schriftgroesse35 = 25;
	let hoeheWurzelZeichen2Schriftgroesse35 = 15;
	let hoeheWurzelZeichen1Schriftgroesse15 = 22;
	let hoeheWurzelZeichen2Schriftgroesse15 = 18;
	
	let textLaenge1 = 0;
	let textLaenge2 = 0;
	let hasSlash = text.search("/");
	canvasContext.font = font;
	canvasContext.fillStyle = `rgba(${r},${g},${b},${a})`;
	canvasContext.strokeStyle = `rgba(${r},${g},${b},${a})`;
	if(hasSlash != (-1)){		
		
		textLaenge1 = canvasContext.measureText(text.substring(0,hasSlash)).width;		
		textLaenge2 = canvasContext.measureText(text.substring(hasSlash+1)).width;	
		
		let textLaengeMax = 0;
		if(textLaenge1>textLaenge2){
			textLaengeMax = textLaenge1;
			canvasContext.fillText(text.substring(0,hasSlash), x, y-8);
			canvasContext.fillText(text.substring(hasSlash+1), x+((textLaenge1-textLaenge2)/2), y+10);
			
			canvasContext.beginPath();
			canvasContext.moveTo( x, y-5);
			canvasContext.lineTo( x + textLaengeMax, y-5);
			canvasContext.stroke();
			return textLaengeMax;
		}else if(textLaenge1<textLaenge2){
			canvasContext.fillText(text.substring(0,hasSlash), x+((textLaenge2-textLaenge1)/2), y-8);
			canvasContext.fillText(text.substring(hasSlash+1), x, y+10);
			textLaengeMax = textLaenge2;
			
			canvasContext.beginPath();
			canvasContext.moveTo( x, y-5);
			canvasContext.lineTo( x + textLaengeMax, y-5);
			canvasContext.stroke();
			return textLaengeMax;
		}else if(textLaenge1===textLaenge2){
			canvasContext.fillText(text.substring(0,hasSlash), x, y-8);
			canvasContext.fillText(text.substring(hasSlash+1), x, y+10);
			textLaengeMax = textLaenge1;
			
			canvasContext.beginPath();
			canvasContext.moveTo( x, y-5);
			canvasContext.lineTo( x + textLaengeMax, y-5);
			canvasContext.stroke();
			return textLaengeMax;
		}
		
		
		
		return textLaengeMax;
	}else{
		let textBold = [];
		let indexLetzes = 0;
		let geradeOderUngerade=0;
		for(let i=0;i<text.length;i++){
			if(text[i]===`[`&&text[i-1]===`b`){
//				if(i-1==0){
//					geradeOderUngerade=1;
//				}
				for(let j=i;j<text.length;j++){
					if(text[j]===`]`){
						textBold.push(text.substring(indexLetzes,i-1));
						textBold.push(text.substring(i+1,j));
						i=j+1;
						indexLetzes=j+1;
						j=text.length;
					}
				}
			}
		}
		if(indexLetzes!=text.length-1){
			textBold.push(text.substring(indexLetzes));
		}
		
		if(textBold.length!=0){
			for(let i=0;i<textBold.length;i++){
				if(i%2==0){
					canvasContext.font = font;
				}else{
					canvasContext.font = "bold " + font;
				}
				canvasContext.fillText(textBold[i], textLaenge1+x, y);
				textLaenge1 += canvasContext.measureText(textBold[i]).width;
				
			}
		}else{
			canvasContext.fillText(text, x, y);
			textLaenge1 += canvasContext.measureText(text).width;
		}
		
		
		return textLaenge1;
	}
	

	return textLaenge;
}
