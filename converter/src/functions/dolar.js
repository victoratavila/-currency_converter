const axios = require('axios');
const cheerio = require('cheerio');
const urlDolar = 'https://www.melhorcambio.com/dolar-hoje';

    const getData = async (url) => {
    const result = await axios.get(url);
    return result.data;
    }

    const dolarPrice = async () => {
        const data = await getData(urlDolar);
        const $ = cheerio.load(data);
        const dolar = $('#comercial').val();
        console.log('dólar ' + dolar);
    }
    
module.exports = dolarPrice(); 
