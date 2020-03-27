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

module.exports = Service;