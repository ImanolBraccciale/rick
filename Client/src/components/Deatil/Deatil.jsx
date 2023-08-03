import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./detail.css"

export default function Deatil() {

  const [character, setCharacter] = useState({})
  const { id } = useParams()

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
      <div className='Container_'>

        <div className="containerDetail">
          <div className="datos-persona">
            <div className="papel-pautado">
              <h1 className="label">{character.name}</h1>
              <p>Id: {id}</p>
              <p>Status: {character.status}</p>
              <p>Specie: {character.species}</p>
              <p>Gender: {character.gender}</p>
              <p>Origin: {character.origin?.name}</p>
            </div>
            <div className="avatarDetail">
              <img src={character.image} alt={character.name}></img>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

