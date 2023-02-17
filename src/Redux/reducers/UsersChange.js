import { DELETE_USERS, EDIT_USERS } from "../Types";

const initialState = {
  data: [
    {
      name: "Abdulaziz Ochilov",
      phone: "+998 97 888 10 27",
      job: "admin",
    },
    {
      name: "Ergashev Islom",
      phone: "+998 97 888 12 35",
      job: "yetkazuvchi",
    },
    {
      name: "Samidullayev Bahodir",
      phone: "+998 93 234 10 23",
      job: "foydalanuvchi",
    },
    {
      name: "To`ramurodov Shoislom",
      phone: "+998 90 375 67 15",
      job: "foydalanuvchi",
    },
  ],
};

const UsersReducer = (state = initialState, action) => {
  let data;
  switch (action.type) {
    case DELETE_USERS:
      data = [...state.data];
      data.splice(action.payload, 1);
      return { ...state, data };

    case EDIT_USERS:
      data = [...state.data];
      data.splice(action.payload.index, 1, action.payload.value);
      return { ...state, data };

    default:
      return state;
  }
};

export default UsersReducer;
