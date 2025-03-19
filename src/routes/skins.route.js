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


/**
* @openapi
* /api/v1/skins/all-unique-skins:
*   get:
*     tags: [Skins]
*     summary: Get all unique CS2 skins from Steam API
*     responses:
*       200:
*         description: Success
 *         content:
 *           application/json:
 *             example: {count: number, price: string}
*       500:
*         description: Internal Server Error
*/
router.get('/all-unique-skins', skinsController.getAllUniqueSkins);


/**
* @openapi
* /api/v1/skins/all-skins:
*   get:
*     tags: [Skins]
*     summary: Get all CS2 skins from Steam API
*     responses:
*       200:
*         description: Success
 *         content:
 *           application/json:
 *             example: {count: number, price: string}
*       500:
*         description: Internal Server Error
*/
router.get('/all-skins', skinsController.getAllSkins);


/**
 * @openapi
 * /api/v1/skins/price-history/{name}:
 *   get:
 *     tags: [Skins]
 *     summary: Get price history for a specific CS2 skin from Steam API
 *     parameters:
 *       - name: name
 *         in: path  # Параметр передается в URL
 *         required: true  # Параметр обязателен
 *         schema:
 *           type: string
 *         description: The name of the skin
 *     responses:  # <-- исправлено с "response" на "responses"
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 skinName:
 *                   type: string
 *                 priceHistory:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       date:
 *                         type: string
 *                         format: date
 *                       price:
 *                         type: number
 *       500:
 *         description: Internal Server Error
 */
router.get('/price-history/:name', skinsController.getSkinPriceHistory);



module.exports = router;