import './styles.css';
import refs from './scripts/refs';
import Theme from './scripts/theme';
import { load } from './scripts/storage';
import changeTheme from './scripts/change-theme';

import dataMenu from './data/menu.json';
import menuTemplate from './templates/product-cards.hbs';

refs.menu.insertAdjacentHTML('afterbegin', menuTemplate(dataMenu));

if (load('theme')) {
  if (load('theme') === Theme.DARK) { 
    refs.themeButton.setAttribute('checked', 'true');
  }
  refs.body.classList.add(load('theme'));
};

refs.themeButton.addEventListener('change', changeTheme);