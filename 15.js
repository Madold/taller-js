// Leer el mes y el dia de un año y escribir en que estacion nos encontramos (INVIERNO, PRIMAVERA, VERANO Y OTOÑO)

var mes = 10;
var dia = 1;
var estacion = "";

if (mes == 1 || mes == 2 || mes == 3) {
  estacion = "Verano";
} else if (mes == 4 || mes == 5 || mes == 6) {
  estacion = "Otoño";
} else if (mes == 7 || mes == 8 || mes == 9) {
  estacion = "Invierno";
} else if (mes == 10 || mes == 11 || mes == 12) {
  estacion = "Primavera";
} else {
  estacion = "Mes incorrecto";
}

console.log("La estacion es: " + estacion);
