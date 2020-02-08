let cepBuscado;
console.log("Buscando CEP");
cepBuscado = buscarCep("02729-020");
console.log("CEP buscado");
console.log("CEP encontrado: ", cepBuscado);

function buscarCep(parametro) {
  let cep;
  fetch(`http://ws.matheuscastiglioni.com.br/ws/cep/find/${parametro}/json`)
    .then(response => response.json())
    .then(data => cep = data.cep)
    .catch(console.error);
  return cep;
}