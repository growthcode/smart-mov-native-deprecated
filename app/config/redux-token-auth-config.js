import { generateAuthActions } from 'redux-token-auth'
import { authUrl } from './constants'

const config = {
  authUrl,
  userAttributes: {
    first: 'first',
    last: 'last',
    updatedAt: 'updated_at',
  },
  userRegistrationAttributes: {
    first: 'first',
    last: 'last',
    updatedAt: 'updated_at',
  },
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}
