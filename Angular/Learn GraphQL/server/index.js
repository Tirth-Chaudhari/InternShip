const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const axios = require('axios'); // Fix axios import
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:4200', // Allow Angular frontend
    credentials: true
}));
app.use(bodyParser.json());

async function startServer() {
    const server = new ApolloServer({
        typeDefs: `
            type User
            {
                name: String
                username: String
                email: String
            }
            type Todo {
                id: ID!
                userId:Int
                title: String
                completed: Boolean
                user:User

            }
            type Query {
                getTodos: [Todo]
            }
        `,
        resolvers: {
            Todo:
            {
                user:async (todo)=>{
                    try {
                        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);      
                        return response.data; // Return actual data
                    } catch (error) {
                        console.error('Error fetching todos:', error);
                        throw new Error('Failed to fetch todos');
                    }
                }
            },
            Query: {
                getTodos: async () => {
                    try {
                        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');      
                        return response.data; // Return actual data
                    } catch (error) {
                        console.error('Error fetching todos:', error);
                        throw new Error('Failed to fetch todos');
                    }
                }
            }
        }
    });

    await server.start();
    app.use('/graphql', expressMiddleware(server));

    app.listen(8000, () => console.log('Server started on port 8000'));
}



startServer();
