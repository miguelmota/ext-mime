# ext-mime

> mime types for filename extension

## Install

```bash
npm install ext-mime
```

## Usage

```javascript
const extMime = require('ext-mime');

console.log(extMime('txt')); // ['text/plain']
console.log(extMime('html')); // ['text/html']
console.log(extMime('jpeg')); // ['image/jpeg']
console.log(extMime('jpg')); // ['image/jpeg']
console.log(extMime('js')); // ['application/javascript']
console.log(extMime('xml')); // ['application/xml']
console.log(extMime('xls')); // ['application/vnd.ms-excel']
console.log(extMime('wmz')); // ['application/x-msmetafile', 'application/x-ms-wmz']
console.log(extMime('nonexistent')); // []
```

## Test

```bash
npm test
```

## Resources

Use [`mime-ext`](https://github.com/miguelmota/mime-ext) for finding filename extensions for mime type.

# License

MIT
