import getBowlType from '../../../components/api/order/getBowlType';

export function startFetchDataBowlType() {
  return {type: 'START_FETCH_DATA_BOWLTYPE'};
}

export function fetchSuccessBowlType(listBowlType) {
  return {
    type: 'SUCCESS_FETCH_DATA_BOWLTYPE',
    listBowlType,
  };
}

export function fetchErrorBowlType() {
  return {type: 'FETCH_ERROR_DATA_BOWLTYPE'};
}

export function fetchData_BowlType() {
  return dispatch => {
    dispatch(startFetchDataBowlType());
    getBowlType()
      .then(list => dispatch(fetchSuccessBowlType(list)))
      .catch(() => dispatch(fetchErrorBowlType()));
  };
}
