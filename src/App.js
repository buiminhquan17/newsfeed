const mysql = require('mysql2'); // for MySQL Database.
const morgan = require('morgan'); // for HTTP logger.
const express = require('express');
const path = require('node:path'); // for path module.
const { engine } = require('express-handlebars');

const app = express();

const PORT = 8081;

// HTTP logger.
app.use(morgan('tiny'));

// Template engine. (use Handlebars)
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware.
app.use(express.static(path.join(__dirname, 'public')));

// Routes.
app.get('/', (req, res) => {
  return res.render('home');
});

app.get('/news', (req, res) => {
  return res.render('news');
});

// Listen to port 8081.
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
