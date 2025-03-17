const axios = require('axios');
const config = require('../config');
const { ERROR_MESSAGES } = require('../constants');

async function fetchSteamMarketData() {
    try {
        const response = await axios.get(config.STEAM_API.URL, {
            params: config.STEAM_API.DEFAULT_PARAMS,
            headers: config.STEAM_API.HEADERS
        });
        return response.data.results;
    } catch (error) {
        throw new Error(`${ERROR_MESSAGES.API_FAIL}: ${error.message}`);
    }
}

module.exports = {
    fetchSteamMarketData
};