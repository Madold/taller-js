var valorCompra = 725;
var cantidadRecibida = 1000;
var monedas = [100, 50, 25, 5, 1];
let cantidadRestante = cantidadRecibida - valorCompra;
let cambioMinimo = [];

for (let moneda of monedas) {
    var cantidadMoneda = Math.floor(cantidadRestante / moneda);
    cambioMinimo.push(cantidadMoneda);
    cantidadRestante -= cantidadMoneda * moneda;
}

console.log(`Cambio mínimo:`);
console.log(`Monedas de 100: ${cambioMinimo[0]}`);
console.log(`Monedas de 50: ${cambioMinimo[1]}`);
console.log(`Monedas de 25: ${cambioMinimo[2]}`);
console.log(`Monedas de 5: ${cambioMinimo[3]}`);
console.log(`Monedas de 1: ${cambioMinimo[4]}`);
