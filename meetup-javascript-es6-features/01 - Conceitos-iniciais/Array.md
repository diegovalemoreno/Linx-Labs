### Array
Antigamente para realizar qualquer operação em um vetor/array que houvesse a necessidade de manipular alguma informação, teriamos que utilizar um for ou até mesmo instalar alguma bibliotecas de terceiros, com achegada do ECS6+ podemos fazer diversas operações nos arrays como por exemplo obter um valor, criar, comparar, buscar e converter dados e outros array a partir de algumas funções específicas, a primeira função que iremos ver será o map().

#### MAP()
 const newArray = array.map(function(item){
    return item * 2
})
console.log(Multiplicado por 2: ${newArray} Multiplicado pelo índece: ${newArray2})

const newArray2 = array.map(function(item, index){
    return item * index
})


Antigamente para realizar qualquer operação em um vetor/array que houvesse a necessidade de manipular alguma informação, 
teriamos que utilizar um for ou até mesmo instalar alguma bibliotecas de terceiros, com achegada do ECS6+ podemos fazer diversas operações nos arrays 
como por exemplo obter um valor, criar, comparar, buscar e converter dados e outros array a partir de algumas funções específicas, como **map() filter() e reduce().**

O que **map()** faz: percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento com parâmetros. Para cada chamada de retorno, o valor devolvido se torna o elemento do novo array. Depois que todos os elementos foram percorridos, map() retorna o novo array com todos os elementos “traduzidos”.

O que **filter()** faz: como map(), filter() percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento. O valor retornado deve ser um booleano que indica se o elemento será mantido ou descartado. Depois de todos os elementos terem sido analisados, filter() retorna um novo array com todos os elementos que retornaram como verdadeiro.

O que **reduce()** faz: como **map()**, **reduce()** percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento. O valor retornado é o valor acumulado passado de callback para callback. Depois de todos os elementos terem sido avaliados, **reduce()** retorna o valor acumulado/concatenado.

```javascript
const usuarios = [
    { nome: 'Diego', idade: 20, departamento: 'P&D ' },
    { nome: 'Gabriel', idade: 15, departamento: 'Suporte' },
    { nome: 'Lucas', idade: 30, departamento: 'QA' },
    { nome: 'Daniela', idade: 25, departamento: 'QA' },
];

const idades = usuarios.map((usuario) => usuario.idade);
console.log(idades);

const filtro = usuarios.filter((usuario) =>
    usuario.idade >= 18 && usuario.departamento === 'QA');

console.log(filtro);

const procuraDepartamento = usuarios.find((usuario) =>
    usuario.departamento === 'QA');

console.log(procuraDepartamento);

const calculo = usuarios
    .map((usuario) => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter((usuario)=> usuario.idade <=50);

console.log(calculo);

var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(newarray)
 
var sum = usuarios.reduce( function( prevVal, elem ) {
    return prevVal + elem.launches;
}, 0 );
 
sum() // 85

ES6
console.log(usuarios.reduce( ( prevVal, elem ) => prevVal + elem.idade, 0 )); 
 
```

