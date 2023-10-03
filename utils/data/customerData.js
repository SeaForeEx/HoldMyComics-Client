// Import the 'clientCredentials' object from the 'client' module
import { clientCredentials } from '../client';

// Set the 'endpoint' variable to the database URL from 'clientCredentials'
const endpoint = clientCredentials.databaseURL;

// Function to create a new customer
const createCustomer = (customer) => new Promise((resolve, reject) => {
  // Make a POST request to the customers endpoint with the provided customer data
  fetch(`${endpoint}/customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  })
    .then((response) => response.json()) // Parse the response as JSON
    .then(resolve) // Resolve the promise with the parsed JSON data
    .catch(reject); // Reject the promise if an error occurs
});

// Function to get customers by store ID
const getCustomersByStoreId = (storeId) => new Promise((resolve, reject) => {
  // Make a GET request to the customers endpoint with the provided store ID as a query parameter
  fetch(`${endpoint}/customers?storeId=${storeId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json()) // Parse the response as JSON
    .then(resolve) // Resolve the promise with the parsed JSON data
    .catch(reject); // Reject the promise if an error occurs
});

// Function to get a single customer by ID
const getSingleCustomer = (id) => new Promise((resolve, reject) => {
  // Make a GET request to the customers endpoint with the provided customer ID
  fetch(`${endpoint}/customers/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => resolve((data))) // Resolve the promise with the parsed JSON data
    .catch(reject); // Reject the promise if an error occurs
});

// Function to update a customer's data
const updateCustomer = (customer) => new Promise((resolve, reject) => {
  // Make a PUT request to the customers endpoint with the provided customer data
  fetch(`${endpoint}/customers/${customer.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  })
    .then((data) => resolve(data)) // Resolve the promise with the response data
    .catch(reject); // Reject the promise if an error occurs
});

// Function to delete a customer
const deleteCustomer = (customer) => new Promise((resolve, reject) => {
  // Make a DELETE request to the customers endpoint with the provided customer ID
  fetch(`${endpoint}/customers/${customer}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application.json', // Typo: Should be 'application/json'
    },
  })
    .then((data) => resolve(data)) // Resolve the promise with the response data
    .catch(reject); // Reject the promise if an error occurs
});

// Function to get books associated with a customer
const getCustomerBooks = (id) => new Promise((resolve, reject) => {
  // Make a GET request to the customer's endpoint to retrieve their associated books
  fetch(`${endpoint}/customers/${id}/get_books`)
    .then((response) => response.json()) // Parse the response as JSON
    .then(resolve) // Resolve the promise with the parsed JSON data
    .catch(reject); // Reject the promise if an error occurs
});

const getAllCustomerBooks = () => new Promise((resolve, reject) => {
  // Make a GET request to the customers endpoint to retrieve all customer books
  fetch(`${endpoint}/customers/get_all_books`)
    .then((response) => response.json()) // Parse the response as JSON
    .then(resolve) // Resolve the promise with the parsed JSON data
    .catch(reject); // Reject the promise if an error occurs
});

// Export all the functions as part of the module
export {
  createCustomer, getSingleCustomer, getCustomersByStoreId, updateCustomer, deleteCustomer, getCustomerBooks, getAllCustomerBooks,
};
