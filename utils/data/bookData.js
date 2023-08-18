import { clientCredentials } from '../client';

const getAllBooks = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/books`, {
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
  fetch(`${clientCredentials.databaseURL}/books/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

export {
  getAllBooks, getSingleBook,
};
