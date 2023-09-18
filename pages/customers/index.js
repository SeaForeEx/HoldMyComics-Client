/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'; // Importing React, 'useState', and 'useEffect'
import Link from 'next/link'; // Importing 'Link' component from 'next/link' for client-side navigation
import { Button, Card } from 'react-bootstrap'; // Importing the 'Button' component from 'react-bootstrap'
import { useAuth } from '../../utils/context/authContext'; // Importing the 'useAuth' hook from context
import CustomerCard from '../../components/cards/CustomerCard'; // Importing the 'CustomerCard' component
import { getCustomersByStoreId } from '../../utils/data/customerData'; // Importing function to fetch customers by store ID

// Defining the 'Customers' component
function CustomerList() {
  const { user } = useAuth(); // Using the 'useAuth' hook to access user information
  const [customers, setCustomers] = useState([]); // Initializing state for customers list

  // Function to fetch and display customers
  const displayCustomers = () => {
    getCustomersByStoreId(user.id)
      .then((data) => {
        setCustomers(data); // Updating 'customers' state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching customers:', error); // Handling error if fetching fails
      });
  };

  // Effect to fetch and display customers when user information changes
  useEffect(() => {
    displayCustomers();
    document.title = 'CUSTOMERS!';
  }, [user]);

  // JSX to render the 'Customers' component
  return (
    <article className="text-center my-4" id="customers">
      <h1 style={{ marginTop: '40px' }}>
        <img
          src="https://i.imgur.com/rlpHtqK.png"
          alt="Customers Logo"
          style={{ width: '420px', height: 'auto' }}
        />
      </h1>

      <div>
        <div className="d-flex flex-wrap">
          {customers.map((customer, index) => (
            <section
              key={`customer--${customer.id}`}
              className="customer"
              style={{ margin: '10px' }}
            >
              <CustomerCard
                id={customer.id}
                store={customer.store_id}
                customerName={customer.customer_name}
                email={customer.email}
                onUpdate={displayCustomers}
              />
            </section>
          ))}

          {/* "New Customer" card outside of the map loop */}
          <section
            className="customer"
            style={{
              margin: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link href="/customers/new" passHref>
              <div style={{ width: '200px', height: '300px', margin: '5px' }}>
                <Card
                  className="text-center"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    color: 'white',
                    textShadow: '2px 2px 4px black',
                    border: 'none',
                  }}
                >
                  <Card.Img
                    src="https://www.guardhouseholders.com/resize?po=https%3A%2F%2Fstorage.googleapis.com%2Ftlimages%2Fproductpics%2F668307.png&bw=1000&w=1000&bh=1000&h=1000"
                    alt="comic book pull box"
                    style={{ width: '200px', cursor: 'pointer' }}
                  />
                  <Card.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
                    <h4
                      style={{
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                      }}
                    >
                      New Customer
                    </h4>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          </section>

        </div>
      </div>
    </article>
  );
}

export default CustomerList;

// Summary: This code fetches and displays a list of customers associated with the logged-in user's store. It uses the useAuth hook to access user information, fetches the customers using getCustomersByStoreId, and renders the CustomerCard components for each customer. Additionally, it includes a button to navigate to the "Add A Customer" page using the Link component from next/link.
