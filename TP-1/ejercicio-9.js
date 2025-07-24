let palabra = prompt("Ingrese una frase");

if (palabra) {
  const vocales = ["a", "e", "i", "o", "u"];
  for (i = 0; palabra.length; i++) {
    if (palabra.includes(vocales[i])) {
      document.write(vocales[i]);
    }
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
