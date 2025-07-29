let edad1 = parseInt(prompt("Ingrese una edad"));
let nombre1 = prompt("Ingrese un nombre");

let edad2 = parseInt(prompt("Ingrese una edad"));
let nombre2 = prompt("Ingrese un nombre");

let edad3 = parseInt(prompt("Ingrese una edad"));
let nombre3 = prompt("Ingrese un nombre");

let mayor = Math.max(edad1, edad2, edad3);

if (edad1 === mayor) {
  console.log(nombre1, "es el mayor");
} else if (edad2 === mayor) {
  console.log(nombre2, "es el mayor");
} else if (edad3 === mayor) {
  console.log(nombre3, "es el mayor");
} else {
  console.log("Ingrese bien los datos");
}
