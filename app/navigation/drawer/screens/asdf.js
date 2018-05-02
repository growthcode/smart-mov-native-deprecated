import React, { Component } from 'react'
import { View, Text } from 'react-native'

// import ActivitiesContainer from '~/containers/activities'
// import PollsContainer from '~/containers/polls'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Testicles. Woops I mean Testies.',
  };
  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>
          Say Whaaaaaaaaaaaaaaa!
        </Text>
      </View>
    )
  }
}
