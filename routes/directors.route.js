const express = require('express');
const directorsRouter = express.Router();

const directors = [
  {
    id: 001,
    name: 'MichiRoboerto',
  },
  {
    id: 002,
    name: 'MichiAlicia',
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

module.exports = directorsRouter;
