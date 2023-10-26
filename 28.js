var montoRetiro = 100000;

if (montoRetiro < 20000 || montoRetiro > 1200000 || montoRetiro % 10000 !== 0) {
    console.log("Monto no válido");
} else {
    var billetes20 = Math.floor(montoRetiro / 20000);
    var billetes50 = Math.floor((montoRetiro - billetes20 * 20000) / 50000);
    console.log(`Billetes de 20 mil: ${billetes20}, Billetes de 50 mil: ${billetes50}`);
}
