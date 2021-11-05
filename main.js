const express = require('express');
const app = express();

app.get('/api/directors', (req, res) => {
  res.json({
    directors: [
      {
        id: 001,
        name: 'MichiRoboerto',
      },
      {
        id: 002,
        name: 'MichiAlicia',
      },
    ],
  });
});

app.listen(8080, () => {
  console.log('backend funcionando en localhost:8080');
});
