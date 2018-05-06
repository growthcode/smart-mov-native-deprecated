import React, { PropTypes, Component } from 'react'
import Login from '~/components/login'
import { connect } from 'react-redux'
import { onAuthChange } from '~/redux/modules/authentication'

class LoginContainer extends Component {
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

function mapStateToProps ({authentication}) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed,
  }
}


export default connect(
  mapStateToProps
)(LoginContainer)
