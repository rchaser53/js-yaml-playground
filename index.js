const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

try {
  var doc = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, './test.yml'), 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}
