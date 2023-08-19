import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { signOut } from '../../utils/auth';

const Profile = () => {
  const { user } = useAuth(); // retrieves user object from the useAuth hook

  return (
    <>
      <h1>Store: {user.store_name}</h1>
      <h2>Owner: {user.user_name}</h2>
      <h4>Contact: {user.email}</h4>
      <Button variant="danger" onClick={signOut}>
        Sign Out
      </Button>
    </>
  );
};

export default Profile;
