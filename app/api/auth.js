import { generateAuthActions } from 'redux-token-auth'
import { authUrl } from '~/config/constants'

export function getAccessToken () {
  const email = 'admin@gmail.com'
  const password = 'password'
  debugger
  return signInUser({email, password})
  // return AccessToken.getCurrentAccessToken()
}

export function authWithToken (accesToken) {
  // return firebaseAuth
  //   .signInWithCredential(facebookProvider.credential(accesToken))
}

export function updateUser (user) {
  // return ref.child(`users/${user.uid}`).update(user)
}

export function logout () {
  // LoginManager.logOut()
  // firebaseAuth.signOut()
  // ref.off()
}
