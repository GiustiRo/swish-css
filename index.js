const fs = require('fs');
const SwishCSS = fs.readFileSync('./scss/index.scss', 'utf8');

module.exports = SwishCSS;