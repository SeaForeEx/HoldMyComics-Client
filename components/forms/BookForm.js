/* eslint-disable @next/next/no-img-element */
// Import necessary dependencies and modules
import { useRouter } from 'next/router'; // Importing the router from Next.js
import PropTypes from 'prop-types'; // Importing PropTypes for prop validation
import { useState, useEffect } from 'react'; // Importing useState and useEffect from React
import { Button, Form } from 'react-bootstrap'; // Importing Button and Form components from react-bootstrap
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createBook, updateBook } from '../../utils/data/bookData'; // Importing functions for creating and updating customer data
import { useAuth } from '../../utils/context/authContext'; // Importing authentication context

// Initial state for the customer form
const initialState = {
  imageUrl: 'https://i.pinimg.com/1200x/cd/88/ce/cd88ce40b99078639e39b2237a63fb4d.jpg',
  publisher: '',
  title: '',
  price: '',
  description: '',
  releaseDate: '',
};

// React functional component for rendering a customer form
const BookForm = ({ obj }) => {
  const { user } = useAuth(); // Using the user object from the authentication context
  const router = useRouter(); // Router instance from Next.js
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    // If 'obj' has data, update the 'currentCustomer' state with the provided information
    if (obj.id) {
      setCurrentBook({
        id: obj.id,
        imageUrl: obj.image_url,
        publisher: obj.publisher,
        title: obj.title,
        price: obj.price,
        description: obj.description,
        releaseDate: obj.release_date,
      });
    }
  }, [obj, user]);

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // destructures properties from the e.target object (the DOM element that triggered an event)
    // extracts the input field's name and value from the event object so that you can use them to update the component's state appropriately

    // Update 'currentCustomer' state by merging the new value for the changed input field
    setCurrentBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.id) {
      // If 'obj.id' exists, it's an update operation
      const bookUpdate = {
        id: currentBook.id,
        imageUrl: currentBook.imageUrl,
        publisher: currentBook.publisher,
        title: currentBook.title,
        price: currentBook.price,
        description: currentBook.description,
        releaseDate: currentBook.releaseDate,
      };

      // Call 'updateCustomer' function and navigate to customer's page after completion
      updateBook(bookUpdate)
        .then(() => router.push(`/books/${currentBook.id}`));
    } else {
      // If 'obj.id' doesn't exist, it's a creation operation
      const book = {
        id: currentBook.id,
        imageUrl: currentBook.imageUrl,
        publisher: currentBook.publisher,
        title: currentBook.title,
        price: currentBook.price,
        description: currentBook.description,
        releaseDate: currentBook.releaseDate,
      };

      // Call 'createCustomer' function, get the new customer's data, and navigate to the new customer's page
      createBook(book)
        .then((newBook) => router.push(`/customers/${newBook.id}`));
    }
  };

  // JSX to render the customer form
  return (
    <div style={{ marginTop: '40px' }}>
      <h1>{obj.id ? <img width="400px" src="https://i.imgur.com/OsNdmq4.png" alt="Edit Customer" /> : <img width="400px" src="https://i.imgur.com/gei5cPD.png" alt="New Customer" />}</h1>
      <Form onSubmit={handleSubmit}>
        {/* Form fields for book title */}
        <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://i.imgur.com/hTyStRS.png" alt="Name" style={{ width: '120px', marginRight: '10px' }} /> {/* Add your image source */}
          <Form.Control name="title" placeholder="Book Title" required value={currentBook.title} onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
        </Form.Group>

        {/* Form fields for book publisher */}
        <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://i.imgur.com/cdO3DX8.png" alt="Email" style={{ width: '120px', marginRight: '10px' }} /> {/* Add your image source */}
          <Form.Control name="publisher" placeholder="Book Publisher" required value={currentBook.publisher} onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
        </Form.Group>

        {/* Form fields for book price */}
        <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://i.imgur.com/boPyuW8.png" alt="Phone" style={{ width: '120px', marginRight: '10px' }} /> {/* Add your image source */}
          <Form.Control name="price" placeholder="Book Price" required value={currentBook.price} onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
        </Form.Group>

        {/* Form fields for book description */}
        <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://i.imgur.com/boPyuW8.png" alt="Phone" style={{ width: '120px', marginRight: '10px' }} /> {/* Add your image source */}
          <Form.Control name="description" placeholder="Book Description" required value={currentBook.description} onChange={handleChange} style={{ width: '300px', marginBottom: '10px' }} />
        </Form.Group>

        {/* Form fields for book release date */}
        <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://i.imgur.com/your-image.png" alt="Release Date" style={{ width: '120px', marginRight: '10px' }} />
          <DatePicker
            selected={currentBook.releaseDate ? new Date(currentBook.releaseDate) : null}
            onChange={(date) => setCurrentBook({ ...currentBook, releaseDate: date })}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select Release Date"
            required
            style={{ width: '300px', marginBottom: '10px' }}
          />
        </Form.Group>

        {/* Submit button */}
        <div className="text-left">
          <Button type="submit" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <img
              src="https://i.imgur.com/fKB5LTz.png"
              alt="Submit"
              style={{ width: '200px' }}
            />
          </Button>
        </div>
      </Form>
    </div>
  );
};

// PropTypes for the component's props
BookForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string,
    publisher: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    release_date: PropTypes.string,
  }),
};

// Default props for the component
BookForm.defaultProps = {
  obj: initialState, // Default 'obj' is the initial state object
};

export default BookForm;

// In the CustomerForm component, the obj prop is an object that represents the initial data or the data of the customer you want to display and potentially modify within the form. Depending on how the component is used, the obj prop could serve different purposes (create or update a customer)
