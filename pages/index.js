/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useAuth } from '../utils/context/authContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { getBooksThisWeek } from '../utils/data/bookData';

function Home() {
  const { user } = useAuth();
  const [weeklyBooks, setWeeklyBooks] = useState([]);

  useEffect(() => {
    document.title = 'HOLD MY COMICS!'; // Set the desired title

    // Fetch the books coming out this week and update the state
    getBooksThisWeek()
      .then((data) => {
        setWeeklyBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching weekly books:', error);
      });
  }, []);

  // Configure carousel options
  const carouselOptions = {
    autoPlay: true, // Enable automatic sliding
    interval: 3000, // Slide interval in milliseconds (adjust as needed)
    infiniteLoop: true, // Allow infinite looping
    showArrows: false, // Hide navigation arrows
    showStatus: false, // Hide status indicators
    showThumbs: false, // Hide thumbnail navigation
    showIndicators: false, // Hide dot indicators
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        // maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome To HOLD MY COMICS, {user.store_name}!</h1>
      <br />
      {weeklyBooks.length > 0 ? (
        <Carousel {...carouselOptions}>
          {weeklyBooks.map((book) => (
            <div key={book.id}>
              <img
                src={book.image_url}
                alt={`Cover of ${book.title}`}
                style={{ width: 300, cursor: 'pointer' }}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <p>No weekly titles available.</p>
      )}
      <br />
      <h4>User Name: {user.user_name}</h4>
      <h4>Contact: {user.email}</h4> {/* Displaying the contact email */}
    </div>
  );
}

export default Home;
