var dia = 15;
var mes = 10;
var año = 2023;

var esBisiesto = (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;

var diasEnMes = [
  31,
  esBisiesto ? 29 : 28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

dia++;

if (dia > diasEnMes[mes - 1]) {
  dia = 1;
  mes++;
  if (mes > 12) {
    mes = 1;
    año++;
  }
}
console.log("Fecha del dia siguiente:", dia, mes, año);