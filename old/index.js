const { fetchSteamMarketData } = require('./utils/api');
const { formatSkin } = require('./utils/formatter');
const { ERROR_MESSAGES } = require('./constants');

async function getPopularSkins() {
  try {
    const items = await fetchSteamMarketData();
    return items.map(formatSkin);
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

function printResults(skins) {
  console.log('Топ популярных скинов CS2/CS:GO:\n');
  skins.forEach((skin, index) => {
    console.log(`${index + 1}. ${skin.name}`);
    console.log(`   💰 Цена: ${skin.price}`);
    // console.log(`   📈 Продажи: ${skin.volume} шт.`);
    console.log(`   🛒 Активных предложений: ${skin.sellListings}`);
    console.log(`   🌐 Валюта: ${skin.currency}\n`);
  });
}

// Запуск приложения
(async () => {
  const skins = await getPopularSkins();
  if (skins.length > 0) {
    printResults(skins);
  } else {
    console.log(ERROR_MESSAGES.API_FAIL);
  }
})();
