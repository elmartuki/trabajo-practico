let nota = parseInt(prompt("Ingrese su nota"));

if (nota <= -1 || nota >= 11) {
  document.write("Ingrese un valor entre 0 a 10");
} else if (nota === 10) {
  document.write("Excelente, te sacaste 10");
} else if (nota >= 8) {
  document.write("Muy bueno, sigue así");
} else if (nota >= 6) {
  document.write("Bueno");
} else if (nota >= 4) {
  document.write("Desaprobado");
} else if (nota >= 0) {
  document.write("Desaprobado, malisimo te vas para marzo");
} else {
  document.write("Ingrese un valor entre 0 a 10");
}

// switch (nota) {
//   case 10:
//     document.write("Excelente, te sacaste 10");
//     break;

//   case 8:
//   case 9:
//     document.write("Muy bueno, sigue así");
//     break;

//   case 7:
//   case 6:
//     document.write("Bueno");
//     break;

//   case 5:
//   case 4:
//     document.write("Desaprobado");
//     break;

//   case 3:
//   case 2:
//   case 1:
//   case 0:
//     document.write("Desaprobado, malisimo te vas para marzo");
//     break;

//   default:
//     document.write("Ingrese un valor entre 0 a 10");
//     break;
// }
