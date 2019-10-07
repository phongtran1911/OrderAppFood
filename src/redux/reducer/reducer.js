import {combineReducers} from 'redux';

import isAddingReducer from './isAddingReducer';
import listFoodReducer from './foodReducer/listFoodReducer';
import listFoodTypeReducer from './foodtypeReducer/listFoodTypeReducer';
import postFoodTypeReducer from './foodtypeReducer/postFoodTypeReducer';
import listTableReducer from './orderReducer/listTableReducer';
import listFoodExceptReducer from './foodReducer/listFoodExceptReducer';
import listFoodAddReducer from './foodReducer/listFoodAddReducer';
import listFoodAddUseReducer from './foodReducer/listFoodAddUseReducer';
import listBowlTypeReducer from './orderReducer/listBowlTypeReducer';
import listDrinkReducer from './orderReducer/listDrinkReducer';
import postOrderOnlyFoodReducer from './orderReducer/postOrderOnlyFoodReducer';
import listFoodAfternoonReducer from './foodReducer/listFoodAfternoon';
import listOrderedReducer from './orderedReducer/listOrderedReducer';
import getOrderDetailReducer from './orderedReducer/getOrderDetailReducer';
import postUpdateOrderDetailReducer from './orderedReducer/postUpdateOrderDetailReducer';
import listOrderReducer from './orderReducer/listOrderReducer';
import countCartReducer from './countCartReducer';
import listTableOrderedReducer from './orderedReducer/listTableOrderedReducer';
const reducer = combineReducers({
  isAdding: isAddingReducer,
  listFood: listFoodReducer,
  listFoodType: listFoodTypeReducer,
  postFoodType: postFoodTypeReducer,
  listTable: listTableReducer,
  listFoodExcept: listFoodExceptReducer,
  listFoodAdd: listFoodAddReducer,
  listFoodAddUse: listFoodAddUseReducer,
  listBowlType: listBowlTypeReducer,
  listDrink: listDrinkReducer,
  postOrderOnlyFood: postOrderOnlyFoodReducer,
  listFoodAfternoon: listFoodAfternoonReducer,
  listOrdered: listOrderedReducer,
  getOrderDetail: getOrderDetailReducer,
  postUpdateOrderDetail: postUpdateOrderDetailReducer,
  listOrder: listOrderReducer,
  countCart: countCartReducer,
  listTableOrdered: listTableOrderedReducer,
});

export default reducer;
