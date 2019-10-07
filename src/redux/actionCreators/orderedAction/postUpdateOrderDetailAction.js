import postUpdateOrderDetail from '../../../components/api/ordered/postUpdateOrderDetail';
import updateStatusMainOrder from '../../../components/api/ordered/postUpdateStatusMainOrder';
import {fetchDataTableOrdered} from '../../actionCreators/orderedAction/listTableOrderedAction';
export function startPostUpdateOrderDetail() {
  return {type: 'START_POST_DATA_UPDATEORDERDETAIL'};
}

export function fetchSuccessPostUpdateOrderDetail(dataUpdateOrderDetail) {
  return {
    type: 'SUCCESS_POST_DATA_UPDATEORDERDETAIL',
    dataUpdateOrderDetail,
  };
}

export function fetchErrorPostUpdateOrderDetail() {
  return {type: 'ERROR_POST_DATA_UPDATEORDERDETAIL'};
}

export function fetchDataPostUpdateOrderDetail(data, idOrderDetail) {
  return dispatch => {
    postUpdateOrderDetail(data, idOrderDetail)
      .then(list => {
        dispatch(fetchSuccessPostUpdateOrderDetail(list));
        alert(list);
        return list;
      })
      .catch(err => console.log(err));
  };
}

export function fetchDataUpdateStatusMainOrder(idOrder) {
  return dispatch => {
    updateStatusMainOrder(idOrder)
      .then(result => {
        if (result === 'alive') {
          dispatch(fetchErrorPostUpdateOrderDetail());
          return;
        }
        dispatch(fetchDataTableOrdered());
        return result;
      })
      .catch(err => console.log(err));
  };
}
