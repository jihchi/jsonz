require('./prettify.css');

const prettier = require('prettier/standalone');
const plugins = [require('prettier/parser-babylon')];
const hljs = require('highlight.js');

const raw = document.body.textContent;
const formatted = prettier.format(raw, { parser: 'json', plugins });
const { value: highlighted } = hljs.highlight('json', formatted, true);

document.body.innerHTML = `<pre><code class="hljs json">${highlighted}</code></pre>`;
