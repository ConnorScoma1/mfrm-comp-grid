
const cheerio = require('cheerio');
const request = require('request');

// ==================================================== Steinhalfes ================================================

// ==================================
// ========== BED ONE ===============
// ==================================

request('https://www.steinhafels.com/merchandise/product/details/dreams-austin-eurotop-assorted-queen-mattress-959515794', (error, response, html) => {
  if(!error && response.statusCode == 200 ){
    // console.log(html)
    const $ = cheerio.load(html);

    const sitePricing = $('.sale-price-value');

    const output = sitePricing.find('div').text()

    console.log(output)
  }
})
// ==================================
// ========== BED TWO ===============
// ==================================

request('https://www.steinhafels.com/merchandise/product/details/dreams-eastman-plush-queen-mattress-959467739', (error, response, html) => {
  if(!error && response.statusCode == 200 ){
    // console.log(html)
    const $ = cheerio.load(html);

    const sitePricing = $('.sale-price-value');

    const output1 = sitePricing.find('div').text()

    console.log(output1)
  }
})

// ==================================
// ========== BED Three =============
// ==================================

request('https://www.steinhafels.com/merchandise/product/details/dreams-luxe-dylan-firm-queen-mattress-946136829', (error, response, html) => {
  if(!error && response.statusCode == 200 ){
    // console.log(html)
    const $ = cheerio.load(html);

    const sitePricing = $('.sale-price-value');

    const output2 = sitePricing.find('div').text()

    console.log(output2)
  }
})