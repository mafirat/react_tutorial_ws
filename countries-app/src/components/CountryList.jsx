import React from 'react';
import CountryCard from './CountryCard';

import axios from 'axios'

class CountryList extends React.Component {
    state={
        countries: []
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(rsp => {
            //console.log(rsp.data)
            this.setState({
                countries:rsp.data.slice(0,20)
            })
        })
    }
    render() {
        const countryList = this.state.countries.map(ct => {
            return (
                <CountryCard country={ct} key={ct.numericCode}/>
            )
        })
        return (
            <div className="card-columns">
                {countryList}
            </div>
        )
    }
}
export default CountryList;