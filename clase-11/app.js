const peliculas = [
  {
    titulo: "El Padrino",
    anio: 1972,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmNiNzM4MTctODI5YS00MzczLWE2MzktNzY4YmNjYjA5YmY1XkEyXkFqcGc@._V1_.jpg",
    genero: ["Crimen", "Drama"],
    rating: 9.2,
    descripcion:
      "La saga de la familia Corleone y el ascenso de Michael en el mundo del crimen organizado.",
  },
  {
    titulo: "Matrix",
    anio: 1999,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
    genero: ["Acción", "Ciencia ficción"],
    rating: 8.7,
    descripcion:
      "Un hacker descubre que la realidad es una simulación y se une a la resistencia para liberar a la humanidad.",
  },
  {
    titulo: "El viaje de Chihiro",
    anio: 2001,
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2E2YzcwMTQtNWRlMC00ZGZlLWJhZTEtMDU4ZGIzMWI0NzJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genero: ["Animación", "Fantasía", "Aventura"],
    rating: 8.6,
    descripcion:
      "Una niña queda atrapada en un mundo de espíritus y debe trabajar en un baño público mágico para salvar a sus padres.",
  },
  {
    titulo: "Parásitos",
    anio: 2019,
    poster: "https://es.web.img3.acsta.net/pictures/19/09/17/17/13/3740579.jpg",
    genero: ["Suspenso", "Drama"],
    rating: 8.5,
    descripcion:
      "Dos familias de realidades opuestas entrelazan sus vidas en una historia de engaño, clases sociales y consecuencias.",
  },
  {
    titulo: "Mad Max",
    anio: 2015,
    poster:
      "https://m.media-amazon.com/images/M/MV5BODE2NWUwYmYtYmNmZi00OTVjLTgxMzEtZWYyMWVmODg5MmM2XkEyXkFqcGc@._V1_.jpg",
    genero: ["Acción", "Aventura"],
    rating: 8.1,
    descripcion:
      "En un desierto postapocalíptico, Max y Furiosa huyen de un tirano mientras lideran una frenética persecución.",
  },
];

function mostrarPeliculas() {
  peliculas.forEach((pelicula) => {
    let tarjeta = document.getElementById("peliculas");

    tarjeta.innerHTML += `<article class="pelicula">
            <div class="pelicula-poster">
              <img
                src="${pelicula.poster}"
                alt=""
              />
            </div>
            <div class="pelicula-contenedor-1">
              <div class="pelicula-contenedor_rating">
                <p>${pelicula.rating} estrellas</p>
              </div>
              <div class="pelicula-contenedor_año">
                <p>${pelicula.anio}</p>
              </div>
              
            </div>

            <div class="pelicula-contenedor-2">
              <div class="pelicula-contenedor_titulo">
                <p>${pelicula.titulo}</p>
              </div>
            </div>

            <div class="pelicula-contenedor-3">
              <div class="pelicula-genero">
                <p>${pelicula.genero}</p>
              </div>
            </div>

            <div class="pelicula-contenedor-4">
              <div class="pelicula-contenedor_descripcion">
                <p>${pelicula.descripcion}</p>
              </div>
            </div>
          </article>`;
  });
}

mostrarPeliculas();
