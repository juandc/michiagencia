const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

const directorsRouter = require('./routes/directors.route.js');
const agentsRouter = require('./routes/agents.route.js');
const frontend = express.static('frontend');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(directorsRouter);
app.use(agentsRouter);
app.use(frontend);

app.listen(port, () => {
  console.log('backend funcionando en localhost:' + port);
});
