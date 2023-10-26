const peliculasAlquiladas = 10;
const precioAlquiler = 1200;
let peliculasGratis = 0;

if (peliculasAlquiladas > 15) {
    peliculasGratis = 5;
} else if (peliculasAlquiladas > 7) {
    peliculasGratis = 2;
} else if (peliculasAlquiladas > 3) {
    peliculasGratis = 1;
}

const peliculasEnCasa = peliculasAlquiladas + peliculasGratis;
const totalPagar = peliculasAlquiladas * precioAlquiler;

console.log(`Películas en casa: ${peliculasEnCasa}`);
console.log(`Total a pagar: $${totalPagar}`);
