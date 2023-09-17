/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable @next/next/no-img-element */
// Import necessary dependencies and modules
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap'; // Importing Card and Button components from react-bootstrap
import { FaTrash } from 'react-icons/fa';
import { removeBookFromCustomer } from '../../utils/data/bookData'; // Importing function to remove a book from a customer

// React functional component for rendering a customer's book card
function CustomerBookCard({ customerBookObj, onUpdate }) {
  // Extracting customerId and bookId from customerBookObj to make code look more legible
  const customerId = customerBookObj.customer.id;
  const bookId = customerBookObj.book.id;

  // Event handler for removing a book from the customer
  const removeBook = () => {
    // Call the 'removeBookFromCustomer' function to remove the book using bookId and customerId
    removeBookFromCustomer(bookId, customerId).then(() => onUpdate());
  };

  // Define a style object for the card's background image
  const cardStyle = {
    backgroundImage: `url(${customerBookObj.book.image_url})`, // Set the background image URL
    backgroundSize: 'cover', // Adjust background size to cover the card
    backgroundRepeat: 'no-repeat', // Prevent background image repetition
    backgroundPosition: 'center', // Center the background image
    width: '300px', // Set a fixed width for the card
    height: '150px', // Set a fixed height for the card
    borderRadius: '0',
    border: '3px solid white', // Add a 5px border
    color: 'white',
    textShadow: '2px 2px 4px black',
    margin: '5px',
  };

  const h5Style = {
    position: 'absolute', // Position the 'h5' element absolutely
    top: '0', // Place it at the top of the card
    left: '0', // Place it at the left edge of the card
    width: '100%', // Make it stretch the whole width of the card
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '5px',
  };

  // JSX to render the customer's book card
  return (
    <div>
      <Card style={cardStyle}>
        <Card.Body>
          <h5 style={h5Style}>{customerBookObj.book.title}</h5>
          <div
            style={{
              position: 'absolute',
              bottom: '5px', // Adjust the bottom distance as needed
              right: '5px', // Adjust the right distance as needed
            }}
          >
            <FaTrash
              onClick={removeBook}
              style={{
                fontSize: '36px',
                color: 'white',
                backgroundColor: 'black',
                display: 'inline-block', // Ensure the div only takes up the space of its content
                padding: '5px', // Add some padding for better visual appearance
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

// PropTypes for the component's props
CustomerBookCard.propTypes = {
  // id: PropTypes.number.isRequired,
  customerBookObj: PropTypes.shape({
    book: PropTypes.shape({
      image_url: PropTypes.string.isRequired, // 'imageUrl' is a required string
      publisher: PropTypes.string.isRequired, // 'publisher' is a required string
      title: PropTypes.string.isRequired, // 'title' is a required string
      id: PropTypes.number.isRequired, // 'id' is a required number
    }),
    customer: PropTypes.shape({
      id: PropTypes.number, // 'id' is a number
    }),
  }).isRequired, // 'customerBookObj' is a required object with specific nested shapes
  onUpdate: PropTypes.func.isRequired, // 'onUpdate' is a required function
};

export default CustomerBookCard;

// The onUpdate function in the CustomerBookCard component serves as a callback mechanism to inform the parent component when a book has been successfully removed from the customer. It provides a way for the parent component to respond to changes triggered by actions within the child component.
