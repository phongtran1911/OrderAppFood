import {fetchData} from '../actionCreators/orderedAction/listOrderedAction';
import getSendNoti from '../../components/api/getSendNoti';

export function fetchDataSendNoti() {
  return dispatch => {
    getSendNoti()
      .then(result => {
        dispatch(fetchData());
        return result;
      })
      .catch(err => console.log(err));
  };
}
