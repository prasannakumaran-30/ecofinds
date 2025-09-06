import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, price, category, description });
    alert("Product added (dummy)");
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin="normal" />
        <TextField label="Price" value={price} onChange={(e) => setPrice(e.target.value)} fullWidth margin="normal" />
        <TextField label="Category" value={category} onChange={(e) => setCategory(e.target.value)} fullWidth margin="normal" />
        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth margin="normal" multiline rows={3} />
        <Button type="submit" variant="contained">Add Product</Button>
      </form>
    </div>
  );
};

export default AddProduct;
