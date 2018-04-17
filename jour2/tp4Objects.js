var humain = {
    'size' : 180,
    'hair': "undefined",
    'think': function() {
        console.log('Je pense donc je suis')
    },
    'hobbies':[
        {
            "sport" : "Floorbal",
            "music" : "Drums",
        }
    ]
}
console.log(humain.size);

humain.size = 160;

console.log(humain.size);

var alien = Object.create(humain)
alien.think = function () {
    console.log("Mind Control");
}

humain.think();
alien.think();