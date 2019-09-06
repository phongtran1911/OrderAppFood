const defaultListTable = {
    listTable: null,
    isLoading: false,
    error: false,
};

const listTableReducer = (state = defaultListTable, action) => {
    switch (action.type) {
        case 'START_FETCH_DATA_Table':
            return {listTable: null, error: false, isLoading: true};
        case 'SUCCESS_FETCH_DATA_Table':
            return {listTable: action.listTable, isLoading: false, error: false};
        case 'FETCH_ERROR_DATA_Table':
            return {listTable: null, isLoading : false, error: true};
        default:
            return state;
    } 
}

export default listTableReducer;