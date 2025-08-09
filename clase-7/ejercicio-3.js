function mostrarInfo(producto) {
  producto = { nombre: "azucar", precio: 800, stock: 100 };
  for (let key in producto) {
    console.log(producto[key]);
  }
}

mostrarInfo();
