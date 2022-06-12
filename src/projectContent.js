import Project from './project.js';
import todoForm from './todoForm.js';
import modal from './modal.js';
import todoContent from './todoContent.js';
import format from 'date-fns/format';
import eventObserver from './eventObserver.js';

const projectContent = (()=> {
  let project;
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
    return container;
  }
  
  const _menu = ({klass, func}, index)=> {
    const container = document.createElement('div');
    const deleteItem = _menuDeleteItem(func, index, klass);
    container.classList.add(klass, 'menu');
    container.appendChild(deleteItem);
    if (/todo-menu/.test(klass)) { // Only add a complete item if it's a todo menu
      const completeItem = _menuCompletedItem(index);
      container.appendChild(completeItem); 
    }
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
    deleteItem.classList.add('menu-item', 'delete-item');
    deleteItem.addEventListener('click', function() {
      func(index, klass);
    });
    return deleteItem;
  }

  const _menuCompletedItem = (index)=> {
    const completeItem = document.createElement('div');
    let currentTodo = project.todos[index];
    if (currentTodo.complete) {
      completeItem.innerText = "Reopen";
    } else {
      completeItem.innerText = "Complete"
    }
    completeItem.appendChild(_completeIcon());
    completeItem.classList.add('menu-item', 'complete-item');
    completeItem.addEventListener('click', function() {
      _toggleComplete(index, this);
    });
    return completeItem;
  }

  const _completeIcon = ()=> {
    const icon = document.createElement('div');
    icon.classList.add('complete-icon');
    icon.innerHTML = '<span>&#10003;</span>';
    return icon;
  } 

  // Toggle strikethrough class and menu item text
  const _toggleComplete = (index, ele)=> {
    const todoContainer = document.querySelector(`.todo[data-index="${index}"]`);
    if (todoContainer.classList.contains('todo-strikethrough')) {
      todoContainer.classList.remove('todo-strikethrough');
      ele.innerText = "Complete";
      project.todos[index].complete = false;
    } else {
      todoContainer.classList.add('todo-strikethrough');
      ele.innerText = "Reopen";
      project.todos[index].complete = true;
    }
    ele.appendChild(_completeIcon());
    eventObserver.run("Save Projects") // Save updated projects to local
  }

  const _deleteIcon = ()=> {
    const icon = document.createElement('div');
    icon.classList.add('delete-icon');
    icon.innerHTML = '<span>&#10006;</span>';
    return icon;
  }

  const _deleteProject = (index)=> {
    if (confirm("Are you sure you want to delete this project?")) {
      Project.delete({index: index});
      eventObserver.run("Display Projects", Project.all); // Run Project Page update
      eventObserver.run("Save Projects") // Save updated projects to local
      eventObserver.run("Close Modal"); // Closes an open modal
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

  const _deleteTodo = (index)=> {
    if (confirm("Are you sure you want to delete this Todo?")) {
      project.deleteTodo(index);
      eventObserver.run("Save Projects"); // Save updated projects to local
      updateTodos();
    }
  }
  
  const _addTodos = ()=> {
    let container = _todoContainer();
    container.classList.add('todos');
    project.todos.forEach((todo, index) => {
      let todoBox = document.createElement('div');
      todoBox.classList.add('todo');
      if (todo.complete) todoBox.classList.add('todo-strikethrough');
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

  const updateTodos = ()=> {
    document.querySelector('.todos').remove();
    let updatedTodos = _addTodos();
    container.append(updatedTodos);
  }

  const run = (e)=> {
    _clearContent();
    const index = e.currentTarget.dataset.index;
    project = Project.all[index]; // Set referenced project
    container.dataset.index = e.currentTarget.dataset.index;
    container.appendChild(_projectTitle(project.title));
    container.appendChild(_menuContainer({klass: 'project-menu', func: _deleteProject}, index));
    container.appendChild(_newTodoBtn());
    container.appendChild(_addTodos());
    return container;
  }

  return { run, updateTodos }
})();

export default projectContent;