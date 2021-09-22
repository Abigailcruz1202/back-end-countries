/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
// const country = {
//   name: 'Argentina',
// };

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('No se puede conectar a la base de datos:', err);
  }));
});
describe('GET /countries', () => {

  it ('responder con 400 si no encuentra el país', ()=>{
    agent.get('/countries?name=PaisFalso').expect(400)
  });

  it ('responder con 200 si encuentra el país', ()=>{
    agent.get('/countries?name=Argentina').expect(200)
  });

  it ('responder con 200 si encuentra el id', ()=>{
    agent.get('/countries/id=ARG').expect(200)
  });

  it ('responda con 400 si no se encuentra el id', ()=>{
    agent.get('/countries/id=PRR').expect(400)
  });

  it ('responder con 200 si encuentra el id', ()=>{
    agent.get('/countries/id=MEX').expect(200)
  });

});
