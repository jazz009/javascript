var monTab = [2, 4, 6];

var maFoncExpressive = function (x, y, z){
 document.write(y + ' ' + z + ' ' + ' ' + x * y + '<br>')
}

monTab.forEach(maFoncExpressive);

//correction

var table = [2, 4, 6];

table.forEach(function(x,y,z){
    console.log(y);
    console.log(z);
    console.log(x*y);
});