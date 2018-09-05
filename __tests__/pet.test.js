
const Pet = require('../src/pet.js');

describe('Constructor', () => {
    it('Returns an object.', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    const pet = new Pet('Fido');
    it('Names the pet', () => {
        expect(pet.name).toEqual('Fido');
    });
    it('Pet has an initial age of 0', () => {
        expect(pet.age).toEqual(0);
    });
    it('Pet has an inital hunger of 0', () =>{
        expect(pet.hunger).toEqual(0);
    });
    it('Pet has an initial fitness of 10', () =>{
        expect(pet.fitness).toEqual(10);
    });
});
describe('growUP', () => {
    const pet = new Pet('Spot');
    pet.growUp();
    it('Increases the Pet.age by 1', () => {
        expect(pet.age).toEqual(1);
    });
    it('Increases the Pet.hunger by 5', () => {
        expect(pet.hunger).toEqual(5);
    });
    it('Decreases the Pet.fitness by 3', () => {
        expect(pet.fitness).toEqual(7);
    });
    it('Changes Pet attributes cumulatively', () => {
        pet.growUp();
        expect(pet.age).toEqual(2);
        expect(pet.hunger).toEqual(10);
        expect(pet.fitness).toEqual(4);
    });
});

describe('Feed', () => {
    const pet = new Pet('Patches');
    pet.growUp();
    pet.feed()
    it('Decreases pet.hunger by 3', () => {
        expect(pet.hunger).toEqual(2);
    });
    it('Does not decrease pet.hunger less than 0', () => {
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
});

describe('Walk', () => {
    const pet = new Pet('Lassie');
    pet.growUp();
    pet.growUp();
    pet.walk();
    it('Increases fitness by 4', () => {
        expect(pet.fitness).toEqual(8);
    });
    it('Does not increase fitness more than 10', () => {
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});

describe('Checkup', () => {
    it('Returns that nothing is wrong with pet', () => {
        const pet = new Pet('Krypto');
        expect(pet.talk()).toBe('I feel great!');
        pet.hunger = 4;
        pet.fitness = 4; 
        expect(pet.talk()).toBe('I feel great!');
    });
    it('Returns that the pet is hungry', () => {
        const pet = new Pet('Krypto');
        pet.hunger = 5;
        expect(pet.talk()).toBe('I am hungry.');
    });
    it('Returns that the pet needs to go for a walk', () => {
        const pet = new Pet('Krypto');
        pet.fitness = 3;
        expect(pet.talk()).toBe('I need a walk.');
    });
    it('Returns that the pet is hungry and needs to go for a walk', () => {
        const pet = new Pet('Krypto');
        pet.hunger = 10;
        pet.fitness = 1;
        expect(pet.talk()).toBe('I am hungry AND I need a walk!');
    });
});