const express = require('express');
const app = express();
const server = require('http').Server(app);
const pug = require('pug');
const path = require('path');
const io = require('socket.io')(server);


// view engine setup
app.set('view engine', 'pug');
app.set('views', './views');

// static assets
app.use('/static', express.static(path.join(__dirname, 'public')));

//socket io configuration
io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', () => console.log('user disconnected'));
  socket.on('message', msg => {
    io.emit('message', msg);
    console.log(`received message from ${msg.author}: "${msg.text}"`);
  });
});

// routing and server
app.get('/', (req, res) => res.render('index', { title: 'React Chat' }));

server.listen(3000, () => console.log('Chat app listening on port 3000!'));
