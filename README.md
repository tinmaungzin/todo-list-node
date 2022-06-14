# Todo List  Backend Graphql Server

## Getting Started
### 1. Clone the project 
Clone the project from: 

Install npm dependencies:

```
cd todo-list-node
cp .env.example .env && cp .env.example .env.test
npm install
```

### 2. Create database and migrate

Create a Postgres database in your local machine and add credentials to ```.env``` file.

Run the following command to migrate. This also creates the `List` and `Task` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

### 3. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm run dev
```

Navigate to [http://localhost:4000/graphql](http://localhost:4000/graphql) in your browser to explore the API of your GraphQL server.

## Running Tests

### 1. Create database and migrate for testing server

Create a Postgres database in your local machine and add credentials to ```.env.test``` file.

### 2. Start Testing

You can start testing by running ```npm run test``` command in your terminal.

