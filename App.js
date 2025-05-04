const morgan = require('morgan');
const express = require('express');
const app = express();

const PORT = 8081;

// Middleware
app.use(morgan('tiny'));

app.get('/', (request, response) => {
  return response.send('Hello, World from Express.js :D');
});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});

