const fs = require('fs');

var data = '';

var readStream = fs.createReadStream(__dirname + '/dadosUsina.json', 'utf8');

readStream.on('data', function (chunk) {
  data += chunk;
}).on('end', function () {
  console.log(data);
});