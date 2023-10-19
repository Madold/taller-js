// 9.	Dado un año, determinar si en bisiesto o no

var anio = 2023;

if (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) {
    console.log(`El año ${anio} es bisiesto.`);
} else {
    console.log(`El año ${anio} NO es bisiesto.`);
}