import React from 'react';

import User from './components/User'

function ConsoleLog(data) {
  console.log('from App Module');
}

function App() {
  return (
    <div>
      <User name="Mehmet" state="online"  metod={ConsoleLog} />
      <User name="Ali" state="offline"  metod={ConsoleLog} />
      <User name="Fırat" state="busy"  metod={ConsoleLog} />
    </div>
  );
}

export default App;
