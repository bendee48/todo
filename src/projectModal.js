import projectPage from './projectPage.js'

const projectModal = (()=> {
  const pageContainer = document.querySelector('.page-container');

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

  const _createCloseBtn = (projectObj)=> {
    const btn = document.createElement('button');
    btn.innerText = 'Close';
    btn.classList.add('close-btn');
    btn.addEventListener('click', function() {
      _closeModal(projectObj);
    });
    return btn;
  }

  const _createForm = (newProject, projectObj)=> {
    const form = document.createElement('form');
    form.classList.add('project-form');
    const titleInput = _createTitleInput();
    form.appendChild(titleInput);
    const submitInput = _createSubmitInput();
    form.appendChild(submitInput);
    form.addEventListener('submit', function(e) {
      _createProject(e, newProject, projectObj);
    });
    return form;
  }

  const _createModal = (newProject, projectObj)=> {
    const pageModal = _createPageModal();
    const mainModal = _createMainModal();
    const closeBtn = _createCloseBtn(projectObj);
    const form = _createForm(newProject, projectObj);
    pageModal.appendChild(mainModal);
    mainModal.appendChild(closeBtn);
    mainModal.appendChild(form);
    return pageModal;
  }

  const _createProject = (e, newProject, projectObj)=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    newProject.title = formData.get('title');
    _closeModal();
    // Change to pubsub
    // projectPage.displayProjects(Project.all); 
    projectPage.displayProjects(projectObj.all)
  }

  const _closeModal = (projectObj)=> {
    if (projectObj) projectObj.all.pop(); // If passed projectObj remove last project from Project.all
    const modal = document.querySelector('.project-modal');
    modal.remove();
  }
  
  const run = (newProject, projectObj)=> {
    pageContainer.appendChild(_createModal(newProject, projectObj));
  }

  return { run }
})();

export default projectModal;