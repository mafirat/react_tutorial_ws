const initialState = {
  idx: 4,
  users: [
    { name: "Mehmet", state: "online", id: 1 },
    { name: "Ali", state: "offline", id: 2 },
    { name: "Fırat", state: "busy", id: 3 }
  ]
}
const mReducer = (state = initialState, action) => {
  if (action.type === 'DELETE_USER') {
    let tUsers = state.users.filter(us => {
      return us.name !== action.name
    })
    return {
      ...state,
      users: tUsers
    }
  }
  return state;
}
export default mReducer;