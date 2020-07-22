import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />
        <div className="content">
          <Route exact render={ () => <Main 
            state={props.state.profilePage} 
            dispatch={props.dispatch} />} path="/profile"></Route>
          <Route exact render={ () => <Dialogs 
            state={props.state.dialogsPage} 
            dispatch={props.dispatch} />} path="/dialogs"></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;