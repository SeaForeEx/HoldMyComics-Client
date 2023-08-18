import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSingleCustomer } from '../../utils/data/customerData';

const ViewCustomer = () => {
  const router = useRouter();
  const [customerDetails, setCustomerDetails] = useState({});
  const { id } = router.query;

  useEffect(() => {
    getSingleCustomer(id).then((productData) => {
      setCustomerDetails(productData);
    });
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
        </div>
      </div>
    </>
  );
};

export default ViewCustomer;
