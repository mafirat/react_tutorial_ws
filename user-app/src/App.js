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

  render() {
    const {users} = this.props
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <UserList users={users} delMethod={this.deleteMethod} stateChange={this.stateChangeHandler} />

            <hr />
            <AddUser />
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
