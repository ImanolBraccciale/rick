const http = require('http')
const getCharById=require('./controllers/getCharById')
const characters = require("../utils/data")

http.createServer((req,res) => {
res.setHeader("Access-Control-Allow-Origin", "*")
if (req.url.includes("/rickandmorty/character")) {

  const id= req.url.split("/").at(-1)
  //el filter devuelve un array d e objeto, mientras que el find  devuelve el primer objeto que encuentra
  const characterFind = characters.find( (character) => character.id === Number(id))

  res.writeHead (200, {"Contex-type" : "application/json"})
  res.end(JSON.stringify(characterFind))

}
}).listen(3001, console.log(("puerto mostrandose")))

 http.createServer((req, res) => {
  if (req.url.includes('/rickandmorty/character')) {
    // Obtener el ID del personaje de la URL (por ejemplo, /rickandmorty/character/1)
    const id = req.url.split('/').pop();

    // Llamar al controlador getCharById pasando res y el id del personaje como argumentos
    getCharById(res, id);
  } else {
    // Si la URL no coincide con /rickandmorty/character, enviar una respuesta 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});
