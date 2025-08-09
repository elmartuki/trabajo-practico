function sistemaDeNotas(alumnos) {
  alumnos = [
    { Nombre: "Juan", nota: 9 },
    { Nombre: "Pedro", nota: 5 },
    { Nombre: "Anapaula", nota: 8 },
  ];

  for (let key in alumnos) {
    let notaDelEstudiante = alumnos[key];
    resultado = notaDelEstudiante.nota >= 6 ? "¡Aprobaste!" : "Desaprobaste";
    console.log(alumnos[key], resultado);
  }
}

sistemaDeNotas();
