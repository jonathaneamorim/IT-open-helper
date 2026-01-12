# Conteudo referente a trilha de Javascript

## Conteudo básico
- Curso básico de Javascript - CodeAcademy
  - Funções de impressão (console.log, alert);
  - Escopo de variáveis e constantes (let, var, const)
  - Estruturas condicionais (if, else);
  - Estruturas de repetição (for, while);
  - Declarar e operar as funções na linguagem;
  - Arrow function (ECMA-5);
  - Comprovação
![Code Academy](/assets/codeAcademy.png)

- Curso de Javascript do Gustavo Guanabara
  - [Acessar Playlist](https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1)

 
## Conteudo Médio
- Requisições AJAX
  - pt-br: API REST com JSON Server, Requisições
  - inglês: Create a fake REST API with JSON-Server
    - [Video sobre api Rest com JSON Server](https://www.fabricadecodigo.com/json-server/)
    - [Documentação Oficial Json-server](https://www.npmjs.com/package/json-server)
    - Detalhamento FETCH:
      - O fetch é um método do nativo do Javascript que permite realizar requisições HTTP sem a necessidade de bibliotecas ou frameworks externos. O método fetch é um método assíncrono que retorna uma promisse. Existem duas formas de trabalhar com o fetch:
        - A primeira forma é utilizando o fetch().then o qual é uma maneira simplificada de realizar a operação assíncrona.
          ```
          fetch('http://simulation.request.com/users', config)
          .then(res => res.json())
          .then(response => console.log(response))
          .catch(err => console.log(err));
          ```
        - A outra forma de utilizar é utilizando o ASYNC/AWAIT. Essa forma é ama forma mais limpa e legível de visualizar uma requisição utilizando o fetch.
          ```
          async function getUser() {
            try {
              const response = await fetch('http://simulation.request.com/users', config);
              // inserir exceções para tratamento de erro
              const dados = await response.json();
              console.log(dados);
            } catch (err) {
              console.log(err);
            }
          }
          ``` 
        - Documentação sobre as respostas do fetch: [Fetch responses](https://developer.mozilla.org/pt-BR/docs/Web/API/Response)
        - [Exemplo de utilização do FETCH](/tests/jsonserver/assets/js/services/api.js);
- Promises, async/await
  - pt-br: Requisições AJAX com JavaScript
  - inglês: Javascript Promises
    - Detalhamento ASYNC/AWAIT:
      - O `async` e o `await` são utilizados para trabalhar com código assíncrono, ou seja, aquele em que algumas operações podem ser iniciadas e, enquanto aguardam a conclusão o programa continua executando outras tarefas. Resumidamente eles servem para não travar a execução do codigo enquanto aguarda o resultado dessas operações.
        ```
            // Exemplo de codigo síncrono
            console.log('Inicio'); // Exibe o primeiro console
            alert('Meio'); // Trava o programa para exibir o alert
            console.log('Fim'); // Apos o alert ser fechado exibe o ultimo console
        ``` 
        Nesse exemplo, o código fica bloqueado esperando o usuário fechar o alert, o que impede que a linha console.log('Fim') seja executada até isso acontecer.

        ```
            // Mesmo exemplo só que utilizando um código assíncrono 
            console.log("Início"); // Exibe o primeiro console
            setTimeout(() => {
                console.log("Fim");
            }, 2000); // Vai esperar 2 segundos antes de exibir "Fim", mas o código continua executando enquanto isso

            console.log("Meio"); // Vai exibir o console após o inicio
        ```
        Aqui, o código não fica bloqueado. Ele começa a execução da função setTimeout e continua com console.log("Meio") enquanto aguarda a conclusão do setTimeout. O "Fim" só é exibido após 2 segundos, mas o programa não foi "travado" enquanto isso.
        - [Exemplo de utilização do ASYNC|AWAIT](/tests/jsonserver/assets/js/services/api.js);

    - Detalhamento Promisses:
      - Podemos comparar a promisse como uma promessa de algo que vai acontecer no futuro. São utilizadas no JS para representar uma ação ASSINCRONA, ou seja, como explicado anteriormente é algo que não acontece imediatamente.
      - A promisse possui 3 estados principais:
        - Pending(Em espera): Quando você cria uma Promisse, ela começa no estado de pending. Significa que o que você pediu ainda está sendo feito.
        - Fulfilled (Cumprida): Quando a operação assincrona é concluida. No caso você recebe o que foi prometido.
        - Rejected (Reijeitada): Se algo der errado e a operação nao puder ser concluida, a Promisse é rejeitada.
      - Promisse é uma classe padrão no Javascript, a qual outras classes utilizam suas propriedades como é o caso do FETCH que é uma função nativa do JS que retorna uma Promisse(class).
      - [Exemplo de utilização da Classe Promisse](/tests/promisse/promisse.js)
- Manipulação DOM
  - inglês: The Document Object Model
    - Detalhamento DOM:
      - Resumidamente o DOM é o modelo de objeto de um arquivo HTML que podem ser acessados via JS para trabalhar de forma mais dinâmica com uma página. Com ele é possível realizar diversas interações como alterar os estilos de elementos, adicionar ou remover elementos, ocultar ou exibir elementos, alterar valores de elementos e muito mais. Os objetos HTML possuem propriedades e métodos que podem ser usados para manipulação, como innerHTML, style, addEventListener, entre outros.;
        ```
        const element = document.querySelector('#elementSelector'); // Atribuir a uma variável a referência a um elemento HTML
        element.innerHTML += 'Hello World'; // Alterar o conteudo do elemento selecionado na página HTML
        element.style.color = 'red'; // Alterando a estilização de um elemento
        ``` 
        Também é possivel manipular os eventos que ocorrem uma página HTML como clique de mouse, movimento de mouse, teclas pressionadas e muito mais.
        ```
          const button = document.querySelector('.seletor');
          button.onclick = () => {
            console.log('Pressionado');
          }
        ```
- Event Propagation/Event Bubbling
  - inglês: Event Bubbling (MDN)
    - Detalhamento Event bubbling:
      - O bubbling é um comportamento padrão de propagação de eventos em JavaScript. Quando um evento é disparado em um elemento filho, ele se propaga para os elementos pais. Ou seja, o evento começa no elemento mais específico e sobe na árvore DOM até o document. Isso permite adicionar um único ouvinte de evento em um elemento pai, como uma lista ou um contêiner, para capturar eventos em vários filhos.
      Exemplo
          ```
          // Crio uma lista que possui 3 filhos
          <body>
            <ul id="list">
              <li> Item 1 </li>
              <li class="item2"> Item 2 </li>
              <li> Item 3 </li>
            </ul>
          </body>

          <script>
            const list = document.querySelector('#list');
            list.addEventListener('click', (event) => {
              // O 'event.target' nos permite acessar o elemento específico que foi clicado
              if (event.target.matches('li.item2')) {
                console.log('O item clicado foi o item 2');
              }
              // No exemplo, o evento é inserido no elemento pai (ul),
              // e ao clicar no filho <li class="item2">, a propagação faz com que o evento seja capturado no elemento pai.
            });
          </script>
          ``` 
        - Existe um comportamento que é o oposto do bubblign, onde o evento começa na raiz e desce até o elemento específico, chamado capturing. Segue um exemplo prático:
          ```
          list.addEventListener('click', (event) => {
            console.log('Evento capturado no UL');
          }, true);  // 'true' ativa o capturing
          ``` 
## Conteudo avançado
- Node.js: o que é, como funciona
  - Detalhamento Node.js
    - O Node.js é um ambiente de execução do código Javascript do lado servidor (server side). Com ele é possivel criar aplicações no formato standalone (autossuficiente) em uma maquina servidora sem precisar de navegador.
    - O arquivo pricipal é o `package.json` onde fica armazenado as principais informações sobre o projeto que incluem, nome do projeto, versão, arquivo entryPoint, author e dependencias. 
- Entendendo o npm e seus principais comandos (npm init, npm install, npm run);
  - O NPM e o YARN são gerenciadores de pacote do Node, ou seja `repositorios` de codigo voltados para pacotes do Node.
  - Por padrão o NPM já vem instalado junto com o Node mas se for necessário basta instalar o YARN a partir do NPM.
  - Quando é utilizado o comando `npm install <packageName>` acontece um fenomeno parecido com o git pull, onde o node puxa as informações da biblioteca e aloca em uma pasta chamada `node_modules` e insere a informação do pacote no package.json.
  - Quando um pacote é instalado, dependendo do pacote, é instalado com ele outros pacotes que são necessários para utilizar aquele pacote especifico. Esses outros pacotes também vão para a pasta `node_modules` e são listados no arquivo package-lock.json.
  - [Documentação NPM](https://docs.npmjs.com/)
    - Alguns comandos básicos do NPM
      ```
        | npm init -> Inicia um projeto node (Pede algumas informações e cria o arquivo package.json). Caso utilize a flag `-y` cria o package com as informações padrão
        | npm install -> Instala uma dependencia para a utilização e caso não haja cria a pasta node_modules.
        | npm run -> É usado para executar scrips definidos no arquivo package.json key ("scripts"), e o mesmo possui alguns subcomandos:
          | npm run start -> Vai rodar o comando que estiver no valor "start".
          | npm run test -> Vai rodar os testes usando uma lib pré-definida.
          | npm run build -> É utilizado como build da aplicação
          | npm run dev -> Vai iniciar o servidor que reiniciará automaticamente o servidor sempre que ocorrer mudanças no codigo.
      ``` 
- Entendendo automatizadores de tarefas e uso de Gulp.
  - Detalhamento Automatizadores de tarefas e GULP.
    - Automatizadores de tarefas são ferramentas que automatizam processos repetitivos no desenvolvimento de software no geral. Exemplos de uso:
      - Minificação de arquivos - GULP e GRUNT
      - Compilação de arquivos - GULP E GRUNT
      - Otimização de imagens 
      - Execução de testes.
    - GULP: O Gulp é um automatizador de tarefas baseado em streams (fluxo de dados) do Node, utilizado para automatizar processos de minificação de arquivos compilação de arquivos SCSS para CSS, concatenação de scripts e otimização de imagens
      - As configurações de otimização se encontrarão no arquivo gulpfile.js
        ```
        // Exemplo básico de utilização do GULP
        npm install --global gulp-cli // Esse comando vai permitir que o gulp possa ser excutado no terminal, mas ele ainda precisa ser instalado como dependencia no projeto
        npm install --save-dev gulp 
        /* Esse comando instala as dependencias do gulp no projeto, detalhe que o --save-dev indica que essa dependencia só vai ser utilizada em ambientes de desenvolvimento e não são necessários em ambiente de produção. Por esse motivo a dependencia será listada no `devDependencies` do package.json ao inves do `dependencies`. Isso é importante para evitar o excesso de pacotes em produção, deixando apenas o necessário. */

        Criar o arquivo `gulpfile.js` na raiz do projeto

        const gulp = require('gulp');
        gulp.task('<nameFunction>', (done) => {
          console.log('Hello World');
          done(); // Indica que a tarefa foi concluida pois não há return
        })

        No terminal execute o comando `gulp <namFunction>` que a tarefa será executada.
        ``` 
        [Uso prático do GULP](/tests/node_gulp/)
- O que é Babel.js e para que serve:
  - Detalhamento Babel.js
    - Antes de entender o que é e que faz o Babel precisamos entender a diferença entre compiladores e transpiladores:
      - Compilador: é um recurso que possibilita traduzir uma linguagem de médio ou alto nível para uma linguagem de nivel mais baixo.
      - Transpilador: Ferramenta que lê um codigo em uma linguagem de programação e produz um código equivalente com o mesmo nivel de abstração
    - Agora que já sabemos, vamos entender o que é o Babel. Ele é um automatizador de tarefa, no caso uma ferramenta para pré-processar Javscirpt que converte um código escrito nas versões mais atuais do Javascript para versões mais antigas do Javascript. Essa mudança torna o código compativel para navegadores que possuem versões mais antigas do JS. Entre as funcionalidades do Babel é possivel encontrar:
      - Sintaxe de transformação
        - Funcionalidade principal, que transforma código escrito em linguagem Atual como o ES6
      - Recursos Polyfill
        - Preenche as lacunas de compatibilidade com navegadores, ou seja, caso o recurso nao exista na versão antiga ele é adicionado.
      - Transformações de codigo fonte
        - Quando um código original é modificado para atingir um determinado objetivo.
    - Uma desvantagem do Babel, diferente do GULP, faz com que o código acabe ficando mais extenso.
    - Uso Prático do Babel:
      ```
        // Iniciando as configurações do BabelJs
        npm install --save-dev @babel/core @babel/cli @babel/preset-env core-js
        /*
        --save-dev: Como já explicado na sessão de gulp, insere o modulo apenas em ambiente de desenvolvimento.
        @babel/core: Adiciona o núcleo do Babel.
        @babel/cli: Permite executar o babel a partir da linha de comando.
        @@babel/preset-env: Premite usar as funcionalidades do js e transpila para versoes mais antigas
        core-js: Fornece polyfills necessários para recursos mais recentes do Js.
        */

        O arquivo de configuração do babel deve ser nomeado de `babel.config.js` ou `.babelrc`
        // Estrutura do arquivo babel.config.js
        module.exports = {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: '> 0.25%, not dead', // Especifica para quais navegadores o código será transpilado.
              useBuiltIns: 'usage', // Adiciona polyfills de acordo com o que o código usa.
              corejs: 3, // Define a versão do core-js.
            },
          ],
        ],
      };

      // Agora no arquivo package.json basta inserir as configurações de build
      "scripts": {
        "build": "babel <srcFolder> --out-dir <distFolder>"
      }

      Para buildar os arquivos basta executar o comando
      `npm run build`
      ``` 
    - [O que é babel?](https://coodesh.com/blog/dicionario/o-que-e-babel/)
    - [Uso prático do babelJS](/tests/node_babel/)