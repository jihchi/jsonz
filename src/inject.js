import $ from 'jquery';
import some from 'lodash/fp/some';
import getOr from 'lodash/fp/getOr';
import { match } from 'wildstring';
import beautify from './common/beautify';

function isMatched(needle, haystack) {
  return some(rule => match(rule, needle))(haystack);
}

function onLoad() {
  const href = getOr('')('location.href')(document);

  chrome.storage.sync.get({ whitelist: [] }, ({ whitelist }) => {
    if (!isMatched(href, whitelist)) {
      return;
    }

    beautify();
  });
}

$(document).ready(onLoad);
