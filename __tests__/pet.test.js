
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