import React from 'react';

import AddUser from './components/AddUser'
import UserList from './components/UserList'

class App extends React.Component {
  state = {
    idx: 4,
    users: [
      { name: "Mehmet", state: "online", id: 1 },
      { name: "Ali", state: "offline", id: 2 },
      { name: "Fırat", state: "busy", id: 3 }
    ]
  }

  addMethod = (name)=>{
    console.log('App modülü içerisinde', name)
    //[...arrayadi,nesne]
    let id = this.state.idx;
    let user = {
      name:name,
      state:'online',
      id:id
    }
    let tUsers = [...this.state.users,user]
    this.setState({
      users:tUsers,
      idx: id+1
    })
  }
  
  render() {
    return (
      <div>
        <UserList users={this.state.users} />
        <hr/>
        <AddUser addMethod={this.addMethod}/>
      </div>
    );
  }
}

export default App;
