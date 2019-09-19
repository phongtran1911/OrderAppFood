const defaultOrderDetail = {
  getOrderDetail: null,
  getExceptOrderDetail: null,
  getTypeOrderDetail: null,
};

const getOrderDetailReducer = (state = defaultOrderDetail, action) => {
  switch (action.type) {
    case 'START_FETCH_DATA_ORDERDETAIL':
      return {
        getOrderDetail: null,
        getExceptOrderDetail: null,
        getTypeOrderDetail: null,
        type: action.type,
      };
    case 'SUCCESS_FETCH_DATA_ORDERDETAIL':
      return {
        getOrderDetail: action.getOrderDetail,
        getExceptOrderDetail: null,
        getTypeOrderDetail: null,
        type: action.type,
      };
    case 'SUCCESS_FETCH_DATA_EXCEPTORDERDETAIL':
      return {
        getOrderDetail: null,
        getExceptOrderDetail: action.getExceptOrderDetail,
        getTypeOrderDetail: null,
        type: action.type,
      };
    case 'SUCCESS_FETCH_DATA_TYPEORDERDETAIL':
      return {
        getOrderDetail: null,
        getExceptOrderDetail: null,
        getTypeOrderDetail: action.getTypeOrderDetail,
        type: action.type,
      };
    case 'FETCH_ERROR_DATA_ORDERDETAIL':
      return {
        getOrderDetail: null,
        getExceptOrderDetail: null,
        getTypeOrderDetail: null,
        type: action.type,
      };
    default:
      return state;
  }
};

export default getOrderDetailReducer;
