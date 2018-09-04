function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.feed = function() {
    this.hunger -=3;
    if (this.hunger < 0){
        this.hunger = 0;
    };
};

Pet.prototype.walk = function(){
    this.fitness += 4;
    const MAX_FITNESS = 10;
    if (this.fitness > MAX_FITNESS){
        this.fitness = MAX_FITNESS;
    }
};

module.exports = Pet;
