/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { searchBooks } from '../utils/data/bookData';
import BookCard from '../components/cards/BookCard';

function SearchResults() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const displayResults = () => {
    searchBooks(searchQuery)
      .then((data) => {
        if (data.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
          setBooks(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setNoResults(true);
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    displayResults();
  };

  useEffect(() => {
    document.title = 'SEARCH BOOKS!';
  }, []);

  return (
    <div>
      <h1>Search Upcoming Releases</h1>
      <Form onSubmit={handleSearchSubmit}>
        <Form.Control
          type="text"
          placeholder="Search your records"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
      {noResults ? (
        <p>No search results</p>
      ) : (
        <div className="row">
          {/* Loop through 'books' array and render each book */}
          {books.map((book) => (
            <div
              key={`book--${book.id}`}
              className="col-md-4" // Adjust the column width as needed
              style={{ margin: '10px' }}
            >
              {/* Render the 'BookCard' component with book details */}
              <BookCard
                id={book.id}
                imageUrl={book.image_url}
                title={book.title}
                onUpdate={displayResults}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
