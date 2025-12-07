const menuButton = document.querySelector('.header__button');
const navigation = document.querySelector('.navigation');

const onMenuButtonClick = () => {
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('header__button--close');
    menuButton.classList.toggle('header__button--open');
    navigation.classList.toggle('navigation--open');
    navigation.classList.toggle('navigation--close');
  });
};

const closeMenu = () => {
  menuButton.classList.add('header__button--close');
  menuButton.classList.remove('header__button--open');
  navigation.classList.add('navigation--close');
  navigation.classList.remove('navigation--open');
};

export { onMenuButtonClick, closeMenu };
