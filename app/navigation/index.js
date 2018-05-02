import React from 'react'
import { StackNavigator } from 'react-navigation'

// import EmployeeScreen from '~/navigation/drawer/screens/employee'
// import LoginScreen from '~/navigation/root/screens/login'
import Drawer from '~/navigation/drawer'

const RootStackNavigator = StackNavigator({
  // Login: { screen: LoginScreen,
  //   navigationOptions: ({ navigation }) => {
  //     return ({
  //     // header: null,
  //     })
  //   },
  // },
  Drawer: { screen: Drawer },
  // Employee: { screen: EmployeeScreen },
})

export default RootStackNavigator
