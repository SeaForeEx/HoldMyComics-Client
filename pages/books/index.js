/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { getAllBooks } from '../../utils/data/bookData';

function Books() {
  const [books, setBooks] = useState([]);

  const displayBooks = () => {
    getAllBooks()
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching records:', error);
      });
  };
  useEffect(() => {
    displayBooks();
  }, []);

  return (
    <article className="text-center my-4" id="books">
      <h1 style={{ marginTop: '40px' }}>Books</h1>

      <div>
        {books.map((book) => (
          <section
            key={`book--${book.id}`}
            className="book"
            style={{ margin: '40px' }}
            id="book-section"
          >
            <BookCard
              id={book.id}
              imageUrl={book.image_url}
              publisher={book.publisher}
              title={book.title}
              price={book.price}
              description={book.description}
              onUpdate={displayBooks}
            />
          </section>
        ))}
      </div>
    </article>
  );
}

export default Books;
