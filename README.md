Bem-vindo ao meu projeto para ApiNodeWithPostgresQL!

Este projeto é uma API REST simples construída usando Node.js e PostgreSQL. A API permite que os usuários executem operações CRUD em um banco de dados de usuários. A API foi projetada para ser leve, fácil de entender e fácil de usar.

Começando
Pré-requisitos
Para usar esta API, você precisará ter Node.js e PostgreSQL instalados em sua máquina.

Instalando
Clone este repositório em sua máquina local
Navegue até o diretório do projeto em seu terminal
Execute npm install para instalar as dependências necessárias
Crie um novo banco de dados PostgreSQL e execute os scripts SQL encontrados no diretório do banco de dados para criar as tabelas necessárias e inserir alguns dados de amostra
Renomeie o arquivo .env.example para .env e substitua os valores por suas próprias credenciais de banco de dados PostgreSQL
Executando a API
Para iniciar a API, execute o comando npm start em seu terminal. A API será executada em http://localhost:3000.

Pontos de extremidade da API
Os seguintes endpoints estão disponíveis nesta API:

GET /usuários
Retorna uma lista de todos os usuários no banco de dados.

GET /usuários/:id
Retorna o usuário com o ID especificado.

POST /usuários
Cria um novo usuário no banco de dados.

PUT /usuários/:id
Atualiza o usuário com o ID especificado.

APAGAR /usuários/:id
Exclui o usuário com o ID especificado.

construído com
Node.js
Express.js
PostgreSQLName
Sequelize
Licença
Este projeto está licenciado sob a licença MIT - consulte o arquivo LICENSE para obter detalhes.

Agradecimentos
Este projeto foi inspirado no livro "RESTful Web APIs" de Leonard Richardson, Mike Amundsen e Sam Ruby.
