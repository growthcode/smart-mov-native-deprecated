import React, { Component } from 'react'
import { View, Text } from 'react-native'

// import ActivitiesContainer from '~/containers/activities'
// import PollsContainer from '~/containers/polls'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Record Mov',
  };
  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>
          Testicles. Woops I mean Testies.
        </Text>
        <Text>
          Say Whaaaaaaaaaaaaaaa!
        </Text>
      </View>
    )
  }
}
