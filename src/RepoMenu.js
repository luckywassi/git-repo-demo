import React from 'react';
import { useIterator } from './hooks/useIterator';
export default function RepoMenu({ repositories, login }) {
	const showItemsPerPage = 7;
	const [items, previous, next, i, j] = useIterator(repositories, showItemsPerPage);
	const pages =
		repositories.length % showItemsPerPage === 0
			? repositories.length / showItemsPerPage
			: Math.floor(repositories.length / showItemsPerPage) + 1;
	const currentPage = i / showItemsPerPage + 1;
	return (
		<>
			{/* as j will be greater than 0 if there is atleast one repo */}
			{j ? (
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
								<span style={{ color: 'red', fontWeight: 'bolder' }}>{key + 1 + i}:-</span>
								{repo.name}
							</p>
						))}
						<button onClick={previous}>&lt;</button>
						<span style={{ fontSize: '0.8rem' }}>
							Page {currentPage} out of {pages}
						</span>
						<button onClick={next}>&gt;</button>
					</div>
				</>
			) : (
				<>
					<h2>
						No repositories found for user: <span style={{ color: 'red' }}>{login}</span>
					</h2>
				</>
			)}
		</>
	);
}
