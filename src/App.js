import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  console.log(props.store.getState().dialogsPage);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />
        <div className="content">
          <Route exact render={ () => <Main store={props.store} />} path="/profile"></Route>
          <Route exact render={ () => <DialogsContainer store={props.store} />} path="/dialogs"></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;