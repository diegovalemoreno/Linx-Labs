**Async & Await**
Essa parte é bem interessante e nós não podíamos ir adiante sem antes conhecer um pouco mais sobre essa feature do ES6+, então vamos lá. Antes de mais nada vou passar de forma bem sucinta o que exatamente é esse recurso, basicamente o Async/Await é uma forma de trabalharmos com a programação assíncrona no JavaScript, você provavelmente já utilizou em algum momento em seus estudo com javascript alguma promise, as promise por sua vez são funções que solicitam requisições a Api, EndPints, backend e etc, de maneira assíncrona ou não.

Ela é muito útil quando precisamos consumir dados de algum lugar de maneira síncrona/assíncrona isso nos retorna um JSON por exemplo, daí podemos trabalha com esses dados em nossa página web. Também é possível criar promises mas por enquanto não iremos entrar em tetalhes aqui nesse tópico e sem mais delongas vamos logo direto ao Asysnc/Await na prática.

A primeira coisa que devemos fazer é instalar dois novosplugins do babel, isso é necessário porque o babel não compreende todas as feature do JS6+ de forma nativa (ES9 por exemplo) então ele precisa de recurso auxiliares para tornar isso possível, uma vez instalados, esses plug-ins auxiliares irão permitir que o babel compreenda async/await e os transpile da maneira mais coerente possível; Então vamos ver como instalar e configurar esses plug-ins:

  

    
$ yarn add @babel/plugin-transform-async-to-generator --dev

    
$ yarn add @babel/polyfill –-dev 

  

OBS: “-D” indica que essa instalação será feita em ambiente de desenvolvimento.

Feita as devidas instalações vamos realizar algumas alterações em nossos arquivos .babelrc e webpack.config.js abra o arquivo .babelrc e deixe-o da seguinte forma:



    {
      "presets": [
        "@babel/preset-env"
      ],
      "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-async-to-generator"
      ]
    }