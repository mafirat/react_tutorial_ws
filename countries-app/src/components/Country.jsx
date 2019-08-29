import React from 'react'
const Country =(props)=> {
    let name = props.match.params.name;
    console.log(name)
    return(
        <h3>Ülke Adı: {name}</h3>
    )
}

export default Country;