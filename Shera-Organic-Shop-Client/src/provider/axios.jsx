import axios from "axios";
// const instance = axios.create({
//   baseURL: 'http://localhost:3000/api',
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
// });

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Function to determine the content type based on data type
const getContentType = (data) => {
  return data instanceof FormData ? 'multipart/form-data' : 'application/json';
};

// Interceptor to set content type based on data type
instance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = getContentType(config.data);
  return config;
});

export default instance;



// // example of use this instance 
// import axiosInstance from './yourModifiedAxiosInstance';

// // Example of sending JSON data
// const jsonData = {
//   key1: 'value1',
//   key2: 'value2',
// };

// axiosInstance.post('/your-json-endpoint', jsonData)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// // Example of sending FormData
// const formData = new FormData();
// formData.append('key1', 'value1');
// formData.append('key2', 'value2');

// axiosInstance.post('/your-formdata-endpoint', formData)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
