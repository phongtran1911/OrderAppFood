const defaultListBowlType = {
    listBowlType: null,
    isLoading: false,
    error: false,
};

const listBowlTypeReducer = (state = defaultListBowlType, action) => {
    switch (action.type) {
        case 'START_FETCH_DATA_BOWLTYPE':
            return {listBowlType: null, error: false, isLoading: true,type:action.type};
        case 'SUCCESS_FETCH_DATA_BOWLTYPE':
            return {listBowlType: action.listBowlType, isLoading: false, error: false,type:action.type};
        case 'FETCH_ERROR_DATA_BOWLTYPE':
            return {listBowlType: null, isLoading : false, error: true,type:action.type};
        default:
            return state;
    } 
}

export default listBowlTypeReducer;