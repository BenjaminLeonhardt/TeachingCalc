function einfachesGanzrationalesPolynom(funktionAlsVerketteteListe, polyListe){
	let polynomliste = [];
	for(let i=0; i<funktionAlsVerketteteListe.length;i++){
		if(funktionAlsVerketteteListe[i].inhalt==="/"||funktionAlsVerketteteListe[i].inhalt==="("||funktionAlsVerketteteListe[i].inhalt===")"){
			return false;
		}
		if(funktionAlsVerketteteListe[i].inhalt==='x'||funktionAlsVerketteteListe[i].inhalt==='X'){
			let aktuellesPolynom = new Polynom();
			aktuellesPolynom.zahlOderVariablenName = funktionAlsVerketteteListe[i].inhalt;
			if(i>=2){
				if(funktionAlsVerketteteListe[i-1].inhalt==='*'){
					if(!isNaN(funktionAlsVerketteteListe[i-2].inhalt)){
						aktuellesPolynom.koeffizient = funktionAlsVerketteteListe[i-2].inhalt;
					}
				}
				
			}
			if(i+2<=funktionAlsVerketteteListe.length){
				if(funktionAlsVerketteteListe[i+1].inhalt==='^'){
					if(!isNaN(funktionAlsVerketteteListe[i+2].inhalt)){
						aktuellesPolynom.potenz = funktionAlsVerketteteListe[i+2].inhalt;
						
					}
				}else{
					aktuellesPolynom.potenz = 1;
				}
			}else{
				if(i===funktionAlsVerketteteListe.length-1){
					aktuellesPolynom.potenz = 1;
				}
			}
			if(i>=3){
				if(funktionAlsVerketteteListe[i-3].inhalt==='-'){
					aktuellesPolynom.koeffizient = -aktuellesPolynom.koeffizient;
				}
			}
			
			polynomliste.push(aktuellesPolynom);
		}
		if(i===funktionAlsVerketteteListe.length-1){
			if(!isNaN(funktionAlsVerketteteListe[i].inhalt)){
				let aktuellesPolynom = new Polynom();
				if(i>=1){
					aktuellesPolynom.zahlOderVariablenName = 0;
					aktuellesPolynom.potenz = 0;
					if(funktionAlsVerketteteListe[i-1].inhalt==="+"){
						aktuellesPolynom.koeffizient = funktionAlsVerketteteListe[i].inhalt;
					}else if(funktionAlsVerketteteListe[i-1].inhalt==="-"){
						aktuellesPolynom.koeffizient = -funktionAlsVerketteteListe[i].inhalt;
					}
					polynomliste.push(aktuellesPolynom);
				}
			}					
		}
		
	}
	for(let i=0;i<polynomliste.length;i++){
		polyListe.push(polynomliste[i]);
	}
	
	return true;
}//3*x^3-2*x^2+4*x+3