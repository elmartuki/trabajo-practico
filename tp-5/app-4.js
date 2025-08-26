function horaActual() {
  let mostrarHora = document.getElementById("mostrarHora");
  setInterval(function () {
    let hora = new Date();
    let año = hora.getFullYear();
    let mes = hora.getMonth();
    let horas = hora.getHours();
    let minutos = hora.getMinutes();
    let segundos = hora.getSeconds();
    let dia = hora.getDay();
    let convertirMeses = [
      {
        id: 1,
        meses: "enero",
      },
      {
        id: 2,
        meses: "febrero",
      },
      {
        id: 3,
        meses: "marzo",
      },
      {
        id: 4,
        meses: "abril",
      },
      {
        id: 5,
        meses: "mayo",
      },
      {
        id: 6,
        meses: "junio",
      },
      {
        id: 7,
        meses: "julio",
      },
      {
        id: 8,
        meses: "agosto",
      },
      {
        id: 9,
        meses: "septiembre",
      },
      {
        id: 10,
        meses: "octubre",
      },
      {
        id: 11,
        meses: "noviembre",
      },
      {
        id: 12,
        meses: "diciembre",
      },
    ];

    let hoyEs = [
      { id: 0, dia: "domingo" },
      { id: 1, dia: "lunes" },
      { id: 2, dia: "martes" },
      { id: 3, dia: "miercoles" },
      { id: 4, dia: "jueves" },
      { id: 5, dia: "viernes" },
      { id: 6, dia: "sabado" },
    ];

    const mesActual = convertirMeses.find(function (meses) {
      meses = meses.id === mes + 1;
      return meses;
    });

    const diaAcual = hoyEs.find(function (hoy) {
      hoy = hoy.id === dia;
      return hoy;
    });

    mostrarHora.innerHTML = `<article class="reloj">
        <div class="reloj_dia">
          <p>${diaAcual.dia} ${dia} ${mesActual.meses} del ${año}</p>
        </div>
        <div class="reloj_hora">
          <p>${horas}:${minutos}:${segundos} </p>
        </div>`;
  }, 1000);
}

horaActual();
