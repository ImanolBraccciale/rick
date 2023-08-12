const login =require("../controllers/login")
const {getCharById} =require("../controllers/getCharById")
const deleteFav= require("../controllers/deleteFav")
const postFav= require("../controllers/postFav")
const postUser= require("../controllers/postUser")


const router = require("express").Router()

router.get("/character/:id", (req,res) => {
getCharById(req,res)
})

router.get("/login",login)

router.post("/register", 
postUser
)

router.post("/fav",postFav)

router.delete("/fav/:id", deleteFav)

module.exports = router;