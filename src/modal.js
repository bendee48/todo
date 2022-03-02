const modal = (()=> {
  const pageContainer = document.querySelector('.page-container');

  const _createModalBackdrop = ()=> {
    const modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop');
    return modalBackdrop;
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
    btn.addEventListener('click', _closeModal);
    return btn;
  }

  const _createModal = ()=> {
    const modalBackdrop = _createModalBackdrop();
    const mainModal = _createMainModal();
    const closeBtn = _createCloseBtn();
    modalBackdrop.appendChild(mainModal);
    mainModal.appendChild(closeBtn);
    return modalBackdrop;
  }

  const _closeModal = ()=> {
    const modal = document.querySelector('.modal-backdrop');
    modal.remove();
  }
  
  const run = ()=> {
    pageContainer.appendChild(_createModal());
  }

  return { run }
})();

export default modal;