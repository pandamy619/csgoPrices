const router = require('express').Router();
const skinsController = require('../controllers/skins.controller');

/**
* @openapi
* /api/v1/skins/popular:
*   get:
*     tags: [Skins]
*     summary: Get popular CS2 skins from Steam API
*     responses:
*       200:
*         description: Success
*       500:
*         description: Internal Server Error
*/
router.get('/popular', skinsController.getPopularSkins);

/**
* @openapi
* /api/v1/skins/:
*   get:
*/
// router.get('/best-marker-offers-dmarket', skinsController.getBestMarkerOffersDMarket);



module.exports = router;