import React, { PropTypes, Component } from 'react'
import Login from '~/components/login'
import { connect } from 'react-redux'
import authentication from '~/redux/modules/authentication'
import { signInUser } from '~/config/redux-token-auth-config'

class LoginContainer extends Component {
  static propTypes = {}
  render () {
    const { signInUser } = this.props
    const { navigate } = this.props.navigation
    const { routeName } = this.props.navigation.state
    // const { isAuthed } = authentication.isAuthed
    return (
      <Login
        navigate={ navigate }
        routeName={ routeName }
        // isAuthed={ authed }
      />
    )
  }
}

function mapStateToProps ({ authentication }) {
  return {
    signInUser,
  }
}


export default connect(
  mapStateToProps
)(LoginContainer)
