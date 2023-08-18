/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { deleteCustomer, getSingleCustomer } from '../../utils/data/customerData';

const CustomerCard = ({
  id,
  customerName,
  email,
  onUpdate,
}) => {
  const deleteThisCustomer = () => {
    if (window.confirm('Delete Customer?')) {
      deleteCustomer(id).then(() => onUpdate());
    }
  };
  const router = useRouter();

  const [, setCustomerDetails] = useState({});
  useEffect(() => {
    getSingleCustomer(id).then((customerData) => {
      setCustomerDetails(customerData);
    });
  }, [id]);

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <h3>{customerName}</h3>
          <p>{email}</p>
          <Button
            style={{ margin: '10px', backgroundColor: '#003049' }}
            onClick={() => {
              router.push(`/customers/${id}`);
            }}
          >View
          </Button>
          <Button
            style={{ margin: '10px', backgroundColor: '#003049' }}
            onClick={() => {
              router.push(`/customers/edit/${id}`);
            }}
          >
            Edit
          </Button>
          <Button
            style={{ margin: '10px', backgroundColor: '#003049' }}
            onClick={deleteThisCustomer}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

CustomerCard.propTypes = {
  id: PropTypes.number.isRequired,
  customerName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CustomerCard;
