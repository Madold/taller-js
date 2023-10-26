var peliculasAlquiladas = 10;
var precioAlquiler = 1200;
let peliculasGratis = 0;

if (peliculasAlquiladas > 15) {
    peliculasGratis = 5;
} else if (peliculasAlquiladas > 7) {
    peliculasGratis = 2;
} else if (peliculasAlquiladas > 3) {
    peliculasGratis = 1;
}

var peliculasEnCasa = peliculasAlquiladas + peliculasGratis;
var totalPagar = peliculasAlquiladas * precioAlquiler;

console.log(`Películas en casa: ${peliculasEnCasa}`);
console.log(`Total a pagar: $${totalPagar}`);
