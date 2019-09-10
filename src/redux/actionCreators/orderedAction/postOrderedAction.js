import updateStatusOrdered from '../../../components/api/ordered/postUpdateStatus';
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
