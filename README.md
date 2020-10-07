# Desafio Delivery Much

## Dependências

-   Node.js:
É necessário instalar a versão 12.X do Node.js ou posterior.
Para realizar a instalação basta seguir as instruções contidas na documentação oficial do Node.js.

https://nodejs.org/pt-br/download/package-manager/

Git:
Caso necessário, realizar as orientações contidas na página do projeto.

https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git


## Instalação

Para instalar o projeto faça:
&nbsp;

-   Clonar o projeto;
&nbsp;

-   Acessar, pelo terminal de comandos do Sistema Operacional, a pasta onde será depositado o projeto.
&nbsp;

Ex: A pasta "my_project" criada para receber os arquivos do projeto.
&nbsp;

Para o Linux:
$ cd /home/user/my_project
&nbsp;

Para o Mac:
$ cd /Users/user/my_project
&nbsp;

Para o Windows:
$ cd /c/user/my_project
&nbsp;

-   Digitar o comando para clonar o projeto:
&nbsp;

$ git clone https://github.com/rafaellrf09/Deliverymuch-Test.git
&nbsp;

-   Acessar a pasta do projeto.
&nbsp;

-   **Caso tenha Docker instalado**:
&nbsp;
        basta utilizar o comando *docker-compose up --build*;
&nbsp;

-   **Caso não tenha Docker instalado**:
&nbsp;
         copiar o arquivo *.env.example* para *.env* na raiz do projeto;
&nbsp;
         você deverá dar um *npm install*;
&nbsp;
         criar o banco sqlite com *npm run knex:migrate*;
&nbsp;
         criar os dados do banco com *npm run knex:seed*;
&nbsp;

&nbsp;
## Rotas
Por padrão o projeto deverá rodar em: **http://localhost:3333**

