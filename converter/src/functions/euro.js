const axios = require('axios');
const cheerio = require('cheerio');
const urlEuro = 'https://www.melhorcambio.com/euro-hoje';

    const getData = async (url) => {
    const result = await axios.get(url);
    return result.data;
    }
    
    const euroPrice = async () => {
        const data = await getData(urlEuro);
        const $ = cheerio.load(data);
        const euro = $('#comercial').val();
        console.log('euro ' + euro);
    }

module.exports = euroPrice();

