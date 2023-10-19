// Leer un numero del uno al 100 y pasarlo a numero romano

function numeroARomano(numero) {
  if (numero < 1 || numero > 100) {
    return "Número fuera del rango válido (1-100)";
  }

  var romanos = [
    { valor: 100, letra: "C" },
    { valor: 90, letra: "XC" },
    { valor: 50, letra: "L" },
    { valor: 40, letra: "XL" },
    { valor: 10, letra: "X" },
    { valor: 9, letra: "IX" },
    { valor: 5, letra: "V" },
    { valor: 4, letra: "IV" },
    { valor: 1, letra: "I" },
  ];

  var numeroRomano = "";

  for (let i = 0; i < romanos.length; i++) {
    while (numero >= romanos[i].valor) {
      numeroRomano += romanos[i].letra;
      numero -= romanos[i].valor;
    }
  }

  return numeroRomano;
}

var numeroRomano = numeroARomano(71);
console.log(numeroRomano);
