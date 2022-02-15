import Project from './project.js';
import Todo from './todo.js';

let obj = {title: "A title", description: "A description", dueDate: 'tomoroow', priority: 'High'}
let todo = new Todo(obj)
console.log(todo.description)

let project = new Project('A project title')
project.addTodo(todo)
console.log(project.todos)

