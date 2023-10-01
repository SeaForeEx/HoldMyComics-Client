/* eslint-disable @next/next/no-img-element */
// Import necessary dependencies and modules
import { useRouter } from 'next/router'; // Importing the router from Next.js
import PropTypes from 'prop-types'; // Importing PropTypes for prop validation
import { useState, useEffect } from 'react'; // Importing useState and useEffect from React
import { Button, Form } from 'react-bootstrap'; // Importing Button and Form components from react-bootstrap
import { createCustomer, updateCustomer } from '../../utils/data/customerData'; // Importing functions for creating and updating customer data
import { useAuth } from '../../utils/context/authContext'; // Importing authentication context

// Initial state for the customer form
const initialState = {
  storeId: 0,
  customerName: '',
  email: '',
  phone: '',
  storeCredit: 0.00,
};

// React functional component for rendering a customer form
const CustomerForm = ({ obj }) => {
  const { user } = useAuth(); // Using the user object from the authentication context
  const [currentCustomer, setCurrentCustomer] = useState({}); // State for the current customer
  const router = useRouter(); // Router instance from Next.js

  useEffect(() => {
    // If 'obj' has data, update the 'currentCustomer' state with the provided information
    if (obj.id) {
      setCurrentCustomer({
        id: obj.id,
        storeId: user.id,
        customerName: obj.customer_name,
        email: obj.email,
        phone: obj.phone,
        storeCredit: obj.store_credit,
      });
    }
  }, [obj, user]);

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // destructures properties from the e.target object (the DOM element that triggered an event)
    // extracts the input field's name and value from the event object so that you can use them to update the component's state appropriately

    // Update 'currentCustomer' state by merging the new value for the changed input field
    setCurrentCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.id) {
      // If 'obj.id' exists, it's an update operation
      const customerUpdate = {
        id: currentCustomer.id,
        storeId: user.id,
        customerName: currentCustomer.customerName,
        email: currentCustomer.email,
        phone: currentCustomer.phone,
        storeCredit: currentCustomer.storeCredit,
      };

      // Call 'updateCustomer' function and navigate to customer's page after completion
      updateCustomer(customerUpdate)
        .then(() => router.push(`/customers/${currentCustomer.id}`));
    } else {
      // If 'obj.id' doesn't exist, it's a creation operation
      const customer = {
        id: currentCustomer.id,
        storeId: user.id,
        customerName: currentCustomer.customerName,
        email: currentCustomer.email,
        phone: currentCustomer.phone,
        storeCredit: currentCustomer.storeCredit,
      };

      // Call 'createCustomer' function, get the new customer's data, and navigate to the new customer's page
      createCustomer(customer)
        .then((newCustomer) => router.push(`/customers/${newCustomer.id}`));
    }
  };

  // JSX to render the customer form
  return (
    <div style={{ marginTop: '40px' }}>
      <h1>{obj.id ? <img width="400px" src="https://i.imgur.com/OsNdmq4.png" alt="Edit Customer" /> : <img width="400px" src="https://i.imgur.com/gei5cPD.png" alt="New Customer" />}</h1>
      <Form onSubmit={handleSubmit}>
        {/* Form fields for customer name */}
        <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://i.imgur.com/hTyStRS.png" alt="Name" style={{ width: '120px', marginRight: '10px' }} /> {/* Add your image source */}
          <Form.Control name="customerName" placeholder="Customer Name" required value={currentCustomer.customerName} onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
        </Form.Group>

        {/* Form fields for customer email */}
        <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://i.imgur.com/cdO3DX8.png" alt="Email" style={{ width: '120px', marginRight: '10px' }} /> {/* Add your image source */}
          <Form.Control name="email" placeholder="Customer Email" required value={currentCustomer.email} onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
        </Form.Group>

        {/* Form fields for customer phone */}
        <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://i.imgur.com/boPyuW8.png" alt="Phone" style={{ width: '120px', marginRight: '10px' }} /> {/* Add your image source */}
          <Form.Control name="phone" placeholder="Customer Phone" required value={currentCustomer.phone} onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
        </Form.Group>

        {/* Form fields for customer store credit */}
        <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://i.imgur.com/3YMdope.png" alt="Credit" style={{ width: '120px', marginRight: '10px' }} /> {/* Add your image source */}
          <Form.Control name="storeCredit" placeholder="Store Credit" required value={currentCustomer.storeCredit} onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
        </Form.Group>

        {/* Submit button */}
        <div className="text-left">
          <Button type="submit" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <img
              src="https://i.imgur.com/fKB5LTz.png"
              alt="Submit"
              style={{ width: '200px' }}
            />
          </Button>
        </div>
      </Form>
    </div>
  );
};

// PropTypes for the component's props
CustomerForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    store_id: PropTypes.number,
    customer_name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    store_credit: PropTypes.number,
  }),
};

// Default props for the component
CustomerForm.defaultProps = {
  obj: initialState, // Default 'obj' is the initial state object
};

export default CustomerForm;

// In the CustomerForm component, the obj prop is an object that represents the initial data or the data of the customer you want to display and potentially modify within the form. Depending on how the component is used, the obj prop could serve different purposes (create or update a customer)
