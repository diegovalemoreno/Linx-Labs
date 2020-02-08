### ES6 Generators (function*)

É muito comum precisarmos manipular itens de uma lista e, para tal, o JavaScript evoluiu e passou a nos oferecer diversos métodos como map e filter em Arrays, e construtores na própria linguagem como for…of e for…in.
Justamente com esta evolução toda, ES6 nos trouxe os generators.

**Conceito**

Generators seguem um conceito onde você pode “continuar” de onde parou anteriormente, até completar uma determinada tarefa.
Por isso, acostume-se com a ideia de interromper o fluxo de sua função antes de terminar a tarefa, mas lembrando que a “situação” atual da função será retomada na próxima execução para continuar de onde havia parado.

**Iterator Symbol**

Uma novidade no ES6 foi, justamente, a adição de Symbols. Eles nos oferecem acesso a funcionalidades da linguagem em um nível nunca antes visto.
O símbolo iterador é representado por @@iterator e pode ser acessado por meio da constante Symbol.iterator.
O mais legal é que podemos usá-lo até mesmo em nossos objetos nativos:



    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; let it = arr[Symbol.iterator]();
    console.log(it.next().value); // 1
    console.log(it.next().value); // 2
    console.log(it.next().value); // 3
    console.log(it.next().value); // 4

**Iterator**

Um iterator (iterador) é um objeto que oferece a funcionalidade de navegar entre os itens de uma lista ou estrutura – um a um – em sequência. Este objeto oferece o método next, o qual retornará o próximo item da lista no seguinte formato:


    {
      value: Mixed,
      done: Boolean
    }
    
Onde value corresponde ao valor do item atual, e done, é um booleano que será true quando não houverem mais itens a serem iterados. Isso significa que, quando done for true, o value em value será undefined.  

**Spark ***

Para tornarmos uma função no JavaScript em um generator, usamos o token * junto ao token function.
function* myGen () { // ... }

Isso quer dizer que – toda vez que executarmos tal função – ela nos retornará, na realidade, um novo generator.

**yield**

Acrescentamos um novo token, o yield. Yield remete-se à colheita no campo. Imagine que você precise fazer a colheita, mas é impossível finalizar toda a tarefa de uma só vez, você precisará voltar no dia seguinte para continuar de onde parou.


    function* gen() { 
    yield "A";
    yield "B"; 
    yield "C"; 
    } 
    var g = gen(); // "Generator { }" 


#### Exemplo prático de consumo de uma API com ES6 Generators

Para este exemplo foi utilizada a biblioteca [Axios](https://github.com/axios/axios "Axios"), uma biblioteca para HTTP com recursos de promisses.




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
	
    //Aqui começa a brincadeira
	
    var generator = main()
    generator.next().value.then(function (userData) {
      console.log(userData.ID)
      return generator.next(userData.ID).value.then(function (reposData) {
        console.log(JSON.stringify(reposData))
        return JSON.stringify(reposData.NOME_CLIENTE);
      });
    })
	

Mais info. no site oficial da [Mozila](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function* "Mozila").
[Objects Generators](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Generatorhttp:// "Objects Generators")