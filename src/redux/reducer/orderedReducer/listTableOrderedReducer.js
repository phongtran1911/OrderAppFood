const defaultListTableOrdered = {
  listTableOrdered: null,
  isLoading: false,
  error: false,
};

const listTableOrderedReducer = (state = defaultListTableOrdered, action) => {
  switch (action.type) {
    case 'START_FETCH_DATA_TABLEORDERED':
      return {
        listTableOrdered: null,
        error: false,
        isLoading: true,
        type: action.type,
      };
    case 'SUCCESS_FETCH_DATA_TABLEORDERED':
      return {
        listTableOrdered: action.listTableOrdered,
        isLoading: false,
        error: false,
        type: action.type,
      };
    case 'FETCH_ERROR_DATA_TABLEORDERED':
      return {
        listTableOrdered: null,
        isLoading: false,
        error: true,
        type: action.type,
      };
    default:
      return state;
  }
};

export default listTableOrderedReducer;
