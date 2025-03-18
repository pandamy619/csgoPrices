module.exports = {
    STEAM_API: {
        URL: 'https://steamcommunity.com/market/search/render/',
        CURRENCY_CODES: {
            USD: 1,   // Доллар США
            GBP: 2,   // Фунт стерлингов
            EUR: 3,   // Евро
            RUB: 5,   // Российский рубль
            // Полный список: https://partner.steamgames.com/doc/store/pricing/currencies
        },
        DEFAULT_PARAMS: {
            query: '',            // Пустой запрос для всех предметов
            start: 0,             // Пагинация (начинать с 0)
            count: 20,            // Количество предметов (макс. 100)
            search_descriptions: 0,
            sort_column: 'quantity', // Сортировка по количеству продаж
            sort_dir: 'desc',     // Убывающий порядок
            appid: 730,           // CS:GO AppID
            norender: 1           // Получить чистый JSON
        },
        HEADERS: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            // 'Accept-Language': 'en-US,en;q=0.9'
        }
    }
};