import { Notifications } from 'expo'
import React from 'react'
import registerForPushNotificationsAsync from '~/helpers/expo/registerForPushNotificationsAsync'
import Navigation from '~/navigation'

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
      <Navigation />
    )
  }
}
