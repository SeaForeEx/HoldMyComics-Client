/* eslint-disable react-hooks/exhaustive-deps */
// Import necessary dependencies and modules
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FloatingLabel } from 'react-bootstrap'; // Importing UI components from react-bootstrap
import { useRouter } from 'next/router'; // Importing the router from Next.js
import { addBookToCustomer } from '../../utils/data/bookData'; // Importing a function to add a book to a customer
import { getCustomersByStoreId } from '../../utils/data/customerData'; // Importing a function to get customers by store ID
import { useAuth } from '../../utils/context/authContext'; // Importing authentication context

// Initial state for the current customer
const initialState = {
  customer_id: 0,
};

// React functional component
export default function AddToCustomer({ id, obj }) {
  // State variables
  const [customers, setCustomers] = useState([]); // State for storing customer data
  const [currentCustomer, setCurrentCustomer] = useState(initialState); // State for the current customer
  const router = useRouter(); // Router instance from Next.js
  const { user } = useAuth(); // Using the user object from the authentication context

  // Effect that runs when the component mounts or when 'obj', 'customers', or 'user.id' changes
  useEffect(() => {
    // Fetch customers by the user's store ID and update 'customers' state
    getCustomersByStoreId(user.id).then(setCustomers);

    // If 'obj' has data, update the 'currentCustomer' state with the provided information
    if (obj.id) {
      setCurrentCustomer({
        id: obj.id,
        customerId: obj.customer_id,
        bookId: obj.book_id,
      });
    }
  }, []);

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update 'currentCustomer' state by merging the new value for the changed input field
    setCurrentCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare payload for adding book to customer
    const payload = {
      customerId: Number(currentCustomer.customer_id),
      bookId: Number(id),
    };
    // Call the 'addBookToCustomer' function and navigate to customer's page after completion
    addBookToCustomer(id, payload).then(() => router.push(`/customers/${currentCustomer.customer_id}`));
  };

  // JSX to render the component
  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingSelect" label="Customer">
        <Form.Select
          aria-label="Customer"
          name="customer_id"
          className="mb-3"
          onChange={handleChange}
          value={currentCustomer.customer_id}
          required
        >
          <option value="">Select a Customer</option>
          {/* Map over customers and create an option element for each */}
          {customers.map((customer) => (
            <option
              key={customer.id}
              value={customer.id}
            >
              {customer.customer_name}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      <div>
        <Button type="submit">Add To Customer</Button>
      </div>
    </Form>
  );
}

// PropTypes for the component's props
AddToCustomer.propTypes = {
  id: PropTypes.number.isRequired, // 'id' is a required number
  obj: PropTypes.shape({
    id: PropTypes.number,
    customer_id: PropTypes.number,
    book_id: PropTypes.number,
  }),
};

// Default props for the component
AddToCustomer.defaultProps = {
  obj: initialState, // Default 'obj' is the initial state object
};

// Summary: this component creates a form that enables users to associate a book with a selected customer by choosing the customer from a dropdown list. The form submission triggers an action to add the book to the chosen customer, and the component provides a user interface for this process.
