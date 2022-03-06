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

  const _closeModal = ()=> {
    const modal = document.querySelector('.project-modal');
    modal.remove();
  }
  
  const run = ()=> {
    pageContainer.appendChild(_createModal());
  }

  return { run }
})();

export default projectModal;