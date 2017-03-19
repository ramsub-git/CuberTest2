var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('Office unit tests:', () => {
    it('Should create a Office instance', (done: Function) => {
        api.post('/offices').send({
            OfficeName: 'test'
        }).expect(200, done);
    });
});
