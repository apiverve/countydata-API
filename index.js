const axios = require('axios');

class countydataWrapper {

    constructor(options) {
        if (!options || typeof options !== 'object') {
            throw new Error('Options object must be provided.');
        }

        const { api_key, secure = true } = options;

        if (!api_key || typeof api_key !== 'string') {
            throw new Error('API key must be provided as a non-empty string.');
        }
        if (typeof secure !== 'boolean') {
            throw new Error('Secure parameter must be a boolean value.');
        }

        this.APIKey = api_key;
        this.IsSecure = secure;

        // secure is deprecated, all requests must be made over HTTPS
        this.baseURL = 'https://api.apiverve.com/v1/countydata';
    }

    async execute(query, callback) {
        if (!query || typeof query !== 'object') {
            throw new Error('Query parameters must be provided as an object.');
        }

        var requiredParams = ["state", "county"];
        if (requiredParams.length > 0) {
            for (var i = 0; i < requiredParams.length; i++) {
                if (!query[requiredParams[i]]) {
                    throw new Error(`Required parameter [${requiredParams[i]}] is missing.`);
                }
            }
        }

        const method = 'GET';
        const url = method === 'POST' ? this.baseURL : this.constructURL(query);

        try {
            const response = await axios({
                method,
                url,
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.APIKey,
                    'auth-mode': 'npm-package'
                },
                data: method === 'POST' ? query : undefined
            });

            const data = response.data;
            callback(null, data);
            return data;
        } catch (error) {
            if (error.response.data) {
                callback(error.response.data, null);
                throw error.response.data;
            } else {
                callback(error, null);
                throw error;
            }          
        }
    }

    constructURL(query) {
        let url = this.baseURL;
        if (Object.keys(query).length > 0) {
            const queryString = Object.keys(query)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
                .join('&');
            url += `?${queryString}`;
        }
        return url;
    }
}

module.exports = countydataWrapper;
