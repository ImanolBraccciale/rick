 const express= require("express")
 const server = express()
 const PORT =3001
const { conn } = require('./DB_connection');
 
server.use(express.json()) //la info que llega en json lo pasa a js

 conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    })
})
 