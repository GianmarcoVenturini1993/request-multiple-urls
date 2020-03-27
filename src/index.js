"use strict";
const axios = require('axios');

class Service {
    async getData (url) {
        try {
            let response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = requestMultipleUrls;
async function requestMultipleUrls(url) {
    try {
        let service = new Service();
        let result = await service.getData(url)
        return result;
    } catch (error) {
        console.log(error);
    }
}

