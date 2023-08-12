const {Favorite} = require("../DB_connection")

const deleteFav = async (req,res) => {

  try{
   const {id} = req.params;

    const favId = await Favorite.findByPk(id);

    if(!favId){
      return res.status(404).send({error:"no encontro el favi"})
    }
    favId.destroy()
    const list = await Favorite.findAll()
    return      res.status(200).json(list)
    
} catch (error) {
    res.status(500).send({error:error.message})
}
}

module.exports = deleteFav
