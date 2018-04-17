var myImg = document.getElementById('image1');
var src = myImg.getAttribute('src');

console.log(src);

myImg.addEventListener('click', function(){
    if (src == 'img/img1.jpg'){
        myImg.setAttribute('src', 'img/img2.jpg');
        src = 'img/img2.jpg';
        console.log(src);
    } else {
        myImg.setAttribute('src', 'img/img1.jpg');
        src = 'img/img1.jpg';
        console.log(src);
    }
    
})