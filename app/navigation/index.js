import React from 'react'
import { StackNavigator } from 'react-navigation'
import LoginContainer from '~/containers/login/LoginContainer'
import Drawer from '~/navigation/drawer'

const RootStackNavigator = StackNavigator({
  Login: { screen: LoginContainer,
    navigationOptions: ({ navigation }) => {
      return ({
        // header: null,
      })
    },
  },
  Drawer: { screen: Drawer },
  // Employee: { screen: EmployeeScreen },
})

export default RootStackNavigator
