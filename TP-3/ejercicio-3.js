let posiciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let suma = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;
  posiciones[suma]++;
}
console.table("Suma", suma);
console.table("Apariciones:", posiciones.slice(2, 13));
