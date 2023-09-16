/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable object-shorthand */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker'; // Import the date picker
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker styles
import { signOut } from '../utils/auth'; // Importing signOut function from auth utilities

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

  useEffect(() => {
    // Reset the selectedDate when the route changes
    setSelectedDate(null);
  }, [router.asPath]);

  // router.asPath refers to a property of the router object returned by Next.js's useRouter hook. It represents the current URL path as a string.

  // When a user clicks on a navigation link in the Navbar component (e.g., "Home," "Customers," "Profile"), it triggers a page navigation within your Next.js application.

  // The useEffect hook in your Navbar component listens for changes in the router.asPath. It does this by specifying [router.asPath] as a dependency in the useEffect. This means that whenever the URL path changes, the code inside the useEffect will run.

  // When the URL path changes, the useEffect callback is executed, and it sets the selectedDate state to null. This effectively clears the selected date in the DatePicker component.

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>HOLD MY COMICS!</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/customers">
              <Nav.Link style={{ fontSize: '18px' }}>CUSTOMERS</Nav.Link>
            </Link>
            <div className="nav-link">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="SELECT A DATE"
              />
            </div>
            <Link passHref href="/searchBooks">
              <Nav.Link style={{ fontSize: '18px' }}>SEARCH &spc;</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button> {/* Displaying a "Sign Out" button that calls the signOut function */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
