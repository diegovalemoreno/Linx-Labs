### Operadores rest/spread

**Rest operator**

Se o último argumento nomeado de uma função tiver prefixo com ** ...,** ele irá se tornar um array em que os elemento de 0 (inclusive) até theArgs.length (exclusivo) são disponibilizados pelos argumentos atuais passados à função.


```javascript
var meuNome = ["Diego" , "Vale" , "Moreno"] ;
const [nome , ...sobreNome] = meuNome ;
console.log(nome); // Diego ;
console.log(sobreNome); // [ "Vale" , "Moreno"] ;

//Spread Operator

var meuNome = ["Diego" , "Vale" , "Moreno"] ;
var newArr = [...meuNome ,"Desenvolvedor" , 31];
console.log(newArr) ; // ["Diego" , "Vale" , "Moreno" , "Desenvolvedor" , 31 ] ;

const arr = ['Diego', 'de Souza', 'Vale'];
const arr2 = [...arr, 'Moreno'];
console.log(arr2)

function soma(...params) {
  return params.reduce( ( total, next ) => total + next)
}

console.log(soma(1,2,3)); 
```


**Spread**

 permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados, ou que um objeto seja expandido onde zero ou mais pares propriedade:valor (para objetos literais) são esperados.
 
** Unindo 2 arrays com spread operator**
 
```javascript
const arr = ['Diego', 'de Souza'];
const arr2 = ['Vale', 'Moreno'];
const arr3 = [...arr, ...arr2]

console.log(arr3)
```
** Usando o spread quando se quer mudar apenas alguma(s) informação(oes) de um array criando um novo** 

```javascript
const usuario = {
  nome:'Diego',
  idade: 23,
  empresa: 'Linx SA'
}

const usuario2 = {...usuario, nome: 'Diego Moreno'}

console.log(usuario2)
```


