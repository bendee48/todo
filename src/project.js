function Project(title) {
  this._title = title;
}

Object.defineProperty(Project.prototype, 'title', {
  get: function() {
    return this._title;
  },
  set: function(title) {
    this._title = title;
  }
});

export default Project;