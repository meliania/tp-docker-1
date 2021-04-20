const { app, server } = require('./index');
const supertest = require('supertest');

const request = supertest(app);

describe('Test all endpoints', () => {
    it('Should obtain the value "Well done"', () => {
        return request.get('/')
            .expect(200)
            .then((res) => {
                expect(res.text).toBe('Well done');
            });
    });
});

afterAll((done) => {
    server.close();
    done();
});
