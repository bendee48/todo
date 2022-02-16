import Project from './project.js';
import Todo from './todo.js';
import projectPage from './projectPage.js'

let obj = {title: "A title", description: "A description", dueDate: 'tomoroow', priority: 'High'}
let todo = new Todo(obj)
console.log(todo.description)

let project = new Project('A project title')
let project1 = new Project('Another project title')
project.addTodo(todo)
console.log(Project.all)
console.log(projectPage.displayProjects)

projectPage.displayProjects()

