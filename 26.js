const trabajo = 8;
const test = 7;
const examen = 6;

const notaFinal = 0.3 * trabajo + 0.4 * test + 0.3 * examen;

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
