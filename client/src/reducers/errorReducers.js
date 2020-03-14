import { GET_ERRORS } from "../actions/types";
const initialState = {};

//Редьюсеры пустые функции, которые принимают текущий стейт и действие(эктион), действие строка которая определяет какие изменения внести в стейт, функция редьюсер возвращает новый стейт.
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}