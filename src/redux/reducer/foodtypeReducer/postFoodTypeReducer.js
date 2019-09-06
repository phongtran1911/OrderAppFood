const defaultPostFoodType = {
    isAddingFT: false,
    successFT: '',
    errorFT: false
}

const postFoodTypeReducer = (state = defaultPostFoodType, action) => {
    switch (action.type) {
        case 'START_POST_DATA_FT':
            return {isAddingFT: true, successFT: null, errorFT: false};
        case 'SUCCESS_POST_DATA_FT':
            return {isAddingFT: false, successFT: action.successFT, errorFT: false};
        case 'ERROR_POST_DATA_FT':
            return {isAddingFT: false, successFT : null, errorFT: true};
        default:
            return state;
    } 
}

export default postFoodTypeReducer;