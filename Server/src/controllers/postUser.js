const {User} = require("../DB_connection")

 const postUser = async (req,res) => {
   
   try {
     const {email,password} = req.body;

    if(!email || !password){
      return   res.status(400).send("Faltan datos")
    }
    //user es un objeto y create es un booleano
    const [user,create] = await User.findOrCreate({
      where:{email:email},
    defaults:{
      email,password
    }
    })

    create? console.log("usuario creado", user) : console.log("usuario encontrado",user);

    res.status(200),json(user)
  } catch (error) {
    res.status(500),json({error:error.message})
  }
  
  module.exports= postUser
 }
