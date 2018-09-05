function Pet(name, species = 'Otter') {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.species = species;
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

Pet.prototype.talk = function(){
    if(this.hunger >= 5 && this.fitness <= 3){
        return "I am hungry AND I need a walk!";
    }else if(this.hunger >= 5){
        return "I am hungry.";
    }else if(this.fitness <= 3){
        return "I need a walk.";
    }else{
        return "I feel great!"
    };
};

module.exports = Pet;
