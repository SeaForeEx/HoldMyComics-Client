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
    // Update document title with the book's title when 'bookDetails' changes
    if (bookDetails) {
      // Convert the release_date string to a JavaScript Date object
      const releaseDate = new Date(bookDetails.release_date);

      // Format the date as "Month Day, Year"
      const formattedReleaseDate = releaseDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      document.title = `${bookDetails.title}`;
      setBookDetails({ ...bookDetails, release_date: formattedReleaseDate }); // Update bookDetails with the formatted release date
    }
  }, [bookDetails]); // Re-run effect whenever 'bookDetails' changes

  return (
    <>
      {/* Container for book details */}
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          {/* Display book cover image */}
          <img
            src={bookDetails.image_url}
            alt={`Comic book cover of ${bookDetails.title}`}
            style={{ width: '300px', height: 'auto' }}
          /> {/* Displaying the book cover */}
          <h3>
            Title: {bookDetails.title}
          </h3>
          {/* Display book publisher */}
          <h3>Publisher: {bookDetails.publisher}</h3>
          {/* Display book price */}
          <h3>Price: ${bookDetails.price}</h3>
          {/* Display book release date */}
          <h3>Release Date: {bookDetails.release_date}</h3>
          {/* Display book description */}
          <p>Description: {bookDetails.description}</p>
        </div>
        {/* Include the 'AddToCustomer' component and pass the 'id' prop */}
        <AddToCustomer id={bookId} />
      </div>
    </>
  );
};

// Export the component as the default export
export default ViewBook;
