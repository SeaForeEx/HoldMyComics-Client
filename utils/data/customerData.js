import { clientCredentials } from '../client';

const createCustomer = (customer) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getCustomersByStoreId = (storeId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/customers?storeId=${storeId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleCustomer = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/customers/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const updateCustomer = (customer) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/customers/${customer.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteCustomer = (customer) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/customers/${customer}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application.json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  createCustomer, getSingleCustomer, getCustomersByStoreId, updateCustomer, deleteCustomer,
};
