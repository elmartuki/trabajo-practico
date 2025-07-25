let numero = 1;
let contador = 0;

for (i = 1; numero <= 50; i++) {
  if (numero % 3 == 0) {
    console.log("El numero", i, "es multiplo de 3");
    contador++;
  } else {
  }
  numero++;
}

console.log("De los numeros del 1 al 50 hay:", contador, "multiplos");
