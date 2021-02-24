const initialState = {
  classes: [],
  types: [],
};

export const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CLASS":
      return {
        ...state,
        classes: action.payload.classes,
      };
    case "FETCH_TYPES":
      return {
        ...state,
        types: action.payload.types,
      };
    case "CREATE_CLASS":
      let newClass = action.payload.newClass;
      return {
        ...state,
        classes: [...state.classes, newClass],
      };
    default:
      return state;
  }
};
export default classReducer;
