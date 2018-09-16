chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript(null, {
    file: 'src/prettify.js',
  });
});
