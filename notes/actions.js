// actions are like the messages that are sent to change the objects state (app's state)
// reducers are how the actions are sent to state
// redux-schema is like the OBJECT STATE (the app's state)

// outline of actions for state

// Users
{
  type: AUTH_USER,
  uid,
}

{
  type: UNAUTH_USER,
}

{
  type: FETCHING_USER,
}

{
  type: FETCHING_USER_FAILURE,
  error: 'Error fetching user.',
}

{
  type: FETCHING_USER_SUCCESS,
  uid,
  user,
  timestamp,
}

