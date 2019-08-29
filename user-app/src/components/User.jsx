import React from 'react';
import {connect} from 'react-redux'

import {deleteUser, changeUserState} from '../actions/userActions'

class User extends React.Component {
    componentWillUnmount(){
        console.log('Bileşen çıkarıldı')
    }
    deleteHandler=()=>{
        this.props.deleteUser(this.props.user.name)
    }
    render() {
        console.log(this.props)
        const { user } = this.props
        const changeHandler = (e) => {
            this.props.changeUserState(e.target.value, user.id)
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
        deleteUser: (name)=>{ dispatch(deleteUser(name))},
        changeUserState: (state,id)=>{dispatch(changeUserState(state,id))}
    }
}
export default connect(null,mapDispatchToProps)(User);