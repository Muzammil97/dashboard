import React, { useEffect, useState } from "react";
import { Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => setUsers(response.data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" mt={4}>Users</Typography>
      <List>
        {users.map((user) => (
          <ListItem button key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UsersPage;
