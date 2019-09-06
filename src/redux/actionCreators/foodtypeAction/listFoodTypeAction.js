import getFoodType from '../../../components/api/foodstype/getFoodType';

export function fetchSuccessListFoodType(listFoodType) {
    return { 
        type: 'SUCCESS_FETCH_DATA_FOODTYPE',        
        listFoodType
    };
}

export function fetchErrorListFoodType() {
    return { type: 'FETCH_ERROR_DATA_FOODTYPE' };
}

export function fetchDataListFoodType(idFood) {
    return dispatch => {
        getFoodType(idFood)
        .then(list => dispatch(fetchSuccessListFoodType(list)))
        .catch((err) => console.log(err));
    };
}