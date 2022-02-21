import Project from './project.js';
import projectPage from './projectPage.js'

const projectModal = (()=> {
  const pageContainer = document.querySelector('.page-container');

  const createPageModal = ()=> {
    const pageModal = document.createElement('div');
    pageModal.classList.add('project-modal');
    return pageModal;
  }
  
  const createMainModal = ()=> {
    const modalMain = document.createElement('div');
    modalMain.classList.add('modal-main');
    return modalMain;
  }

  const createTitleInput = ()=> {
    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    titleInput.title = "Project Title";
    titleInput.placeholder = "Project Title";
    titleInput.required = true;
    return titleInput;
  }

  const createSubmitInput = ()=> {
    const submitInput = document.createElement('input');
    submitInput.type = "submit";
    submitInput.value = "Create Project";
    return submitInput;
  }

  const createForm = ()=> {
    const form = document.createElement('form');
    form.classList.add('project-form');
    const titleInput = createTitleInput();
    form.appendChild(titleInput);
    const submitInput = createSubmitInput();
    form.appendChild(submitInput);
    form.addEventListener('submit', createProject);
    return form;
  }

  const createModal = ()=> {
    const pageModal = createPageModal();
    const mainModal = createMainModal();
    const form = createForm();
    pageModal.appendChild(mainModal);
    mainModal.appendChild(form);
    return pageModal;
  }

  const createProject = (e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    new Project(formData.get('title'));
    closeModal();
    projectPage.displayProjects();
  }

  const closeModal = ()=> {
    const modal = document.querySelector('.project-modal');
    console.log(modal)
    modal.remove();
  }
  
  const run = ()=> {
    pageContainer.appendChild(createModal());
  }

  return { run }
})();

export default projectModal;