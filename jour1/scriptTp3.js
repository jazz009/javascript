function returnPrenom(){
    var prenom = prompt("Entrez votre prénom:" );
    return prenom;
}

function conca(){
    document.write('Votre prénom est ' + returnPrenom() + '!!')
}

conca();
