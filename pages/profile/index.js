import React from 'react'; // Importing React
import { Button } from 'react-bootstrap'; // Importing Button component from react-bootstrap
import { useAuth } from '../../utils/context/authContext'; // Importing useAuth hook from authContext
import { signOut } from '../../utils/auth'; // Importing signOut function from auth utilities

// Defining the Profile component
const Profile = () => {
  const { user } = useAuth(); // Using the useAuth hook to retrieve the user object

  // JSX to render the Profile component
  return (
    <>
      <h1>Store: {user.store_name}</h1> {/* Displaying the store name */}
      <h2>Owner: {user.user_name}</h2> {/* Displaying the owner's name */}
      <h4>Contact: {user.email}</h4> {/* Displaying the contact email */}
      <Button variant="danger" onClick={signOut}>
        Sign Out
      </Button> {/* Displaying a "Sign Out" button that calls the signOut function */}
    </>
  );
};

export default Profile; // Exporting the Profile component

// Summary: The component uses the useAuth hook to retrieve the authenticated user object, which contains store information, owner's name, and contact email.  The component renders the store name, owner's name, and contact email using JSX elements.  The component also renders a "Sign Out" button using the Button component from react-bootstrap.  When the "Sign Out" button is clicked, the signOut function is triggered from the utils/auth module to sign the user out of the application.
