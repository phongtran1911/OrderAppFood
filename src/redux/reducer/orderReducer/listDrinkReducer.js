const defaultListDrink = {
  listDrink: null,
  isLoading: false,
  error: false,
};

const listDrinkReducer = (state = defaultListDrink, action) => {
  switch (action.type) {
    case 'START_FETCH_DATA_DRINK':
      return {
        listDrink: null,
        error: false,
        isLoading: true,
        type: action.type,
      };
    case 'SUCCESS_FETCH_DATA_DRINK':
      return {
        listDrink: action.listDrink,
        isLoading: false,
        error: false,
        type: action.type,
      };
    case 'FETCH_ERROR_DATA_DRINK':
      return {
        listDrink: null,
        isLoading: false,
        error: true,
        type: action.type,
      };
    default:
      return state;
  }
};

export default listDrinkReducer;
