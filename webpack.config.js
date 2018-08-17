const path = require('path');

module.exports = {
  entry: './src/player.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'eplayer.dist.js'
  }
};
   
