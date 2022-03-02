import Project from './project.js';

const newProjectModal = (()=> {
  const pageContainer = document.querySelector('.page-container');
  let projectObj = Project;
  let eventObserver;

  const _createPageModal = ()=> {
    const pageModal = document.createElement('div');
    pageModal.classList.add('project-modal');
    return pageModal;
  }
  
  const _createMainModal = ()=> {
    const modalMain = document.createElement('div');
    modalMain.classList.add('modal-main');
    return modalMain;
  }

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

  const _createCloseBtn = ()=> {
    const btn = document.createElement('button');
    btn.innerText = 'Close';
    btn.classList.add('close-btn');
    btn.addEventListener('click', function() {
      _closeModal(true);
    });
    return btn;
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

  const _createModal = ()=> {
    const pageModal = _createPageModal();
    const mainModal = _createMainModal();
    const closeBtn = _createCloseBtn();
    const form = _createForm();
    pageModal.appendChild(mainModal);
    mainModal.appendChild(closeBtn);
    mainModal.appendChild(form);
    return pageModal;
  }

  const _createProject = (e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    let newProject = new projectObj();
    newProject.title = formData.get('title');
    _closeModal();
    eventObserver.run("New Project", projectObj.all); // Run Project Page update
  }

  const _closeModal = ()=> {
    const modal = document.querySelector('.project-modal');
    modal.remove(); // Removes modal from DOM
  }

  const _focusTitleInput = ()=> {
    const input = document.getElementById('title');
    input.focus()
  }
  
  const run = (eventObj)=> {
    eventObserver = eventObj;
    pageContainer.appendChild(_createModal());
    _focusTitleInput(); //Focus input after modal load to stop return triggering a new modal
  }

  return { run }
})();

export default newProjectModal;