
const Pet = require('../src/pet.js');

describe('Constructor', () => {
    it('Returns an object.', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('Names the pet', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
});