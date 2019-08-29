const initialState = {
  idx: 4,
  users: [
    { name: "Mehmet", state: "online", id: 1 },
    { name: "Ali", state: "offline", id: 2 },
    { name: "Fırat", state: "busy", id: 3 }
  ]
}
const mReducer = (state = initialState, action) => {
  console.log(action)
  if (action.type === 'DELETE_USER') {
    let tUsers = state.users.filter(us => {
      return us.name !== action.name
    })
    return {
      ...state,
      users: tUsers
    }
  }
  if (action.type === 'ADD_USER') {
    let id = state.idx;
    let user = {
      name: action.name,
      state: 'online',
      id: id
    }
    return{
      idx:id+1,
      users: [...state.users,user]
    }
  }
  // switch (action.type) {
  //   case 'ADD_USER':
      
  //     break;
  
  //   default:
  //     break;
  // }
  return state;
}
export default mReducer;