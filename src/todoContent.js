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

  const todoTitle = (todo)=> {
    let title = document.createElement('p');
    title.classList.add('todo-title');
    title.innerText = todo.title;
    title.contentEditable = true;
    return title;
  }

  const todoDescription = (todo)=> {
    let description = document.createElement('p');
    description.classList.add('todo-description');
    description.innerText = todo.description;
    description.contentEditable = true;
    return description;
  }

  const todoDueDate = (todo)=> {
    let dueDate = document.createElement('p');
    dueDate.classList.add('todo-duedate');
    dueDate.innerText = todo.dueDate;
    dueDate.contentEditable = true;
    return dueDate;
  }

  const todoPriority = (todo)=> {
    let priority = document.createElement('p');
    priority.classList.add('todo-priority');
    priority.innerText = todo.priority;
    priority.contentEditable = true;
    return priority;
  }

  const displayTodo = (todo)=> {
    container.append(todoTitle(todo));
    container.append(todoDescription(todo));
    container.append(todoDueDate(todo));
    container.append(todoPriority(todo));
    container.append(saveBtn(todo));
  }

  const saveChanges = (todo)=> {
    // Select todo content from open modal
    const title = document.querySelector('.todo-content .todo-title');
    const description = document.querySelector('.todo-content .todo-description');
    const dueDate = document.querySelector('.todo-content .todo-duedate');
    const priority = document.querySelector('.todo-content .todo-priority');
    todo.title = title.innerText;
    todo.description = description.innerText;
    todo.dueDate = dueDate.innerText;
    todo.priority = priority.innerText;
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