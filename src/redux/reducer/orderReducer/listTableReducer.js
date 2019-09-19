const defaultListTable = {
  listTable: null,
  isLoading: false,
  error: false,
};

const listTableReducer = (state = defaultListTable, action) => {
  switch (action.type) {
    case 'START_FETCH_DATA_Table':
      return {
        listTable: null,
        error: false,
        isLoading: true,
        type: action.type,
      };
    case 'SUCCESS_FETCH_DATA_Table':
      return {
        listTable: action.listTable,
        isLoading: false,
        error: false,
        type: action.type,
      };
    case 'FETCH_ERROR_DATA_Table':
      return {
        listTable: null,
        isLoading: false,
        error: true,
        type: action.type,
      };
    default:
      return state;
  }
};

export default listTableReducer;
