import React from "react";
import { useParams } from "react-router-dom";
import { dummyProducts } from "../dummyData";
import { Typography, Button, Card, CardContent, CardMedia } from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <Card>
      <CardMedia component="img" height="300" image={product.imageUrl} alt={product.title} />
      <CardContent>
        <Typography variant="h4">{product.title}</Typography>
        <Typography>₹{product.price}</Typography>
        <Typography>{product.category}</Typography>
        <Typography>{product.description}</Typography>
        <Button variant="contained">Add to Cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
