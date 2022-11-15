import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/restaurant-detail.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './Views/app';
import swRegister from './utils/sw-register';

const app = new App({
  navbar: document.querySelector('#navbar'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
