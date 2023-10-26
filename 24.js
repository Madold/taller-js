var ladoA = 5;
var ladoB = 4;
var ladoC = 6;

var triángulo = ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA;
var equilátero = ladoA === ladoB && ladoB === ladoC;
var isósceles = ladoA === ladoB || ladoB === ladoC || ladoA === ladoC;
var escaleno = !equilátero && !isósceles;

console.log(`¿Es un triángulo? ${triángulo}`);
console.log(`¿Equilátero? ${equilátero}`);
console.log(`¿Isósceles? ${isósceles}`);
console.log(`¿Escaleno? ${escaleno}`);
