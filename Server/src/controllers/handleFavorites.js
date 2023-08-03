let myFavorites = []
// encargado de postear los favoritos y verificar su repeticion
const postFav = (req,res) => {

  try {
    const character= req.body //traigo todo el personaje del body
    const characterFound= myFavorites.find(fav => fav.id === character.id) // me fijo si esta repetido

    if (characterFound) throw Error("el personaje ya existe") // si existe lanzo un error para que lo atrape el catch
    // si no se repitio sigue su curso y se pushea
      myFavorites.push(character)

      return res.status(200).json(myFavorites)
  } catch (error) {
    return  res.status(404).send(error.message)
  }
}
//se encarga de borrar los favoritos
const deleteFav = (req,res) => {
  const {id} = req.params
  
  myFavorites = myFavorites.filter((favorite) => favorite.id !== +id)
 
  return res.status(200).json(myFavorites)
}
 
module.exports ={
  postFav,
  deleteFav
}