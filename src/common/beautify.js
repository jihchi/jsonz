import hljs from 'highlight.js';
import stringify from 'json-stringify-pretty-compact';
import debug from './debug';
import injectCSS from './injectCSS';

import 'highlight.js/styles/monokai-sublime.css';
import './beautify.css';

export default function beautify() {
  const body = document.body;
  const pre = document.createElement('pre');
  const code = document.createElement('code');
  let beautifyCode = body.textContent;

  injectCSS('https://fonts.googleapis.com/css?family=Inconsolata')
  injectCSS(chrome.extension.getURL('bundled/commons.css'));

  try {
    beautifyCode = stringify(JSON.parse(beautifyCode), { indent: 4 });
  } catch (e) {
    debug('failed to parse JSON, fallback to plain text. error:', e);
  }

  try {
    code.textContent = beautifyCode;
    body.innerHTML = '';
    pre.appendChild(code);
    body.appendChild(pre);
    hljs.highlightBlock(body);
  } catch (e) {
    debug('failed to highlight syntax. error:', e);
  }
};
