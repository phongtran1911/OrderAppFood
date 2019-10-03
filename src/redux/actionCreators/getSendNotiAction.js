import {fetchData} from '../actionCreators/orderedAction/listOrderedAction';
import getSendNoti from '../../components/api/getSendNoti';

export function fetchDataSendNoti(tokenDevice) {
  return dispatch => {
    getSendNoti(tokenDevice)
      .then(result => {
        dispatch(fetchData());
        return result;
      })
      .catch(err => console.log(err));
  };
}
