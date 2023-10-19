// Leer el tipo de sangre y el RH de dos personas una donante y otra receptora para saber si el donante puede transferirle sangre

var tipoSangreDonante = "A";
var factorRHDonante = "+";

var tipoSangreReceptor = "A";
var factorRHReceptor = "+";

var esCompatible = false;

if (tipoSangreDonante === tipoSangreReceptor) {
  if (factorRHDonante === "+" && factorRHReceptor === "+") {
    esCompatible = true;
  } else if (factorRHDonante === "-" && factorRHReceptor === "-") {
    esCompatible = true;
  }
}

if (esCompatible) {
  console.log(
    "El donante es compatible con el receptor. Puede transferir sangre."
  );
} else {
  console.log(
    "El donante no es compatible con el receptor. No puede transferir sangre."
  );
}
