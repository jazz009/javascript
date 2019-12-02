function Tamagocci() {
    this.weight = 5;
    this.minWeight = 1;
    this.maxWeight = 10;
    this.age = 0;
    this.happiness = 5;

    this.eat = function() {
        this.weight += 2;
    };

    this.play = function() {
        this.weight -= 1;
        this.happiness += 1;
    };

    this.becomeOlder = function (){
        this.age += 1;
        this.minWeight += 1;
        this.maxWeight += 1;
        this.happiness -= 1;
    };

    this.isDead = function () {
        if ((this.weight < this.minWeight) || (this.weight > this.maxWeight) || (this.happiness == 0)){
            return true;
        }
        return false;
    };

    this.getPicture = function (){

            if (this.isDead()){
                return 'pk_dead.gif';
            } else if (this.weight < this.minWeight + 3 || this.weight > this.maxWeight - 3 || this.happiness < 3) {
                return 'pk_bad.gif';
            }else {
                return 'pk_good.gif';
            }

    };
};

function Pikachu(){
    Tamagocci.apply(this);
}

Pikachu.prototype = Object.create(Tamagocci.prototype);

function HelloKitty(){
    Tamagocci.apply(this);

    this.getPicture = function (){

        if (this.isDead()){
            return 'hk_dead.png';
        } else if (this.weight < this.minWeight + 3 || this.weight > this.maxWeight - 3 || this.happiness < 3) {
            return 'hk_bad.gif';
        }else {
            return 'hk_good.gif';
        }
    
    };
}

HelloKitty.prototype = Object.create(Tamagocci.prototype);



