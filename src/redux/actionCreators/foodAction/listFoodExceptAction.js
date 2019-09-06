import getFoodExcept from '../../../components/api/foods/getFoodExcept';

export function fetchSuccessFoodExcept(listFoodExcept) {
    return { 
        type: 'SUCCESS_FETCH_DATA_FOODEXCEPT',
        listFoodExcept
    };
}

export function fetchErrorFoodExcept() {
    return { type: 'FETCH_ERROR_DATA_FOOD' };
}

export function fetchDataFoodExcept(is_morning) {
    return dispatch => {     
        getFoodExcept(is_morning)
        .then(list => dispatch(fetchSuccessFoodExcept(list)))
        .catch(() => dispatch(fetchErrorFoodExcept()));
    };
}