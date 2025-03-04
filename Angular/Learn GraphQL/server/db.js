let users = [
    { id: 1, name: "John Doe", username: "johndoe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", username: "janesmith", email: "jane@example.com" },
];

let todos = [
    { id: 1, userId: 1, title: "Learn GraphQL", completed: false },
    { id: 2, userId: 2, title: "Build a Todo App", completed: true },
];

const getUserById = (id) => users.find(user => user.id === id);

const getTodos = () =>  todos;

const createTodo = (todo, user) => {
    const newUser = users.find(u => u.id === user.id) || user;
    if (!users.some(u => u.id === user.id)) users.push(newUser);

    const newTodo = { id: todos.length + 1, ...todo, userId: parseInt(user.id) };
    todos.push(newTodo);
    return newTodo;
};

const deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== parseInt(id));
    return todos;
};

const updateTodo = (id, edit) => {
    let updatedTodo = todos.find(t => t.id === parseInt(id));
    if (!updatedTodo) throw new Error("Todo not found");

    updatedTodo = { ...updatedTodo, ...edit };
    todos = todos.map(t => (t.id === parseInt(id) ? updatedTodo : t));

    return updatedTodo;
};

module.exports = { getTodos, createTodo, deleteTodo, updateTodo, getUserById };
