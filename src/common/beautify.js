import $ from 'jquery';
import hljs from 'highlight.js';
import select from 'select';
import stringify from 'json-stringify-pretty-compact';
import debug from './debug';
import injectCSS from './injectCSS';

import 'highlight.js/styles/monokai-sublime.css';
import './beautify.css';

function onMouseEnter() {
  const attr = $(this).prev('.hljs-attr');

  attr.addClass('hovering');
}

function onMouseLeave() {
  const attr = $(this).prev('.hljs-attr');

  attr.removeClass('hovering');
}

function onClick() {
  select(this);
}

export default function beautify() {
  const body = $('body');
  const pre = $(document.createElement('pre'));
  const code = $(document.createElement('code'));
  let beautifyCode = body.text();

  injectCSS('https://fonts.googleapis.com/css?family=Inconsolata');
  injectCSS(chrome.extension.getURL('bundled/commons.css'));

  try {
    beautifyCode = stringify(JSON.parse(beautifyCode), { indent: 4 });
  } catch (e) {
    debug('failed to parse JSON, fallback to plain text. error:', e);
  }

  try {
    code.text(beautifyCode);

    body
      .empty()
      .append(pre.append(code));

    hljs.highlightBlock(body.get(0));
  } catch (e) {
    debug('failed to highlight syntax. error:', e);
  }

  $('.hljs-string, .hljs-number, .hljs-literal')
    .on('mouseenter', onMouseEnter)
    .on('mouseleave', onMouseLeave)
    .on('click', onClick);

  $('.hljs-attr')
    .on('click', onClick);
}
