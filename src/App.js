import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './screen/home/Home';
import SignIn from './screen/signin/SignIn';
import SignUp from './screen/signup/SignUp';
import { IsUserRedirect, ProtectedRoute } from './components/helpers/routes';
import Browse from './screen/browse/Browse';
import useAuthListener  from './components/hooks/listener';

function App() {
  const { user } = useAuthListener(); 
  // const { user } = '';

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={'/browse'} path={'/signin'}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={'/browse'} path={'/signup'}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={'/browse'}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={'/browse'} path={'/'}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
