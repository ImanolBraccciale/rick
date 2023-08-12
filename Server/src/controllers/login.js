const {User} = require("../DB_connection")

const login = async(req,res) => {
  try {
  const {email,password} = req.query;
 const userFind= await User.findOne({where:{email:email}})

if (!userFind) {
   res.status(404).json("Usuario no encontrado")
}

if(userFind.password !== password){
  res.status(403).json("Contraseña incorrecta")
}else{
  res.status(200).json( {access: true})
}

} catch (error) {
  res.status(500).json({error:error.message})
}
}

module.exports = login;