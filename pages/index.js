import React, { useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  useEffect(() => {
    document.title = 'HOLD MY COMICS!'; // Set the desired title
  }, []);
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Put a carousel of weekly titles here?</h1>
      <br />
      <br />
      <br />
      <h1>Welcome To Hold My Comics, {user.user_name}!</h1>
    </div>
  );
}

export default Home;
