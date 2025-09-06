import React from "react";
import { dummyCart } from "../dummyData";
import { Card, CardContent, Typography, Button } from "@mui/material";

const Cart = () => {
  return (
    <div>
      <h1>Cart</h1>
      {dummyCart.map((item) => (
        <Card key={item.id} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Typography>{item.title}</Typography>
            <Typography>₹{item.price} x {item.quantity}</Typography>
            <Button variant="contained" color="error">Remove</Button>
          </CardContent>
        </Card>
      ))}
      <Button variant="contained" color="success">Checkout</Button>
    </div>
  );
};

export default Cart;
