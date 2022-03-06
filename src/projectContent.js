import Project from './project.js'

const projectContent = (()=> {
  const container = document.createElement('div');
  let project;

  const projectTitle = (title)=> {
    const h1 = document.createElement('h1');
    h1.innerText = title;
    return h1;
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
    container.appendChild(addTodos());
    return container;
  }

  return { run }
})();

export default projectContent;