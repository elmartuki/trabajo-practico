let saltoDeLinea = "\n";
let separador = ".-";
let textoSumado = "";

do {
  let cadenaDeTextoIngresada = prompt("Ingrese una frase");
  textoSumado += separador + cadenaDeTextoIngresada + saltoDeLinea;
} while (confirm());

console.log(textoSumado);
