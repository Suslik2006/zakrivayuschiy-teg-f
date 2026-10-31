document.querySelectorAll('.card').forEach((card) => {
  const heart = card.querySelector('.like-icon');
  const likeButton = card.querySelector('.card__like-button');
  const iconButton = card.querySelector('.card__icon-button');
  const buttonText = likeButton.querySelector('.button__text');

  let hoverTimer;
  let textTimer;

  function cancelHoverTimer() {
    clearTimeout(hoverTimer);
  }

  function setLiked(isLiked) {
    heart.classList.toggle('is-liked', isLiked);

    clearTimeout(textTimer);
    textTimer = setTimeout(() => {
      buttonText.textContent = isLiked ? 'Unlike' : 'Like';
    }, 500);

    iconButton.setAttribute(
      'aria-label',
      isLiked ? 'Убрать лайк' : 'Поставить лайк'
    );
  }

  function startHoverTimer() {
    cancelHoverTimer();

    if (heart.classList.contains('is-liked')) {
      return;
    }

    hoverTimer = setTimeout(() => {
      setLiked(true);
    }, 2000);
  }

  function handleClick() {
    cancelHoverTimer();
    setLiked(!heart.classList.contains('is-liked'));
  }

  [iconButton, likeButton].forEach((button) => {
    button.addEventListener('mouseenter', startHoverTimer);
    button.addEventListener('mouseleave', cancelHoverTimer);
    button.addEventListener('click', handleClick);
  });
});