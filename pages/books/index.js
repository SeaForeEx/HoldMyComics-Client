/* eslint-disable react-hooks/exhaustive-deps */ // Disable specific ESLint rule for the next line
import React, { useState, useEffect } from 'react'; // Importing React, useState, and useEffect from React
import BookCard from '../../components/cards/BookCard'; // Importing the 'BookCard' component
import { getAllBooks } from '../../utils/data/bookData'; // Importing function to fetch all books

// React functional component for displaying a list of books
function Books() {
  const [books, setBooks] = useState([]); // State to hold the list of books

  // Function to fetch and display books
  const displayBooks = () => {
    getAllBooks()
      .then((data) => {
        setBooks(data); // Update the 'books' state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching records:', error);
      });
  };

  // Effect to display books when the component mounts
  useEffect(() => {
    displayBooks(); // Calling 'displayBooks' to fetch and update book data
  }, []);

  // JSX to render the list of books
  return (
    <article className="text-center my-4" id="books">
      <h1 style={{ marginTop: '40px' }}>Books</h1>

      <div>
        <div className="d-flex flex-wrap">
          {/* Loop through 'books' array and render each book */}
          {books.map((book) => (
            <section
              key={`book--${book.id}`} // Using book's ID as the key
              className="book"
              style={{ margin: '10px' }}
            >
              {/* Render the 'BookCard' component with book details */}
              <BookCard
                id={book.id}
                imageUrl={book.image_url}
                publisher={book.publisher}
                title={book.title}
                price={book.price}
                description={book.description}
                onUpdate={displayBooks} // Pass 'displayBooks' as a prop for updating
              />
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

// Export the component as the default export
export default Books;

// Passing the displayBooks function as a prop to the BookCard component allows you to trigger a refresh of the book list when an action is performed within the BookCard component that requires updating the book data. It  allows for better communication and coordination between components. It enables the BookCard component to trigger an update in the parent Books component when needed, ensuring that changes in the child component are reflected in the overall application state.

// Parent: 'Books' - It displays a list of books, fetches the book data and manages the state of the book list. It renders the BookCard components for each book.
// Child: 'BookCard' - It represents an individual book card. It receives book details as props and displays them.

// The parent Books component fetches the book data using the getAllBooks function, stores it in the books state, and passes the relevant book details to each BookCard child component through props. This allows the BookCard components to display individual book information and also trigger updates in the parent component when necessary.
