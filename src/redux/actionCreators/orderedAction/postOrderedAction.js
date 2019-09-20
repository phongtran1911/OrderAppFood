import updateStatusOrdered from '../../../components/api/ordered/postUpdateStatus';
import deleteOrderDetail from '../../../components/api/ordered/postDeleteOrderDetail';
import {fetchData} from '../../../redux/actionCreators/orderedAction/listOrderedAction';

export function fetchDataUpdateStatusOrdered(idOrdered) {
  return dispatch => {
    updateStatusOrdered(idOrdered)
      .then(result => {
        dispatch(fetchData());
        return result;
      })
      .catch(err => console.log(err));
  };
}

export function fetchDataDeleteOrderDetail(idOrder, idOrdered) {
  return dispatch => {
    deleteOrderDetail(idOrder, idOrdered)
      .then(result => {
        dispatch(fetchData());
        return result;
      })
      .catch(err => console.log(err));
  };
}
