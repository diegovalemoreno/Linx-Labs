clienteBuscado = buscarClientes();

function buscarClientes() {
  const main = document.getElementById("main");
  main.innerHTML = "<p>Carregando...";

  const url = `http://localhost:3333/customers`;
  fetch(url)
  .then(response => {
    return response.json();
  }).then(customers => main.innerHTML = getListOfNames(customers));
  
  const getListOfNames = (customers) => {
    const names = customers
      .map((customer) => `<li>${customer.PF_NOME} ${customer.PF_SOBRENOME} </li>`)
      .join("\n");
      return `<ul>${names}</ul>`;
};
}
