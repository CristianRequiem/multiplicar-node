// requireds
// const fs = require('express'); => Modulos externos a node
// const fs = require('./fs'); => Archivos creados en nuestro proyecto por nosotros
const fs = require('fs'); // Modulo propio de Node
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    if (!Number(base) || !Number(limite)) {
        console.log(`Uno o ambos parametros enviados no son numeros.`);
        return;
    }
    console.log('======================='.blue);
    console.log(`======Tabla del ${base}======`.white);
    console.log('======================='.blue);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`.rainbow);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Uno o ambos parametros no son numeros.`);
            return;
        }
        let data = `Tabla del ${base}\n`;

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    listarTabla,
    crearArchivo
};