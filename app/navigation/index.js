import React from 'react'
import { StackNavigator, SwitchNavigator } from 'react-navigation'
import LoginContainer from '~/containers/login/LoginContainer'
import Drawer from '~/navigation/drawer'
import { connect } from 'react-redux'
import authentication from '~/redux/modules/authentication'

// https://reactnavigation.org/docs/auth-flow.html
const Navigation = StackNavigator({
  Login: { screen: LoginContainer,
    navigationOptions: (data) => {

      debugger
      return ({
        // header: null,
      })
    },
  },
  Drawer: { screen: Drawer },
  // Employee: { screen: EmployeeScreen },
})

function mapStateToProps (authentication) {
  return {
    ...authentication,
  }
}

export default connect(
  mapStateToProps
)(Navigation)
