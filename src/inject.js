import _ from 'lodash/fp';
import { match } from 'wildstring';
import beautify from './common/beautify';
import debug from './common/debug';

function isMatched(needle, haystack) {
  return _.some(rule => match(rule, needle))(haystack);
}

function onLoad() {
  const href = _.getOr('')('location.href')(document);

  chrome.storage.sync.get({ whitelist: [] }, function({ whitelist }) {
    if (!isMatched(href, whitelist)) {
      return;
    }
    beautify();
  });
}

document.addEventListener('DOMContentLoaded', onLoad, false);
