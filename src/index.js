import Project from './project.js';
import Todo from './todo.js';
import projectsPage from './projectsPage.js';
import eventObserver from './eventObserver.js';
import modal from './modal.js';
import newProjectForm from './newProjectForm.js';
import projectContent from './projectContent.js';

// Testing Creating a todo
let obj = {title: "A title", description: "A description", dueDate: '3000-02-05', priority: 'high'}
let obj1 = {title: "A new todo", description: "Do some things", dueDate: '4378-04-10', priority: 'low'}
let todo = new Todo(obj)
let todo1 = new Todo(obj1)

// Testing Creating projects adding a todo to project
let project = Project.create('A project title')
let project1 = Project.create('Another project title')
project.addTodo(todo)
project.addTodo(todo1)

// Display projects
let projects = Project.all;
projectsPage.displayProjects(projects);

// Add event listener to new project button
// const projectBtn = document.querySelector('.project-btn');
// projectBtn.addEventListener('click', function() {
//   modal.run(newProjectForm.run());
// }) // TODO DELETE

// Testing EventObserver
// function hello(name) { console.log(`Hello ${name}`)};
// eventObserver.subscribe({subName: 'Updating the DOM', funcToCall: hello});
// eventObserver.run('Updating the DOM', 'Emma');

// Event Observers
// Update Project display on creation of a new Project
eventObserver.subscribe({subName: "New Project", funcToCall: projectsPage.displayProjects});
// Create and Save a Project
eventObserver.subscribe({subName: "Create Project", funcToCall: Project.create});
// Close Modal
eventObserver.subscribe({subName: "Close Modal", funcToCall: modal.closeModal})
// Update Todos
eventObserver.subscribe({subName: "Update Todos", funcToCall: projectContent.updateTodos})






