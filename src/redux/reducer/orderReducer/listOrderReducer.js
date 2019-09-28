const defaultListOrder = {
  listOrderID: undefined,
  listOrderName: undefined,
};

const listOrderReducer = (state = defaultListOrder, action) => {
  switch (action.type) {
    case 'SUCCESS_FETCH_DATA_ORDER':
      return {
        listOrderID: action.listOrderID,
        listOrderName: action.listOrderName,
        type: action.type,
      };
    default:
      return state;
  }
};

export default listOrderReducer;
