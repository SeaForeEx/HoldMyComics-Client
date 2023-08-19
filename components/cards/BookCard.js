// Disable specific ESLint rules for the next lines of code
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */

// Import necessary dependencies and modules
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'; // Importing the Card component from react-bootstrap
import { Button } from 'react-bootstrap'; // Importing the Button component from react-bootstrap
import { useRouter } from 'next/router'; // Importing the router from Next.js
import { getSingleBook } from '../../utils/data/bookData'; // Importing function to get details of a single book

// React functional component for rendering a book card

//  By listing all the props at the beginning of the component, you provide a clear and concise overview of the expected props for the component. This makes it easier for developers to understand what data is required to properly render the component. It acts as a form of documentation, helping anyone using this component to quickly see what data should be provided.

const BookCard = ({
  id,
  imageUrl,
  publisher,
  title,
  price,
}) => {
  const router = useRouter(); // Router instance from Next.js

  // State variable to store book details
  const [, setBookDetails] = useState({});
  useEffect(() => {
    // Fetch the details of a single book by its 'id' and update 'bookDetails' state
    getSingleBook(id).then((bookData) => {
      setBookDetails(bookData);
    });
  }, [id]);

  // JSX to render the book card
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <img src={imageUrl} alt="comic book cover" /> {/* Displaying the book cover */}
          <h5>{title}</h5> {/* Displaying the book title */}
          <p>{publisher}</p> {/* Displaying the book publisher */}
          <p>{price}</p> {/* Displaying the book price */}
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
  publisher: PropTypes.string.isRequired, // 'publisher' is a required string
  price: PropTypes.number.isRequired, // 'price' is a required number
};

export default BookCard;

// By declaring the expected props with their corresponding types and whether they are required, you're using PropTypes to validate that the props you receive are of the correct type. This adds a layer of safety to your application, ensuring that if someone uses your component incorrectly (e.g., providing a string where a number is expected), they will see a warning in the console, making it easier to catch potential bugs early.
