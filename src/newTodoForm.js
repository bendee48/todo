import Todo from './todo.js';
import Project from './project.js';
import eventObserver from './eventObserver.js';
import projectContent from './projectContent.js';

const newTodoForm = (()=> {
  const container = document.createElement('div');
  container.classList.add('new-todo-content');

  const _titleInput = ()=> {
    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    titleInput.title = "Todo Title";
    titleInput.placeholder = "Todo Title";
    titleInput.maxLength = 15;
    titleInput.required = true;
    return titleInput;
  }

  const _description = ()=> {
    const description = document.createElement('textarea');
    description.id = "description";
    description.name = "description";
    description.title = "Todo Description";
    description.rows = 5;
    description.placeholder = "Write your Todo here...";
    return description;
  }

  const _dueDate = ()=> {
    const date = document.createElement('input');
    let dateNow = new Date(Date.now());
    date.type = 'date';
    date.id = 'date';
    date.name = 'date';
    date.title = 'Due Date';
    date.required = true;
    date.min = dateNow.toISOString().split('T').shift(); // Set to use future dates only
    return date;
  }

  const _prioritySelect = ()=> {
    const prioritySelect = document.createElement('select');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');
    prioritySelect.id = 'priority';
    prioritySelect.name = 'priority';
    prioritySelect.title = 'priority';
    option1.value = "low";
    option1.text = "low";
    option2.value = "medium";
    option2.text = "medium";
    option3.value = "high";
    option3.text = "high";
    prioritySelect.add(option1);
    prioritySelect.add(option2);
    prioritySelect.add(option3);
    return prioritySelect;
  }

  const _submitInput = ()=> {
    const submitInput = document.createElement('input');
    submitInput.type = "submit";
    submitInput.value = "Create Todo";
    return submitInput;
  }

  const _createForm = ()=> {
    const form = document.createElement('form');
    form.classList.add('todo-form');
    const titleInput = _titleInput();
    form.appendChild(titleInput);
    const description = _description();
    form.appendChild(description);
    const dueDate = _dueDate();
    form.appendChild(dueDate);
    const priority = _prioritySelect();
    form.appendChild(priority);
    const submitInput = _submitInput();
    form.appendChild(submitInput);
    form.addEventListener('submit', _createTodo);
    return form;
  }

  const _createTodo = (e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    let title = formData.get('title');
    let description = formData.get('description');
    let dueDate = formData.get('date');
    let priority = formData.get('priority');
    let todo = new Todo({title, description, dueDate, priority});
    _addTodoToProject(todo);
    eventObserver.run("Close Modal"); // Closes an open modal
  } 

  const _addTodoToProject = (todo)=> {
    // Select open project modal to find project to add todo too
    let projectElement = document.querySelector('.project-content'); 
    let project = Project.all[projectElement.dataset.index];
    project.todos.push(todo);
    projectContent.updateTodos(project); // Updating todos for Project
  }

  const _clearContent = ()=> {
    // Clears previous content from the container before each call
    container.innerHTML = "";
  }

  const _content = ()=> {
    _clearContent();
    container.appendChild(_createForm());
    return container;
  }

  const run = ()=> {
    return _content();
  }

  return { run }
})();

export default newTodoForm;
