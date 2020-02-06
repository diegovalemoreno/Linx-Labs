### Arrow function

**Arrow function** é uma maneira mais simples de escrever funções e com algumas vantagens a mais sobre as tradicionais funções, acompanhe o exemplo abaixo.

#### Como era antes.....

    olaPessoal = function() {
      return "Fala galera blz?"
    }
    
    console.log(olaPessoal())


#### Com arrow functions
    
    olaPessoal = () => "Fala galera blz?";
    console.log(olaPessoal())



```javascript
olaPessoal = nome => `Meu nome é: ${nome}`
console.log(olaPessoal('Diego'));

const arr = [1, 2, 3, 4, 5];

console.log(arr.map(item => item + 10));


const usuario = { nome: "Diego", idade: 23 };

const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);


const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = "Diego", idade = 18) => ({
  nome,
  idade
});

const user = mostraUsuario(nome, idade);
// console.log(user)
mostraUsuario(nome);
```

