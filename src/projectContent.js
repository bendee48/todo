import Project from './project.js';
import todoForm from './todoForm.js';
import modal from './modal.js';
import todoContent from './todoContent.js';
import format from 'date-fns/format';
import eventObserver from './eventObserver.js';

const projectContent = (()=> {
  const container = document.createElement('div');
  container.classList.add('project-content');

  const _projectTitle = (title)=> {
    const h1 = document.createElement('h1');
    h1.innerText = title;
    return h1;
  }

  const _projectMenuButton = ()=> {
    const container = document.createElement('div');
    container.classList.add('menu-toggle');
    // container.appendChild(_projectMenu());
    container.addEventListener('click', _toggleProjectMenu);
    return container;
  }

  const _toggleProjectMenu = ()=> {
    const menu = document.querySelector('.project-menu');
    menu.classList.toggle('hide');
  }

  const _projectMenu = ()=> {
    const container = document.createElement('div');
    const deleteItem = _menuDeleteItem();
    container.classList.add('project-menu', 'hide');
    container.appendChild(deleteItem);
    return container;
  }

  const _menuDeleteItem = ()=> {
    const deleteItem = document.createElement('div');
    const icon = _deleteIcon();
    deleteItem.innerText = "Delete";
    deleteItem.appendChild(icon);
    deleteItem.classList.add('delete-menu-item');
    deleteItem.addEventListener('click', _deleteProject);
    return deleteItem;
  }

  const _deleteIcon = ()=> {
    const icon = document.createElement('div');
    icon.classList.add('delete-icon');
    icon.innerHTML = '<span>&#10005;</span>';
    return icon;
  }

  const _deleteProject = ()=> {
    if (confirm("Are you sure you want to delete this project?")) {
      const project = document.querySelector('.project-content');
      Project.delete({index: project.dataset.index});
      eventObserver.run("Display Projects", Project.all); // Run Project Page update
      eventObserver.run("Close Modal"); // Closes an open modal
    } else {
      _toggleProjectMenu();
    }
  }

  const _newTodoBtn = ()=> {
    const btn = document.createElement('button');
    btn.innerText = "+ new todo";
    btn.addEventListener('click', function() {
      modal.run(todoForm.run());
    });
    return btn;
  }
  
  const _todoContainer = ()=> {
    const todoContainer = document.createElement('div');
    return todoContainer;
  }

  const _todoTitle = (todo)=> {
    const title = document.createElement('h2');
    title.innerText = todo.title;
    title.classList.add('todo-title');
    return title;
  }

  const _todoDueDate = (todo)=> {
    const dueDate = document.createElement('div');
    const date = format(new Date(todo.dueDate), 'do MMM y');
    dueDate.innerText = date;
    dueDate.classList.add('todo-dueDate');
    return dueDate;
  }

  const _todoPriority = (todo)=> {
    const priority = document.createElement('span');
    priority.innerText = todo.priority;
    priority.classList.add('todo-priority', todo.priority);
    return priority;
  }
  
  const _addTodos = (project)=> {
    let container = _todoContainer();
    container.classList.add('todos');
    project.todos.forEach((todo, index) => {
      let todoBox = document.createElement('div');
      todoBox.classList.add('todo');
      todoBox.setAttribute('data-index', index);
      todoBox.addEventListener('click', function(e) {
        modal.run(todoContent.run(e));
      });
      todoBox.appendChild(_todoTitle(todo));
      todoBox.appendChild(_todoDueDate(todo));
      todoBox.appendChild(_todoPriority(todo));
      container.appendChild(todoBox);
    });
    return container;
  }

  const _clearContent = ()=> {
    container.innerHTML = "";
  }

  const updateTodos = (project)=> {
    document.querySelector('.todos').remove();
    let updatedTodos = _addTodos(project);
    container.append(updatedTodos);
  }

  const run = (e)=> {
    _clearContent();
    let project = Project.all[e.currentTarget.dataset.index];
    container.dataset.index = e.currentTarget.dataset.index;
    container.appendChild(_projectTitle(project.title));
    container.appendChild(_projectMenuButton());
    container.appendChild(_projectMenu());
    container.appendChild(_newTodoBtn());
    container.appendChild(_addTodos(project));
    return container;
  }

  return { run, updateTodos }
})();

export default projectContent;