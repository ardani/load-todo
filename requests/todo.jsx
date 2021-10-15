import axios from 'axios';
const baseURL = 'https://jsonplaceholder.typicode.com/';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getTodos = () =>
  new Promise((resolve, reject) =>
    axios({
      url: baseURL + 'todos',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => reject(error)),
  );