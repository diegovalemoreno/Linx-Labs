### Configurando o webpack
O que iremos fazer agora é configurar o webpack, este é uma espécie de serviço que irá nos disponibilizar uma forma de trabalhar com vários arquivos js na nossa aplicação, arquivos js, css, json, html e etc ou seja o webpack é um em pacotador de arquivos. Todos esses arquivos também serão transpilados para um único arquivo javascript .bundle com todas as informações. Abra o arquivo packege.json e faça a seguinte alteração no nome “dependencies” para “devDepencies”:



    "devDependencies": {
        "@babel/cli": "^7.2.3",
        "@babel/core": "^7.2.2",
        "@babel/plugin-proposal-object-rest-spread": "^7.2.0",
        "@babel/preset-env": "^7.2.3",
      },
Feita modificação necessária devemos colocar o sinal de “–D” antes de todas as dependências que queiramos instalar somente em ambiente de desenvolvimento, então vamos começar instalando o** webpack e webpack-cli**, vá em nosso terminal e digite os seguintes comandos:

**yarn add webpack webpack-cli -D**: [Instalando webpack e webpack-cli]
**webpack-cli**: [ é a linha de comandos do webpack.]
**webpack**: [ Em essência, o webpack é um empacotador de módulos estáticos para aplicativos JavaScript modernos. ]
Agora vamos criar um arquivo de configuração do webpack esse arquivo vai ter o nome de webpack.config.js sendo este arquivo principal e ficará em nossa raiz e vai conter o seguinte código:



    module.exports = {
      mode: 'development'
      entry: './main.js',
      output: {
        path: __dirname,
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
          }
        ]
      }
    };
Vamos conhecer um pouco mais sobre o código acima e suas propriedades.
**Entry**: [ Nos diz qual arquivo é o principal em nosso projeto. ]
**Output**: [{ } Recebe os caminho para onde dever ir o arquivo compilado (igual ao babel fazia antes) ]
**Path**: [ Recebe o endereço onde ficará o arquivo após conversão e __dirname é uma variável global que representa a raiz do projeto. ]
**Filename**: [ Recebe o nome desse arquivo que contém código copilado. ]
**Module**: [{ } Module tem uma propriedade que vai nos dizer como deve se comporta um arquivos baseado em sua extensão ]
**Test**: [ Utilizamos aqui uma expressão regular que nos diz qual extensão de arquivo deve ser considerada. ]
Exclude: [ Dizemos qual pastas ou arquivos queremos excluir. ]
**Use**: { }:

Voltamos ao terminal e vamos instalar mais uma dependência ao nosso package.json em ambiente de desenvolvimento.
yarn add babel-loader –-dev

E em nosso arquivo package.json no scriprs devemos alterar deixando da seguinte forma:

"scripts": {
    "dev": "webpack --module-development -w"
  }
  