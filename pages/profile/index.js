import React from 'react';
import { useAuth } from '../../utils/context/authContext';

const Profile = () => {
  const { user } = useAuth(); // retrieves user object from the useAuth hook

  return (
    <>
      <h1>Store: {user.store_name}</h1>
      <h2>Owner: {user.user_name}</h2>
      <h4>Contact: {user.email}</h4>
    </>
  );
};

export default Profile;
