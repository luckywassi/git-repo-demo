import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header, ContentWrapper, Home, Products, Contact, Logout, Error404 } from './pages';
import Profile from './Profile';
import UserRepositories from './UserRepositories';

export default function Layout() {
	const [login, setLogin] = useState('moontahoe');
	return (
		<>
			<Router>
				<Header />
				<ContentWrapper>
					<Switch>
						<Route exact path='/login' component={Home} />
						<Route exact path='/' component={Home} />
						<Route exact path='/profile' render={() => <Profile login={login} setLogin={setLogin} />} />
						<Route exact path='/repos' render={() => <UserRepositories login={login} />} />
						<Route exact path='/products' component={Products} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/logout' component={Logout} />
						<Route path='*' component={Error404} />
					</Switch>
				</ContentWrapper>
			</Router>
		</>
	);
}
