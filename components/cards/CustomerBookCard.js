import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { removeBookFromCustomer } from '../../utils/data/bookData';

function CustomerBookCard({ customerBookObj, onUpdate }) {
  const customerId = customerBookObj.customer.id;
  const bookId = customerBookObj.book.id;
  const removeBook = () => {
    removeBookFromCustomer(bookId, customerId).then(() => onUpdate());
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="card-design">
      <Card.Img variant="top" src={customerBookObj.book.image_url} alt={customerBookObj.book.title} style={{ height: '200px' }} />
      <Card.Body>
        <Card.Title>{customerBookObj.book.title}</Card.Title>
        <h3>{customerBookObj.book.publisher}</h3>
        <Button onClick={removeBook}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

CustomerBookCard.propTypes = {
  id: PropTypes.number.isRequired,
  customerBookObj: PropTypes.shape({
    book: PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      publisher: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
    customer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CustomerBookCard;
