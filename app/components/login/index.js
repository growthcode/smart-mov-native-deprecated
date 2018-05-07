import React, { PropTypes, Component } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import { signInUser } from '~/config/redux-token-auth-config'

Login.propTypes = {

}

// onPress={ () => props.navigate('Drawer') }
export default function Login (props) {
  return (
    <View>
      <Text>
        { 'Login' }
      </Text>
      <Button
        onPress={() => {
          debugger
            var r = signInUser({email: 'admin@gmail.com', password: 'password'});
            console.log(r);
          }
        }
        title='Login' />
    </View>
  )
}


// export default function Login (props) {
//   return (
//     <View>
//       <Text>
//         { 'Login' }
//       </Text>
//       <Button
//         onPress={ () => props.navigate('Drawer') }
//         title='Login' />
//     </View>
//   )
// }

const styles = StyleSheet.create({

})
