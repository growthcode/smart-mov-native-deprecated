import React from 'react'
import { DrawerNavigator } from 'react-navigation'

import asdf from '~/navigation/drawer/screens/asdf'
// import DirectoryScreen from '~/navigation/drawer/screens/directory'
// import EmployeeScreen from '~/navigation/drawer/screens/employee'
// import NavBarItem from '~/components/navBarItem'


const Drawer = DrawerNavigator({
  // Home: { screen: HomeScreen },
  asdf: { screen: asdf },
  // Directory: { screen: DirectoryScreen },
},
{
  navigationOptions: ({ navigation }) => {
    const { state, navigate } = navigation
    const primaryColor = '#3498db'
    const secondaryColor = 'white'
    return ({
      // title: state.routeName,
      // headerStyle: {
      //   backgroundColor: primaryColor,
      // },
      // headerTitleStyle: {
      //   color: secondaryColor,
      // },
      // headerTintColor: {
      //   tintColor: secondaryColor,
      // },
      // headerLeft: (
      //   <NavBarItem
      //     iconName='bars'
      //     onPress={ () => { navigate('DrawerToggle') } }/>
      // ),
    })
  },
})

export default Drawer
