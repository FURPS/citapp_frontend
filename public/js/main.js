document.addEventListener("DOMContentLoaded", () => {
  const btnEmpezar = document.getElementById("btnEmpezar");
  
  btnEmpezar.addEventListener("click", () => {
    // Redirige a la página de citas
    window.location.href = "citas.html";
  });
});
