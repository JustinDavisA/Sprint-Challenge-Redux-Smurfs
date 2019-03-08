import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from '../actions'

const baseState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = baseState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: null
      }
    case FETCH_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }  
    default:
      return state;
  }
}

export default rootReducer;
