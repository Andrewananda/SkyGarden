import {combineReducers} from 'redux';
import appReducer from './reducer';

const appStore = combineReducers({
  appState: appReducer,
});

export default appStore;
