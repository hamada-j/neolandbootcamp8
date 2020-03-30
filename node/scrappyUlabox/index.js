const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://www.ulabox.com/categoria/cuidado-facial-dermocosmetica/676';
let arrProductos = [];

(async () => {

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const pagination = $('.pagination').first();
    const numPages = parseInt(pagination.children().last().prev().text());

    for (let i = 1; i <= numPages; i++) {
        await getProductsPage(url, i);
    }

    // console.log(arrProductos);
    for (let prod of arrProductos) {
        fs.appendFileSync('./productos.csv', `${prod.nombre};${prod.precio};${prod.marca}\n`);
    }
})();

async function getProductsPage(pUrl, pPage) {
    const response = await axios.get(`${pUrl}?p=${pPage}`);

    const $ = cheerio.load(response.data);
    const productos = $('.product-item');

    for (let i = 0; i < productos.length; i++) {
        let p = {};
        p.nombre = productos[i].attribs['data-product-name'];
        p.precio = productos[i].attribs['data-price'];
        p.marca = productos[i].attribs['data-product-brand'];

        arrProductos.push(p);
    }
}