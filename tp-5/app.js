function comenzar() {
  let mostrar = document.getElementById("mostrar");
  let ocultar = document.getElementById("ocultar");

  ocultar.style.display = "none";

  mostrar.innerHTML = `<form id="formulario">
      <input
        id="numeroIngresado"
        placeholder="Ingrese un numero del 1 al 10"
        type="text"
      />
      <button>Enviar</button>
    </form>

    `;

  const formulario = document.getElementById("formulario");
  const numeroIngresado = document.getElementById("numeroIngresado");
  let numeroRandom = Math.round(Math.random() * 10);

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let numeroComparar = Number(numeroIngresado.value);

    if (numeroRandom === numeroComparar) {
      let label = document.getElementById("noAcertaste");
      label.innerHTML = `<label for="">Acertaste</label>`;
    } else if (numeroRandom < numeroComparar) {
      let label = document.getElementById("noAcertaste");
      label.innerHTML = `<label for="">No acertaste, el ${numeroComparar} que ingresate es mayor al numero aleatorio</label>`;
    } else if (numeroRandom > numeroComparar) {
      let label = document.getElementById("noAcertaste");
      label.innerHTML = `<label for="">No acertaste, el ${numeroComparar} que ingresate es menor al numero aleatorio</label>`;
    } else {
      let label = document.getElementById("noAcertaste");
      label.innerHTML = `<label for="">No acertaste, el ${numeroComparar} que ingresate no es valido</label>`;
    }
  });
}
