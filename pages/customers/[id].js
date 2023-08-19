/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSingleCustomer, getCustomerBooks } from '../../utils/data/customerData';
import CustomerBookCard from '../../components/cards/CustomerBookCard';

const ViewCustomer = () => {
  const router = useRouter();
  const [customerDetails, setCustomerDetails] = useState({});
  const [customerBooks, setCustomerBooks] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    getSingleCustomer(id).then((productData) => {
      setCustomerDetails(productData);
    });
  }, [id]);

  const getBooksByCustomer = async () => {
    const books = await getCustomerBooks(id);
    setCustomerBooks(books);
  };

  useEffect(() => {
    getBooksByCustomer();
  }, [id]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <h3>
            Customer: {customerDetails.customer_name}
          </h3>
          <h5>Email: {customerDetails.email}</h5>
          <h3>Titles:</h3>
          {customerBooks.map((customerBook) => (
            <section key={`customerBook--${customerBook.id}`} className="customerBooks">
              <CustomerBookCard customerBookObj={customerBook} onUpdate={getBooksByCustomer} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewCustomer;
