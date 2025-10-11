document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPaciente");
  const tablaPacientes = document.querySelector("#tablaPacientes tbody");

  let pacientes = [];

  // Cargar pacientes guardados
  if (localStorage.getItem("pacientes")) {
    pacientes = JSON.parse(localStorage.getItem("pacientes"));
    renderPacientes();
  }

  // Registrar nuevo paciente
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (!nombre || !documento || !telefono || !correo) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validar duplicado por documento
    const existe = pacientes.some((p) => p.documento === documento);
    if (existe) {
      alert("Ya existe un paciente con ese documento.");
      return;
    }

    const nuevoPaciente = {
      id: Date.now(),
      nombre,
      documento,
      telefono,
      correo,
    };

    pacientes.push(nuevoPaciente);
    localStorage.setItem("pacientes", JSON.stringify(pacientes));

    form.reset();
    renderPacientes();
  });

  // Renderizar pacientes
  function renderPacientes() {
    tablaPacientes.innerHTML = "";
    pacientes.forEach((p) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${p.nombre}</td>
        <td>${p.documento}</td>
        <td>${p.telefono}</td>
        <td>${p.correo}</td>
        <td><button data-id="${p.id}">Eliminar</button></td>
      `;
      tablaPacientes.appendChild(fila);
    });
  }

  // Eliminar paciente
  tablaPacientes.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = parseInt(e.target.dataset.id);
      pacientes = pacientes.filter((p) => p.id !== id);
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
      renderPacientes();
    }
  });
});
