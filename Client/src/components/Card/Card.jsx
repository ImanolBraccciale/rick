
import React, { useState, useEffect } from "react";
import "./Card.css";
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
    <div className='square' >
      <i ></i>
      <i></i>
      <i></i>

      <button className="heart" onClick={handleFavorite}>{isFav ? "❤️" : "🧡"}</button>
      {!pathname.includes("/favorites") && (
        <button className="close" onClick={() => onClose(id)}>❌</button>
      )}

      <Link to={`/detail/${id}`}>
        <h3 > {name} </h3>
      </Link>
      {/* Resto de la información del personaje */}
      <img src={image} alt="imagen" />
    </div>
  )

}
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