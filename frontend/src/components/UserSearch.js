import React, { useState } from "react";
import "./UserSearch.css"; // Ensure you create this CSS file for styling

const UserSearch = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/api/users/${username}`
      );
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setError(null);
      } else {
        setError("User not found");
        setUserData(null);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch user data");
      setUserData(null);
    }
  };

  return (
    <div className="user-search">
      <h1>GitHub User Search</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}
      {userData && (
        <div className="user-details">
          <h2>
            <a
              href={`https://github.com/${userData.login}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {userData.name || userData.login}
            </a>
          </h2>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            className="avatar"
          />
          <p>
            <strong>Bio:</strong> {userData.bio || "No bio available"}
          </p>
          <p>
            <strong>Location:</strong>{" "}
            {userData.location || "No location available"}
          </p>
          <p>
            <strong>Public Repos:</strong> {userData.public_repos}
          </p>
          <p>
            <strong>Profile URL:</strong>{" "}
            <a
              href={`https://github.com/${userData.login}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`https://github.com/${userData.login}`}
            </a>
          </p>
          <h3>Recent Repos</h3>
          <ul>
            {userData.repos &&
              userData.repos.slice(0, 5).map((repo) => (
                <li key={repo.id}>
                  <h4>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                  </h4>
                  <p>
                    <strong>Description:</strong>{" "}
                    {repo.description || "No description"}
                  </p>
                  <p>
                    <strong>Created At:</strong>{" "}
                    {new Date(repo.created_at).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Last Commit:</strong>{" "}
                    {repo.pushed_at
                      ? new Date(repo.pushed_at).toLocaleDateString()
                      : "No commits"}
                  </p>
                  <h5>Recent Commits</h5>
                  <ul>
                    {repo.commits &&
                      repo.commits.map((commit, index) => (
                        <li key={index}>
                          <p>
                            <strong>Message:</strong> {commit.commit.message}
                          </p>
                          <p>
                            <strong>Date:</strong>{" "}
                            {new Date(
                              commit.commit.committer.date
                            ).toLocaleDateString()}
                          </p>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
