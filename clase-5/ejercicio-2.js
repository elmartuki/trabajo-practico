let numeroIngresado = parseInt(prompt("Ingrese un numeo del 1 al 10"));
let numeroRandom = Math.floor(Math.random() * 10) + 1;
let intentos = 1;

if (numeroRandom === numeroIngresado) {
  console.log("Adivinaste el numero random:", numeroRandom, "a la primera");
} else {
  while (numeroIngresado != numeroRandom) {
    console.log("No acertaste, intentalo de nuevo");
    intentos++;
    numeroIngresado = parseInt(prompt("Ingrese otro numero del 1 al 10"));
  }
  console.log(
    "Felicidades, acertaste al numero random:",
    numeroRandom,
    "despues de:",
    intentos,
    "intentos"
  );
}

// while (primerIntento != 1) {
//   console.log("Felicidades, acertaste a la primera");
// }
// primerIntento++;

// while (numeroIngresado != numeroRandom) {
//   console.log("No acertaste, intentalo de nuevo");
//   numeroIngresado = parseInt(prompt("Ingrese otro numero del 1 al 10"));
// }

// console.log("Felicidades, acertaste al numero");
