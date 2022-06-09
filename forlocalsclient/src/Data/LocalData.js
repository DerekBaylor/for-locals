import axios from "axios";

const dbUrl = "https://localhost:7058"

const getLocalById = (uid) =>
new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/api/local/id/${uid}`)
    .then((response) => resolve((response.data)))
    .catch(reject);
});

export {
    getLocalById
};