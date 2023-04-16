import appReducer from './app-reducer';

const { combineReducers } = require('redux');

const reducers = combineReducers({
    appReducer,
});

export default (state: any, action: any) => reducers(state, action);
