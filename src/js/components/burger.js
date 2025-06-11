export const useBurger = () => {
  // eslint-disable-next-line prettier/prettier
  const burgerBtn = document.querySelector('[data-burger="btn"]');
  const overlay = document.querySelector('[data-burger="overlay"]');
  const burgerMenu = document.querySelector('[data-burger="menu"]');

  const closeBurgermenu = () => {
    burgerBtn.classList.remove('burger--active');
    overlay.classList.remove('overlay--visible');
    burgerMenu.classList.remove('header__right--visible');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    overlay.classList.toggle('overlay--visible');
    burgerMenu.classList.toggle('header__right--visible');
  });

  overlay.addEventListener('click', closeBurgermenu);
};
