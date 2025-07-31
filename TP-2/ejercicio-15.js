let textoIngresado = prompt("Ingrese un texto");
let contador = 0;
let letra;

for (let i = 0; i < textoIngresado.length; i++) {
  letra = textoIngresado.toLowerCase();
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    contador++;
  }
}

console.log("en el texto:", textoIngresado, "hay", contador, "vocales");
