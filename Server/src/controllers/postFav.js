const {Favorite} = require("../DB_connection")

const postFav = async(req,res) => {
  
  try {
  const {name, origin, status, image, species ,gender,id} = req.body;

  if(!name || !origin ||  !status ||  !image || !species || !gender || !id){
    res.status(400).json("Faltan datos")
  }

   const [favorite,create] = await Favorite.findOrCreate({
      where:{id:id},
    defaults:{
     name, origin, status, image, species ,gender,id
    }
    })
    create? console.log("usuario creado", favorite) : console.log("usuario encontrado",favorite);

    
    if(!create){
      return res.status(400).send({error:"sos un boludo, no le des asi"})
    }else {
    const list = await Favorite.findAll()
    return res.status(200).json(list)
  }
} catch (error) {
   return res.status(500).send({error:error.message})
}
}




module.exports = postFav