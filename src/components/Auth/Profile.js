import React, { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../../services/api';

const Profile = () => {
  const [profile, setProfile] = useState({ username: '', email: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await getProfile();
        setProfile(data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(profile);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={profile.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default Profile;
