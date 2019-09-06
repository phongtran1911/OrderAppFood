const defaultListFoodAdd = {
    listFoodAdd: null,
    isLoading: false,
    error: false,
};

const listFoodAddReducer = (state = defaultListFoodAdd, action) => {
    switch (action.type) {
        case 'START_FETCH_DATA_FOODADD':
            return {listFoodAdd: null, error: false, isLoading: true,type:action.type};
        case 'SUCCESS_FETCH_DATA_FOODADD':
            return {listFoodAdd: action.listFoodAdd, isLoading: false, error: false,type:action.type};
        case 'FETCH_ERROR_DATA_FOODADD':
            return {listFoodAdd: null, isLoading : false, error: true,type:action.type};
        default:
            return state;
    } 
}

export default listFoodAddReducer;