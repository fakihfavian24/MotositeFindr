import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/post.css';
import '../styles/form.css';
import '../styles/searchpages.css';
import '../styles/detail.css';
import '../styles/login.css';
import AOS from 'aos';
import App from './views/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

AOS.init({
  once: false,
  mirror: true,
  duration: 300,
});