import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => setUser(response.data));
  }, [id]);

  return (
    <Container>
      {user && (
        <>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="body1">{user.email}</Typography>
        </>
      )}
    </Container>
  );
}

export default UserDetail;
