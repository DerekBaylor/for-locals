import axios from "axios";

const dbURL = "https://localhost:7058/api";

const getAllBusinesses = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbURL}/Business`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

  const getBusinessById = (busId) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbURL}/Business/id/${busId}`)
      .then((response) => resolve((response.data)))
      .catch(reject);
  });

  export {
      getAllBusinesses,
      getBusinessById
  };