(() => {
    const refs = {
      openModalBtn: document.querySelector('[about-modal-open]'),
      openModalBtn: document.querySelector('[hero-modal-open]'),
      closeModalBtn: document.querySelector('[about-modal-close]'),
      modal: document.querySelector('[about-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden-about');
    }
  })();