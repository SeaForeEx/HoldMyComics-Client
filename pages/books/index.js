/* eslint-disable react-hooks/exhaustive-deps */ // Disable specific ESLint rule for the next line
import React, { useState, useEffect } from 'react'; // Importing React, useState, and useEffect from React
import { useRouter } from 'next/router';
import BookCard from '../../components/cards/BookCard'; // Importing the 'BookCard' component
import { getAllBooks } from '../../utils/data/bookData'; // Importing function to fetch all books

// React functional component for displaying a list of books
function BookList() {
  const router = useRouter();
  const [books, setBooks] = useState([]);
  const [currentWeekMondayDate, setCurrentWeekMondayDate] = useState('');

  const displayBooks = () => {
    getAllBooks(router.query.week) // Call the getAllBooks function with the selected 'week' as a parameter
      .then((data) => {
        setBooks(data); // Set the 'books' state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching books:', error); // Log an error message if there's an issue fetching the books
      });
  };

  const getCurrentWeekMondayDate = () => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
    const daysUntilMonday = dayOfWeek === 0 ? 6 : 1 - dayOfWeek; // Calculate days until Monday
    const mondayDate = new Date(currentDate);
    mondayDate.setDate(currentDate.getDate() + daysUntilMonday);

    // Format the date as "Month Day, Year" (e.g., "September 4, 2023")
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = mondayDate.toLocaleDateString(undefined, options);

    setCurrentWeekMondayDate(formattedDate);
  };

  // Function to calculate the next week's Monday date
  const getNextWeekMondayDate = () => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
    const daysUntilMonday = dayOfWeek === 0 ? 7 : 8 - dayOfWeek; // Calculate days until next Monday
    const nextMondayDate = new Date(currentDate);
    nextMondayDate.setDate(currentDate.getDate() + daysUntilMonday);

    // Format the date as "Month Day, Year" (e.g., "September 4, 2023")
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = nextMondayDate.toLocaleDateString(undefined, options);

    return formattedDate;
  };

  // Effect to display books when the component mounts
  useEffect(() => {
    displayBooks(); // Calling 'displayBooks' to fetch and update book data
    document.title = 'COMIC BOOKS!';

    // Get the selected week from the query parameters
    const selectedWeek = router.query.week;
    if (selectedWeek === 'next') {
      // If "Next Week" is selected, calculate and set next week's Monday date
      const nextMondayDate = getNextWeekMondayDate();
      setCurrentWeekMondayDate(nextMondayDate);
    } else {
      // If "This Week" or no week selected, calculate and set this week's Monday date
      getCurrentWeekMondayDate();
    }
  }, [router.query.week]);

  // JSX to render the list of books
  return (
    <article className="text-center my-4" id="books">
      <h1 style={{ marginTop: '40px' }}>Comics Released The Week of {currentWeekMondayDate}</h1>

      <div>
        <div className="d-flex flex-wrap">
          {/* Loop through 'books' array and render each book */}
          {books.map((book) => (
            <section
              key={`book--${book.id}`} // Using book's ID as the key
              className="book"
              style={{ margin: '10px' }}
            >
              {/* Render the 'BookCard' component with book details */}
              <BookCard
                id={book.id}
                imageUrl={book.image_url}
                title={book.title}
                onUpdate={displayBooks} // Pass 'displayBooks' as a prop for updating
              />
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

// Export the component as the default export
export default BookList;

// Passing the displayBooks function as a prop to the BookCard component allows you to trigger a refresh of the book list when an action is performed within the BookCard component that requires updating the book data. It  allows for better communication and coordination between components. It enables the BookCard component to trigger an update in the parent Books component when needed, ensuring that changes in the child component are reflected in the overall application state.

// Parent: 'Books' - It displays a list of books, fetches the book data and manages the state of the book list. It renders the BookCard components for each book.
// Child: 'BookCard' - It represents an individual book card. It receives book details as props and displays them.

// The parent Books component fetches the book data using the getAllBooks function, stores it in the books state, and passes the relevant book details to each BookCard child component through props. This allows the BookCard components to display individual book information and also trigger updates in the parent component when necessary.
