// Disable specific ESLint rules for the next lines of code
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */

// Import necessary dependencies and modules
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap'; // Importing the Card/Button components from react-bootstrap
import { useRouter } from 'next/router'; // Importing the router from Next.js

// React functional component for rendering a book card

//  By listing all the props at the beginning of the component, you provide a clear and concise overview of the expected props for the component. This makes it easier for developers to understand what data is required to properly render the component. It acts as a form of documentation, helping anyone using this component to quickly see what data should be provided.

const BookCard = ({
  id,
  imageUrl,
  title,
}) => {
  const router = useRouter(); // Router instance from Next.js

  // JSX to render the book card
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <img
            src={imageUrl}
            alt={`Comic book cover of ${title}`}
            style={{ width: '200px', height: 'auto' }}
          /> {/* Displaying the book cover */}
          <h5>{title}</h5> {/* Displaying the book title */}
          {/* Button to view more details of the book */}
          <Button
            style={{ margin: '10px', backgroundColor: '#003049' }}
            onClick={() => {
              // Navigate to the detailed view of the book when clicked
              router.push(`/books/${id}`);
            }}
          >View
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

// PropTypes for the component's props
BookCard.propTypes = {
  id: PropTypes.number.isRequired, // 'id' is a required number
  imageUrl: PropTypes.string.isRequired, // 'imageUrl' is a required string
  title: PropTypes.string.isRequired, // 'title' is a required string
};

export default BookCard;

// By declaring the expected props with their corresponding types and whether they are required, you're using PropTypes to validate that the props you receive are of the correct type. This adds a layer of safety to your application, ensuring that if someone uses your component incorrectly (e.g., providing a string where a number is expected), they will see a warning in the console, making it easier to catch potential bugs early.
