let palabras = ["auto", "telescopio"];

const estaLaPalabra = palabras.findIndex(function (palabra) {
  return palabra.indexOf("auto");
});

console.log(estaLaPalabra);
