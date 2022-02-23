import Project from './project.js';
import Todo from './todo.js';
import projectPage from './projectPage.js'
import projectModal from './projectModal.js'

// Creating a todo
let obj = {title: "A title", description: "A description", dueDate: 'tomoroow', priority: 'High'}
let todo = new Todo(obj)

// Creating projects adding a todo to project
let project = new Project('A project title')
let project1 = new Project('Another project title')
project.addTodo(todo)

// Display projects
let projects = Project.all;
projectPage.displayProjects(projects);

// Add event listner to project button
const projectBtn = document.querySelector('.project-btn');
projectBtn.addEventListener('click', projectModal.run);



