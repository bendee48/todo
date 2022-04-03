import Project from './project.js';
import eventObserver from './eventObserver.js';

const todoContent = (()=> {
  const container = document.createElement('div');
  container.classList.add('todo-content');
  let project;

  const saveBtn = (todo)=> {
    const btn = document.createElement('button');
    btn.classList.add('save-btn');
    btn.innerText = 'Save and Close'
    btn.addEventListener('click', function() {
      saveChanges(todo);
    });
    return btn;
  }

  const displayTodo = (todo)=> {
    let title = document.createElement('p');
    title.classList.add('todo-title');
    title.innerText = todo.title;
    title.contentEditable = true;
    container.append(title);
    container.append(saveBtn(todo));
  }

  const saveChanges = (todo)=> {
    // Select todo content from open modal
    const title = document.querySelector('.todo-content .todo-title');
    todo.title = title.innerText;
    eventObserver.run('Update Todos', project)
    eventObserver.run('Close Modal');
  }

  const _clearContent = ()=> {
    container.innerHTML = "";
  }

  const run = (e)=> {
    _clearContent();
    // Get current open project
    let projectElement = document.querySelector('.project-content');
    project = Project.all[projectElement.dataset.index];
    // Get clicked on todo object
    let todoTitle = e.target.innerText;
    let todo = project.todos.find(todo => todo.title === todoTitle);
    displayTodo(todo);
    return container;
  }

  return { run }
})();

export default todoContent;