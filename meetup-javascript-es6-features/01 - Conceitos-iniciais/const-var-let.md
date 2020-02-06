## **Const & Let**

### Hoisting

Em JavaScript, toda variável é “elevada/içada” (hoisting) até o topo do seu contexto de execução. Esse mecanismo move as variáveis para o topo do seu escopo antes da execução do código.

### var
No caso da palavra-chave var, além da variável ser içada (hoisting) ela é automaticamente inicializada com o valor undefined (caso não seja atribuído nenhum outro valor).

### let
Foi pensando em trazer o escopo de bloco (tão conhecido em outras linguagens) que o ECMAScript 6 destinou-se a disponibilizar essa mesma flexibilidade (e uniformidade) para a linguagem.

### const
Supondo que temos uma variável que queremos garantir sua inicialização com um determinado valor, como podemos fazer isso no JavaScript sem causar uma inicialização **default** com **undefined**?

Para termos esse tipo de comportamento em uma variável no JavaScript, podemos declarar constantes por meio da palavra-chave **const**. 

Através da palavra-chave let podemos declarar variáveis com escopo de bloco.

```javascript
var exibeMensagem = function() { 
    var mensagemForaDoIf = 'Mensagem fora do IF'; 
    if(true) { 
        var mensagemDentroDoIf = 'Mensagem dentro do IF'; 
        console.log(mensagemDentroDoIf)// Mensagem dentro do IF ;
    } 
    console.log(mensagemForaDoIf); // Mensagem fora do IF 

    console.log(mensagemDentroDoIf); // Mensagem dentro do IF aqui funciona pois o Javascript faz o Hoisting, ou seja ele eleva a declaração da variável para o topo do contexto. Ou seja para o topo da function.
}

exibeMensagem();

//Outro exemplo é a utilização antes mesmo da declaração

var exibeMensagem = function() { 
    mensagem = 'Mensagem'; 
    console.log(mensagem); 
    var mensagem; //Declaraçao da variável depois de atribuição de valor.
}

exibeMensagem();

//O famoso undefined

void function(){ 
    console.log(mensagem); 
}();
var mensagem;

//Entendendo o Let - Variáveis que funcionam apenas dentro do seu escopo de codigo.

var exibeMensagem = function() {
     if(true) { 
         var escopoFuncao = 'Escopo da Funcão'; 
         let escopoBloco = 'Escopo do bloco';

        console.log(escopoBloco); // Escopo do bloco
    } 
    console.log(escopoFuncao); // Escopo da Funcão  
    console.log(escopoBloco); // Erro ja que este cara está no scopo do bloco dentro do IF
}

exibeMensagem();

void function(){ 
    let mensagem; 
    console.log(mensagem); // Imprime undefined 
}();

void function(){ 
    const mensagem = 'Agora vai'; 
    console.log(mensagem); // Alura
    mensagem = 'Ja foi'; 
}();

//constante válida 
const idade = 18;

// constante inválida: onde está a inicialização? 
const pi;
 
```
