const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const urlDolar = 'https://www.melhorcambio.com/dolar-hoje';
const urlEuro = 'https://www.melhorcambio.com/euro-hoje';

const getData = async (url) => {
    const result = await axios.get(url);
    return result.data;
}

router.get('/dolar-to-real', async (req, res) => {
    
    const dolarPrice = async () => {
        const data = await getData(urlDolar);
        const $ = cheerio.load(data);
        var dolar = $('#comercial').val();
        var dolar = dolar.replace(",",".");
        res.render('../view/dolarToReal.ejs', { dolar });
    }
 
    dolarPrice();
  
})

router.get('/real-to-dolar', async (req, res) => {
    
    const dolarPrice = async () => {
        const data = await getData(urlDolar);
        const $ = cheerio.load(data);
        var dolar = $('#comercial').val();
        var dolar = dolar.replace(",",".");
        res.render('../view/realToDolar.ejs', { dolar });
    }
 
    dolarPrice();
  
});

router.get('/euro-to-real', async (req, res) => {

    const euroPrice = async () => {
        const data = await getData(urlEuro);
        const $ = cheerio.load(data);
        var euro = $('#comercial').val();
        var euro = euro.replace(",",".");
        res.render('../view/euroToReal.ejs', { euro });
    }

    euroPrice();

});

router.get('/real-to-euro', async (req, res) => {

    const euroPrice = async () => {
        const data = await getData(urlEuro);
        const $ = cheerio.load(data);
        var euro = $('#comercial').val();
        var euro = euro.replace(",",".");
        res.render('../view/realToEuro.ejs', { euro });
    }

    euroPrice();

});

router.get('*', (req, res) => {
    res.render('../view/notFound.ejs');
})

module.exports = router;
