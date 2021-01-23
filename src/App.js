import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Main/ProfileContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />
        <div className="content">
          <Route render={ () => <ProfileContainer />} path="/profile"></Route>
          <Route exact render={ () => <DialogsContainer />} path="/dialogs"></Route>
          <Route exact render={ () => <UsersContainer />} path="/users"></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;