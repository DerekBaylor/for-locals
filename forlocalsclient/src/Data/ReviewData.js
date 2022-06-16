import axios from "axios";

const dbUrl = "https://localhost:7058";

const getAllReviews = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbUrl}/api/Review`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  })

const getReviewsByBusinessId = (businessId) => new Promise ((resolve, reject) => {
        axios
            .get(`${dbUrl}/review/${businessId}`)
            .then((response) => resolve(Object.values(response.data)))
            .catch(reject);
    });

const addReview = (obj) => new Promise ((resolve, reject) => {
        axios
        .post(`${dbUrl}/api/Review`, obj)
        .then((response) => resolve(response.data))
        .catch(reject);
});

const getReviewById = (revId) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/id/${revId}`)
    .then((response) => resolve((response.data)))
    .catch(reject);
});

const deleteReview = (revId) => new Promise((resolve, reject) => {
    axios
        .delete(`${dbUrl}/api/Review/${revId}`)
        .then(() => getAllReviews().then(resolve))
        .catch(reject);
  });

  const updateReview = (revId, obj, businessId) => new Promise((resolve, reject) => {
    console.warn('Update Promise Data', revId, obj, businessId)
    axios
    .patch(`${dbUrl}/api/Review/edit/${revId}`, obj)
        .then(() => getReviewsByBusinessId(businessId).then(resolve))
        .catch(reject);
  });

export {
    getAllReviews,
    getReviewsByBusinessId,
    addReview,
    getReviewById,
    deleteReview,
    updateReview,
};