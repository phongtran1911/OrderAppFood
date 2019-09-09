const defaultListOrdered = {
  listOrdered: null,
  isLoading: false,
  error: false,
};

const listOrderedReducer = (state = defaultListOrdered, action) => {
  switch (action.type) {
    case 'START_FETCH_DATA_ORDERED':
      return {
        listOrdered: null,
        error: false,
        isLoading: true,
        type: action.type,
      };
    case 'SUCCESS_FETCH_DATA_ORDERED':
      return {
        listOrdered: action.listOrdered,
        isLoading: false,
        error: false,
        type: action.type,
      };
    case 'FETCH_ERROR_DATA_ORDERED':
      return {
        listOrdered: null,
        isLoading: false,
        error: true,
        type: action.type,
      };
    default:
      return state;
  }
};

export default listOrderedReducer;
