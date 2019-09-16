import getOrderDetail from '../../../components/api/ordered/getOrderDetail';

export function fetchSuccessGetOrderDetail(getOrderDetail) {
  return {
    type: 'SUCCESS_FETCH_DATA_ORDERDETAIL',
    getOrderDetail,
  };
}

export function fetchErrorGetOrderDetail() {
  return {type: 'FETCH_ERROR_DATA_ORDERDETAIL'};
}

export function fetchDataGetOrderDetail(idOrderDetail) {
  return dispatch => {
    getOrderDetail(idOrderDetail)
      .then(list => dispatch(fetchSuccessGetOrderDetail(list)))
      .catch(err => console.log(err));
  };
}
