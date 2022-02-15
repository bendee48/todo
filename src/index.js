import Project from './project.js';
import Todo from './todo.js';

let obj = {title: "A title", description: "A description", dueDate: 'tomoroow', priority: 'High'}
let foo = new Todo(obj)
console.log(foo.description)

let pop = new Project('A project title')
console.log(pop.title)

