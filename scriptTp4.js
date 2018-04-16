var myH1 = document.getElementById('titrePage');

myH1.style.color = 'red';
myH1.style.textAlign = 'center';

var newP = document.createElement('p');
var myPage = document.getElementById('page')

myPage.appendChild(newP);

setTimeout(function(){ 
    newP.textContent = 'Mon nouveau paragraphe créé en Js';
    newP.style.color = 'green';
    newP.style.fontWeight = 'bold';

    newP.classList.add('myNewClass');

}, 1000);

//setTimeout are just for fun
setTimeout(function(){ 

    function selectP() {

        var my2stP = document.querySelectorAll('p');

        my2stP[1].style.backgroundColor = "red"; 
        my2stP[1].style.color = 'white';

    }

    selectP();

}, 2000);

setTimeout(function(){ 

    var monImg = document.createElement('img');

    page.appendChild(monImg)

}, 3000);