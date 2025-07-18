let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let num3 = parseInt(prompt("Ingrese el tercer numero"));

let resultado = Math.max(num1, num2, num3);

let noEsMayor = Math.min(num1, num2, num3);

document.writeln("El numero mayor es ", resultado);
