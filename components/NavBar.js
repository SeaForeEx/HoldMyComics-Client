/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable object-shorthand */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook
import {
  Navbar, //
  Container,
  Nav,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker'; // Import the date picker
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker styles

export default function NavBar() {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState(null); // Initialize the selected date state

  const handleDateChange = (date) => {
    // Handle date selection and set the 'week' query parameter
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.toISOString().split('T')[0];
      router.push({
        pathname: '/books',
        query: { formattedDate },
      });
    } else {
      // Handle clearing the date (e.g., when clicking "This Week" or "Next Week")
      router.push('/books');
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>HOLD MY COMICS!</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/customers">
              <Nav.Link>Customers</Nav.Link>
            </Link>
            <div className="nav-link">
              {/* Render the date picker */}
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="Select a date"
              />
            </div>
            <Link passHref href="/profile">
              <Nav.Link>Profile</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
