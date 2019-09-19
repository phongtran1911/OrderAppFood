import getOrderDetail from '../../../components/api/ordered/getOrderDetail';
import getExceptOrderDetail from '../../../components/api/ordered/getExceptOrderDetail';
import getTypeOrderDetail from '../../../components/api/ordered/getTypeOrderDetail';

export function fetchSuccessGetOrderDetail(getOrderDetail) {
  return {
    type: 'SUCCESS_FETCH_DATA_ORDERDETAIL',
    getOrderDetail,
  };
}
export function fetchSuccessGetExceptOrderDetail(getExceptOrderDetail) {
  return {
    type: 'SUCCESS_FETCH_DATA_EXCEPTORDERDETAIL',
    getExceptOrderDetail,
  };
}
export function fetchSuccessGetTypeOrderDetail(getTypeOrderDetail) {
  return {
    type: 'SUCCESS_FETCH_DATA_TYPEORDERDETAIL',
    getTypeOrderDetail,
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

export function fetchDateGetExceptOrderDetail(idOrderDetail) {
  return dispatch => {
    getExceptOrderDetail(idOrderDetail)
      .then(list => dispatch(fetchSuccessGetExceptOrderDetail(list)))
      .catch(err => console.log(err));
  };
}

export function fetchDateGetTypeOrderDetail(idOrderDetail) {
  return dispatch => {
    getTypeOrderDetail(idOrderDetail)
      .then(list => dispatch(fetchSuccessGetTypeOrderDetail(list)))
      .catch(err => console.log(err));
  };
}
