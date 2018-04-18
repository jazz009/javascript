// selectionne tous les td et renvoi un tableau
var x = document.querySelectorAll("td");

//boucle pour parcourir le tableau et ajouter un listener sur le clic
var i;
for (i = 0; i < x.length; i++) { 

	var myVal = x[i];

	// console.log(myVal);

	myVal.addEventListener("click",function(){ 

		var	myTxt = this.textContent;

		// var myInt = parseInt(myTxt);
		// console.log(typeof myInt);
		show(myTxt);
	});

	// affiche dans l'ecran la touche cliquée
	function show(myTx){  
		document.getElementById("screen").textContent = myTxt;
	}

// reste a implementer le calcul


}