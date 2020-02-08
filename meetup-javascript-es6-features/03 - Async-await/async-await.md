### **Async & Await**

Essa parte é bem interessante e nós não podíamos ir adiante sem antes conhecer um pouco mais sobre essa feature do ES6+, então vamos lá. Antes de mais nada vou passar de forma bem sucinta o que exatamente é esse recurso, basicamente o Async/Await é uma forma de trabalharmos com a programação assíncrona no JavaScript, você provavelmente já utilizou em algum momento em seus estudo com javascript alguma promise, as promise por sua vez são funções que solicitam requisições a Api, EndPoints, backend e etc, de maneira assíncrona ou não.

Ela é muito útil quando precisamos consumir dados de algum lugar de maneira síncrona/assíncrona isso nos retorna um JSON por exemplo, daí podemos trabalha com esses dados em nossa página web. Também é possível criar promises mas por enquanto não iremos entrar em tetalhes aqui nesse tópico e sem mais delongas vamos logo direto ao Asysnc/Await na prática.

A primeira coisa que devemos fazer é instalar dois novos plugins do babel, isso é necessário porque o babel não compreende todas as feature do JS6+ de forma nativa (ES9 por exemplo) então ele precisa de recurso auxiliares para tornar isso possível, uma vez instalados, esses plug-ins auxiliares irão permitir que o babel compreenda async/await e os transpile da maneira mais coerente possível; Então vamos ver como instalar e configurar esses plug-ins:

  

    
$ yarn add @babel/plugin-transform-async-to-generator --dev

    
$ yarn add @babel/polyfill –-dev 

  

OBS: “-D” indica que essa instalação será feita em ambiente de desenvolvimento.

Feita as devidas instalações vamos realizar algumas alterações em nossos arquivos .babelrc e webpack.config.js abra o arquivo .babelrc e deixe-o da seguinte forma:



    {
      "presets": [
        "@babel/preset-env"
      ],
      "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-async-to-generator"
      ]
    }
    
    
### **Mas...antes vamos falar de promisses**

Para a programação assíncrona anteriormente utilizavamos promisses que é um recurso muito utilizado. Porém nosso código fica extremamente verboso e de dificil interpretacao quando temos muitas tomadas de decisoes com o resultado na nossa regra de negócio.

Para simular uma API aqui estou usando o pacote [json-server](https://www.npmjs.com/package/json-server "json-server").
E para deixar ele rodando basta criar um arquivo  como **db.json** (o nome tanto faz mas na chamada tem que passar o nome do arquivo) com os dados que deseja retornar e executar o comando:

json-server --watch db.json -p 3333


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
	
    buscarClientes();
	
    function buscarClientes() {
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(customers => (main.innerHTML = getListOfNames(customers)));
    }
    
	
A partir do ES8 nós temos a sintaxa do Async/Await que deixa nosso código muito limpo. Olha a diferença:

    const buscarClientesAsync = async () => {
    const response = await (await fetch(url)).json();
    main.innerHTML = getListOfNames(response) }
    //Agora com Async/Await
    buscarClientesAsync();
	
	
	
### Também é possível utilizar o .then com async functions...

    const buscarClientesAsyncThen = async () => {
   	const response = await fetch(url).then(response => response.json())
    main.innerHTML = getListOfNames(response)  
      console.log(response);
    }
    //Agora com Async e then
    buscarClientesAsyncThen();
	

[Código fonte completo](https://github.com/diegovalemoreno/Linx-Labs/tree/master/meetup-javascript-es6-features/03%20-%20Async-await/async-await "Código fonte completo")

