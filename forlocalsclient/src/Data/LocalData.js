import axios from "axios";
import {getToken} from './authManager';

const dbUrl = "https://localhost:7058/api/Local/";

const getLocals = () => new Promise((resolve, reject) => {
  return getToken().then((token) => {
    axios
        .get(`${dbUrl}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => resolve(response.data))
        .catch(reject);
  });
});

const getLocalById = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}id/${uid}`)
    .then((response) => resolve((response.data)))
    .catch(reject);
});

const addLocal = (local) => new Promise((resolve, reject) => {
  return getToken().then((token) => {
    axios
        .post(`${dbUrl}`, local, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => resolve(response.data))
        .catch(reject);
  });
});

const updateLocal = (local) => new Promise((resolve, reject) => {
  return getToken().then((token) => {
      axios
          .post(`${dbUrl}`, local, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          })
          .then(() => getLocals().then(resolve))
          .catch(reject);
  });
});

const deleteLocalSqlDB = (local) => new Promise((resolve, reject) => {
  return getToken().then((token) => {
      axios
          .post(`${dbUrl}`, local, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          })
          .then(() => getLocals().then(resolve))
          .catch(reject);
  });
});

export {
    getLocals,
    getLocalById,
    addLocal,
    updateLocal,
    deleteLocalSqlDB,
};