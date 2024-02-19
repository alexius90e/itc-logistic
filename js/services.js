const serviceCards = document.querySelectorAll(".services__card");

serviceCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    const isCard = event.target === event.currentTarget;
    const isCardTitle = event.target.classList.contains("services__card-title");
    const isCardFigure = event.target.classList.contains("services__card-figure");
    const isCardFigureImage = event.target.classList.contains("services__card-figure-image");
    const isCloseBtn = event.target.classList.contains("services__card-modal-close");

    if (isCard || isCardTitle || isCardFigure || isCardFigureImage) {
      event.currentTarget.classList.toggle("active");
    }

    if (isCloseBtn) {
      event.currentTarget.classList.remove("active");
    }
  });
});
