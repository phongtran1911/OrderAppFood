const defaultListFoodAfternoon = {
    listFoodAfternoon: null,
    isLoading: false,
    error: false,
};

const listFoodAfternoonReducer = (state = defaultListFoodAfternoon, action) => {
    switch (action.type) {
        case 'START_FETCH_DATA_FOODAFTERNOON':
            return {listFoodAfternoon: null, error: false, isLoading: true,type:action.type};
        case 'SUCCESS_FETCH_DATA_FOODAFTERNOON':
            return {listFoodAfternoon: action.listFoodAfternoon, isLoading: false, error: false,type:action.type};
        case 'FETCH_ERROR_DATA_FOODAFTERNOON':
            return {listFoodAfternoon: null, isLoading : false, error: true,type:action.type};
        default:
            return state;
    } 
}

export default listFoodAfternoonReducer;