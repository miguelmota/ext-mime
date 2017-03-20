const test = require('tape');
const extMime = require('../index');

test('test', (t) => {
  t.plan(13);

  t.deepEqual(extMime(), []);
  t.deepEqual(extMime('asdfowref'), []);
  t.deepEqual(extMime('nonexistent'), []);
  t.deepEqual(extMime({junk: 'asdfowref'}), []);
  t.deepEqual(extMime('.txt'), ['text/plain']);
  t.deepEqual(extMime('txt'), ['text/plain']);
  t.deepEqual(extMime('html'), ['text/html']);
  t.deepEqual(extMime('jpeg'), ['image/jpeg']);
  t.deepEqual(extMime('jpg'), ['image/jpeg']);
  t.deepEqual(extMime('js'), ['application/javascript']);
  t.deepEqual(extMime('xml'), ['application/xml']);
  t.deepEqual(extMime('xls'), ['application/vnd.ms-excel']);
  t.deepEqual(extMime('wmz'), [
    'application/x-msmetafile',
    'application/x-ms-wmz'
  ]);
});
