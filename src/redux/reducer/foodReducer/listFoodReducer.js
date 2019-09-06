const defaultListFood = {
    listFood: null,
    isLoading: false,
    error: false,
};

const listFoodReducer = (state = defaultListFood, action) => {
    switch (action.type) {
        case 'START_FETCH_DATA_FOOD':
            return {listFood: null, error: false, isLoading: true,type:action.type};
        case 'SUCCESS_FETCH_DATA_FOOD':
            return {listFood: action.listFood, isLoading: false, error: false,type:action.type};
        case 'FETCH_ERROR_DATA_FOOD':
            return {listFood: null, isLoading : false, error: true,type:action.type};
        default:
            return state;
    } 
}

export default listFoodReducer;