import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProfileData = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(response.data);
      } catch (err) {
        setError('User not found');
      }
    };

    fetchUserData();
  }, [username]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>
        <Link to={userData.html_url}>{userData.login}</Link>
      </h2>
      <img src={userData.avatar_url} alt={userData.login} />
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <p>Location: {userData.location}</p>
      <p>Joined: {new Date(userData.created_at).toLocaleDateString()}</p>
      <Link to={`/repositories/${username}`}>View Repositories</Link>
    </div>
  );
};

export default ProfileData;
