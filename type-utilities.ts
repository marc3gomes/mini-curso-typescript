type Todo = {
    title: string;
    description: string;
    completed: boolean;
};

const todo: Readonly<Todo> = {
    title: 'Assistir Dark de novo',
    description: 'Relembrar os detalhes',
    completed: false,
};

console.log(todo);

// Ao usar Readonly no objeto não pode ser modificado
// todo.completed = true;

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate}
}

const todo2: Todo = updateTodo(todo, {completed: true})

console.log(todo2)

/// Pick

type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}


/// Omit
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview2 = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}


console.log(todo3)