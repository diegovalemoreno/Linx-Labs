### Template literals

**É uma forma de incluir variáveis/constantes/objetos dentro de string no javascript ES6+ tornando-a menos verbosa.
**




      const empresa = 'Linx Sistemas e Consultoria LTDA'
      const ano = 1985
      const msg = 'Minha empresa '+ empresa + ' foi criada no ano de '+ ano+'.'
      console.log(msg)
 
No exemplo acima utilizamos o operador “+” para concatenar as string e variáveis, no exemplo abaixo vejamos como utilizamos o templete Literal.



      const mensagem = `Minha empresa ${empresa} foi criada no ano de ${ano}.`
      console.log(mensagem)
	  
	  let premio = 1.0,
      name = 'Diego';
      console.log(`${name.toUpperCase()}, voce ganhou R$${premio.toFixed(2)}!`);
	  
	  
	  
	  
	  
**Utilizando dentro de funcoes**



    console.log(`Hello ${getUserName()}.`);
