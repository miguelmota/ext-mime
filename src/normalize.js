function normalize(data) {
  const lines = data.split('\n');

  return lines
  .filter(x => !!x)
  .reduce((table, line) => {
    const [ext, mime] = line.split(/\s+/);

    if (!table[ext]) {
      table[ext] = [];
    }

    if (table[ext].indexOf(ext) === -1) {
      table[ext].unshift(mime);
    }

    return table;
  }, {});
}

module.exports = normalize;
