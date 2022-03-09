import Project from './project.js';
import newTodoForm from './newTodoForm.js';
import modal from './modal.js';

const projectContent = (()=> {
  const container = document.createElement('div');
  let project;

  const projectTitle = (title)=> {
    const h1 = document.createElement('h1');
    h1.innerText = title;
    return h1;
  }

  const _newTodoBtn = ()=> {
    const btn = document.createElement('button');
    btn.innerText = "New Todo";
    btn.addEventListener('click', function() {
      modal.run(newTodoForm.run());
    });
    return btn;
  }
  
  const todoContainer = ()=> {
    const todoContainer = document.createElement('div');
    return todoContainer;
  }
  
  const addTodos = ()=> {
    let container = todoContainer();
    project.todos.forEach(todo => {
      let todoBox = document.createElement('div');
      todoBox.classList.add('todo');
      todoBox.innerText = todo.title;
      container.appendChild(todoBox);
    });
    return container;
  }

  const _clearContent = ()=> {
    container.innerHTML = "";
  }

  const run = (e)=> {
    _clearContent();
    project = Project.all[e.target.dataset.index];
    container.appendChild(projectTitle(project.title));
    container.appendChild(_newTodoBtn());
    container.appendChild(addTodos());
    return container;
  }

  return { run }
})();

export default projectContent;