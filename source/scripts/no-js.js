import { closeMenu } from './header-menu.js';

const noJs = document.querySelectorAll('.no-js');

const checkNoJs = () => {
  closeMenu();
  noJs.forEach((item) => {
    item.classList.remove('no-js');
  });
};

export { checkNoJs };
