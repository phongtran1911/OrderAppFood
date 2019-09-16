const defaultOrderDetail = {
  getOrderDetail: null,
};

const getOrderDetailReducer = (state = defaultOrderDetail, action) => {
  switch (action.type) {
    case 'START_FETCH_DATA_ORDERDETAIL':
      return {getOrderDetail: null, type: action.type};
    case 'SUCCESS_FETCH_DATA_ORDERDETAIL':
      return {getOrderDetail: action.getOrderDetail, type: action.type};
    case 'FETCH_ERROR_DATA_ORDERDETAIL':
      return {getOrderDetail: null, type: action.type};
    default:
      return state;
  }
};

export default getOrderDetailReducer;
