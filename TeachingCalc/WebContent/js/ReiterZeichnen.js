function zeichneReiter(){
	
	if(aktiverReiter===1){
		farbeReiter1.r=150;		farbeReiter2.r=100;		farbeReiter3.r=100;		farbeReiter4.r=100;		farbeReiter5.r=100;		farbeReiter6.r=100;
		farbeReiter1.g=150;		farbeReiter2.g=100;		farbeReiter3.g=100;		farbeReiter4.g=100;		farbeReiter5.g=100;		farbeReiter6.g=100;
		farbeReiter1.b=150;		farbeReiter2.b=100;		farbeReiter3.b=100;		farbeReiter4.b=100;		farbeReiter5.b=100;		farbeReiter6.b=100;
		farbeReiter1.a=1;		farbeReiter2.a=1;		farbeReiter3.a=1;		farbeReiter4.a=1;		farbeReiter5.a=1;		farbeReiter6.a=1;
	}
	
	if(aktiverReiter===2){
		farbeReiter1.r=100;		farbeReiter2.r=150;		farbeReiter3.r=100;		farbeReiter4.r=100;		farbeReiter5.r=100;		farbeReiter6.r=100;
		farbeReiter1.g=100;		farbeReiter2.g=150;		farbeReiter3.g=100;		farbeReiter4.g=100;		farbeReiter5.g=100;		farbeReiter6.g=100;
		farbeReiter1.b=100;		farbeReiter2.b=150;		farbeReiter3.b=100;		farbeReiter4.b=100;		farbeReiter5.b=100;		farbeReiter6.b=100;
		farbeReiter1.a=1;		farbeReiter2.a=1;		farbeReiter3.a=1;		farbeReiter4.a=1;		farbeReiter5.a=1;		farbeReiter6.a=1;
	}
	
	if(aktiverReiter===3){
		farbeReiter1.r=100;		farbeReiter2.r=100;		farbeReiter3.r=150;		farbeReiter4.r=100;		farbeReiter5.r=100;		farbeReiter6.r=100;
		farbeReiter1.g=100;		farbeReiter2.g=100;		farbeReiter3.g=150;		farbeReiter4.g=100;		farbeReiter5.g=100;		farbeReiter6.g=100;
		farbeReiter1.b=100;		farbeReiter2.b=100;		farbeReiter3.b=150;		farbeReiter4.b=100;		farbeReiter5.b=100;		farbeReiter6.b=100;
		farbeReiter1.a=1;		farbeReiter2.a=1;		farbeReiter3.a=1;		farbeReiter4.a=1;		farbeReiter5.a=1;		farbeReiter6.a=1;
	}
	
	if(aktiverReiter===4){
		farbeReiter1.r=100;		farbeReiter2.r=100;		farbeReiter3.r=100;		farbeReiter4.r=150;  	farbeReiter5.r=100;		farbeReiter6.r=100;
		farbeReiter1.g=100;		farbeReiter2.g=100;		farbeReiter3.g=100;		farbeReiter4.g=150; 	farbeReiter5.g=100;		farbeReiter6.g=100;
		farbeReiter1.b=100;		farbeReiter2.b=100;		farbeReiter3.b=100;		farbeReiter4.b=150;		farbeReiter5.b=100;		farbeReiter6.b=100;
		farbeReiter1.a=1;		farbeReiter2.a=1;		farbeReiter3.a=1;		farbeReiter4.a=1;		farbeReiter5.a=1;		farbeReiter6.a=1;
	}
	
	if(aktiverReiter===5){
		farbeReiter1.r=100;		farbeReiter2.r=100;		farbeReiter3.r=100;		farbeReiter4.r=100; 	farbeReiter5.r=150;		farbeReiter6.r=100;
		farbeReiter1.g=100;		farbeReiter2.g=100;		farbeReiter3.g=100;		farbeReiter4.g=100; 	farbeReiter5.g=150;		farbeReiter6.g=100;
		farbeReiter1.b=100;		farbeReiter2.b=100;		farbeReiter3.b=100;		farbeReiter4.b=100; 	farbeReiter5.b=150;		farbeReiter6.b=100;
		farbeReiter1.a=1;		farbeReiter2.a=1;		farbeReiter3.a=1;		farbeReiter4.a=1;   	farbeReiter5.a=1;		farbeReiter6.a=1;
	}
	
	if(aktiverReiter===6){
		farbeReiter1.r=100;		farbeReiter2.r=100;		farbeReiter3.r=100;		farbeReiter4.r=100; 	farbeReiter5.r=100;		farbeReiter6.r=150;
		farbeReiter1.g=100;		farbeReiter2.g=100;		farbeReiter3.g=100;		farbeReiter4.g=100; 	farbeReiter5.g=100;		farbeReiter6.g=150;
		farbeReiter1.b=100;		farbeReiter2.b=100;		farbeReiter3.b=100;		farbeReiter4.b=100; 	farbeReiter5.b=100;		farbeReiter6.b=150;
		farbeReiter1.a=1;		farbeReiter2.a=1;		farbeReiter3.a=1;		farbeReiter4.a=1;   	farbeReiter5.a=1;		farbeReiter6.a=1;
	}

	
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter, breitePunktAmGraph.width+20, hoeheInfoLeisteReiter, farbeReiter1.r,farbeReiter1.g,farbeReiter1.b,farbeReiter1.a);
	
	DrawRectStatisch((breitePunktAmGraph.width+20)*1, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter, breitePunktAmGraph.width+20, hoeheInfoLeisteReiter, farbeReiter2.r,farbeReiter2.g,farbeReiter2.b,farbeReiter2.a);

	DrawRectStatisch((breitePunktAmGraph.width+20)*2, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter, breitePunktAmGraph.width+20, hoeheInfoLeisteReiter, farbeReiter3.r,farbeReiter3.g,farbeReiter3.b,farbeReiter3.a);

	DrawRectStatisch((breitePunktAmGraph.width+20)*3, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter, breitePunktAmGraph.width+20, hoeheInfoLeisteReiter, farbeReiter4.r,farbeReiter4.g,farbeReiter4.b,farbeReiter4.a);

	DrawRectStatisch((breitePunktAmGraph.width+20)*4, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter, breitePunktAmGraph.width+20, hoeheInfoLeisteReiter, farbeReiter5.r,farbeReiter5.g,farbeReiter5.b,farbeReiter5.a);

	canvasContext.beginPath();
	canvasContext.strokeStyle = 'rgba(30,30,30,1)';
	canvasContext.moveTo( breitePunktAmGraph.width+20, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter);
	canvasContext.lineTo( breitePunktAmGraph.width+20, canvas.height-hoeheInfoLeiste);
	canvasContext.stroke();
	
	canvasContext.beginPath();
	canvasContext.strokeStyle = 'rgba(30,30,30,1)';
	canvasContext.moveTo( (breitePunktAmGraph.width+20)*2, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter);
	canvasContext.lineTo( (breitePunktAmGraph.width+20)*2, canvas.height-hoeheInfoLeiste);
	canvasContext.stroke();
	
	canvasContext.beginPath();
	canvasContext.strokeStyle = 'rgba(30,30,30,1)';
	canvasContext.moveTo((breitePunktAmGraph.width+20)*3, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter);
	canvasContext.lineTo((breitePunktAmGraph.width+20)*3, canvas.height-hoeheInfoLeiste);
	canvasContext.stroke();	
	
	canvasContext.beginPath();
	canvasContext.strokeStyle = 'rgba(30,30,30,1)';
	canvasContext.moveTo((breitePunktAmGraph.width+20)*4, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter);
	canvasContext.lineTo((breitePunktAmGraph.width+20)*4, canvas.height-hoeheInfoLeiste);
	canvasContext.stroke();
	
	
	
	canvasContext.font = '15px Calibri';
	canvasContext.fillStyle = 'rgba(0,0,0,1)';
	canvasContext.textAlign = "left";
	canvasContext.fillText( "Punkt am Graph", 10, canvas.height-hoeheInfoLeiste-5);
	canvasContext.fillText( "Steigung", (breitePunktAmGraph.width+20)+10, canvas.height-hoeheInfoLeiste-5);
	canvasContext.fillText( "Tangente", (breitePunktAmGraph.width+20)*2+10, canvas.height-hoeheInfoLeiste-5);
	canvasContext.fillText( "Normale", ((breitePunktAmGraph.width+20)*3)+10, canvas.height-hoeheInfoLeiste-5);
	canvasContext.fillText( "Krümmungskreis", ((breitePunktAmGraph.width+20)*4)+10, canvas.height-hoeheInfoLeiste-5);
	
	if(zeichneReiter6){
		DrawRectStatisch(canvas.width-breitePunktAmGraph.width-40, canvas.height-hoeheInfoLeiste-hoeheInfoLeisteReiter, breitePunktAmGraph.width+40, hoeheInfoLeisteReiter, farbeReiter6.r,farbeReiter6.g,farbeReiter6.b,farbeReiter6.a);
		canvasContext.font = '15px Calibri';
		canvasContext.fillStyle = 'rgba(0,0,0,1)';
		canvasContext.textAlign = "left";
		switch(zeigeInhaltReiter6){
		case 1: 
			canvasContext.fillText( "Geradengleichung", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 2: 
			canvasContext.fillText( "Mitternachtsformel", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 3: 
			canvasContext.fillText( "PQ-Formel", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 4: 
			canvasContext.fillText( "Satz von Vieta", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 5: 
			canvasContext.fillText( "Newton Verfahren", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 6: 
			canvasContext.fillText( "Regula Falsi", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 7: 
			canvasContext.fillText( "Geradengleichung", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 8: 
			canvasContext.fillText( "Mitternachtsformel", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 9: 
			canvasContext.fillText( "PQ-Formel", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 10: 
			canvasContext.fillText( "Satz von Vieta", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 11: 
			canvasContext.fillText( "Newton Verfahren", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 12: 
			canvasContext.fillText( "Regula Falsi", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 13: 
			canvasContext.fillText( "Geradengleichung", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 14: 
			canvasContext.fillText( "Mitternachtsformel", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 15: 
			canvasContext.fillText( "PQ-Formel", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 16: 
			canvasContext.fillText( "Satz von Vieta", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 17: 
			canvasContext.fillText( "Newton Verfahren", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		case 18: 
			canvasContext.fillText( "Regula Falsi", canvas.width-breitePunktAmGraph.width-30, canvas.height-hoeheInfoLeiste-5);
			break;
		}	
	}
};

function textUnausgerechnet(textAktuellerPunktAmGraph,i,funktionAlsVektor){
	for(let j=funktionAlsVektor.length-1;j>=0;j--){
		if(j===0){
			if(funktionAlsVektor[j]===0){
			}else if(funktionAlsVektor[j]<0){
					textAktuellerPunktAmGraph += " "+zahlRunden(funktionAlsVektor[j]);				
			}else if(funktionAlsVektor[j]>0){
				if(textAktuellerPunktAmGraph[textAktuellerPunktAmGraph.length-4]==='='||textAktuellerPunktAmGraph[textAktuellerPunktAmGraph.length-2]==='='||textAktuellerPunktAmGraph.length===0){
					if(funktionAlsVektor[j]===1){
						textAktuellerPunktAmGraph += zahlRunden(punktAmAusgewaehltenGraph.x);
					}else{
						textAktuellerPunktAmGraph += funktionAlsVektor[j] + "*" + zahlRunden(punktAmAusgewaehltenGraph.x);
					}
				}else{
					if(funktionAlsVektor[j]===1){
						textAktuellerPunktAmGraph += " + " + zahlRunden(punktAmAusgewaehltenGraph.x);
					}else{
						textAktuellerPunktAmGraph += " + " + zahlRunden(funktionAlsVektor[j]);
					}
				}
			}					
		}else if(j===1){
			if(funktionAlsVektor[j]===0){
			}else if(funktionAlsVektor[j]<0){
					textAktuellerPunktAmGraph += " "+funktionAlsVektor[j] + "*" + zahlRunden(punktAmAusgewaehltenGraph.x);
			}else if(funktionAlsVektor[j]>0){
				if(textAktuellerPunktAmGraph[textAktuellerPunktAmGraph.length-4]==='='||textAktuellerPunktAmGraph[textAktuellerPunktAmGraph.length-2]==='='||textAktuellerPunktAmGraph.length===0){
					if(funktionAlsVektor[j]===1){
							textAktuellerPunktAmGraph += zahlRunden(punktAmAusgewaehltenGraph.x);
					}else{
						textAktuellerPunktAmGraph += funktionAlsVektor[j] + "*" + zahlRunden(punktAmAusgewaehltenGraph.x);
					}
				}else{
					if(funktionAlsVektor[j]===1){
						textAktuellerPunktAmGraph += " + " + zahlRunden(punktAmAusgewaehltenGraph.x);
					}else{
						textAktuellerPunktAmGraph += " + "+funktionAlsVektor[j] + "*" + zahlRunden(punktAmAusgewaehltenGraph.x);						
					}
				}
			}
		}else{
			if(funktionAlsVektor[j]===0){
			}else if(funktionAlsVektor[j]<0){
				textAktuellerPunktAmGraph += " "+funktionAlsVektor[j] + "*" + zahlRunden(punktAmAusgewaehltenGraph.x) + "^" + j;
			}else if(funktionAlsVektor[j]>0){
				if(textAktuellerPunktAmGraph[textAktuellerPunktAmGraph.length-4]==='='||textAktuellerPunktAmGraph[textAktuellerPunktAmGraph.length-2]==='='||textAktuellerPunktAmGraph.length===0){
					if(funktionAlsVektor[j]===1){
						textAktuellerPunktAmGraph += zahlRunden(punktAmAusgewaehltenGraph.x) + "^" + j;
					}else{
						textAktuellerPunktAmGraph += funktionAlsVektor[j] + "*" + zahlRunden(punktAmAusgewaehltenGraph.x) + "^" + j;
					}
				}else{
					if(funktionAlsVektor[j]===1){
						if(aufgerundet){
							textAktuellerPunktAmGraph += " + " + zahlRunden(punktAmAusgewaehltenGraph.x) + "^" + j;
						}else{
							if(punktAmAusgewaehltenGraph.x<0){
								textAktuellerPunktAmGraph += " " + zahlRunden(punktAmAusgewaehltenGraph.x) + "^" + j;
							}else{
								textAktuellerPunktAmGraph += " + " + zahlRunden(punktAmAusgewaehltenGraph.x) + "^" + j;
							}
						}					
					}else{
						textAktuellerPunktAmGraph += " + "+funktionAlsVektor[j] + "*" + zahlRunden(punktAmAusgewaehltenGraph.x) + "^" + j;
					}

				}
			}
		}
	}
	return textAktuellerPunktAmGraph;
}

function textAusgerechnet(textAktuellerPunktAmGraph,i,funktionAlsVektor){
	for(let j=funktionAlsVektor.length-1;j>=0;j--){
		if(j===0){
			if(funktionAlsVektor[j]===0){
			}else if(funktionAlsVektor[j]<0){
				if(aufgerundet){
					textAktuellerPunktAmGraph += " "+funktionAlsVektor[j];
				}else{
					textAktuellerPunktAmGraph += " "+funktionAlsVektor[j];
				}					
			}else if(funktionAlsVektor[j]>0){
				if(textAktuellerPunktAmGraph[textAktuellerPunktAmGraph.length-4]==='='||textAktuellerPunktAmGraph[textAktuellerPunktAmGraph.length-2]==='='||textAktuellerPunktAmGraph.length===0){
					if(funktionAlsVektor[j]===1){
							textAktuellerPunktAmGraph += zahlRunden(punktAmAusgewaehltenGraph.x);
					}else{
						textAktuellerPunktAmGraph += funktionAlsVektor[j] * zahlRunden(punktAmAusgewaehltenGraph.x);
					}
				}else{
					if(funktionAlsVektor[j]===1){
						textAktuellerPunktAmGraph += " + "+zahlRunden(punktAmAusgewaehltenGraph.x);
					}else{
						if(aufgerundet){
							if(funktionAlsVektor[j]<0){
								textAktuellerPunktAmGraph += funktionAlsVektor[j];
							}else{
								textAktuellerPunktAmGraph += " + "+funktionAlsVektor[j];
							}
							
						}else{
							if(funktionAlsVektor[j]<0){
								textAktuellerPunktAmGraph += funktionAlsVektor[j];
							}else{
								textAktuellerPunktAmGraph += " + "+funktionAlsVektor[j];
							}
						}
					}
				}
			}					
		}else if(j===1){
			if(funktionAlsVektor[j]===0){
			}else if(funktionAlsVektor[j] * punktAmAusgewaehltenGraph.x<0){
				textAktuellerPunktAmGraph += " "+zahlRunden(funktionAlsVektor[j] * punktAmAusgewaehltenGraph.x);
			}else if(funktionAlsVektor[j] * punktAmAusgewaehltenGraph.x>0){
				if(textAktuellerPunktAmGraph[textAktuellerPunktAmGraph.length-4]==='='||textAktuellerPunktAmGraph[textAktuellerPunktAmGraph.length-2]==='='||textAktuellerPunktAmGraph.length===0){
					if(funktionAlsVektor[j]===1){
						textAktuellerPunktAmGraph += zahlRunden(punktAmAusgewaehltenGraph.x);
					}else{
						textAktuellerPunktAmGraph += zahlRunden(funktionAlsVektor[j] * punktAmAusgewaehltenGraph.x);
					}

				}else{
					if(funktionAlsVektor[j]===1){
							textAktuellerPunktAmGraph += " + " + zahlRunden(punktAmAusgewaehltenGraph.x);
					}else{
							textAktuellerPunktAmGraph += " + "+zahlRunden(funktionAlsVektor[j] * punktAmAusgewaehltenGraph.x);		
					}
				}
			}
		}else{
			if(funktionAlsVektor[j]===0){
			}else if(funktionAlsVektor[j]<0){
					textAktuellerPunktAmGraph += " "+zahlRunden(funktionAlsVektor[j] * Math.pow(punktAmAusgewaehltenGraph.x,j));
			}else if(funktionAlsVektor[j]>0){
				if(textAktuellerPunktAmGraph[textAktuellerPunktAmGraph.length-4]==='='||textAktuellerPunktAmGraph[textAktuellerPunktAmGraph.length-2]==='='||textAktuellerPunktAmGraph.length===0){
					if(funktionAlsVektor[j]===1){
						textAktuellerPunktAmGraph += zahlRunden(Math.pow(punktAmAusgewaehltenGraph.x , j));
					}else{
						textAktuellerPunktAmGraph += zahlRunden(funktionAlsVektor[j] * Math.pow(punktAmAusgewaehltenGraph.x,j));
					}
				}else{
					if(funktionAlsVektor[j]===1){
						textAktuellerPunktAmGraph += " + " + zahlRunden(Math.pow(punktAmAusgewaehltenGraph.x ,j));
					}else{
						textAktuellerPunktAmGraph += " + "+zahlRunden(funktionAlsVektor[j] * Math.pow(punktAmAusgewaehltenGraph.x, j));
					}
				}
			}
		}
	}
	return textAktuellerPunktAmGraph;
}

//(x^2+3*x-2)/(x+4)
function reiter1Aktiv(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	WriteText(`b[Zum berechnen eines Punktes] in einem Polynom werden b[alle 'X'] in einem Polynom gegen b[eine Zahl] getauscht. Dann werden z.B. aus    b[f(x)=x+2   =>   f(1)=1+2   =>   f(1)=3]`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	WriteText(`b[Der Wert der für X eingesetzt wird entspricht dem Wert X-Achse. Der errechnete Wert entspricht dabei dem Wert auf der Y-Achse.] Daher wird auch b[manchal statt f(x)=x+2 y=x+2 geschieben. Beides bedeutet das selbe.]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	WriteText(`Fahre mit der Maus über den Graph und du kannst die Rechnung sehen wie der Punkt berechnet wird.`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	
	if(funktionenListe[i].inhaltKnotenSymbol!="/"){
		let textAktuellerPunktAmGraph = "";
		textAktuellerPunktAmGraph = `${buchstabenArray[i]}(${zahlRunden(punktAmAusgewaehltenGraph.x)})   =   `;

		canvasContext.font = fontSchriftInfoLeiste;
		canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.textAlign = "left";
		
		textAktuellerPunktAmGraph = funktionenListe[i].inhaltKnotenText.replace('x',punktAmAusgewaehltenGraph.x.toFixed(2));

//		textAktuellerPunktAmGraph = textUnausgerechnet(textAktuellerPunktAmGraph,i,funktionenListe[i].inhaltKnotenVektor) + `   =   `; //todo gebrochenrational braucht diese Methode seperat
		textAktuellerPunktAmGraph = textAusgerechnet(textAktuellerPunktAmGraph,i,funktionenListe[i].inhaltKnotenVektor);
		
		WriteText(`b[${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}   =   ${textAktuellerPunktAmGraph}   =   ${zahlRunden(-punktAmAusgewaehltenGraph.y)}   ==>   x=${zahlRunden(punktAmAusgewaehltenGraph.x)}   y=${zahlRunden(-punktAmAusgewaehltenGraph.y)}]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	}else{
		let textAktuellerPunktAmGraph = "";
		textAktuellerPunktAmGraph = `${buchstabenArray[i]}(${zahlRunden(punktAmAusgewaehltenGraph.x)})   =   `;

		canvasContext.font = fontSchriftInfoLeiste;
		canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.textAlign = "left";
		
		let textAktuellerPunktAmGraphZaehlerU = "";
		let textAktuellerPunktAmGraphNennerU = "";
		let textAktuellerPunktAmGraphZaehlerA = "";
		let textAktuellerPunktAmGraphNennerA = "";

		textAktuellerPunktAmGraphZaehlerU = textUnausgerechnet(textAktuellerPunktAmGraphZaehlerU,i,funktionenListe[i].linkesChild.inhaltKnotenVektor); //todo gebrochenrational braucht diese Methode seperat
		textAktuellerPunktAmGraphNennerU = textUnausgerechnet(textAktuellerPunktAmGraphNennerU,i,funktionenListe[i].rechtesChild.inhaltKnotenVektor); //todo gebrochenrational braucht diese Methode seperat
		textAktuellerPunktAmGraphZaehlerA = textAusgerechnet(textAktuellerPunktAmGraphZaehlerA,i,funktionenListe[i].linkesChild.inhaltKnotenVektor);
		textAktuellerPunktAmGraphNennerA = textAusgerechnet(textAktuellerPunktAmGraphNennerA,i,funktionenListe[i].rechtesChild.inhaltKnotenVektor);
		let textPosition=0;
		textPosition = 10 + WriteText(`${buchstabenArray[i]}(x) = `, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(`${funktionenListe[i].inhaltKnotenString}`, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(`   =   `, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		textPosition += WriteText(`${textAktuellerPunktAmGraphZaehlerU}/${textAktuellerPunktAmGraphNennerU}`, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(`   =   `, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		textPosition += WriteText(`${textAktuellerPunktAmGraphZaehlerA}/${textAktuellerPunktAmGraphNennerA}`, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		textPosition += WriteText(`   =   ${zahlRunden(-punktAmAusgewaehltenGraph.y)}   ==>   x=${zahlRunden(punktAmAusgewaehltenGraph.x)}   y=${zahlRunden(-punktAmAusgewaehltenGraph.y)}`, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
}

}

function reiter2Aktiv(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();


	

	let textPositionErsteZeile = 10 + WriteText(`Um die `, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(`Steigung`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(` an einem bestimmten Punkt eines Polynoms berechnen zu können, benötigt man die `, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(`Ableitung`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(`. Die Ableitung für ein ganzrationales Polynom wird folgendermaßen berechnet: `, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(`f(x)=x^n   =>   f'(x)=n*x^n-1`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
	WriteText(`Es wird für jedes X in dem Polynom der Exponent um 1 dekrementiert (minus 1) und was vorher der Exponent war, wird mit Mal vor das X geschrieben. Bei X ohne Exponent wird das X wegelassen und was mit mal vor dem X stand bleibt.`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	let textPositionDritteZeile = 10 + WriteText(`Zahlen ohne X werden ganz weggelassen. Z.B. wird aus   `, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	textPositionDritteZeile += WriteText(`x^2-2*x+2 => 2*x-2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
	textPositionDritteZeile += WriteText(`.  Aus x^2 wird 2*x (Exponent wird vor das X geschrieben und Exponent selbst wird 1 abgezogen), aus X wird -2 und die 2 wird weggelassen.`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	let textAktuellerPunktAmGraph =`b[${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}   =>   ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    `;
	let textAbleitung = `${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    =    `;

	textAbleitung += `    ` + funktionenListe[i].ersteAbleitung.inhaltKnotenString.replace('x',punktAmAusgewaehltenGraph.x.toFixed(2));

	//textAbleitung = `    ` + textUnausgerechnet(textAbleitung,i,funktionenListe[i].ersteAbleitung.inhaltKnotenVektor);
	
	if(aufgerundet){
		textAktuellerPunktAmGraph += `${buchstabenArray[i]}(${punktAmAusgewaehltenGraph.x}) = `;
		textAbleitung += ` =    ${steigungTangente}    ==>    Steigung    =    m    =    ${steigungTangente}]`;
	}else{
		textAktuellerPunktAmGraph += `${buchstabenArray[i]}(${punktAmAusgewaehltenGraph.x.toFixed(2)}) = `;	
		textAbleitung += ` =    ${steigungTangente.toFixed(2)}    ==>    Steigung    =    m    =    ${steigungTangente.toFixed(2)}]`;
	}
	
	WriteText(textAktuellerPunktAmGraph+textAbleitung, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
}



function reiter3Aktiv(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	let textAktuellerPunktAmGraph ="";
	if(aufgerundet){
		textAktuellerPunktAmGraph = `${buchstabenArray[i]}(${punktAmAusgewaehltenGraph.x}) = `;
	}else{
		textAktuellerPunktAmGraph = `${buchstabenArray[i]}(${punktAmAusgewaehltenGraph.x.toFixed(2)}) = `;	
	}
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";

	textAktuellerPunktAmGraph += funktionenListe[i].inhaltKnotenText.replace('x',punktAmAusgewaehltenGraph.x.toFixed(2));
	//textAktuellerPunktAmGraph = textUnausgerechnet(textAktuellerPunktAmGraph,i,funktionenListe[i].inhaltKnotenVektor);
	
	let textAbleitung = `${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString} = `;
	textAbleitung += " " + funktionenListe[i].ersteAbleitung.inhaltKnotenString.replace('x',punktAmAusgewaehltenGraph.x.toFixed(2));
	//textAbleitung = " " + textUnausgerechnet(textAbleitung,i,funktionenListe[i].ersteAbleitung.inhaltKnotenVektor);
	let hoeheTangente=0;
	let textGeradengleichung = "";
	if(aufgerundet){
		textAbleitung += ` = ${steigungTangente} ==> Steigung = m = ${steigungTangente}`;
		hoeheTangente = -(steigungTangente*punktAmAusgewaehltenGraph.x-(-punktAmAusgewaehltenGraph.y));
		textGeradengleichung = `3.) In Geradengleichung einsetzen => b[y=m*x+c => `
			+`${(-punktAmAusgewaehltenGraph.y)}=${steigungTangente}*${punktAmAusgewaehltenGraph.x}+c ==> ` +
					`nach c umstellen c=y-(m*x) = ${(-punktAmAusgewaehltenGraph.y)} -(${steigungTangente}*${punktAmAusgewaehltenGraph.x}) =>` + 
							`c=${hoeheTangente}]`;
		
	}else{
		textAbleitung += ` = ${steigungTangente.toFixed(2)} ==> Steigung = m = ${steigungTangente.toFixed(2)}`;
		hoeheTangente = -(steigungTangente*punktAmAusgewaehltenGraph.x-(-punktAmAusgewaehltenGraph.y)).toFixed(2);
		textGeradengleichung = `3.) In Geradengleichung einsetzen => b[y=m*x+c => `
			+`${(-punktAmAusgewaehltenGraph.y).toFixed(2)}=${steigungTangente.toFixed(2)}*${punktAmAusgewaehltenGraph.x.toFixed(2)}+c ==> ` +
					`nach c umstellen c=y-(m*x) = ${(-punktAmAusgewaehltenGraph.y.toFixed(2))} -(${steigungTangente.toFixed(2)}*${punktAmAusgewaehltenGraph.x.toFixed(2)}) =>` + 
							`c=${hoeheTangente.toFixed(2)}]`;		
	}
	

	WriteText(`Eine b[Tangente] ist eine Gerade, die den Graphen eines Polynoms, b[an einem Punkt berührt] ihn jedoch b[nicht Schneidet]. Zum Berechnen der b[Tangente] sind folgende b[3 Schritte notwendig]:`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	
	if(aufgerundet){
		WriteText(`1.) Punkt am Graph berechnen durch einsetzen des X-Wertes: b[${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString} = ${textAktuellerPunktAmGraph} = ${(-punktAmAusgewaehltenGraph.y)} ==> x=${(punktAmAusgewaehltenGraph.x)} y=${(-punktAmAusgewaehltenGraph.y)}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText(`2.) Steigung berechnen durch einsetzen in die Ableitung: b[${textAbleitung}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText(textGeradengleichung, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	}else{
		WriteText(`1.) Punkt am Graph berechnen durch einsetzen des X-Wertes: b[${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString} = ${textAktuellerPunktAmGraph} = ${(-punktAmAusgewaehltenGraph.y.toFixed(4))} ==> x=${(punktAmAusgewaehltenGraph.x.toFixed(2))} y=${(-punktAmAusgewaehltenGraph.y.toFixed(4))}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText(`2.) Steigung berechnen durch einsetzen in die Ableitung: b[${textAbleitung}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText(textGeradengleichung, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	}
}

function reiter4Aktiv(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	
	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	let textAktuellerPunktAmGraph ="";
	if(aufgerundet){
		textAktuellerPunktAmGraph = `${buchstabenArray[i]}(${punktAmAusgewaehltenGraph.x}) = `;
	}else{
		textAktuellerPunktAmGraph = `${buchstabenArray[i]}(${punktAmAusgewaehltenGraph.x.toFixed(2)}) = `;	
	}
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";

	textAktuellerPunktAmGraph += funktionenListe[i].inhaltKnotenText.replace('x',punktAmAusgewaehltenGraph.x.toFixed(2));
	//textAktuellerPunktAmGraph = textUnausgerechnet(textAktuellerPunktAmGraph,i,funktionenListe[i].inhaltKnotenVektor);
	
	let textAbleitung = `${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString} = `;
	
	textAbleitung += ` ` + funktionenListe[i].ersteAbleitung.inhaltKnotenString.replace('x',punktAmAusgewaehltenGraph.x.toFixed(2));
	//textAbleitung = ` ` + textUnausgerechnet(textAbleitung,i,funktionenListe[i].ersteAbleitung.inhaltKnotenVektor);
	let hoeheTangente=0;
	let textGeradengleichung = "";
	if(aufgerundet){
		textAbleitung += ` = ${steigungTangente} ==> Steigung = m = ${steigungTangente}`;
		if(steigungTangente!=0){
			hoeheTangente = -((-(1/steigungTangente))*punktAmAusgewaehltenGraph.x-(-punktAmAusgewaehltenGraph.y));
		}else{
			hoeheTangente = 0;
		}
		
		textGeradengleichung1 = `3.) In Geradengleichung einsetzen => y=(- `;
		textGeradengleichung2 = `1/m`;
		textGeradengleichung3 =	`)*x+c => ${(-punktAmAusgewaehltenGraph.y)}=${steigungTangente}*${punktAmAusgewaehltenGraph.x}+c ==> nach c umstellen c=y-((- `;
		textGeradengleichung4 = `1/m`;
		textGeradengleichung5 =	`)*x) = ${(-punktAmAusgewaehltenGraph.y)}-((- `;
		textGeradengleichung6 =	`1/${steigungTangente}`;
		textGeradengleichung7 =	`)*${punktAmAusgewaehltenGraph.x}) => c= ${hoeheTangente}`;			
	}else{
		textAbleitung += ` = ${steigungTangente.toFixed(2)} ==> Steigung = m = ${steigungTangente.toFixed(2)}`;
		if(steigungTangente!=0){
			hoeheTangente = -(-(1/steigungTangente)*punktAmAusgewaehltenGraph.x-(-punktAmAusgewaehltenGraph.y)).toFixed(2);
		}else{
			hoeheTangente = 0;
		}
		textGeradengleichung1 = `3.) In Geradengleichung einsetzen => y=(- `;
		textGeradengleichung2 = `1/m`;
		textGeradengleichung3 =	`)*x+c => ${(-punktAmAusgewaehltenGraph.y).toFixed(2)}=${steigungTangente.toFixed(2)}*${punktAmAusgewaehltenGraph.x.toFixed(2)}+c ==> nach c umstellen c=y-((- `;
		textGeradengleichung4 = `1/m`;
		textGeradengleichung5 = `)*x) = ${(-punktAmAusgewaehltenGraph.y).toFixed(2)}-((- `;
		textGeradengleichung6 = `1/${steigungTangente.toFixed(2)}`;
		textGeradengleichung7 = `)*${punktAmAusgewaehltenGraph.x.toFixed(2)}) => c=${hoeheTangente.toFixed(2)}`;			
	}
	
	WriteText(`Eine b[Normale] ist eine Gerade, die den Graphen eines Polynoms, b[an einem Punkt senkrecht schneidet] Sie liegt senkrecht auf der Tangente. Zum Berechnen der b[Normale] sind bis auf die Steigung die gleichen b[3 Schritte notwendig] als bei der Tangente:`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	if(aufgerundet){
		canvasContext.fillText(`1.) Punkt am Graph ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString} = ${textAktuellerPunktAmGraph} = ${(-punktAmAusgewaehltenGraph.y)} ==> x=${(punktAmAusgewaehltenGraph.x)} y=${(-punktAmAusgewaehltenGraph.y)}`, 10, hoeheZweiteZeile);
		canvasContext.fillText(`2.) Steigung durch einsetzen in Ableitung ${textAbleitung}`, 10, hoeheDritteZeile);
		
		let textPosition = WriteText(textGeradengleichung1, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste)+10;
		textPosition += WriteText(textGeradengleichung2, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(textGeradengleichung3, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(textGeradengleichung4, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(textGeradengleichung5, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(textGeradengleichung6, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(textGeradengleichung7, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		
		
		//canvasContext.fillText(textGeradengleichung, 10, canvas.height-30);
	}else{
		canvasContext.fillText(`1.) Punkt am Graph ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString} = ${textAktuellerPunktAmGraph} = ${(-punktAmAusgewaehltenGraph.y.toFixed(4))} ==> x=${(punktAmAusgewaehltenGraph.x.toFixed(2))} y=${(-punktAmAusgewaehltenGraph.y.toFixed(4))}`, 10, hoeheZweiteZeile);
		canvasContext.fillText(`2.) Steigung durch einsetzen in Ableitung ${textAbleitung}`, 10, hoeheDritteZeile);
		
		let textPosition = WriteText(textGeradengleichung1, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste)+10;
		textPosition += WriteText(textGeradengleichung2, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(textGeradengleichung3, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(textGeradengleichung4, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(textGeradengleichung5, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(textGeradengleichung6, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPosition += WriteText(textGeradengleichung7, textPosition, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
	}
}

function reiter5Aktiv(i){
	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	let hoeheErsteZeile = canvas.height-120;
	let hoeheZweiteZeile = canvas.height-75;
	let hoeheDritteZeile = canvas.height-30;
	

	let textPositionErsteZeile = WriteText("1.) Radius = ", 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste)+10;
	textPositionErsteZeile += WriteText("[1 + (y')²]    /y''", textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	let laengeDreiHalbe = canvasContext.measureText("    ");
	canvasContext.font = '12px Calibri';
	canvasContext.fillText("3/2", textPositionErsteZeile-17, hoeheErsteZeile-15);
	canvasContext.font = fontSchriftInfoLeiste;

	let textPositionZweiteZeile = WriteText("2.) x-Kreis = x - y' * ", 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste)+10;
	textPositionZweiteZeile += WriteText("1 + (y')²/y''", textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	let textPositionDritteZeile = WriteText("3.) y-Kreis = y + ", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste)+10;
	textPositionDritteZeile += WriteText("1 + (y')²/y''", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	let abstandZurFormel = 30;
	
	textPositionErsteZeile = 250 + WriteText(`y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}`, 250, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	textPositionZweiteZeile = 250 + WriteText(`y' = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}`, 250, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	textPositionDritteZeile = 250 + WriteText(`y'' = ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}`, 250, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);


	let textAktuellerPunktAmGraph = "";
	if(aufgerundet){
		textPositionErsteZeile += WriteText(` = ${buchstabenArray[i]}(${punktAmAusgewaehltenGraph.x}) ${textAusgerechnet(textAktuellerPunktAmGraph,i,funktionenListe[i].inhaltKnotenVektor)} = ${(-punktAmAusgewaehltenGraph.y)}`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(` = ${buchstabenArray[i]}'(${punktAmAusgewaehltenGraph.x}) ${textAusgerechnet(textAktuellerPunktAmGraph,i,funktionenListe[i].ersteAbleitung.inhaltKnotenVektor)} = ${yfStrich}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(` = ${buchstabenArray[i]}''(${punktAmAusgewaehltenGraph.x}) ${textAusgerechnet(textAktuellerPunktAmGraph,i,funktionenListe[i].zweiteAbleitung.inhaltKnotenVektor)} = ${yfZweiStrich}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		
		textPositionErsteZeile = canvas.width/2 + WriteText("Radius = ", canvas.width/2, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste)+10;
		textPositionErsteZeile += WriteText(`[1 + (${yfStrich})²]    /${yfZweiStrich}`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);


		canvasContext.font = '12px Calibri';
		canvasContext.fillText("3/2", textPositionErsteZeile-17, hoeheErsteZeile-15);
		canvasContext.font = fontSchriftInfoLeiste;
		

		textPositionErsteZeile += WriteText(` = ${radiusKruemmung.toFixed(2)}`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		if(yfStrich<0){
			textPositionZweiteZeile = (canvas.width/2) + WriteText(`x-Kreis = ${punktAmAusgewaehltenGraph.x} - ( ${yfStrich}) * `, canvas.width/2, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionZweiteZeile = (canvas.width/2) + WriteText(`x-Kreis = ${punktAmAusgewaehltenGraph.x} - ${yfStrich} * `, canvas.width/2, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
		textPositionZweiteZeile += WriteText(`1 + (${yfStrich})²/${yfZweiStrich}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(` = ${xKreisKruemmung.toFixed(2)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		textPositionDritteZeile = (canvas.width/2) + WriteText(`y-Kreis = ${yf} + `, canvas.width/2, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`1 + (${yfStrich})²/${yfZweiStrich}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(` = ${yKreisKruemmung.toFixed(2)}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		//todo klammern korrigieren (vorzeichen)
		
	}else{
		textPositionErsteZeile += WriteText(` = ${buchstabenArray[i]}(${punktAmAusgewaehltenGraph.x.toFixed(2)}) ${textAusgerechnet(textAktuellerPunktAmGraph,i,funktionenListe[i].inhaltKnotenVektor)} = ${(-punktAmAusgewaehltenGraph.y).toFixed(2)}`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(` = ${buchstabenArray[i]}'(${punktAmAusgewaehltenGraph.x.toFixed(2)}) ${textAusgerechnet(textAktuellerPunktAmGraph,i,funktionenListe[i].ersteAbleitung.inhaltKnotenVektor)} = ${yfStrich.toFixed(2)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(` = ${buchstabenArray[i]}''(${punktAmAusgewaehltenGraph.x.toFixed(2)}) ${textAusgerechnet(textAktuellerPunktAmGraph,i,funktionenListe[i].zweiteAbleitung.inhaltKnotenVektor)} = ${yfZweiStrich.toFixed(2)}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);


		textPositionErsteZeile = canvas.width/2 + WriteText(`Radius = `, canvas.width/2, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionErsteZeile += WriteText(`[1 + (${yfStrich.toFixed(2)})²]    /${yfZweiStrich.toFixed(2)}`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
		canvasContext.font = '12px Calibri';
		canvasContext.fillText("3/2", textPositionErsteZeile-17, hoeheErsteZeile-15);
		canvasContext.font = fontSchriftInfoLeiste;
		textPositionErsteZeile += WriteText(` = ${radiusKruemmung.toFixed(2)}`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		

		if(yfStrich<0){
			textPositionZweiteZeile = canvas.width/2 + WriteText(`x-Kreis = ${punktAmAusgewaehltenGraph.x.toFixed(2)} - ( ${yfStrich.toFixed(2)}) * `, canvas.width/2, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionZweiteZeile = canvas.width/2 + WriteText(`x-Kreis = ${punktAmAusgewaehltenGraph.x.toFixed(2)} - ${yfStrich.toFixed(2)} * `, canvas.width/2, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
		
		textPositionZweiteZeile += WriteText(`1 + (${yfStrich.toFixed(2)})²/${yfZweiStrich.toFixed(2)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(` = ${xKreisKruemmung.toFixed(2)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
		textPositionDritteZeile = canvas.width/2 + WriteText(`y-Kreis = ${yf.toFixed(2)} + `, canvas.width/2, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`1 + (${yfStrich.toFixed(2)})²/${yfZweiStrich.toFixed(2)}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(` = ${yKreisKruemmung.toFixed(2)}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	}
}

let hoeheWurzelZeichen1Schriftgroesse35 = 25;
let hoeheWurzelZeichen2Schriftgroesse35 = 15;
let hoeheWurzelZeichen1Schriftgroesse20 = 17;
let hoeheWurzelZeichen2Schriftgroesse20 = 12;
let hoeheWurzelZeichen1Schriftgroesse15 = 22;
let hoeheWurzelZeichen2Schriftgroesse15 = 18;




function reiter61GeradengleichungNullstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-95;
	let hoeheDritteZeile = canvas.height-65;

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	WriteText(`Wenn das Polynom b[ersten Grades] ist, handelt es sich um eine b[Gerade]. Die b[Nullstellen] einer b[Gerade] können durch b[y = 0 setzen] und b[nach x auflösen] bestimmt werden.`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	
	let polynom = getAB(funktionenListe[i]);
	let potenz = getHoechstePotenzV2(funktionenListe[i]);
	
	if(potenz===1){
		if((-polynom.b)<0){
			if(Math.abs((-polynom.b))>1){
				WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}    ==>    0 = ${funktionenListe[i].inhaltKnotenString}    ==>    ${(-polynom.a)}x = ${polynom.b}    ==>    x = ${(-polynom.b)/polynom.a}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}else if(Math.abs((-polynom.b))===1){
				WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}    ==>    0 = ${funktionenListe[i].inhaltKnotenString}    ==>    -x = ${polynom.b}    ==>    x = ${(-polynom.b)/polynom.a}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}

		}else{
			if(Math.abs((-polynom.b))>1){
				WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}    ==>    0 = ${funktionenListe[i].inhaltKnotenString}    ==>    ${(-polynom.a)}x = ${polynom.b}    ==>    x = ${(-polynom.b)/polynom.a}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}else if(Math.abs((-polynom.b))===1){
				WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}    ==>    0 = ${funktionenListe[i].inhaltKnotenString}    ==>    x = ${polynom.b}`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}else if(Math.abs((-polynom.b))===0){
				WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}    ==>    0 = ${funktionenListe[i].inhaltKnotenString}    ==>    x = 0]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}
		}
	}else if(potenz===2){
		WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist 2ten Grades. Die Nullstellen können bei diesem Polynom mithilfe der Mitternachtsformel oder PQ-Formel berechnet werden.]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	}else if(potenz>2){
		WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist höher als 2ten Grades. Die Nullstellen können bei diesem Polynom nur näherungsweise mithilfe des Newton Verfahren oder Regula Falsi berechnet werden.]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	}else if(potenz===1){
		if(polynom.b!=0){
			WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist 1ten Grades. Die Gerade ist parallel zu X-Achse und besitzt keine Nullstelle.]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		}else if(polynom.b!=0){
			WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist 1ten Grades. Die Gerade sitzt genau auf der X-Achse und besitzt unendlich viele Nullstellen.]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		}
		
	}
}

function reiter62MitternachtsformelNullstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-95;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheWurzelZeichen1Schriftgroesse15 = 22;
	let hoeheWurzelZeichen2Schriftgroesse15 = 18;

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	WriteText(`Mit hilfe der b[Mitternachts- oder auch a-b-c Formel] können die b[Nullstellen] eines Polynoms berechnet werden. Sie funktioniert nur bei b[Polynomen 2-ten Grades]. Das Polynom muss also die Form b[ax^2+bx+c] haben.`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	
	let polynomMitHoch2 = new Polynom();
	let polynomMitHoch1 = new Polynom();
	let polynomMitHoch0 = new Polynom();
	
	let aktuellerKnoten = funktionenListe[i];
//	while(aktuellerKnoten.rechtesChild!=null){
//		if(aktuellerKnoten.linkesChild!=null){
//			if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom!=null){
//				if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom.potenz===2){
//					polynomMitHoch2 = aktuellerKnoten.linkesChild.inhaltKnotenPolynom; 
//				}else if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom.potenz===1){
//					polynomMitHoch1 = aktuellerKnoten.linkesChild.inhaltKnotenPolynom; 
//				}else if(aktuellerKnoten.linkesChild.inhaltKnotenPolynom.potenz===0){
//					polynomMitHoch0 = aktuellerKnoten.linkesChild.inhaltKnotenPolynom; 
//				}
//			}			
//		}
//		if(aktuellerKnoten.rechtesChild!=null){
//			if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz===2){
//				polynomMitHoch2 = aktuellerKnoten.rechtesChild.inhaltKnotenPolynom; 
//			}else if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz===1){
//				polynomMitHoch1 = aktuellerKnoten.rechtesChild.inhaltKnotenPolynom; 
//			}else if(aktuellerKnoten.rechtesChild.inhaltKnotenPolynom.potenz===0){
//				polynomMitHoch0 = aktuellerKnoten.rechtesChild.inhaltKnotenPolynom; 
//			}
//		}
//	}
	let a=0,b=0,c=0;
	
	let polynom = getABC(funktionenListe[i]);
	a=polynom.a;
	b=polynom.b;
	c=polynom.c;
	let potenz = getHoechstePotenzV2(funktionenListe[i]);
	
	if(potenz===2){
		let textPositionZweiteZeile = 10 + WriteText(`x`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(`1,2`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '9px Calibri');
		textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		let laengeBisWurzel = canvasContext.measureText("-b \xB1 \u221A").width + textPositionZweiteZeile;
		textPositionZweiteZeile += WriteText(`-b \xB1 \u221A b²-4ac/2a`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
				
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel, hoeheZweiteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheZweiteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheZweiteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( laengeBisWurzel-1, hoeheZweiteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( textPositionZweiteZeile, hoeheZweiteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheZweiteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		
		textPositionZweiteZeile += 30 + WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}]`, textPositionZweiteZeile+30, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += 30 + WriteText(`b[a = ${a} b = ${b} c = ${c}]`, textPositionZweiteZeile + 30, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
				
		let textPositionDritteZeile = 10 + WriteText(`x`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`1,2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionDritteZeile += WriteText(` = `, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		laengeBisWurzel = canvasContext.measureText("-b \xB1 \u221A").width + textPositionDritteZeile;
		
		if((4*a*c)<0){
			textPositionDritteZeile += WriteText(`${(-b)} \xB1 \u221A ${Math.pow(b,2)}-( ${4*a*c})/2*${b}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionDritteZeile += WriteText(`${(-b)} \xB1 \u221A ${Math.pow(b,2)}-${4*a*c}/2*${b}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( textPositionDritteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		
		textPositionDritteZeile += WriteText(`   =   `, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		laengeBisWurzel = canvasContext.measureText(`${(-b)} \xB1 \u221A`).width + textPositionDritteZeile;
		textPositionDritteZeile += WriteText(`${(-b)} \xB1 \u221A ${(Math.pow(b,2) - (4*a*c))}/${2*a}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( textPositionDritteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
	
		
		
		let minusB = (-b);
		let BQuadrat = Math.pow(b,2);
		let VierAC = (4*a*c);
		let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
		let zweiMalA = 2*a;
		
		if(BQuadrat-VierAC>=0){
			
			textPositionDritteZeile += WriteText(`   =   `, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionDritteZeile += WriteText(`${minusB} \xB1 ${wurzelBQuadratMinus4AC.toFixed(2)}/${zweiMalA}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
			let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;

			textPositionDritteZeile += WriteText(`   =>  b[ x1 = ${x1.toFixed(2)}   x2 = ${x2.toFixed(2)}]`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
		}else{
			textPositionDritteZeile += WriteText(`   =>   b[Wenn die Wurzel negativ wird, gibt es keine Lösung. Keine lösung bedeutet das Polynom hat keine Nullstellen.]`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
	if(funktionenListe[i].inhaltKnotenVektor.length===2){	
		WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist ersten Grades. Die Nullstellen können mit bei diesem Polynom hilfe der Geradengleichung errechnet werden.]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	}else if(funktionenListe[i].inhaltKnotenVektor.length>3){
		WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist höher als 2ten Grades. Die Nullstellen können bei diesem Polynom nur näherungsweise mithilfe des Newton Verfahren oder Regula Falsi berechnet werden.]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	}
	}
}

function reiter63PQFormelNullstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-30;
	
	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	WriteText(`Mit hilfe der b[PQ-Formel] können die b[Nullstellen] eines Polynoms berechnet werden. Sie funktioniert nur bei b[Polynomen 2-ten Grades]. Das Polynom muss also die Form b[x^2+px+q] haben.`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	let a=0,b=0,c=0;
	
	let polynom = getABC(funktionenListe[i]);
	a=polynom.a;
	b=polynom.b;
	c=polynom.c;
	let potenz = getHoechstePotenzV2(funktionenListe[i]);
	
	if(potenz===2){
        
        
	
		
		let textPositionZweiteZeile = 10 + WriteText("x", 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText("1,2", textPositionZweiteZeile ,hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionZweiteZeile += WriteText(" = - ", textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText("p/2", textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(" \xB1 ", textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		canvasContext.font = '35px Calibri';
		let laengeTextWurzel = canvasContext.measureText("\u221A").width+textPositionZweiteZeile;
		textPositionZweiteZeile += WriteText("\u221A(", textPositionZweiteZeile, hoeheZweiteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');
		textPositionZweiteZeile += WriteText("p/2", textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(")", textPositionZweiteZeile , hoeheZweiteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');
		textPositionZweiteZeile += WriteText("²", textPositionZweiteZeile  , hoeheZweiteZeile-5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(" -q", textPositionZweiteZeile  , hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
		let alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheZweiteZeile-25);
		canvasContext.lineTo( textPositionZweiteZeile , hoeheZweiteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel , hoeheZweiteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheZweiteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		textPositionZweiteZeile += 30 + WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}]`,textPositionZweiteZeile + 30 , hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += 30 + WriteText(`b[a = ${a} p = ${b} q = ${c}]`,textPositionZweiteZeile + 30, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		

		if(a!=1){
			textPositionZweiteZeile += 30 + WriteText(` Der Koeffizient von x^2 muss 1 sein, dafür alles geteilt durch a. Allgemein also `,30 + textPositionZweiteZeile,hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

			
			textPositionZweiteZeile += WriteText(`ax²/a`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(` + `, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`px/a`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(` + `, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`q/a`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

			textPositionZweiteZeile += 10 + WriteText(` => `, textPositionZweiteZeile + 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`${a}x^2/${a}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);			
			textPositionZweiteZeile += WriteText(`${b}x/${a}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`${c}/${a}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);		
			textPositionZweiteZeile += WriteText(` => x^2`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);	
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	
			if(b/a>=0){
				textPositionZweiteZeile += WriteText(`${(b/a).toFixed(2)}x`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionZweiteZeile += WriteText(`(${(b/a).toFixed(2)}x)`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			if(c/a>=0){
				textPositionZweiteZeile += WriteText(`${(c/a).toFixed(2)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionZweiteZeile += WriteText(`(${(c/a).toFixed(2)})`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}
			
		}
		
		let p = b/a;
		let q = c/a;
		
		
		let textPositionDritteZeile = 10 + WriteText("x", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("1,2", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionDritteZeile += WriteText(" = - ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`${p.toFixed(2)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		canvasContext.font = '35px Calibri';
		laengeTextWurzel = canvasContext.measureText("\u221A").width+textPositionDritteZeile;
		textPositionDritteZeile += WriteText("\u221A(", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');	
		textPositionDritteZeile += WriteText(`${p.toFixed(2)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(")", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');
		textPositionDritteZeile += WriteText("²",  textPositionDritteZeile, hoeheDritteZeile-5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);	
		if(c>=0){
			textPositionDritteZeile += WriteText(` -${q.toFixed(2)}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionDritteZeile += WriteText(` -(${q.toFixed(2)})`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		}

		
		alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel, hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		
		textPositionDritteZeile += 10 + WriteText(" = - ", 10 + textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`${p.toFixed(2)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("\u221A", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');	
		laengeTextWurzel = textPositionDritteZeile;
		textPositionDritteZeile += WriteText(`${Math.pow(p/2,2).toFixed(2)}`,textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		if(funktionenListe[i].inhaltKnotenVektor[0]>=0){
			textPositionDritteZeile += WriteText(` -${q.toFixed(2)}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionDritteZeile += WriteText(` +${(-q.toFixed(2))}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		}

		
		alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		
		let unterWurzel = Math.pow(p/2,2)-q;
		
		textPositionDritteZeile += 10 + WriteText(" = - ", textPositionDritteZeile + 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`${p.toFixed(2)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("\u221A", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');	
		laengeTextWurzel = textPositionDritteZeile;
		textPositionDritteZeile += WriteText(`${unterWurzel.toFixed(2)}`,textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		
		alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		if(unterWurzel>=0){
			let wurzelAusgerechnet = Math.sqrt(Math.pow(p/2,2)-q);

			textPositionDritteZeile += 10 + WriteText(" = - ", textPositionDritteZeile + 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionDritteZeile += WriteText(`${p.toFixed(2)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

			textPositionDritteZeile += WriteText(`${wurzelAusgerechnet.toFixed(2)}`,textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			let x1 = -p/2+wurzelAusgerechnet;
			let x2 = -p/2-wurzelAusgerechnet;
			
			textPositionDritteZeile += 10 + WriteText(` => b[x1=${x1.toFixed(2)} x2=${x2.toFixed(2)}]`, textPositionDritteZeile+10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		}else{
			textPositionDritteZeile += WriteText(" => Wenn die Wurzel negativ wird, gibt es keine Lösung. Keine lösung bedeutet das Polynom hat keine Nullstellen.", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
		}
	}else{
		WriteText(`y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText("Die angegebene Funktion hat leider nicht die passende Form...", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		return;
	}
}

function reiter64SatzVonVietaNullstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-50;
	let hoeheVierteZeile = canvas.height-15;
	
	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	let textPositionErsteZeile = 10 + WriteText(`Mit hilfe des `, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(`Satzes von Vieta`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(` können die `, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(`Nullstellen`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(` eines Polynoms berechnet werden. Sie funktioniert nur bei Polynomen `, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(`2-ten Grades`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(` und eignet sich nur für `, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(`ganzzahlige Nullstellen`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(`. Das Polynom muss also die Form `, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(`x^2+px+q`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
	textPositionErsteZeile += WriteText(` haben.`, textPositionErsteZeile, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	
	let polynom = getABC(funktionenListe[i]);
	let potenz = getHoechstePotenzV2(funktionenListe[i]);
	
	if(potenz===2){
		let textPositionZweiteZeile = 10 + WriteText(`Das Polynom wird wie bei der PQ-Formel in die `, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(`Normalform`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(` gebracht. Es muss also die Form `, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(`ax^2+px+q`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(` haben wobei `, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(`a=1`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(` sein muss. Das eingegebene Polynom lautet: `, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(`${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
		let textPositionDritteZeile = 0;
		if(polynom.b/polynom.a<0){
			if(polynom.c/polynom.a<0){
				textPositionDritteZeile += 10 + WriteText(`In Normalform gebracht lautet es: `, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
				textPositionDritteZeile += WriteText(`${buchstabenArray[i]}(x) = x^2${polynom.b/polynom.a}${polynom.c/polynom.a}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
			}else{
				textPositionDritteZeile += 10 + WriteText(`In Normalform gebracht lautet es: `, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
				textPositionDritteZeile += WriteText(`${buchstabenArray[i]}(x) = x^2${polynom.b/polynom.a}+${polynom.c/polynom.a}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
			}	
		}else{
			if(polynom.c/polynom.a<0){
				textPositionDritteZeile += 10 + WriteText(`In Normalform gebracht lautet es: `, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
				textPositionDritteZeile += WriteText(`${buchstabenArray[i]}(x) = x^2+${polynom.b/polynom.a}${polynom.c/polynom.a}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
			}else{
				textPositionDritteZeile += 10 + WriteText(`In Normalform gebracht lautet es: `, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
				textPositionDritteZeile += WriteText(`${buchstabenArray[i]}(x) = x^2+${polynom.b/polynom.a}+${polynom.c/polynom.a}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
			}	
		}
		textPositionDritteZeile += 10 + WriteText(`Es muss nun `, textPositionDritteZeile + 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`p = -(x1+x2) und q = x1*x2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(` gelten. `, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`Um auf die Nullstellen zu kommen, muss eine Kombination von x1 und x2 gefunden werden, für die beide Aussagen wahr sind.`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
		let textPositionVierteZeile = 10 + WriteText(`p=${polynom.b/polynom.a} q=${polynom.c/polynom.a} für x1 und x2 werden nun zufällig Zahlen eingesetzt bis eine Kombination passt: ==> `,  10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
		textPositionVierteZeile += WriteText(`Wahr werden für dieses Polynom beide Aussagen nur, wenn für x1=${funktionenListe[i].nullstellen[0]} und für x2=${funktionenListe[i].nullstellen[1]} einsetzt: ${polynom.b/polynom.a}=-(${funktionenListe[i].nullstellen[0]}+${funktionenListe[i].nullstellen[1]}) und ${polynom.c/polynom.a}=${funktionenListe[i].nullstellen[0]}*${funktionenListe[i].nullstellen[1]}`,  textPositionVierteZeile, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);

	}else{
		WriteText(`y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString}`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold "+fontSchriftInfoLeiste);
		WriteText("Die angegebene Funktion hat leider nicht die passende Form...", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	}
}

function reiter65NewtonVerfahrenNullstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	

	WriteText(`Das Newton Verfahren`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

}

function reiter66RegulaFalsiNullstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	

	WriteText(`Das Regula Falsi Verfahren`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

}




function reiter67GeradengleichungExtremstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	

	WriteText(`b[Die Extremstellen eines Polynoms sind die Nullstellen der ersten Ableitung]. Also muss das Polynom erst abgeleitet werden. b[${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	WriteText(`Danach wird die b[Ableitung gleich 0 gesetzt] und b[nach X aufgelöst]. Genau wie bei den Nullstellen nur mit der Ableitung.`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	let polynom = getAB(funktionenListe[i].ersteAbleitung);
	let potenz = getHoechstePotenzV2(funktionenListe[i].ersteAbleitung);
	
	if(potenz===1){
		if((-polynom.b)<0){
			if(Math.abs((-polynom.b))>1){
				WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    ${(-polynom.b)}x = ${polynom.a}    ==>    x = ${(-polynom.b)/polynom.a}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}else if(Math.abs((-polynom.b))===1){
				WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    -x = ${polynom.a}    ==>    x = ${(-polynom.b)/polynom.a}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}

		}else{
			if(Math.abs((-polynom.b))>1){
				WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    ${(-polynom.b)}x = ${polynom.a}    ==>    x = ${(-polynom.b)/polynom.a}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}else if(Math.abs((-polynom.b))===1){
				WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    x = ${(-polynom.b)/polynom.a}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}else if(polynom.b===0){
				WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    x = ${0}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}
		}
	}else if(potenz===2){
		WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist 2ten Grades. Die Nullstellen können bei diesem Polynom mithilfe der Mitternachtsformel oder PQ-Formel berechnet werden.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	}else if(potenz>2){
		WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist höher als 2ten Grades. Die Nullstellen können bei diesem Polynom nur näherungsweise mithilfe des Newton Verfahren oder Regula Falsi berechnet werden.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	}else if(potenz===0){
		if(polynom.b!=0){
			WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist 1ten Grades. Die Gerade ist parallel zu X-Achse und besitzt keine Nullstelle.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		}else if(polynom.b===0){
			WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist 1ten Grades. Die Gerade sitzt genau auf der X-Achse und besitzt unendlich viele Nullstellen.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		}
		
	}
}

function reiter68MitternachtsformelExtremstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	let hoeheWurzelZeichen1Schriftgroesse15 = 22;
	let hoeheWurzelZeichen2Schriftgroesse15 = 18;

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	WriteText(`Mit hilfe der b[Mitternachts- oder auch a-b-c Formel] können auch die b[Extremstellen] eines Polynoms berechnet werden. Dies funktioniert nur bei b[Polynomen 3-ten Grades]. Die b[Ableitung] des Polynoms muss also die Form b[ax^2+bx+c] haben.`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	WriteText(`b[Die Nullstellen einer Ableitung sind die Extremstellen der Stammfunktion]. Es muss also zuerst abgeleitet werden. b[Die Ableitung von ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString} lautet ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	
	
	let polynom = getABC(funktionenListe[i].ersteAbleitung);
	let potenz = getHoechstePotenzV2(funktionenListe[i].ersteAbleitung);
	
	if(potenz===2){
		let textPositionZweiteZeile = 10 + WriteText(`x`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(`1,2`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		let laengeBisWurzel = canvasContext.measureText("-b \xB1 \u221A").width + textPositionZweiteZeile;
		textPositionZweiteZeile += WriteText(`-b \xB1 \u221A b²-4ac/2a`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
				
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		
		textPositionZweiteZeile += 30 + WriteText(`y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}`, textPositionZweiteZeile+30, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += 30 + WriteText(`a = ${polynom.a} b = ${polynom.b} c = ${polynom.c}`, textPositionZweiteZeile + 30, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
				
		textPositionZweiteZeile += 30 + WriteText(`x`, textPositionZweiteZeile+30, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(`1,2`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		laengeBisWurzel = canvasContext.measureText("-b \xB1 \u221A").width + textPositionZweiteZeile;
		
		if((4*polynom.a*polynom.c)<0){
			textPositionZweiteZeile += WriteText(`${(-polynom.b)} \xB1 \u221A ${Math.pow(polynom.b,2)}-( ${4*polynom.a*polynom.c})/2*${polynom.a}`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionZweiteZeile += WriteText(`${(-polynom.b)} \xB1 \u221A ${Math.pow(polynom.b,2)}-${4*polynom.a*polynom.c}/2*${polynom.a}`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		
		textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		laengeBisWurzel = canvasContext.measureText(`${(-polynom.b)} \xB1 \u221A`).width + textPositionZweiteZeile;
		textPositionZweiteZeile += WriteText(`${(-polynom.b)} \xB1 \u221A ${(Math.pow(polynom.b,2) - (4*polynom.a*polynom.c))}/${2*polynom.a}`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		let minusB = (-polynom.b);
		let BQuadrat = Math.pow(polynom.b,2);
		let VierAC = (4*polynom.a*polynom.c);
		let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
		let zweiMalA = 2*polynom.a;
		
		if(BQuadrat-VierAC>=0){
			
			textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`${minusB} \xB1 ${wurzelBQuadratMinus4AC.toFixed(2)}/${zweiMalA}`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
			let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;

			textPositionZweiteZeile += WriteText(` => b[x1 = ${x1.toFixed(2)}   x2 = ${x2.toFixed(2)}]`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
		}else{
			textPositionZweiteZeile += WriteText(` => b[Wenn die Wurzel negativ wird, gibt es keine Lösung. Keine lösung bedeutet das Polynom hat keine Extremstellen.]`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
	}else if(potenz===1){	
		WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Die Ableitung des Polynoms ist ersten Grades. Die Extremstellen können mit bei diesem Polynom hilfe der Geradengleichung errechnet werden.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	}else if(potenz>2){
		WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Die Ableitung des Polynoms ist höher als 2ten Grades. Die Extremstellen können bei diesem Polynom nur näherungsweise mithilfe des Newton Verfahren oder Regula Falsi berechnet werden.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	}
}

function reiter69PQFormelExtremstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	
	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	WriteText(`Mit hilfe der b[PQ-Formel] können auch die b[Extremstellen] eines Polynoms berechnet werden. Dies funktioniert nur bei b[Polynomen 3-ten Grades]. Die b[Ableitung] des Polynoms muss die Form b[ax^2+bx+c] haben.`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	let textPositionZweiteZeile = 10 + WriteText(`Es muss also zuerst abgeleitet werden. b[Die Ableitung lautet ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	
	let polynom = getABC(funktionenListe[i].ersteAbleitung);
	let potenz = getHoechstePotenzV2(funktionenListe[i].ersteAbleitung);
	
	if(potenz===2){	
		if(polynom.a!=1){
			textPositionZweiteZeile += 30 + WriteText(`Der Koeffizient von x^2 muss 1 sein, dafür alles geteilt durch a. Allgemein also `, 30 + textPositionZweiteZeile,hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

			
			textPositionZweiteZeile += 10 + WriteText(`ax²/a`, 10 +  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(` + `, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`px/a`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(` + `, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`q/a`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

			textPositionZweiteZeile += 10 + WriteText(` => `, textPositionZweiteZeile + 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`${zahlRunden(polynom.a)}x^2/${zahlRunden(polynom.a)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);			
			textPositionZweiteZeile += WriteText(`${zahlRunden(polynom.b)}x/${zahlRunden(polynom.a)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`${zahlRunden(polynom.c)}/${zahlRunden(polynom.a)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);		
			textPositionZweiteZeile += WriteText(` => x^2`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);	
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);


			if(polynom.b/polynom.a>=0){
				textPositionZweiteZeile += WriteText(`${zahlRunden(polynom.b/polynom.a)}x`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionZweiteZeile += WriteText(`(${zahlRunden(polynom.b/polynom.a)}x)`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			if(polynom.c/polynom.a>=0){
				textPositionZweiteZeile += WriteText(`${zahlRunden(polynom.c/polynom.a)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionZweiteZeile += WriteText(`(${zahlRunden(polynom.c/polynom.a)})`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}
			
		}
		
		let textPositionDritteZeile = 10 + WriteText("x", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("1,2", textPositionDritteZeile ,hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionDritteZeile += WriteText(" = - ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("p/2", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		canvasContext.font = '35px Calibri';
		let laengeTextWurzel = canvasContext.measureText("\u221A").width+textPositionDritteZeile;
		textPositionDritteZeile += WriteText("\u221A(", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');
		textPositionDritteZeile += WriteText("p/2", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(")", textPositionDritteZeile , hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');
		textPositionDritteZeile += WriteText("²", textPositionDritteZeile  , hoeheDritteZeile-5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" -q", textPositionDritteZeile  , hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
		let alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile , hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		textPositionDritteZeile += 30 + WriteText(`y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}`,textPositionDritteZeile + 30 , hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += 30 + WriteText(`a = ${zahlRunden(polynom.a)} p = ${zahlRunden(polynom.b)} q = ${zahlRunden(polynom.c)}`,textPositionDritteZeile + 30, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		

		
		
		let p = polynom.b/polynom.a;
		let q = polynom.c/polynom.a;
		
		
		textPositionDritteZeile += 10 + WriteText("x", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("1,2", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionDritteZeile += WriteText(" = - ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`${zahlRunden(p)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		canvasContext.font = '35px Calibri';
		laengeTextWurzel = canvasContext.measureText("\u221A").width+textPositionDritteZeile;
		textPositionDritteZeile += WriteText("\u221A(", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');	
		textPositionDritteZeile += WriteText(`${zahlRunden(p)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(")", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');
		textPositionDritteZeile += WriteText("²",  textPositionDritteZeile, hoeheDritteZeile-5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);	
		if(funktionenListe[i].inhaltKnotenVektor[0]>=0){
			textPositionDritteZeile += WriteText(` -${zahlRunden(q)}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionDritteZeile += WriteText(` -(${zahlRunden(q)})`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		}

		
		alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel, hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		
		textPositionDritteZeile += 10 + WriteText(" = - ", 10 + textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`${zahlRunden(p)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("\u221A", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');	
		laengeTextWurzel = textPositionDritteZeile;
		textPositionDritteZeile += WriteText(`${zahlRunden(Math.pow(p/2,2))}`,textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		if(funktionenListe[i].inhaltKnotenVektor[0]>=0){
			textPositionDritteZeile += WriteText(` -${zahlRunden(q)}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionDritteZeile += WriteText(` +${(-zahlRunden(q))}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		}

		
		alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		
		let unterWurzel = Math.pow(p/2,2)-q;
		
		textPositionDritteZeile += 10 + WriteText(" = - ", textPositionDritteZeile + 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`${zahlRunden(p)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("\u221A", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');	
		laengeTextWurzel = textPositionDritteZeile;
		textPositionDritteZeile += WriteText(`${zahlRunden(unterWurzel)}`,textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		
		alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		if(unterWurzel>=0){
			let wurzelAusgerechnet = Math.sqrt(Math.pow(p/2,2)-q);

			textPositionDritteZeile += 10 + WriteText(" = - ", textPositionDritteZeile + 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionDritteZeile += WriteText(`${zahlRunden(p)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

			textPositionDritteZeile += WriteText(`${zahlRunden(wurzelAusgerechnet)}`,textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			let x1 = p/2+wurzelAusgerechnet;
			let x2 = p/2-wurzelAusgerechnet;
			
			textPositionDritteZeile += 10 + WriteText(` =>b[ x1=${zahlRunden(x1)} x2=${zahlRunden(x2)}]`, textPositionDritteZeile+10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		}else{
			textPositionDritteZeile += WriteText(" => b[Wenn die Wurzel negativ wird, gibt es keine Lösung. Keine lösung bedeutet das Polynom hat keine Extremstellen.]", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
		}
	}else{
		WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText("b[Die angegebene Funktion hat leider nicht die passende Form...]", 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	}
}

function reiter610SatzVonVietaExtremstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-50;
	let hoeheVierteZeile = canvas.height-15;
	
	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	let textPositionErsteZeile = 10 + WriteText(`Mit hilfe des b[Satzes von Vieta], können auch die b[Extremstellen] eines Polynoms berechnet werden. Sie funktioniert nur bei b[Polynomen 3-ten Grades] und eignet sich nur für b[ganzzahlige Extremstellen]. Die b[Ableitung] des Polynoms muss also die Form b[x^2+px+q] haben.`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);


	let polynom = getABC(funktionenListe[i].ersteAbleitung);
	let potenz = getHoechstePotenzV2(funktionenListe[i].ersteAbleitung);
	
	if(potenz===2){
		let textPositionZweiteZeile = 10 + WriteText(`Die b[Ableitung] des Polynoms wird wie bei der b[PQ-Formel] zuerst in die b[Normalform] gebracht. Es muss also die Form b[ax^2+px+q] haben wobei b[a=1] sein muss. Das die b[Ableitung des eingegebenen Polynoms lautet: ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		let textPositionDritteZeile = 0;
		if(polynom.b/polynom.a<0){
			if(polynom.c/polynom.a<0){
				textPositionDritteZeile += 10 + WriteText(`b[In Normalform gebracht] lautet es: b[${buchstabenArray[i]}(x) = x^2${(polynom.b/polynom.a).toFixed(2)}${(polynom.c/polynom.a).toFixed(2)}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionDritteZeile += 10 + WriteText(`b[In Normalform gebracht] lautet es: b[${buchstabenArray[i]}(x) = x^2${(polynom.b/polynom.a).toFixed(2)}+${(polynom.c/polynom.a).toFixed(2)}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a,  fontSchriftInfoLeiste);
			}	
		}else{
			if(polynom.c/polynom.a<0){
				textPositionDritteZeile += 10 + WriteText(`b[In Normalform gebracht] lautet es: b[${buchstabenArray[i]}(x) = x^2+${(polynom.b/polynom.a).toFixed(2)}${(polynom.c/polynom.a).toFixed(2)}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionDritteZeile += 10 + WriteText(`b[In Normalform gebracht] lautet es: b[${buchstabenArray[i]}(x) = x^2+${(polynom.b/polynom.a).toFixed(2)}+${(polynom.c/polynom.a).toFixed(2)}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}	
		}
		textPositionDritteZeile += 10 + WriteText(`Es muss nun b[p = -(x1+x2) und q = x1*x2] gelten. Um auf die b[Extemstellen] zu kommen muss b[eine Kombination von x1 und x2 gefunden werden für die beide Aussagen wahr sind.]`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold " + fontSchriftInfoLeiste);
		if(funktionenListe[i].extremstellen.length===0){
			let textPositionVierteZeile = 10 + WriteText(`b[p=${(polynom.b/polynom.a).toFixed(2)} q=${(polynom.c/polynom.a).toFixed(2)} für x1 und x2 werden nun zufällig Zahlen eingesetzt bis eine Kombination passt: ==>]`,  10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionVierteZeile += WriteText(`b[Es konnte keine Kombination für x1 und für x2 gefunden werden. Verwenden Sie die Mitternachts- oder PQ-Formel.]`,  textPositionVierteZeile, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			let textPositionVierteZeile = 10 + WriteText(`b[p=${(polynom.b/polynom.a).toFixed(2)} q=${(polynom.c/polynom.a).toFixed(2)} für x1 und x2 werden nun zufällig Zahlen eingesetzt bis eine Kombination passt: ==>]`,  10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionVierteZeile += WriteText(`b[Wahr werden für dieses Polynom beide Aussagen nur wenn für x1=${funktionenListe[i].extremstellen[0]} und für x2=${funktionenListe[i].extremstellen[1]} einsetzt: ${polynom.b/polynom.a}=-(${funktionenListe[i].extremstellen[0]}+${funktionenListe[i].extremstellen[1]}) und ${polynom.c/polynom.a}=${funktionenListe[i].extremstellen[0]}*${funktionenListe[i].extremstellen[1]}]`,  textPositionVierteZeile, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
	}else{
		WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText("Die Ableitung des eingegebenen Polynom hat leider nicht die passende Form...", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	}
}

function reiter611NewtonVerfahrenExtremstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	

	WriteText(`Das Newton Verfahren`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

}

function reiter612RegulaFalsiExtremstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	

	WriteText(`Das Regula Falsi Verfahren`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

}




function reiter613GeradengleichungWendepunkte(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	

	WriteText(`b[Die Wendestellen eines Polynoms sind die Nullstellen der zweiten Ableitung]. Also muss das Polynom zuerst zwei mal abgeleitet werden. b[${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}]`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	WriteText(`Danach wird die b[Ableitung gleich 0 gesetzt] und b[nach X aufgelöst]. Genau wie bei den Nullstellen nur mit der zweiten Ableitung.`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	let polynom = getAB(funktionenListe[i].zweiteAbleitung);
	let potenz = getHoechstePotenzV2(funktionenListe[i].zweiteAbleitung);
	if(potenz===1){
		
		if((-polynom.b)<0){	
			if(Math.abs((-polynom.b))>1){
				WriteText(`b[y = ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}    ==>    ${(-polynom.b)}x = ${polynom.a}    ==>    x = ${(-polynom.b)/polynom.a}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}else if(Math.abs((-polynom.b))===1){
				WriteText(`b[y = ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}    ==>    -x = ${polynom.a}    ==>    x = ${(-polynom.b)/polynom.a}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}

		}else{
			if(Math.abs((-polynom.b))>1){
				WriteText(`b[y = ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}    ==>    ${(-polynom.b)}x = ${polynom.a}    ==>    x = ${(-polynom.b)/polynom.a}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}else if(Math.abs((-polynom.b))===1){
				WriteText(`b[y = ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}    ==>    x = ${(-polynom.b)/polynom.a}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}else if(polynom.b===0){
				WriteText(`b[y = ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}    ==>    x = ${0}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}
		}
	}else if(potenz===2){
		WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist 2ten Grades. Die Wendepunkte können bei diesem Polynom mithilfe der Mitternachtsformel oder PQ-Formel berechnet werden.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	}else if(potenz>2){
		WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist höher als 2ten Grades. Die Wendepunkte können bei diesem Polynom nur näherungsweise mithilfe des Newton Verfahren oder Regula Falsi berechnet werden.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	}else if(potenz===1){
		if(polynom.b!=0){
			WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist 1ten Grades. Die Gerade ist parallel zu X-Achse und besitzt keine Nullstelle.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		}else if(polynom.b===0){
			WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist 1ten Grades. Die Gerade sitzt genau auf der X-Achse und besitzt unendlich viele Nullstellen.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		}
		
	}
}

function reiter614MitternachtsformelWendepunkte(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	let hoeheWurzelZeichen1Schriftgroesse15 = 22;
	let hoeheWurzelZeichen2Schriftgroesse15 = 18;

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	WriteText(`Mit hilfe der b[Mitternachts- oder auch a-b-c Formel] können auch die b[Wendepunkte] eines Polynoms berechnet werden. Dies funktioniert nur bei b[Polynomen 4-ten Grades]. Die zweite b[Ableitung] des Polynoms muss also die Form b[ax^2+bx+c] haben.`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	WriteText(`b[Die Nullstellen der zweiten Ableitung sind die Wendestellen der Stammfunktion]. Es muss also zuerst zwei mal abgeleitet werden. b[Die zweite Ableitung von ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString} lautet ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	
	let polynom = getABC(funktionenListe[i].zweiteAbleitung);
	
	let potenz = getHoechstePotenzV2(funktionenListe[i].zweiteAbleitung);
	
	if(polynom.a!=0){
//	if(funktionenListe[i].zweiteAbleitung.inhaltKnotenVektor.length==3&&funktionenListe[i].zweiteAbleitung.linkesChild==null&&funktionenListe[i].zweiteAbleitung.rechtesChild==null&&funktionenListe[i].zweiteAbleitung.inhaltKnotenVektor[2]!=0){
		
		let textPositionZweiteZeile = 10 + WriteText(`x`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(`1,2`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		let laengeBisWurzel = canvasContext.measureText("-b \xB1 \u221A").width + textPositionZweiteZeile;
		textPositionZweiteZeile += WriteText(`-b \xB1 \u221A b²-4ac/2a`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
				
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		
		textPositionZweiteZeile += 30 + WriteText(`y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}`, textPositionZweiteZeile+30, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += 30 + WriteText(`a = ${polynom.a} b = ${polynom.b} c = ${polynom.c}`, textPositionZweiteZeile + 30, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
				
		textPositionZweiteZeile += 30 + WriteText(`x`, textPositionZweiteZeile+30, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(`1,2`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		laengeBisWurzel = canvasContext.measureText("-b \xB1 \u221A").width + textPositionZweiteZeile;
		
		if((4*polynom.a*polynom.c)<0){
			textPositionZweiteZeile += WriteText(`${(-polynom.b)} \xB1 \u221A ${Math.pow(polynom.b,2)}-( ${4*polynom.a*polynom.c})/2*${polynom.a}`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionZweiteZeile += WriteText(`${(-polynom.b)} \xB1 \u221A ${Math.pow(polynom.b,2)}-${4*polynom.a*polynom.c}/2*${polynom.a}`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-5, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-5, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( laengeBisWurzel-5, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		
		textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		laengeBisWurzel = canvasContext.measureText(`${(-polynom.b)} \xB1 \u221A`).width + textPositionZweiteZeile;
		textPositionZweiteZeile += WriteText(`${(-polynom.b)} \xB1 \u221A ${(Math.pow(polynom.b,2) - (4*polynom.a*polynom.c))}/${2*polynom.a}`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		let minusB = (-polynom.b);
		let BQuadrat = Math.pow(polynom.b,2);
		let VierAC = (4*polynom.a*polynom.c);
		let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
		let zweiMalA = 2*polynom.a;
		
		if(BQuadrat-VierAC>=0){
			
			textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`${minusB} \xB1 ${zahlRunden(wurzelBQuadratMinus4AC)}/${zweiMalA}`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
			let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;

			textPositionZweiteZeile += WriteText(` => b[x1 = ${zahlRunden(x1)}   x2 = ${zahlRunden(x2)}]`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
		}else{
			textPositionZweiteZeile += WriteText(` => b[Wenn die Wurzel negativ wird, gibt es keine Lösung. Keine lösung bedeutet das Polynom hat keine Extremstellen.]`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
	}else if(potenz===1){	
		WriteText(`b[y = ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Die zweite Ableitung des Polynoms ist ersten Grades. Die Wendepunkte können mit bei diesem Polynom hilfe der Geradengleichung errechnet werden.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	}else if(potenz>2){
		WriteText(`b[y = ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Die zweite Ableitung des Polynoms ist höher als 2ten Grades. Die Wendepunkte können bei diesem Polynom nur näherungsweise mithilfe des Newton Verfahren oder Regula Falsi berechnet werden.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	}
}

function reiter615PQFormelWendepunkte(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	
	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	
	
	WriteText(`Mit hilfe der b[PQ-Formel] können auch die b[Wendepunkte] eines Polynoms berechnet werden. Dies funktioniert nur bei b[Polynomen 4-ten Grades]. Die zweite b[Ableitung] des Polynoms muss die Form b[ax^2+bx+c] haben.`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	let textPositionZweiteZeile = 10 + WriteText(`Es muss also zuerst zwei mal abgeleitet werden. b[Die zweite Ableitung lautet ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	
	let polynom = getABC(funktionenListe[i].zweiteAbleitung);
	if(polynom.a!=0){
//	if(funktionenListe[i].zweiteAbleitung.inhaltKnotenVektor.length==3&&funktionenListe[i].zweiteAbleitung.linkesChild==null&&funktionenListe[i].zweiteAbleitung.rechtesChild==null&&funktionenListe[i].zweiteAbleitung.inhaltKnotenVektor[2]!=0){
//		
		if(polynom.a!=1){
			textPositionZweiteZeile += 30 + WriteText(`Der Koeffizient von x^2 muss 1 sein, dafür alles geteilt durch a. Allgemein also `, 30 + textPositionZweiteZeile,hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

			
			textPositionZweiteZeile += 10 + WriteText(`ax²/a`, 10 +  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(` + `, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`px/a`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(` + `, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`q/a`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

			textPositionZweiteZeile += 10 + WriteText(` => `, textPositionZweiteZeile + 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`${zahlRunden(polynom.a)}x^2/${zahlRunden(polynom.a)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);			
			textPositionZweiteZeile += WriteText(`${zahlRunden(polynom.b)}x/${zahlRunden(polynom.a)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`${zahlRunden(polynom.c)}/${zahlRunden(polynom.a)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);		
			textPositionZweiteZeile += WriteText(` => x^2`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);	
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);


			if(polynom.b/polynom.a>=0){
				textPositionZweiteZeile += WriteText(`${zahlRunden(polynom.b/polynom.a)}x`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionZweiteZeile += WriteText(`(${zahlRunden(polynom.b/polynom.a)}x)`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			if(polynom.c/polynom.a>=0){
				textPositionZweiteZeile += WriteText(`${zahlRunden(polynom.c/polynom.a)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionZweiteZeile += WriteText(`(${zahlRunden(polynom.c/polynom.a)})`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}
			
		}
		
		let textPositionDritteZeile = 10 + WriteText("x", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("1,2", textPositionDritteZeile ,hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionDritteZeile += WriteText(" = - ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("p/2", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		canvasContext.font = '35px Calibri';
		let laengeTextWurzel = canvasContext.measureText("\u221A").width+textPositionDritteZeile;
		textPositionDritteZeile += WriteText("\u221A(", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');
		textPositionDritteZeile += WriteText("p/2", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(")", textPositionDritteZeile , hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');
		textPositionDritteZeile += WriteText("²", textPositionDritteZeile  , hoeheDritteZeile-5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" -q", textPositionDritteZeile  , hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
		let alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile , hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		textPositionDritteZeile += 30 + WriteText(`y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}`,textPositionDritteZeile + 30 , hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += 30 + WriteText(`a = ${zahlRunden(polynom.a)} p = ${zahlRunden(polynom.b)} q = ${zahlRunden(polynom.c)}`,textPositionDritteZeile + 30, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		

		
		
		let p = polynom.b/polynom.a;
		let q = polynom.c/polynom.a;
		
		
		textPositionDritteZeile += 10 + WriteText("x", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("1,2", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionDritteZeile += WriteText(" = - ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`${zahlRunden(p)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		canvasContext.font = '35px Calibri';
		laengeTextWurzel = canvasContext.measureText("\u221A").width+textPositionDritteZeile;
		textPositionDritteZeile += WriteText("\u221A(", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');	
		textPositionDritteZeile += WriteText(`${zahlRunden(p)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(")", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');
		textPositionDritteZeile += WriteText("²",  textPositionDritteZeile, hoeheDritteZeile-5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);	
		if(polynom.c>=0){
			textPositionDritteZeile += WriteText(` -${zahlRunden(q)}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionDritteZeile += WriteText(` -(${zahlRunden(q)})`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		}

		
		alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel, hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		
		textPositionDritteZeile += 10 + WriteText(" = - ", 10 + textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`${zahlRunden(p)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("\u221A", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');	
		laengeTextWurzel = textPositionDritteZeile;
		textPositionDritteZeile += WriteText(`${zahlRunden(Math.pow(p/2,2))}`,textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		if(polynom.c>=0){
			textPositionDritteZeile += WriteText(` -${zahlRunden(q)}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionDritteZeile += WriteText(` +${(-zahlRunden(q))}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		}

		
		alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		
		let unterWurzel = Math.pow(p/2,2)-q;
		
		textPositionDritteZeile += 10 + WriteText(" = - ", textPositionDritteZeile + 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`${zahlRunden(p)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("\u221A", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');	
		laengeTextWurzel = textPositionDritteZeile;
		textPositionDritteZeile += WriteText(`${zahlRunden(unterWurzel)}`,textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		
		alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		if(unterWurzel>=0){
			let wurzelAusgerechnet = Math.sqrt(Math.pow(p/2,2)-q);

			textPositionDritteZeile += 10 + WriteText(" = - ", textPositionDritteZeile + 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionDritteZeile += WriteText(`${zahlRunden(p)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

			textPositionDritteZeile += WriteText(`${zahlRunden(wurzelAusgerechnet)}`,textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			let x1 = p/2+wurzelAusgerechnet;
			let x2 = p/2-wurzelAusgerechnet;
			
			textPositionDritteZeile += 10 + WriteText(` =>b[ x1=${zahlRunden(x1)} x2=${zahlRunden(x2)}]`, textPositionDritteZeile+10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		}else{
			textPositionDritteZeile += WriteText(" => b[Wenn die Wurzel negativ wird, gibt es keine Lösung. Keine lösung bedeutet das Polynom hat keine Extremstellen.]", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
		}
	}else{
		WriteText(`b[y = ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText("b[Die angegebene Funktion hat leider nicht die passende Form...]", 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	}
}

function reiter616SatzVonVietaWendepunkte(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-50;
	let hoeheVierteZeile = canvas.height-15;
	
	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	let textPositionErsteZeile = 10 + WriteText(`Mit hilfe des b[Satzes von Vieta], können auch die b[Wendepunkte] eines Polynoms berechnet werden. Sie funktioniert nur bei b[Polynomen 4-ten Grades] und eignet sich nur für b[ganzzahlige Wendepunkte]. Die b[zweite Ableitung] des Polynoms muss also die Form b[x^2+px+q] haben.`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);


	let polynom = getABC(funktionenListe[i].zweiteAbleitung);
	let polynomAbleitungEinsWeniger = getABC(funktionenListe[i].ersteAbleitung);
	
	if(polynom.a!=0){
		let textPositionZweiteZeile = 10 + WriteText(`Die b[zweite Ableitung] des Polynoms wird wie bei der b[PQ-Formel] zuerst in die b[Normalform] gebracht. Es muss also die Form b[ax^2+px+q] haben wobei b[a=1] sein muss. Das die b[zweite Ableitung des eingegebenen Polynoms lautet: ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		let textPositionDritteZeile = 0;
		if(polynomAbleitungEinsWeniger.b/polynomAbleitungEinsWeniger.a<0){
			if(polynomAbleitungEinsWeniger.c/polynomAbleitungEinsWeniger.a<0){
				textPositionDritteZeile += 10 + WriteText(`b[In Normalform gebracht] lautet es: b[${buchstabenArray[i]}''(x) = x^2${zahlRunden(polynom.b/polynom.a)}${zahlRunden(polynom.c/polynom.a)}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionDritteZeile += 10 + WriteText(`b[In Normalform gebracht] lautet es: b[${buchstabenArray[i]}''(x) = x^2${zahlRunden(polynom.b/polynom.a)}+${zahlRunden(polynom.c/polynom.a)}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a,  fontSchriftInfoLeiste);
			}	
		}else{
			if(polynomAbleitungEinsWeniger.c/polynomAbleitungEinsWeniger.a<0){
				textPositionDritteZeile += 10 + WriteText(`b[In Normalform gebracht] lautet es: b[${buchstabenArray[i]}''(x) = x^2+${zahlRunden(polynom.b/polynom.a)}${zahlRunden(polynom.c/polynom.a)}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionDritteZeile += 10 + WriteText(`b[In Normalform gebracht] lautet es: b[${buchstabenArray[i]}''(x) = x^2+${zahlRunden(polynom.b/polynom.a)}+${zahlRunden(polynom.c/polynom.a)}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}	
		}
		textPositionDritteZeile += 10 + WriteText(` Es muss nun b[p = -(x1+x2) und q = x1*x2] gelten. Um auf die b[Wendepunkte] zu kommen muss b[eine Kombination von x1 und x2 gefunden werden für die beide Aussagen wahr sind.]`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold " + fontSchriftInfoLeiste);
		if(funktionenListe[i].wendepunkte.length===0){
			let textPositionVierteZeile = 10 + WriteText(`b[p=${zahlRunden(polynom.b/polynom.a)} q=${zahlRunden(polynom.c/polynom.a)} für x1 und x2 werden nun zufällig Zahlen eingesetzt bis eine Kombination passt: ==>]`,  10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionVierteZeile += WriteText(`b[Es konnte keine Kombination für x1 und für x2 gefunden werden. Verwenden Sie die Mitternachts- oder PQ-Formel.]`,  textPositionVierteZeile, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			let textPositionVierteZeile = 10 + WriteText(`b[p=${zahlRunden(polynom.b/polynom.a)} q=${zahlRunden(polynom.c/polynom.a)} für x1 und x2 werden nun zufällig Zahlen eingesetzt bis eine Kombination passt: ==>]`,  10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionVierteZeile += WriteText(`b[Wahr werden für dieses Polynom beide Aussagen nur wenn für x1=${zahlRunden(funktionenListe[i].wendepunkte[0])} und für x2=${zahlRunden(funktionenListe[i].wendepunkte[1])} einsetzt: ${zahlRunden(polynom.b/polynom.a)}=-(${zahlRunden(funktionenListe[i].wendepunkte[0])}+${zahlRunden(funktionenListe[i].wendepunkte[1])}) und ${zahlRunden(polynom.c/polynom.a)}=${zahlRunden(funktionenListe[i].wendepunkte[0])}*${zahlRunden(funktionenListe[i].wendepunkte[1])}]`,  textPositionVierteZeile, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
	}else{
		WriteText(`b[y = ${buchstabenArray[i]}''(x) = ${funktionenListe[i].zweiteAbleitung.inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText("Die zweite Ableitung des eingegebenen Polynom hat leider nicht die passende Form...", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	}
}

function reiter617NewtonVerfahrenWendepunkte(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	

	WriteText(`Das Newton Verfahren`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

}

function reiter618RegulaFalsiWendepunkte(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	

	WriteText(`Das Regula Falsi Verfahren`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

}




function reiter619GeradengleichungPolstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	

	WriteText(`b[Die Polstellen eines Polynoms sind die Nullstellen der ersten Ableitung]. Also muss das Polynom erst abgeleitet werden. b[${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	WriteText(`Danach wird die b[Ableitung gleich 0 gesetzt] und b[nach X aufgelöst]. Genau wie bei den Nullstellen nur mit der Ableitung.`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	
	if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length===2){
		if((-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0])<0){
			if(Math.abs((-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]))>1){
				WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    ${(-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0])}x = ${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]}    ==>    x = ${(-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0])/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}else if(Math.abs((-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]))===1){
				WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    -x = ${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]}    ==>    x = ${(-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0])/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}

		}else{
			if(Math.abs((-funktionenListe[i].inhaltKnotenVektor[0]))>1){
				WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    ${(-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0])}x = ${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]}    ==>    x = ${(-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0])/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}else if(Math.abs((-funktionenListe[i].inhaltKnotenVektor[0]))===1){
				WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    0 = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}    ==>    x = ${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			}
		}
	}else if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length===3){
		WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist 2ten Grades. Die Nullstellen können bei diesem Polynom mithilfe der Mitternachtsformel oder PQ-Formel berechnet werden.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	}else if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length>3){
		WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist höher als 2ten Grades. Die Nullstellen können bei diesem Polynom nur näherungsweise mithilfe des Newton Verfahren oder Regula Falsi berechnet werden.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	}else if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length===1){
		if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]!=0){
			WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist 1ten Grades. Die Gerade ist parallel zu X-Achse und besitzt keine Nullstelle.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		}else if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]!=0){
			WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
			WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Das Polynom ist 1ten Grades. Die Gerade sitzt genau auf der X-Achse und besitzt unendlich viele Nullstellen.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		}
		
	}
}

function reiter620MitternachtsformelPolstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	let hoeheWurzelZeichen1Schriftgroesse15 = 22;
	let hoeheWurzelZeichen2Schriftgroesse15 = 18;

	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	WriteText(`Mit hilfe der b[Mitternachts- oder auch a-b-c Formel] können auch die b[Polstellen] eines Polynoms berechnet werden. Dies funktioniert nur bei b[Polynomen 3-ten Grades]. Die b[Ableitung] des Polynoms muss also die Form b[ax^2+bx+c] haben.`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	WriteText(`b[Die Nullstellen einer Ableitung sind die Polstellen der Stammfunktion]. Es muss also zuerst abgeleitet werden. b[Die Ableitung von ${buchstabenArray[i]}(x) = ${funktionenListe[i].inhaltKnotenString} lautet ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	
	
	if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length==3&&funktionenListe[i].ersteAbleitung.linkesChild==null&&funktionenListe[i].ersteAbleitung.rechtesChild==null&&funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]!=0){
		
		let textPositionZweiteZeile = 10 + WriteText(`x`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(`1,2`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		let laengeBisWurzel = canvasContext.measureText("-b \xB1 \u221A").width + textPositionZweiteZeile;
		textPositionZweiteZeile += WriteText(`-b \xB1 \u221A b²-4ac/2a`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
				
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		
		textPositionZweiteZeile += 30 + WriteText(`y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}`, textPositionZweiteZeile+30, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += 30 + WriteText(`a = ${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]} b = ${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]} c = ${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]}`, textPositionZweiteZeile + 30, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
				
		textPositionZweiteZeile += 30 + WriteText(`x`, textPositionZweiteZeile+30, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionZweiteZeile += WriteText(`1,2`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		laengeBisWurzel = canvasContext.measureText("-b \xB1 \u221A").width + textPositionZweiteZeile;
		
		if((4*funktionenListe[i].inhaltKnotenVektor[2]*funktionenListe[i].inhaltKnotenVektor[0])<0){
			textPositionZweiteZeile += WriteText(`${(-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1])} \xB1 \u221A ${Math.pow(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1],2)}-( ${4*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]})/2*${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]}`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionZweiteZeile += WriteText(`${(-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1])} \xB1 \u221A ${Math.pow(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1],2)}-${4*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]}/2*${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]}`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		
		textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		laengeBisWurzel = canvasContext.measureText(`${(-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1])} \xB1 \u221A`).width + textPositionZweiteZeile;
		textPositionZweiteZeile += WriteText(`${(-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1])} \xB1 \u221A ${(Math.pow(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1],2) - (4*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]))}/${2*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]}`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( laengeBisWurzel-1, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen1Schriftgroesse15);
		canvasContext.lineTo( textPositionZweiteZeile, hoeheDritteZeile-hoeheWurzelZeichen2Schriftgroesse15);
		canvasContext.stroke();
		
		let minusB = (-funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]);
		let BQuadrat = Math.pow(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1],2);
		let VierAC = (4*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]);
		let wurzelBQuadratMinus4AC = Math.sqrt(BQuadrat - VierAC);
		let zweiMalA = 2*funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2];
		
		if(BQuadrat-VierAC>=0){
			
			textPositionZweiteZeile += WriteText(` = `, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`${minusB} \xB1 ${wurzelBQuadratMinus4AC.toFixed(2)}/${zweiMalA}`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			let x1 = (minusB + wurzelBQuadratMinus4AC) / zweiMalA;
			let x2 = (minusB - wurzelBQuadratMinus4AC) / zweiMalA;

			textPositionZweiteZeile += WriteText(` => b[x1 = ${x1.toFixed(2)}   x2 = ${x2.toFixed(2)}]`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
		}else{
			textPositionZweiteZeile += WriteText(` => b[Wenn die Wurzel negativ wird, gibt es keine Lösung. Keine lösung bedeutet das Polynom hat keine Polstellen.]`, textPositionZweiteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
	}else if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length===2){	
		WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Die Ableitung des Polynoms ist ersten Grades. Die Polstellen können mit bei diesem Polynom hilfe der Geradengleichung errechnet werden.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	}else if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length>3){
		WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
		WriteText(`b[Die angegebene Funktion hat leider nicht die passende Form... Die Ableitung des Polynoms ist höher als 2ten Grades. Die Polstellen können bei diesem Polynom nur näherungsweise mithilfe des Newton Verfahren oder Regula Falsi berechnet werden.]`, 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	}
}

function reiter621PQFormelPolstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-55;
	let hoeheVierteZeile = canvas.height-20;
	
	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	WriteText(`Mit hilfe der b[PQ-Formel] können auch die b[Polstellen] eines Polynoms berechnet werden. Dies funktioniert nur bei b[Polynomen 3-ten Grades]. Die b[Ableitung] des Polynoms muss die Form b[ax^2+bx+c] haben.`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');
	let textPositionZweiteZeile = 10 + WriteText(`Es muss also zuerst abgeleitet werden. b[Die Ableitung lautet ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '15px Calibri');

	
	if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length==3&&funktionenListe[i].ersteAbleitung.linkesChild==null&&funktionenListe[i].ersteAbleitung.rechtesChild==null&&funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]!=0){
		
		if(funktionenListe[i].inhaltKnotenVektor[2]!=1){
			textPositionZweiteZeile += 30 + WriteText(`Der Koeffizient von x^2 muss 1 sein, dafür alles geteilt durch a. Allgemein also `, 30 + textPositionZweiteZeile,hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

			
			textPositionZweiteZeile += 10 + WriteText(`ax²/a`, 10 +  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(` + `, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`px/a`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(` + `, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`q/a`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

			textPositionZweiteZeile += 10 + WriteText(` => `, textPositionZweiteZeile + 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]}x^2/${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);			
			textPositionZweiteZeile += WriteText(`${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]}x/${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionZweiteZeile += WriteText(`${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]}/${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);		
			textPositionZweiteZeile += WriteText(` => x^2`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);	
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);


			if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]>=0){
				textPositionZweiteZeile += WriteText(`${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)}x`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionZweiteZeile += WriteText(`(${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)}x)`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}
			textPositionZweiteZeile += WriteText(` + `,  textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]>=0){
				textPositionZweiteZeile += WriteText(`${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)}`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionZweiteZeile += WriteText(`(${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)})`, textPositionZweiteZeile, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}
			
		}
		
		let textPositionDritteZeile = 10 + WriteText("x", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("1,2", textPositionDritteZeile ,hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionDritteZeile += WriteText(" = - ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("p/2", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		canvasContext.font = '35px Calibri';
		let laengeTextWurzel = canvasContext.measureText("\u221A").width+textPositionDritteZeile;
		textPositionDritteZeile += WriteText("\u221A(", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');
		textPositionDritteZeile += WriteText("p/2", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(")", textPositionDritteZeile , hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');
		textPositionDritteZeile += WriteText("²", textPositionDritteZeile  , hoeheDritteZeile-5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" -q", textPositionDritteZeile  , hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		
		let alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile , hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		textPositionDritteZeile += 30 + WriteText(`y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}`,textPositionDritteZeile + 30 , hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += 30 + WriteText(`a = ${funktionenListe[i].inhaltKnotenVektor[2]} p = ${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]} q = ${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]}`,textPositionDritteZeile + 30, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		

		
		
		let p = funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2];
		let q = funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]
		
		
		textPositionDritteZeile += 10 + WriteText("x", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("1,2", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '10px Calibri');
		textPositionDritteZeile += WriteText(" = - ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`${p.toFixed(2)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		canvasContext.font = '35px Calibri';
		laengeTextWurzel = canvasContext.measureText("\u221A").width+textPositionDritteZeile;
		textPositionDritteZeile += WriteText("\u221A(", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');	
		textPositionDritteZeile += WriteText(`${p.toFixed(2)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(")", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');
		textPositionDritteZeile += WriteText("²",  textPositionDritteZeile, hoeheDritteZeile-5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);	
		if(funktionenListe[i].inhaltKnotenVektor[0]>=0){
			textPositionDritteZeile += WriteText(` -${q.toFixed(2)}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionDritteZeile += WriteText(` -(${q.toFixed(2)})`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		}

		
		alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel, hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		
		textPositionDritteZeile += 10 + WriteText(" = - ", 10 + textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`${p.toFixed(2)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("\u221A", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');	
		laengeTextWurzel = textPositionDritteZeile;
		textPositionDritteZeile += WriteText(`${Math.pow(p/2,2).toFixed(2)}`,textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		if(funktionenListe[i].inhaltKnotenVektor[0]>=0){
			textPositionDritteZeile += WriteText(` -${q.toFixed(2)}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			textPositionDritteZeile += WriteText(` +${(-q.toFixed(2))}`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		}

		
		alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		
		let unterWurzel = Math.pow(p/2,2)-q;
		
		textPositionDritteZeile += 10 + WriteText(" = - ", textPositionDritteZeile + 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(`${p.toFixed(2)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		textPositionDritteZeile += WriteText("\u221A", textPositionDritteZeile, hoeheDritteZeile+5, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, '35px Calibri');	
		laengeTextWurzel = textPositionDritteZeile;
		textPositionDritteZeile += WriteText(`${unterWurzel.toFixed(2)}`,textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		
		alteStichstaerke = canvasContext.lineWidth;
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.lineWidth = 2;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( textPositionDritteZeile, hoeheDritteZeile-25);
		canvasContext.stroke();
		
		canvasContext.beginPath();
		canvasContext.strokeStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
		canvasContext.moveTo( laengeTextWurzel , hoeheDritteZeile-25);
		canvasContext.lineTo( laengeTextWurzel - 3, hoeheDritteZeile-15);
		canvasContext.stroke();
		
		canvasContext.lineWidth = alteStichstaerke;
		
		if(unterWurzel>=0){
			let wurzelAusgerechnet = Math.sqrt(Math.pow(p/2,2)-q);

			textPositionDritteZeile += 10 + WriteText(" = - ", textPositionDritteZeile + 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionDritteZeile += WriteText(`${p.toFixed(2)}/2`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionDritteZeile += WriteText(" \xB1 ", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

			textPositionDritteZeile += WriteText(`${wurzelAusgerechnet.toFixed(2)}`,textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
			let x1 = p/2+wurzelAusgerechnet;
			let x2 = p/2-wurzelAusgerechnet;
			
			textPositionDritteZeile += 10 + WriteText(` =>b[ x1=${x1.toFixed(2)} x2=${x2.toFixed(2)}]`, textPositionDritteZeile+10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

		}else{
			textPositionDritteZeile += WriteText(" => b[Wenn die Wurzel negativ wird, gibt es keine Lösung. Keine lösung bedeutet das Polynom hat keine Polstellen.]", textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			
		}
	}else{
		WriteText(`b[y = ${buchstabenArray[i]}(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText("b[Die angegebene Funktion hat leider nicht die passende Form...]", 10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	}
}

function reiter622SatzVonVietaPolstellen(i){
	let hoeheErsteZeile = canvas.height-125;
	let hoeheZweiteZeile = canvas.height-90;
	let hoeheDritteZeile = canvas.height-50;
	let hoeheVierteZeile = canvas.height-15;
	
	hoeheInfoLeiste=150;
	DrawRectStatisch(0, canvas.height-hoeheInfoLeiste, canvas.width, hoeheInfoLeiste, 150, 150, 150,0.8);
	zeichneReiter();
	
	canvasContext.font = fontSchriftInfoLeiste;
	canvasContext.fillStyle = `rgba(${farbeSchriftInfoLeiste.r},${farbeSchriftInfoLeiste.g},${farbeSchriftInfoLeiste.b},${farbeSchriftInfoLeiste.a})`;
	canvasContext.textAlign = "left";
	
	let textPositionErsteZeile = 10 + WriteText(`Mit hilfe des b[Satzes von Vieta], können auch die b[Polstellen] eines Polynoms berechnet werden. Sie funktioniert nur bei b[Polynomen 3-ten Grades] und eignet sich nur für b[ganzzahlige Polstellen]. Die b[Ableitung] des Polynoms muss also die Form b[x^2+px+q] haben.`, 10, hoeheErsteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);


	if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor.length==3&&funktionenListe[i].ersteAbleitung.linkesChild==null&&funktionenListe[i].ersteAbleitung.rechtesChild==null&&funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]!=0){
		let textPositionZweiteZeile = 10 + WriteText(`Die b[Ableitung] des Polynoms wird wie bei der b[PQ-Formel] zuerst in die b[Normalform] gebracht. Es muss also die Form b[ax^2+px+q] haben wobei b[a=1] sein muss. Das die b[Ableitung des eingegebenen Polynoms lautet: ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		let textPositionDritteZeile = 0;
		if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]<0){
			if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]<0){
				textPositionDritteZeile += 10 + WriteText(`b[In Normalform gebracht] lautet es: b[${buchstabenArray[i]}(x) = x^2${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)}${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionDritteZeile += 10 + WriteText(`b[In Normalform gebracht] lautet es: b[${buchstabenArray[i]}(x) = x^2${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)}+${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a,  fontSchriftInfoLeiste);
			}	
		}else{
			if(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]<0){
				textPositionDritteZeile += 10 + WriteText(`b[In Normalform gebracht] lautet es: b[${buchstabenArray[i]}(x) = x^2+${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)}${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}else{
				textPositionDritteZeile += 10 + WriteText(`b[In Normalform gebracht] lautet es: b[${buchstabenArray[i]}(x) = x^2+${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)}+${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)}]`, 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			}	
		}
		textPositionDritteZeile += 10 + WriteText(`Es muss nun b[p = -(x1+x2) und q = x1*x2] gelten. Um auf die b[Polstellen] zu kommen muss b[eine Kombination von x1 und x2 gefunden werden für die beide Aussagen wahr sind.]`, textPositionDritteZeile, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, "bold " + fontSchriftInfoLeiste);
		if(funktionenListe[i].polstellen.length==0){
			let textPositionVierteZeile = 10 + WriteText(`b[p=${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)} q=${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)} für x1 und x2 werden nun zufällig Zahlen eingesetzt bis eine Kombination passt: ==>]`,  10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionVierteZeile += WriteText(`b[Es konnte keine Kombination für x1 und für x2 gefunden werden. Verwenden Sie die Mitternachts- oder PQ-Formel.]`,  textPositionVierteZeile, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}else{
			let textPositionVierteZeile = 10 + WriteText(`b[p=${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)} q=${(funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]).toFixed(2)} für x1 und x2 werden nun zufällig Zahlen eingesetzt bis eine Kombination passt: ==>]`,  10, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
			textPositionVierteZeile += WriteText(`b[Wahr werden für dieses Polynom beide Aussagen nur wenn für x1=${funktionenListe[i].polstellen[0]} und für x2=${funktionenListe[i].polstellen[1]} einsetzt: ${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[1]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]}=-(${funktionenListe[i].polstellen[0]}+${funktionenListe[i].polstellen[1]}) und ${funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[0]/funktionenListe[i].ersteAbleitung.inhaltKnotenVektor[2]}=${funktionenListe[i].polstellen[0]}*${funktionenListe[i].polstellen[1]}]`,  textPositionVierteZeile, hoeheVierteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		}
	}else{
		WriteText(`b[y = ${buchstabenArray[i]}'(x) = ${funktionenListe[i].ersteAbleitung.inhaltKnotenString}]`, 10, hoeheZweiteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);
		WriteText("Die Ableitung des eingegebenen Polynom hat leider nicht die passende Form...", 10, hoeheDritteZeile, farbeSchriftInfoLeiste.r, farbeSchriftInfoLeiste.g, farbeSchriftInfoLeiste.b, farbeSchriftInfoLeiste.a, fontSchriftInfoLeiste);

	}
}