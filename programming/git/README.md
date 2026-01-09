# GIT HELPER

## Básico 
- O que é controle de versão e como ele funciona?
	- Controle de versão, como o próprio nome já diz, tem a finalidade de controlar a versões de um projeto ou código, armazenando versões sólidas do projeto e permitindo o trabalho simultâneo entre os programadores e sincronização de alterações quando necessário.
	
- Quais são os 3 estados possíveis dos arquivos?
	- Modified: Quando o arquivo sofre modificações mas não foi preparado para ser incluído no repositório GIT.
	- Staged: O arquivo foi marcado para ser adicionado ao próximo arquivo. (GIT ADD)
	- Committed: As alterações foram registradas no repósitorio GIT. (GIT COMMIT)
	
- Como iniciar um repositório GIT em um projeto?
	- Para iniciar um repositório GIT em uma máquina local, é possível utilizar o comando GIT INIT.
	
- Como visualizar o histórico de mudanças?
	- Para visualizar o histórico de alterações é possível utilizar o comando GIT DIFF
	
- Como adicionar arquivos a um commit já realizado (amened), tirar um arquivo do estado de Staged (reset) e descartar modificações em um arquivo Modified (checkout)?
	- Adicionar arquiovos a um commit já realizado: 
		- Para realizar esta tarefa é necessário ter um commit realizado antes, colocar algum arquivo na área de preparação (staging). Feito esses passos agora é só executar o commando git commit --amend que os arquivos que estão na área de staging entrarão no ultimo commit realizado, sem criar um novo commit.
	- Tirar um arquivo da área de preparação (staging):
		- Para retirar arquivos da área de staging basta utilizar o comando GIT RESTORE --staged [filename or .]. Para remover arquivos da área de staging é necessario ter arquivo na área de stagin.
	- Descartar modificações em um arquivo:
		- Para descartar as modificações relizadas em um arquivo "modified" basta utilizar o comando GIT CHECKOUT -- [filename]
			- DETALHE IMPORTANTE: Esse comando funcionará somente se o arquivo não tiver sido alocando no ambiente de preparação (staging), caso ele estiver, basta removê-lo com o o camando GIT RESTORE --STAGED [filename], após isso remover as alterações. Caso ele tenha sofrido um commit já não será mais possível remover as alterações.

## Médio
- O que é um repositório remoto?
	- Um repositório remoto trata-se de um repositório GIT em um servidor na nuvem como (github, bitbucket, GitLab etc). Geralmente esse repositório é utilizado como uma versão centralizada para todos os integrantes do projeto, inserindo, clonando ou atualizando informações.

- Como clonar um repositório remoto?
	- Para clonar um repositório remoto é necessário copiar a URL HTTPS ou SSH e executar o comando GIT CLONE [URL]. Executando esse comando será criado uma cópia do repositório (incluindo historico de versões) na máquina local.

- Como adicionar um repositorio remoto no projeto?
	- Existem duas formas de realizar esse feito:
		- Criando um repositório em nuvem e clonando na máquina local.
		- Criano um repositório em nuvem e local, aplicando o GIT INIT no local, adicionando a origem do repositorio com o comando GIT REMOTE ADD ORIGIN [url] e inserindo as informações de acesso no primeiro GIT PUSH realizado.

- Como puxar todas as modificações no repositório remoto?
	- Para atualizar o repositório local "puxando" todas as atualizações do repositorio remoto, basta utilizar o comando GIT PULL.
	
- Como subir as modificações locais para o repositório remoto?
	- Para Atualizar o repositório remoto com itens do repositório local, basta alocar o HEAD na branch que deseja atualizar e executar o comando GIT PUSH
	
- O que é branch e como usá-la?
	- Assim como em sua tradução literal (Ramo), uma branch se trata de uma ramificação de uma outra branch (master, main, etc.). Criando uma referência a um ponto do repositorio de uma branch que poder ser alterada sem interferir na branch principal (GIT CHECKOUT -b [branchName] | git branch [branchname], git checkout [branchname]). Ao fim das alterações é possível mesclar as informações indo para a branch de destino (main, master etc) e executar o comando GIT MERGE. 
	
- Como realizar a merge de branchs?
	- Pare realizar o merge de branchs(branch x para branch y), basta ir até a branch y e executar o comando git merge x;  
		- Ao realizar o merge de branchs podem acabar ocorrendo conflitos que devem ser resolvidos (merge conflict).

- O que é rebase e como usá-lo?
	- O GIT REBASE assim como o GIT merge servem para mesclar alterações de um repositório GIT, mas de maneira diferente. O GIT REBASE reescreve o histórico de commits, o sobrepondo a outro.
	
# GitTutorial
Guia completo sobre o sistema de controle de versão Git e plataformas de hospedagem como GitHub, GitLab e Bitbucket. Aprenda a criar repositórios, fazer commits, gerenciar branches, merges e resolver conflitos. Ideal para iniciantes e desenvolvedores que querem aprimorar seus conhecimentos em versionamento e colaboração.


## Principais tópicos

### Basico 
- Controle de versão | Teoria | Criador | Motivo
- Estados de arquivos
    - MODIFIED | STAGED | COMMITED
- GIT INIT | GIT REMOTE | GIT CONFIG | GIT IGNORE | GIT CLONE
    - Flags 
    - Metodos de clonagem HTTP/SSH
- GIT LOG | GIT STATUS | GIT DIFF | GIT SHOW
    - Flags de Comandos
    - Método ADOG
- GIT ADD | GIT COMMIT | GIT RM --CACHED
    - Adicionar e remover arquivos da area de STAGED
    - GIT COMMIT --AMEND
- GIT PUSH
    - origins
### Intermediário 
- GIT PULL 
    - Flags
- GIT BRANCH 
    - Explicar bem a parte de ramificação 
- GIT CHECKOUT
    - Flags
    - Git checkout --
    - Git checkout -b
- GIT MERGE
    - Flags
- GIT REBASE 
    - Explicar bem essa parte pois é bem confusa
### Avançado
- GIT STASH
    - GIT STASH POP
    - Flags
- Reescrever historico de commits com o Rebase
- GIT RESET
- MERGE CONFLICT
- GIT 

### Conteudo extra
- TAGS
- GIT FLOW 
- Padrão de commit
- Fork
- Code Review
- Source Control
- VIM