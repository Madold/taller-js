// 8.	Realizar un programa que permita realizar la preselección de los integrante del equipo de baloncesto, cuyo requisito es tener mas de 1.80 mts de estatura y pesar menos de 100 Kg

var altura = 1.81;
var peso = 99;

if (altura > 1.80 && peso < 100) { 
    console.log("Usted es apto para el equipo de baloncesto.");
} else {
    console.log("Usted NO es apto para el equipo de baloncesto.");
}