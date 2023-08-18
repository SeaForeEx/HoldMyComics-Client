import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSingleBook } from '../../utils/data/bookData';

const ViewBook = () => {
  const router = useRouter();
  const [bookDetails, setBookDetails] = useState({});
  const { id } = router.query;

  useEffect(() => {
    getSingleBook(id).then((bookData) => {
      setBookDetails(bookData);
    });
  }, [id]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <h3>
            Title: {bookDetails.title}
          </h3>
          <h3>Publisher: {bookDetails.publisher}</h3>
          <h4>Price: ${bookDetails.price}</h4>
          <p>Description: {bookDetails.description}</p>
        </div>
      </div>
    </>
  );
};

export default ViewBook;
