const modal = (() => {
  const pageContainer = document.querySelector('.page-container');

  /* eslint no-underscore-dangle: 0 */
  const _createModalBackdrop = () => {
    const modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop');
    return modalBackdrop;
  };

  const _createMainModal = () => {
    const modalMain = document.createElement('div');
    modalMain.setAttribute('role', 'dialog');
    modalMain.tabIndex = -1;
    modalMain.classList.add('modal-main');
    return modalMain;
  };

  const _createCloseBtn = () => {
    const btn = document.createElement('div');
    btn.innerHTML = '<span aria-hidden="true">&#10006;</span>';
    btn.ariaLabel = 'Close';
    btn.classList.add('close-btn');
    btn.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      closeModal();
    });
    return btn;
  };

  const _modalContentContainer = () => {
    const container = document.createElement('div');
    container.classList.add('content-container');
    return container;
  };

  const _createModal = (content) => {
    const modalBackdrop = _createModalBackdrop();
    const mainModal = _createMainModal();
    const contentContainer = _modalContentContainer();
    const closeBtn = _createCloseBtn();
    modalBackdrop.appendChild(mainModal);
    mainModal.appendChild(closeBtn);
    mainModal.appendChild(contentContainer);
    contentContainer.appendChild(content);
    return modalBackdrop;
  };

  const clearContent = () => {
    const container = document.querySelector('.content-container');
    container.innerHTML = '';
  };

  const _reOpenModal = () => {
    if (document.querySelector('.modal-closed')) {
      const currentModal = document.querySelector('.modal-closed');
      currentModal.style.visibility = 'visible';
      currentModal.classList.add('modal-open');
      currentModal.classList.remove('modal-closed');
    }
  };

  const closeModal = () => {
    const currentModal = document.querySelector('.modal-open');
    currentModal.remove();
    _reOpenModal(); // If a modal is currently hidden bring it back into the light
  };

  const _focusCloseBtn = () => {
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.focus();
  };

  const _hideModal = () => {
    if (document.querySelector('.modal-open')) {
      const currentModal = document.querySelector('.modal-open');
      currentModal.style.visibility = 'hidden';
      currentModal.classList.remove('modal-open');
      currentModal.classList.add('modal-closed');
    }
  };

  const run = (content) => {
    _hideModal(); // If a modal is already open, close/hide that one
    const currentModal = _createModal(content);
    currentModal.classList.add('modal-open');
    pageContainer.appendChild(currentModal);
    _focusCloseBtn(); // Pull focus onto modal (close button) when opened, away from trigger
  };

  return { run, closeModal, clearContent };
})();

export default modal;
