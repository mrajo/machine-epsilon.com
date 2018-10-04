import * as React from 'react';
import * as logo from './logo.svg';
import * as css from './App.m.scss';

class App extends React.Component {
  public render() {
    return (
      <div className={css.App}>
        <header className={css['App-header']}>
          <img src={logo} className={css['App-logo']} alt="logo"/>
          <p>React with TypeScript & SASS</p>
          <a className={css['App-link']} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn
            React</a>
        </header>
      </div>
    );
  }
}

export default App;
