function Project(title) {
  this._title = title;
  this._todos = [];
  // Save all created Project instances into Project.all 
  // Project.all.push(this);
}

// Static method containing all created Projects
Project.all = [];

// Static method to create and save a Project
Project.create = function(title) {
  let project = new Project(title);
  project.save();
  return project;
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
}

// Save Project Object
Project.prototype.save = function() {
  Project.all.push(this);
}

export default Project;