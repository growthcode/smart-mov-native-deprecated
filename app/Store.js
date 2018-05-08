import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import * as reducers from '~/redux'
import ReduxThunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'
import { LOGGING_OUT } from '~/redux/modules/authentication'

const appReducer = combineReducers(reducers);
function rootReducer (state, action) {
  if (action.type === LOGGING_OUT) {
    state = undefined
  }

  return appReducer(state, action)
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk),
    // reduxTokenAuth: reduxTokenAuthReducer,
    devTools()
  )
);

export default store
