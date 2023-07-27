import axios from "axios";
import {useParams  } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Deatil({p}) {

  const [character, setCharacter] = useState({})
  const {id} = useParams()

    useEffect(() => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);

  return (
    
    (
      <div className="detail">
        <div className="text">
          <h3>Id: {id}</h3>
          <h1>{character.name}</h1>
          <h2>Status: {character.status}</h2>
          <p>Specie: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin?.name}</p>
        </div>
        <div className="img">
          <img src={character.image} alt={character.name}></img>
        </div>
      </div>
    )
  );
}
  
