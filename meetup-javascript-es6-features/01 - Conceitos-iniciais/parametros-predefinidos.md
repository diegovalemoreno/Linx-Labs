### Parâmetros predefinidos

Em JavaScript, os parâmetros de funções tem undefined como valor predefinido. Contudo, em alguns casos pode ser útil utilizar algum outro valor. É nesta situação em que os parâmetros predefinidos podem ser úteis.

No passado, a estratégia de definir valores padrão para parâmetros era testar os valores do parâmetros no corpo da função e atribuir um valor se este for undefined. No exemplo a seguir, se nenhum valor for fornecido para b na chamada, este valor será undefined, quando a*b for calculado resultaria em NaN. No entanto, isto é capturado na segunda linha definindo um valor padrão para b:


**A passagem de parâmetro é bem simples**



    function subtracao(a, b) {
      return a - b;
    }
    console.log(subtracao(1, 2))
    
    const soma = (a = 1, b = 2) => a + b
    
    console.log(soma())
	
	
	

**Funcōes também podem ser utilizadas como parãmetros**
```javascript
function callSomething(thing = something()) { return thing }

function something() {
  return "sth";
}

console.log(callSomething());  //sth
```
