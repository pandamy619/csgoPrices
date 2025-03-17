const skinsService = require('../services/skins.service');


const skinsController = {
    async getPopularSkins(req, res) {
        try {
            // Получение уже обработанных данных
            const processedData = await skinsService.fetchSkinsFromAPI();

            // Фильтрация для популярных скинов
            const popularSkins = processedData;

            res.json(popularSkins);

        } catch (error) {
            res.status(500).json({
                error: 'Internal Server Error',
                details: error.message
            });
        }
    }
};


module.exports = skinsController;

