import getDrink from '../../../components/api/order/getDrink';

export function startFetchDataDrink() {
  return {type: 'START_FETCH_DATA_DRINK'};
}

export function fetchSuccessDrink(listDrink) {
  return {
    type: 'SUCCESS_FETCH_DATA_DRINK',
    listDrink,
  };
}

export function fetchErrorDrink() {
  return {type: 'FETCH_ERROR_DATA_DRINK'};
}

export function fetchData_Drink() {
  return dispatch => {
    dispatch(startFetchDataDrink());
    getDrink()
      .then(list => dispatch(fetchSuccessDrink(list)))
      .catch(() => dispatch(fetchErrorDrink()));
  };
}
