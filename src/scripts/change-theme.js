import refs from './refs';
import Theme from './theme';
import { save } from './storage';

export default function () {
  switch (refs.body.getAttribute('class')) {
    case Theme.DARK:
      console.log('dark theme change for light');
      refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
      save('theme', Theme.LIGHT);
      break;
    case Theme.LIGHT:
      console.log('light theme change for dark');
      refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
      save('theme', Theme.DARK);
      break;
    default:
      console.log('this default block theme');
      refs.body.classList.add(Theme.DARK);
      save('theme', Theme.DARK);
  } 
};
