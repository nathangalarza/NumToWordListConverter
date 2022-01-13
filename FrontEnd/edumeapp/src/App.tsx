import React from 'react';
// import logo from './logo.svg';

import './App.scss';
import { PhoneScreen } from './features/PhoneScreen/PhoneScreen';
// import { WordsTable } from './features/wordStable/WordStable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        {/* <Counter /> */}
        <PhoneScreen/>
        {/* <WordsTable/> */}
   
      </header>
    </div>
  );
}

export default App;
