import Project from './project.js';
import Todo from './todo.js';
import projectsPage from './projectsPage.js';
import eventObserver from './eventObserver.js';
import modal from './modal.js';
import projectContent from './projectContent.js';

// Sample Data - Creating a todo
let obj = {title: "Buy new suitcase", description: "A description", dueDate: '2022-10-08', priority: 'med'}
let obj1 = {title: "Pick up travel docs", description: "", dueDate: '2022-10-10', priority: 'high'}
let obj2 = {title: "Buy Sunglasses", description: "Use voucher from birthday", dueDate: '2022-10-19', priority: 'low'}
let todo = new Todo(obj)
let todo1 = new Todo(obj1)
let todo2 = new Todo(obj2)

// Sample Data - Creating projects/ adding todos to project
let project = Project.create('Paris Trip')
let project1 = Project.create('October')
project.addTodo(todo)
project.addTodo(todo1)
project.addTodo(todo2)

// Display projects
Project.loadLocal(); // Load any saved projects
let projects = Project.all;
projectsPage.displayProjects(projects);

// Event Observers
// Update Project display on creation of a new Project
eventObserver.subscribe({subName: "Display Projects", funcToCall: projectsPage.displayProjects});
// Create and Save a Project
eventObserver.subscribe({subName: "Create Project", funcToCall: Project.create});
// Close Modal
eventObserver.subscribe({subName: "Close Modal", funcToCall: modal.closeModal})
// Update Todos
eventObserver.subscribe({subName: "Update Todos", funcToCall: projectContent.updateTodos})
// Save Projects to local
eventObserver.subscribe({subName: "Save Projects", funcToCall: Project.saveLocal})

