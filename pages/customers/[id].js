/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'; // Importing React, 'useState', and 'useEffect'
import Link from 'next/link';
import { useRouter } from 'next/router'; // Importing 'useRouter' hook from 'next/router'
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
    if (window.confirm(`Delete ${customerDetails.customer_name}?`)) {
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
    setCustomerBooks(books);
    // Updating 'customerBooks' state with fetched data
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
      <div className="text-center my-4">
        <div className="d-flex justify-content-between">
          {/* Left column for customer details */}
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.5)',
            padding: '10px',
            flex: '1',
            marginRight: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', // Center content vertically
          }}
          >
            <h3>Customer: {customerDetails.customer_name}</h3>
            <h5>Email: {customerDetails.email}</h5>
            <h5>Phone: {formatPhoneNumber(customerDetails?.phone)}</h5>
          </div>

          {/* Right column for Edit/Delete buttons */}
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.5)', padding: '10px', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}
          >
            {/* Edit button */}
            <Link href={`/customers/edit/${id}`} passHref>
              <a style={{ margin: '1px' }}>
                <img
                  src="https://i.imgur.com/kSIhpbz.png" // Replace with your edit button image source
                  alt="Edit"
                  width="150"
                />
              </a>
            </Link>

            {/* Delete button */}
            <Link href="#" passHref>
              <a onClick={deleteThisCustomer} style={{ margin: '10px' }}>
                <img
                  src="https://i.imgur.com/kRewAa9.png" // Replace with your delete button image source
                  alt="Delete"
                  width="220"
                />
              </a>
            </Link>
          </div>
        </div>

        {/* White border for titles */}
        <div style={{ border: '1px solid rgba(255, 255, 255, 0.5)', padding: '10px', marginTop: '20px' }}>
          {customerBooks.length > 0 ? (
            <div className="d-flex flex-wrap">
              {customerBooks.map((customerBook) => (
                <div
                  key={`customerBook--${customerBook.id}`}
                  className="customerBooks"
                  style={{ margin: '0px' }}
                >
                  <CustomerBookCard customerBookObj={customerBook} onUpdate={getBooksByCustomer} />
                </div>
              ))}
            </div>
          ) : (
            <img src="https://i.imgur.com/gj3Hv5s.png" alt="Gimme Some Comics" />
          )}
        </div>
      </div>
    </>
  );
};

export default ViewCustomer;
