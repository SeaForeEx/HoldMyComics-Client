import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, updateUser }) {
  const [formData, setFormData] = useState({
    user_name: '',
    store_name: '',
    email: '',
    uid: user.uid,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.uid));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          name="user_name"
          required
          value={formData.user_name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Store Name</Form.Label>
        <Form.Control
          name="store_name"
          required
          value={formData.store_name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    user_name: PropTypes.string,
    store_name: PropTypes.string,
    email: PropTypes.string,
    uid: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
