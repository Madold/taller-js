var trabajo = 8;
var test = 7;
var examen = 6;

var notaFinal = 0.3 * trabajo + 0.4 * test + 0.3 * examen;

if (notaFinal >= 9.5) {
    console.log("Matrícula de honor");
} else if (notaFinal >= 8.5) {
    console.log("Sobresaliente");
} else if (notaFinal >= 6.5) {
    console.log("Notable");
} else if (notaFinal >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}
