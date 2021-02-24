const initialState = {
  gyms: [],
};

export const gymReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GYM":
      return {
        ...state,
        gyms: action.payload.gyms,
      };
    case "CREATE_GYM":
      let newGym = action.payload.newGym;
      return {
        ...state,
        gyms: [...state.gyms, newGym],
      };
    default:
      return state;
  }
};
export default gymReducer;
