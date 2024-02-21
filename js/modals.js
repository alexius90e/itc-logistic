const modals = document.querySelectorAll('.modal');

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    const isModal = event.target === event.currentTarget;
    const isCloseButton = event.target.classList.contains('modal__close');
    if (isModal || isCloseButton) {
      event.currentTarget.classList.remove('active');
      document.body.style.overflow = null;
    }
  });
});

const aboutModalButtons = document.querySelectorAll('.button_about');

aboutModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const aboutModal = document.querySelector('.modal-about');
    if (aboutModal) {
      aboutModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

const contactsModalButtons = document.querySelectorAll('.button_contacts');

contactsModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const contactsModal = document.querySelector('.modal-contacts');
    if (contactsModal) {
      contactsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

const successModal = document.querySelector('.modal-success');
const callbackModal = document.querySelector('.modal-callback');
const callbackModalButtons = document.querySelectorAll('.button_callback');
const callbackModalForm = document.querySelector('.modal-callback__form');

callbackModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (callbackModal) {
      callbackModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

if (callbackModalForm && callbackModal) {
  callbackModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(callbackModalForm);
    const email = formData.has('email') ? formData.get('email') : 'unknown';
    const name = formData.has('name') ? formData.get('name') : 'unknown';
    const contacts = formData.has('contacts') ? formData.get('contacts') : 'unknown';
    const message = formData.has('message') ? formData.get('message') : 'no message';

    fetch('../contact-form-handler.php', {
      method: 'POST',
      data: { name, email, contacts, message },
    }).then(() => {
      callbackModalForm.reset();
      callbackModal.classList.remove('active');
      successModal.classList.add('active');
    });
  });
}
