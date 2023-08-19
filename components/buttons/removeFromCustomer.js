// Import necessary dependencies and modules
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'; // Importing the Button component from react-bootstrap
import { removeBookFromCustomer } from '../../utils/data/bookData'; // Importing function to remove a book from a customer

// React functional component for removing a book from a customer
export default function RemoveFromCustomer({ customerBookObj }) {
  // Event handler for removing the book from the customer
  const removeStudent = () => {
    // Call the 'removeBookFromCustomer' function to remove the book using its ID
    removeBookFromCustomer(customerBookObj.bookId);
  };

  // JSX to render the component
  return (
    <Button onClick={removeStudent}>Remove</Button>
  );
}

// PropTypes for the component's props
RemoveFromCustomer.propTypes = {
  customerBookObj: PropTypes.shape({
    bookId: PropTypes.number,
  }).isRequired, // 'customerBookObj' is a required object with 'bookId' as a required number property
};
