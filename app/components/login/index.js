import React, { PropTypes, Component } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'

Login.propTypes = {

}

export default function Login (props) {
  return (
    <View>
      <Text>
        { 'Login' }
      </Text>
      <Button
        onPress={ () => props.navigate('asdf') }
        title='Login' />
    </View>
  )
}

const styles = StyleSheet.create({

})
