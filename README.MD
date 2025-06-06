<h1 align="center">Teste Tecnico</h1>

# Sobre

Aplicação back-end desenvolvida para um processo seletivo...

# Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Redis](https://redis.io/)
- [ioredis](https://github.com/luin/ioredis)
- [Axios](https://axios-http.com/)
- [Yup](https://www.npmjs.com/package/yup)
- [Celebrate (Joi)](https://github.com/arb/celebrate)
- [Handlebars](https://handlebarsjs.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cpf-cnpj-validator](https://www.npmjs.com/package/cpf-cnpj-validator)
- [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
- [tsyringe (Injeção de Dependência)](https://github.com/microsoft/tsyringe)
- [date-fns](https://date-fns.org/)
- [typeorm-pagination](https://www.npmjs.com/package/typeorm-pagination)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [express-async-handler](https://www.npmjs.com/package/express-async-handler)
- [CORS](https://www.npmjs.com/package/cors)

---

### Dependências de Desenvolvimento

- [TypeScript](https://www.typescriptlang.org/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [tsconfig-paths](https://www.npmjs.com/package/tsconfig-paths)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [@eslint/js](https://www.npmjs.com/package/@eslint/js)
- [globals](https://www.npmjs.com/package/globals)
- [@types/node](https://www.npmjs.com/package/@types/node)
- [@types/express](https://www.npmjs.com/package/@types/express)
- [@types/cors](https://www.npmjs.com/package/@types/cors)
- [@types/bcryptjs](https://www.npmjs.com/package/@types/bcryptjs)
- [@types/jsonwebtoken](https://www.npmjs.com/package/@types/jsonwebtoken)
- [@types/multer](https://www.npmjs.com/package/@types/multer)
- [@types/ioredis](https://www.npmjs.com/package/@types/ioredis)
- [@types/nodemailer](https://www.npmjs.com/package/@types/nodemailer)
- [@types/joi](https://www.npmjs.com/package/@types/joi)

# Executando a aplicação

Para executar esta aplicação, siga os seguintes passos:

- Clone o repositório:

  ```bash
  git clone https://github.com/HeytorPires/api-veiculos

  ```

- Com o repositório clonado, acesse o diretório raiz do projeto e digite code . para abrir o projeto no VS Code.

- Crie um arquivo .env utilizando como base o modelo fornecido no arquivo .env.example.

- Crie a imagem do projeto e em seguida os containers, de acordo com as configurações fornecidas no arquivo docker-compose.yml, executando o seguinte comando:

  ```bash
  # Criar a imagem, containers e subir
  yarn docker:up
  ```

- Instale as dependências do projeto:

  ```bash
  # Baixar dependências
  yarn

  ```

- Execute comando o migration para criar as tabelas do banco:

  ```bash
  # Gerar tabelas
  yarn migration:run
  ```

- Após a conclusão da instalação das dependências, execute a aplicação com o seguinte comando:

  ```bash
  # Executar a aplicação
  yarn dev
  ```

Com estes passos concluídos, a aplicação estará em execução e pronta para ser utilizada.
