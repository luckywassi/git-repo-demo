import React, { useState } from 'react';
import './style.css';
import myFunctions from './myFunctions';
import { Redirect } from 'react-router-dom';
export default function Login({ location, history }) {
  const [status] = myFunctions.getCookie('myUser');
  if (status) {
    return <Redirect to="/" />;
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function handleClick() {
    {
      if (!username && !password) {
        setError('please enter username and password');
        return;
      }
      if (!username) {
        setError('please enter username');
        return;
      }
      if (!password) {
        setError('please enter password');
        return;
      }
      const errormsg = myFunctions.login(username, password);
      setError(errormsg);
      if (errormsg === 'success') {
        setUsername('');
        setPassword('');
        const { from } = location.state || { from: '/' };
        history.push(from);
      }
    }
  }
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>[GitHub Users]</h1>
      </div>
      <div className="login-form">
        <h2>Login Form</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Username</label>
              </td>
              <td>
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password</label>
              </td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="login-btn" onClick={handleClick}>
          Login
        </button>
        {error && <p className="active">{error}</p>}
      </div>
    </>
  );
}
