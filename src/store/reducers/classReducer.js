const initialState = {
  classes: [],
  types: [],
  loading: true,
};

export const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CLASS":
      return {
        ...state,
        classes: action.payload.classes,
        loading: false,
      };
    case "FETCH_TYPES":
      return {
        ...state,
        types: action.payload.types,
      };
    case "CREATE_CLASS":
      let newClass = { ...action.payload.newClass, users: [] };
      return {
        ...state,
        classes: [...state.classes, newClass],
      };

    case "UPDATE_CLASS":
      const updatedClass = action.payload.updatedClass;
      return {
        ...state,
        classes: state.classes.map((_class) =>
          _class.id === updatedClass.id ? updatedClass : _class
        ),
      };

    default:
      return state;
  }
};
export default classReducer;
