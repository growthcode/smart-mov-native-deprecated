// actions are like the messages that are sent to change the objects state (app's state)
// reducers are how the actions are sent to state
// redux-schema is like the OBJECT STATE (the app's state)

// outline of redux schema for state

// {
//   users: {
//     isAuthed,
//     isFetching,
//     error,
//     authedId,
//     [uid]: {
//       lastUpdated
//       info: {
//         name,
//         uid,
//         qvatar
//       }
//     }
//   },
// }

{
  user: {
    id,
    isAuthed,
    isFetching,
    error,
    authedId,
    first,
    last,
    email,
    [activities]: {
      id,
      title,
      value,
      num_movs,
      value_saved,
    }
  }
}
