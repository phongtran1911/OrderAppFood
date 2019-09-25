export function fetchSuccess(listOrderID, listOrderName) {
  return {
    type: 'SUCCESS_FETCH_DATA_ORDER',
    listOrderID,
    listOrderName,
  };
}

export function fetchData_Table(listOrderID, listOrderName) {
  return dispatch => {
    dispatch(fetchSuccess(listOrderID, listOrderName));
  };
}
