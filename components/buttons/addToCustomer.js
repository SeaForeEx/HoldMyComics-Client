import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { addBookToCustomer } from '../../utils/data/bookData';
import { getCustomersByStoreId } from '../../utils/data/customerData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  customer_id: 0,
};

export default function AddToCustomer({ id, obj }) {
  const [customers, setCustomers] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getCustomersByStoreId(user.id).then(setCustomers);
    if (obj.id) {
      setCurrentCustomer({
        id: obj.id,
        customerId: obj.customer_id,
        bookId: obj.book_id,
      });
    }
  }, [obj, customers, user.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      customerId: Number(currentCustomer.customerId),
      bookId: Number(id),
    };
    addBookToCustomer(id, payload).then(() => router.push(`/customers/${currentCustomer.customerId}`));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingSelect" label="Customer">
        <Form.Select
          aria-label="Customer"
          name="customerId"
          className="mb-3"
          onChange={handleChange}
          value={currentCustomer.customerId}
          required
        >
          <option value="">Select a Customer</option>
          {
        customers.map((customer) => (
          <option
            key={customer.id}
            value={customer.id}
          >
            {customer.customer_name}
          </option>
        ))
      }
        </Form.Select>
      </FloatingLabel>
      <div>
        <Button type="submit">Add To Customer</Button>
      </div>
    </Form>
  );
}

AddToCustomer.propTypes = {
  id: PropTypes.number.isRequired,
  obj: PropTypes.shape({
    id: PropTypes.number,
    customer_id: PropTypes.number,
    book_id: PropTypes.number,
  }),
};

AddToCustomer.defaultProps = {
  obj: initialState,
};
