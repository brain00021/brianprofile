const fs = require('fs')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/scss/all.scss', 'utf-8')
      }
    }
  },
}