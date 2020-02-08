const axios = require('axios');

async function wrapperCallApi(url) {

  try{
  const response = await axios.get(url);

  return response.data;
  }catch(error) {
    console.log("error", error);
  }
}

async function request(url) {
  const data =  await wrapperCallApi(url);
  return data[0];
}

function *main() {
  var idCliente = yield request( "http://localhost:3333/customers?ID=12286" );
  yield request( "http://localhost:3333/customers?ID=" + idCliente );
}

var generator = main()
generator.next().value.then(function (userData) {
  console.log(userData.ID)
  return generator.next(userData.ID).value.then(function (reposData) {
    console.log(JSON.stringify(reposData))
    return JSON.stringify(reposData.NOME_CLIENTE);
  });
})