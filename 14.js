//Calcular el precio de una llamada telefónica teniendo en cuenta los siguiente: la llamada que dure hasta tres minutos inclusive cuesta $100, cada minuto adicional cuesta $50

var minutos = 1;
var precio = 100;
var precioTotal = 0;

if (minutos <= 3) {
  precioTotal = precio;
} else {
  precioTotal = precio + (minutos - 3) * 50;
}

console.log("El precio total de la llamada es: " + precioTotal);
