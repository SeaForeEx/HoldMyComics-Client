/* eslint-disable object-shorthand */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook
import {
  Navbar, //
  Container,
  Nav,
} from 'react-bootstrap';

export default function NavBar() {
  const router = useRouter(); // Initialize the useRouter hook

  // Function to handle navigation and set the 'week' query parameter
  const handleNavigation = (week) => {
    router.push({
      pathname: '/books',
      query: { week }, // Set the 'week' query parameter
    });
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
            {/* Use onClick to set the 'week' parameter when clicked */}
            <Nav.Link onClick={() => handleNavigation('this')}>This week</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('next')}>Next week</Nav.Link>
            <Link passHref href="/profile">
              <Nav.Link>Profile</Nav.Link>
            </Link>
            <Link passHref href="/profile">
              <Nav.Link>Profile</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
