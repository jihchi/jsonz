chrome.browserAction.onClicked.addListener(function(tab) {
  // CSS
  chrome.tabs.insertCSS(null, { file: 'lib/highlight/monokai-sublime.min.css' });

  // JS
  chrome.tabs.executeScript(null, { file: 'lib/jquery/jquery.min.js' });
  chrome.tabs.executeScript(null, { file: 'lib/highlight/highlight.min.js' });
  chrome.tabs.executeScript(null, { file: 'lib/js-beautify/beautify.min.js' });

  // Main
  chrome.tabs.executeScript(null, { file: 'src/content_script.js' });
});

