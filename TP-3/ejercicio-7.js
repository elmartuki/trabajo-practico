let numeroIngresado = parseInt(prompt("Ingrese un numero"));
let multiplicar;

function tabla(numeroIngresado) {
  for (i = 1; i <= 10; i++) {
    multiplicar = numeroIngresado * i;
    console.log(numeroIngresado, "x", i, "=", multiplicar);
  }
}

tabla(numeroIngresado);
