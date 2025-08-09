function detectarMayorDeEdad(personas) {
  personas = [
    { nombre: "Lucia", edad: 15 },
    { nombre: "Florencia", edad: 31 },
    { nombre: "Edgardo", edad: 16 },
    { nombre: "Jesus", edad: 22 },
  ];

  for (const persona in personas) {
    todasLasPersonas = personas[persona];

    mayorDeEdad =
      todasLasPersonas.edad >= 18
        ? "si sos mayor de edad"
        : "no sos mayor de edad";

    console.log(todasLasPersonas.nombre, mayorDeEdad);
  }
}

detectarMayorDeEdad();
