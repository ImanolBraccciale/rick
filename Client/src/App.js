import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import {  useState, useEffect} from "react";
import  axios  from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Deatil/Deatil";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites"
import "./App.css"

function App() {

  const [characters, setCharacters]= useState([])

  const [access, setAccess] = useState(false)
  
  const URL = 'http://localhost:3001/rickandmorty/login/';
 
  const location = useLocation()
  const navigate = useNavigate();

 const  login = async (userData)  =>{
  try {
    const { email, password } = userData;
   const {data} = await  axios(URL + `?email=${email}&password=${password}`) 

       const { access } = data;
       setAccess(access);
       access && navigate('/home');
    
  } catch (error) {
    console.log(error.message);
  }
   
}
    useEffect(() => {
     !access && navigate('/');
     } , [access, navigate]);

  const  onSearch= async (id)=> {
    try {
      
      const {data} = await axios(`https://rickandmortyapi.com/api/character/${id}`)
      
      const characterFilter = characters.some(char=> char.id === data.id)

      if (characterFilter) throw Error("ya se encuentra este personaje")

        if (data.name) {
          setCharacters( (oldChars) => [...oldChars,data])
        }
    } catch (error) {
      alert("no hay personajes con ese id")
    }
      }
 const onClose = (id) => {
  setCharacters((oldChars) => oldChars.filter((character) => character.id !== Number(id)));
};


  return (

    <div className="App">
      {
        location.pathname !== '/' &&<Navbar onSearch={onSearch}/>

      }
      
        <Routes>
          <Route path="/" element={<Form login={login}/>} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/> } />
           <Route  path='/about' element={<About/>}/>
           <Route  path='/favorites' element={<Favorites/>}/>
           <Route  path='/detail/:id' element={<Detail/>}/>
    

         </Routes>


      
    </div> 
  );
}

export default App;
