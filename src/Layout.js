import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  ContentWrapper,
  Home,
  Products,
  Contact,
  Logout,
  Error404
} from './pages';
import Profile from './Profile';
import UserRepositories from './UserRepositories';

function Header() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>[Git Users]</h3>
      <nav
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Link to="">Home</Link>
        <Link to="profile">Profile</Link>
        <Link to="repos">Repositories</Link>
        <Link to="products">Products</Link>
        <Link to="contact">Contact</Link>
        <Link to="logout">Logout</Link>
      </nav>
      <br />
    </div>
  );
}
export default function Layout() {
  const [login, setLogin] = useState('moontahoe');
  return (
    <>
      <Router>
        <Header />
        <ContentWrapper>
          <Switch>
            <Route exact path="/login" component={Home} />
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/profile"
              render={() => <Profile login={login} setLogin={setLogin} />}
            />
            <Route
              exact
              path="/repos"
              render={() => <UserRepositories login={login} />}
            />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/logout" component={Logout} />
            <Route path="*" component={Error404} />
          </Switch>
        </ContentWrapper>
      </Router>
    </>
  );
}
