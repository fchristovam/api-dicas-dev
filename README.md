### API - Dicas Dev

Segunda Sprint realizada no Modulo 4 - Resilia Educação.



## Objetivos principais da Sprint

- Criar uma API REST com duas rotas;
- Uma vai receber uma dica e gravar ela no Banco de Dados;
- A outra retorna ao usuário, de forma aleatória, uma das dicas que estão armazenadas no banco;
- Executar de modo funcional os métodos GET e POST para as entidades "Dica" e "Autor";
- Explorar maneiras de se operar em informação armazenada (CRUD).



## As seguintes ferramentas foram usadas na construção do projeto:

Antes de começar, você vai precisar ter instalado em sua máquina 
- Git;
- Node.js (16.15.1) para testar a aplicação;
- Postman ou Insomnia para verificar o funcionamento da API;
- Além disto é bom ter um editor para trabalhar com o código como VSCode.

## Tecnologias utilizadas:

- MVC;
- CRUD;
- API REST;
- Express;
- Nodemon.



## Como executar o projeto:

# - Sistema operacional utilizado: Windows 10

# - Clone este repositório
$ git clone https://github.com/fchristovam/api-dicas-dev.git

# - Navegue até a pasta do projeto com o seguinte comando
cd api-dicas-dev

# - Instale as dependências necessárias
$ npm install

# - Inicie o projeto rodando o comando
$ npm start

# - Execute a aplicação em modo de desenvolvimento
$ npm run dev

# - A aplicação será aberta na porta:3000 - acesse http://localhost:3000/dicas
Execute no Insomnia ou Postman



## Exemplo de rotas:

# - GET
Para retornar uma dica aleatória dentre as que estão no "banco de dados"

http://localhost:3000/dicas

O retorno será:

{ "dica": "Acesse “redes de conhecimentos”", "autor": "https://desenvolvimentoparaweb.com/miscelanea/10-dicas-desenvolvedores-web-iniciantes-devem-saber/" }

# - POST
Para inserir uma dica no "banco de dados" use a seguinte rota:

http://localhost:3000/dicas

# O body da requisição deve seguir o formato

{ "dica": "escreva aqui a dica", "autor": "escreva aqui o autor" }

O retorno da requisição será um objeto Json com todas as dicas armazenadas no Banco de Dados. 


# Autor:
Flávio Christovam 

# Contato:
https://github.com/fchristovam
https://www.linkedin.com/in/flavio-christovam/
