# Guia de Configuração PostgreSQL no Fedora

## 1. Instalação e Inicialização
- Instalar pacotes:
  sudo dnf install postgresql-server postgresql-contrib

- Inicializar o cluster:
  sudo postgresql-setup --initdb

- Iniciar e habilitar no boot:
  sudo systemctl enable --now postgresql

## 2. Ajuste de Autenticação (pg_hba.conf)
Edite o arquivo:
sudo nano /var/lib/pgsql/data/pg_hba.conf

Altere 'peer' e 'ident' para 'md5' nestas linhas:
local   all             all                                     md5
host    all             all             127.0.0.1/32            md5
host    all             all             ::1/128                 md5

## 3. Definir Senha e Reiniciar
- Aplicar mudanças:
  sudo systemctl restart postgresql

- Definir senha 'admin' para o usuário postgres:
  sudo -i -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'admin';"

## 4. Atalhos psql
- \l  : Listar bancos
- \du : Listar usuários
- \dt : Listar tabelas
- \q  : Sair