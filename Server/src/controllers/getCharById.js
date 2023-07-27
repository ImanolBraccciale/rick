const axios = require('axios');

const getCharById = (res,id) =>{
  const url= `https://rickandmortyapi.com/api/character/${id}`
  axios.get(url)
  .then((response) =>{
    const characterData = {id, name, gender, species, origin: origin.name, image, status}
    res.status(200).json(characterData);
  })
  .catch((error) => {
     res.status(500).contentType('text/plain').send(error.message);
  })
}

module.exports = getCharById;