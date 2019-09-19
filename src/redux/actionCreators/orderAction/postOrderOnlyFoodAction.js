import postOrderOnlyFood from '../../../components/api/order/postOrderOnlyFood';

export function startPostOrderOnlyFood() {
  return {type: 'START_POST_DATA_ORDERONLYFOOD'};
}

export function fetchSuccessPostOrderOnlyFood(dataOrderOnlyFood) {
  return {
    type: 'SUCCESS_POST_DATA_ORDERONLYFOOD',
    dataOrderOnlyFood,
  };
}

export function fetchErrorPostOrderOnlyFood() {
  return {type: 'ERROR_POST_DATA_ORDERONLYFOOD'};
}

export function fetchDataPostOrderOnlyFood(data, user_id) {
  return dispatch => {
    postOrderOnlyFood(data, user_id)
      .then(list => {
        dispatch(fetchSuccessPostOrderOnlyFood(list));
        alert(list);
        return list;
      })
      .catch(err => console.log(err));
  };
}
