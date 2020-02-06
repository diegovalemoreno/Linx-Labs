<h1> Classe </h1>
<p>
Então vamos adicionar uma classe que é um das features da versão mais recente no ECS6+ acompanhe na imagem abaixo, dentro do main.js reescreva o código da seguinte forma:
</p><br>

```javascript
class DocumentoFiscal {
  constructor(numero, serie, modeloFiscal) {
    this._numero = numero;
    this._serie = serie;
    this._modeloFiscal = modeloFiscal;
    this.itens = []
  }
  imprimir() {
    return `Imprimindo a nota fiscal ${this._numero} série ${this._serie}!`;
  }

 adicionarItens() {
   this.itens.push('Novo Item')
   console.log(this.itens)
 }

  static info() {
    return 'Esta classe serve para criar notas fiscais!';
  }
 
  get modeloFiscal() {
 
    switch (this._modeloFiscal) {
      case 65:
        return `O modelo fiscal ${this._modeloFiscal} é de NFC-e!`;
      case 59:
       return `O modelo fiscal ${this._modeloFiscal} é de CF-e S@T!`;
      case 55:
        reutrn `O modelo fiscal ${this._modeloFiscal} é de NF-e!`;
      default:
        return 'Desculpa, tentamos achar o modelo fiscal mas não deu ' + this._modeloFiscal + '.';
    }

  }

  set modeloFiscal(newModeloFiscal) {
    this._modeloFiscal = newModeloFiscal;
  }

}
```

    const notaFiscal = new DocumentoFiscal('0000045', '2', 59);
    console.log(notaFiscal);
    notaFiscal.imprimir()
    notaFiscal.adicionarItens('Produto A')
    notaFiscal.adicionarItens('Produto B')
    DocumentoFiscal.info() //Instanciando método estático
    notaFiscal.modeloFiscal = 65 //Setando valor através do Setter
    console.log(notaFiscal.modeloFiscal); //Pegando valor através do Getter
    console.log('---');
    

<h4>Herança </h4>

Outra característica interessante das classes é que podemos herdar métodos e atributos da classe pai (também é conhecida por classe mãe) da mesma forma que temos em linguagem mais madura no paradigma da Orientação a Objeto. <br>

```javascript
class Nfce extends DocumentoFiscal {
  constructor(numero, serie, modeloFiscal) {
    super(numero, serie, modeloFiscal)
    this.statusSefaz = 0;
  }

  enviarSefaz() {
    this.statusSefaz = `Nota ${this._numero} enviada para o MID`;
    console.log(this.statusSefaz)
  }
  
}
```

    const nota = new Nfce('0000045', '2', 59);
    nota.adicionarItens();
    nota.enviarSefaz();
	
	