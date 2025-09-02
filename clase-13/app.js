let productosGlobales = [];

async function obtenerDatos() {
  try {
    let api_1 = "https://fakestoreapi.com/products";
    let resultado = await fetch(api_1);
    let datos = await resultado.json();
    return datos;
  } catch (error) {
    console.log(error);
  }
}

async function mostrarDatos(datos) {
  let tarjeta = document.getElementById("tarjetas");

  tarjeta.innerHTML = "";

  if (datos.length === 0) {
    tarjeta.innerHTML = "<p>No se encontro nada</p>";
  }
  datos.forEach((dato) => {
    const { title, price, image, description } = dato;

    tarjeta.innerHTML += `<article class="articulo">
          <div class="articulo-poster">
            <img src="${image}" alt="" />
          </div>

          <div class="articulo-contenedor-2">
            <div class="articulo-contenedor_titulo">
              <p>${title}</p>
            </div>
          </div>

          <div class="articulo-contenedor-3">
            <div class="articulo-genero">
              <p>$${price}</p>
            </div>
          </div>

          <div class="articulo-contenedor-4">
            <div class="articulo-contenedor_descripcion">
              <p>${description}</p>
            </div>
          </div>
        </article>`;
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  let datos = await obtenerDatos();

  productosGlobales = datos;

  // filtrar productos
  mostrarDatos(productosGlobales);

  const buscador = document.getElementById("buscador");
  buscador.addEventListener("input", (evento) => {
    let texto = evento.target.value.trim().toLowerCase();

    const ProductosFiltrados = productosGlobales.filter((producto) => {
      return producto.title.toLowerCase().includes(texto);
    });
    mostrarDatos(ProductosFiltrados);
  });
});
