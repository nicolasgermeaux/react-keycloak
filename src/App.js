import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { getCurrentUser } from './config/Functions';
import Home from './pages/Homepage';
import AuthorisedPage from './pages/Securedpage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Routes>
  <Route {...rest} render={props => (
    getCurrentUser() ? (
      <Component {...props} />
    ) : (
        <Navigate to={{
          pathname: '/',
          state: { from: props.location }
        }} />
      )
  )} />
  </Routes>
)
const NonPrivateRoute = ({ component: Component, ...rest }) => (
  <Routes>

  <Route {...rest} render={props => (
    getCurrentUser() ? (
      <Navigate to={{
        pathname: "/auth",
        state: { from: props.location }
      }} />
    ) : (
        <Component {...props} />
      )
  )} />
    </Routes>
)

function App() {
  return (
    <Router>
      <NonPrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/auth" component={AuthorisedPage} />
    </Router>
  );
}

export default App;