import React from 'react';

const User = ({name,state, metod}) => {
    return(
        <div className="card">
            <h1>Adı: {name}</h1>
            <h3 >Durum: <span className={state}>{state}</span></h3>
            <button onClick={metod}>Durum Değiştir</button>                    
        </div>
    )
}

export default User;