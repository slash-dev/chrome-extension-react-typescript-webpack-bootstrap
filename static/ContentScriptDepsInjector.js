'use strict';

// Hack to export the module into this object.
var exports = { "__esModule": true };

(async () => {
  const src = chrome.extension.getURL('contentscript.js');
  await import(src);
  exports.contentscript.default(actions);
})();
