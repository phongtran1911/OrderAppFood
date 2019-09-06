import getFoodOnAfternoon from '../../../components/api/foods/getFoodOnAfternoon';

export function startFetchData() {
    return { type: 'START_FETCH_DATA_FOODAFTERNOON' };
}

export function fetchSuccess(listFoodAfternoon) {
    return { 
        type: 'SUCCESS_FETCH_DATA_FOODAFTERNOON',
        listFoodAfternoon
    };
}

export function fetchError() {
    return { type: 'FETCH_ERROR_DATA_FOODAFTERNOON' };
}

export function fetchData() {
    return dispatch => {
        dispatch(startFetchData());        
        getFoodOnAfternoon()
        .then(list => dispatch(fetchSuccess(list)))
        .catch(() => dispatch(fetchError()));
    };
}