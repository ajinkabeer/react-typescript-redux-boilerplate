import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import UserList from '../Users/UserList';


const App: React.SFC<{}> = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route exact path="/users">
          <h1>Users</h1>
          <UserList />
        </Route>
      </Switch>
    </>
  );
};

export default App;