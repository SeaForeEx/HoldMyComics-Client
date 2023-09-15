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

  return (
    <>
      {/* Container for book details */}
      <div className="mt-5 d-flex flex-wrap">
        {/* Left column for book cover image */}
        <div className="d-flex flex-column">
          {/* Display book cover image */}
          <img
            src={bookDetails.image_url}
            alt={`Comic book cover of ${bookDetails.title}`}
            style={{ width: '300px', height: 'auto' }}
          />
        </div>
        {/* Right column for book details */}
        <div className="d-flex flex-column">
          <h3>Title: {bookDetails.title}</h3>
          {/* Display book publisher */}
          <h3>Publisher: {bookDetails.publisher}</h3>
          {/* Display book price */}
          <h3>Price: ${bookDetails.price}</h3>
          {/* Display book release date */}
          <h3>Release Date: {bookDetails.release_date}</h3>
          {/* Display book description */}
          <p>Description: {bookDetails.description}</p>
          {/* Include the 'AddToCustomer' component and pass the 'id' prop */}
          <AddToCustomer id={bookId} />
        </div>
      </div>
    </>
  );
};

// Export the component as the default export
export default ViewBook;
