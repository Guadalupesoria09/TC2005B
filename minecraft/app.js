console.log("hola mundo desde node");

//fs es el módulo para manipular el sistema de archivos
const filesystem = require('fs');

//Escribe el string del segundo parámetro 
//en el archivo indicado en el primer parámetro
filesystem.writeFileSync('hola.txt', 'Hola desde node');

const te_hackie = () => {
    console.log('jojo te hackié');
};

//Código asíncrono: te_hackie se ejecuta en 7 segundos
setTimeout(te_hackie, 7000);
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

//Código asíncrono el arreglon se imprime en orden
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 

console.log("Esto se imprime antes de los números");

//http es un módulo de node con todas las funciones de un servidor web
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("hola mundo desde node");
    response.end();
});
server.listen(3000);