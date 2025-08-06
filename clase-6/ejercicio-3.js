// function buscar(estaLaPalabra) {
//   console.log(estaLaPalabra);
// }

// function buscador(callback) {
//   let palabras = ["auto", "telescopio"];
//   let estaLaPalabra = palabras.indexOf("auto");
//   callback(estaLaPalabra);
// }

// buscador(buscar);

// function buscador(palabras) {
//   let estaLaPalabra = palabras.indexOf("auto");
//   console.log(estaLaPalabra);
// }

// buscador(["auto", "telescopio"]);

// let estaLaPalabra = palabras.indexOf("auto");

// console.log(estaLaPalabra);

let palabras = ["auto", "telescopio", "perro"];

// const index = palabras.findIndex((palabra) => palabra === "perro");

// console.log(index);

function buscador(palabras) {
  let buscar = palabras.findIndex((palabras) => palabras === "perro");
  console.log(buscar);
  return;
}

buscador(palabras);
