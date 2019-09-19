const defaultPostOrderOnlyFood = {
  isAddingORDERONLYFOOD: false,
  dataOrderOnlyFood: null,
  errorORDERONLYFOOD: false,
};

const postOrderOnlyFoodReducer = (state = defaultPostOrderOnlyFood, action) => {
  switch (action.type) {
    case 'START_POST_DATA_ORDERONLYFOOD':
      return {
        isAddingORDERONLYFOOD: true,
        dataOrderOnlyFood: null,
        errorORDERONLYFOOD: false,
      };
    case 'SUCCESS_POST_DATA_ORDERONLYFOOD':
      return {
        isAddingORDERONLYFOOD: false,
        dataOrderOnlyFood: action.dataOrderOnlyFood,
        errorORDERONLYFOOD: false,
      };
    case 'ERROR_POST_DATA_ORDERONLYFOOD':
      return {
        isAddingORDERONLYFOOD: false,
        dataOrderOnlyFood: null,
        errorORDERONLYFOOD: true,
      };
    default:
      return state;
  }
};

export default postOrderOnlyFoodReducer;
