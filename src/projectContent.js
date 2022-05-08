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

  const _menuButton = (klass)=> {
    const container = document.createElement('div');
    container.classList.add('menu-toggle', `${klass}-toggle`);
    container.addEventListener('click', function() {
      _toggleMenu(klass);
    });
    return container;
  }
  
  const _toggleMenu = (klass)=> {
    const menu = document.querySelector(`.${klass}`);
    console.log(klass)
    menu.classList.toggle('hide');
  }
  
  const _menu = ({klass, func}, index)=> {
    const container = document.createElement('div');
    const deleteItem = _menuDeleteItem(func, index, klass);
    container.classList.add(klass, 'menu', 'hide');
    container.appendChild(deleteItem);
    return container;
  }

  const _menuContainer = ({klass, func}, index)=> {
    const container = document.createElement('div');
    container.classList.add('menu-container');
    container.appendChild(_menuButton(klass));
    container.appendChild(_menu({klass, func}, index));
    return container;
  }

  const _menuDeleteItem = (func, index, klass)=> {
    const deleteItem = document.createElement('div');
    const icon = _deleteIcon();
    deleteItem.innerText = "Delete";
    deleteItem.appendChild(icon);
    deleteItem.classList.add('delete-menu-item');
    deleteItem.addEventListener('click', function() {
      func(index, klass);
    });
    return deleteItem;
  }

  const _deleteIcon = ()=> {
    const icon = document.createElement('div');
    icon.classList.add('delete-icon');
    icon.innerHTML = '<span>&#10006;</span>';
    return icon;
  }

  const _deleteProject = (index, klass)=> {
    if (confirm("Are you sure you want to delete this project?")) {
      const project = document.querySelector('.project-content');
      Project.delete({index: project.dataset.index});
      eventObserver.run("Display Projects", Project.all); // Run Project Page update
      eventObserver.run("Close Modal"); // Closes an open modal
    } else {
      _toggleMenu(klass); // Close open menu
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

  const _deleteTodo = (index, klass)=> {
    if (confirm("Are you sure you want to delete this todo?")) {
      const projectEl = document.querySelector('.project-content');
      const project = Project.all[projectEl.dataset.index]
      project.deleteTodo(index);
      updateTodos(project);
    } else {
      _toggleMenu(klass);
    }
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
      container.appendChild(_menuContainer({klass: `todo-menu-${index}`, func: _deleteTodo}, index));
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
    container.appendChild(_menuContainer({klass: 'project-menu', func: _deleteProject}));
    container.appendChild(_newTodoBtn());
    container.appendChild(_addTodos(project));
    return container;
  }

  return { run, updateTodos }
})();

export default projectContent;