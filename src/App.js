import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Aside from './components/Aside/Aside';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Main/ProfileContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Aside />
        <div className="content">
          <Route exact render={ () => <ProfileContainer />} path="/profile/:id"></Route>
          <Route exact render={ () => <DialogsContainer />} path="/dialogs"></Route>
          <Route exact render={ () => <UsersContainer />} path="/users"></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;