let bateria = parseInt(prompt("Ingrese su nivel de bateria"));

if (bateria >= 101) {
  document.write("Ingrese un valor valido entre 0 a 100");
} else if (bateria >= 80) {
  document.write("Su nivel de bateria esta llena");
} else if (bateria >= 30) {
  document.write("Bateria media");
} else if (bateria >= 0) {
  document.write("Bateria baja");
} else {
  document.write("Ingrese un valor valido entre 0 a 100");
}
