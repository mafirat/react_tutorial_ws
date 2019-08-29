import React from 'react';

import UserList from './components/UserList'

function ConsoleLog(data) {
  console.log('from App Module');
}

class App extends React.Component {
  state={
    users: [
      {name:"Mehmet", state:"online", id:1},
      {name:"Ali", state:"offline",id:2},
      {name:"Fırat", state:"busy",id:3}
    ]
  }
  render(){
    return (
      <div>
        {
          <UserList users={this.state.users}/>
        }
      </div>
    );
  }
}

export default App;
