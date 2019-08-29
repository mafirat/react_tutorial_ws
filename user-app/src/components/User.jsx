import React from 'react';

const User = ({ name, state, delMethod }) => {
    return (
        <div className="card bg-light border-primary mb-3">
            <div className="card-body">
                <button onClick={delMethod} className="btn btn-sm btn-outline-danger" style={{position:"absolute", right:"15px"}}>Sil</button>
                <h1 className="card-title">Adı: {name}</h1>
                <h3 className="card-subtitle">Durum: <span className={state}>{state}</span></h3>
            </div>
        </div>
    )
}

export default User;