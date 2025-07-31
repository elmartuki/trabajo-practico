let dniIngresado;
let resto;
let comprobarString = "";

do {
  dniIngresado = parseInt(prompt("Ingrese un DNI"));
  resto = dniIngresado % 23;

  if (dniIngresado > 99999999 || dniIngresado < 0) {
    alert("Ingrese un numero entre 0 a 99.999.999 sin puntos");
  } else if (dniIngresado > 0 || dniIngresado < 99999999) {
    if (resto === 0) {
      console.log("El dni numero:", dniIngresado, "T");
    } else if (resto === 1) {
      console.log("El dni numero:", dniIngresado, "R");
    } else if (resto === 2) {
      console.log("El dni numero:", dniIngresado, "W");
    } else if (resto === 3) {
      console.log("El dni numero:", dniIngresado, "A");
    } else if (resto === 4) {
      console.log("El dni numero:", dniIngresado, "G");
    } else if (resto === 5) {
      console.log("El dni numero:", dniIngresado, "M");
    } else if (resto === 6) {
      console.log("El dni numero:", dniIngresado, "Y");
    } else if (resto === 7) {
      console.log("El dni numero:", dniIngresado, "F");
    } else if (resto === 8) {
      console.log("El dni numero:", dniIngresado, "P");
    } else if (resto === 9) {
      console.log("El dni numero:", dniIngresado, "D");
    } else if (resto === 10) {
      console.log("El dni numero:", dniIngresado, "X");
    } else if (resto === 11) {
      console.log("El dni numero:", dniIngresado, "B");
    } else if (resto === 12) {
      console.log("El dni numero:", dniIngresado, "N");
    } else if (resto === 13) {
      console.log("El dni numero:", dniIngresado, "J");
    } else if (resto === 14) {
      console.log("El dni numero:", dniIngresado, "Z");
    } else if (resto === 15) {
      console.log("El dni numero:", dniIngresado, "S");
    } else if (resto === 16) {
      console.log("El dni numero:", dniIngresado, "Q");
    } else if (resto === 17) {
      console.log("El dni numero:", dniIngresado, "V");
    } else if (resto === 18) {
      console.log("El dni numero:", dniIngresado, "H");
    } else if (resto === 19) {
      console.log("El dni numero:", dniIngresado, "L");
    } else if (resto === 20) {
      console.log("El dni numero:", dniIngresado, "C");
    } else if (resto === 21) {
      console.log("El dni numero:", dniIngresado, "K");
    } else if (resto === 22) {
      console.log("El dni numero:", dniIngresado, "E");
    }
  } else {
    alert("Ingrese un numero entre 0 a 99.999.999 que no sea texto");
  }
} while (confirm("¿Desea salir?") == false);
