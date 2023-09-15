/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// Disable specific ESLint rule for the next line of code
/* eslint-disable jsx-a11y/anchor-is-valid */

// Import necessary dependencies and modules
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'; // Importing the Card component from react-bootstrap
import { useRouter } from 'next/router'; // Importing the router from Next.js

// React functional component for rendering a customer card
const CustomerCard = ({
  id,
  customerName,
}) => {
  const router = useRouter(); // Router instance from Next.js

  // JSX to render the customer card
  return (
    <>
      <Card
        className="text-center"
        style={{
          backgroundColor: 'black', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'white', textShadow: '2px 2px 4px black',
        }}
      >
        <Card.Img
          src="https://i.ebayimg.com/images/g/R~MAAOSwcxpj9VOi/s-l1200.webp"
          alt="comic book pull box"
          style={{ width: '200px', cursor: 'pointer' }}
          onClick={() => {
            // Navigate to the detailed view of the customer when the image is clicked
            router.push(`/customers/${id}`);
          }}
        />
        <Card.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}>
          <h3
            style={{ cursor: 'pointer' }} // Add cursor pointer style for indicating it's clickable
            onClick={() => {
            // Navigate to the detailed view of the customer when clicked
              router.push(`/customers/${id}`);
            }}
          >
            {customerName}
          </h3>
          {/* Button to edit the customer's details */}
        </Card.Body>
      </Card>
    </>
  );
};

// PropTypes for the component's props
CustomerCard.propTypes = {
  id: PropTypes.number.isRequired, // 'id' is a required number
  customerName: PropTypes.string.isRequired, // 'customerName' is a required string
};

export default CustomerCard;
