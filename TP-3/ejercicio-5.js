let texto = "";

function determinarMayusculas(texto) {
  if (texto === texto.toUpperCase()) {
    console.log("Esta palabra esta escrita toda en mayusculas");
  } else if (texto === texto.toLowerCase()) {
    console.log("Esta palabra esta escrita toda en minusculas");
  } else {
    console.log("Esta palabra esta combinada con mayusculas y minisculas");
  }
}

determinarMayusculas("Hola");
