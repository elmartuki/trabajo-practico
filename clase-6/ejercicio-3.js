function buscar(estaLaPalabra) {
  console.log(estaLaPalabra);
}

function buscador(callback) {
  let palabras = ["auto", "telescopio"];
  let estaLaPalabra = palabras.indexOf("auto");
  callback(estaLaPalabra);
}

buscador(buscar);

// function buscador(palabras) {
//   let estaLaPalabra = palabras.indexOf("auto");
//   console.log(estaLaPalabra);
// }

// buscador(["auto", "telescopio"]);

// let estaLaPalabra = palabras.indexOf("auto");

// console.log(estaLaPalabra);
