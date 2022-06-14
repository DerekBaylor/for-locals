import axios from "axios";

const dbUrl = "https://localhost:7058/api/Business";

const getAllBusinesses = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbUrl}`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

  const getBusinessById = (busId) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbUrl}/id/${busId}`)
      .then((response) => resolve((response.data)))
      .catch(reject);
  });

  const getBusinessByOwnerId = (ownerId) => new Promise ((resolve, reject) => {
    axios
      .get(`${dbUrl}/ownerId/${ownerId}`)
      .then((response) => resolve((response.data)))
      .catch(reject);
  })

  // add business

 // update business
 
 // delete business

  export {
      getAllBusinesses,
      getBusinessById,
      getBusinessByOwnerId,
  };