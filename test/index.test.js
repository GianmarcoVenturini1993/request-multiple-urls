'use strict';

const axios = require('axios');
var MockAdapter = require("axios-mock-adapter");
var mock = new MockAdapter(axios);

const assert = require('assert');
const requestMultipleUrls = require('../src/index');

const urls = [
    'https://ft-tech-test-example.dummy.com/ftse-fsi.json',
    'https://ft-tech-test-example.dummy2.com/ftse-fsi.json',
    'https://ft-tech-test-example.dummy3.com/ftse-fsi.json'
];
const jsonData1 = {
    'someData': 'dummy1'
}
const jsonData2 = {
    'someData': 'dummy2'
}
const jsonData3 = {
    'someData': 'dummy3'
}

describe('index.js tests', () => {
    it('should returned data from mocked external service', async () => {
        mock.onGet(urls[0]).reply(200, jsonData1);
        mock.onGet(urls[1]).reply(200, jsonData2);
        mock.onGet(urls[2]).reply(200, jsonData3);


        var result = requestMultipleUrls(urls);

        result.then((data) => {
            assert.equal(data[0].someData, 'dummy1');
            assert.equal(data[1].someData, 'dummy2');
            assert.equal(data[2].someData, 'dummy3');
            done();
        }, (error) => {
            assert.fail(error);
            done();
        })
    });
});