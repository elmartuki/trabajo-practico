let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

let resultado = Math.max(num1, num2);

let noEsMayor = Math.min(num1, num2);

document.writeln(
  "El numero mayor es ",
  resultado,
  " porque el numero ",
  noEsMayor,
  " es menor",
  " a ",
  resultado
);
