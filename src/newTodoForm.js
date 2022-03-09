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
    date.type = 'date';
    date.id = 'date';
    date.name = 'date';
    date.title = 'Due Date';
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
    option1.value = "Low";
    option1.text = "Low";
    option2.value = "Medium";
    option2.text = "Medium";
    option3.value = "High";
    option3.text = "High";
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
    form.addEventListener('submit', ()=> { console.log('Creating a todo')});
    return form;
  }

  // const _createProject = (e)=> {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   let title = formData.get('title');
  //   eventObserver.run("Create Project", title); // Runs the Project.create function
  //   eventObserver.run("Close Modal"); // Closes an open modal
  //   eventObserver.run("New Project", projectObj.all); // Run Project Page update
  // } 

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
