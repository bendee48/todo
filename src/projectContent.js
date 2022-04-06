import Project from './project.js';
import newTodoForm from './newTodoForm.js';
import modal from './modal.js';
import todoContent from './todoContent.js';

const projectContent = (()=> {
  const container = document.createElement('div');
  container.classList.add('project-content');

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

  const todoTitle = (todo)=> {
    const title = document.createElement('h2');
    title.innerText = todo.title;
    title.classList.add('todo-title');
    title.addEventListener('click', function(e) {
      modal.run(todoContent.run(e))
    })
    return title;
  }

  const todoDueDate = (todo)=> {
    const dueDate = document.createElement('div');
    dueDate.innerText = todo.dueDate;
    dueDate.classList.add('todo-dueDate');
    return dueDate;
  }

  const todoPriority = (todo)=> {
    const priority = document.createElement('span');
    priority.innerText = todo.priority;
    priority.classList.add('todo-priority');
    return priority;
  }
  
  const addTodos = (project)=> {
    let container = todoContainer();
    container.classList.add('todos');
    project.todos.forEach(todo => {
      let todoBox = document.createElement('div');
      todoBox.classList.add('todo');
      // todoBox.addEventListener('click', function(e) {
      //   modal.run(todoContent.run(e));
      // }); //MOVED TO TITLE CREATION
      todoBox.appendChild(todoTitle(todo));
      todoBox.appendChild(todoDueDate(todo));
      todoBox.appendChild(todoPriority(todo));
      container.appendChild(todoBox);
    });
    return container;
  }

  const _clearContent = ()=> {
    container.innerHTML = "";
  }

  const updateTodos = (project)=> {
    document.querySelector('.todos').remove();
    let updatedTodos = addTodos(project);
    container.append(updatedTodos);
  }

  const run = (e)=> {
    _clearContent();
    let project = Project.all[e.currentTarget.dataset.index];
    container.dataset.index = e.currentTarget.dataset.index;
    container.appendChild(projectTitle(project.title));
    container.appendChild(_newTodoBtn());
    container.appendChild(addTodos(project));
    return container;
  }

  return { run, updateTodos }
})();

export default projectContent;