import { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import API from '../utils/api';

function Profile() {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    API.get(`/users/${userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleUpdate = () => {
    const userId = localStorage.getItem('userId');
    API.put(`/users/${userId}`, user)
      .then(() => alert('Profile updated!'))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Typography variant="h4">Profile</Typography>
      <TextField name="name" label="Name" value={user.name} onChange={handleChange} fullWidth />
      <TextField name="email" label="Email" value={user.email} onChange={handleChange} fullWidth />
      <Button onClick={handleUpdate}>Update Profile</Button>
    </div>
  );
}

export default Profile;
