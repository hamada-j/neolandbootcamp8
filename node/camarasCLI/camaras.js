const axios = require('axios');
const parser = require('fast-xml-parser');
const got = require('got');
const fs = require('fs');
const terminalImage = require('terminal-image');

module.exports = async () => {
    // Descargamos la información de todas las cámaras
    const response = await axios.get('https://datos.madrid.es/egob/catalogo/202088-0-trafico-camaras.kml');
    const data = parser.parse(response.data);
    const camarasInfo = data.kml.Document.Placemark;

    // Seleccionamos la cámara de manera aleatoria
    const randomNum = Math.floor(Math.random() * camarasInfo.length);
    const camaraSeleccionada = camarasInfo[randomNum];

    // Recuperamos la URL de la imagen de la cámara
    const imgStartIndex = camaraSeleccionada.description.indexOf('img src=') + 8;
    const imgEndIndex = camaraSeleccionada.description.indexOf(' ', imgStartIndex);
    const camaraUrlImage = camaraSeleccionada.description.substring(imgStartIndex, imgEndIndex);

    // Recuperamos el nombre de la imagen
    const nombre = camaraUrlImage.substring(camaraUrlImage.indexOf('Camara'), camaraUrlImage.indexOf('.jpg') + 4);

    // Descarga de la imagen
    const { body } = await got(camaraUrlImage, {
        responseType: 'buffer'
    });
    fs.appendFileSync(`./images/${nombre}`, body);

    // Mostramos la imagen por consola
    console.log(await terminalImage.buffer(body));

}