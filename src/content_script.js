$(document).ready(function(){
  try {
    const body = $('body');
    const beautifyCode = JSONStringifyPrettyCompact(JSON.parse(body.text()));
    const pre = $(document.createElement('pre'));
    const code = $(document.createElement('code')).text(beautifyCode);

    $('head')
      .append('<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">');

    body
      .empty()
      .append(pre.append(code))

    hljs.highlightBlock(body.get(0));
  } catch (e) {
    console.error('ERROR', e);
  }
});

