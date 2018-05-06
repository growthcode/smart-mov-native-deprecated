import { getAccessToken, authWithToken, updateUser, logout } from '~/api/auth'

const AUTHENTICATING = 'AUTHENTICATING'
const NOT_AUTHED = 'NOT_AUTHED'
const IS_AUTHED = 'IS_AUTHED'
export const LOGGING_OUT = 'LOGGING_OUT'

function authenticating () {
  return {
    type: AUTHENTICATING,
  }
}

function notAuthed () {
  return {
    type: NOT_AUTHED,
  }
}

function isAuthed (uid, displayName) {
  return {
    type: IS_AUTHED,
    uid,
    displayName,
  }
}

function loggingOut () {
  return {
    type: LOGGING_OUT
  }
}

export function handleAuthWithSmartMov () {
  return function (dispatch, getState) {
    dispatch(authenticating())
    // API CALL
    // return getAccessToken()
      // .then(({accessToken}) => authWithToken(accessToken))
      // .catch((error) => console.warn('Error in handleAuthWithFirebase: ', error))
  }
}

export function onAuthChange (user) {
  return function (dispatch) {
    if (!user) {
      dispatch(notAuthed())
    } else {
      const { uid, displayName } = user
      // API CALL
      // ref.child(`users/${uid}`)
      //   .once('value')
      //   .then((snapshot) => {
      //     const userInfo = snapshot.val()
      //     return Promise.all(
      //       userInfo === null
      //         ? [
      //             dispatch(setPollsVotedOn({})),
      //             dispatch(setOwnPolls({})),
      //             dispatch(fetchAndSetPollsListener()),
      //           ]
      //         : [
      //             dispatch(setPollsVotedOn(userInfo.pollsVotedOn || {})),
      //             dispatch(setOwnPolls(userInfo.ownPolls || {})),
      //             dispatch(fetchAndSetPollsListener()),
      //         ]
      //     )
      //   })
      //   .then(() => dispatch(isAuthed(uid, displayName)))

      // API CALL
      // updateUser({uid, displayName})
    }
  }
}

export function handleUnauth () {
  return function (dispatch) {
    logout()
    dispatch(loggingOut())
  }
}

const initialState = {
  isAuthed: false,
  isAuthenticating: true,
  authedId: '',
  displayName: '',
}

export default function authentication (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING :
      return {
        ...state,
        isAuthenticating: true,
      }
    case NOT_AUTHED :
      return {
        ...state,
        isAuthenticating: false,
        isAuthed: false,
        authedId: '',
      }
    case IS_AUTHED :
      return {
        ...state,
        isAuthed: true,
        isAuthenticating: false,
        authedId: action.uid,
        displayName: action.displayName,
      }
    default :
      return state
  }
}
