const assert = require('assert');
const requestMultipleUrls = require('../src/index');

describe('index.js tests', function () {
    describe('main function tests', function () {
        it('should be a string', function () {
            const result = requestMultipleUrls([]);
            assert.equal(result, 'Test Result')
        });
    });
});