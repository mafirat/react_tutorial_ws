import React from 'react'
import axios from 'axios'

class Country extends React.Component {
    state = {
        country: {}
    }
    componentDidMount() {
        let name = this.props.match.params.name;
        console.log(name)
        axios.get('https://restcountries.eu/rest/v2/name/' + name + '?fullText=true')
            .then(rsp => {
                //console.log(rsp.data[0])
                this.setState({
                    country: rsp.data[0]
                })
            })
    }
    render() {
        const { country } = this.state;
        return (
            <div className="card">
                <div className="card-body">
                    <h3>Ülke Adı: {country.name}</h3>
                    <span>{country.nativeName}</span>
                </div>
            </div>
        )
    }
}

export default Country;