import Project from './project';
import Todo from './todo';
import projectsPage from './projectsPage';
import eventObserver from './eventObserver';
import modal from './modal';
import projectContent from './projectContent';

// Sample Data - Creating a todo
const obj = {
  title: 'Buy new suitcase',
  description: 'A description',
  dueDate: '2022-10-08',
  priority: 'med',
};
const obj1 = {
  title: 'Pick up travel docs',
  description: '',
  dueDate: '2022-10-10',
  priority: 'high',
};
const obj2 = {
  title: 'Buy sunglasses',
  description: 'Use voucher from birthday',
  dueDate: '2022-10-19',
  priority: 'low',
};
const todo = new Todo(obj);
const todo1 = new Todo(obj1);
const todo2 = new Todo(obj2);

// Sample Data - Creating projects/ adding todos to project
const project = Project.create('Example');
project.addTodo(todo);
project.addTodo(todo1);
project.addTodo(todo2);

// Display projects
Project.loadLocal(); // Load any saved projects
const projects = Project.all;
projectsPage.displayProjects(projects);

// Event Observers
// Update Project display on creation of a new Project
eventObserver.subscribe({
  subName: 'Display Projects',
  funcToCall: projectsPage.displayProjects,
});
// Create and Save a Project
eventObserver.subscribe({
  subName: 'Create Project',
  funcToCall: Project.create,
});
// Close Modal
eventObserver.subscribe({
  subName: 'Close Modal',
  funcToCall: modal.closeModal,
});
// Update Todos
eventObserver.subscribe({
  subName: 'Update Todos',
  funcToCall: projectContent.updateTodos,
});
// Save Projects to local
eventObserver.subscribe({
  subName: 'Save Projects',
  funcToCall: Project.saveLocal,
});
