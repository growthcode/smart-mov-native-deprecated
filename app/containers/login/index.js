import React, { PropTypes, Component } from 'react'
import Login from '~/components/login'

export default class index extends Component {
  static propTypes = {}
  state = {}
  render () {
    const { navigate } = this.props.navigation
    const { routeName } = this.props.navigation.state
    return (
      <Login
        navigate={ navigate }
        routeName={ routeName } />
    )
  }
}
