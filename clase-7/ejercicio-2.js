let producto = { nombre: "azucar", precio: 800, stock: 100 };

producto.precio = 600;

let productoAdd = { ...producto, categoria: "almacen" };

console.log(productoAdd);
