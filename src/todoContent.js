import Project from './project.js';
import eventObserver from './eventObserver.js';
import todoForm from './todoForm.js';

const todoContent = (()=> {
  const container = document.createElement('div');
  container.classList.add('todo-content');
  let project;

  const _saveBtn = (todo)=> {
    const btn = document.createElement('button');
    btn.classList.add('save-btn', 'btn');
    btn.innerText = 'Save and Close'
    btn.addEventListener('click', function() {
      _saveChanges(todo);
    });
    return btn;
  }

  const _deleteBtn = (todo, project)=> {
    const btn = document.createElement('button');
    btn.classList.add('delete-btn', 'btn');
    btn.innerText = 'Delete Todo'
    btn.addEventListener('click', function() {
      _deleteTodo(todo, project);
    });
    return btn;
  }

  const _deleteTodo = (todo, project)=> {
    if (confirm('Are you sure sure you want to delete this todo?')) {
      project.deleteTodoByTitle(todo.title)
      eventObserver.run('Update Todos', project);
      eventObserver.run('Close Modal');
    }
  }

  const _todoTitle = (todo)=> {
    let title = document.createElement('h1');
    title.classList.add('todo-title');
    title.innerText = todo.title;
    title.contentEditable = true;
    return title;
  }

  const _todoDescription = (todo)=> {
    let description = document.createElement('p');
    description.classList.add('todo-description');
    description.innerText = todo.description;
    description.contentEditable = true;
    return description;
  }

  const _todoDueDate = (todo)=> {
    let dueDate = todoForm.dueDate(todo.dueDate);
    return dueDate;
  }

  const _todoPriority = (todo)=> {
    let priority = todoForm.prioritySelect(todo.priority);
    return priority;
  }

  const _displayTodo = (todo, project)=> {
    container.append(_todoTitle(todo));
    container.append(_todoDescription(todo));
    container.append(_todoDueDate(todo));
    container.append(_todoPriority(todo));
    container.append(_saveBtn(todo));
    container.append(_deleteBtn(todo, project));
  }

  const _saveChanges = (todo)=> {
    // Select todo content from open modal
    const title = document.querySelector('.todo-content .todo-title');
    const description = document.querySelector('.todo-content .todo-description');
    const date = document.querySelector('input[type=date]');
    const priority = document.querySelector('#priority');
    if (_checkForTitle(title) || _checkTitleLength(title)) return;
    todo.title = title.innerText.trim();
    todo.description = description.innerText.trim();
    todo.dueDate = date.value;
    todo.priority = priority.value;
    eventObserver.run('Update Todos', project)
    eventObserver.run('Close Modal');
  }

  const _checkForTitle = (title)=> {
    if (title.innerText === "") {
      if (document.querySelector('.presence-error')) return true; // Return if error msg already shown
      title.before(_titleErrorMessage("Title must be present.", 'presence'));
      return true;
    }
    return false;
  }

  const _checkTitleLength = (title)=> {
    if (title.innerText.length > 24){
      if (document.querySelector('.length-error')) return true; // Return if error msg already shown
      title.before(_titleErrorMessage("Title must be less than 20 characters.", 'length'));
      return true;
    }
    return false;
  }

  const _titleErrorMessage = (msg, type)=> {
    let p = document.createElement('p');
    p.innerText = msg;
    p.classList.add('error', `${type}-error`);
    return p;
  }

  const _clearContent = ()=> {
    container.innerHTML = "";
  }

  const run = (e)=> {
    _clearContent();
    // Get current open project
    let projectElement = document.querySelector('.project-content');
    project = Project.all[projectElement.dataset.index];
    // Get clicked on todo object. currentTarget gets element listener was originally set on
    let todo = project.todos[e.currentTarget.dataset.index];
    _displayTodo(todo, project);
    return container;
  }

  return { run }
})();

export default todoContent;