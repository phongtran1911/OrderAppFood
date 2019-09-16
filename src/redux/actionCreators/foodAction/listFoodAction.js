import getFood from '../../../components/api/foods/getFood';

export function startFetchData() {
  return {type: 'START_FETCH_DATA_FOOD'};
}

export function fetchSuccess(listFood) {
  return {
    type: 'SUCCESS_FETCH_DATA_FOOD',
    listFood,
  };
}

export function fetchError() {
  return {type: 'FETCH_ERROR_DATA_FOOD'};
}

export function fetchData() {
  return dispatch => {
    dispatch(startFetchData());
    getFood()
      .then(list => dispatch(fetchSuccess(list)))
      .catch(() => dispatch(fetchError()));
  };
}
