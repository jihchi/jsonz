'use strict';

var debug = console.log.bind(console, '[jsonz]');

$(document).ready(function(){
  var body = $('body');
  var beautifyCode = body.text();
  var pre = $(document.createElement('pre'));
  var code = $(document.createElement('code'));

  $('head').append('<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">');

  try {
    beautifyCode = JSONStringifyPrettyCompact(JSON.parse(beautifyCode), { indent: 4 });
  } catch (e) {
    debug('failed to parse JSON, fallback to plain text. error:', e);
  }

  try {
    code.text(beautifyCode);
    
    body
      .empty()
      .append(pre.append(code))

    hljs.highlightBlock(body.get(0));
  } catch (e) {
    debug('failed to highlight syntax. error:', e);
  }
});

