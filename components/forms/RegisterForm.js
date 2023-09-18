/* eslint-disable @next/next/no-img-element */
// Import necessary dependencies and modules
import PropTypes from 'prop-types'; // Importing PropTypes for prop validation
import { useState } from 'react'; // Importing useState from React
import { Button } from 'react-bootstrap'; // Importing the Button component from react-bootstrap
import Form from 'react-bootstrap/Form'; // Importing the Form component from react-bootstrap
import { registerUser } from '../../utils/auth'; // Importing the function for registering a user (update the path as needed)

// React functional component for rendering a user registration form
function RegisterForm({ user, updateUser }) {
  // State to hold the form data
  const [formData, setFormData] = useState({
    user_name: '',
    store_name: '',
    email: '',
    uid: user.uid, // Using 'user.uid' from the prop
  });

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call 'registerUser' function to register the user and then update the user data
    registerUser(formData).then(() => updateUser(user.uid));
  };

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update 'formData' state by merging the new value for the changed input field
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // JSX to render the user registration form
  return (
    <Form style={{ marginTop: '40px' }} onSubmit={handleSubmit}>
      <img width="300 px" src="https://i.imgur.com/mlycwM3.png" alt="Sign Up" />
      {/* Form field for user name */}
      <Form.Group className="mb-3">
        <Form.Label><img src="https://i.imgur.com/hTyStRS.png" alt="Name" style={{ width: '120px', marginRight: '10px' }} /> {/* Add your image source */}</Form.Label>
        <Form.Control
          name="user_name"
          placeholder="User Name"
          required
          value={formData.user_name}
          onChange={handleInputChange}
          style={{ width: '300px', marginBottom: '10px' }}
        />
      </Form.Group>

      {/* Form field for store name */}
      <Form.Group className="mb-3">
        <Form.Label><img src="https://i.imgur.com/9QVpl6x.png" alt="Store" style={{ width: '120px', marginRight: '10px' }} /> {/* Add your image source */}</Form.Label>
        <Form.Control
          name="store_name"
          placeholder="Store Name"
          required
          value={formData.store_name}
          onChange={handleInputChange}
          style={{ width: '300px', marginBottom: '10px' }}
        />
      </Form.Group>

      {/* Form field for email */}
      <Form.Group className="mb-3">
        <Form.Label><img src="https://i.imgur.com/cdO3DX8.png" alt="Email" style={{ width: '120px', marginRight: '10px' }} /> {/* Add your image source */}</Form.Label>
        <Form.Control
          name="email"
          placeholder="Store Email"
          required
          value={formData.email}
          onChange={handleInputChange}
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
  );
}

// PropTypes for the component's props
RegisterForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number, // 'id' is a number
    user_name: PropTypes.string, // 'user_name' is a string
    store_name: PropTypes.string, // 'store_name' is a string
    email: PropTypes.string, // 'email' is a string
    uid: PropTypes.string.isRequired, // 'uid' is a required string
  }).isRequired, // 'user' is a required object with specific nested shapes
  updateUser: PropTypes.func.isRequired, // 'updateUser' is a required function
};

export default RegisterForm;
