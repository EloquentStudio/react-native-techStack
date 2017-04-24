import {combineReducers} from 'redux';
import libraryReducer from './LibraryReducer.js';
import selectionReducer from './SelectionReducer.js';

export default combineReducers({
  libraries: libraryReducer,
  selectedLibraryId: selectionReducer,
});
