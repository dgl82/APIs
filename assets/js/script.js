// var monedas = {};

const inputMoneda = document.querySelector("#inputMoneda");
const selectMoneda = document.querySelector("#selectMoneda");
const btncambiarMoneda = document.querySelector("#cambiarMoneda");
const resultadoCambio = document.querySelector("#resultadoCambio");
const urlAPI = "https://mindicador.cl/api/";
const msjError = document.querySelector("#error");

async function getMonedas() {
  try {
    const res = await fetch(urlAPI);
    const data = await res.json();
    return data;
  } catch (error) {
    msjError.textContent = "Error: " + error.message;
  }
}

async function renderHTML() {
  const data = await getMonedas();
  tipo = selectMoneda.value;
  cantidadPesos = inputMoneda.value;
  tipoMoneda = data[tipo].valor;
  resultado = cantidadPesos / tipoMoneda;
  resultadoLimitado = resultado.toFixed(2);
  resultadoCambio.textContent = resultadoLimitado;
}

btncambiarMoneda.addEventListener("click", () => {
  renderHTML();
});
