chrome.browserAction.onClicked.addListener(function(tab) {
  // CSS
  chrome.tabs.insertCSS(null, { file: 'lib/highlight/monokai-sublime.min.css' });
  chrome.tabs.insertCSS(null, { file: 'src/content_script.css' });

  // JS
  chrome.tabs.executeScript(null, { file: 'lib/jquery/jquery.min.js' });
  chrome.tabs.executeScript(null, { file: 'lib/highlight/highlight.min.js' });
  chrome.tabs.executeScript(null, { file: 'lib/json-stringify-pretty-compact/index.js' });

  // Main
  chrome.tabs.executeScript(null, { file: 'src/content_script.js' });
});

