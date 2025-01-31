import React from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Box mt={5} textAlign="center">
        <Typography variant="h4" gutterBottom>Dashboard</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/products")} sx={{ m: 1 }}>
          Products
        </Button>
        <Button variant="contained" color="secondary" onClick={() => navigate("/users")} sx={{ m: 1 }}>
          Users
        </Button>
        <Button variant="contained" color="success" onClick={() => navigate("/github-finder")} sx={{ m: 1 }}>
          GitHub Finder
        </Button>
      </Box>
    </Container>
  );
}

export default MainPage;
