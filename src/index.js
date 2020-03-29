'use strict';

const axios = require('axios');

class Service {
    async getData (url) {
        try {
            let response = await axios.get(url);
            return response.data;
        } catch (error) {
            if (error.response) {
                return buildError(error.response);
            } else {
                return error.message;
            }
        }
    }

    buildError (error) {
        return 'An error occurred.\n Status code: ' + error.status + '\n' 
            + 'Message: ' + error.data + '\n';
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

