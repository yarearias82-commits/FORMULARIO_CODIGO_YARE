const rango = document.getElementById("dolor");
const valor = document.getElementById("valorDolor");

rango.addEventListener("input", () => {
  valor.textContent = rango.value;
});

const form = document.getElementById("formSalud");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  mensaje.textContent = "Encuesta enviada correctamente ✅";
});
