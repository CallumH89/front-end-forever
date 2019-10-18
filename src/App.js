import React from 'react';
import './scss/app.scss';
import { ThemeProvider } from 'styled-components';
import Button from './components/button';

// import the theme from .json
import boxofficeTheme from './themes/theme-boxoffice.json';
const theme = boxofficeTheme;

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <img alt='logo' className='logo' src='./boxoffice.svg' />
      </header>
      <div className='content'>
        <h1>Components Library</h1>
        <p>Hello!</p>
        {/* button - no theme */}
        <Button />
        {/* everything in here will use the theme */}
        <ThemeProvider theme={theme}>
          <Button />
          <Button small />
          {/* button with a prop to modify */}
          <Button large inverted />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
