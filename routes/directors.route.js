const express = require('express');
const directorsRouter = express.Router();
const newId = require('../utils/idMaker');

const directors = [
  {
    id: 001,
    name: 'MichiRoboerto',
  },
  {
    id: 002,
    name: 'MichiAlicia',
  },
  {
    id: 003,
    name: 'MichiRogoberto',
  },
];

directorsRouter.get('/api/directors', (req, res) => {
  res.json({
    directors,
  });
});

directorsRouter.get('/api/directors/:id', (req, res) => {
  const id = req.params.id;
  const director = directors.find(director => director.id == id);

  if (director) {
    res.json(director);
  } else {
    res.status(404).json({
      status: 404,
      message: "Lo sentimos, no existe ninguna michi directora con el id " + id,
    });
  }
});

directorsRouter.post('/api/directors', (req, res) => {
  console.log(req.body);

  const { name } = req.body;
  let id = newId();

  const newDirector = { id, name };

  directors.push(newDirector);

  res.json({
    status: 200,
    director: newDirector,
  });
});

module.exports = directorsRouter;
