import axios from "axios";

const dbUrl = "https://localhost:7058";
// const dbUrl = "https://localhost:7058/api/Review";

const getReviewsByBusinessId = (businessId) =>
    new Promise ((resolve, reject) => {
        axios
            .get(`${dbUrl}/busId/${businessId}`)
            .then((response) => resolve(Object.values(response.data)))
            .catch(reject);
    });

const addReview = (obj) =>
    new Promise ((resolve, reject) => {
        axios
            .post(`${dbUrl}`, obj).then(resolve).catch(reject);
    });

//get review by id

//delete review

export {
    getReviewsByBusinessId,
    addReview,
};