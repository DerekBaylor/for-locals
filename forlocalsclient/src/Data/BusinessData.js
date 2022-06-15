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

  const getBusinessByOwnerKey = (ownerKey) => new Promise ((resolve, reject) => {
    axios
      .get(`${dbUrl}/ownerKey/${ownerKey}`)
      .then((response) => resolve((response.data)))
      .catch(reject);
  })

  const addBusiness = (obj) => new Promise((resolve, reject) => {
    axios
        .post(`${dbUrl}`, obj)
        .then((response) => resolve(response.data))
        .catch(reject);
});

 const updateBusiness = (id, obj, key) => new Promise((resolve, reject) => {
  //  console.warn('Promise Data:', id, obj, key)
  //  console.warn('Promise dbUrl:', dbUrl)
  axios
      .patch(`${dbUrl}/edit/${id}`, obj)
      .then(() => getBusinessByOwnerKey(key).then(resolve))
      .catch(reject);
});

const deleteBusiness = (id) => new Promise((resolve, reject) => {
  axios
      .delete(`${dbUrl}/${id}`)
      .then(() => getAllBusinesses().then(resolve))
      .catch(reject);
});

  export {
      getAllBusinesses,
      getBusinessById,
      getBusinessByOwnerKey,
      addBusiness,
      updateBusiness,
      deleteBusiness,
  };