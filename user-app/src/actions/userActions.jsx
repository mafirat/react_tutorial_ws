export const deleteUser =(name) => {
    return {type:'DELETE_USER', name:name}
}

export const addUser =(name) => {
    return {type:'ADD_USER', name:name}
}
export const changeUserState =(state,id) => {
    return {type:'CHANGE_USER_STATE', state:state, id:id}
}