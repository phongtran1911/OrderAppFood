import getTable from '../../../components/api/order/getTable';

export function startFetchData() {
    return { type: 'START_FETCH_DATA_Table' };
}

export function fetchSuccess(listTable) {
    return { 
        type: 'SUCCESS_FETCH_DATA_Table',
        listTable
    };
}

export function fetchError() {
    return { type: 'FETCH_ERROR_DATA_Table' };
}

export function fetchData_Table() {
    return dispatch => {
        dispatch(startFetchData());        
        getTable()
        .then(list => dispatch(fetchSuccess(list)))
        .catch(() => dispatch(fetchError()));
    };
}