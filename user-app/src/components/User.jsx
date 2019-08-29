import React from 'react';
import {connect} from 'react-redux'
class User extends React.Component {
    componentWillUnmount(){
        console.log('Bileşen çıkarıldı')
    }
    deleteHandler=()=>{
        this.props.deleteUser(this.props.user.name)
    }
    render() {
        console.log(this.props)
        const { user, stateChange } = this.props
        const changeHandler = (e) => {
            stateChange({ state: e.target.value, id: user.id })
        }
        return (
            <div className="card bg-light border-primary mb-3">
                <div className="card-body">
                    <button onClick={this.deleteHandler} className="btn btn-sm btn-outline-danger" style={{ position: "absolute", right: "15px" }}>Sil</button>
                    <h1 className="card-title">Adı: {user.name}</h1>
                    <h3 className="card-subtitle mb-1">Durum: <span className={user.state}>{user.state}</span></h3>
                    <select className="form-control" name="state" id="state" onChange={changeHandler} value={user.state}>
                        <option value="online">online</option>
                        <option value="offline">offline</option>
                        <option value="busy">busy</option>
                    </select>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        deleteUser: (name)=>{ dispatch({type:'DELETE_USER', name:name})}
    }
}
export default connect(null,mapDispatchToProps)(User);