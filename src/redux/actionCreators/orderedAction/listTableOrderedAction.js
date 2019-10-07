import getListTableOrdered from '../../../components/api/ordered/getListTableOrdered';

export function startFetchData() {
  return {type: 'START_FETCH_DATA_TABLEORDERED'};
}

export function fetchSuccess(listTableOrdered) {
  return {
    type: 'SUCCESS_FETCH_DATA_TABLEORDERED',
    listTableOrdered,
  };
}

export function fetchError() {
  return {type: 'FETCH_ERROR_DATA_TABLEORDERED'};
}

export function fetchDataTableOrdered() {
  return dispatch => {
    dispatch(startFetchData());
    getListTableOrdered()
      .then(list => dispatch(fetchSuccess(list)))
      .catch(() => dispatch(fetchError()));
  };
}
