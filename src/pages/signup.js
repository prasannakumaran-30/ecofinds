import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({ name:'', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const res = await API.post('/users/register', form);
      alert('Signup successful! Please login.');
      navigate('/login');
    } catch (err) {
      alert('Signup failed');
      console.log(err);
    }
  };

  return (
    <div>
      <Typography variant="h4">Signup</Typography>
      <TextField name="name" label="Name" value={form.name} onChange={handleChange} fullWidth />
      <TextField name="email" label="Email" value={form.email} onChange={handleChange} fullWidth />
      <TextField name="password" label="Password" type="password" value={form.password} onChange={handleChange} fullWidth />
      <Button onClick={handleSubmit}>Signup</Button>
    </div>
  );
}

export default Signup;
