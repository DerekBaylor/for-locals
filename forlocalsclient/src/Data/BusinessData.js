import axios from "axios";

const dbURL = "https://localhost:7058/api/Business";

const getAllBusinesses = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbURL}`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

  const getBusinessById = (busId) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbURL}/id/${busId}`)
      .then((response) => resolve((response.data)))
      .catch(reject);
  });

  // add business

 // update business
 
 // delete business

  export {
      getAllBusinesses,
      getBusinessById
  };