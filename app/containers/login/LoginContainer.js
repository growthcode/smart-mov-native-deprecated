import React, { PropTypes, Component } from 'react'
import Login from '~/components/login'
import { connect } from 'react-redux'
// import { signInUser } from '~/config/redux-token-auth-config'

class LoginContainer extends Component {
  static propTypes = {}
  render () {
    debugger
    // const { signInUser } = this.props
    const { navigate } = this.props.navigation
    const { routeName } = this.props.navigation.state
    return (
      <Login
        navigate={ navigate }
        routeName={ routeName }
      />
    )
  }
}

function mapStateToProps () {
  return {
    // signInUser,
  }
}


export default connect(
  mapStateToProps
)(LoginContainer)
