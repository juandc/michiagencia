// https://platzi.com/clases/1642-javascript-profesional/22173-generators/
function* idMaker() {
  let id = 4;

  while (true) {
    yield id;
    id += 1;
  }
}

const actualId = idMaker();

function newId() {
  return actualId.next().value;
}

module.exports = newId;
