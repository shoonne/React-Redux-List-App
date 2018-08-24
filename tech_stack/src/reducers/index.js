import { combineReducers } from 'redux';
import LibraryReducers  from './LibraryReducers';
import SelectionReducer from './SelectionReducer';

// The reducer LibraryReducers is assigned to a key 'libraries'
// CombineReducers make multiple reducers work together
export default combineReducers({
    libraries: LibraryReducers,
    selectedLibraryId: SelectionReducer, // Record the currently selected library
});

// This file is containing the all the reducers.
// Our state objects

