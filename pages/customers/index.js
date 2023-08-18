/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import CustomerCard from './CustomerCard';
import { getCustomersByStoreId } from '../../utils/data/customerData';

function Customers() {
  const { user } = useAuth();
  const [customers, setCustomers] = useState([]);

  const displayCustomers = () => {
    getCustomersByStoreId(user.id)
      .then((data) => {
        setCustomers(data);
      })
      .catch((error) => {
        console.error('Error fetching records:', error);
      });
  };
  useEffect(() => {
    displayCustomers();
  }, [user]);

  return (
    <article className="text-center my-4" id="customers">
      <h1 style={{ marginTop: '40px' }}>Customers</h1>

      <div>
        <Link href="/customers/new" passHref>
          <Button>Add A Customer</Button>
        </Link>
        {customers.map((customer) => (
          <section
            key={`customer--${customer.id}`}
            className="customer"
            style={{ margin: '40px' }}
            id="customer-section"
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
      </div>
    </article>
  );
}

export default Customers;
