// servertest.js
// Testing the backend REST API using mocha and chai assertions
const axios = require('axios');

describe('Backend Server Testing', () => {
    it('Should return valid data from news endpoint', async () => {
        try {
            const { expect } = await import('chai');
            const response = await axios.get('http://localhost:3000/news');
            // Assertions to be raised
            expect(response.status).to.equal(200);
            expect(response.data).to.be.an('array');
            expect(response.data.length).to.be.greaterThan(0);
        } catch (error) {
            throw new Error(error);
        }
    });
    it('should return Nairobi weather data from weather/:city enpoint', async () => {
        const { expect } = await import('chai');
        try {
            const request = await axios.get('http://localhost:3000/weather/nairobi');
            // Assertions to be raised
            expect(request.status).to.equal(200);
            expect(request.data).to.be.an('object');
            // Check specific properties of the response object
            expect(request.data.location.name).to.equal('Nairobi');
            expect(request.data.location.country).to.equal('Kenya');
            // Asserting temperature data
            expect(request.data.current.temp_c).to.be.a('number');
            expect(request.data.current.temp_f).to.be.a('number');
        } catch (error) {
            expect.fail(error);
        }
    });

    it('should return error for invalid city from the weather/:city endpoint', async () => {
        const { expect } = await import('chai');
        try {
            const request = await axios.get('http://localhost:3000/weather/invalidcity');
            // Assertions to be raised
            expect(request.status).to.equal(500);
        } catch (error) {
            expect(error.response.status).to.equal(500);
        }
    });
});