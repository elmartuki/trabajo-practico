let opcionElegida = parseInt(
  prompt(
    "Ingrese una de estas opciones: \n 1 - Consultar saldo \n 2 - Retirar dinero \n 3 - Depositar dinero \n 4 - Salir  "
  )
);

switch (opcionElegida) {
  case 1:
    document.write(
      "Su saldo en su cuenta en dolares es de: $",
      Math.floor(Math.random("") * 10000)
    );
    break;
  case 2:
    let retirar = parseInt(
      prompt("¿Cuanto dinero en efectivo quiere retirar?")
    );
    document.write("Procediendo al retiro de dinero de: $", retirar);
    break;

  case 3:
    let deposito = parseInt(prompt("¿Cuanto dinero quiere depositar?"));
    document.write("Procediendo al deposito de su dinero: $", deposito);
    break;

  case 4:
    document.write("Gracias por usar el cajero. ¡Hasta luego!");
    break;

  default:
    document.write("Ingrese una opcion valida");
    break;
}
