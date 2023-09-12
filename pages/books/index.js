/* eslint-disable react-hooks/exhaustive-deps */ // Disable specific ESLint rule for the next line
import React, { useState, useEffect } from 'react'; // Importing React, useState, and useEffect from React
import { useRouter } from 'next/router';
import BookCard from '../../components/cards/BookCard'; // Importing the 'BookCard' component
import { getAllBooks } from '../../utils/data/bookData'; // Importing function to fetch all books

// React functional component for displaying a list of books
function BookList() {
  const router = useRouter();
  const [books, setBooks] = useState([]);
  const [pickedMondayDate, setPickedMondayDate] = useState('');

  const getMondayDate = (dateString) => {
    const selectedDate = new Date(dateString);
    const dayOfWeek = selectedDate.getDay(); // 0 (Sunday) to 6 (Saturday)
    const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek; // Calculate days until next Monday
    const mondayDate = new Date(selectedDate);
    mondayDate.setDate(selectedDate.getDate() + daysUntilMonday);
    // Format the date as "Month Day, Year" (e.g., "September 4, 2023")
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return mondayDate.toLocaleDateString(undefined, options);
  };

  const displayBooks = () => {
    getAllBooks(router.query.formattedDate) // Call the getAllBooks function with the selected 'week' as a parameter
      .then((data) => {
        setBooks(data); // Set the 'books' state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching books:', error); // Log an error message if there's an issue fetching the books
      });
  };

  useEffect(() => {
    // Get the selected week from the query parameters
    const selectedDateQueryParam = router.query.formattedDate;

    if (selectedDateQueryParam) {
      // Calculate the Monday date for the selected week
      const selectedMondayDate = getMondayDate(selectedDateQueryParam);
      setPickedMondayDate(selectedMondayDate);

      // Fetch and display books for the selected week
      displayBooks(selectedDateQueryParam);
    } else {
      // If no date is selected, calculate and set this week's Monday date
      getMondayDate();
    }
  }, [router.query.formattedDate]);

  // Effect to display books when the component mounts
  useEffect(() => {
    document.title = 'COMIC BOOKS!';
  }, []);

  // JSX to render the list of books
  return (
    <article className="text-center my-4" id="books">
      <h1 style={{ marginTop: '40px' }}>Comics Released The Week of {pickedMondayDate}</h1>

      <div className="d-flex flex-wrap">
        {/* Loop through 'books' array and render each book */}
        {books.map((book) => (
          <section
            key={`book--${book.id}`} // Using book's ID as the key
            className="book"
            style={{ margin: '10px', flex: '0 0 calc(33.33% - 20px)', height: 'auto' }}
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
    </article>
  );
}

// Export the component as the default export
export default BookList;

// Passing the displayBooks function as a prop to the BookCard component allows you to trigger a refresh of the book list when an action is performed within the BookCard component that requires updating the book data. It  allows for better communication and coordination between components. It enables the BookCard component to trigger an update in the parent Books component when needed, ensuring that changes in the child component are reflected in the overall application state.

// Parent: 'Books' - It displays a list of books, fetches the book data and manages the state of the book list. It renders the BookCard components for each book.
// Child: 'BookCard' - It represents an individual book card. It receives book details as props and displays them.

// The parent Books component fetches the book data using the getAllBooks function, stores it in the books state, and passes the relevant book details to each BookCard child component through props. This allows the BookCard components to display individual book information and also trigger updates in the parent component when necessary.
