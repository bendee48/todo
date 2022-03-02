const projectModal = (()=> {
  const pageContainer = document.querySelector('.page-container');
  // let newProject;
  // let projectObj;
  // let eventObserver;

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

  const _createCloseBtn = ()=> {
    const btn = document.createElement('button');
    btn.innerText = 'Close';
    btn.classList.add('close-btn');
    btn.addEventListener('click', function() {
      _closeModal();
    });
    return btn;
  }

  const _createModal = ()=> {
    const pageModal = _createPageModal();
    const mainModal = _createMainModal();
    const closeBtn = _createCloseBtn();
    pageModal.appendChild(mainModal);
    mainModal.appendChild(closeBtn);
    return pageModal;
  }

  const _closeModal = (deleteProj)=> {
    // If passed true, delete the last project (a new project is created with the add project btn)
    if (deleteProj) projectObj.all.pop(); 
    const modal = document.querySelector('.project-modal');
    modal.remove();
  }
  
  const run = ()=> {
    // newProject = newProjectObj;
    // projectObj = project;
    // eventObserver = eventObj;
    pageContainer.appendChild(_createModal());
    // _focusTitleInput(); //Focus input after modal load to stop return triggering a new modal
  }

  return { run }
})();

export default projectModal;