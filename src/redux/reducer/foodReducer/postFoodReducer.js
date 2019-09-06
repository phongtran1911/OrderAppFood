const defaultPostFood = {
    isAddingF: false,
    isSuccessF: false,
    errorF: false
}

const postFoodReducer = (state = defaultPostFood, action) => {
    switch (action.type) {
        case 'START_POST_DATA_F':
            return {isAddingF: true, isSuccessF: false, errorF: false};
        case 'SUCCESS_POST_DATA_F':
            return {isAddingF: false, isSuccessF: true, errorF: false};
        case 'ERROR_POST_DATA_F':
            return {isAddingF: false, isSuccessF : false, errorF: true};
        default:
            return state;
    } 
}

export default postFoodReducer;