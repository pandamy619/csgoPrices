const skinsService = require('../services/skins.service');


const skinsController = {
    async getPopularSkins(req, res) {
        try {
            const popularSkins = await skinsService.getPopularSkinsconst();
            res.json(popularSkins);
        } catch (error) {
            res.status(500).json({
                error: 'Internal Server Error',
                details: error.message
            });
        }
    },

    async getAllUniqueSkins(req, res) {
        try {
            const allSkins = await skinsService.getNumberUniqueSkins();
            res.json(allSkins);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch skins',
                details: error.message
            });
        }
    },

    async getAllSkins(req, res) {
        try {
            const allSkins = await skinsService.getNumberAllSkins();
            res.json(allSkins);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch skins',
                details: error.message
            });
        }
    },

    async getSkinPriceHistory(req, res) {
        try {
            const allSkins = await skinsService.getPriceHistory(req.params.name);
            res.json(allSkins);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch skins',
                details: error.message
            });
        }
    },
};


module.exports = skinsController;

