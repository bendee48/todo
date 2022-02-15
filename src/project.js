import Todo from './todo.js';

function Project(title) {
  this._title = title;
  this._todos = [];
}

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

Project.prototype.addTodo = function(todo) {
  if (!(todo instanceof Todo)) throw "Can only add an instance of Todo to a project";
  this._todos.push(todo);
}

export default Project;