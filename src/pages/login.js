import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const res = await API.post('/users/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.user.id);
      navigate('/profile'); // redirect after login
    } catch (err) {
      alert('Login failed');
      console.log(err);
    }
  };

  return (
    <div>
      <Typography variant="h4">Login</Typography>
      <TextField name="email" label="Email" value={form.email} onChange={handleChange} fullWidth />
      <TextField name="password" label="Password" type="password" value={form.password} onChange={handleChange} fullWidth />
      <Button onClick={handleSubmit}>Login</Button>
    </div>
  );
}

export default Login;
