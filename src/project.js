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