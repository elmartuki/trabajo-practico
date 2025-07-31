let textoIngresado = prompt("Ingrese un texto");
let resultado;

for (let i = 0; i < textoIngresado.length; i++) {
  resultado = textoIngresado.split("").join("-");
}

console.log(resultado);
