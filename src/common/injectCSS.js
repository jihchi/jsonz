export default function injectCSS(URL = '') {
  const link = document.createElement('link');

  link.setAttribute('href', URL);
  link.setAttribute('rel', 'stylesheet');

  document.head.appendChild(link);
}
