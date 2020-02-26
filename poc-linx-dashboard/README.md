# Create React App [![Build Status](https://dev.azure.com/facebook/create-react-app/_apis/build/status/facebook.create-react-app?branchName=master)](https://dev.azure.com/facebook/create-react-app/_build/latest?definitionId=1&branchName=master) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/blob/master/CONTRIBUTING.md)

Cria um aplicativo sem a configuração de Build.

- [Criando um App](#creating-an-app) – Como criar um novo aplicativo.
- [Guia do usuário](https://facebook.github.io/create-react-app/) 

Create React App funciona em macOS, Windows, e Linux.<br>
E caso algo não funcione corretamente, por favor [abra uma issue](https://github.com/facebook/create-react-app/issues/new).<br>


## Rápido Overview

```sh
npx create-react-app my-app
cd my-app
npm start
```

É recomendável utilizar o comando npx pois ele é quem garante a utilização das última versões liberadas ao instalar o ReactJs 

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Se tudo funcionar corretamente será aberto automáticamente a url [http://localhost:3000/](http://localhost:3000/) e será possível ver nosso app rodando.<br>
Quando estiver tudo pronto para o deploy em produção, criaremos um bundle com o comando `npm run build`.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start'>
</p>

### Início imediato

Não será necessário instalar manualmente ferramentas como webpack or Babel.<br>
Ele são pré configurados e instalados porém ficam ocultos pra que o foco fique no desenvolvimento do código.

Create a project, and you’re good to go.

## Criando um App

**É necessário ter instalado na máquina o Node 8.16.0 ou Node 10.16.0 ou a última versão disponível** 

Para criar um novo App, você deve escolher um dos seguintes métodos:

### npx

```sh
npx create-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-app my-app
```

_`npm init <initializer>` disponível no npm 6+_

### Yarn

```sh
yarn create react-app my-app
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) é disponível no Yarn 0.25+_

Será criado então um diretório com o nome `my-app` dentro da pasta atual.<br>
Dentro deste diretório será gerado a estrutura inicial do projeto e instalado as dependências necessárias para a etapa inicial:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```
Sem configurações ou estrutura de diretórios complexos, mas apenas arquivos que realmente serão necessários para a construção do nosso app.<br>

Uma vez a instalação finalizada, é possível acessar o diretório do projeto:

```sh
cd my-app
```
Dentro do novo projeto criado, é possível executar alguns comandos built-in como por exemplo:

### `npm start` or `yarn start`

Executa o app em modo de desenvolvimento.<br>
Abra [http://localhost:3000](http://localhost:3000) para ver no browser.

As mudançcas realalizads no código são automáticamente carregadas<br>

Mais detalhes na documentação do Facebook [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).