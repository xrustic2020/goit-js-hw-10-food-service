import './styles.css';
import refs from './scripts/refs';
import Theme from './scripts/theme';
import { load } from './scripts/storage';
import changeTheme from './scripts/change-theme';

import dataMenu from './data/menu.json';
import menuTemplate from './templates/product-cards.hbs';

refs.menu.insertAdjacentHTML('afterbegin', menuTemplate(dataMenu));

const loadTheme = load('theme');

if (loadTheme) {
  if (loadTheme === Theme.DARK) {
    refs.themeButton.setAttribute('checked', 'true');
  }
  refs.body.classList.add(loadTheme);
};

refs.themeButton.addEventListener('change', changeTheme);