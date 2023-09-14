/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { searchBooks } from '../utils/data/bookData';
import BookCard from '../components/cards/BookCard';

function SearchResults() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const displayResults = () => {
    searchBooks(searchQuery)
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    document.title = 'SEARCH BOOKS!';
  }, []);

  useEffect(() => {
    displayResults();
  }, [searchQuery]);

  // Calculate the indexes for the current page
  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const displayedBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div>
      <h1>Search Comic Books to Order This Month</h1>
      <Form>
        <Form.Control
          type="text"
          placeholder="Search your records"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Form>
      {/* Loop through 'books' array and render each book */}
      {displayedBooks.map((book) => (
        <section
          key={`book--${book.id}`} // Using book's ID as the key
          className="book"
          style={{ margin: '10px', flex: '0 0 calc(33.33% - 20px)', height: 'auto' }}
        >
          {/* Render the 'BookCard' component with book details */}
          <BookCard
            id={book.id}
            imageUrl={book.image_url}
            title={book.title}
            onUpdate={displayResults}
          />
        </section>
      ))}

      {/* Pagination component */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(books.length / itemsPerPage) }, (_, index) => index + 1).map((page) => (
            <li
              key={page}
              className={currentPage === page ? 'page-item active' : 'page-item'}
            >
              <Button className="page-link" onClick={() => handlePageChange(page)}>
                {page}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SearchResults;
