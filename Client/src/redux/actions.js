// actions.js
import axios from "axios"
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';

export const addFav = (character) => {
 const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
    try {
         const {data} = await   axios.post(endpoint, character) 

          return dispatch({
            type: ADD_FAV,
            payload: data,
         });

    } catch (error) {
      
    }    
   };
};

export const removeFav = (id) => {
 const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
    try {
      const {data} = await axios.delete(endpoint) 
     
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
      
    } catch (error) {
      console.log(error.message);
    }
      }
   };


export const filterCard = (gender) => {
  return {
    type: FILTER,
    payload: gender
  };
};

export const orderCards = (orderType) => {
  return {
    type: ORDER,
    payload: orderType
  };
};
