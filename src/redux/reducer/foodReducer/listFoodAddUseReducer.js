const defaultListFoodAddUse = {
    listFoodAddUse: null,
    isLoading: false,
    error: false,
};

const listFoodAddUseReducer = (state = defaultListFoodAddUse, action) => {
    switch (action.type) {
        case 'START_FETCH_DATA_FOODADD_USE':
            return {listFoodAddUse: null, error: false, isLoading: true,type:action.type};
        case 'SUCCESS_FETCH_DATA_FOODADD_USE':
            return {listFoodAddUse: action.listFoodAddUse, isLoading: false, error: false,type:action.type};
        case 'FETCH_ERROR_DATA_FOODADD_USE':
            return {listFoodAddUse: null, isLoading : false, error: true,type:action.type};
        default:
            return state;
    } 
}

export default listFoodAddUseReducer;