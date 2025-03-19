require("dotenv").config();
const axios = require('axios');
const config = require('../config/steam');
const { formatSkin } = require('../utils/skins.transformer');


class skinsService {

    constructor() {
        this.apiUrl = config.STEAM_API.URL;
        this.apiUrlMarket = config.STEAM_API.URL_MARKET;
        this.headers = config.STEAM_API.HEADERS;
        this.currencyCodes = config.STEAM_API.CURRENCY_CODES;
        this.defaultParams = config.STEAM_API.DEFAULT_PARAMS;
        this.steamHistoryUrl = config.STEAM_API.STEAM_HISTORY_URL;
        this.sessionId = process.env.SESSION_ID;
        this.steamLoginSecure = process.env.STEAM_LOGIN_SECURE;
    }

    async getNumberUniqueSkins() {
        try {
            const response = await axios.get(this.apiUrlMarket);
            const skins = response.data.items;

            let totalPrice = 0;

            for (const skin in skins) {
                totalPrice += parseFloat(skins[skin].price) || 0;
            }
            return { count: Object.keys(skins).length, price: `$${totalPrice.toFixed(2)}` };
        } catch (error) {
            console.error('Steam API Error:', error.response?.data || error.message);
            throw new Error('Failed to fetch skins from Steam API');
        }
    }

    async getNumberAllSkins() {
        try {
            const response = await axios.get(this.apiUrlMarket);
            const skins = response.data.items; // Объект со скинами

            let totalSkins = 0;
            let totalPrice = 0;
            for (const skin in skins) {
                totalSkins += parseInt(skins[skin].volume) || 0;
                const price = parseFloat(skins[skin].price) || 0;
                const volume = parseInt(skins[skin].volume) || 0;
                totalPrice += price * volume;
            }
            return { count: totalSkins, price: `$${totalPrice.toFixed(2)}` };
        } catch (error) {
            console.error("Ошибка при получении списка скинов:", error);
        }
    }

    async getPopularSkinsconst() {
        const url = "https://market.csgo.com/api/v2/prices/USD.json";

        try {
            const response = await axios.get(url);
            const data = response.data;
            const currency = response.data.currency;
            if (data.success) {
                const sortedSkins = data.items
                    .sort((a, b) => parseInt(b.volume) - parseInt(a.volume))
                    .slice(0, 10) // Топ-10 по продажам
                    .map((skin) => ({
                        ...skin,
                        currency,
                    }));

                return sortedSkins;
            } else {
                console.error("Ошибка: не удалось получить список скинов.");
                return [];
            }
        } catch (error) {
            console.error("Ошибка запроса:", error.message);
            return [];
        }
    }

    async getPriceHistory(itemName) {
        const url = `${this.steamHistoryUrl}${encodeURIComponent(itemName)}`;
        console.log(url);
        try {
            const response = await axios.get(url, {
                headers: {
                    "Cookie": `sessionid=${this.sessionId}; steamLoginSecure=${this.steamLoginSecure}`,
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
                }
            });

            if (response.data.success) {
                return response.data.prices;
            } else {
                console.log("Ошибка при получении данных.");
                return [];
            }
        } catch (error) {
            console.error("Ошибка запроса:", error.message);
            return [];
        }
    }


    async fetchSkinsFromAPI(currency) {
        try {
            const response = await axios.get(this.apiUrl, {
                params: { ...this.defaultParams, currency: this.currencyCodes[currency] },
                headers: { ...this.headers }
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