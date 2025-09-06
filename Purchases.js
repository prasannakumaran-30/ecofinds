import React from "react";
import { dummyPurchases } from "../dummyData";
import { Card, CardContent, Typography } from "@mui/material";

const Purchases = () => {
  return (
    <div>
      <h1>Purchases</h1>
      {dummyPurchases.map((item) => (
        <Card key={item.id} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Typography>{item.title}</Typography>
            <Typography>₹{item.price}</Typography>
            <Typography>Date: {item.date}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Purchases;
