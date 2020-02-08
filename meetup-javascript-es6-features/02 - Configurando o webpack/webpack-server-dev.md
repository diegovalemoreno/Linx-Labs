
**  Webpack DevServer**

Vamos começar fazendo algumas alterações em nossa estrutura, primeiro criaremos duas pastas uma nome src e outra com public, depois de criar as pastas vamos adicionar todos os arquivos .js que serão monitorados pelo webpack-dev-server e nesse caso será o main.js já em public ficarão os arquivos que não serão monitorados ou seja o index.htmls

Com a nova estrutura de pasta que acabamos de definir, vamos alterar o nosso arquivo webpack.config.js para receber essas novas configurações, veja abaxo o que deve ser feito.


     mode: 'development',
      entry: './src/main.js',
      output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
      },
    
Entry: [ recebe um novo caminho já que o nosso arquivo main.js foi adicionado na pasta src. ]
Path: [ recebe + ‘/public’ que é o novo caminho para index.html. ]

Em seguida vamos instalar nosso webpack-dev-server no modo de desenvolvimento “-D” em seu terminal execute o seguinte comando:

$ yarn add webpack-dev-server --dev


Após instalar webpack-dev-sever vamos voltar em nosso arquivo webpack.config.js realizar a seguintes alterações:
Iremos adicionar uma nova configuração devServe: {} que possui uma propriedade contentBase cuja valor é igual a __dirname + ‘/public’, essa propriedade nos permite dizer onde o arquivo build (Buil são os arquivos que serão enviados para produção) de nossa aplicação será salva e especificamos esse caminho dizendo __dirname + ‘/public’ ou seja estamos salvando em nossa pasta public que contém os arquivos estáticos do nosso projeto.

Em nosso arquivo package.json temos a seguinte configuração de script.

 "webpack": "webpack --module-development -w"

Veja asseguir como arquivo package.json deve ficar para atender nossas necessidades, tendo em vista que queremos utilizar o webpack-dev-server e não mais o webpack apenas, e quando executarmos nosso projeto (yarn dev) estaremos realizando um processo de compilação.

  "scripts": {
    "dev": "webpack-dev-server --module=development",
    "build": "webpack --module=production",
  }

  Nesta alteração foi adicionado mais uma propriedade “build” ao nosso script, em “dev” alteramos seu valor para “webpack-dev-sever –module=development” desta maneira quando iniciar nosso projeto estaremos usando o webpack-dev-server e não mais o wepack apenas. Vá até o promt e execute $ yarn dev em seguida você deve obter uma tela semelhante a que vemos abaixo, como a frase final copiled sucsessofully.

  Esse processo que o webpack-dev-server realizar é chamado de compilação ou seja ele pega todos nossos arquivos envolvidos no projeto e compila em uma única saída (Bundle.js) nesse caso bundle, mas vocês devem estar se perguntando aonde está o nosso arquivo bundle.js? bem ele não mais estará visível para nós enquanto tivermos trabalhando em modo de desenvolvimento, então para onde foi esse arquivo?

O build está em algum lugar sendo executado pelo webpack, mas perceba que em nosso script dentro do arquivo package.json temos um parâmetro chamado build e esse será o script deveremos executar sempre que quisermos subir nosso sistema para ambiente de produção, acompanhe abaixo como fazer esse processo:

$ yarn build: [ Executando o processo de Build (construir ) ]

Após o processo ser finalizado vá na pasta public e veja quem esta por lá além do index.js é claro. Viu o bundle.js? Então esse é todo nosso sistema compilado para um único arquivo. Mas atenção esse arquivo somente irá funcionar em ambiente de produção.