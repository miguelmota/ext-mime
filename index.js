const exts = require('./src/data/ext_mime.json')

function extMime(ext) {
  if (typeof ext !== 'string') {
    try {
      ext = ext.toString();
    } catch(error) {
      return [];
    }
  }

  return exts[ext] || [];
}

module.exports = extMime;