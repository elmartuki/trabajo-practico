let formulario = document.getElementById("agregarTareas");
let tareas = document.getElementById("tareas");
let tareasIngresada = document.getElementById("tareaIngresada");
let tareasArray = [];

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const id = Date.now();
  const tarea = tareasIngresada.value;

  tareasArray.push({ id, tarea });

  tareas.innerHTML += `<li id="${id}">${tareasIngresada.value} <button id="eliminar" onclick="eliminar(${id})">Eliminar</button></li>
  `;
});

console.log(tareasArray);

function eliminar(id) {
  let tareaDom = document.getElementById(id);
  tareaDom.remove();
}
