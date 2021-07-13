import React, { useRef, useState } from 'react';
import Fetch from './Fetch';
function SearchForm({ onSearch }) {
  const inputRef = useRef();
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={() => onSearch(inputRef.current.value)}>Search</button>
    </>
  );
}
function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
}
function UserDetails({ data }) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'start'
        }}
      >
        <img
          src={data.avatar_url}
          alt={data.login}
          style={{ width: 150, height: 'auto' }}
        />
        <div>
          <h1>{data.login}</h1>
          <p>{data.name}</p>
          <p>{data.location}</p>
        </div>
      </div>
    </>
  );
}
export default function Profile({ login, setLogin }) {
  return (
    <>
      <SearchForm onSearch={setLogin} />
      <GitHubUser login={login} />
    </>
  );
}
