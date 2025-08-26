// esto es para ingresar un tiempo

let formulario = document.getElementById("formulario");
let imputTiempo = document.getElementById("tiempoIngresado");
comenzar.addEventListener("click", play);

let tiempoIngresado;
let tiempoIncial;
let tiempoFinalizado;

let stop = document.getElementById("stop");
stop.addEventListener("click", pausar);

// funcion para comenzar

function play(evento) {
  evento.preventDefault();

  tiempoIngresado = Number(imputTiempo.value);
  tiempoIncial = tiempoIngresado;

  tiempoFinalizado = setInterval(function () {
    let mostrar = document.getElementById("mostrar");
    tiempoIngresado--;

    let segundos = Math.floor(tiempoIngresado % 60);

    let minutos = Math.floor((tiempoIngresado % 3600) / 60);

    let horas = Math.floor((tiempoIngresado % 86400) / 3600);

    let dias = Math.floor(tiempoIngresado / 86400);

    if (tiempoIngresado <= 0) {
      clearInterval(tiempoFinalizado);
    }

    mostrar.innerHTML = `<p>${dias}d :${horas}h :${minutos}m :${segundos}s</p>`;
  }, 1000);
  return tiempoIngresado;
}

// funcion para pausar

function pausar() {
  clearInterval(tiempoFinalizado);
}

// funcion para resetear a 0

function reset() {
  tiempoIngresado = 1;
}
