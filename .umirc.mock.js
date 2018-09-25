import { delay } from 'roadhog-api-doc';

const mock = {};
require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
  Object.assign(mock, require('./mock/' + file))
});

// export default delay({...mock}, 1000);

console.log('mock ',mock);

module.exports = mock;
