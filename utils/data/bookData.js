/* eslint-disable func-names */
import { clientCredentials } from '../client'; // Importing clientCredentials from '../client' (assuming)

const endpoint = clientCredentials.databaseURL; // Assigning the database URL from clientCredentials to 'endpoint'

// Function to fetch all books from the database
const getAllBooks = (date) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books?formattedDate=${date}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// Function to fetch a single book by ID from the database
const getSingleBook = (id) => new Promise((resolve, reject) => {
  // Fetches data using the provided endpoint and the given id
  fetch(`${endpoint}/books/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Function to add a book to a customer's collection
const addBookToCustomer = (bookId, payload) => new Promise((resolve, reject) => {
  // Sending a POST request to the endpoint with the bookId and payload
  fetch(`${endpoint}/books/${bookId}/addtocustomer`, {
    method: 'POST',
    body: JSON.stringify(payload), // Converting payload to JSON string and sending in the request body
    headers: {
      'Content-Type': 'application/json', // Specifying the content type as JSON
    },
  })
    .then((response) => response.json()) // Parsing the response data as JSON
    .then((data) => resolve(data)) // Resolving the promise with the response data
    .catch(reject); // If an error occurs during the fetch or parsing, rejecting the promise with the error
});

// Function to remove a book from a customer's collection
const removeBookFromCustomer = (bookId, customerId) => new Promise((resolve, reject) => {
  // Creating a request body in JSON format containing the 'customerId'
  const requestBody = JSON.stringify({ customerId });

  // Initiating an HTTP DELETE request to the specified endpoint
  fetch(`${endpoint}/books/${bookId}/removefromcustomer`, {
    method: 'DELETE', // Using the DELETE HTTP method
    body: requestBody, // Including the request body with customer ID
    headers: {
      'Content-Type': 'application/json', // Specifying content type as JSON
    },
  })
    .then(resolve) // Resolving the promise if the request is successful
    .catch(reject); // Rejecting the promise if there's an error
});

// Exporting the functions for use in other modules
export {
  getAllBooks,
  getSingleBook,
  addBookToCustomer,
  removeBookFromCustomer,
};
