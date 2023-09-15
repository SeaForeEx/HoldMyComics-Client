/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import { signIn } from '../utils/auth';

function Signin() {
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
      <div onClick={signIn} style={{ cursor: 'pointer' }}>
        <img
          src="https://i.imgur.com/KaSdaa6.png" // Replace with the actual image source URL
          alt="Sign In"
          width="650" // Set the width of the image
        />
      </div>
    </div>
  );
}

export default Signin;
