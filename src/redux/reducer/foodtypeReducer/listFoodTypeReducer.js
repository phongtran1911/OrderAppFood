const defaultListFoodType = {
    listFoodType: null
};

const listFoodTypeReducer = (state = defaultListFoodType, action) => {
    switch (action.type) {
        case 'START_FETCH_DATA_FOODTYPE':
            return {listFoodType: null,type:action.type};
        case 'SUCCESS_FETCH_DATA_FOODTYPE':
            return {listFoodType: action.listFoodType,type:action.type};
        case 'FETCH_ERROR_DATA_FOODTYPE':
            return {listFoodType: null,type:action.type};
        default:
            return state;
    } 
}

export default listFoodTypeReducer;