import Project from './project.js';
import Todo from './todo.js';
import projectPage from './projectPage.js';
import newProjectModal from './newProjectModal.js'; 
import eventObserver from './eventObserver.js';
import modal from './modal.js';

// Testing Creating a todo
let obj = {title: "A title", description: "A description", dueDate: 'tomoroow', priority: 'High'}
let todo = new Todo(obj)

// Testing Creating projects adding a todo to project
let project = new Project('A project title')
let project1 = new Project('Another project title')
project.addTodo(todo)

// Display projects
let projects = Project.all;
projectPage.displayProjects(projects);

// Add event listner to project button
const projectBtn = document.querySelector('.project-btn');
projectBtn.addEventListener('click', function() {
  // newProjectModal.run(eventObserver);
  modal.run();
})

// Testing EventObserver
// function hello(name) { console.log(`Hello ${name}`)};
// eventObserver.subscribe({subName: 'Updating the DOM', funcToCall: hello});
// eventObserver.run('Updating the DOM', 'Emma');

// Event Observers
// Update Project display on creation of a new Project
eventObserver.subscribe({subName: "New Project", funcToCall: projectPage.displayProjects})



