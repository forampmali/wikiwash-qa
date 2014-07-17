var path = require('path');
var root = path.join(__dirname, '..', 'public/views')

var events = require('./events');

module.exports = function(app, io) {

  app.get('/api/pages/:id', function(req, res) {
    users.index(req, res)
  });
  
  app.all('/', function (req, res) {
    res.sendfile('landing.html', { root: root })
  })
  
  app.all('/:page', function (req, res) {
    events(io, req.params.id);
    res.sendfile('index.html', { root: root })
  })
  
}

