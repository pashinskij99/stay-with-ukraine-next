import { combineReducers } from 'redux';

import {newsSlice} from './newsSlice';

const rootReducer = combineReducers({
  news: newsSlice.reducer,
});

export default rootReducer;