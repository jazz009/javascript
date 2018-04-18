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