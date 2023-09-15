/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { searchBooks } from '../utils/data/bookData'; // Importing a function to search for books
import BookCard from '../components/cards/BookCard'; // Importing a custom 'BookCard' component

function SearchResults() {
  // State variables to manage search results and input field value
  const [books, setBooks] = useState([]); // Holds the list of books found
  const [searchQuery, setSearchQuery] = useState(''); // Holds the search query
  const [noResults, setNoResults] = useState(false); // Flag for indicating no search results

  // Function to display search results
  const displayResults = () => {
    searchBooks(searchQuery) // Calls the 'searchBooks' function with the search query
      .then((data) => {
        if (data.length === 0) {
          // If no books found, set the 'noResults' flag to true
          setNoResults(true);
        } else {
          // If books found, reset the 'noResults' flag, update 'books' with the results
          setNoResults(false);
          setBooks(data);
        }
      })
      .catch((error) => {
        // Handle errors when fetching books
        console.error('Error fetching books:', error);
        setNoResults(true); // Set the 'noResults' flag to true in case of an error
      });
  };

  // Event handler for changes in the search input field
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update 'searchQuery' with the input field value
  };

  // Event handler for the search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    displayResults(); // Call the 'displayResults' function to fetch and display search results
  };

  // useEffect hook to set the document title when the component mounts
  useEffect(() => {
    document.title = 'SEARCH BOOKS!'; // Set the document title to 'SEARCH BOOKS!'
  }, []);

  return (
    <div>
      {/* Search form and input field */}
      <h1>Search Upcoming Releases</h1>
      <Form onSubmit={handleSearchSubmit}>
        <Form.Control
          type="text"
          placeholder="Search your records"
          value={searchQuery} // Bind the input field value to 'searchQuery'
          onChange={handleSearchChange} // Attach the event handler for input changes
        />
        <Button type="submit">Submit</Button>
      </Form>

      {/* Conditional rendering based on search results */}
      {noResults ? (
        // Displayed when there are no search results
        <p>No search results</p>
      ) : (
        // Displayed when there are search results
        <div className="row">
          {/* Loop through 'books' array and render each book */}
          {books.map((book) => (
            <div
              key={`book--${book.id}`} // Unique 'key' for each book element
              className="col-md-4" // Column width for each book card
              style={{ margin: '10px' }} // Margin around each book card
            >
              {/* Render the 'BookCard' component with book details */}
              <BookCard
                id={book.id}
                imageUrl={book.image_url}
                title={book.title}
                onUpdate={displayResults} // Pass a callback function for updating results
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
