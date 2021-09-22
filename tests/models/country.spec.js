const { Country, conn,Activity } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
  });
});
describe('Activity model', () => {
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe('name', () => {
      it('debería arrojar un error si dificultad es una cadena', (done) => {
        Activity.create({dificultad:"12 minutes"})
          .then(() => done(new Error(' Requiere una dificultad válida')))
          .catch(() => done());
      });
      it('debería funcionar cuando es un tipo válido', () => {
        Activity.create({ dificultad: 30 });
      });
    });
  });
});

