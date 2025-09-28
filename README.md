## Documentaçõa resumida

API que simula algumas funcionalidades básicas da Steam, desenvolvida com NestJS e PostgreSQL.

## Endpoints da API

- **Caso prefira utilizar swagger só entrar em:** ```url/api```

### Games

#### GET /games/v1/api
> Lista todos os jogos cadastrados com suas reviews.

Exemplo de resposta:
```json
[
  {
    "id": "55e925f8-8026-47ed-b992-658f0fc2f0a2",
    "title": "Super Mario Odyssey",
    "description": "Um jogo de plataforma 3D",
    "launchDate": "2017-10-27T00:00:00.000Z",
    "urlPicture": "https://example.com/mario.jpg",
    "tags": ["Plataforma", "3D", "Aventura"],
    "publisher": "Nintendo",
    "studio": "Nintendo EPD",
    "price": 299.9,
    "reviews": [],
    "createdAt": "2025-09-28T18:43:26.156Z",
    "updatedAt": "2025-09-28T18:43:26.156Z"
  }
]
```

#### GET /games/v1/api/:id
> Busca um jogo específico pelo ID.

#### POST /games/v1/api
> Cria um novo jogo.

> Payload de exemplo:
```json
{
  "title": "Super Mario Odyssey",
  "description": "Um jogo de plataforma 3D",
  "launchDate": "2017-10-27T00:00:00.000Z",
  "urlPicture": "https://example.com/mario.jpg",
  "tags": ["Plataforma", "3D", "Aventura"],
  "publisher": "Nintendo",
  "studio": "Nintendo EPD",
  "price": 299.90
}
```

#### PATCH /games/v1/api/:id
> Atualiza um jogo existente.

#### DELETE /games/v1/api/:id
> Remove um jogo do sistema.

### Reviews

#### GET /reviews/v1/api
> Lista todas as reviews cadastradas.

#### GET /reviews/v1/api/:id
> Busca uma review específica pelo ID.

#### POST /reviews/v1/api
> Cria uma nova review para um jogo.

> Payload de exemplo:
```json
{
  "description": "Um dos melhores jogos de plataforma 3D!",
  "timePlayed": 3000,
  "gameId": "55e925f8-8026-47ed-b992-658f0fc2f0a2",
  "userId": "user-id-aqui"
}
```

#### PATCH /reviews/v1/api/:id
> Atualiza uma review existente.

#### DELETE /reviews/v1/api/:id
> Remove uma review do sistema.

### Users

#### GET /users/v1/api
> Lista todos os usuários cadastrados.

#### GET /users/v1/api/:id
> Busca um usuário específico pelo ID.

#### POST /users/v1/api
> Cria um novo usuário.

> Payload de exemplo:
```json
{
  "name": "Mario Fan"
}
```

#### PATCH /users/v1/api/:id
> Atualiza um usuário existente.

#### DELETE /users/v1/api/:id
> Remove um usuário do sistema.

## Configuração do Projeto

### Pré-requisitos
- Node.js
- Docker
- Docker Compose
- PostgreSQL (via Docker)

### Instalação

1. Clone o repositório
```bash
$ git clone <repository-url>
$ cd steam-da-shopee
```

2. Instale as dependências
```bash
$ npm install
```

3. Configure as variáveis de ambiente
```bash
# Crie um arquivo .env com o seguinte conteúdo
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/steam_da_shopee_DB?schema=public"
```

4. Inicie o banco de dados com Docker
```bash
$ docker compose up -d
```

5. Execute as migrações do Prisma
```bash
$ npx prisma migrate dev
```

## Executando o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

