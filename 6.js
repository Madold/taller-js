//6.    Leer el dia y el mes y escribir a que estación pertenece (VERANO, OTOÑO, INVIERNO O PROMAVERA)

var mes = 1;
var dia = 12; 

if ((mes === 3 && dia >= 21) || mes === 4 || mes === 5 || (mes === 6 && dia < 21)) {
    console.log("PRIMAVERA");
} else if ((mes === 6 && dia >= 21) || mes === 7 || mes === 8 || (mes === 9 && dia < 22)) {
    console.log("VERANO");
} else if ((mes === 9 && dia >= 22) || mes === 10 || mes === 11 || (mes === 12 && dia < 21)) {
    console.log("OTOÑO");
} else {
    console.log("INVIERNO");
}