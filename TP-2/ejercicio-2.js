let notaIngresada = parseInt(prompt("Ingrese una nota del 1 al 10"));

if (notaIngresada < 0 || notaIngresada >= 11) {
  console.log("Numero erroneo");
} else if (notaIngresada === 10) {
  console.log("Sobresaliente");
} else if (notaIngresada >= 8) {
  console.log("Notable");
} else if (notaIngresada === 7) {
  console.log("Bien");
} else if (notaIngresada >= 5) {
  console.log("Suficiente");
} else if (notaIngresada >= 3) {
  console.log("Insuficiente");
} else if (notaIngresada <= 2) {
  console.log("Muy deficiente");
} else {
  console.log("Ingrese un numero valido");
}
