// Favorites.js
// Favorites.js

import React from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Cards/Cards";
import { filterCard, orderCards } from "../../redux/actions";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCard(event.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>

      {myFavorites.length === 0 ? (
        <h3>Empty favorites list! </h3>
      ) : (
        <Card characters={myFavorites} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites // Cambiar a state.myFavorites en lugar de state.allCharactersFav
  };
};

export default connect(mapStateToProps)(Favorites);
