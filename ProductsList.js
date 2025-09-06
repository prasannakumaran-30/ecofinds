import React from "react";
import { Grid, Card, CardContent, Typography, Button, CardMedia } from "@mui/material";
import { dummyProducts } from "../dummyData";

const ProductsList = () => {
  return (
    <div>
      <h1>Products</h1>
      <Grid container spacing={2}>
        {dummyProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.imageUrl}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography>₹{product.price}</Typography>
                <Typography>{product.category}</Typography>
                <Button variant="contained" size="small">View</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsList;
