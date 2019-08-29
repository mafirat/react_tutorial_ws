import React from 'react';

import User from './User';

const UserList = ({ users, stateChange }) => {

    if (users.length > 0) {
        return users.map(user => {
            return <User user={user} key={user.id} stateChange={stateChange}  />
        })
    } else {
        return (
            <div className="alert alert-warning" role="alert">
                Kullanıcı Bulunamadı!
            </div>
        )
    }
}

export default UserList;