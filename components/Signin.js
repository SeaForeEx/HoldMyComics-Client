/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn } from '../utils/auth';

function Signin() {
  const router = useRouter(); // Initialize the router
  useEffect(() => {
    document.title = 'WELCOME!'; // Set the desired title
  }, []);
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
      }}
    >
      <div
        onClick={() => {
          signIn(router); // Pass the router as an argument to the signIn function
        }}
        style={{ cursor: 'pointer' }}
      >
        <img
          src="https://i.imgur.com/HmnFZLC.png" // Replace with the actual image source URL
          alt="Sign In"
          width="750" // Set the width of the image
        />
      </div>
    </div>
  );
}

export default Signin;
