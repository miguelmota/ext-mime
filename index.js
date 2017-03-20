const exts = require('./src/data/ext_mime.json')

function extMime(ext) {
  if (typeof ext !== 'string') {
    try {
      ext = ext.toString();
    } catch(error) {
      return [];
    }
  }

  // remove first period
  ext = ext.replace(/^\./gi, '');

  return exts[ext] || [];
}

module.exports = extMime;