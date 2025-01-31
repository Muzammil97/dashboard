import React, { useEffect, useState } from "react";
import { Container, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => setProduct(response.data));
  }, [id]);

  return (
    <Container>
      {product && (
        <Card>
          <CardMedia component="img" height="300" image={product.image} alt={product.title} />
          <CardContent>
            <Typography variant="h5">{product.title}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="h6">Price: ${product.price}</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}

export default ProductDetail;
