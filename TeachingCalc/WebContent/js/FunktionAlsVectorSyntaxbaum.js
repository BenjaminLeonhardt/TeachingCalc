//klasse eines gebrochenrationalen polynoms
class FunktionAlsVektorSyntaxbaum {
	constructor(){
		this.parent = null;
		this.linkesChild = null;
		this.rechtesChild = null;
		this.unaeresChild = null;
		this.inhaltKnotenSymbol = "";
		this.inhaltKnotenString = "";
		this.inhaltKnotenVektor = [];
		this.index=0;
		this.punkteLinksVonNull = [];
		this.punkteRechtsVonNull = [];
		this.punkteLinksVonNullVergroessert = [];
		this.punkteRechtsVonNullVergroessert = [];
		this.gekürzt = null;
		this.ersteAbleitung = null;
		this.zweiteAbleitung = null;
		this.dritteAbleitung = null;
		this.graphAnzeigen = true;
		this.tangenteAnzeigen = false;
		this.ersteAbleitungAnzeigen = false;
		this.zweiteAbleitungAnzeigen = false;
		this.dritteAbleitungAnzeigen = false;
		this.normaleAnzeigen = false;
		this.krümmungskreisAnzeigen = false;
		this.nullstellen = [];
		this.polstellen = [];
		this.nullstellenAnzeigen = false;
		this.polstellenAnzeigen = false;
	}; 
};
