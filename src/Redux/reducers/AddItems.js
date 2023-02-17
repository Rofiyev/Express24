import { ADD_NEW_ITEM, NEW_ROW } from "../Types";

const initialState = {
  item: [
    {
      image:"",
      food: "",
      commet: "",
      price: '',
      kategoriya: "",
    },
  ],
  title: [{ title: "" }],
};

const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return { ...state, item: [...state.item, action.payload] };
    case NEW_ROW:
      return { ...state, title: [...state.title, { title: action.payload }] };
    default:
      return state;
  }
};

export default ItemsReducer;