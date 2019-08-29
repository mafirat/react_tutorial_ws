import React from 'react';

import User from './User';

const UserList = ({users}) =>  {
    return(
        users.map(user => {
            return <User name={user.name} state={user.state} key={user.id}/>
        })
    )
}

export default UserList;