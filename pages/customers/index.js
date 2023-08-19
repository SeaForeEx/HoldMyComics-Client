/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'; // Importing React, 'useState', and 'useEffect'
import Link from 'next/link'; // Importing 'Link' component from 'next/link' for client-side navigation
import { Button } from 'react-bootstrap'; // Importing the 'Button' component from 'react-bootstrap'
import { useAuth } from '../../utils/context/authContext'; // Importing the 'useAuth' hook from context
import CustomerCard from '../../components/cards/CustomerCard'; // Importing the 'CustomerCard' component
import { getCustomersByStoreId } from '../../utils/data/customerData'; // Importing function to fetch customers by store ID

// Defining the 'Customers' component
function Customers() {
  const { user } = useAuth(); // Using the 'useAuth' hook to access user information
  const [customers, setCustomers] = useState([]); // Initializing state for customers list

  // Function to fetch and display customers
  const displayCustomers = () => {
    getCustomersByStoreId(user.id)
      .then((data) => {
        setCustomers(data); // Updating 'customers' state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching records:', error); // Handling error if fetching fails
      });
  };

  // Effect to fetch and display customers when user information changes
  useEffect(() => {
    displayCustomers();
  }, [user]);

  // JSX to render the 'Customers' component
  return (
    <article className="text-center my-4" id="customers">
      <h1 style={{ marginTop: '40px' }}>Customers</h1>

      <div>
        {/* Adding a link to navigate to the "Add A Customer" page */}
        <Link href="/customers/new" passHref>
          <Button>Add A Customer</Button>
        </Link>
        <div className="d-flex flex-wrap">
          {/* Mapping through customers and rendering 'CustomerCard' components */}
          {customers.map((customer) => (
            <section
              key={`customer--${customer.id}`}
              className="customer"
              style={{ margin: '10px' }}
            >
              {/* Rendering 'CustomerCard' component and passing customer details and 'displayCustomers' as props */}
              <CustomerCard
                id={customer.id}
                store={customer.store_id}
                customerName={customer.customer_name}
                email={customer.email}
                onUpdate={displayCustomers}
              />
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Customers;

// Summary: This code fetches and displays a list of customers associated with the logged-in user's store. It uses the useAuth hook to access user information, fetches the customers using getCustomersByStoreId, and renders the CustomerCard components for each customer. Additionally, it includes a button to navigate to the "Add A Customer" page using the Link component from next/link.
