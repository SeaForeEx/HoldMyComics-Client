/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// Disable specific ESLint rules for the next lines of code
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */

// Import necessary dependencies and modules
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap'; // Importing the Card/Button components from react-bootstrap
import { useRouter } from 'next/router'; // Importing the router from Next.js

// React functional component for rendering a book card

//  By listing all the props at the beginning of the component, you provide a clear and concise overview of the expected props for the component. This makes it easier for developers to understand what data is required to properly render the component. It acts as a form of documentation, helping anyone using this component to quickly see what data should be provided.

const BookCard = ({
  id,
  imageUrl,
  title,
}) => {
  const router = useRouter(); // Router instance from Next.js

  // Define a style object for the card's background image
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '300px',
    height: '150px',
    borderRadius: '0',
    border: '3px solid white', // Add a 5px border
    color: 'white',
    textShadow: '2px 2px 4px black',
    margin: '5px',
    cursor: 'pointer',
  };

  const h5Style = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '5px',
    cursor: 'pointer',
    margin: '0',
  };

  return (
    <Card
      style={cardStyle}
      onClick={() => {
        router.push(`/books/${id}`);
      }}
    >
      <Card.Body>
        <h5 style={h5Style}>
          {title}
        </h5>
      </Card.Body>
    </Card>
  );
};

BookCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookCard;

// By declaring the expected props with their corresponding types and whether they are required, you're using PropTypes to validate that the props you receive are of the correct type. This adds a layer of safety to your application, ensuring that if someone uses your component incorrectly (e.g., providing a string where a number is expected), they will see a warning in the console, making it easier to catch potential bugs early.
