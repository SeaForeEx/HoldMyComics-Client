import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getAllBooks = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books`, {
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

const getSingleBook = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const addBookToCustomer = (bookId, payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${bookId}/addtocustomer`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const removeBookFromCustomer = (bookId, customerId) => new Promise((resolve, reject) => {
  const requestBody = JSON.stringify({ customerId });
  fetch(`${endpoint}/books/${bookId}/removefromcustomer`, {
    method: 'DELETE',
    body: requestBody,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export {
  getAllBooks, getSingleBook, addBookToCustomer, removeBookFromCustomer,
};
