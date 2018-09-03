
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
});
describe('growUP', () => {
    const pet = new Pet('Spot');
    pet.growUp(5)
    it('Increases the Pet.age by specified amount', () => {
        expect(pet.age).toEqual(5);
    });
});