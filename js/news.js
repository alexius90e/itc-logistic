const newsCards = document.querySelectorAll('.news__card');

newsCards.forEach((newsCard) => {
  newsCard.addEventListener('click', (event) => {
    const panel = event.currentTarget.querySelector('.news__card-panel');
    if (!panel) return;
    event.currentTarget.classList.toggle('active');
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
    newsCards.forEach((card) => {
      if (card !== event.currentTarget && card.classList.contains('active')) {
        const panel = card.querySelector('.news__card-panel');
        panel.style.maxHeight = null;
        card.classList.remove('active');
      }
    });
  });
});
