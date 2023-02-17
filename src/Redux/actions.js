import { dispatch } from "./store";
import { ADD_NEW_ITEM, DELETE_USERS, EDIT_USERS, NEW_ROW } from "./Types";

export const getNewKategoriy = (value) => {
  dispatch({ type: NEW_ROW, payload: value });
};

export const getNewItem = (value) => {
  dispatch({ type: ADD_NEW_ITEM, payload: value });
};

export const deleteUser = (index) => {
  dispatch({ type: DELETE_USERS, payload: index });
};

export const changeUser = (value, index) => {
  dispatch({ type: EDIT_USERS, payload: {value, index} });
};
