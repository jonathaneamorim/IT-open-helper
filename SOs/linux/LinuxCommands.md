# 🐧 Guia de Comandos Linux (Fedora/Geral)

### 1. Instalação e Execução de Arquivos `.run`
* **Permissão total:** `sudo chmod 777 [arquivo.run]`
* **Executar:** `sudo ./[arquivo.run]`
* **Alternativa recomendada (tornar executável):**
    1. `chmod +x arquivo.run`
    2. `sudo ./arquivo.run`

---

### 2. Gestão de Arquivos e Pastas
* **Criar arquivo vazio:** `touch [nome.extensao]`
* **Ler conteúdo de arquivo:** `cat [nome]`
* **Extrair `.tar.gz`:** `tar -xzf [arquivo.tar.gz]`
* **Extrair `.tar.xz`:** `tar -xvf [arquivo.tar.xz]`
* **Excluir pasta e subpastas:** `rm -rf [nome_da_pasta]`
* **Ocultar/Exibir arquivos ocultos:** `Ctrl + H`

---

### 3. Permissões de Sistema e Usuário
* **Permissão total para pasta (Recursivo):** `sudo chmod 777 [pasta] -R`
* **Alterar dono da pasta (Recursivo):** `sudo chown -R $USER:$USER [caminho_da_pasta]`
* **Acessar como Root:** `sudo su`

---

### 4. Gerenciamento de Pacotes (DNF e RPM)
* **Instalar pacote:** `sudo dnf install [nome_do_programa]`
* **Atualizar sistema:** `sudo dnf upgrade --refresh`
* **Instalar `.rpm` local:** `sudo rpm -i [arquivo.rpm]`
* **Pesquisar app RPM instalado:** `rpm -qa | grep [nome]`
* **Desinstalar app RPM:** `rpm -e [nome]`

---

### 5. Redes, SSH e Downloads
* **Baixar via terminal:** `wget [link_direto]`
* **SSH - Gerar chave:** `ssh-keygen -t ed25519 -C "seu_email@exemplo.com"`
* **SSH - Ativar agente:** `eval "$(ssh-agent -s)"` e `ssh-add ~/.ssh/id_ed25519`
* **SSH - Servidor (Habilitar no Fedora):**
    * `sudo dnf install openssh-server`
    * `sudo systemctl enable sshd`
    * `sudo systemctl start sshd`
    * `sudo systemctl status sshd`
    * `sudo ss -lt`

---

### 6. Editor de Texto VIM
* **Abrir para edição:** `vim [arquivo]`
* **Entrar no modo inserção:** Pressione `ESC` e depois `i`
* **Salvar e Sair:** Pressione `ESC` e digite `:wq`
* **Sair sem salvar:** Pressione `ESC` e digite `:q!`

---

### 7. Informações do Sistema
* **Ajuda do uname:** `uname --help`
* **Visualizar SO:** `uname`
* **Versão do Kernel:** `uname -srm`
* **Informações completas da Distro:** `cat /etc/os-release`

---

### 8. Docker e Virtualização (KVM)
* **Iniciar/Habilitar Docker:**
    * `sudo systemctl start docker`
    * `sudo systemctl enable docker`
* **KVM (Nested Virtualization):**
    ```bash
    sudo modprobe -r kvm_intel
    sudo modprobe kvm_intel nested=1
    ```

---

### 9. Ferramentas Específicas e Pesquisa
* **XAMPP (Executar):** Ir até `/opt/lampp/` e rodar `sudo ./manager-linux-x64.run`
* **Executar JAR:** `java -jar [arquivo.jar]`
* **Pesquisar texto em arquivos (GREP):** `grep -r "texto" [diretorio]` (use `.` para o diretório atual)

---

### 10. Atalhos de Desktop (`.desktop`)
Crie o arquivo em: `~/.local/share/applications/[nome].desktop`

**Template:**
```ini
[Desktop Entry]
Version=1.0
Type=Application
Name=Nome_do_App
Comment=Comentario
Exec=/home/usuario/caminho/bin/executavel.sh
Icon=/home/usuario/caminho/bin/icone.png
Categories=Development;IDE;
Terminal=false
StartupWMClass=nome-da-janela
StartupNotify=true