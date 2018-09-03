function Pet(name) {
    this.name = name;
    this.age = 0;
};

Pet.prototype.growUp = function(years) {
    this.age += years;
};

module.exports = Pet;