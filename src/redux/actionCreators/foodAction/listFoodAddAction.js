import getFoodAdd from '../../../components/api/foods/getFoodAdd';

export function fetchSuccessFoodAdd(listFoodAdd) {
    return { 
        type: 'SUCCESS_FETCH_DATA_FOODADD',
        listFoodAdd
    };
}

export function fetchErrorFoodAdd() {
    return { type: 'FETCH_ERROR_DATA_FOODADD' };
}

export function fetchDataFoodAdd() {
    return dispatch => { 
        getFoodAdd()
        .then(list => dispatch(fetchSuccessFoodAdd(list)))
        .catch(() => dispatch(fetchErrorFoodAdd()));
    };
}