/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'; // Importing React, 'useState', and 'useEffect'
import { useRouter } from 'next/router'; // Importing 'useRouter' hook from 'next/router'
import { Button } from 'react-bootstrap'; // Importing the Button component from react-bootstrap
import { getSingleCustomer, getCustomerBooks, deleteCustomer } from '../../utils/data/customerData'; // Importing functions for fetching customer and customer's books data
import CustomerBookCard from '../../components/cards/CustomerBookCard'; // Importing the 'CustomerBookCard' component

// Defining the 'ViewCustomer' component
const ViewCustomer = () => {
  const router = useRouter(); // Initializing the 'useRouter' hook
  const [customerDetails, setCustomerDetails] = useState({}); // Initializing state for customer details
  const [customerBooks, setCustomerBooks] = useState([]); // Initializing state for customer's books
  const { id } = router.query; // Extracting the 'id' parameter from the router's query

  // Event handler for deleting a customer
  const deleteThisCustomer = () => {
    // Display a confirmation dialog and proceed if the user confirms
    if (window.confirm(`Delete ${customerDetails.customerName}?`)) {
      // Call the 'deleteCustomer' function and update after completion
      deleteCustomer(id).then(() => router.push('/customers'));
    }
  };

  // Function to format phone number
  const formatPhoneNumber = (phoneNumber) => {
    // Use optional chaining to safely access phoneNumber and provide a default value
    phoneNumber = phoneNumber?.trim() || '';

    if (phoneNumber.length === 10) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    }
    return phoneNumber;
  };

  // Effect to fetch and set the customer details
  useEffect(() => {
    getSingleCustomer(id).then((productData) => {
      setCustomerDetails(productData); // Updating 'customerDetails' state with fetched data
    });
  }, [id]);

  // Function to fetch customer's books and update state
  // Declared as async to indicate that it contains asynchronous operations that involve promises.
  const getBooksByCustomer = async () => {
    const books = await getCustomerBooks(id);
    // The await keyword pauses the execution of the function until the promise returned by getCustomerBooks(id) is resolved or rejected
    setCustomerBooks(books); // Updating 'customerBooks' state with fetched data
    // Once the promise is resolved and the data is available, you use the resolved value (books) to update the customerBooks state using the setCustomerBooks function
  };

  // Running the 'getBooksByCustomer' function when 'id' changes
  useEffect(() => {
    getBooksByCustomer();
  }, [id]);

  useEffect(() => {
    // Update document title with the book's title when 'customerDetails' changes
    if (customerDetails) {
      document.title = `${customerDetails.customer_name}!`;
    }
  }, [customerDetails]); // Re-run effect whenever 'customerDetails' changes

  // JSX to render the 'ViewCustomer' component
  return (
    <>
      <div className="text-center mt-5">
        {/* Display customer details */}
        <div className="d-flex flex-column">
          <h3>Customer: {customerDetails.customer_name}</h3>
          <h5>Email: {customerDetails.email}</h5>
          <h5>Phone: {formatPhoneNumber(customerDetails?.phone)}</h5>
          <Button
            style={{ margin: '10px', backgroundColor: '#003049' }}
            onClick={() => {
              // Navigate to the edit view of the customer when clicked
              router.push(`/customers/edit/${id}`);
            }}
          >
            Edit
          </Button>
          {/* Button to delete the customer */}
          <Button
            style={{ margin: '10px', backgroundColor: '#003049' }}
            onClick={deleteThisCustomer}
          >
            Delete
          </Button>
          <h3>Titles:</h3>
        </div>

        {/* Display comic books */}
        <div className="d-flex flex-wrap">
          {customerBooks.map((customerBook) => (
            <div
              key={`customerBook--${customerBook.id}`}
              className="customerBooks"
              style={{ margin: '10px', flex: '0 0 calc(33.33% - 20px)', height: 'auto' }}
            >
              <CustomerBookCard customerBookObj={customerBook} onUpdate={getBooksByCustomer} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewCustomer;
