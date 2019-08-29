const initialState = {
    idx: 4,
    users: [
      { name: "Mehmet", state: "online", id: 1 },
      { name: "Ali", state: "offline", id: 2 },
      { name: "Fırat", state: "busy", id: 3 }
    ]
}
const mReducer =(state = initialState,action)=>{
    return state;
}
export default mReducer;