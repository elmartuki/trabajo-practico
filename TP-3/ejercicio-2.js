let nombreDeCiudades = [];

do {
  let nombreDeCiudadesIngresados = prompt("Ingrese un numero de una ciudad");
  nombreDeCiudades.push(nombreDeCiudadesIngresados);
} while (confirm("¿Desea cerrar el programa?") == false);

console.log(
  "El arreglo de ciudades tiene",
  nombreDeCiudades.length,
  "elementos"
);
console.log(
  "Elemento 1er posicion",
  nombreDeCiudades[0],
  "Elemento 3er posicion",
  nombreDeCiudades[2],
  "Elemento ultima posicion",
  nombreDeCiudades.at(-1)
);
nombreDeCiudades.push("Paris");
nombreDeCiudades.splice(1, 1, "Barcelona");

console.log("Arreglo de ciudades", nombreDeCiudades);
