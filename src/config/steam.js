module.exports = {
    STEAM_API: {
        URL: 'https://steamcommunity.com/market/search/render/',
        DEFAULT_PARAMS: {
            appid: 730,
            norender: 1,
            count: 50,
            sort_column: 'volume'
        },
        HEADERS: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9'
        }
    }
};