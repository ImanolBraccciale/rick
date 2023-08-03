const URL= "http//"
const axios = require("axios")
const getCharById= (req,res) => {
  
  
  const getCharById = async (res,req) => {
    
    try{
      const {id} = req.params;
      const {data} = await axios(`${URL}/${id}`)
      
      if(!data.name) throw new Error(`ID: ${id} not found`)
       if (data.name) {
         const character = {
          id:data.id,
          status:data.status,
          name:data.name,
          species:data.species,
          origin:data.origin,
          image:data.image,
          gender:data.gender
        }
        return res.status(200).json(character)
  }
} catch( error) {
  return error.message.includes('ID')
  ? res.status(404).send( error.message)
   :res.status(500).send(error.response.data.error)}
    }

}

module.exports = {
  getCharById
}