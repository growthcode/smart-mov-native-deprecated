import React, { Component } from 'react'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import LoginContainer from '~/containers/login/LoginContainer'
import Drawer from '~/navigation/drawer'
import { connect } from 'react-redux'

// https://reactnavigation.org/docs/auth-flow.html
const RootStackNavigator = StackNavigator({
  Login: { screen: LoginContainer,
    // navigationOptions: (data) => {
    //   debugger
    //   return ({
    //     // header: null,
    //   })
    // },
  },
  Drawer: { screen: Drawer },
  // Employee: { screen: EmployeeScreen },
})


// const RootStackNavigatorState = (data) => (
  // <RootStackNavigator
    // navigation={addNavigationHelpers({ data.dispatch, state: data.nav })}
  // />
// );
// const RootStackNavigatorState = ({dispatch, state}) => {
  // debugger
  // return(
    // <RootStackNavigator
      // navigation={
        // addNavigationHelpers({ dispatch, state })
      // }
    // />
  // )
// }
//
// const RootStackNavigatorState = ({ dispatch, state }) => {
// debugger
//   return (
//     <RootStackNavigator
//       // state={state}
//       // dispatch={dispatch}
//       // navigation={addNavigationHelpers({ dispatch, state })}
//     />
//   )
// }
// const RootStackNavigatorState = (data) => {
//   return (
//     <RootStackNavigator
//       // state={state}
//       // dispatch={dispatch}
//       navigation={addNavigationHelpers({...data})}
//     />
//   )
// }

const mapStateToProps = (state) => ( { state } )
// const mapStateToProps = (state) => {
  // return state
// }
//
// export default connect(
  // mapStateToProps
// )(RootStackNavigatorState)

export default connect(
  mapStateToProps
)(RootStackNavigator)
