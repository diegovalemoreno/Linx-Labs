const url = `http://localhost:3333/customers`;
const main = document.getElementById("main");
main.innerHTML = "<p>Carregando...";

const getListOfNames = customers => {
  const names = customers
    .map(customer => `<li>${customer.PF_NOME} ${customer.PF_SOBRENOME} </li>`)
    .join("\n");
  return `<ul>${names}</ul>`;
};

//Com promisse para a chamada de api
// buscarClientes();
function buscarClientes() {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(customers => (main.innerHTML = getListOfNames(customers)));
}



const buscarClientesAsync = async () => {
  const response = await (await fetch(url)).json();
  main.innerHTML = getListOfNames(response)  
}
//Agora com Async/Await
buscarClientesAsync();

const buscarClientesAsyncThen = async () => {
  const response = await fetch(url).then(response => response.json())
  main.innerHTML = getListOfNames(response)  
  console.log(response);
}
//Agora com Async/Await
buscarClientesAsyncThen();