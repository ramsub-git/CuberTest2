var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('AIInteraction unit tests:', () => {
    it('Should create a AIInteraction instance', (done: Function) => {
        api.post('/ai-interactions').send({
            text: 'test'
        }).expect(200, done);
    });
});
