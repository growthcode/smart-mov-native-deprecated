import { Notifications } from 'expo'
import React from 'react'
import registerForPushNotificationsAsync from '~/helpers/expo/registerForPushNotificationsAsync'
import Navigation from '~/navigation'

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import * as reducers from '~/redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { reduxTokenAuthReducer } from 'redux-token-auth'
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

export default class RootNavigator extends React.Component {
  componentDidMount () {
    this._notificationSubscription = this._registerForPushNotifications()
  }

  componentWillUnmount () {
    this._notificationSubscription && this._notificationSubscription.remove()
  }

  _registerForPushNotifications () {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync()

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    )
  }

  _handleNotification = ({ origin, data }) => {
    /* eslint-disable no-console */
    // console.log(
    //   `Push notification ${origin} with data: ${JSON.stringify(data)}`
    // )
    /* eslint-enable no-console */
  }

  render () {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
