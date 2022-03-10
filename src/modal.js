const modal = (()=> {
  const pageContainer = document.querySelector('.page-container');

  const _createModalBackdrop = ()=> {
    const modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop');
    return modalBackdrop;
  }
  
  const _createMainModal = ()=> {
    const modalMain = document.createElement('div');
    modalMain.setAttribute("role", "dialog");
    modalMain.tabIndex = -1;
    modalMain.classList.add('modal-main');
    return modalMain;
  }

  const _createCloseBtn = ()=> {
    const btn = document.createElement('button');
    btn.innerText = 'Close';
    btn.classList.add('close-btn');
    btn.addEventListener('click', function() {
      closeModal();
    });
    return btn;
  }

  const _modalContentContainer = ()=> {
    const container = document.createElement('div');
    container.classList.add('content-container');
    return container;
  }

  const _createModal = (content)=> {
    const modalBackdrop = _createModalBackdrop();
    const mainModal = _createMainModal();
    const contentContainer = _modalContentContainer();
    const closeBtn = _createCloseBtn();
    modalBackdrop.appendChild(mainModal);
    mainModal.appendChild(closeBtn);
    mainModal.appendChild(contentContainer);
    contentContainer.appendChild(content);
    return modalBackdrop;
  }

  const clearContent = ()=> {
    let container = document.querySelector('.content-container');
    container.innerHTML = "";
  }

  const closeModal = ()=> {
    const modal = document.querySelector('.modal-open');
    modal.remove();
    // If a modal is currently hidden bring it back into the light baby
    if (document.querySelector('.modal-closed')) {
      let modal = document.querySelector('.modal-closed');
      modal.style.visibility = 'visible';
      modal.classList.add('modal-open');
      modal.classList.remove('modal-closed');
    }
  }

  const focusCloseBtn = ()=> {
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.focus();
  }
  
  const run = (content)=> {
    // If a modal is already open, close hide that one
    if (document.querySelector('.modal-open')) {
      let modal = document.querySelector('.modal-open');
      modal.style.visibility = 'hidden';
      modal.classList.remove('modal-open');
      modal.classList.add('modal-closed');
    } 
    let modal = _createModal(content);
    modal.classList.add('modal-open');
    pageContainer.appendChild(modal);
    focusCloseBtn(); // Pull focus onto modal (close button) when opened, away from trigger
  }

  return { run, closeModal, clearContent }
})();

export default modal;