import React from 'react';
import './scss/app.scss';
import Buttons from './components/button';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <img alt='logo' className='logo' src='./boxoffice.svg' />
      </header>
      <div className='content'>
        <h1>Components Library</h1>
        <p>Hello!</p>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
