var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('HumanInteraction unit tests:', () => {
    it('Should create a HumanInteraction instance', (done: Function) => {
        api.post('/human-interactions').send({
            text: 'test'
        }).expect(200, done);
    });
});
