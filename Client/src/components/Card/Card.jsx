// Card.js

import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {
  const [isFav, setIsFav] = useState(false);
  const { pathname } = useLocation();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [id, myFavorites]);

  return (
    <div className={styles.cartaContainer}>
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🧡"}</button>
      {!pathname.includes("/favorites") && (
        <button onClick={() => onClose(id)} className={styles.btn}>
          X
        </button>
      )}
      <Link to={`/detail/${id}`}>
        <h3>Nombre: {name} </h3>
      </Link>
      <h3>Estatus: {status} </h3>
      <h3>Especie: {species} </h3>
      <h3>Género: {gender} </h3>
      <h3>Localización: {origin} </h3>
      <img src={image} alt="imagen" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.allCharactersFav
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
