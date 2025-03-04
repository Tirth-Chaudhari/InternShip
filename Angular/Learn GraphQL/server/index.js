const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getTodos, createTodo, deleteTodo, updateTodo,getUserById } = require('./db'); // Import db functions
const { typeDefs } = require('./schema'); // FIX: Use require() instead of import

const app = express();
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));
app.use(bodyParser.json());

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers: {
            Todo: {
                user: (todo) => getUserById(todo.userId),
            },
            Query: {
                getTodos: () =>  getTodos(),
            },
            Mutation: {
                createTodo: (_, { todo, user }) => createTodo(todo, user),
                deleteTodo: (_, { id }) => deleteTodo(id),
                updateTodo: (_, { id, edit }) => updateTodo(id, edit),
            }
        }
    });

    await server.start();
    app.use('/graphql', expressMiddleware(server));

    app.listen(8000, () => console.log('Server started on port 8000'));
}

startServer();
