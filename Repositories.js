import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Repositories = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const reposPerPage = 8;

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=${reposPerPage}&page=${page}`);
        setRepos(response.data);
      } catch (err) {
        setError('Failed to fetch repositories');
      }
    };

    fetchRepositories();
  }, [username, page]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Repositories;
