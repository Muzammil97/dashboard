import React, { useEffect, useState } from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => setProducts(response.data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" textAlign="center" mt={4}>Products</Typography>
      <Grid container spacing={3} mt={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia component="img" height="200" image={product.image} alt={product.title} />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Button variant="contained" fullWidth onClick={() => navigate(`/products/${product.id}`)}>View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductsPage;
