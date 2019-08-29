import React from 'react';
import {connect} from 'react-redux'

import AddUser from './components/AddUser'
import UserList from './components/UserList'

class App extends React.Component {
  stateChangeHandler = (data) => {
    let tUsers = this.state.users.map(us => {
      if (us.id === data.id) {
        us.state = data.state
      }
      return us;
    })
    this.setState({
      users:tUsers
    })
  }

  deleteMethod = (id) => {
    let tUsers = this.state.users.filter(us => {
      return us.id !== id
    })
    this.setState({
      users:tUsers
    })
  }

  addMethod = (name) => {
    //[...arrayadi,nesne]
    let id = this.state.idx;
    let user = {
      name: name,
      state: 'online',
      id: id
    }
    let tUsers = [...this.state.users, user]
    this.setState({
      users: tUsers,
      idx: id + 1
    })
  }

  render() {
    const {users} = this.props
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <UserList users={users} delMethod={this.deleteMethod} stateChange={this.stateChangeHandler} />

            <hr />
            <AddUser addMethod={this.addMethod} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps =(state)=> {
  return {
    users : state.users
  };
}

export default connect(mapStateToProps)(App);
