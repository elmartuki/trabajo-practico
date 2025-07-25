let palabra = prompt("Ingrese una frase");

if (palabra) {
  const vocales = ["a", "e", "i", "o", "u"];

  if (palabra.includes("a")) {
    document.write("a");
  }

  if (palabra.includes("e")) {
    document.write("e");
  }

  if (palabra.includes("i")) {
    document.write("i");
  }

  if (palabra.includes("o")) {
    document.write("o");
  }

  if (palabra.includes("u")) {
    document.write("u");
  }
}

// switch (true) {
//   case palabra.includes("a"):
//     document.write("a");
//     break;

//   case palabra.includes("e"):
//     document.write("e");
//     break;

//     case palabra.includes("i"):
//     document.write("i");
//     break;

//     case palabra.includes("o"):
//     document.write("o");
//     break;

//      case palabra.includes("u"):
//     document.write("u");
//     break;

//   default:
//     break;
// }
