function indicadorDePrecios(productos) {
  productos = [
    { nombre: "Mate Cocido 50un", precio: 1599 },
    { nombre: "Dulce de leche 490gr", precio: 2199 },
    { nombre: "Oreo 150gr", precio: 1199 },
  ];
  for (const producto in productos) {
    almacen = productos[producto];
    let precioConSigno = "$" + almacen.precio;

    console.log(
      "el producto",
      almacen.nombre,
      "cuesta",
      precioConSigno,
      "pesos"
    );
  }
}

indicadorDePrecios();
