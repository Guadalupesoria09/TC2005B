console.log("hola mundo desde node");

//fs es el módulo para manipular el sistema de archivos
const filesystem = require('fs');

//Escribe el string del segundo parámetro 
//en el archivo indicado en el primer parámetro
filesystem.writeFileSync('hola.txt', 'Hola desde node');

setTimeout(() => {
    console.log('jojo te hackié');
}, 7000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 


// const http = require('http');
// const server = http.createServer( (request, response) => {    
//     console.log(request.url);
//     response.setHeader('Content-Type', 'text/html');
//     response.write("");
//     response.end();
// });
// server.listen(3000);