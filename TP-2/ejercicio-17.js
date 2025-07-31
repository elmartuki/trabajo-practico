let textoIngresado = prompt("Ingrese un texto");

let resultado;
let posicionA;
let posicionE;
let posicionI;
let posicionO;
let posicionU;

for (let i = 0; i < textoIngresado.length; i++) {
  resultado = textoIngresado.toLowerCase();

  posicionA = resultado.indexOf("a");
  posicionE = resultado.indexOf("e");
  posicionI = resultado.indexOf("i");
  posicionO = resultado.indexOf("o");
  posicionU = resultado.indexOf("u");

  if (posicionA === 0 || posicionA === 1) {
    console.log(
      "En la palabra:",
      resultado,
      "la letra A, es la primera porque esta en la posicion",
      posicionA
    );
  } else if (posicionE === 0 || posicionE === 1) {
    console.log(
      "En la palabra:",
      resultado,
      "la letra E, es la primera porque esta en la posicion",
      posicionE
    );
  } else if (posicionI === 0 || posicionI === 1) {
    console.log(
      "En la palabra:",
      resultado,
      "la letra I, es la primera porque esta en la posicion",
      posicionI
    );
  } else if (posicionO === 0 || posicionO === 1) {
    console.log(
      "En la palabra:",
      resultado,
      "la letra O, es la primera porque esta en la posicion",
      posicionO
    );
  } else if (posicionU === 0 || posicionU === 1) {
    console.log(
      "En la palabra:",
      resultado,
      "la letra U, es la primera porque esta en la posicion",
      posicionU
    );
  } else {
    console.log("Ingresaste mal los datos, intentalo de nuevo mas tarde");
  }
}

if (posicionA === 0 || posicionA === 1) {
  console.log("En la palabra:", resultado);
  console.log(
    "la letra A, es la primera porque esta en la posicion",
    posicionA
  );
} else if (posicionE === 0 || posicionE === 1) {
  console.log("En la palabra:", resultado);
  console.log(
    "la letra E, es la primera porque esta en la posicion",
    posicionE
  );
} else if (posicionI === 0 || posicionI === 1) {
  console.log("En la palabra:", resultado);
  console.log(
    "la letra I, es la primera porque esta en la posicion",
    posicionI
  );
} else if (posicionO === 0 || posicionO === 1) {
  console.log("En la palabra:", resultado);
  console.log(
    "la letra O, es la primera porque esta en la posicion",
    posicionO
  );
} else if (posicionU === 0 || posicionU === 1) {
  console.log("En la palabra:", resultado);
  console.log(
    "la letra U, es la primera porque esta en la posicion",
    posicionU
  );
} else {
  console.log("Ingresaste mal los datos, intentalo de nuevo mas tarde");
}
