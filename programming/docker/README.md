# DockerTutorial
Guia completo sobre Docker, a plataforma de containers que facilita a criação, implantação e execução de aplicações em ambientes isolados. Aprenda a trabalhar com Dockerfiles, imagens, volumes, redes e Docker Compose. Ideal para iniciantes e desenvolvedores que buscam eficiência e consistência em seus ambientes de desenvolvimento.

## Start
- LXC & DOCKER
- SUDO APT/DNF INSTALL docker.io docker-compose
    - docker.io: Componente básico para rodar o docker
    - docker-compose: Subir conteiners usando docker files 
- Ele precisa iniciar junto com o sistema e esteja habilitado
    - Usar o comando `sudo systemctl enable --now docker docker.socket containerd`.
- Menu de ajuda com os principais comandos: `docker --help`.
- Repositorio comunitario com imagens e aplicações para docker: [DockerHub](https://hub.docker.com/)

- Docker serve para muitas coisas, isso inclue:
    - Rodar aplicações para testar: Wordpress etc
    - Testar temas, plugins etc

- Para instalar uma imagem do docker basta acessar o sistema como admin `sudo su`
    - `docker pull <imageName>`: Baixará uma imagem do dockerhub (caso a versão da imagem não for especificada ele baixará a mais recente [latest])
        - A imagem baixada pode ser utilizada para criar vários conteiners e servidores diferentes de acordo com a imagem.
        Imagem base para a construção de algo

- `docker images`: Ver as imagens disponiveis para utilização.

- Criar um conteiner baseado em uma imagem `docker run --name <containerName> -p 8080:80 -d wordpress`.
    - -p: significa a porta que o sistema utilizará para rodar o conteiner.
    - --name: define o nome pro conteiner
    - -d: define a imagem utilizada

- `docker ps`: lista os conteiners em execução
- `docker container ls -a`: Nova sintaxe de visualização de conteineres ativos e inativos

- Acessar a porta apos rodar o docker com o localhost para testar


## Apagar conteiners
- `docker ps -a`: Para ver todos os conteiners (ativos e inativos)
    - PS: Não é possivel remover conteiners que estão rodando então antes é necessário pará-los antes
        - `docker stop <containerId>`
    - `docker rm <containerID>`: Remove apenas o conteiner criado a partida da imagem
    - Para remover a imagem é necessário utilizar o `docker rmi <imageID or imageName>`.
        - PS: Para remover a imagem antes é necessário remover os conteiners (até pode forçar a remoção mas é possível que ocorram problemas).

## Tecnologias do ecossistema docker
- Docker engine: É o componente principal do docker que gerencia os contêineres e a interação com o sistema operacional do host
- Docker hub: Repositorio de imagens de contêineres.
- Docker Swarm: Ferramenta de orquestração de contêineres que permite a execução de aplicativos em vários hosts Docker.
- Docker Registry: Gerenciar seus proprios repositorios privados de imagens Docker.
- Docker CLI: Ferramenta de linha de comando que permite que os desenvolvedores interajam com o docker engine e executar tarefas como, criar, gerenciar e executar contêineres.


## Docker Compose 
- O Docker compose é uma ferramenta que permite que os desenvolvedores definam e executem aplicativos compostos por vários conteiners. Ex: MySql, PHP e ubuntu.


## Comandos uteis
- sudo service docker status: Verificar se o serviço docker está ativo na maquina.