/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useLocalStorage from 'use-local-storage';
import Switch from 'react-switch';
import { useRouter } from 'next/router';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { signOut } from '../utils/auth';

export default function NavBar() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundImage = 'url("https://cdn.wallpapersafari.com/56/21/YxnDBe.jpg")';
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundImage = 'url("https://i.imgur.com/2hNEBQp.jpg")';
      document.body.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      document.body.style.color = '#000';
    }
  }, [theme]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.toISOString().split('T')[0];
      router.push({
        pathname: '/books',
        query: { formattedDate },
      });
    } else {
      router.push('/books');
    }
  };

  useEffect(() => {
    setSelectedDate(null);
  }, [router.asPath]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        backgroundColor: theme === 'dark' ? '#333' : '#1471e3',
        color: '#fff',
      }}
      variant="dark"
      className="d-flex justify-content-center" // Center the items horizontally
    >
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <img
              src="https://i.imgur.com/F7CqgQM.png"
              alt="Hold My Comics Logo"
              style={{ width: '300px', height: 'auto' }}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/customers">
              <Nav.Link>
                <img
                  src="https://i.imgur.com/rlpHtqK.png"
                  alt="Customers Logo"
                  style={{ width: '200px', height: 'auto' }}
                />
              </Nav.Link>
            </Link>
            <div className="d-flex align-items-center">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="SELECT A DATE"
              />
            </div>
            <Link passHref href="/searchBooks">
              <Nav.Link>
                <img
                  src="https://i.imgur.com/Fcb3wdK.png"
                  alt="Search Logo"
                  style={{ width: '150px', height: 'auto' }}
                />
              </Nav.Link>
            </Link>
            <div className="d-flex align-items-center">
              <Link href="#" passHref>
                <a onClick={signOut} style={{ display: 'inline-block' }}>
                  <img
                    src="https://i.imgur.com/QS3Ey4n.png"
                    alt="Sign Out"
                    style={{ width: 'auto', height: '40px' }}
                  />
                </a>
              </Link>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="d-flex align-items-center">
              <span style={{ marginRight: '10px', fontSize: '18px' }}>
                {theme === 'dark' ? (
                  <img src="https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1966.png" alt="Batman Icon" width={40} />
                ) : (
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png" alt="Superman Icon" width={40} />
                )}
              </span>
              <Switch
                checked={theme === 'dark'}
                onChange={switchTheme}
                onColor="#e2e622"
                offColor="#e31212"
                onHandleColor="#fff"
                offHandleColor="#fff"
                activeBoxShadow="0 0 2px 3px #333"
                checkedIcon={false}
                uncheckedIcon={false}
                height={30}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
