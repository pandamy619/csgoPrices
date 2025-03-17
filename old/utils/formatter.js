const { CURRENCY_SYMBOLS } = require('../constants');

function formatSkin(skin) {
  return {
    name: skin.name,
    price: skin.sell_price_text,
    volume: skin.volume,
    sellListings: skin.sell_listings,
    icon: `https://steamcommunity.com/market/image/${skin.asset_description.icon_url}`,
    currency: detectCurrency(skin.sell_price_text)
  };
}

function detectCurrency(priceText) {
  for (const [key, symbol] of Object.entries(CURRENCY_SYMBOLS)) {
    if (priceText.includes(symbol)) return key;
  }
  return 'UNKNOWN';
}

module.exports = {
  formatSkin
};