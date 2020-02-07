### Babel
Configurando o Babel, depois de ter instalado o node e yarn em sua máquina vamos criar uma pasta que irá conter nosso projeto, em seguida abra seu terminal a partir dessa pasta e execute o seguinte comando: yarn init Pressione a tecla Entre até aparecer a mensagem success saved packege.json (As versoes mais recente do yarn pode pedir para que informe o nome do projeto nesse caso pode colocar o mesmo nome da pasta do projeto) esse comando criará um arquivo packege,json que gerenciará as dependências instaladas no projeto. Vamos precisar instalar algumas dependências, para isso iremos precisar do** babel-cli** instalado em nossa máquina, é simplesmente uma linha de comando que Babel utiliza para instalar suas dependências e etc.

$ yarn add @babel/cli [ Instalando a cli do babel (linha de comando do Babel). ]
$ yarn add @babel/preset-env [ Instalando a preset-env. ]
Vamos criar na raiz de nosso projeto um arquivo `.babelrc` que vai conter o **seguinte trecho de código:**

{
  "presets": ["@babel/preset-env"]
}
O babel possui vários preset-env ele é o responsável por identificar qual ambiente estamos utilizando para desenvolver o projeto, se é um navegador (páginas web), servidor nodejs (API Rest) ou mobile(RN) e fará o trabalho de transpilar todo nosso código JSES6+ para uma versão que seja compreendia pela maioria dos navegadores e irá fazer isso da melhor forma possível.

**Vamos adicionar mais uma dependência ao babel:**
yarn add @babel/core

Ainda na raiz de nosso projeto vamos criar um arquivo index.html e main.js dentro do main.js adicione um alert(‘Funcionou’).
Feito isso vamos no arquivo packege.json e criar mais um objeto de nome “script” conforme figura abaixo:
"scripts": {
    "dev": "babel ./main.js -o ./bundle.js"

  }
O atributo dev vai pegar nosso arquivo main.js e transpilar todo o seu código em um novo arquivo chamado bunlde.js que seja compreendido por maioria dos navegadores, para realizar essa transpilação vá em seu terminal e digite yarn dev.

Note que foi criado um arquivo budle.js na raiz de seu projeto contendo o código convertido, mas perceba que nada mudou se comparado com main.js isso ocorre porque o alert(‘Funcionou’) é uma função reconhecida por versões anterios do ECS então ela é compreendida por todos os navegadores por isso não requer uma transpilação. Então vamos adicionar uma classe que é um feacture da versão mais recente no ECS6+ acompanhe na imagem abaixo, dentro do main.js reescreva o código da seguinte forma:



    class teste {
        static metodo (){
            alert('Funcionou')
        }
    }
    //Agora abra seu arquivo budle.js e veja como ficou!
    
    /*#__PURE__*/
    function () {
      function teste() {
        _classCallCheck(this, teste);
      }
    _createClass(teste, null, [{
    key: "metodo",
    value: function metodo() {
    alert('Funcionou');
    }
    }]);
    
    
    return teste;
    }();
