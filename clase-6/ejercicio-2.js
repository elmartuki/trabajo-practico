let palabras = ["auto", "telescopio"];

const masDe5Letras = palabras.filter(function (palabra) {
  return palabra.length > 5;
});

console.log(masDe5Letras);
