import eventObserver from './eventObserver.js';
import Project from './project.js';

const newProjectContent = (()=> {
  const container = document.createElement('div');
  container.classList.add('new-project-content');
  const projectObj = Project;

  const _createTitleInput = ()=> {
    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    titleInput.title = "Project Title";
    titleInput.placeholder = "Project Title";
    titleInput.required = true;
    return titleInput;
  }

  const _createSubmitInput = ()=> {
    const submitInput = document.createElement('input');
    submitInput.type = "submit";
    submitInput.value = "Create Project";
    return submitInput;
  }

  const _createForm = ()=> {
    const form = document.createElement('form');
    form.classList.add('project-form');
    const titleInput = _createTitleInput();
    form.appendChild(titleInput);
    const submitInput = _createSubmitInput();
    form.appendChild(submitInput);
    form.addEventListener('submit', _createProject);
    return form;
  }

  const _createProject = (e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    let title = formData.get('title');
    eventObserver.run("Create Project", title); // Runs the Project.create function
    eventObserver.run("Close Modal"); // Closes an open modal
    eventObserver.run("New Project", projectObj.all); // Run Project Page update
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

export default newProjectContent;
