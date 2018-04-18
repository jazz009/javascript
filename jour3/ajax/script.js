var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status == 200){
        console.log(xhr.responseText);
    } else {
        console.log('error! ' + xhr.status + xhr.responseText);
    }
};

xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts/1');
xhr.setRequestHeader ('Access-Control-Allow-Headers','*');
xhr.send(null);

/*---Exemple du w3schools---*/
// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//        document.getElementById("demo").innerHTML = this.responseText;
//       }
//     };
//     xhttp.open("GET", "ajax_info.txt", true);
//     xhttp.send();
//   }