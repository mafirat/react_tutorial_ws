import React from 'react';

import User from './User';

const UserList = ({ users, delMethod }) => {

    if (users.length > 0) {
        return users.map(user => {
            return <User name={user.name} state={user.state} key={user.id} delMethod={() => delMethod(user.id)} />
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