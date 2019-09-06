const defaultListFoodExcept = {
    listFoodExcept: null,
    isLoading: false,
    error: false,
};

const listFoodExceptReducer = (state = defaultListFoodExcept, action) => {
    switch (action.type) {
        case 'START_FETCH_DATA_FOODEXCEPT':
            return {listFoodExcept: null, error: false, isLoading: true,type:action.type};
        case 'SUCCESS_FETCH_DATA_FOODEXCEPT':
            return {listFoodExcept: action.listFoodExcept, isLoading: false, error: false,type:action.type};
        case 'FETCH_ERROR_DATA_FOODEXCEPT':
            return {listFoodExcept: null, isLoading : false, error: true,type:action.type};
        default:
            return state;
    } 
}

export default listFoodExceptReducer;