

function getNumber(){
    var myVar = window.prompt('Entrez votre nombre', 'Mon nombre');
    myVar = parseInt(myVar);

    console.log(typeof myVar);

    console.log(myVar);
    buildList(myVar)
}

function buildList(myVar){
    
    for (var i = 0; i <= myVar; i++){
        if ((i % 3 == 0) && (i % 5 == 0)){
            console.log('fizzbuzz');

        } else if (i % 5 == 0) {
            console.log('buzz');

        } else if (i % 3 == 0) {
            console.log('fizz');

        } else {
           console.log(i);
        }
    }
}

getNumber();


