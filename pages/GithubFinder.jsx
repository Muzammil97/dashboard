import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Avatar, CircularProgress } from "@mui/material";
import axios from "axios";

const GithubFinder = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGithubUser = async () => {
    if (!username.trim()) return;
    setLoading(true);
    setError("");
    
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      setError("User not found!");
      setUserData(null);
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        GitHub User Finder
      </Typography>
      
      <TextField 
        label="Enter GitHub Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: "10px", width: "300px" }}
      />
      
      <br />

      <Button 
        variant="contained" 
        color="primary" 
        onClick={fetchGithubUser}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Search"}
      </Button>

      {error && <Typography color="error" style={{ marginTop: "10px" }}>{error}</Typography>}

      {userData && (
        <Card style={{ marginTop: "20px", padding: "15px", display: "inline-block", textAlign: "left" }}>
          <CardContent>
            <Avatar src={userData.avatar_url} alt={userData.login} sx={{ width: 100, height: 100, margin: "auto" }} />
            <Typography variant="h5">{userData.name || "No Name Provided"}</Typography>
            <Typography variant="subtitle1">@{userData.login}</Typography>
            <Typography variant="body2">Followers: {userData.followers} | Following: {userData.following}</Typography>
            <Typography variant="body2">Repositories: {userData.public_repos}</Typography>
            <Typography variant="body2">Location: {userData.location || "Not Available"}</Typography>
            <Typography variant="body2">
              Profile: <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GithubFinder;
