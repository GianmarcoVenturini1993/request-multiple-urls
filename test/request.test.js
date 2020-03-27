const axios = require('axios');
var MockAdapter = require("axios-mock-adapter");
var mock = new MockAdapter(axios);

const assert = require('assert');
const Service = require('../src/request.js');

const url = 'https://ft-tech-test-example.dummy.com/ftse-fsi.json';
const jsonData = {
    'someData': 'someValue'
}


describe('getDataFromUrls.js tests', () => {
    describe('request function tests', () => {
        it('should return data from axios', async () => {
            mock.onGet(url).reply(200, jsonData);

            let service = new Service();
            let res = await service.getData(url);
            assert.equal(res.someData, 'someValue');
        });
    });
});