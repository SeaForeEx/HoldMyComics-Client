// Disable specific ESLint rule for the next line of code
/* eslint-disable jsx-a11y/anchor-is-valid */

// Import necessary dependencies and modules
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'; // Importing the Card component from react-bootstrap
import { Button } from 'react-bootstrap'; // Importing the Button component from react-bootstrap
import { useRouter } from 'next/router'; // Importing the router from Next.js
import { deleteCustomer } from '../../utils/data/customerData'; // Importing functions for customer data manipulation

// React functional component for rendering a customer card
const CustomerCard = ({
  id,
  customerName,
  email,
  onUpdate,
}) => {
  const router = useRouter(); // Router instance from Next.js

  // Event handler for deleting a customer
  const deleteThisCustomer = () => {
    // Display a confirmation dialog and proceed if the user confirms
    if (window.confirm(`Delete ${customerName}?`)) {
      // Call the 'deleteCustomer' function and update after completion
      deleteCustomer(id).then(() => onUpdate());
    }
  };

  // JSX to render the customer card
  return (
    <>
      <Card
        className="text-center"
        style={{
          backgroundImage: 'url("https://i.ebayimg.com/images/g/R~MAAOSwcxpj9VOi/s-l1200.webp")', backgroundColor: 'black', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'white', textShadow: '2px 2px 4px black',
        }}
      >
        <Card.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}>
          <h3>{customerName}</h3> {/* Displaying the customer's name */}
          <p>{email}</p> {/* Displaying the customer's email */}
          {/* Button to view more details of the customer */}
          <Button
            style={{ margin: '10px', backgroundColor: '#003049' }}
            onClick={() => {
              // Navigate to the detailed view of the customer when clicked
              router.push(`/customers/${id}`);
            }}
          >View
          </Button>
          {/* Button to edit the customer's details */}
          <Button
            style={{ margin: '10px', backgroundColor: '#003049' }}
            onClick={() => {
              // Navigate to the edit view of the customer when clicked
              router.push(`/customers/edit/${id}`);
            }}
          >
            Edit
          </Button>
          {/* Button to delete the customer */}
          <Button
            style={{ margin: '10px', backgroundColor: '#003049' }}
            onClick={deleteThisCustomer}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

// PropTypes for the component's props
CustomerCard.propTypes = {
  id: PropTypes.number.isRequired, // 'id' is a required number
  customerName: PropTypes.string.isRequired, // 'customerName' is a required string
  email: PropTypes.string.isRequired, // 'email' is a required string
  onUpdate: PropTypes.func.isRequired, // 'onUpdate' is a required function
};

export default CustomerCard;
