let numeroIngresado = 0;

do {
  numeroIngresado = parseInt(prompt("Ingrese un numero entre 1 a 50"));

  if (numeroIngresado > 50) {
    alert("Ingrese un numero que sea menor a 50");
  }
} while (numeroIngresado > 50);

for (let i = 1; i <= numeroIngresado; i++) {
  console.log(i.toString().repeat(i));
}
