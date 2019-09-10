import postFoodType from '../../../components/api/foodstype/postFoodType';
import updateFoodType from '../../../components/api/foodstype/updateFoodType';
import deleteFoodType from '../../../components/api/foodstype/deleteFoodType';
import {fetchDataListFoodType} from '../../../redux/actionCreators/foodtypeAction/listFoodTypeAction';

export function startPostFoodType() {
  return {type: 'START_POST_DATA_FT'};
}

export function fetchSuccessPostFoodType(successFT) {
  return {
    type: 'SUCCESS_POST_DATA_FT',
    successFT,
  };
}

export function fetchErrorPostFoodType() {
  return {type: 'ERROR_POST_DATA_FT'};
}

export function fetchDataPostFoodType(Name, is_FoodAdd, idFood) {
  return dispatch => {
    postFoodType(Name, is_FoodAdd, idFood)
      .then(list => {
        dispatch(fetchSuccessPostFoodType(list));
        dispatch(fetchDataListFoodType(idFood));
      })
      .catch(() => dispatch(fetchErrorPostFoodType()));
  };
}

export function fetchDataDeletePostType(id, idFood) {
  return dispatch => {
    deleteFoodType(id)
      .then(result => {
        dispatch(fetchSuccessPostFoodType(result));
        dispatch(fetchDataListFoodType(idFood));
      })
      .catch(err => console.log(err));
  };
}

export function fetchDataUpdateFoodType(Name, is_FoodAdd, id, idFood) {
  return dispatch => {
    updateFoodType(Name, is_FoodAdd, id)
      .then(result => {
        dispatch(fetchDataListFoodType(idFood));
        return result;
      })
      .catch(err => console.log(err));
  };
}
