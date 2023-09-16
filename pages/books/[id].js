/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */ // Disable specific ESLint rule for the next line
import React, { useState, useEffect } from 'react'; // Importing React, useState, and useEffect from React
import { useRouter } from 'next/router'; // Importing the router from Next.js
import { getSingleBook } from '../../utils/data/bookData'; // Importing function for fetching book data
import AddToCustomer from '../../components/buttons/addToCustomer'; // Importing the 'AddToCustomer' component

// React functional component for viewing book details
const ViewBook = () => {
  const router = useRouter(); // Router instance from Next.js
  const [bookDetails, setBookDetails] = useState({}); // State for book details
  const { id } = router.query; // Extracting 'id' from the query parameters (primary key for book)

  const bookId = +id; // Convert id to a number

  useEffect(() => {
    // Fetch book details using 'getSingleBook' function based on the extracted 'bookId'
    getSingleBook(bookId).then((bookData) => {
      setBookDetails(bookData); // Update 'bookDetails' state with fetched data
    });
  }, [bookId]); // Re-run effect whenever 'bookId' changes

  useEffect(() => {
    if (bookDetails) {
      const releaseDate = new Date(bookDetails.release_date);

      // Set the timezone to UTC
      releaseDate.setUTCHours(0, 0, 0, 0);

      const formattedReleaseDate = releaseDate.toLocaleDateString('en-US', {
        timeZone: 'UTC', // Set the timezone to UTC
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      if (bookDetails.release_date !== formattedReleaseDate) {
        setBookDetails({ ...bookDetails, release_date: formattedReleaseDate });
      }

      document.title = `${bookDetails.title}`;
    }
  }, [bookDetails]); // Re-run effect whenever 'bookDetails' changes

  const descriptionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black with 70% opacity
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={bookDetails.image_url}
            alt={`Comic book cover of ${bookDetails.title}`}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="col-md-8">
          <h3>Title: {bookDetails.title}</h3>
          <h3>Publisher: {bookDetails.publisher}</h3>
          <h3>Price: ${bookDetails.price}</h3>
          <h3>Release Date: {bookDetails.release_date}</h3>
          <div style={descriptionStyle}>
            <p>Description: {bookDetails.description}</p>
          </div>
          <div className="mb-3">
            <AddToCustomer id={bookId} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component as the default export
export default ViewBook;
