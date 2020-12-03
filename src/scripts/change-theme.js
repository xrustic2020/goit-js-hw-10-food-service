import refs from './refs';
import Theme from './theme';
import { save } from './storage';

export default function () {
  switch (refs.body.getAttribute('class')) {
    case Theme.DARK:
      refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
      save('theme', Theme.LIGHT);
      break;
    case Theme.LIGHT:
      refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
      save('theme', Theme.DARK);
      break;
    default:
      refs.body.classList.add(Theme.DARK);
      save('theme', Theme.DARK);
  } 
};
