import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export function Header() {
	return (
		<div style={{ textAlign: 'center' }}>
			<h3>[Git Users]</h3>
			<nav
				style={{
					display: 'flex',
					gap: '20px',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Link to=''>Home</Link>
				<Link to='profile'>Profile</Link>
				<Link to='repos'>Repositories</Link>
				<Link to='products'>Products</Link>
				<Link to='contact'>Contact</Link>
				<Link to='logout'>Logout</Link>
			</nav>
			<br />
		</div>
	);
}
export function ContentWrapper({ children }) {
	return (
		<div
			style={{
				border: '1px solid pink',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<div style={{ border: '1px solid lime' }}>{children}</div>
		</div>
	);
}
export function Home() {
	return (
		<div>
			<h3>I am Home Content</h3>
		</div>
	);
}
export function Products() {
	return (
		<div>
			<h3>[Products]</h3>
		</div>
	);
}
export function Contact() {
	return (
		<div>
			<h3>[Contact]</h3>
		</div>
	);
}
export function Logout() {
	document.cookie = 'myUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=None;secure';
	window.location.href = '/login';
	return <Redirect to='/login' />;
}
export function Error404({ location }) {
	return (
		<div>
			<h1>Error 404.</h1>
			<h2>Resource not found at : {`${window.location.host}${location.pathname}`}</h2>
		</div>
	);
}
