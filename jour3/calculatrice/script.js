// ajout de ESlint avec les regles air-bnb https://travishorn.com/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-6eb78a535ba6
// selectionne tous les td et renvoi un tableau
const x = window.document.querySelectorAll('td');

// boucle pour parcourir le tableau et ajouter un listener sur le clic
let i;
for (i = 0; i < x.length; i++) {
  let myVal = x[i];

  // console.log(myVal);

  myVal.addEventListener('click', function () {
    let myTxt = this.textContent;

    // var myInt = parseInt(myTxt);
    console.log(typeof myInt);
    show(myTxt);
  });

  // affiche dans l'ecran la touche cliquée
  function show(myTx) {
    document.getElementById('screen').textContent = myTxt;
  }

// reste a implementer le calcul
}
