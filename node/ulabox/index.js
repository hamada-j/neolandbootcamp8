const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');


const url = 'https://www.ulabox.com/categoria/champu-y-cuidado-del-cabello/1016';
let arrProductos = [];

(async () => {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    // console.log($('.pagination').first().children().last().prev().text());
    const numPages = parseInt($('.pagination li:last-child').first().prev().text());

    for (let i = 1; i <= numPages; i++) {
        await getProductsPage(url, i);
    }

    for (let producto of arrProductos) {
        fs.appendFileSync('./productos.csv', `${producto.nombre}|${producto.precio}|${producto.marca}|${producto.imagen}\n`);
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

        const aTag = $(productos[i]).children().first().children()[3];
        p.imagen = $(aTag).children().first()[0].attribs['data-src'];

        arrProductos.push(p);
    }
}
