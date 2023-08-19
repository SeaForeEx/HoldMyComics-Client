/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getSingleBook } from '../../utils/data/bookData';

const BookCard = ({
  id,
  imageUrl,
  publisher,
  title,
  price,
}) => {
  const router = useRouter();

  const [, setBookDetails] = useState({});
  useEffect(() => {
    getSingleBook(id).then((bookData) => {
      setBookDetails(bookData);
    });
  }, [id]);

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <img src={imageUrl} alt="comic book cover" />
          <h5>{title}</h5>
          <p>{publisher}</p>
          <p>{price}</p>
          <Button
            style={{ margin: '10px', backgroundColor: '#003049' }}
            onClick={() => {
              router.push(`/books/${id}`);
            }}
          >View
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

BookCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default BookCard;
