import getListOrdered from '../../../components/api/ordered/getListOrdered';

export function startFetchData() {
  return {type: 'START_FETCH_DATA_ORDERED'};
}

export function fetchSuccess(listOrdered) {
  return {
    type: 'SUCCESS_FETCH_DATA_ORDERED',
    listOrdered,
  };
}

export function fetchError() {
  return {type: 'FETCH_ERROR_DATA_ORDERED'};
}

export function fetchData(idOrder) {
  return dispatch => {
    dispatch(startFetchData());
    getListOrdered(idOrder)
      .then(list => dispatch(fetchSuccess(list)))
      .catch(() => dispatch(fetchError()));
  };
}
