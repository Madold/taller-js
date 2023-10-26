const medidas = [65, 75, 80, 90, 55, 70, 62, 68, 72, 78];
const maximoAdmitido = 50;

const mediaMedidas = medidas.reduce((a, b) => a + b) / medidas.length;

if (mediaMedidas > maximoAdmitido) {
    console.log("El nivel de ruido es nocivo para la salud");
} else {
    console.log("El nivel de ruido es admisible");
}
