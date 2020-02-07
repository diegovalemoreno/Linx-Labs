### Desestruturação

A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.


```javascript
var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = ['A', 'B', 'C', 'D', 'E'];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({a, b} = {a:1, b:2});
console.log(a); // 1
console.log(b); // 2
```

**Desestruturação de array**

```javascript
var foo = ["one", "two", "three"];
var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```
const usuario = {
  nome: 'Lucas Pedro',
  idade: 27,
  endereco: {
    cidade: 'Porto',
    UF: 'TO'
  }
}


**Antes ES6 +**
```javascript
const name = usuario.nome
const idade = usuario.idade
const uf = usuario.endereco.UF
const cidade = usuario.endereco.cidade
```

**Depois ES6 +**

```javascript
const { nome, idade, endereco: { cidade, UF } } = usuario
const dados = {
  nome,
  idade,
  cidade,
  UF
}

console.log(dados)

```
