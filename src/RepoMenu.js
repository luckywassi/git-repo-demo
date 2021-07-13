import React from 'react';
import { useIterator } from './hooks/useIterator';
export default function RepoMenu({ repositories, login }) {
  const [items, previous, next, i, j] = useIterator(repositories);
  return (
    <>
      <h2>
        Repositories of: <span style={{ color: 'red' }}>{login}</span>
      </h2>
      <h3>
        Showing from ({i + 1} to {j}) out of {repositories.length}
      </h3>
      <div>
        {items.map((repo, key) => (
          <p key={key}>
            <span style={{ color: 'red', fontWeight: 'bolder' }}>
              {key + 1 + i}:-
            </span>{' '}
            {repo.name}
          </p>
        ))}
        <button onClick={previous}>&lt;</button>
        <span>Navigate</span>
        <button onClick={next}>&gt;</button>
      </div>
    </>
  );
}
