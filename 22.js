var ingresosAnuales = 1300000;
var estadoCivil = "casado";
var tieneHijos = false;

if (ingresosAnuales > 1200000) {
    console.log("Se concede el crédito");
} else if (ingresosAnuales > 1000000 && estadoCivil === "soltero") {
    console.log("Se concede el crédito");
} else if (ingresosAnuales > 1000000 && ingresosAnuales <= 1200000 && estadoCivil === "casado" && !tieneHijos) {
    console.log("Se concede el crédito");
} else {
    console.log("No se concede el crédito");
}
