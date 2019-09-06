import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';


const store = createStore(reducer,applyMiddleware(thunk));

export default store;
//tich hop vao trong ung dung react - Provider -> 1 component - 1 props -> store
