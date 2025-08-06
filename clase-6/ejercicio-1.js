let numeros = [30, 50, 10, 35];

const convertir = numeros.map(function (celcius) {
  return celcius * 1.8 + 32;
});

console.log(convertir);
