const defaultPostUpdateOrderDetail = {
  isAddingUpdateOrderDetail: false,
  dataUpdateOrderDetail: null,
  errorUpdateOrderDetail: false,
};

const postUpdateOrderDetailReducer = (
  state = defaultPostUpdateOrderDetail,
  action,
) => {
  switch (action.type) {
    case 'START_POST_DATA_UPDATEORDERDETAIL':
      return {
        isAddingUpdateOrderDetail: true,
        dataUpdateOrderDetail: null,
        errorUpdateOrderDetail: false,
      };
    case 'SUCCESS_POST_DATA_UPDATEORDERDETAIL':
      return {
        isAddingUpdateOrderDetail: false,
        dataUpdateOrderDetail: action.dataUpdateOrderDetail,
        errorUpdateOrderDetail: false,
      };
    case 'ERROR_POST_DATA_UPDATEORDERDETAIL':
      return {
        isAddingUpdateOrderDetail: false,
        dataUpdateOrderDetail: null,
        errorUpdateOrderDetail: true,
      };
    default:
      return state;
  }
};

export default postUpdateOrderDetailReducer;
