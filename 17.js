// 17.	Leer la presión arterial de una persona y escribir si la tiene alta o nó

var presion = 130;
var resultado = "";

if (presion < 120) {
  resultado = "Presion baja";
} else if (presion >= 120 && presion <= 140) {
  resultado = "Presion normal";
} else if (presion > 140) {
  resultado = "Presion alta";
} else {
  resultado = "Presion incorrecta";
}

console.log("La presion es: " + resultado);
