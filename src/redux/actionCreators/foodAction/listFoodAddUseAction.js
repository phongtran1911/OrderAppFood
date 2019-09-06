import getFoodAddUse from '../../../components/api/foods/getFoodAddUse';

export function fetchSuccessFoodAddUse(listFoodAddUse) {
    return { 
        type: 'SUCCESS_FETCH_DATA_FOODADD_USE',
        listFoodAddUse
    };
}

export function fetchErrorFoodAddUse() {
    return { type: 'FETCH_ERROR_DATA_FOODADD_USE' };
}

export function fetchDataFoodAddUse() {
    return dispatch => { 
        getFoodAddUse()
        .then(list => dispatch(fetchSuccessFoodAddUse(list)))
        .catch(() => dispatch(fetchErrorFoodAddUse()));
    };
}