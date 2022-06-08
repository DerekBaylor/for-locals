import axios from "axios";

const dbURL = "https://localhost:7058/api/Review";

const addReview = (obj) => {
    new Promise ((resolve, reject) => {
        axios
        .post(`${dbURL}`, obj).then(resolve).catch(reject);
    });
};

//get review by id

//get reviews by business id

//delete review

export {
    addReview
};