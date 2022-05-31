import Todo from './todo.js';

function Project(title) {
  this._title = title;
  this._todos = [];
}

// Static method containing all created Projects
Project.all = [];

// Static method to create and save a Project
Project.create = function(title) {
  let project = new Project(title);
  project.save();
  return project;
}

// Static method to delete a Project from it's index
Project.delete = function({index}) {
  Project.all.splice(index, 1);
}

// Static method to save all projects to localStorage
Project.saveLocal = function() {
  localStorage.setItem('projects', JSON.stringify(Project.all));
}

// Static method to retrieve all projects from localStorage
Project.loadLocal = function() {
  const localObjs = JSON.parse(localStorage.getItem('projects'));
  if (localObjs === null) return null; // Return if 'projects' empty

  Project.all = []; // Clear any exisitng projects to avoid duplicates
  localObjs.forEach(obj => { // Parse local objects into Projects & Todos
    parseLocalObj(obj);
  });
}

// Helper for loadLocal()
function parseLocalObj(obj) {
  if (obj._todos.length > 0) {
    let project = new Project(obj._title);
    parseTodos(obj, project);
    project.save();
  } else {
    Project.create(obj._title);
  }
}

// Helper for loadLocal()
function parseTodos(obj, project) {
  obj._todos.forEach(todo => {
    let newTodo = new Todo({title: todo._title, 
                            description: todo._description,
                            dueDate: todo._dueDate,
                            priority: todo._priority,
                            complete: todo._complete})
    project.addTodo(newTodo);
  });
}

// Getters and setters for Project attributes
Object.defineProperties(Project.prototype, {
  title: {
    get: function() {
      return this._title;
    },
    set: function(title) {
      this._title = title;
    }
  },
  todos: {
    get: function() {
      return this._todos;
    }
  }
});

// Add a todo to a Project
Project.prototype.addTodo = function(todo) {
  this._todos.push(todo);
  this._sortTodos();
}

// Delete a todo
Project.prototype.deleteTodo = function(index) {
  this._todos.splice(index, 1);
}

// Delete todo by title
Project.prototype.deleteTodoByTitle = function(title) {
  for (let i in this._todos) {
    if (this._todos[i].title === title) {
      this._todos.splice(i, 1);
      return true;
    }
  }
  return false;
}

// Save Project Object
Project.prototype.save = function() {
  Project.all.push(this);
}

// Helper sort function to sort todos by dueDate
Project.prototype._sortTodos = function() {
  return this._todos.sort((a,b) => {
    if (a.dueDate < b.dueDate) return -1;
    if (a.dueDate > b.dueDate) return 1;
    return 0;
  })
}

export default Project;