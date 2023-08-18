import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createCustomer, updateCustomer } from '../../utils/data/customerData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  storeId: 0,
  customerName: '',
  email: '',
};

const CustomerForm = ({ obj }) => {
  const { user } = useAuth();

  const [currentCustomer, setCurrentCustomer] = useState({
  });

  const router = useRouter();

  useEffect(() => {
    if (obj.id) {
      setCurrentCustomer({
        id: obj.id,
        storeId: user.id,
        customerName: obj.customer_name,
        email: obj.email,
      });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.id) {
      const customerUpdate = {
        id: currentCustomer.id,
        storeId: user.id,
        customerName: currentCustomer.customerName,
        email: currentCustomer.email,
      };

      updateCustomer(customerUpdate)
        .then(() => router.push(`/customers/${currentCustomer.id}`));
    } else {
      const customer = {
        id: currentCustomer.id,
        storeId: user.id,
        customerName: currentCustomer.customerName,
        email: currentCustomer.email,
      };
      createCustomer(customer)
        .then((newCustomer) => router.push(`/customers/${newCustomer.id}`));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control name="customerName" required value={currentCustomer.customerName} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Customer Email</Form.Label>
          <Form.Control name="email" required value={currentCustomer.email} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

CustomerForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    store_id: PropTypes.number,
    customer_name: PropTypes.string,
    email: PropTypes.string,
  }),
};

CustomerForm.defaultProps = {
  obj: initialState,
};

export default CustomerForm;
