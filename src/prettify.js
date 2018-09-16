const prettier = require('prettier/standalone');
const plugins = [require('prettier/parser-babylon')];
const hljs = require('highlight.js');
require('highlight.js/styles/monokai-sublime.css');

const rawBody = document.body.textContent;
const newBody = prettier.format(rawBody, { parser: 'json', plugins });

document.body.innerHTML = `<pre><code>${newBody}</code></pre>`;
hljs.highlightBlock(document.body);

injectCSS('https://fonts.googleapis.com/css?family=Inconsolata');

function injectCSS(URL = '') {
  const link = document.createElement('link');
  link.setAttribute('href', URL);
  link.setAttribute('rel', 'stylesheet');
  document.head.appendChild(link);
}
