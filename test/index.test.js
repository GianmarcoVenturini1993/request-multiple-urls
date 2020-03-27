const axios = require('axios');
var MockAdapter = require("axios-mock-adapter");
var mock = new MockAdapter(axios);

const assert = require('assert');
const requestMultipleUrls = require('../src/index');

const url = 'https://ft-tech-test-example.dummy.com/ftse-fsi.json';
const jsonData = {
    'someData': 'someValue'
}

describe('index.js tests', () => {
    it('should returned data from mocked external service', async () => {
        mock.onGet(url).reply(200, jsonData);

        var result = requestMultipleUrls(url);

        result.then((data) => {
            assert.equal(data.someData, 'someValue');
            done();
        }, (error) => {
            assert.fail(error);
            done();
        })
    });
});