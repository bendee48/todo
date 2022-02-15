function Todo({title, description, dueDate, priority}) {
  this._title = title;
  this._description = description;
  this._dueDate = dueDate;
  this._priority = priority;
}

Object.defineProperties(Todo.prototype, {
  title: {
    get: function() {
      return this._title;
    },
    set: function(title) {
      this._title = title;
    }
  },
  description: {
    get: function() {
      return this._description;
    },
    set: function(desc) {
      this._description = desc;
    }
  },
  dueDate: {
    get: function() {
      return this._dueDate;
    },
    set: function(dueDate) {
      this._dueDate = dueDate;
    }
  },
  priority: {
    get: function() {
      return this._priority;
    },
    set: function(priority) {
      this._priority = priority;
    }
  }
});

export default Todo;