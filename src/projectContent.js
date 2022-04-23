import Project from './project.js';
import newTodoForm from './newTodoForm.js';
import modal from './modal.js';
import todoContent from './todoContent.js';

const projectContent = (()=> {
  const container = document.createElement('div');
  container.classList.add('project-content');

  const _projectTitle = (title)=> {
    const h1 = document.createElement('h1');
    h1.innerText = title;
    return h1;
  }

  const _newTodoBtn = ()=> {
    const btn = document.createElement('button');
    btn.innerText = "+ new todo";
    btn.addEventListener('click', function() {
      modal.run(newTodoForm.run());
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
    dueDate.innerText = todo.dueDate;
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
    container.appendChild(_newTodoBtn());
    container.appendChild(_addTodos(project));
    return container;
  }

  return { run, updateTodos }
})();

export default projectContent;