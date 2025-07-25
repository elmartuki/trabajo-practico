let numero = parseInt(prompt("Ingrese un numero"));

if (numero) {
  document.write("El numero ", numero, " es divisible en ");
} else {
  document.write("No ingresaste ningun valor");
}

if (numero % 2 === 0) {
  document.write(" 2, ");
} else {
}

if (numero % 3 === 0) {
  document.write(" 3, ");
} else {
}

if (numero % 5 === 0) {
  document.write(" 5, ");
} else {
}

if (numero % 7 === 0) {
  document.write(" 7, ");
} else {
}
