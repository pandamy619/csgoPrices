const axios = require('axios');
const config = require('../config/steam');
const { formatSkin } = require('../utils/skins.transformer');


class skinsService {

    constructor() {
        this.apiUrl = config.STEAM_API.URL;
        this.headers = config.STEAM_API.HEADERS;
        this.defaultParams = config.STEAM_API.DEFAULT_PARAMS;
    }

    async fetchSkinsFromAPI() {
        try {
            const response = await axios.get(this.apiUrl, {
                params: this.defaultParams,
                headers: this.headers
            });
            return this.processAPIData(response.data.results);
        } catch (error) {
            console.error('Steam API Error:', error.response?.data || error.message);
            throw new Error('Failed to fetch skins from Steam API');
        }
    }

    processAPIData(apiData) {
        if (!apiData) {
            throw new Error('Invalid API response structure');
        }
        return apiData.map(item =>
            formatSkin(item)
        );
    }

};

module.exports = new skinsService();