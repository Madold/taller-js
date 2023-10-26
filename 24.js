const ladoA = 5;
const ladoB = 4;
const ladoC = 6;

const triángulo = ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA;
const equilátero = ladoA === ladoB && ladoB === ladoC;
const isósceles = ladoA === ladoB || ladoB === ladoC || ladoA === ladoC;
const escaleno = !equilátero && !isósceles;

console.log(`¿Es un triángulo? ${triángulo}`);
console.log(`¿Equilátero? ${equilátero}`);
console.log(`¿Isósceles? ${isósceles}`);
console.log(`¿Escaleno? ${escaleno}`);
