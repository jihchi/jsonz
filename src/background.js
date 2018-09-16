chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript(null, {
    file: 'src/prettify.js',
  });
  chrome.tabs.insertCSS(null, {
    code: `body {
      font-size: 1.2em;
      line-height: 1.2em;
    }
    body * {
      font-family: 'Inconsolata', monospace !important;
    }`,
  });
});
