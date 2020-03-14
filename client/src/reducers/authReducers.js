import {
    SET_CURRENT_USER,
    USER_LOADING
  } from "../actions/types";
  

const isEmpty = require("is-empty");


//начальный стейт
const initialState = {

    isAuthenticated: false,
    user: {},
    loading: false

  };

//Редьюсеры пустые функции, которые принимают текущий стейт и действие(эктион), действие строка которая определяет какие изменения внести в стейт, функция редьюсер возвращает новый стейт.

export default function(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        };
      case USER_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }