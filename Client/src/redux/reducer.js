// reducer.js

import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';

const initialState = {
  myFavorites: [],
  allCharactersFav: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      if (!state.myFavorites.some((fav) => fav.id === payload.id)) {
        return {
          ...state,
          myFavorites:   payload,
          allCharactersFav:  payload
        };
      }
      return state;

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
       allCharactersFav:payload
      };

    case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: payload === 'allCharacters' ? [...state.allCharactersFav] : allCharactersFiltered
      };

    case ORDER:
      const allCharactersCopy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites: payload === 'A' 
        ? allCharactersCopy.sort((a, b) => a.id - b.id)
         : allCharactersCopy.sort((a, b) => b.id - a.id)
      };

    default:
      return state;
  }
};

export default reducer;
