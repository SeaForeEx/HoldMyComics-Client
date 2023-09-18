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
    <div className="container" style={{ marginTop: '40px' }}>
      <div className="row">
        <div className="col-md-3">
          {/* Hold My Comics Picture */}
          <div>
            <div className="p-2 text-center">
              <img
                width="300px"
                src="https://i.imgur.com/nZ3Pyht.png"
                alt="WELCOME!"
              />
              <h1 className="text-center">{user.store_name}!</h1>
            </div>
          </div>
          {/* Username and Email */}
          <div className="mt-3">
            <div className="p-2">
              <h4 className="text-center">User Name: {user.user_name}</h4>
              <h4 className="text-center">{user.email}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          {/* Weekly Books Carousel */}
          <div>
            {weeklyBooks.length > 0 ? (
              <Carousel {...carouselOptions}>
                {weeklyBooks.map((book) => (
                  <div key={book.id}>
                    <img
                      src={book.image_url}
                      alt={`Cover of ${book.title}`}
                      style={{ width: 300 }}
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              <p>No weekly titles available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
