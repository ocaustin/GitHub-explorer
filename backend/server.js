const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");
const helmet = require("helmet"); // Import Helmet for security

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests
app.use(helmet()); // Apply Helmet middleware for security

// GitHub API route
app.get("/api/users/:username", async (req, res) => {
  const { username } = req.params;

  try {
    // Fetch user data from GitHub API
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    // Check if the user response is successful
    if (!userResponse.ok) {
      return res.status(userResponse.status).json({ error: "User not found" });
    }

    const userData = await userResponse.json();

    // Fetch user repos from GitHub API
    const reposResponse = await fetch(userData.repos_url, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    const reposData = await reposResponse.json();

    // Fetch the last 5 commits for each repo
    const reposWithCommits = await Promise.all(
      reposData.map(async (repo) => {
        const commitsResponse = await fetch(
          `${repo.commits_url.replace("{/sha}", "")}?per_page=5`,
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
          }
        );

        const commitsData = await commitsResponse.json();
        return {
          ...repo,
          commits: commitsData,
        };
      })
    );

    // Send the user data along with repo details and commits
    res.json({
      ...userData,
      repos: reposWithCommits,
    });
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error);
    res.status(500).json({ error: "Failed to fetch data from GitHub API" });
  }
});

// Root URL handler
app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

// Serve React app in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // Serve index.html for non-API routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
