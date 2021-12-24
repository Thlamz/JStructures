const fs = require('fs');
const Path = require('path');

if (fs.existsSync(Path.join(__dirname, '../dist'))) {
  fs.rmSync(Path.join(__dirname, '../dist'), { recursive: true });
}
fs.mkdirSync(Path.join(__dirname, '../dist'));
