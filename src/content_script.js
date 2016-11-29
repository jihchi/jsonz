'use strict';

var debug = console.log.bind(console, '[jsonz]');

function beautify(){
  var body = document.body;
  var beautifyCode = body.textContent;
  var pre = document.createElement('pre');
  var code = document.createElement('code');
  var link = document.createElement('link');

  link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Inconsolata');
  link.setAttribute('rel', 'stylesheet');

  document.head.appendChild(link);

  try {
    beautifyCode = JSONStringifyPrettyCompact(JSON.parse(beautifyCode), { indent: 4 });
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

beautify();

