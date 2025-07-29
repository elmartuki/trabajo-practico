let suma = 0;
let numeroIngresado;

do {
  numeroIngresado = parseInt(prompt("Ingrese un número:"));

  if (numeroIngresado.toString() == numeroIngresado) {
    suma += numeroIngresado;
  } else {
    alert("Ingresa un valor numerico");
  }
} while (confirm("¿Queres continuar?"));

console.log("La suma total de los números que ingresaste es:", suma);
