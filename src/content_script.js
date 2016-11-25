$(document).ready(function(){
  try {
    const body = $('body');
    const beautifyCode = JSONStringifyPrettyCompact(JSON.parse(body.text()));
    const pre = $(document.createElement('pre'));
    const code = $(document.createElement('code')).text(beautifyCode);

    body
      .empty()
      .css({ 'font-size': '1.5em' })
      .append(pre.append(code))

    hljs.highlightBlock(body.get(0));
  } catch (e) {
    console.error('ERROR', e);
  }
});

