import React from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Convert } from './features/convert/ConvertNumToList';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        {/* <Counter /> */}
        <Convert/>
   
      </header>
    </div>
  );
}

export default App;
