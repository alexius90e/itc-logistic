const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    const isModal = event.target === event.currentTarget;
    const isCloseButton = event.target.classList.contains("modal__close");
    if (isModal || isCloseButton) callbackModal.classList.remove("active");
  });
});

const callbackModalButtons = document.querySelectorAll(".button_callback");
const callbackModal = document.querySelector(".modal-callback");

callbackModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (callbackModal) callbackModal.classList.add("active");
  });
});
