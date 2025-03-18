const skinsService = require('../services/skins.service');


const skinsController = {
    async getPopularSkins(req, res) {
        try {
            const processedData = await skinsService.fetchSkinsFromAPI(req.query.currency);
            res.json(processedData);
        } catch (error) {
            res.status(500).json({
                error: 'Internal Server Error',
                details: error.message
            });
        }
    }
    /*
    async getBestMarkerOffersDMarket(req, res) {
        try {
            const processedData = await skinsService.fetchBestMarkerOffersDMarket();
            res.json(processedData);
        } catch (error) {
            res.status(500).json({
                error: 'Internal Server Error',
                details: error.message
            });
        }
    }
    */
};


module.exports = skinsController;

