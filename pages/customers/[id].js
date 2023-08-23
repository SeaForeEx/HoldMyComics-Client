/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'; // Importing React, 'useState', and 'useEffect'
import { useRouter } from 'next/router'; // Importing 'useRouter' hook from 'next/router'
import { getSingleCustomer, getCustomerBooks } from '../../utils/data/customerData'; // Importing functions for fetching customer and customer's books data
import CustomerBookCard from '../../components/cards/CustomerBookCard'; // Importing the 'CustomerBookCard' component

// Defining the 'ViewCustomer' component
const ViewCustomer = () => {
  const router = useRouter(); // Initializing the 'useRouter' hook
  const [customerDetails, setCustomerDetails] = useState({}); // Initializing state for customer details
  const [customerBooks, setCustomerBooks] = useState([]); // Initializing state for customer's books
  const { id } = router.query; // Extracting the 'id' parameter from the router's query

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
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          {/* Displaying customer details */}
          <h3>
            Customer: {customerDetails.customer_name}
          </h3>
          <h5>Email: {customerDetails.email}</h5>
          <h3>Titles:</h3>
          {/* Mapping through customer's books and rendering 'CustomerBookCard' components */}
          {customerBooks.map((customerBook) => (
            <section key={`customerBook--${customerBook.id}`} className="customerBooks">
              {/* Rendering 'CustomerBookCard' component and passing customer book details and 'getBooksByCustomer' as props */}
              <CustomerBookCard customerBookObj={customerBook} onUpdate={getBooksByCustomer} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewCustomer;
