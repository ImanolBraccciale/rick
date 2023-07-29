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

  const EMAIL = 'imanol@gmail.com';
  const PASSWORD = '1234';

  const location = useLocation()
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
       setAccess(true)
       navigate("/home")
    }
  }
    useEffect(() => {
     !access && navigate('/');
     } , [access, navigate]);

  const  onSearch= (id)=> {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      
      const characterFiltered = characters.find(character => character.id === Number(id) )
          if (characterFiltered) {
            console.log( "Ya esta este personaje")
          }else if (data.name) { 
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('¡No hay personajes con este ID!');
          }
       });
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
