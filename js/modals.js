const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    const isModal = event.target === event.currentTarget;
    const isCloseButton = event.target.classList.contains("modal__close");
    if (isModal || isCloseButton) event.currentTarget.classList.remove("active");
  });
});

const callbackModalButtons = document.querySelectorAll(".button_callback");

callbackModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const callbackModal = document.querySelector(".modal-callback");
    if (callbackModal) callbackModal.classList.add("active");
  });
});

const aboutModalButtons = document.querySelectorAll(".button_about");

aboutModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const aboutModal = document.querySelector(".modal-about");
    if (aboutModal) aboutModal.classList.add("active");
  });
});

const contactsModalButtons = document.querySelectorAll(".button_contacts");

contactsModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const contactsModal = document.querySelector(".modal-contacts");
    if (contactsModal) contactsModal.classList.add("active");
  });
});
