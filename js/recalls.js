const recallsCards = document.querySelectorAll(".recalls__card");

recallsCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    const isCard = event.target === event.currentTarget;
    const isCardTitle = event.target.classList.contains("recalls__card-title");
    const isCloseBtn = event.target.classList.contains("recalls__card-close");

    if (isCard || isCardTitle) {
      event.currentTarget.classList.toggle("active");
    }

    if (isCloseBtn) {
      event.currentTarget.classList.remove("active");
    }
  });
});
