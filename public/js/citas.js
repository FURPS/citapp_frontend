document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCita");
  const tablaCitas = document.querySelector("#tablaCitas tbody");

  let citas = [];

  // Cargar citas si existen en localStorage
  if (localStorage.getItem("citas")) {
    citas = JSON.parse(localStorage.getItem("citas"));
    renderCitas();
  }

  // Guardar nueva cita
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const motivo = document.getElementById("motivo").value.trim();

    if (!nombre || !fecha || !hora || !motivo) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const nuevaCita = { id: Date.now(), nombre, fecha, hora, motivo };
    citas.push(nuevaCita);

    localStorage.setItem("citas", JSON.stringify(citas));

    form.reset();
    renderCitas();
  });

  // Mostrar citas
  function renderCitas() {
    tablaCitas.innerHTML = "";
    citas.forEach((cita) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${cita.nombre}</td>
        <td>${cita.fecha}</td>
        <td>${cita.hora}</td>
        <td>${cita.motivo}</td>
        <td><button data-id="${cita.id}">Eliminar</button></td>
      `;
      tablaCitas.appendChild(fila);
    });
  }

  // Eliminar cita
  tablaCitas.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = parseInt(e.target.dataset.id);
      citas = citas.filter((cita) => cita.id !== id);
      localStorage.setItem("citas", JSON.stringify(citas));
      renderCitas();
    }
  });
});
