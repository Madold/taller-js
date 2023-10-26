var pesoGanado = 250;
var costoConcentrado = (peso) => {
    if (peso >= 100 && peso <= 200) {
        return (peso / 100) * 2 * 200000;
    } else if (peso > 200 && peso <= 300) {
        return (peso / 100) * 5 * 200000;
    } else if (peso > 300) {
        return (peso / 100) * 7 * 200000;
    } else {
        return 0;
    }
};

var costoMensual = costoConcentrado(pesoGanado);

console.log(`Costo mensual de concentrado: $${costoMensual}`);
