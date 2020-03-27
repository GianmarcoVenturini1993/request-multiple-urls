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
async function requestMultipleUrls(urls) {
    try {
        let service = new Service();

        const promises = urls.map(async url => {
            const singleResult = await service.getData(url)
            return singleResult
        });

        const results = await Promise.all(promises)
        return results;
    } catch (error) {
        console.log(error);
    }
}

