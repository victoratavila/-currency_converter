const axios = require('axios');
const cheerio = require('cheerio');
const urlLibra = 'https://www.melhorcambio.com/libra-hoje';

    const getData = async (url) => {
    const result = await axios.get(url);
    return result.data;
    }

    const libraPrice = async () => {
        const data = await getData(urlLibra);
        const $ = cheerio.load(data);
        const libra = $('#comercial').val();
        console.log('libra ' + libra);
    }
    
module.exports = libraPrice(); 
