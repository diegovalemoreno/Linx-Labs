### Trabalhando com import & Expport

Em sequência vamos colocar o nosso webpack pra rodar, vá em seu terminal e digite yarn dev. Para testarmos esse webpack vamos começar a trabalhar com import/export e antes de mais nada alteraremos o arquivo index.js que atualmente recebe em seu script o main.js e vamos alterar para bundle.js.


Vamos então criar um novo arquivo de nome funções.js que conterá as seguintes funções:



    export function soma(a, b) {
      return a + b;
    }
    
    export function sub(a, b) {
      return a - b;
    }
    
    export function div(a, b) {
      return a / b;
    }
    
    export function mult(a, b) {
      return a * b;
    }

Então dentro do arquivo main.js vamos importa as funções que acabamos de criar em nosso arquivo funcoes.js




    import { soma, sub, div, mult } from '../funtions';
    console.log(soma(1, 3));

Note que todas as funções do arquivo funcoes.js estão sendo importadas para dentro do main.js import {soma, dev, mult, sub } from './funcoes' onde desta maneira podemos utiliza-las, perceba que todas as funções importadas foram passada entre o abrir e fechar de uma chave, isso ocorrer porque tudo que quisermos exportar seja funções, objetos, variável, classes e etc, e não declararmos o default então devemos fazer o uso das chaves.

Cada arquivo .js só pode ter apenas um propriedade default ou seja, em nosso exemplo do arquivo funcoes.js somente uma das funções poderia receber a propriedade default.

Quando definimos um export como default podemos importa-la sem a necessidade de usar as chaves entre ela e o mesmo pode ser renomeada para qualquer nome que desejar, foi o que aconteceu em somaFuncao, para obtermos os mesmos resultados sem utilizar default precisamos do “as” nesse caso deve ser passado entre chaves pois não estamos utilizando default, ficando da seguinte forma import { sub as subtração } from “./funções” .
