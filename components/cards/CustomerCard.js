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
          border: 'none', // Remove the border
        }}
      >
        <Card.Img
          src="https://www.guardhouseholders.com/resize?po=https%3A%2F%2Fstorage.googleapis.com%2Ftlimages%2Fproductpics%2F668307.png&bw=1000&w=1000&bh=1000&h=1000"
          alt="comic book pull box"
          style={{ width: '200px', cursor: 'pointer' }}
          onClick={() => {
            // Navigate to the detailed view of the customer when the image is clicked
            router.push(`/customers/${id}`);
          }}
        />
        <Card.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
          <h4
            style={{
              cursor: 'pointer',
              whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
              overflow: 'hidden', // Hide any overflowing text
              textOverflow: 'ellipsis', // Show ellipsis (...) for long names
              maxWidth: '100%', // Ensure the name doesn't exceed the card width
            }}
            onClick={() => {
              // Navigate to the detailed view of the customer when the image is clicked
              router.push(`/customers/${id}`);
            }}
          >
            {customerName}
          </h4>
          {/* Button to edit the customer's details */}
        </Card.Body>
      </Card>
    </div>
  );
};

// PropTypes for the component's props
CustomerCard.propTypes = {
  id: PropTypes.number.isRequired, // 'id' is a required number
  customerName: PropTypes.string.isRequired, // 'customerName' is a required string
};

export default CustomerCard;
