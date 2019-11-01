import * as React from "react";
import './scss/app.scss';
import Button from './components/button';


const App: React.FunctionComponent<{}> = () => {
  return (
      <div className='app'>
        <header className='app-header'>
          <img alt='logo' className='logo' src='./boxoffice.svg' />
        </header>
        <div className='content'>
          <h1>Components Library</h1>
          <p>Hello!</p>
          <ButtonGroup />
        </div>
      </div>
  );
}

const ButtonGroup: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Button text="Button 1" />
      <Button small text="Button 2" />              
      <Button large inverted text="Button 3" />    
    </>
  );
}


export default App;