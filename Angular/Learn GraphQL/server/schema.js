export const typeDefs = `
type User {
    id: Int!
    name: String
    username: String
    email: String
}

type Todo {
    id: Int!
    userId: Int
    title: String
    completed: Boolean
    user: User
}

# Define Input Types for Mutation
input TodoInput {
    userId: Int!
    title: String!
    completed: Boolean!
}

input UserInput {
    id: Int!
    name: String!
    username: String!
    email: String!
}

input EditTodoInput {
    title: String
    completed: Boolean
}

type Query {
    getTodos: [Todo]
}

type Mutation {
    createTodo(todo: TodoInput, user: UserInput): Todo
    deleteTodo(id: ID!): [Todo]
    updateTodo(id: ID!, edit: EditTodoInput): Todo
}
`;
